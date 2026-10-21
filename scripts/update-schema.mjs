import { loadEnvFile } from "node:process";
import { readFile, writeFile, mkdir, mkdtemp, rm } from "node:fs/promises";
import { createHash } from "node:crypto";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";
import { downloadSchema } from "./schema/download.mjs";

const root = new URL("../", import.meta.url);
try {
  loadEnvFile(new URL(".env", root));
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
try {
  const snapshot = await downloadSchema(process.env.OPENAPI_URL);
  const current = await readFile(new URL("openapi/swagger.json", root), "utf8");
  if (
    JSON.stringify(JSON.parse(current)) === JSON.stringify(JSON.parse(snapshot))
  ) {
    console.log("OpenAPI schema is unchanged.");
  } else {
    const cache = new URL(".cache/openapi/", root);
    await mkdir(cache, { recursive: true });
    const stage = await mkdtemp(fileURLToPath(cache) + "update-");
    const source =
      JSON.stringify(
        {
          source: "HTTP OpenAPI download",
          retrievedOn: new Date().toISOString(),
          sha256: createHash("sha256").update(snapshot).digest("hex"),
          liveVerified: false,
        },
        null,
        2,
      ) + "\n";
    try {
      await writeFile(stage + "/swagger.json", snapshot);
      await writeFile(stage + "/source.json", source);
      try {
        await promisify(execFile)(process.execPath, [
          fileURLToPath(new URL("scripts/generate-sdk.mjs", root)),
          "--snapshot-dir",
          stage,
          "--validate-only",
        ]);
      } catch {
        throw new Error(
          "Downloaded schema is incompatible with the SDK generator; current snapshot was preserved",
        );
      }
      const previousSource = await readFile(
        new URL("openapi/source.json", root),
      );
      try {
        await writeFile(new URL("openapi/swagger.json", root), snapshot);
        await writeFile(new URL("openapi/source.json", root), source);
      } catch (error) {
        await writeFile(new URL("openapi/swagger.json", root), current);
        await writeFile(new URL("openapi/source.json", root), previousSource);
        throw error;
      }
      console.log(
        "Updated validated OpenAPI snapshot. Regenerate and review the SDK changes before committing.",
      );
    } finally {
      // Remove only the unique staging directory created above.
      await rm(stage, { recursive: true, force: true });
    }
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
