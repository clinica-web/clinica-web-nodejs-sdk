// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainSalepackExecutors(transport: Transport) {
  /**
   * SearchSalepackExecutors
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/salepackExecutors
   * Operation ID: SearchSalepackExecutors
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function searchSalepackExecutorsResponse(
    args: { start: string; end: string; clinicId?: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/salepackExecutors",
        parameters: [
          {
            name: "start",
            field: "start",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "end",
            field: "end",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "clinicId",
            field: "clinicId",
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
    searchSalepackExecutorsResponse,
    /**
     * SearchSalepackExecutors
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/salepackExecutors
     * Operation ID: SearchSalepackExecutors
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async searchSalepackExecutors(
      args: { start: string; end: string; clinicId?: number },
      options?: RequestOptions,
    ): Promise<Array<Models.BaseERPSalepackExecutor>> {
      return transport.read<Array<Models.BaseERPSalepackExecutor>>(
        await searchSalepackExecutorsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
