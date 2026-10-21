// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainAdministrativeExpensesCategory(transport: Transport) {
  /**
   * GetAdministrativeExpenseCategory
   * Required scope - `gambit:erp:administrative-expenses-category`
   * GET /api/erp/v1/administrative-expenses-category/{Id}
   * Operation ID: GetAdministrativeExpenseCategoryById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getAdministrativeExpenseCategoryByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/administrative-expenses-category/{Id}",
        parameters: [
          {
            name: "Id",
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
   * UpdateAdministrativeExpenseCategory
   * Required scope - `gambit:erp:administrative-expenses-category`
   * PUT /api/erp/v1/administrative-expenses-category/{Id}
   * Operation ID: UpdateAdministrativeExpenseCategory
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateAdministrativeExpenseCategoryResponse(
    args: { id: number; body?: Models.ERPAdministrativeExpenseCategory },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/administrative-expenses-category/{Id}",
        parameters: [
          {
            name: "Id",
            field: "id",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
        ],
        bodyField: "body",
        bodyRequired: false,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * DeleteAdministrativeExpenseCategories
   * Required scope - `gambit:erp:administrative-expenses-category`
   * DELETE /api/erp/v1/administrative-expenses-category/{Id}
   * Operation ID: DeleteAdministrativeExpenseCategory
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteAdministrativeExpenseCategoryResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/administrative-expenses-category/{Id}",
        parameters: [
          {
            name: "Id",
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
   * CreateAdministrativeExpenseCategory
   * Required scope - `gambit:erp:administrative-expenses-category`
   * POST /api/erp/v1/administrative-expenses-category
   * Operation ID: CreateAdministrativeExpenseCategory
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createAdministrativeExpenseCategoryResponse(
    args: { body?: Models.ERPAdministrativeExpenseCategory } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/administrative-expenses-category",
        parameters: [],
        bodyField: "body",
        bodyRequired: false,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  return {
    getAdministrativeExpenseCategoryByIdResponse,
    /**
     * GetAdministrativeExpenseCategory
     * Required scope - `gambit:erp:administrative-expenses-category`
     * GET /api/erp/v1/administrative-expenses-category/{Id}
     * Operation ID: GetAdministrativeExpenseCategoryById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getAdministrativeExpenseCategoryById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPAdministrativeExpenseCategory> {
      return transport.read<Models.ERPAdministrativeExpenseCategory>(
        await getAdministrativeExpenseCategoryByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateAdministrativeExpenseCategoryResponse,
    /**
     * UpdateAdministrativeExpenseCategory
     * Required scope - `gambit:erp:administrative-expenses-category`
     * PUT /api/erp/v1/administrative-expenses-category/{Id}
     * Operation ID: UpdateAdministrativeExpenseCategory
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateAdministrativeExpenseCategory(
      args: { id: number; body?: Models.ERPAdministrativeExpenseCategory },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateAdministrativeExpenseCategoryResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deleteAdministrativeExpenseCategoryResponse,
    /**
     * DeleteAdministrativeExpenseCategories
     * Required scope - `gambit:erp:administrative-expenses-category`
     * DELETE /api/erp/v1/administrative-expenses-category/{Id}
     * Operation ID: DeleteAdministrativeExpenseCategory
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteAdministrativeExpenseCategory(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteAdministrativeExpenseCategoryResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    createAdministrativeExpenseCategoryResponse,
    /**
     * CreateAdministrativeExpenseCategory
     * Required scope - `gambit:erp:administrative-expenses-category`
     * POST /api/erp/v1/administrative-expenses-category
     * Operation ID: CreateAdministrativeExpenseCategory
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createAdministrativeExpenseCategory(
      args: { body?: Models.ERPAdministrativeExpenseCategory } = {},
      options?: RequestOptions,
    ): Promise<number> {
      return transport.read<number>(
        await createAdministrativeExpenseCategoryResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
