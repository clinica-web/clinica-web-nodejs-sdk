// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainMaterialManufacturers(transport: Transport) {
  /**
   * Returns all active material manufacturers.
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/material-manufacturers
   * Operation ID: GetMaterialManufacturers
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getMaterialManufacturersResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/material-manufacturers",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * Creates a new material manufacturer.
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/material-manufacturers
   * Operation ID: CreateMaterialManufacturer
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createMaterialManufacturerResponse(
    args: { body: Models.ERPMaterialManufacturer },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/material-manufacturers",
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
   * Returns a material manufacturer by identifier.
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/material-manufacturers/{id}
   * Operation ID: GetMaterialManufacturerById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getMaterialManufacturerByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/material-manufacturers/{id}",
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
   * Updates an existing material manufacturer.
   * Required scope - `gambit:erp:material:write`
   * PUT /api/erp/v1/material-manufacturers/{id}
   * Operation ID: UpdateMaterialManufacturer
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateMaterialManufacturerResponse(
    args: { id: number; body: Models.ERPMaterialManufacturer },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/material-manufacturers/{id}",
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
   * Soft-deletes a material manufacturer by identifier.
   * Required scope - `gambit:erp:material:write`
   * DELETE /api/erp/v1/material-manufacturers/{id}
   * Operation ID: DeleteMaterialManufacturer
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteMaterialManufacturerResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/material-manufacturers/{id}",
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
    getMaterialManufacturersResponse,
    /**
     * Returns all active material manufacturers.
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/material-manufacturers
     * Operation ID: GetMaterialManufacturers
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getMaterialManufacturers(
      options?: RequestOptions,
    ): Promise<Array<Models.ERPMaterialManufacturer>> {
      return transport.read<Array<Models.ERPMaterialManufacturer>>(
        await getMaterialManufacturersResponse(options),
        { "200": { kind: "json" } },
      );
    },
    createMaterialManufacturerResponse,
    /**
     * Creates a new material manufacturer.
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/material-manufacturers
     * Operation ID: CreateMaterialManufacturer
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createMaterialManufacturer(
      args: { body: Models.ERPMaterialManufacturer },
      options?: RequestOptions,
    ): Promise<number> {
      return transport.read<number>(
        await createMaterialManufacturerResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getMaterialManufacturerByIdResponse,
    /**
     * Returns a material manufacturer by identifier.
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/material-manufacturers/{id}
     * Operation ID: GetMaterialManufacturerById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getMaterialManufacturerById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPMaterialManufacturer> {
      return transport.read<Models.ERPMaterialManufacturer>(
        await getMaterialManufacturerByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateMaterialManufacturerResponse,
    /**
     * Updates an existing material manufacturer.
     * Required scope - `gambit:erp:material:write`
     * PUT /api/erp/v1/material-manufacturers/{id}
     * Operation ID: UpdateMaterialManufacturer
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateMaterialManufacturer(
      args: { id: number; body: Models.ERPMaterialManufacturer },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateMaterialManufacturerResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deleteMaterialManufacturerResponse,
    /**
     * Soft-deletes a material manufacturer by identifier.
     * Required scope - `gambit:erp:material:write`
     * DELETE /api/erp/v1/material-manufacturers/{id}
     * Operation ID: DeleteMaterialManufacturer
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteMaterialManufacturer(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteMaterialManufacturerResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
