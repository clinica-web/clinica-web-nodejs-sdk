// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainPatientPositions(transport: Transport) {
  /**
   * GetPatientPositionById
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/patientPositions/{id}
   * Operation ID: GetPatientPositionById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientPositionByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/patientPositions/{id}",
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
   * DeletePatientPosition
   * Required scope - `gambit:erp`
   * DELETE /api/erp/v1/patientPositions/{id}
   * Operation ID: DeletePatientPosition
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deletePatientPositionResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/patientPositions/{id}",
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
   * UpdatePatientPosition
   * Required scope - `gambit:erp`
   * PUT /api/erp/v1/patientPositions/{id}
   * Operation ID: UpdatePatientPosition
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updatePatientPositionResponse(
    args: { id: number; body: Models.ERPPatientPositionEditModel },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/patientPositions/{id}",
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
   * GetPatientPositionByExternalId
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/patientPositions/{externalId}
   * Operation ID: GetPatientPositionByExternalId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientPositionByExternalIdResponse(
    args: { externalId: string },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/patientPositions/{externalId}",
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
   * DeletePatientPositionByExternalId
   * Required scope - `gambit:erp`
   * DELETE /api/erp/v1/patientPositions/{externalId}
   * Operation ID: DeletePatientPositionByExternalId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deletePatientPositionByExternalIdResponse(
    args: { externalId: string },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/patientPositions/{externalId}",
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
   * UpdatePatientPositionByExternalId
   * Required scope - `gambit:erp`
   * PUT /api/erp/v1/patientPositions/{externalId}
   * Operation ID: UpdatePatientPositionByExternalId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updatePatientPositionByExternalIdResponse(
    args: { externalId: string; body: Models.ERPPatientPositionEditModel },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/patientPositions/{externalId}",
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
  /**
   * GetAllPatientPositions
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/patientPositions
   * Operation ID: GetAllPatientPositions
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getAllPatientPositionsResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/patientPositions",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * CreatePatientPosition
   * Required scope - `gambit:erp`
   * POST /api/erp/v1/patientPositions
   * Operation ID: CreatePatientPosition
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createPatientPositionResponse(
    args: { body: Models.ERPPatientPositionEditModel },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/patientPositions",
        parameters: [],
        bodyField: "body",
        bodyRequired: true,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  return {
    getPatientPositionByIdResponse,
    /**
     * GetPatientPositionById
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/patientPositions/{id}
     * Operation ID: GetPatientPositionById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientPositionById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPPatientPosition> {
      return transport.read<Models.ERPPatientPosition>(
        await getPatientPositionByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    deletePatientPositionResponse,
    /**
     * DeletePatientPosition
     * Required scope - `gambit:erp`
     * DELETE /api/erp/v1/patientPositions/{id}
     * Operation ID: DeletePatientPosition
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deletePatientPosition(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deletePatientPositionResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    updatePatientPositionResponse,
    /**
     * UpdatePatientPosition
     * Required scope - `gambit:erp`
     * PUT /api/erp/v1/patientPositions/{id}
     * Operation ID: UpdatePatientPosition
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updatePatientPosition(
      args: { id: number; body: Models.ERPPatientPositionEditModel },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updatePatientPositionResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getPatientPositionByExternalIdResponse,
    /**
     * GetPatientPositionByExternalId
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/patientPositions/{externalId}
     * Operation ID: GetPatientPositionByExternalId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientPositionByExternalId(
      args: { externalId: string },
      options?: RequestOptions,
    ): Promise<Models.ERPPatientPosition> {
      return transport.read<Models.ERPPatientPosition>(
        await getPatientPositionByExternalIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    deletePatientPositionByExternalIdResponse,
    /**
     * DeletePatientPositionByExternalId
     * Required scope - `gambit:erp`
     * DELETE /api/erp/v1/patientPositions/{externalId}
     * Operation ID: DeletePatientPositionByExternalId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deletePatientPositionByExternalId(
      args: { externalId: string },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deletePatientPositionByExternalIdResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    updatePatientPositionByExternalIdResponse,
    /**
     * UpdatePatientPositionByExternalId
     * Required scope - `gambit:erp`
     * PUT /api/erp/v1/patientPositions/{externalId}
     * Operation ID: UpdatePatientPositionByExternalId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updatePatientPositionByExternalId(
      args: { externalId: string; body: Models.ERPPatientPositionEditModel },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updatePatientPositionByExternalIdResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getAllPatientPositionsResponse,
    /**
     * GetAllPatientPositions
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/patientPositions
     * Operation ID: GetAllPatientPositions
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getAllPatientPositions(
      options?: RequestOptions,
    ): Promise<Array<Models.ERPPatientPosition>> {
      return transport.read<Array<Models.ERPPatientPosition>>(
        await getAllPatientPositionsResponse(options),
        { "200": { kind: "json" } },
      );
    },
    createPatientPositionResponse,
    /**
     * CreatePatientPosition
     * Required scope - `gambit:erp`
     * POST /api/erp/v1/patientPositions
     * Operation ID: CreatePatientPosition
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createPatientPosition(
      args: { body: Models.ERPPatientPositionEditModel },
      options?: RequestOptions,
    ): Promise<Models.BaseDto> {
      return transport.read<Models.BaseDto>(
        await createPatientPositionResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
