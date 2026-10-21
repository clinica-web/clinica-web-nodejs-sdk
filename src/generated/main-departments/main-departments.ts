// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainDepartments(transport: Transport) {
  /**
   * GetDepartments
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/departments
   * Operation ID: GetDepartments
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getDepartmentsResponse(options?: RequestOptions): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/departments",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * CreateDepartmentByExternalId
   * Required scope - `gambit:erp`
   * POST /api/erp/v1/departments
   * Operation ID: CreateDepartmentByExternalId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createDepartmentByExternalIdResponse(
    args: { body: Models.ERPDepartmentEditModel },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/departments",
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
   * GetDepartmentById
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/departments/{id}
   * Operation ID: GetDepartmentById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getDepartmentByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/departments/{id}",
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
   * DeleteDepartmentById
   * Required scope - `gambit:erp`
   * DELETE /api/erp/v1/departments/{id}
   * Operation ID: DeleteDepartmentById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteDepartmentByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/departments/{id}",
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
   * UpdateDepartmentById
   * Required scope - `gambit:erp`
   * PUT /api/erp/v1/departments/{id}
   * Operation ID: UpdateDepartmentById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateDepartmentByIdResponse(
    args: { id: number; body: Models.ERPDepartmentEditModel },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/departments/{id}",
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
   * GetDepartmentByExternalId
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/departments/{externalId}
   * Operation ID: GetDepartmentByExternalId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getDepartmentByExternalIdResponse(
    args: { externalId: string },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/departments/{externalId}",
        parameters: [
          {
            name: "externalId",
            field: "externalId",
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
   * DeleteDepartmentByExternalId
   * Required scope - `gambit:erp`
   * DELETE /api/erp/v1/departments/{externalId}
   * Operation ID: DeleteDepartmentByExternalId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteDepartmentByExternalIdResponse(
    args: { externalId: string },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/departments/{externalId}",
        parameters: [
          {
            name: "externalId",
            field: "externalId",
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
   * UpdateDepartmentByExternalId
   * Required scope - `gambit:erp`
   * PUT /api/erp/v1/departments/{externalId}
   * Operation ID: UpdateDepartmentByExternalId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateDepartmentByExternalIdResponse(
    args: { externalId: string; body: Models.ERPDepartmentEditModel },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/departments/{externalId}",
        parameters: [
          {
            name: "externalId",
            field: "externalId",
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
  return {
    getDepartmentsResponse,
    /**
     * GetDepartments
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/departments
     * Operation ID: GetDepartments
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getDepartments(
      options?: RequestOptions,
    ): Promise<Array<Models.ERPDepartment>> {
      return transport.read<Array<Models.ERPDepartment>>(
        await getDepartmentsResponse(options),
        { "200": { kind: "json" } },
      );
    },
    createDepartmentByExternalIdResponse,
    /**
     * CreateDepartmentByExternalId
     * Required scope - `gambit:erp`
     * POST /api/erp/v1/departments
     * Operation ID: CreateDepartmentByExternalId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createDepartmentByExternalId(
      args: { body: Models.ERPDepartmentEditModel },
      options?: RequestOptions,
    ): Promise<Models.BaseDto> {
      return transport.read<Models.BaseDto>(
        await createDepartmentByExternalIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getDepartmentByIdResponse,
    /**
     * GetDepartmentById
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/departments/{id}
     * Operation ID: GetDepartmentById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getDepartmentById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPDepartment> {
      return transport.read<Models.ERPDepartment>(
        await getDepartmentByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    deleteDepartmentByIdResponse,
    /**
     * DeleteDepartmentById
     * Required scope - `gambit:erp`
     * DELETE /api/erp/v1/departments/{id}
     * Operation ID: DeleteDepartmentById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteDepartmentById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteDepartmentByIdResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    updateDepartmentByIdResponse,
    /**
     * UpdateDepartmentById
     * Required scope - `gambit:erp`
     * PUT /api/erp/v1/departments/{id}
     * Operation ID: UpdateDepartmentById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateDepartmentById(
      args: { id: number; body: Models.ERPDepartmentEditModel },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateDepartmentByIdResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getDepartmentByExternalIdResponse,
    /**
     * GetDepartmentByExternalId
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/departments/{externalId}
     * Operation ID: GetDepartmentByExternalId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getDepartmentByExternalId(
      args: { externalId: string },
      options?: RequestOptions,
    ): Promise<Models.ERPDepartment> {
      return transport.read<Models.ERPDepartment>(
        await getDepartmentByExternalIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    deleteDepartmentByExternalIdResponse,
    /**
     * DeleteDepartmentByExternalId
     * Required scope - `gambit:erp`
     * DELETE /api/erp/v1/departments/{externalId}
     * Operation ID: DeleteDepartmentByExternalId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteDepartmentByExternalId(
      args: { externalId: string },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteDepartmentByExternalIdResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    updateDepartmentByExternalIdResponse,
    /**
     * UpdateDepartmentByExternalId
     * Required scope - `gambit:erp`
     * PUT /api/erp/v1/departments/{externalId}
     * Operation ID: UpdateDepartmentByExternalId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateDepartmentByExternalId(
      args: { externalId: string; body: Models.ERPDepartmentEditModel },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateDepartmentByExternalIdResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
