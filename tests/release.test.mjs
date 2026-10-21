import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, writeFile, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
const script = fileURLToPath(
  new URL("../scripts/prepare-release.mjs", import.meta.url),
);
for (const [label, version, lockVersion, repository, valid] of [
  ["matching stable release", "0.2.0", "0.2.0", "example/sdk", true],
  ["mismatched lockfile", "0.2.0", "0.1.0", "example/sdk", false],
  [
    "prerelease on latest",
    "0.2.0-beta.1",
    "0.2.0-beta.1",
    "example/sdk",
    false,
  ],
  ["missing repository", "0.2.0", "0.2.0", "", false],
]) {
  test(`release metadata: ${label}`, async () => {
    const directory = await mkdtemp(join(tmpdir(), "clinica-release-test-"));
    try {
      const pkg = { name: "@clinica-web/sdk", version };
      await writeFile(join(directory, "package.json"), JSON.stringify(pkg));
      await writeFile(
        join(directory, "package-lock.json"),
        JSON.stringify({
          version: lockVersion,
          packages: { "": { version: lockVersion } },
        }),
      );
      await writeFile(
        join(directory, ".release-please-manifest.json"),
        JSON.stringify({ ".": version }),
      );
      const result = spawnSync(process.execPath, [script], {
        cwd: directory,
        encoding: "utf8",
        env: {
          ...process.env,
          RELEASE_VERSION: version,
          GITHUB_REPOSITORY: repository,
        },
      });
      assert.equal(result.status === 0, valid, result.stderr);
      const actual = JSON.parse(
        await readFile(join(directory, "package.json"), "utf8"),
      );
      assert.deepEqual(
        actual,
        valid
          ? {
              ...pkg,
              repository: {
                type: "git",
                url: `git+https://github.com/${repository}.git`,
              },
            }
          : pkg,
      );
    } finally {
      // Only remove the unique temporary directory created by this test.
      await rm(directory, { recursive: true, force: true });
    }
  });
}
