// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainAdministrativeExpenses(transport: Transport) {
  /**
   * GetAdministrativeExpense
   * Required scope - `gambit:erp:administrative-expenses`
   * GET /api/erp/v1/administrative-expenses
   * Operation ID: GetAdministrativeExpenses
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getAdministrativeExpensesResponse(
    args: { from?: string; to?: string } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/administrative-expenses",
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
   * CreateAssurance
   * Required scope - `gambit:erp:administrative-expenses`
   * POST /api/erp/v1/administrative-expenses
   * Operation ID: CreateAdministrativeExpense
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createAdministrativeExpenseResponse(
    args: { body?: Models.ERPAdministrativeExpense } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/administrative-expenses",
        parameters: [],
        bodyField: "body",
        bodyRequired: false,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * GetAssurance
   * Required scope - `gambit:erp:administrative-expenses`
   * GET /api/erp/v1/administrative-expenses/{AdministrativeExpenseId}
   * Operation ID: GetAdministrativeExpenseById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getAdministrativeExpenseByIdResponse(
    args: { administrativeExpenseId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/administrative-expenses/{AdministrativeExpenseId}",
        parameters: [
          {
            name: "AdministrativeExpenseId",
            field: "administrativeExpenseId",
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
   * UpdateAdministrativeExpense
   * Required scope - `gambit:erp:administrative-expenses`
   * PUT /api/erp/v1/administrative-expenses/{AdministrativeExpenseId}
   * Operation ID: UpdateAdministrativeExpense
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateAdministrativeExpenseResponse(
    args: {
      administrativeExpenseId: number;
      body?: Models.ERPAdministrativeExpense;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/administrative-expenses/{AdministrativeExpenseId}",
        parameters: [
          {
            name: "AdministrativeExpenseId",
            field: "administrativeExpenseId",
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
   * DeleteAssurance
   * Required scope - `gambit:erp:administrative-expenses`
   * DELETE /api/erp/v1/administrative-expenses/{AdministrativeExpenseId}
   * Operation ID: DeleteAdministrativeExpense
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteAdministrativeExpenseResponse(
    args: {
      administrativeExpenseId: number;
      deletedById?: number;
      body?: string;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/administrative-expenses/{AdministrativeExpenseId}",
        parameters: [
          {
            name: "AdministrativeExpenseId",
            field: "administrativeExpenseId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "DeletedById",
            field: "deletedById",
            in: "query",
            required: false,
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
  return {
    getAdministrativeExpensesResponse,
    /**
     * GetAdministrativeExpense
     * Required scope - `gambit:erp:administrative-expenses`
     * GET /api/erp/v1/administrative-expenses
     * Operation ID: GetAdministrativeExpenses
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getAdministrativeExpenses(
      args: { from?: string; to?: string } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.ERPAdministrativeExpense> | undefined> {
      return transport.read<Array<Models.ERPAdministrativeExpense> | undefined>(
        await getAdministrativeExpensesResponse(args, options),
        { "200": { kind: "json" }, "204": { kind: "empty" } },
      );
    },
    createAdministrativeExpenseResponse,
    /**
     * CreateAssurance
     * Required scope - `gambit:erp:administrative-expenses`
     * POST /api/erp/v1/administrative-expenses
     * Operation ID: CreateAdministrativeExpense
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createAdministrativeExpense(
      args: { body?: Models.ERPAdministrativeExpense } = {},
      options?: RequestOptions,
    ): Promise<number> {
      return transport.read<number>(
        await createAdministrativeExpenseResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getAdministrativeExpenseByIdResponse,
    /**
     * GetAssurance
     * Required scope - `gambit:erp:administrative-expenses`
     * GET /api/erp/v1/administrative-expenses/{AdministrativeExpenseId}
     * Operation ID: GetAdministrativeExpenseById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getAdministrativeExpenseById(
      args: { administrativeExpenseId: number },
      options?: RequestOptions,
    ): Promise<Models.ERPAdministrativeExpense> {
      return transport.read<Models.ERPAdministrativeExpense>(
        await getAdministrativeExpenseByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateAdministrativeExpenseResponse,
    /**
     * UpdateAdministrativeExpense
     * Required scope - `gambit:erp:administrative-expenses`
     * PUT /api/erp/v1/administrative-expenses/{AdministrativeExpenseId}
     * Operation ID: UpdateAdministrativeExpense
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateAdministrativeExpense(
      args: {
        administrativeExpenseId: number;
        body?: Models.ERPAdministrativeExpense;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateAdministrativeExpenseResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deleteAdministrativeExpenseResponse,
    /**
     * DeleteAssurance
     * Required scope - `gambit:erp:administrative-expenses`
     * DELETE /api/erp/v1/administrative-expenses/{AdministrativeExpenseId}
     * Operation ID: DeleteAdministrativeExpense
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteAdministrativeExpense(
      args: {
        administrativeExpenseId: number;
        deletedById?: number;
        body?: string;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteAdministrativeExpenseResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
