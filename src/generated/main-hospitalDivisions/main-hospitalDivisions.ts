// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainHospitalDivisions(transport: Transport) {
  /**
   * GetHospitalDivisions
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/hospital-divisions
   * Operation ID: GetHospitalDivisions
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getHospitalDivisionsResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/hospital-divisions",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * CreateHospitalDivision
   * Required scope - `gambit:erp`
   * POST /api/erp/v1/hospital-divisions
   * Operation ID: CreateHospitalDivision
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createHospitalDivisionResponse(
    args: { body: Models.EditableERPHospitalDivision },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/hospital-divisions",
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
   * GetHospitalDivisionById
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/hospital-divisions/{id}
   * Operation ID: GetHospitalDivisionById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getHospitalDivisionByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/hospital-divisions/{id}",
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
   * UpdateHospitalDivision
   * Required scope - `gambit:erp`
   * PUT /api/erp/v1/hospital-divisions/{id}
   * Operation ID: UpdateHospitalDivision
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateHospitalDivisionResponse(
    args: { id: number; body: Models.EditableERPHospitalDivision },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/hospital-divisions/{id}",
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
   * DeleteHospitalDivision
   * Required scope - `gambit:erp`
   * DELETE /api/erp/v1/hospital-divisions/{id}
   * Operation ID: DeleteHospitalDivision
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteHospitalDivisionResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/hospital-divisions/{id}",
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
    getHospitalDivisionsResponse,
    /**
     * GetHospitalDivisions
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/hospital-divisions
     * Operation ID: GetHospitalDivisions
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getHospitalDivisions(
      options?: RequestOptions,
    ): Promise<Array<Models.ERPHospitalDivision>> {
      return transport.read<Array<Models.ERPHospitalDivision>>(
        await getHospitalDivisionsResponse(options),
        { "200": { kind: "json" } },
      );
    },
    createHospitalDivisionResponse,
    /**
     * CreateHospitalDivision
     * Required scope - `gambit:erp`
     * POST /api/erp/v1/hospital-divisions
     * Operation ID: CreateHospitalDivision
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createHospitalDivision(
      args: { body: Models.EditableERPHospitalDivision },
      options?: RequestOptions,
    ): Promise<Models.ERPHospitalDivision> {
      return transport.read<Models.ERPHospitalDivision>(
        await createHospitalDivisionResponse(args, options),
        { "201": { kind: "json" } },
      );
    },
    getHospitalDivisionByIdResponse,
    /**
     * GetHospitalDivisionById
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/hospital-divisions/{id}
     * Operation ID: GetHospitalDivisionById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getHospitalDivisionById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPHospitalDivision> {
      return transport.read<Models.ERPHospitalDivision>(
        await getHospitalDivisionByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateHospitalDivisionResponse,
    /**
     * UpdateHospitalDivision
     * Required scope - `gambit:erp`
     * PUT /api/erp/v1/hospital-divisions/{id}
     * Operation ID: UpdateHospitalDivision
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateHospitalDivision(
      args: { id: number; body: Models.EditableERPHospitalDivision },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateHospitalDivisionResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deleteHospitalDivisionResponse,
    /**
     * DeleteHospitalDivision
     * Required scope - `gambit:erp`
     * DELETE /api/erp/v1/hospital-divisions/{id}
     * Operation ID: DeleteHospitalDivision
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteHospitalDivision(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteHospitalDivisionResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
