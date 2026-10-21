// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainOrders(transport: Transport) {
  /**
   * CreateErpOrder
   * Required scope - `gambit:erp:salepack:write`
   * POST /api/erp/v1/orders
   * Operation ID: CreateErpOrder
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createErpOrderResponse(
    args: { body: Models.ERPCreateOrderRequest },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/orders",
        parameters: [],
        bodyField: "body",
        bodyRequired: true,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  return {
    createErpOrderResponse,
    /**
     * CreateErpOrder
     * Required scope - `gambit:erp:salepack:write`
     * POST /api/erp/v1/orders
     * Operation ID: CreateErpOrder
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createErpOrder(
      args: { body: Models.ERPCreateOrderRequest },
      options?: RequestOptions,
    ): Promise<Models.ERPCreateOrderResponse> {
      return transport.read<Models.ERPCreateOrderResponse>(
        await createErpOrderResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
