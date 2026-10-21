# .NET / TypeScript SDK coordination

Updated 2026-10-21. Rules were read from chat `01a0fd6c-d55e-71b2-b9b5-05695abc373e` and the current .NET generator/configuration.

## Input and coverage

The current snapshot was downloaded from the configured dev endpoint on
2026-10-21. See [provenance](../openapi/source.json) for retrieval time and SHA-256.
Compared with the preceding shared .NET snapshot, it adds five optional nullable
properties to PublicPatientMetadataModel: CityName, RegionName, DistrictName,
CityType and RegionalLogisticCenterid. Other differences are description line
endings. Routes and operation IDs are unchanged. The .NET snapshot was not modified.

The Node.js generator implements **588/588 operations and 420 schemas**, across 90 resource groups. [Complete reference](api-reference.md) and [machine-readable inventory](../openapi/operations.json) list every route and callable method.

The 82 added IDs and 108 renamed IDs are preserved. Generation rejects missing or duplicate IDs, method collisions, unsupported request media and missing route bindings. Generated files are verified for drift.

## Current grouping and identity rules

- 513 operations use root resource groups.
- All 63 `/api/online/...` operations use `client.online.<resource>`.
- The 12 `/api/v1/referringDoctor/...` and `/api/v2/referringDoctor/...` operations use `client.referring`.
- `/api/ReferringDoctors/...` remains the separate `client.referringDoctors` group.
- Resource aliases and seven raw-only print exceptions are copied from the .NET configuration.

These rules supersede the earlier partial-online grouping proposal. Main, online and referring identities are explicitly configured. Area options inherit only the deployment URL and fetch adapter, never main credentials or bearer tokens. A custom fetch adapter is responsible for any authentication it injects itself.

Each identity accepts a bearer token/provider or lazy client credentials. Caches and token acquisition are isolated per configured identity. No resource request is automatically retried, including on 401.

## Platform behavior

The five original friendly method families remain compatible. Other method names use camelCase operation IDs; URL prefixes such as ApiOnlineV1 do not appear in resource names. Models preserve required fields, nullability, wire casing, enums and descriptions. No runtime schema validation or date conversion is implied.

All operations expose an unconsumed Web Response variant. Declared JSON/text responses also have typed methods; missing success schemas produce unknown, not invented payload types. The existing clinic update explicitly discards its successful body. Seven print methods remain raw-only, including the Base64 referring print route. Six reports offer incremental AsyncGenerator readers.

## Verification boundary

Tests exercise every generated operation with controlled fetch responses, route/body/query bindings, area isolation, success readers and all report iterators. Existing HTTP/error/auth/UTF-16/cancellation tests remain. Local workerd verifies the original five scenarios and authentication without nodejs_compat using the full SDK build. ESM/CJS declarations are compiled.

The backend audit remains 99 fixed, 285 source-verified and 204 uncertain operations. Full SDK coverage does not certify backend payloads or authorization. No authenticated live Clinica calls, deployed Cloudflare test or actual n8n runtime test were performed.
