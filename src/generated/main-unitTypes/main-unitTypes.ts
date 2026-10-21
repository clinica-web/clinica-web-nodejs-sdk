// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainUnitTypes(transport: Transport) {
  /**
   * GetUnitTypes
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/unit-types
   * Operation ID: GetUnitTypes
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getUnitTypesResponse(options?: RequestOptions): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/unit-types",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * CreateUnitType
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/unit-types
   * Operation ID: CreateUnitType
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createUnitTypeResponse(
    args: { body: Models.EditableERPUnitType },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/unit-types",
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
   * GetAllUnitTypeConversions
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/unit-types/conversions
   * Operation ID: GetAllUnitTypeConversions
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getAllUnitTypeConversionsResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/unit-types/conversions",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * GetUnitTypeConversionsByUnitTypeId
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/unit-types/{id}/conversions
   * Operation ID: GetUnitTypeConversionsByUnitTypeId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getUnitTypeConversionsByUnitTypeIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/unit-types/{id}/conversions",
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
   * GetUnitTypeById
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/unit-types/{id}
   * Operation ID: GetUnitTypeById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getUnitTypeByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/unit-types/{id}",
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
   * UpdateUnitType
   * Required scope - `gambit:erp:material:write`
   * PUT /api/erp/v1/unit-types/{id}
   * Operation ID: UpdateUnitType
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateUnitTypeResponse(
    args: { id: number; body: Models.EditableERPUnitType },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/unit-types/{id}",
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
   * DeleteUnitType
   * Required scope - `gambit:erp:material:write`
   * DELETE /api/erp/v1/unit-types/{id}
   * Operation ID: DeleteUnitType
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteUnitTypeResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/unit-types/{id}",
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
    getUnitTypesResponse,
    /**
     * GetUnitTypes
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/unit-types
     * Operation ID: GetUnitTypes
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getUnitTypes(
      options?: RequestOptions,
    ): Promise<Array<Models.ERPUnitType>> {
      return transport.read<Array<Models.ERPUnitType>>(
        await getUnitTypesResponse(options),
        { "200": { kind: "json" } },
      );
    },
    createUnitTypeResponse,
    /**
     * CreateUnitType
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/unit-types
     * Operation ID: CreateUnitType
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createUnitType(
      args: { body: Models.EditableERPUnitType },
      options?: RequestOptions,
    ): Promise<Models.ERPUnitType> {
      return transport.read<Models.ERPUnitType>(
        await createUnitTypeResponse(args, options),
        { "201": { kind: "json" } },
      );
    },
    getAllUnitTypeConversionsResponse,
    /**
     * GetAllUnitTypeConversions
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/unit-types/conversions
     * Operation ID: GetAllUnitTypeConversions
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getAllUnitTypeConversions(
      options?: RequestOptions,
    ): Promise<Array<Models.ERPUnitTypeConversions>> {
      return transport.read<Array<Models.ERPUnitTypeConversions>>(
        await getAllUnitTypeConversionsResponse(options),
        { "200": { kind: "json" } },
      );
    },
    getUnitTypeConversionsByUnitTypeIdResponse,
    /**
     * GetUnitTypeConversionsByUnitTypeId
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/unit-types/{id}/conversions
     * Operation ID: GetUnitTypeConversionsByUnitTypeId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getUnitTypeConversionsByUnitTypeId(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPUnitTypeConversions>> {
      return transport.read<Array<Models.ERPUnitTypeConversions>>(
        await getUnitTypeConversionsByUnitTypeIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getUnitTypeByIdResponse,
    /**
     * GetUnitTypeById
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/unit-types/{id}
     * Operation ID: GetUnitTypeById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getUnitTypeById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPUnitType> {
      return transport.read<Models.ERPUnitType>(
        await getUnitTypeByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateUnitTypeResponse,
    /**
     * UpdateUnitType
     * Required scope - `gambit:erp:material:write`
     * PUT /api/erp/v1/unit-types/{id}
     * Operation ID: UpdateUnitType
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateUnitType(
      args: { id: number; body: Models.EditableERPUnitType },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateUnitTypeResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deleteUnitTypeResponse,
    /**
     * DeleteUnitType
     * Required scope - `gambit:erp:material:write`
     * DELETE /api/erp/v1/unit-types/{id}
     * Operation ID: DeleteUnitType
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteUnitType(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteUnitTypeResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
