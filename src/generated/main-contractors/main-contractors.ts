// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainContractors(transport: Transport) {
  /**
   * GetAllContractors
   * Required scope - `gambit:erp:contractors`
   * GET /api/erp/v1/contractors
   * Operation ID: GetContractors
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getContractorsResponse(options?: RequestOptions): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/contractors",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * CreateContractor
   * Required scope - `gambit:erp:contractors`
   * POST /api/erp/v1/contractors
   * Operation ID: CreateContractor
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createContractorResponse(
    args: { body?: Models.ERPContractor } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/contractors",
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
   * GetContractor
   * Required scope - `gambit:erp:contractors`
   * GET /api/erp/v1/contractors/{contractorId}
   * Operation ID: GetContractorById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getContractorByIdResponse(
    args: { contractorId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/contractors/{contractorId}",
        parameters: [
          {
            name: "contractorId",
            field: "contractorId",
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
   * DeleteContractor
   * Required scope - `gambit:erp:contractors`
   * DELETE /api/erp/v1/contractors/{contractorId}
   * Operation ID: DeleteContractor
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteContractorResponse(
    args: { contractorId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/contractors/{contractorId}",
        parameters: [
          {
            name: "contractorId",
            field: "contractorId",
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
   * UpdateContractor
   * Required scope - `gambit:erp:contractors`
   * PUT /api/erp/v1/contractors/{contractorId}
   * Operation ID: UpdateContractor
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateContractorResponse(
    args: { contractorId: number; body?: Models.ERPContractor },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/contractors/{contractorId}",
        parameters: [
          {
            name: "contractorId",
            field: "contractorId",
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
  return {
    getContractorsResponse,
    /**
     * GetAllContractors
     * Required scope - `gambit:erp:contractors`
     * GET /api/erp/v1/contractors
     * Operation ID: GetContractors
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getContractors(
      options?: RequestOptions,
    ): Promise<Array<Models.ERPContractor>> {
      return transport.read<Array<Models.ERPContractor>>(
        await getContractorsResponse(options),
        { "200": { kind: "json" } },
      );
    },
    createContractorResponse,
    /**
     * CreateContractor
     * Required scope - `gambit:erp:contractors`
     * POST /api/erp/v1/contractors
     * Operation ID: CreateContractor
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createContractor(
      args: { body?: Models.ERPContractor } = {},
      options?: RequestOptions,
    ): Promise<number> {
      return transport.read<number>(
        await createContractorResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getContractorByIdResponse,
    /**
     * GetContractor
     * Required scope - `gambit:erp:contractors`
     * GET /api/erp/v1/contractors/{contractorId}
     * Operation ID: GetContractorById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getContractorById(
      args: { contractorId: number },
      options?: RequestOptions,
    ): Promise<Models.ERPContractor> {
      return transport.read<Models.ERPContractor>(
        await getContractorByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    deleteContractorResponse,
    /**
     * DeleteContractor
     * Required scope - `gambit:erp:contractors`
     * DELETE /api/erp/v1/contractors/{contractorId}
     * Operation ID: DeleteContractor
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteContractor(
      args: { contractorId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteContractorResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    updateContractorResponse,
    /**
     * UpdateContractor
     * Required scope - `gambit:erp:contractors`
     * PUT /api/erp/v1/contractors/{contractorId}
     * Operation ID: UpdateContractor
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateContractor(
      args: { contractorId: number; body?: Models.ERPContractor },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateContractorResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
