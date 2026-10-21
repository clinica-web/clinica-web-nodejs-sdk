# Clinica Web TypeScript SDK

Complete generated client for the pinned API: 588 operations and 420 schemas.
For Node.js 22+ and Web API runtimes. Uses `fetch`,
`Response`, `ReadableStream` and `AbortSignal`; no Node built-ins in runtime code.
ESM and CommonJS packages include TypeScript declarations and TSDoc.

## Usage

```ts
import { createClinicaClient } from "@clinica-web/sdk";
import { createClientCredentialsProvider } from "@clinica-web/sdk/auth";

const tokens = createClientCredentialsProvider({
  clientId: env.CLINICA_CLIENT_ID,
  clientSecret: env.CLINICA_CLIENT_SECRET,
  scopes: [
    "gambit:erp:clinics",
    "gambit:erp:salepack",
    "gambit:public:patient:medical-records:read",
  ],
});

const client = createClinicaClient({
  baseUrl: env.CLINICA_API_URL,
  accessToken: (options) => tokens.getAccessToken(options),
});
const signal = AbortSignal.timeout(60_000);
const clinics = await client.clinics.list({ signal });

await client.clinics.update(
  {
    clinicId: 123,
    clinic: {
      CityId: 8000000000,
      NameClinic: "Clinic",
      LocalNameClinic: "Clinic",
      IsOnline: false,
      Prefix: null,
    },
  },
  { signal },
);

const conclusion = await client.patients.getAnalysisConclusion(
  { patientId: 1, analysisId: 2 },
  { signal },
);

for await (const row of client.reports.streamCashDesk(
  {
    dateStart: "2026-01-01T00:00:00+02:00",
    dateEnd: "2026-02-01T00:00:00+02:00",
  },
  { signal },
)) {
  console.log(row.BookingId);
}
```

The PUT sends a full entity, not a patch. The example is a minimal schema-valid
entity, not a safe read-modify-write recipe for an existing clinic. Supply the
complete intended state when updating. Optional fields follow OpenAPI;
`undefined` is omitted, while explicit `null`, `false` and `0` are preserved.
Wire field names remain unchanged. Dates remain strings and numeric enums retain
their API values. Models are TypeScript contracts, not runtime validators.
Numbers use JavaScript precision: do not supply integers outside the safe integer
range; decimal amounts have ordinary floating-point semantics.

## Usage examples

| Resource method                               | API operation                                                                       |
| --------------------------------------------- | ----------------------------------------------------------------------------------- |
| `clinics.list`                                | `GET /api/erp/v1/clinics`                                                           |
| `clinics.update`                              | `PUT /api/erp/v1/clinics/{id}`                                                      |
| `patients.getAnalysisConclusion`              | `GET /api/public/v1/patients/{patientId}/analyses/{analysisId}/analysis-conclusion` |
| `reports.cashDesk` / `reports.streamCashDesk` | `GET /api/erp/v1/reports/cashDesk`                                                  |
| `patients.printAnalysisResponse`              | `GET /api/public/v1/patients/{patientId}/analyses/{analysisId}/print`               |

Each typed operation also has a `Response` variant returning an unconsumed Web
`Response` for any HTTP status. The caller must consume or cancel its body.
Typed methods throw `ApiError` for non-success HTTP statuses, with status, headers,
and a body preview capped at 64 KiB. `truncated` means the preview reached the cap.
Network, abort and parsing errors are not wrapped. There are no automatic retries,
including on 401. Redirects are not followed; typed methods reject their status
and raw methods return the redirect response without forwarding credentials.

Typed GET methods require their declared JSON body; malformed or absent JSON is
an error. Update accepts successful empty responses. Streaming reports accept 204
or explicitly zero-length bodies as empty reports.

## PDF and text

Print exposes a raw method to preserve streaming. The current API specification
declares `application/pdf` with a binary schema for success. Check status and
content type before forwarding or saving. No implicit
base64, Blob or Buffer conversion happens.

```ts
const pdf = await client.patients.printAnalysisResponse(
  { patientId: 1, analysisId: 2 },
  { signal },
);
if (!pdf.ok) {
  await pdf.body?.cancel();
  throw new Error(`Print failed: ${pdf.status}`);
}
// Cloudflare Worker: forward the body without buffering.
return new Response(pdf.body, {
  headers: {
    "Content-Type":
      pdf.headers.get("Content-Type") ?? "application/octet-stream",
  },
});
```

Conclusion text respects the response charset and defaults to UTF-16LE for this
endpoint's declared contract. Fetch handles HTTP gzip decompression; custom fetch
adapters must do the same. Text and ordinary JSON methods materialize their body.

## Streaming ownership

`streamCashDesk` starts one request on iteration and returns a single-use async
iterator. Call it again for another request. It parses a root JSON array
incrementally using `@streamparser/json`, retaining the current row and a bounded
parser input window rather than all previous rows. An individual row and a chunk
supplied by the underlying transport may still be large.

`break`, abort and parsing failures cancel the body and release its reader.
Rows may already have reached your application before a later failure. No replay,
resume or server-side pagination is implied. `cashDesk` materializes the full
report; `cashDeskResponse` exposes headers and the raw body.

## Authorization

Use a static `accessToken`, an async token callback, or an injected `fetch`.
The client-credentials provider uses
`https://id.medakadem.com/connect/token`, independent of the API deployment.
It URL-encodes credentials and scopes, caches within the provider instance,
renews before expiry and coalesces concurrent acquisition.

Cancelling one waiter does not cancel a shared token request; acquisition has its
own 30-second timeout. Keep a provider isolated to one credential/scope context.
There is no global cache, patient OTP flow or refresh-token persistence in this
SDK. Store secrets in your application's environment/secret store.
No token refresh or write retry is triggered by a resource returning 401.

Official auth contract:
[Clinica authentication](https://medakadem.freshdesk.com/uk/support/solutions/articles/77000530947).

## Generation and verification

`openapi/swagger.json` is the offline specification exported from the checked
Gambit assembly on 2026-10-21 and shared with the .NET SDK.
`openapi/source.json` records its assembly hash, working-tree provenance and SHA-256:
`627abfdb55d99b529a84193a721ea672c57aa2229417d716275438d5b99d36bc`.
It is not a fresh fetch from the running localhost host.
`openapi/operations.json` maps all **588 operations** to generated methods.
`scripts/generate-sdk.mjs` generates 90 resource groups and all 420 model/enum
schemas. [Complete API reference](docs/api-reference.md) lists every callable method.

Generation uses the .NET resource aliases and raw-response exceptions, checks
snapshot provenance, rejects missing/duplicate operation IDs and method collisions,
and preserves all 82 added IDs and 108 renames. The original five friendly method
families remain compatible; other names follow camelCase operation IDs.

513 operations use root resource groups, 63 use `client.online.<resource>`, and
12 use `client.referring`. `client.referringDoctors` remains a separate resource.
No `ApiOnlineV1` prefix is needed. Configure each area's identity explicitly:

```ts
const client = createClinicaClient({
  baseUrl: env.CLINICA_API_URL,
  clientCredentials: {
    clientId: env.CLIENT_ID,
    clientSecret: env.CLIENT_SECRET,
    scopes: ["gambit:erp:clinics"],
  },
  online: { accessToken: env.ONLINE_ACCESS_TOKEN },
  referring: { accessToken: env.REFERRING_ACCESS_TOKEN },
});
```

Area configurations can also specify their own `baseUrl`, `fetch` and
`clientCredentials` (including `tokenUrl`). Acquisition is lazy and cached per
identity. Omitted area identities never inherit the main bearer token or
credentials; only URL and fetch defaults are shared. A custom fetch adapter
controls any headers it injects. Do not combine `accessToken` and
`clientCredentials` on the same identity.

Methods accept a typed argument object when the operation has parameters/body,
then request options. Required parameters stay required. Optional null query
values are omitted; false and zero are retained; arrays use repeated query keys.
Six report operations support incremental iteration. Print/binary operations
remain raw-only. Missing success schemas return `unknown`: JSON is parsed by
content type, empty bodies return undefined, text returns a string; undeclared
binary bodies require the Response method. Declared 204 responses return undefined.

The backend audit records 99 fixed, 285 source-verified and 204 uncertain
operations. Full generation does not certify live backend behavior. See
[coordination notes](docs/sdk-coordination.md).

```sh
npm ci
npm run generate
npm run verify
npm pack
```

Tests cover all 588 generated route bindings and success readers, plus request contracts, full-entity serialization, error ownership,
split UTF-16 and gzip over local HTTP, JSON streaming and cancellation, raw PDF,
token acquisition, ESM/CJS imports, and all five scenarios in local workerd
without `nodejs_compat`. API responses in tests are controlled fixtures; no
authenticated live Clinica requests or Cloudflare deployment are performed.

n8n requires an integration adapter/custom node and has not been runtime-tested
here. n8n Cloud Code nodes cannot import arbitrary npm packages. This package
does not claim drop-in support in those nodes.

## Releases

Release Please prepares version and changelog updates; merging its release PR
publishes through GitHub Actions and npm Trusted Publishing.
See [release setup and recovery](docs/releases.md) for the one-time GitHub/npm setup.

## Updating the API schema

Set `OPENAPI_URL` in a local `.env` (see `.env.example`), then run
`npm run schema:update` and `npm run verify`. The dev Swagger endpoint requires
no authentication. CI and releases continue using the committed snapshot.
See [schema configuration and Git rules](docs/schema-updates.md).
