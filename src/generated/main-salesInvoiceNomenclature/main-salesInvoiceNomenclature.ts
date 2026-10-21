// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainSalesInvoiceNomenclature(transport: Transport) {
  /**
   * GetSalesInvoice
   * Required scope - `gambit:erp:sales-invoice`
   * GET /api/erp/v1/sales-invoice-nomenclature/{salesInvoiceNomenclatureId}
   * Operation ID: GetSalesInvoiceNomenclatureById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getSalesInvoiceNomenclatureByIdResponse(
    args: { salesInvoiceNomenclatureId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/sales-invoice-nomenclature/{salesInvoiceNomenclatureId}",
        parameters: [
          {
            name: "salesInvoiceNomenclatureId",
            field: "salesInvoiceNomenclatureId",
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
    getSalesInvoiceNomenclatureByIdResponse,
    /**
     * GetSalesInvoice
     * Required scope - `gambit:erp:sales-invoice`
     * GET /api/erp/v1/sales-invoice-nomenclature/{salesInvoiceNomenclatureId}
     * Operation ID: GetSalesInvoiceNomenclatureById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getSalesInvoiceNomenclatureById(
      args: { salesInvoiceNomenclatureId: number },
      options?: RequestOptions,
    ): Promise<Models.ERPSalesInvoiceNomenclature> {
      return transport.read<Models.ERPSalesInvoiceNomenclature>(
        await getSalesInvoiceNomenclatureByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
