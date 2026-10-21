// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainTransferMaterials(transport: Transport) {
  /**
   * GetTransferMaterials
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/transfer-materials
   * Operation ID: GetTransferMaterials
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getTransferMaterialsResponse(
    args: { from?: string; to?: string } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/transfer-materials",
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
   * Creates a transfer material document and optionally applies it immediately.
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/transfer-materials
   * Operation ID: CreateTransferMaterial
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createTransferMaterialResponse(
    args: {
      /**
       * Whether the document should be applied immediately.
       */ apply?: boolean;
      /**
       * Transfer material payload.
       */ body: Models.ERPTransferMaterialEditable;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/transfer-materials",
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
   * Updates a transfer material document.
   * Required scope - `gambit:erp:material:write`
   * PUT /api/erp/v1/transfer-materials/{id}
   * Operation ID: UpdateTransferMaterial
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateTransferMaterialResponse(
    args: {
      /**
       * Transfer material identifier.
       */ id: number;
      /**
       * Whether the document should be applied immediately.
       */ apply?: boolean;
      /**
       * Transfer material payload.
       */ body: Models.ERPTransferMaterialEditable;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/transfer-materials/{id}",
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
   * Deletes a transfer material document by identifier. Only non-applied documents can be deleted.
   * Required scope - `gambit:erp:material:write`
   * DELETE /api/erp/v1/transfer-materials/{id}
   * Operation ID: DeleteTransferMaterial
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteTransferMaterialResponse(
    args: {
      /**
       * Transfer material identifier.
       */ id: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/transfer-materials/{id}",
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
   * GetTransferMaterialById
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/transfer-materials/{id}
   * Operation ID: GetTransferMaterialById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getTransferMaterialByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/transfer-materials/{id}",
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
   * Applies a transfer material document by identifier.
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/transfer-materials/{id}/apply
   * Operation ID: ApplyTransferMaterial
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function applyTransferMaterialResponse(
    args: {
      /**
       * Transfer material identifier.
       */ id: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/transfer-materials/{id}/apply",
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
    getTransferMaterialsResponse,
    /**
     * GetTransferMaterials
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/transfer-materials
     * Operation ID: GetTransferMaterials
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getTransferMaterials(
      args: { from?: string; to?: string } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.ERPTransferMaterial>> {
      return transport.read<Array<Models.ERPTransferMaterial>>(
        await getTransferMaterialsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createTransferMaterialResponse,
    /**
     * Creates a transfer material document and optionally applies it immediately.
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/transfer-materials
     * Operation ID: CreateTransferMaterial
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createTransferMaterial(
      args: {
        /**
         * Whether the document should be applied immediately.
         */ apply?: boolean;
        /**
         * Transfer material payload.
         */ body: Models.ERPTransferMaterialEditable;
      },
      options?: RequestOptions,
    ): Promise<Models.ERPTransferMaterial> {
      return transport.read<Models.ERPTransferMaterial>(
        await createTransferMaterialResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateTransferMaterialResponse,
    /**
     * Updates a transfer material document.
     * Required scope - `gambit:erp:material:write`
     * PUT /api/erp/v1/transfer-materials/{id}
     * Operation ID: UpdateTransferMaterial
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateTransferMaterial(
      args: {
        /**
         * Transfer material identifier.
         */ id: number;
        /**
         * Whether the document should be applied immediately.
         */ apply?: boolean;
        /**
         * Transfer material payload.
         */ body: Models.ERPTransferMaterialEditable;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateTransferMaterialResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deleteTransferMaterialResponse,
    /**
     * Deletes a transfer material document by identifier. Only non-applied documents can be deleted.
     * Required scope - `gambit:erp:material:write`
     * DELETE /api/erp/v1/transfer-materials/{id}
     * Operation ID: DeleteTransferMaterial
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteTransferMaterial(
      args: {
        /**
         * Transfer material identifier.
         */ id: number;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteTransferMaterialResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getTransferMaterialByIdResponse,
    /**
     * GetTransferMaterialById
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/transfer-materials/{id}
     * Operation ID: GetTransferMaterialById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getTransferMaterialById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPTransferMaterial> {
      return transport.read<Models.ERPTransferMaterial>(
        await getTransferMaterialByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    applyTransferMaterialResponse,
    /**
     * Applies a transfer material document by identifier.
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/transfer-materials/{id}/apply
     * Operation ID: ApplyTransferMaterial
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async applyTransferMaterial(
      args: {
        /**
         * Transfer material identifier.
         */ id: number;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await applyTransferMaterialResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
