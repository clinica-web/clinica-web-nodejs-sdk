// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainDiscountTemplates(transport: Transport) {
  /**
   * GetDiscountTemplates
   * Required scope - `gambit:static_data`
   * GET /api/erp/v1/discountTemplates
   * Operation ID: GetDiscountTemplates
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getDiscountTemplatesResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/discountTemplates",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * GetDiscountTemplatesLookup
   * Required scope - `gambit:static_data`
   * GET /api/erp/v1/discountTemplates/lookup
   * Operation ID: GetDiscountTemplatesLookup
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getDiscountTemplatesLookupResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/discountTemplates/lookup",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  return {
    getDiscountTemplatesResponse,
    /**
     * GetDiscountTemplates
     * Required scope - `gambit:static_data`
     * GET /api/erp/v1/discountTemplates
     * Operation ID: GetDiscountTemplates
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getDiscountTemplates(
      options?: RequestOptions,
    ): Promise<Array<Models.DiscountTemplateDto>> {
      return transport.read<Array<Models.DiscountTemplateDto>>(
        await getDiscountTemplatesResponse(options),
        { "200": { kind: "json" } },
      );
    },
    getDiscountTemplatesLookupResponse,
    /**
     * GetDiscountTemplatesLookup
     * Required scope - `gambit:static_data`
     * GET /api/erp/v1/discountTemplates/lookup
     * Operation ID: GetDiscountTemplatesLookup
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getDiscountTemplatesLookup(
      options?: RequestOptions,
    ): Promise<Array<Models.BaseDto>> {
      return transport.read<Array<Models.BaseDto>>(
        await getDiscountTemplatesLookupResponse(options),
        { "200": { kind: "json" } },
      );
    },
  };
}
