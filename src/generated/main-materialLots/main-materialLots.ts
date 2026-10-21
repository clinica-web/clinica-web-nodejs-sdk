// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainMaterialLots(transport: Transport) {
  /**
   * GetMaterialLots
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/material-lots
   * Operation ID: GetMaterialLots
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getMaterialLotsResponse(
    args: { nomenclatureId?: number } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/material-lots",
        parameters: [
          {
            name: "NomenclatureId",
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
   * CreateMaterialLot
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/material-lots
   * Operation ID: CreateMaterialLot
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createMaterialLotResponse(
    args: { body: Models.EditableERPMaterialLot },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/material-lots",
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
   * GetMaterialLotById
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/material-lots/{id}
   * Operation ID: GetMaterialLotById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getMaterialLotByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/material-lots/{id}",
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
   * UpdateMaterialLot
   * Required scope - `gambit:erp:material:write`
   * PUT /api/erp/v1/material-lots/{id}
   * Operation ID: UpdateMaterialLot
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateMaterialLotResponse(
    args: { id: number; body: Models.EditableERPMaterialLot },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/material-lots/{id}",
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
   * DeleteMaterialLot
   * Required scope - `gambit:erp:material:write`
   * DELETE /api/erp/v1/material-lots/{id}
   * Operation ID: DeleteMaterialLot
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteMaterialLotResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/material-lots/{id}",
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
    getMaterialLotsResponse,
    /**
     * GetMaterialLots
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/material-lots
     * Operation ID: GetMaterialLots
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getMaterialLots(
      args: { nomenclatureId?: number } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.ERPMaterialLot>> {
      return transport.read<Array<Models.ERPMaterialLot>>(
        await getMaterialLotsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createMaterialLotResponse,
    /**
     * CreateMaterialLot
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/material-lots
     * Operation ID: CreateMaterialLot
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createMaterialLot(
      args: { body: Models.EditableERPMaterialLot },
      options?: RequestOptions,
    ): Promise<Models.ERPMaterialLot> {
      return transport.read<Models.ERPMaterialLot>(
        await createMaterialLotResponse(args, options),
        { "201": { kind: "json" } },
      );
    },
    getMaterialLotByIdResponse,
    /**
     * GetMaterialLotById
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/material-lots/{id}
     * Operation ID: GetMaterialLotById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getMaterialLotById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPMaterialLot> {
      return transport.read<Models.ERPMaterialLot>(
        await getMaterialLotByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateMaterialLotResponse,
    /**
     * UpdateMaterialLot
     * Required scope - `gambit:erp:material:write`
     * PUT /api/erp/v1/material-lots/{id}
     * Operation ID: UpdateMaterialLot
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateMaterialLot(
      args: { id: number; body: Models.EditableERPMaterialLot },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateMaterialLotResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deleteMaterialLotResponse,
    /**
     * DeleteMaterialLot
     * Required scope - `gambit:erp:material:write`
     * DELETE /api/erp/v1/material-lots/{id}
     * Operation ID: DeleteMaterialLot
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteMaterialLot(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteMaterialLotResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
