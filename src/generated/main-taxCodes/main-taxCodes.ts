// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainTaxCodes(transport: Transport) {
  /**
   * GetTaxCodes
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/tax-codes
   * Operation ID: GetTaxCodes
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getTaxCodesResponse(options?: RequestOptions): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/tax-codes",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * GetTaxCode
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/tax-codes/{id}
   * Operation ID: GetTaxCode
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getTaxCodeResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/tax-codes/{id}",
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
    getTaxCodesResponse,
    /**
     * GetTaxCodes
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/tax-codes
     * Operation ID: GetTaxCodes
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getTaxCodes(
      options?: RequestOptions,
    ): Promise<Array<Models.ERPTaxCode>> {
      return transport.read<Array<Models.ERPTaxCode>>(
        await getTaxCodesResponse(options),
        { "200": { kind: "json" } },
      );
    },
    getTaxCodeResponse,
    /**
     * GetTaxCode
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/tax-codes/{id}
     * Operation ID: GetTaxCode
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getTaxCode(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPTaxCode> {
      return transport.read<Models.ERPTaxCode>(
        await getTaxCodeResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
