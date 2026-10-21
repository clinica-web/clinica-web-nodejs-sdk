/** Fetch a self-contained OpenAPI 3.0 document without logging endpoint data. */
export async function downloadSchema(source, fetcher = globalThis.fetch) {
  let url;
  try {
    url = new URL(source);
  } catch {
    throw new Error("Set OPENAPI_URL to an HTTP(S) Swagger JSON URL");
  }
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username ||
    url.password ||
    url.hash
  )
    throw new Error(
      "OPENAPI_URL must be HTTP(S), without embedded credentials or a fragment",
    );
  let response;
  try {
    response = await fetcher(url, {
      headers: { Accept: "application/json" },
      redirect: "error",
      signal: AbortSignal.timeout(60000),
    });
  } catch {
    throw new Error(
      "Schema download failed; check endpoint availability and TLS trust",
    );
  }
  if (!response.ok) {
    await response.body?.cancel();
    throw new Error(`Schema endpoint returned HTTP ${response.status}`);
  }
  let spec;
  try {
    spec = await response.json();
  } catch {
    throw new Error("Schema endpoint did not return valid JSON");
  }
  if (
    !/^3\.0\.\d+$/.test(spec?.openapi ?? "") ||
    !spec.paths ||
    !spec.components?.schemas
  )
    throw new Error(
      "Expected an OpenAPI 3.0 document with paths and component schemas",
    );
  const ids = new Set();
  const methods = new Set([
    "get",
    "put",
    "post",
    "delete",
    "patch",
    "head",
    "options",
    "trace",
  ]);
  for (const item of Object.values(spec.paths))
    for (const [method, operation] of Object.entries(item)) {
      if (!methods.has(method)) continue;
      const id = operation.operationId;
      if (
        typeof id !== "string" ||
        !/^[A-Za-z_$][\w$]*$/.test(id) ||
        ids.has(id.toLowerCase())
      )
        throw new Error(
          "Schema contains missing, invalid or duplicate operationId values; fix the backend contract before updating",
        );
      ids.add(id.toLowerCase());
    }
  if (!ids.size) throw new Error("Schema contains no operations");
  function checkReferences(value) {
    if (!value || typeof value !== "object") return;
    if ("$ref" in value) {
      if (typeof value.$ref !== "string" || !value.$ref.startsWith("#/"))
        throw new Error(
          "Schema must be self-contained; external references are not supported",
        );
      let target = spec;
      for (const segment of value.$ref.slice(2).split("/")) {
        const key = decodeURIComponent(segment)
          .replaceAll("~1", "/")
          .replaceAll("~0", "~");
        target = Object.hasOwn(target ?? {}, key) ? target[key] : undefined;
      }
      if (target === undefined)
        throw new Error("Schema contains an unresolved reference");
    }
    for (const child of Object.values(value)) checkReferences(child);
  }
  checkReferences(spec);
  // Canonical whitespace makes formatting-only server changes a no-op.
  return JSON.stringify(spec, null, 2) + "\n";
}
