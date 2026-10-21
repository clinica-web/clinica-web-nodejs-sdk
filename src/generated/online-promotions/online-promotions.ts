// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createOnlinePromotions(transport: Transport) {
  /**
   * GetPromotions
   * Required scope - `gambit:static_data`
   * GET /api/online/v1/promotions
   * Operation ID: GetPromotions
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPromotionsResponse(options?: RequestOptions): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/promotions",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * product-promotion-info
   * Required scope - `gambit:static_data`
   * GET /api/online/v1/promotions/product-promotion-info
   * Operation ID: GetPromotionPackages
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPromotionPackagesResponse(
    args: { id?: number } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/promotions/product-promotion-info",
        parameters: [
          {
            name: "Id",
            field: "id",
            in: "query",
            required: false,
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
    getPromotionsResponse,
    /**
     * GetPromotions
     * Required scope - `gambit:static_data`
     * GET /api/online/v1/promotions
     * Operation ID: GetPromotions
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPromotions(
      options?: RequestOptions,
    ): Promise<Array<Models.PromotionApiDto>> {
      return transport.read<Array<Models.PromotionApiDto>>(
        await getPromotionsResponse(options),
        { "200": { kind: "json" } },
      );
    },
    getPromotionPackagesResponse,
    /**
     * product-promotion-info
     * Required scope - `gambit:static_data`
     * GET /api/online/v1/promotions/product-promotion-info
     * Operation ID: GetPromotionPackages
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPromotionPackages(
      args: { id?: number } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.PromotionPackagesDto>> {
      return transport.read<Array<Models.PromotionPackagesDto>>(
        await getPromotionPackagesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
