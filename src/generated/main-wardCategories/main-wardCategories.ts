// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainWardCategories(transport: Transport) {
  /**
   * GetWardCategories
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/ward-categories
   * Operation ID: GetWardCategories
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getWardCategoriesResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/ward-categories",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * CreateWardCategory
   * Required scope - `gambit:erp`
   * POST /api/erp/v1/ward-categories
   * Operation ID: CreateWardCategory
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createWardCategoryResponse(
    args: { body: Models.EditableERPWardCategory },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/ward-categories",
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
   * GetWardCategoryById
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/ward-categories/{id}
   * Operation ID: GetWardCategoryById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getWardCategoryByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/ward-categories/{id}",
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
   * UpdateWardCategory
   * Required scope - `gambit:erp`
   * PUT /api/erp/v1/ward-categories/{id}
   * Operation ID: UpdateWardCategory
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateWardCategoryResponse(
    args: { id: number; body: Models.EditableERPWardCategory },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/ward-categories/{id}",
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
   * DeleteWardCategory
   * Required scope - `gambit:erp`
   * DELETE /api/erp/v1/ward-categories/{id}
   * Operation ID: DeleteWardCategory
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteWardCategoryResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/ward-categories/{id}",
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
    getWardCategoriesResponse,
    /**
     * GetWardCategories
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/ward-categories
     * Operation ID: GetWardCategories
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getWardCategories(
      options?: RequestOptions,
    ): Promise<Array<Models.ERPWardCategory>> {
      return transport.read<Array<Models.ERPWardCategory>>(
        await getWardCategoriesResponse(options),
        { "200": { kind: "json" } },
      );
    },
    createWardCategoryResponse,
    /**
     * CreateWardCategory
     * Required scope - `gambit:erp`
     * POST /api/erp/v1/ward-categories
     * Operation ID: CreateWardCategory
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createWardCategory(
      args: { body: Models.EditableERPWardCategory },
      options?: RequestOptions,
    ): Promise<Models.ERPWardCategory> {
      return transport.read<Models.ERPWardCategory>(
        await createWardCategoryResponse(args, options),
        { "201": { kind: "json" } },
      );
    },
    getWardCategoryByIdResponse,
    /**
     * GetWardCategoryById
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/ward-categories/{id}
     * Operation ID: GetWardCategoryById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getWardCategoryById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPWardCategory> {
      return transport.read<Models.ERPWardCategory>(
        await getWardCategoryByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateWardCategoryResponse,
    /**
     * UpdateWardCategory
     * Required scope - `gambit:erp`
     * PUT /api/erp/v1/ward-categories/{id}
     * Operation ID: UpdateWardCategory
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateWardCategory(
      args: { id: number; body: Models.EditableERPWardCategory },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateWardCategoryResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deleteWardCategoryResponse,
    /**
     * DeleteWardCategory
     * Required scope - `gambit:erp`
     * DELETE /api/erp/v1/ward-categories/{id}
     * Operation ID: DeleteWardCategory
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteWardCategory(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteWardCategoryResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
