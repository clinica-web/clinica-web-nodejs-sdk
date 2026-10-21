// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainSalesInvoice(transport: Transport) {
  /**
   * GetSalesInvoices
   * Required scope - `gambit:erp:sales-invoice`
   * GET /api/erp/v1/sales-invoice
   * Operation ID: GetSalesInvoices
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getSalesInvoicesResponse(
    args: { from?: string; to?: string } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/sales-invoice",
        parameters: [
          {
            name: "from",
            field: "from",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "to",
            field: "to",
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
  /**
   * GetSalesInvoice
   * Required scope - `gambit:erp:sales-invoice`
   * GET /api/erp/v1/sales-invoice/{salesInvoiceId}
   * Operation ID: GetSalesInvoiceById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getSalesInvoiceByIdResponse(
    args: { salesInvoiceId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/sales-invoice/{salesInvoiceId}",
        parameters: [
          {
            name: "salesInvoiceId",
            field: "salesInvoiceId",
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
  /**
   * GetSalesInvoice
   * Required scope - `gambit:erp:sales-invoice`
   * GET /api/erp/v1/sales-invoice/{salesInvoiceId}/sales-invoice-nomenclature
   * Operation ID: GetSalesInvoiceNomenclatures
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getSalesInvoiceNomenclaturesResponse(
    args: { salesInvoiceId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/sales-invoice/{salesInvoiceId}/sales-invoice-nomenclature",
        parameters: [
          {
            name: "salesInvoiceId",
            field: "salesInvoiceId",
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
    getSalesInvoicesResponse,
    /**
     * GetSalesInvoices
     * Required scope - `gambit:erp:sales-invoice`
     * GET /api/erp/v1/sales-invoice
     * Operation ID: GetSalesInvoices
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getSalesInvoices(
      args: { from?: string; to?: string } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.ERPSalesInvoice>> {
      return transport.read<Array<Models.ERPSalesInvoice>>(
        await getSalesInvoicesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getSalesInvoiceByIdResponse,
    /**
     * GetSalesInvoice
     * Required scope - `gambit:erp:sales-invoice`
     * GET /api/erp/v1/sales-invoice/{salesInvoiceId}
     * Operation ID: GetSalesInvoiceById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getSalesInvoiceById(
      args: { salesInvoiceId: number },
      options?: RequestOptions,
    ): Promise<Models.ERPSalesInvoice> {
      return transport.read<Models.ERPSalesInvoice>(
        await getSalesInvoiceByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getSalesInvoiceNomenclaturesResponse,
    /**
     * GetSalesInvoice
     * Required scope - `gambit:erp:sales-invoice`
     * GET /api/erp/v1/sales-invoice/{salesInvoiceId}/sales-invoice-nomenclature
     * Operation ID: GetSalesInvoiceNomenclatures
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getSalesInvoiceNomenclatures(
      args: { salesInvoiceId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPSalesInvoiceNomenclature>> {
      return transport.read<Array<Models.ERPSalesInvoiceNomenclature>>(
        await getSalesInvoiceNomenclaturesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
