import { test } from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { createServer } from "node:http";
import { gzipSync } from "node:zlib";
import { createClinicaClient, ApiError } from "../dist/index.js";
import { createClientCredentialsProvider } from "../dist/auth/index.js";

const baseUrl = "https://example.test/deployment";
const query = {
  dateStart: "2026-01-01T00:00:00+02:00",
  dateEnd: "2026-02-01T00:00:00+02:00",
  clinicId: 0,
};
const identity = { patientId: 12, analysisId: 34 };
const encoder = new TextEncoder();
const clientWith = (fetch) => createClinicaClient({ baseUrl, fetch });

test("CJS auth and client share ApiError identity and support streaming", async () => {
  const require = createRequire(import.meta.url);
  const sdk = require("@clinica-web/sdk");
  const auth = require("@clinica-web/sdk/auth");
  const provider = auth.createClientCredentialsProvider({
    clientId: "id",
    clientSecret: "secret",
    scopes: [],
    fetch: async () => new Response("denied", { status: 401 }),
  });
  await assert.rejects(
    provider.getAccessToken(),
    (error) => error instanceof sdk.ApiError,
  );
  const client = sdk.createClinicaClient({
    baseUrl,
    fetch: async () => Response.json([{ BookingId: 1 }]),
  });
  assert.deepEqual(
    await Array.fromAsync(client.reports.streamCashDesk(query)),
    [{ BookingId: 1 }],
  );
});

test("token renewal uses expiry and provider caches remain isolated", async (context) => {
  context.mock.timers.enable({ apis: ["Date"], now: 100000 });
  let count = 0;
  const options = {
    clientId: "id",
    clientSecret: "secret",
    scopes: ["scope"],
    fetch: async () =>
      Response.json({
        access_token: `token-${++count}`,
        token_type: "Bearer",
        expires_in: 100,
      }),
  };
  const first = createClientCredentialsProvider(options);
  const second = createClientCredentialsProvider(options);
  assert.equal(await first.getAccessToken(), "token-1");
  assert.equal(await second.getAccessToken(), "token-2");
  context.mock.timers.tick(89000);
  assert.equal(await first.getAccessToken(), "token-1");
  context.mock.timers.tick(2000);
  assert.equal(await first.getAccessToken(), "token-3");
});

test("redirects are returned raw or rejected without automatic replay", async () => {
  let count = 0;
  const client = clientWith(async (_url, init) => {
    count++;
    assert.equal(init.redirect, "manual");
    return new Response(null, {
      status: 302,
      headers: { Location: "https://other.test" },
    });
  });
  assert.equal((await client.clinics.listResponse()).status, 302);
  await assert.rejects(
    client.clinics.list(),
    (error) => error instanceof ApiError && error.status === 302,
  );
  assert.equal(count, 2);
});

test("unsupported text charset releases the response body", async () => {
  let cancelled = false;
  const client = clientWith(
    async () =>
      new Response(
        new ReadableStream({
          cancel() {
            cancelled = true;
          },
        }),
        { headers: { "content-type": "text/plain;charset=not-an-encoding" } },
      ),
  );
  await assert.rejects(
    client.patients.getAnalysisConclusion(identity),
    RangeError,
  );
  assert.ok(cancelled);
});

test("ESM and CJS package entry points expose client and auth", () => {
  const require = createRequire(import.meta.url);
  assert.equal(
    typeof require("@clinica-web/sdk").createClinicaClient,
    "function",
  );
  assert.equal(
    typeof require("@clinica-web/sdk/auth").createClientCredentialsProvider,
    "function",
  );
});

test("GET preserves deployment prefix and obtains bearer token per request", async () => {
  let tokens = 0;
  const client = createClinicaClient({
    baseUrl,
    accessToken: () => `token-${++tokens}`,
    fetch: async (url, init) => {
      assert.equal(String(url), `${baseUrl}/api/erp/v1/clinics`);
      assert.equal(init.headers.get("Authorization"), `Bearer token-${tokens}`);
      assert.equal(init.method, "GET");
      assert.equal(init.redirect, "manual");
      return Response.json([{ ClinicId: 1, NameClinic: "Клініка" }]);
    },
  });
  assert.equal((await client.clinics.list())[0].NameClinic, "Клініка");
  await client.clinics.list();
  assert.equal(tokens, 2);
});

test("full entity PUT preserves explicit null, false, zero and wire casing", async () => {
  const clinic = {
    CityId: 0,
    NameClinic: "Клініка",
    LocalNameClinic: "К",
    Prefix: null,
    IsOnline: false,
    OrderNumber: 0,
  };
  const client = clientWith(async (url, init) => {
    assert.equal(String(url), `${baseUrl}/api/erp/v1/clinics/17`);
    assert.equal(init.method, "PUT");
    assert.deepEqual(JSON.parse(init.body), clinic);
    assert.equal(init.headers.get("content-type"), "application/json");
    return new Response(null, { status: 200 });
  });
  assert.equal(
    await client.clinics.update({ clinicId: 17, clinic }),
    undefined,
  );
});

test("HTTP errors preserve status and bounded diagnostic body; raw errors remain readable", async () => {
  let cancelled = false;
  const client = clientWith(
    async () =>
      new Response(
        new ReadableStream({
          pull(controller) {
            controller.enqueue(encoder.encode("x".repeat(10000)));
          },
          cancel() {
            cancelled = true;
          },
        }),
        { status: 422 },
      ),
  );
  await assert.rejects(client.clinics.list(), (error) => {
    assert.ok(error instanceof ApiError);
    assert.equal(error.status, 422);
    assert.equal(error.body.length, 65536);
    assert.equal(error.truncated, true);
    return true;
  });
  assert.ok(cancelled);
  const raw = await clientWith(
    async () => new Response("missing", { status: 404 }),
  ).clinics.listResponse();
  assert.equal(raw.bodyUsed, false);
  assert.equal(await raw.text(), "missing");
});

test("network, malformed JSON and abort failures do not become ApiError", async () => {
  const offline = new TypeError("offline");
  await assert.rejects(
    clientWith(async () => {
      throw offline;
    }).clinics.list(),
    (error) => error === offline,
  );
  await assert.rejects(
    clientWith(async () => new Response("{")).clinics.list(),
    SyntaxError,
  );
  const controller = new AbortController();
  controller.abort();
  await assert.rejects(
    clientWith(() => assert.fail("must not send")).clinics.list({
      signal: controller.signal,
    }),
    { name: "AbortError" },
  );
});

for (const charset of ["utf-16", "utf-16le", "utf-16be"]) {
  test(`conclusion decodes ${charset} across byte boundaries`, async () => {
    const expected = "Висновок: здоровий 🩺";
    const bytes = Buffer.from(expected, "utf16le");
    if (charset === "utf-16be") bytes.swap16();
    const response = new Response(
      new ReadableStream({
        start(controller) {
          for (const byte of bytes) controller.enqueue(Uint8Array.of(byte));
          controller.close();
        },
      }),
      { headers: { "Content-Type": `text/plain; charset="${charset}"` } },
    );
    const client = clientWith(async (url) => {
      assert.equal(
        String(url),
        `${baseUrl}/api/public/v1/patients/12/analyses/34/analysis-conclusion`,
      );
      return response;
    });
    assert.equal(
      await client.patients.getAnalysisConclusion(identity),
      expected,
    );
  });
}

test("real Node fetch decompresses gzip before UTF-16 decoding", async () => {
  const expected = "Рекомендація: відпочинок";
  const server = createServer((_req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/plain;charset=UTF-16",
      "Content-Encoding": "gzip",
    });
    res.end(gzipSync(Buffer.from(expected, "utf16le")));
  });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  try {
    const client = createClinicaClient({
      baseUrl: `http://127.0.0.1:${server.address().port}`,
    });
    assert.equal(
      await client.patients.getAnalysisConclusion(identity),
      expected,
    );
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});

test("PDF remains an unconsumed streaming Response, including non-success responses", async () => {
  let cancelled = false;
  const response = new Response(
    new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode("%PDF-1.7"));
      },
      cancel() {
        cancelled = true;
      },
    }),
    { headers: { "Content-Type": "application/pdf" } },
  );
  const raw = await clientWith(async (url, init) => {
    assert.equal(
      String(url),
      `${baseUrl}/api/public/v1/patients/12/analyses/34/print`,
    );
    assert.match(init.headers.get("accept"), /application\/pdf/);
    return response;
  }).patients.printAnalysisResponse(identity);
  assert.equal(raw, response);
  assert.equal(raw.bodyUsed, false);
  const reader = raw.body.getReader();
  assert.equal(
    new TextDecoder().decode((await reader.read()).value),
    "%PDF-1.7",
  );
  await reader.cancel();
  assert.ok(cancelled);
  const failed = await clientWith(
    async () => new Response("denied", { status: 403 }),
  ).patients.printAnalysisResponse(identity);
  assert.equal(failed.status, 403);
  assert.equal(await failed.text(), "denied");
});

test("report is lazy, preserves query values and releases stream on early break", async () => {
  let sent = 0;
  let cancelled = false;
  const client = clientWith(async (url) => {
    sent++;
    assert.equal(url.searchParams.get("dateStart"), query.dateStart);
    assert.equal(url.searchParams.get("clinicId"), "0");
    return new Response(
      new ReadableStream({
        start(controller) {
          controller.enqueue(encoder.encode('[{"BookingId":1},'));
        },
        cancel() {
          cancelled = true;
        },
      }),
    );
  });
  const rows = client.reports.streamCashDesk(query);
  assert.equal(sent, 0);
  for await (const row of rows) {
    assert.deepEqual(row, { BookingId: 1 });
    break;
  }
  assert.equal(sent, 1);
  assert.ok(cancelled);
});

test("stream handles split multibyte text, nested JSON and escaped quotes", async () => {
  const expected = [
    { BookingId: 1, Note: 'Привіт 🩺 " \\\n', Extra: { nested: [1, 2] } },
    { BookingId: 2 },
  ];
  const bytes = encoder.encode(JSON.stringify(expected));
  const client = clientWith(
    async () =>
      new Response(
        new ReadableStream({
          start(controller) {
            for (const byte of bytes) controller.enqueue(Uint8Array.of(byte));
            controller.close();
          },
        }),
      ),
  );
  assert.deepEqual(
    await Array.fromAsync(client.reports.streamCashDesk(query)),
    expected,
  );
});

for (const body of [
  "{}",
  "null",
  "[null]",
  "[1]",
  "[[]]",
  '[{"BookingId":1}',
  "[{},]",
  "[]{}",
  "",
]) {
  test(`stream rejects invalid report ${JSON.stringify(body)}`, async () => {
    await assert.rejects(
      Array.fromAsync(
        clientWith(async () => new Response(body)).reports.streamCashDesk(
          query,
        ),
      ),
    );
  });
}

test("stream can deliver rows before later malformed JSON fails", async () => {
  let step = 0;
  const client = clientWith(
    async () =>
      new Response(
        new ReadableStream({
          pull(controller) {
            if (step++ === 0)
              controller.enqueue(encoder.encode('[{"BookingId":1},'));
            else {
              controller.enqueue(encoder.encode("INVALID]"));
              controller.close();
            }
          },
        }),
      ),
  );
  const iterator = client.reports.streamCashDesk(query);
  assert.deepEqual((await iterator.next()).value, { BookingId: 1 });
  await assert.rejects(iterator.next());
});

test("abort interrupts a pending report read and releases the body", async () => {
  const controller = new AbortController();
  let cancelled = false;
  let reading;
  const ready = new Promise((resolve) => {
    reading = resolve;
  });
  const client = clientWith(
    async () =>
      new Response(
        new ReadableStream({
          pull() {
            reading();
          },
          cancel() {
            cancelled = true;
          },
        }),
      ),
  );
  const next = client.reports
    .streamCashDesk(query, { signal: controller.signal })
    .next();
  await ready;
  controller.abort();
  await assert.rejects(next, { name: "AbortError" });
  assert.ok(cancelled);
});

test("empty report and HTTP report failure", async () => {
  assert.deepEqual(
    await Array.fromAsync(
      clientWith(
        async () => new Response(null, { status: 204 }),
      ).reports.streamCashDesk(query),
    ),
    [],
  );
  await assert.rejects(
    Array.fromAsync(
      clientWith(
        async () => new Response("denied", { status: 401 }),
      ).reports.streamCashDesk(query),
    ),
    (error) => error instanceof ApiError && error.status === 401,
  );
});

test("client credentials coalesces acquisition, caches token and encodes form fields", async () => {
  let count = 0;
  const provider = createClientCredentialsProvider({
    clientId: "id &=",
    clientSecret: "secret+&",
    scopes: ["gambit:erp:clinics", "gambit:erp:salepack"],
    fetch: async (url, init) => {
      count++;
      assert.equal(url, "https://id.medakadem.com/connect/token");
      const body = new URLSearchParams(init.body);
      assert.equal(body.get("client_id"), "id &=");
      assert.equal(body.get("client_secret"), "secret+&");
      assert.equal(body.get("scope"), "gambit:erp:clinics gambit:erp:salepack");
      assert.equal(body.get("grant_type"), "client_credentials");
      return Response.json({
        access_token: "abc",
        token_type: "Bearer",
        expires_in: 3600,
      });
    },
  });
  assert.deepEqual(
    await Promise.all([provider.getAccessToken(), provider.getAccessToken()]),
    ["abc", "abc"],
  );
  assert.equal(await provider.getAccessToken(), "abc");
  assert.equal(count, 1);
});

test("cancelled auth waiter does not cancel another caller's acquisition", async () => {
  let release;
  const pending = new Promise((resolve) => {
    release = resolve;
  });
  const provider = createClientCredentialsProvider({
    clientId: "id",
    clientSecret: "secret",
    scopes: [],
    fetch: async () => {
      await pending;
      return Response.json({
        access_token: "abc",
        token_type: "Bearer",
        expires_in: 3600,
      });
    },
  });
  const controller = new AbortController();
  const first = provider.getAccessToken({ signal: controller.signal });
  const second = provider.getAccessToken();
  controller.abort();
  await assert.rejects(first, { name: "AbortError" });
  release();
  assert.equal(await second, "abc");
});

test("failed token acquisition can be retried by a later call", async () => {
  let count = 0;
  const provider = createClientCredentialsProvider({
    clientId: "id",
    clientSecret: "secret",
    scopes: [],
    fetch: async () =>
      ++count === 1
        ? new Response("bad", { status: 401 })
        : Response.json({
            access_token: "abc",
            token_type: "Bearer",
            expires_in: 3600,
          }),
  });
  await assert.rejects(
    provider.getAccessToken(),
    (error) => error instanceof ApiError,
  );
  assert.equal(await provider.getAccessToken(), "abc");
});

test("invalid token responses never enter the cache", async () => {
  const provider = createClientCredentialsProvider({
    clientId: "id",
    clientSecret: "secret",
    scopes: [],
    fetch: async () => Response.json({ access_token: "abc", expires_in: 0 }),
  });
  await assert.rejects(provider.getAccessToken(), TypeError);
});
