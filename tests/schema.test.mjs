import { test } from "node:test";
import assert from "node:assert/strict";
import { downloadSchema } from "../scripts/schema/download.mjs";
const schema = () => ({
  openapi: "3.0.1",
  paths: {
    "/test": {
      get: {
        operationId: "GetTest",
        responses: { 200: { description: "OK" } },
      },
    },
  },
  components: { schemas: {} },
});
test("schema download uses configured URL, no credentials and no redirects", async () => {
  const value = schema();
  const text = await downloadSchema(
    "https://schema.test/openapi.json",
    async (url, init) => {
      assert.equal(String(url), "https://schema.test/openapi.json");
      assert.equal(init.redirect, "error");
      assert.deepEqual(init.headers, { Accept: "application/json" });
      return Response.json(value);
    },
  );
  assert.deepEqual(JSON.parse(text), value);
});
for (const [name, change] of [
  ["missing operation ID", (s) => delete s.paths["/test"].get.operationId],
  [
    "duplicate operation ID",
    (s) => (s.paths["/other"] = { get: { operationId: "gettest" } }),
  ],
  ["unsupported OpenAPI", (s) => (s.openapi = "3.1.0")],
  [
    "external reference",
    (s) => (s.components.schemas.X = { $ref: "https://private.test/schema" }),
  ],
  [
    "missing reference",
    (s) => (s.components.schemas.X = { $ref: "#/components/schemas/Missing" }),
  ],
])
  test(`schema rejects ${name}`, async () => {
    const value = schema();
    change(value);
    await assert.rejects(() =>
      downloadSchema("https://schema.test", async () => Response.json(value)),
    );
  });
test("schema failures do not expose response bodies or URL secrets", async () => {
  await assert.rejects(
    () =>
      downloadSchema(
        "https://schema.test/?token=secret",
        async () => new Response("private", { status: 401 }),
      ),
    { message: "Schema endpoint returned HTTP 401" },
  );
  await assert.rejects(
    () =>
      downloadSchema("https://schema.test/?token=secret", async () => {
        throw new Error("secret");
      }),
    {
      message:
        "Schema download failed; check endpoint availability and TLS trust",
    },
  );
  await assert.rejects(
    () => downloadSchema("https://user:secret@schema.test"),
    /embedded credentials/,
  );
});
