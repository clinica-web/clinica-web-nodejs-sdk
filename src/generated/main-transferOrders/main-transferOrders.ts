// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainTransferOrders(transport: Transport) {
  /**
   * Creates a transfer order document.
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/transfer-orders
   * Operation ID: CreateTransferOrder
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createTransferOrderResponse(
    args: {
      /**
       * Transfer order payload.
       */ body: Models.ERPTransferOrderEditable;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/transfer-orders",
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
   * Updates a transfer order document.
   * Required scope - `gambit:erp:material:write`
   * PUT /api/erp/v1/transfer-orders/{id}
   * Operation ID: UpdateTransferOrder
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateTransferOrderResponse(
    args: {
      /**
       * Transfer order identifier.
       */ id: number;
      /**
       * Transfer order payload.
       */ body: Models.ERPTransferOrderEditable;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/transfer-orders/{id}",
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
        bodyField: "body",
        bodyRequired: true,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * Soft-deletes a draft transfer order and its items. Confirmed orders cannot be deleted.
   * Required scope - `gambit:erp:material:write`
   * DELETE /api/erp/v1/transfer-orders/{id}
   * Operation ID: DeleteTransferOrder
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteTransferOrderResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/transfer-orders/{id}",
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
   * GetTransferOrderById
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/transfer-orders/{id}
   * Operation ID: GetTransferOrderById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getTransferOrderByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/transfer-orders/{id}",
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
   * GetTransferOrders
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v2/transfer-orders
   * Operation ID: GetTransferOrders
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getTransferOrdersResponse(
    args: { from: string; to: string },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v2/transfer-orders",
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
    createTransferOrderResponse,
    /**
     * Creates a transfer order document.
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/transfer-orders
     * Operation ID: CreateTransferOrder
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createTransferOrder(
      args: {
        /**
         * Transfer order payload.
         */ body: Models.ERPTransferOrderEditable;
      },
      options?: RequestOptions,
    ): Promise<Models.ERPTransferOrder> {
      return transport.read<Models.ERPTransferOrder>(
        await createTransferOrderResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateTransferOrderResponse,
    /**
     * Updates a transfer order document.
     * Required scope - `gambit:erp:material:write`
     * PUT /api/erp/v1/transfer-orders/{id}
     * Operation ID: UpdateTransferOrder
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateTransferOrder(
      args: {
        /**
         * Transfer order identifier.
         */ id: number;
        /**
         * Transfer order payload.
         */ body: Models.ERPTransferOrderEditable;
      },
      options?: RequestOptions,
    ): Promise<Models.Int32BusinessResponse> {
      return transport.read<Models.Int32BusinessResponse>(
        await updateTransferOrderResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    deleteTransferOrderResponse,
    /**
     * Soft-deletes a draft transfer order and its items. Confirmed orders cannot be deleted.
     * Required scope - `gambit:erp:material:write`
     * DELETE /api/erp/v1/transfer-orders/{id}
     * Operation ID: DeleteTransferOrder
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteTransferOrder(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteTransferOrderResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getTransferOrderByIdResponse,
    /**
     * GetTransferOrderById
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/transfer-orders/{id}
     * Operation ID: GetTransferOrderById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getTransferOrderById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPTransferOrder> {
      return transport.read<Models.ERPTransferOrder>(
        await getTransferOrderByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getTransferOrdersResponse,
    /**
     * GetTransferOrders
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v2/transfer-orders
     * Operation ID: GetTransferOrders
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getTransferOrders(
      args: { from: string; to: string },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPTransferOrder>> {
      return transport.read<Array<Models.ERPTransferOrder>>(
        await getTransferOrdersResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
