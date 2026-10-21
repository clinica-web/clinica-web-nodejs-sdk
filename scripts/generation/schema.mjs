export function comment(text) {
  return String(text ?? "")
    .replaceAll("*/", "* /")
    .replace(/\r\n|\r/g, "\n")
    .split("\n")
    .map((line) => ` * ${line}`)
    .join("\n");
}

/** Render the schema contract without runtime casing, date or numeric conversions. */
export function schemaType(schema = {}, prefix = "") {
  let result;
  if (schema.$ref) {
    const name = schema.$ref.split("/").at(-1);
    if (!/^[A-Za-z_$][\w$]*$/.test(name))
      throw new Error(`Unsupported schema name: ${name}`);
    result = prefix + name;
  } else if (schema.enum)
    result = schema.enum.map((value) => JSON.stringify(value)).join(" | ");
  else if (schema.oneOf || schema.anyOf)
    result = (schema.oneOf ?? schema.anyOf)
      .map((s) => `(${schemaType(s, prefix)})`)
      .join(" | ");
  else if (schema.allOf)
    result = schema.allOf.map((s) => `(${schemaType(s, prefix)})`).join(" & ");
  else if (schema.type === "array")
    result = `Array<${schemaType(schema.items, prefix)}>`;
  else if (schema.type === "integer" || schema.type === "number")
    result = "number";
  else if (schema.type === "string" || schema.type === "boolean")
    result = schema.type;
  else if (
    schema.type === "object" ||
    schema.properties ||
    schema.additionalProperties !== undefined
  ) {
    const fields = Object.entries(schema.properties ?? {}).map(
      ([name, property]) => {
        const doc = property.description
          ? `/**\n${comment(property.description)}\n */\n`
          : "";
        return `${doc}${property.readOnly ? "readonly " : ""}${JSON.stringify(name)}${schema.required?.includes(name) ? "" : "?"}: ${schemaType(property, prefix)};`;
      },
    );
    result = `{ ${fields.join("\n")} }`;
    if (schema.additionalProperties !== false) {
      const extra =
        typeof schema.additionalProperties === "object"
          ? schemaType(schema.additionalProperties, prefix)
          : "unknown";
      result = fields.length
        ? `(${result} & Record<string, ${extra}>)`
        : `Record<string, ${extra}>`;
    }
  } else if (schema.type === undefined) result = "unknown";
  else throw new Error(`Unsupported schema: ${JSON.stringify(schema)}`);
  return schema.nullable ? `(${result} | null)` : result;
}
