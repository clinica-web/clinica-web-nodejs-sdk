import { createResources } from "./generated";
import { createClientCredentialsProvider } from "./auth/client-credentials/client-credentials";
import { Transport } from "./transport/transport";
import type { ClientOptions, AreaOptions } from "./transport/options";

/** Creates separate main, online and referring identities. Tokens are acquired lazily. */
export function createClinicaClient(options: ClientOptions) {
  function transport(area: AreaOptions) {
    if (area.accessToken !== undefined && area.clientCredentials !== undefined)
      throw new TypeError(
        "Configure accessToken or clientCredentials, not both",
      );
    const fetch = area.fetch ?? options.fetch;
    return new Transport({
      baseUrl: area.baseUrl ?? options.baseUrl,
      fetch,
      accessToken: area.clientCredentials
        ? createClientCredentialsProvider({
            ...area.clientCredentials,
            fetch: area.clientCredentials.fetch ?? fetch,
          }).getAccessToken
        : area.accessToken,
    });
  }
  return createResources(
    transport(options),
    transport(options.online ?? {}),
    transport(options.referring ?? {}),
  );
}
export type ClinicaClient = ReturnType<typeof createClinicaClient>;
export { ApiError } from "./responses/api-error";
export type {
  ClientOptions,
  AreaOptions,
  RequestOptions,
} from "./transport/options";
export type CashDeskQuery = Parameters<ClinicaClient["reports"]["cashDesk"]>[0];
export type AnalysisIdentity = Parameters<
  ClinicaClient["patients"]["getAnalysisConclusion"]
>[0];
export type * from "./models";
