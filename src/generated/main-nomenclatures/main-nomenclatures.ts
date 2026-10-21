// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainNomenclatures(transport: Transport) {
  /**
   * GetNomenclatures
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/nomenclatures
   * Operation ID: GetNomenclatures
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getNomenclaturesResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/nomenclatures",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * CreateNomenclature
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/nomenclatures
   * Operation ID: CreateNomenclature
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createNomenclatureResponse(
    args: { body: Models.EditableERPNomenclature },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/nomenclatures",
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
   * GetNomenclatureLookup
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/nomenclatures/lookup
   * Operation ID: GetNomenclatureLookup
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getNomenclatureLookupResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/nomenclatures/lookup",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * GetNomenclatureById
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/nomenclatures/{id}
   * Operation ID: GetNomenclatureById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getNomenclatureByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/nomenclatures/{id}",
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
   * UpdateNomenclature
   * Required scope - `gambit:erp:material:write`
   * PUT /api/erp/v1/nomenclatures/{id}
   * Operation ID: UpdateNomenclature
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateNomenclatureResponse(
    args: { id: number; body: Models.EditableERPNomenclature },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/nomenclatures/{id}",
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
   * DeleteNomenclature
   * Required scope - `gambit:erp:material:write`
   * DELETE /api/erp/v1/nomenclatures/{id}
   * Operation ID: DeleteNomenclature
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteNomenclatureResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/nomenclatures/{id}",
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
   * ValidateNomenclatureCode
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/nomenclatures/validate-code
   * Operation ID: ValidateNomenclatureCode
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function validateNomenclatureCodeResponse(
    args: { code: string; nomenclatureId?: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/nomenclatures/validate-code",
        parameters: [
          {
            name: "code",
            field: "code",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "nomenclatureId",
            field: "nomenclatureId",
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
   * GetNomenclatureBaseUnitType
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/nomenclatures/{id}/base-unit-type
   * Operation ID: GetNomenclatureBaseUnitType
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getNomenclatureBaseUnitTypeResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/nomenclatures/{id}/base-unit-type",
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
    getNomenclaturesResponse,
    /**
     * GetNomenclatures
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/nomenclatures
     * Operation ID: GetNomenclatures
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getNomenclatures(
      options?: RequestOptions,
    ): Promise<Array<Models.ERPNomenclature>> {
      return transport.read<Array<Models.ERPNomenclature>>(
        await getNomenclaturesResponse(options),
        { "200": { kind: "json" } },
      );
    },
    createNomenclatureResponse,
    /**
     * CreateNomenclature
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/nomenclatures
     * Operation ID: CreateNomenclature
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createNomenclature(
      args: { body: Models.EditableERPNomenclature },
      options?: RequestOptions,
    ): Promise<number> {
      return transport.read<number>(
        await createNomenclatureResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getNomenclatureLookupResponse,
    /**
     * GetNomenclatureLookup
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/nomenclatures/lookup
     * Operation ID: GetNomenclatureLookup
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getNomenclatureLookup(
      options?: RequestOptions,
    ): Promise<Array<Models.ERPNomencaltureLookup>> {
      return transport.read<Array<Models.ERPNomencaltureLookup>>(
        await getNomenclatureLookupResponse(options),
        { "200": { kind: "json" } },
      );
    },
    getNomenclatureByIdResponse,
    /**
     * GetNomenclatureById
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/nomenclatures/{id}
     * Operation ID: GetNomenclatureById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getNomenclatureById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPNomenclature> {
      return transport.read<Models.ERPNomenclature>(
        await getNomenclatureByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateNomenclatureResponse,
    /**
     * UpdateNomenclature
     * Required scope - `gambit:erp:material:write`
     * PUT /api/erp/v1/nomenclatures/{id}
     * Operation ID: UpdateNomenclature
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateNomenclature(
      args: { id: number; body: Models.EditableERPNomenclature },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateNomenclatureResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deleteNomenclatureResponse,
    /**
     * DeleteNomenclature
     * Required scope - `gambit:erp:material:write`
     * DELETE /api/erp/v1/nomenclatures/{id}
     * Operation ID: DeleteNomenclature
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteNomenclature(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteNomenclatureResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    validateNomenclatureCodeResponse,
    /**
     * ValidateNomenclatureCode
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/nomenclatures/validate-code
     * Operation ID: ValidateNomenclatureCode
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async validateNomenclatureCode(
      args: { code: string; nomenclatureId?: number },
      options?: RequestOptions,
    ): Promise<boolean> {
      return transport.read<boolean>(
        await validateNomenclatureCodeResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getNomenclatureBaseUnitTypeResponse,
    /**
     * GetNomenclatureBaseUnitType
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/nomenclatures/{id}/base-unit-type
     * Operation ID: GetNomenclatureBaseUnitType
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getNomenclatureBaseUnitType(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPUnitType> {
      return transport.read<Models.ERPUnitType>(
        await getNomenclatureBaseUnitTypeResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
