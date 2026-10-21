// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainAssurances(transport: Transport) {
  /**
   * GetAssurance
   * Required scope - `gambit:erp:assurances`
   * GET /api/erp/v1/assurances/{AssuranceId}
   * Operation ID: GetAssuranceById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getAssuranceByIdResponse(
    args: { assuranceId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/assurances/{AssuranceId}",
        parameters: [
          {
            name: "AssuranceId",
            field: "assuranceId",
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
   * UpdateAssurance
   * Required scope - `gambit:erp:assurances`
   * PUT /api/erp/v1/assurances/{AssuranceId}
   * Operation ID: UpdateAssurance
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateAssuranceResponse(
    args: { assuranceId: number; body?: Models.ERPAssurance },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/assurances/{AssuranceId}",
        parameters: [
          {
            name: "AssuranceId",
            field: "assuranceId",
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
   * Required scope - `gambit:erp:assurances`
   * DELETE /api/erp/v1/assurances/{AssuranceId}
   * Operation ID: DeleteAssurance
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteAssuranceResponse(
    args: { assuranceId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/assurances/{AssuranceId}",
        parameters: [
          {
            name: "AssuranceId",
            field: "assuranceId",
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
   * CreateAssurance
   * Required scope - `gambit:erp:assurances`
   * POST /api/erp/v1/assurances
   * Operation ID: CreateAssurance
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createAssuranceResponse(
    args: { body?: Models.ERPAssurance } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/assurances",
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
    getAssuranceByIdResponse,
    /**
     * GetAssurance
     * Required scope - `gambit:erp:assurances`
     * GET /api/erp/v1/assurances/{AssuranceId}
     * Operation ID: GetAssuranceById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getAssuranceById(
      args: { assuranceId: number },
      options?: RequestOptions,
    ): Promise<Models.ERPAssurance> {
      return transport.read<Models.ERPAssurance>(
        await getAssuranceByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateAssuranceResponse,
    /**
     * UpdateAssurance
     * Required scope - `gambit:erp:assurances`
     * PUT /api/erp/v1/assurances/{AssuranceId}
     * Operation ID: UpdateAssurance
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateAssurance(
      args: { assuranceId: number; body?: Models.ERPAssurance },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateAssuranceResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deleteAssuranceResponse,
    /**
     * DeleteAssurance
     * Required scope - `gambit:erp:assurances`
     * DELETE /api/erp/v1/assurances/{AssuranceId}
     * Operation ID: DeleteAssurance
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteAssurance(
      args: { assuranceId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteAssuranceResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    createAssuranceResponse,
    /**
     * CreateAssurance
     * Required scope - `gambit:erp:assurances`
     * POST /api/erp/v1/assurances
     * Operation ID: CreateAssurance
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createAssurance(
      args: { body?: Models.ERPAssurance } = {},
      options?: RequestOptions,
    ): Promise<number> {
      return transport.read<number>(
        await createAssuranceResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
