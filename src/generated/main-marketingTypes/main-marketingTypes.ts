// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainMarketingTypes(transport: Transport) {
  /**
   * GetMarketingTypes
   * Required scope - `gambit:static_data`
   * GET /api/erp/v1/marketingTypes
   * Operation ID: GetMarketingTypes
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getMarketingTypesResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/marketingTypes",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * GetMarketingType
   * Required scope - `gambit:static_data`
   * GET /api/erp/v1/marketingTypes/{id}
   * Operation ID: GetMarketingType
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getMarketingTypeResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/marketingTypes/{id}",
        parameters: [
          {
            name: "id",
            field: "id",
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
    getMarketingTypesResponse,
    /**
     * GetMarketingTypes
     * Required scope - `gambit:static_data`
     * GET /api/erp/v1/marketingTypes
     * Operation ID: GetMarketingTypes
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getMarketingTypes(
      options?: RequestOptions,
    ): Promise<Array<Models.BaseDto>> {
      return transport.read<Array<Models.BaseDto>>(
        await getMarketingTypesResponse(options),
        { "200": { kind: "json" } },
      );
    },
    getMarketingTypeResponse,
    /**
     * GetMarketingType
     * Required scope - `gambit:static_data`
     * GET /api/erp/v1/marketingTypes/{id}
     * Operation ID: GetMarketingType
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getMarketingType(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.BaseDto> {
      return transport.read<Models.BaseDto>(
        await getMarketingTypeResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
