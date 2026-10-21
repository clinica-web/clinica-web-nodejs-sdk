// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainWards(transport: Transport) {
  /**
   * GetWards
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/wards
   * Operation ID: GetWards
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getWardsResponse(options?: RequestOptions): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/wards",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * CreateWard
   * Required scope - `gambit:erp`
   * POST /api/erp/v1/wards
   * Operation ID: CreateWard
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createWardResponse(
    args: { body: Models.EditableERPWard },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/wards",
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
   * GetWardById
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/wards/{id}
   * Operation ID: GetWardById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getWardByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/wards/{id}",
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
   * UpdateWard
   * Required scope - `gambit:erp`
   * PUT /api/erp/v1/wards/{id}
   * Operation ID: UpdateWard
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateWardResponse(
    args: { id: number; body: Models.EditableERPWard },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/wards/{id}",
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
   * DeleteWard
   * Required scope - `gambit:erp`
   * DELETE /api/erp/v1/wards/{id}
   * Operation ID: DeleteWard
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteWardResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/wards/{id}",
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
    getWardsResponse,
    /**
     * GetWards
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/wards
     * Operation ID: GetWards
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getWards(options?: RequestOptions): Promise<Array<Models.ERPWard>> {
      return transport.read<Array<Models.ERPWard>>(
        await getWardsResponse(options),
        { "200": { kind: "json" } },
      );
    },
    createWardResponse,
    /**
     * CreateWard
     * Required scope - `gambit:erp`
     * POST /api/erp/v1/wards
     * Operation ID: CreateWard
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createWard(
      args: { body: Models.EditableERPWard },
      options?: RequestOptions,
    ): Promise<Models.ERPWard> {
      return transport.read<Models.ERPWard>(
        await createWardResponse(args, options),
        { "201": { kind: "json" } },
      );
    },
    getWardByIdResponse,
    /**
     * GetWardById
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/wards/{id}
     * Operation ID: GetWardById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getWardById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPWard> {
      return transport.read<Models.ERPWard>(
        await getWardByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateWardResponse,
    /**
     * UpdateWard
     * Required scope - `gambit:erp`
     * PUT /api/erp/v1/wards/{id}
     * Operation ID: UpdateWard
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateWard(
      args: { id: number; body: Models.EditableERPWard },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(await updateWardResponse(args, options), {
        "200": { kind: "unknown" },
      });
    },
    deleteWardResponse,
    /**
     * DeleteWard
     * Required scope - `gambit:erp`
     * DELETE /api/erp/v1/wards/{id}
     * Operation ID: DeleteWard
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteWard(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(await deleteWardResponse(args, options), {
        "200": { kind: "unknown" },
      });
    },
  };
}
