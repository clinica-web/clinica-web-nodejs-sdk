// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainMaterialDocuments(transport: Transport) {
  /**
   * GetMaterialDocuments
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/material-documents
   * Operation ID: GetMaterialDocuments
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getMaterialDocumentsResponse(
    args: {
      storageId: number;
      dateFrom: string;
      dateTo: string;
      /**
       * Values:
       *
       * - `1`: Receipt
       *
       * - `2`: Consumption
       *
       * - `3`: Sale
       *
       * - `4`: Transfer
       *
       * - `5`: AdjustmentIn
       *
       * - `6`: AdjustmentOut
       *
       * - `7`: CostAdjustment
       *
       * - `8`: WriteOff
       *
       * - `9`: ReturnConsumption
       *
       * - `10`: ReturnSale
       *
       * - `11`: ReturnReceipt
       *
       * - `12`: TransferOrder
       *
       *
       */ documentType?: Models.MaterialDocumentType;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/material-documents",
        parameters: [
          {
            name: "storageId",
            field: "storageId",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "dateFrom",
            field: "dateFrom",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "dateTo",
            field: "dateTo",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "documentType",
            field: "documentType",
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
   * GetMaterialDocumentById
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/material-documents/{id}
   * Operation ID: GetMaterialDocumentById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getMaterialDocumentByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/material-documents/{id}",
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
  /**
   * GetMaterialDocumentItems
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/material-documents/{id}/items
   * Operation ID: GetMaterialDocumentItems
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getMaterialDocumentItemsResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/material-documents/{id}/items",
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
  /**
   * GetConsumptionAndSalesMaterialDocuments
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/material-documents/consumption-and-sales
   * Operation ID: GetConsumptionAndSalesMaterialDocuments
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getConsumptionAndSalesMaterialDocumentsResponse(
    args: { dateFrom: string; dateTo: string; storageId?: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/material-documents/consumption-and-sales",
        parameters: [
          {
            name: "dateFrom",
            field: "dateFrom",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "dateTo",
            field: "dateTo",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "storageId",
            field: "storageId",
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
   * GetMaterialDocumentViewById
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/material-documents/{id}/view
   * Operation ID: GetMaterialDocumentViewById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getMaterialDocumentViewByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/material-documents/{id}/view",
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
    getMaterialDocumentsResponse,
    /**
     * GetMaterialDocuments
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/material-documents
     * Operation ID: GetMaterialDocuments
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getMaterialDocuments(
      args: {
        storageId: number;
        dateFrom: string;
        dateTo: string;
        /**
         * Values:
         *
         * - `1`: Receipt
         *
         * - `2`: Consumption
         *
         * - `3`: Sale
         *
         * - `4`: Transfer
         *
         * - `5`: AdjustmentIn
         *
         * - `6`: AdjustmentOut
         *
         * - `7`: CostAdjustment
         *
         * - `8`: WriteOff
         *
         * - `9`: ReturnConsumption
         *
         * - `10`: ReturnSale
         *
         * - `11`: ReturnReceipt
         *
         * - `12`: TransferOrder
         *
         *
         */ documentType?: Models.MaterialDocumentType;
      },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPMaterialDocument>> {
      return transport.read<Array<Models.ERPMaterialDocument>>(
        await getMaterialDocumentsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getMaterialDocumentByIdResponse,
    /**
     * GetMaterialDocumentById
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/material-documents/{id}
     * Operation ID: GetMaterialDocumentById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getMaterialDocumentById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPMaterialDocument> {
      return transport.read<Models.ERPMaterialDocument>(
        await getMaterialDocumentByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getMaterialDocumentItemsResponse,
    /**
     * GetMaterialDocumentItems
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/material-documents/{id}/items
     * Operation ID: GetMaterialDocumentItems
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getMaterialDocumentItems(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPMaterialDocumentItem>> {
      return transport.read<Array<Models.ERPMaterialDocumentItem>>(
        await getMaterialDocumentItemsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getConsumptionAndSalesMaterialDocumentsResponse,
    /**
     * GetConsumptionAndSalesMaterialDocuments
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/material-documents/consumption-and-sales
     * Operation ID: GetConsumptionAndSalesMaterialDocuments
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getConsumptionAndSalesMaterialDocuments(
      args: { dateFrom: string; dateTo: string; storageId?: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPConsumptionReportModel>> {
      return transport.read<Array<Models.ERPConsumptionReportModel>>(
        await getConsumptionAndSalesMaterialDocumentsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getMaterialDocumentViewByIdResponse,
    /**
     * GetMaterialDocumentViewById
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/material-documents/{id}/view
     * Operation ID: GetMaterialDocumentViewById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getMaterialDocumentViewById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPMaterialDocumentViewModel> {
      return transport.read<Models.ERPMaterialDocumentViewModel>(
        await getMaterialDocumentViewByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
