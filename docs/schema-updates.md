# Updating the OpenAPI schema

The source URL is configuration, not a generated-code constant. Copy `.env.example`
to `.env` and set `OPENAPI_URL`. The example points to
`https://dev.medakadem.com.ua/swagger/v1/swagger.json`, which needs no authentication.
Shell/CI environment variables take precedence over `.env`. The updater loads only
`.env` in the repository root; `.env.local` and other variants are not loaded.

```sh
npm run schema:update
npm run verify
```

`schema:update` downloads the document, rejects HTTP/JSON failures, checks unique
operation IDs and local references, validates it with the actual SDK generator in
an ignored staging directory, then updates the snapshot/provenance and regenerates
the SDK. A rejected document leaves the existing snapshot and generated code intact.
An unchanged document leaves provenance intact. Requests time out after 60 seconds;
redirects are rejected. TLS validation stays enabled. For localhost certificates,
set `NODE_EXTRA_CA_CERTS` in the shell before starting npm; putting it in a `.env`
loaded by the script is too late for Node's certificate initialization.

Review the diff and classify the change before committing. Existing contract tests
pin some known operation IDs and inventory counts deliberately; new or removed API
operations may need reviewed test changes. Do not weaken compatibility assertions
just to accept a server update. A downloadable Swagger document does not verify
endpoint behavior, so provenance retains `liveVerified: false`. HTTP provenance
records a content hash and retrieval time, without the URL, query string or secrets.

## What belongs in Git

Commit `openapi/swagger.json`, `openapi/source.json`, generator configuration,
`src/generated`, models, the API inventory and the lockfile. These are reproducible
build inputs/outputs. CI and release builds use the committed snapshot and do not
fetch a changing endpoint. `npm run generate` remains offline.

Ignore `.env`/`.env.*` except `.env.example`, local key/certificate files, `.cache`,
logs, coverage, node_modules, dist and npm tarballs. `.gitignore` does not remove
files already tracked by Git. Only public example values belong in `.env.example`.
Review server-provided descriptions/examples before making a new snapshot public.

For a future GitHub schema-update job, supply `OPENAPI_URL` from a repository
variable and submit the generated changes as a PR. A localhost URL is not reachable
from a GitHub-hosted runner. No automatic polling or update workflow is enabled.
