import { readFile, writeFile, mkdir, unlink } from "node:fs/promises";
import { createHash } from "node:crypto";
import { format } from "prettier";
import { schemaType, comment } from "./generation/schema.mjs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = new URL("../", import.meta.url);
const read = async (path) =>
  JSON.parse(await readFile(new URL(path, root), "utf8"));
const snapshotArgument = process.argv.indexOf("--snapshot-dir");
const snapshotRoot =
  snapshotArgument === -1
    ? new URL("openapi/", root)
    : pathToFileURL(resolve(process.argv[snapshotArgument + 1]) + "/");
const bytes = await readFile(new URL("swagger.json", snapshotRoot));
const source = JSON.parse(
  await readFile(new URL("source.json", snapshotRoot), "utf8"),
);
if (createHash("sha256").update(bytes).digest("hex") !== source.sha256)
  throw new Error("Snapshot provenance hash mismatch");
const spec = JSON.parse(bytes);
const config = await read("openapi/sdk-config.json");
const aliases = await read("openapi/resource-groups.json");
const rawOnly = new Set(await read("openapi/raw-response-operations.json"));
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
const lower = (s) => s[0].toLowerCase() + s.slice(1);
const upper = (s) => s[0].toUpperCase() + s.slice(1);
const groups = new Map();
const ids = new Set();
const inventory = [];
const outputs = new Map();
const generated =
  "// Generated from openapi/swagger.json and sdk-config.json. Do not edit.\n";

for (const [path, item] of Object.entries(spec.paths)) {
  for (const [method, operation] of Object.entries(item)) {
    if (!methods.has(method)) continue;
    const id = operation.operationId;
    if (!id || !/^[A-Za-z_$][\w$]*$/.test(id) || ids.has(id.toLowerCase()))
      throw new Error(`Invalid/duplicate operationId: ${id}`);
    ids.add(id.toLowerCase());
    const area = path.startsWith("/api/online/")
      ? "online"
      : /^\/api\/v[12]\/referringDoctor(?:\/|$)/.test(path)
        ? "referring"
        : "main";
    const resource = path
      .replace(/^\/api\/(?:(?:erp|online|public)\/)?(?:v\d+\/)?/, "")
      .replace(/^\//, "")
      .split("/")[0];
    const group =
      area === "referring"
        ? "referring"
        : lower(
            aliases[resource] ?? resource.split(/[-_]/).map(upper).join(""),
          );
    if (!/^[a-zA-Z_$][\w$]*$/.test(group))
      throw new Error(`Invalid resource group: ${path}`);
    const key = `${area}-${group}`;
    if (!groups.has(key))
      groups.set(key, {
        key,
        area,
        group,
        factory: `create${upper(area)}${upper(group)}`,
        operations: [],
        names: new Set(),
      });
    const target = groups.get(key);
    const override = config.operations[`${method} ${path}`] ?? {};
    const name = override.name ?? lower(id);
    const prefix = area === "online" ? `online.${group}` : group;
    const params = [
      ...(item.parameters ?? []),
      ...(operation.parameters ?? []),
    ];
    const fields = [];
    const bindings = [];
    for (const parameter of params) {
      if (!["path", "query", "header"].includes(parameter.in))
        throw new Error(`Unsupported parameter location: ${id}`);
      const field =
        override.parameters?.[parameter.name] ?? lower(parameter.name);
      const token =
        parameter.in === "path"
          ? [...path.matchAll(/\{([^}]+)\}/g)]
              .map((m) => m[1])
              .find((p) => p.toLowerCase() === parameter.name.toLowerCase())
          : parameter.name;
      if (!token)
        throw new Error(`Unbound path parameter ${id}.${parameter.name}`);
      fields.push({
        name: field,
        type: schemaType(parameter.schema, "Models."),
        required: parameter.required === true,
        description: parameter.description,
      });
      bindings.push({
        name: token,
        field,
        in: parameter.in,
        required: parameter.required === true,
        array: parameter.schema?.type === "array",
        explode: parameter.explode !== false,
      });
    }
    const body = operation.requestBody;
    const bodyName = override.bodyName ?? "body";
    if (body) {
      if (!body.content?.["application/json"])
        throw new Error(`Unsupported request media: ${id}`);
      fields.push({
        name: bodyName,
        type: schemaType(body.content["application/json"].schema, "Models."),
        required: body.required === true,
        description: body.description,
      });
    }
    if (new Set(fields.map((f) => f.name)).size !== fields.length)
      throw new Error(`Argument collision: ${id}`);
    for (const token of [...path.matchAll(/\{([^}]+)\}/g)].map((m) => m[1])) {
      if (!bindings.some((p) => p.in === "path" && p.name === token))
        throw new Error(`Missing path binding ${id}: ${token}`);
    }
    const reads = {};
    const returns = [];
    let raw = rawOnly.has(`${method} ${path}`);
    let streamItem;
    for (const [status, response] of Object.entries(operation.responses)) {
      if (!/^2\d\d$/.test(status)) continue;
      const content = response.content ?? {};
      if (content["application/pdf"]) raw = true;
      const json = content["application/json"] ?? content["text/json"];
      const textMedia = Object.keys(content).find((m) =>
        m.startsWith("text/plain"),
      );
      if (override.reader === "empty" || status === "204") {
        reads[status] = { kind: "empty" };
        returns.push("undefined");
      } else if (json) {
        reads[status] = { kind: "json" };
        returns.push(schemaType(json.schema, "Models."));
        if (group === "reports" && json.schema?.type === "array")
          streamItem = schemaType(json.schema.items, "Models.");
      } else if (textMedia) {
        reads[status] = {
          kind: "text",
          charset: /charset=([^;]+)/i.exec(textMedia)?.[1] ?? "utf-8",
        };
        returns.push(schemaType(content[textMedia].schema, "Models."));
      } else if (Object.keys(content).length) raw = true;
      else {
        reads[status] = { kind: "unknown" };
        returns.push("unknown");
      }
    }
    const resultType =
      override.reader === "empty"
        ? "void"
        : [...new Set(returns)].join(" | ") || "unknown";
    const rawName = `${name}Response`;
    const streamName =
      streamItem && !raw
        ? (override.streamName ??
          `stream${upper(name.replace(/^get(?=[A-Z])/, ""))}`)
        : undefined;
    const names = [
      ...(!raw ? [name] : []),
      rawName,
      ...(streamName ? [streamName] : []),
    ];
    for (const n of names) {
      if (!/^[A-Za-z_$][\w$]*$/.test(n) || target.names.has(n))
        throw new Error(`Method collision ${prefix}.${n}`);
      target.names.add(n);
    }
    const argsType = `{ ${fields.map((f) => `${f.description ? `/**\n${comment(f.description)}\n */` : ""}${JSON.stringify(f.name)}${f.required ? "" : "?"}: ${f.type};`).join("\n")} }`;
    const requiredArgs = fields.some((f) => f.required);
    const signature = fields.length
      ? `args: ${argsType}${requiredArgs ? "" : " = {}"}, options?: RequestOptions`
      : "options?: RequestOptions";
    const invocation = fields.length ? "args, options" : "options";
    const descriptor = {
      method: method.toUpperCase(),
      path,
      parameters: bindings,
      ...(body
        ? { bodyField: bodyName, bodyRequired: body.required === true }
        : {}),
      accept: raw
        ? Object.values(operation.responses).some(
            (r) => r.content?.["application/pdf"],
          )
          ? "application/pdf"
          : "*/*"
        : Object.values(reads).some((r) => r.kind === "text")
          ? "text/plain"
          : "application/json",
    };
    const documentation = `${operation.summary ?? id}\n${operation.description ?? ""}\n${method.toUpperCase()} ${path}\nOperation ID: ${id}`;
    target.operations.push({
      name,
      rawName,
      raw,
      streamName,
      streamItem,
      signature,
      invocation,
      descriptor,
      reads,
      resultType,
      documentation,
      hasArgs: fields.length > 0,
    });
    inventory.push({
      method,
      path,
      operationId: id,
      area,
      resource: group,
      sdkMethods: names.map((n) => `${prefix}.${n}`),
      rawMethod: `${prefix}.${rawName}`,
      ...(streamName ? { streamMethod: `${prefix}.${streamName}` } : {}),
      arguments: fields.map((f) => ({ name: f.name, required: f.required })),
      parameters: bindings,
      ...(body ? { bodyField: bodyName } : {}),
      reader: raw ? "raw" : reads,
    });
  }
}

const sortedGroups = [...groups.values()].sort((a, b) =>
  a.key.localeCompare(b.key, "en"),
);
for (const group of sortedGroups) {
  const locals = [];
  const members = [];
  for (const op of group.operations) {
    const rawDoc = `/**\n${comment(op.documentation)}\n * Raw response: caller consumes or cancels the body, including HTTP errors.\n */`;
    locals.push(
      `${rawDoc}\nfunction ${op.rawName}(${op.signature}): Promise<Response> { return transport.request(${JSON.stringify(op.descriptor)}, ${op.hasArgs ? "args" : "{}"}, options); }`,
    );
    members.push(op.rawName);
    if (!op.raw)
      members.push(
        `/**\n${comment(op.documentation)}\n * Throws ApiError for HTTP failure; network, abort and parse errors propagate.\n */\nasync ${op.name}(${op.signature}): Promise<${op.resultType}> { return transport.read<${op.resultType}>(await ${op.rawName}(${op.invocation}), ${JSON.stringify(op.reads)}); }`,
      );
    if (op.streamName)
      members.push(
        `/**\n${comment(op.documentation)}\n * Lazy single-use iterator. Cancels on break/abort/error. Earlier rows may precede a later failure. No retries.\n */\nasync *${op.streamName}(${op.signature}): AsyncGenerator<${op.streamItem}> { yield* readJsonArray<${op.streamItem}>(await ${op.rawName}(${op.invocation}), options?.signal); }`,
      );
  }
  const text = `${generated}import type * as Models from "../../models";\nimport type { Transport, RequestOptions } from "../../transport/transport";\n${group.operations.some((o) => o.streamName) ? 'import { readJsonArray } from "../../streaming/json-array";' : ""}\nexport function ${group.factory}(transport: Transport) { ${locals.join("\n")}\nreturn {${members.join(",\n")}}; }`;
  outputs.set(
    `src/generated/${group.key}/${group.key}.ts`,
    await format(text, { parser: "typescript" }),
  );
}
const client = `${generated}${sortedGroups.map((g) => `import { ${g.factory} } from "./${g.key}/${g.key}";`).join("\n")}\nimport type { Transport } from "../transport/transport";\nexport function createResources(main: Transport, online: Transport, referring: Transport) { return {\n${sortedGroups
  .filter((g) => g.area !== "online")
  .map((g) => `${g.group}: ${g.factory}(${g.area}),`)
  .join("\n")}\nonline: {${sortedGroups
  .filter((g) => g.area === "online")
  .map((g) => `${g.group}: ${g.factory}(online),`)
  .join("\n")}} }; }`;
outputs.set(
  "src/generated/index.ts",
  await format(client, { parser: "typescript" }),
);
const models = Object.entries(spec.components.schemas)
  .sort(([a], [b]) => a.localeCompare(b, "en"))
  .map(
    ([name, schema]) =>
      `${schema.description ? `/**\n${comment(schema.description)}\n */` : ""}\nexport type ${name} = ${schemaType(schema)};`,
  )
  .join("\n\n");
outputs.set(
  "src/models/index.ts",
  await format(generated + models, { parser: "typescript" }),
);
outputs.set(
  "openapi/operations.json",
  await format(JSON.stringify(inventory), { parser: "json" }),
);
const table = inventory
  .map(
    (o) =>
      `| ${o.method.toUpperCase()} | \`${o.path}\` | ${o.sdkMethods.map((n) => `\`${n}\``).join("<br>")} |`,
  )
  .join("\n");
outputs.set(
  "docs/api-reference.md",
  `# API reference\n\nGenerated from the pinned snapshot. ${inventory.length} HTTP operations, ${Object.keys(spec.components.schemas).length} model/enum schemas.\n\nEvery operation has a raw Response method. Methods use an argument object where parameters/body exist, followed by request options. Missing success schemas return unknown; binary/print routes are raw-only.\n\n| Method | Route | Client methods |\n| --- | --- | --- |\n${table}\n`,
);
const manifestPath = "openapi/generated-files.json";
if (process.argv.includes("--validate-only")) {
  console.log(
    `Validated ${inventory.length} operations and ${Object.keys(spec.components.schemas).length} schemas without writing generated files`,
  );
  process.exit(0);
}
let previous = [];
try {
  previous = await read(manifestPath);
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
const check = process.argv.includes("--check");
for (const [path, text] of outputs) {
  const target = new URL(path, root);
  if (check) {
    if ((await readFile(target, "utf8")) !== text)
      throw new Error(`Generated file differs: ${path}`);
  } else {
    await mkdir(new URL(".", target), { recursive: true });
    await writeFile(target, text);
  }
}
for (const path of previous.filter((p) => !outputs.has(p))) {
  if (!path.startsWith("src/generated/") || path.includes(".."))
    throw new Error(`Refusing to remove obsolete path: ${path}`);
  if (check) throw new Error(`Obsolete generated file: ${path}`);
  await unlink(new URL(path, root));
}
const manifest = JSON.stringify([...outputs.keys()].sort(), null, 2) + "\n";
if (check) {
  if ((await readFile(new URL(manifestPath, root), "utf8")) !== manifest)
    throw new Error("Generated manifest differs");
} else await writeFile(new URL(manifestPath, root), manifest);
console.log(
  `${check ? "Verified" : "Generated"} ${inventory.length} operations, ${sortedGroups.length} resource groups, ${Object.keys(spec.components.schemas).length} schemas`,
);
