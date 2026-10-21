// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainGoodsReceipts(transport: Transport) {
  /**
   * GetGoodsReceiptLookup
   * Required scope - `gambit:erp:material:read`
   * POST /api/erp/v1/goods-receipts/lookup
   * Operation ID: GetGoodsReceiptLookup
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getGoodsReceiptLookupResponse(
    args: { body: Models.ERPGoodsReceiptLookupQuery },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/goods-receipts/lookup",
        parameters: [],
        bodyField: "body",
        bodyRequired: true,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * Creates a goods receipt document and optionally applies it immediately.
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/goods-receipts
   * Operation ID: CreateGoodsReceipt
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createGoodsReceiptResponse(
    args: {
      /**
       * Whether the document should be applied immediately.
       */ apply?: boolean;
      /**
       * Goods receipt payload.
       */ body: Models.ERPCreateGoodsReceipt;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/goods-receipts",
        parameters: [
          {
            name: "apply",
            field: "apply",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
        ],
        bodyField: "body",
        bodyRequired: true,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * Updates a goods receipt document and optionally applies it immediately.
   * Required scope - `gambit:erp:material:write`
   * PUT /api/erp/v1/goods-receipts/{id}
   * Operation ID: UpdateGoodsReceipt
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateGoodsReceiptResponse(
    args: {
      /**
       * Goods receipt identifier.
       */ id: number;
      /**
       * Whether the document should be applied immediately.
       */ apply?: boolean;
      /**
       * Goods receipt payload.
       */ body: Models.ERPUpdateGoodsReceipt;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/goods-receipts/{id}",
        parameters: [
          {
            name: "id",
            field: "id",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "apply",
            field: "apply",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
        ],
        bodyField: "body",
        bodyRequired: true,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * GetGoodsReceiptById
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/goods-receipts/{id}
   * Operation ID: GetGoodsReceiptById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getGoodsReceiptByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/goods-receipts/{id}",
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
   * Deletes a goods receipt material document by identifier. Only non-applied documents can be deleted.
   * Required scope - `gambit:erp:material:write`
   * DELETE /api/erp/v1/goods-receipts/{id}
   * Operation ID: DeleteGoodsReceipt
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteGoodsReceiptResponse(
    args: {
      /**
       * Goods receipt identifier.
       */ id: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/goods-receipts/{id}",
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
   * Unapplies (reverses) a goods receipt document by identifier.
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/goods-receipts/{id}/unapply
   * Operation ID: UnapplyGoodsReceipt
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function unapplyGoodsReceiptResponse(
    args: {
      /**
       * Goods receipt identifier.
       */ id: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/goods-receipts/{id}/unapply",
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
   * Returns goods receipts with filtering and pagination applied.
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v2/goods-receipts
   * Operation ID: GetGoodsReceipts
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getGoodsReceiptsResponse(
    args: { from: string; to: string },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v2/goods-receipts",
        parameters: [
          {
            name: "from",
            field: "from",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "to",
            field: "to",
            in: "query",
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
    getGoodsReceiptLookupResponse,
    /**
     * GetGoodsReceiptLookup
     * Required scope - `gambit:erp:material:read`
     * POST /api/erp/v1/goods-receipts/lookup
     * Operation ID: GetGoodsReceiptLookup
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getGoodsReceiptLookup(
      args: { body: Models.ERPGoodsReceiptLookupQuery },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPGoodsReceiptLookup>> {
      return transport.read<Array<Models.ERPGoodsReceiptLookup>>(
        await getGoodsReceiptLookupResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createGoodsReceiptResponse,
    /**
     * Creates a goods receipt document and optionally applies it immediately.
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/goods-receipts
     * Operation ID: CreateGoodsReceipt
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createGoodsReceipt(
      args: {
        /**
         * Whether the document should be applied immediately.
         */ apply?: boolean;
        /**
         * Goods receipt payload.
         */ body: Models.ERPCreateGoodsReceipt;
      },
      options?: RequestOptions,
    ): Promise<Models.ERPGoodsReceipt> {
      return transport.read<Models.ERPGoodsReceipt>(
        await createGoodsReceiptResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateGoodsReceiptResponse,
    /**
     * Updates a goods receipt document and optionally applies it immediately.
     * Required scope - `gambit:erp:material:write`
     * PUT /api/erp/v1/goods-receipts/{id}
     * Operation ID: UpdateGoodsReceipt
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateGoodsReceipt(
      args: {
        /**
         * Goods receipt identifier.
         */ id: number;
        /**
         * Whether the document should be applied immediately.
         */ apply?: boolean;
        /**
         * Goods receipt payload.
         */ body: Models.ERPUpdateGoodsReceipt;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateGoodsReceiptResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getGoodsReceiptByIdResponse,
    /**
     * GetGoodsReceiptById
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/goods-receipts/{id}
     * Operation ID: GetGoodsReceiptById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getGoodsReceiptById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPGoodsReceipt> {
      return transport.read<Models.ERPGoodsReceipt>(
        await getGoodsReceiptByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    deleteGoodsReceiptResponse,
    /**
     * Deletes a goods receipt material document by identifier. Only non-applied documents can be deleted.
     * Required scope - `gambit:erp:material:write`
     * DELETE /api/erp/v1/goods-receipts/{id}
     * Operation ID: DeleteGoodsReceipt
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteGoodsReceipt(
      args: {
        /**
         * Goods receipt identifier.
         */ id: number;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteGoodsReceiptResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    unapplyGoodsReceiptResponse,
    /**
     * Unapplies (reverses) a goods receipt document by identifier.
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/goods-receipts/{id}/unapply
     * Operation ID: UnapplyGoodsReceipt
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async unapplyGoodsReceipt(
      args: {
        /**
         * Goods receipt identifier.
         */ id: number;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await unapplyGoodsReceiptResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getGoodsReceiptsResponse,
    /**
     * Returns goods receipts with filtering and pagination applied.
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v2/goods-receipts
     * Operation ID: GetGoodsReceipts
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getGoodsReceipts(
      args: { from: string; to: string },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPGoodsReceipt>> {
      return transport.read<Array<Models.ERPGoodsReceipt>>(
        await getGoodsReceiptsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
