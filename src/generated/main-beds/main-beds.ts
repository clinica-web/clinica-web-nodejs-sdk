// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainBeds(transport: Transport) {
  /**
   * GetBeds
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/beds
   * Operation ID: GetBeds
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getBedsResponse(
    args: { clinicId?: number; hospitalDivisionId?: number } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/beds",
        parameters: [
          {
            name: "clinicId",
            field: "clinicId",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "hospitalDivisionId",
            field: "hospitalDivisionId",
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
   * CreateBed
   * Required scope - `gambit:erp`
   * POST /api/erp/v1/beds
   * Operation ID: CreateBed
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createBedResponse(
    args: { body: Models.EditableERPBed },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/beds",
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
   * GetBedById
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/beds/{id}
   * Operation ID: GetBedById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getBedByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/beds/{id}",
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
   * UpdateBed
   * Required scope - `gambit:erp`
   * PUT /api/erp/v1/beds/{id}
   * Operation ID: UpdateBed
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateBedResponse(
    args: { id: number; body: Models.EditableERPBed },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/beds/{id}",
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
   * DeleteBed
   * Required scope - `gambit:erp`
   * DELETE /api/erp/v1/beds/{id}
   * Operation ID: DeleteBed
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteBedResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/beds/{id}",
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
    getBedsResponse,
    /**
     * GetBeds
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/beds
     * Operation ID: GetBeds
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getBeds(
      args: { clinicId?: number; hospitalDivisionId?: number } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.ERPBed>> {
      return transport.read<Array<Models.ERPBed>>(
        await getBedsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createBedResponse,
    /**
     * CreateBed
     * Required scope - `gambit:erp`
     * POST /api/erp/v1/beds
     * Operation ID: CreateBed
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createBed(
      args: { body: Models.EditableERPBed },
      options?: RequestOptions,
    ): Promise<Models.ERPBed> {
      return transport.read<Models.ERPBed>(
        await createBedResponse(args, options),
        { "201": { kind: "json" } },
      );
    },
    getBedByIdResponse,
    /**
     * GetBedById
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/beds/{id}
     * Operation ID: GetBedById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getBedById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPBed> {
      return transport.read<Models.ERPBed>(
        await getBedByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateBedResponse,
    /**
     * UpdateBed
     * Required scope - `gambit:erp`
     * PUT /api/erp/v1/beds/{id}
     * Operation ID: UpdateBed
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateBed(
      args: { id: number; body: Models.EditableERPBed },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(await updateBedResponse(args, options), {
        "200": { kind: "unknown" },
      });
    },
    deleteBedResponse,
    /**
     * DeleteBed
     * Required scope - `gambit:erp`
     * DELETE /api/erp/v1/beds/{id}
     * Operation ID: DeleteBed
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteBed(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(await deleteBedResponse(args, options), {
        "200": { kind: "unknown" },
      });
    },
  };
}
