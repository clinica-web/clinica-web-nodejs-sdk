import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createClinicaClient } from "../dist/index.js";

test("full snapshot preserves 82 added IDs and 108 renamed IDs", async () => {
  const read = async (name) =>
    JSON.parse(
      await readFile(
        new URL(`../openapi/${name}.json`, import.meta.url),
        "utf8",
      ),
    );
  const full = await read("swagger");
  const additions = await read("operation-additions");
  const renames = await read("operation-renames");
  assert.equal(additions.applied.length, 82);
  assert.equal(renames.mappings.length, 108);
  for (const entry of [...additions.applied, ...renames.mappings]) {
    assert.equal(
      full.paths[entry.path][entry.method.toLowerCase()].operationId,
      entry.operationId,
    );
  }
  const methods = new Set([
    "get",
    "post",
    "put",
    "patch",
    "delete",
    "head",
    "options",
    "trace",
  ]);
  const ids = Object.values(full.paths).flatMap((item) =>
    Object.entries(item)
      .filter(([method]) => methods.has(method))
      .map(([, operation]) => operation.operationId),
  );
  assert.equal(ids.length, 588);
  assert.ok(ids.every((id) => typeof id === "string" && id.trim()));
  assert.equal(new Set(ids.map((id) => id.toLowerCase())).size, 588);
});

const spec = JSON.parse(
  await readFile(new URL("../openapi/swagger.json", import.meta.url), "utf8"),
);
const operations = JSON.parse(
  await readFile(
    new URL("../openapi/operations.json", import.meta.url),
    "utf8",
  ),
);

test("operation mapping exposes implemented methods for all 588 server operations", () => {
  const client = createClinicaClient({ baseUrl: "https://example.test" });
  assert.equal(operations.length, 588);
  for (const entry of operations) {
    assert.equal(
      spec.paths[entry.path][entry.method].operationId,
      entry.operationId,
    );
    for (const name of entry.sdkMethods) {
      const method = name.split(".").reduce((value, key) => value[key], client);
      assert.equal(typeof method, "function", name);
    }
  }
});

test("original response contracts match the selected OpenAPI success contracts", () => {
  const success = (path, method = "get") =>
    spec.paths[path][method].responses["200"];
  assert.deepEqual(
    success("/api/erp/v1/clinics").content["application/json"].schema,
    {
      type: "array",
      items: { $ref: "#/components/schemas/ERPClinic" },
    },
  );
  assert.equal(success("/api/erp/v1/clinics/{id}", "put").content, undefined);
  assert.deepEqual(
    success("/api/erp/v1/reports/cashDesk").content["application/json"].schema,
    {
      type: "array",
      items: { $ref: "#/components/schemas/ReportCashDesk" },
    },
  );
  const analysis = "/api/public/v1/patients/{patientId}/analyses/{analysisId}";
  assert.deepEqual(
    success(`${analysis}/analysis-conclusion`).content[
      "text/plain;charset=UTF-16"
    ].schema,
    { type: "string" },
  );
  assert.deepEqual(
    success(`${analysis}/print`).content["application/pdf"].schema,
    { type: "string", format: "binary" },
  );
});
