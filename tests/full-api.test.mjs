import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createClinicaClient } from "../dist/index.js";
const read = async (name) =>
  JSON.parse(
    await readFile(new URL(`../openapi/${name}.json`, import.meta.url), "utf8"),
  );
const spec = await read("swagger");
const operations = await read("operations");
const get = (client, name) =>
  name.split(".").reduce((value, key) => value[key], client);
function argsFor(op) {
  return Object.fromEntries(
    op.arguments.map((a) => [
      a.name,
      op.parameters.find((p) => p.field === a.name)?.array
        ? [0, 2]
        : a.name === op.bodyField
          ? { Null: null, False: false, Zero: 0 }
          : "a/b +&",
    ]),
  );
}
test("all 588 raw routes preserve bindings, body, deployment prefix and area identity", async () => {
  let request;
  const client = createClinicaClient({
    baseUrl: "https://main.test/prefix",
    accessToken: "main",
    online: { baseUrl: "https://online.test/prefix", accessToken: "online" },
    referring: {
      baseUrl: "https://referring.test/prefix",
      accessToken: "referring",
    },
    fetch: async (url, init) => {
      request = { url: new URL(url), init };
      return new Response(null, { status: 204 });
    },
  });
  const counts = { main: 0, online: 0, referring: 0 };
  for (const op of operations) {
    counts[op.area]++;
    const args = argsFor(op);
    const response = await get(
      client,
      op.rawMethod,
    )(...(op.arguments.length ? [args] : []));
    assert.equal(response.status, 204);
    const source = spec.paths[op.path][op.method];
    assert.equal(source.operationId, op.operationId);
    assert.equal(request.init.method, op.method.toUpperCase());
    assert.equal(
      request.init.headers.get("Authorization"),
      `Bearer ${op.area}`,
    );
    assert.equal(request.url.hostname, `${op.area}.test`);
    let path = op.path;
    for (const p of [
      ...(spec.paths[op.path].parameters ?? []),
      ...(source.parameters ?? []),
    ]) {
      const binding = op.parameters.find(
        (b) => b.name.toLowerCase() === p.name.toLowerCase() && b.in === p.in,
      );
      assert.ok(binding, `${op.operationId}: ${p.name}`);
      const value = args[binding.field];
      if (p.in === "path")
        path = path.replace(
          new RegExp(`\\{${p.name}\\}`, "i"),
          encodeURIComponent(String(value)),
        );
      else
        assert.deepEqual(
          request.url.searchParams.getAll(p.name),
          Array.isArray(value) ? value.map(String) : [String(value)],
        );
    }
    assert.equal(request.url.pathname, `/prefix${path}`, op.operationId);
    assert.equal(
      request.init.body,
      source.requestBody ? JSON.stringify(args[op.bodyField]) : undefined,
    );
  }
  assert.deepEqual(counts, { main: 513, online: 63, referring: 12 });
});
test("omitted area identities never inherit the main bearer token", async () => {
  const client = createClinicaClient({
    baseUrl: "https://test.test",
    accessToken: "secret",
    fetch: async (url, init) => {
      assert.equal(init.headers.get("Authorization"), null);
      return new Response(null, { status: 204 });
    },
  });
  for (const area of ["online", "referring"]) {
    const op = operations.find((o) => o.area === area);
    await get(
      client,
      op.rawMethod,
    )(...(op.arguments.length ? [argsFor(op)] : []));
  }
});
test("inline credentials are lazy, cached and isolated per area", async () => {
  const calls = [];
  const credentials = (id) => ({
    clientId: id,
    clientSecret: "secret",
    scopes: [id],
    tokenUrl: "https://identity.test/token",
  });
  const client = createClinicaClient({
    baseUrl: "https://api.test",
    clientCredentials: credentials("main"),
    online: { clientCredentials: credentials("online") },
    referring: { clientCredentials: credentials("referring") },
    fetch: async (url, init) => {
      if (String(url) === "https://identity.test/token") {
        const id = init.body.get("client_id");
        calls.push(id);
        return Response.json({
          access_token: id,
          token_type: "Bearer",
          expires_in: 3600,
        });
      }
      const expected = String(url).includes("/online/")
        ? "online"
        : String(url).includes("/referringDoctor/")
          ? "referring"
          : "main";
      assert.equal(init.headers.get("Authorization"), `Bearer ${expected}`);
      return new Response(null, { status: 204 });
    },
  });
  assert.deepEqual(calls, []);
  for (const area of ["main", "online", "referring"]) {
    const op = operations.find((o) => o.area === area);
    for (let i = 0; i < 2; i++)
      await get(
        client,
        op.rawMethod,
      )(...(op.arguments.length ? [argsFor(op)] : []));
  }
  assert.deepEqual(calls, ["main", "online", "referring"]);
});
test("every generated JSON, text and unknown reader consumes its success contract", async () => {
  let body, headers, status;
  const client = createClinicaClient({
    baseUrl: "https://api.test",
    fetch: async () => new Response(body, { headers, status }),
  });
  for (const op of operations.filter((o) => o.reader !== "raw"))
    for (const [code, reader] of Object.entries(op.reader)) {
      status = Number(code);
      headers = {};
      let expected;
      if (reader.kind === "empty") {
        body = null;
        expected = undefined;
      } else if (reader.kind === "text") {
        expected = "Hello";
        body = reader.charset.toLowerCase().startsWith("utf-16")
          ? new Uint8Array([72, 0, 101, 0, 108, 0, 108, 0, 111, 0])
          : expected;
      } else {
        expected = { value: false, count: 0 };
        body = JSON.stringify(expected);
        headers = { "content-type": "application/json" };
      }
      const name = op.sdkMethods.find(
        (n) => n !== op.rawMethod && n !== op.streamMethod,
      );
      assert.deepEqual(
        await get(client, name)(...(op.arguments.length ? [argsFor(op)] : [])),
        expected,
        op.operationId,
      );
    }
});
test("every report iterator yields rows", async () => {
  const client = createClinicaClient({
    baseUrl: "https://api.test",
    fetch: async () => Response.json([{ id: 0 }, { id: 2 }]),
  });
  const streams = operations.filter((o) => o.streamMethod);
  assert.equal(streams.length, 6);
  for (const op of streams)
    assert.deepEqual(
      await Array.fromAsync(
        get(
          client,
          op.streamMethod,
        )(...(op.arguments.length ? [argsFor(op)] : [])),
      ),
      [{ id: 0 }, { id: 2 }],
    );
});

test("required arguments fail before I/O and unknown binary responses release ownership", async () => {
  let sent = 0;
  let cancelled = false;
  const client = createClinicaClient({
    baseUrl: "https://api.test",
    fetch: async () => {
      sent++;
      return new Response(
        new ReadableStream({
          cancel() {
            cancelled = true;
          },
        }),
        { headers: { "content-type": "application/octet-stream" } },
      );
    },
  });
  assert.throws(
    () => client.patients.getAnalysisConclusionResponse({ patientId: 1 }),
    /Missing required/,
  );
  assert.equal(sent, 0);
  const op = operations.find(
    (o) => o.reader !== "raw" && o.reader["200"]?.kind === "unknown",
  );
  const method = op.sdkMethods.find((n) => n !== op.rawMethod);
  await assert.rejects(
    () => get(client, method)(...(op.arguments.length ? [argsFor(op)] : [])),
    /Response method/,
  );
  assert.equal(cancelled, true);
});
