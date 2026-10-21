// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainDictionaries(transport: Transport) {
  /**
   * GetAppDictionariesByName
   * Required scope - `gambit:static_data`
   * GET /api/v2/dictionaries/{name}
   * Operation ID: GetAppDictionariesByName
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getAppDictionariesByNameResponse(
    args: { name: string },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/v2/dictionaries/{name}",
        parameters: [
          {
            name: "name",
            field: "name",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
        ],
        accept: "application/json",
      },
      args,
      options,
    );
  }
  return {
    getAppDictionariesByNameResponse,
    /**
     * GetAppDictionariesByName
     * Required scope - `gambit:static_data`
     * GET /api/v2/dictionaries/{name}
     * Operation ID: GetAppDictionariesByName
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getAppDictionariesByName(
      args: { name: string },
      options?: RequestOptions,
    ): Promise<Models.EhealthDictionariesV2> {
      return transport.read<Models.EhealthDictionariesV2>(
        await getAppDictionariesByNameResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
