// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainAdjustmentMaterials(transport: Transport) {
  /**
   * Returns adjustment material documents filtered by date range.
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/adjustment-materials
   * Operation ID: GetAdjustmentMaterials
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getAdjustmentMaterialsResponse(
    args: { from?: string; to?: string } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/adjustment-materials",
        parameters: [
          {
            name: "from",
            field: "from",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "to",
            field: "to",
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
   * GetAdjustmentMaterialById
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/adjustment-materials/{id}
   * Operation ID: GetAdjustmentMaterialById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getAdjustmentMaterialByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/adjustment-materials/{id}",
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
   * Creates an adjustment-in document. The document is created with Confirmed status immediately.
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/adjustment-materials/adjustment-in
   * Operation ID: CreateAdjustmentIn
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createAdjustmentInResponse(
    args: { body: Models.ERPAdjustmentInCreatable },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/adjustment-materials/adjustment-in",
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
   * Creates an adjustment-out document. The document is created with Confirmed status immediately.
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/adjustment-materials/adjustment-out
   * Operation ID: CreateAdjustmentOut
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createAdjustmentOutResponse(
    args: { body: Models.ERPAdjustmentOutCreatable },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/adjustment-materials/adjustment-out",
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
   * Creates a cost adjustment document. The document is created with Confirmed status immediately.
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/adjustment-materials/cost-adjustment
   * Operation ID: CreateCostAdjustment
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createCostAdjustmentResponse(
    args: { body: Models.ERPCostAdjustmentCreatable },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/adjustment-materials/cost-adjustment",
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
   * Creates a write-off document. The document is created with Confirmed status immediately.
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/adjustment-materials/write-off
   * Operation ID: CreateWriteOff
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createWriteOffResponse(
    args: { body: Models.ERPWriteOffCreatable },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/adjustment-materials/write-off",
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
    getAdjustmentMaterialsResponse,
    /**
     * Returns adjustment material documents filtered by date range.
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/adjustment-materials
     * Operation ID: GetAdjustmentMaterials
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getAdjustmentMaterials(
      args: { from?: string; to?: string } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.ERPAdjustmentMaterial>> {
      return transport.read<Array<Models.ERPAdjustmentMaterial>>(
        await getAdjustmentMaterialsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getAdjustmentMaterialByIdResponse,
    /**
     * GetAdjustmentMaterialById
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/adjustment-materials/{id}
     * Operation ID: GetAdjustmentMaterialById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getAdjustmentMaterialById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPAdjustmentMaterial> {
      return transport.read<Models.ERPAdjustmentMaterial>(
        await getAdjustmentMaterialByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createAdjustmentInResponse,
    /**
     * Creates an adjustment-in document. The document is created with Confirmed status immediately.
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/adjustment-materials/adjustment-in
     * Operation ID: CreateAdjustmentIn
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createAdjustmentIn(
      args: { body: Models.ERPAdjustmentInCreatable },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await createAdjustmentInResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    createAdjustmentOutResponse,
    /**
     * Creates an adjustment-out document. The document is created with Confirmed status immediately.
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/adjustment-materials/adjustment-out
     * Operation ID: CreateAdjustmentOut
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createAdjustmentOut(
      args: { body: Models.ERPAdjustmentOutCreatable },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await createAdjustmentOutResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    createCostAdjustmentResponse,
    /**
     * Creates a cost adjustment document. The document is created with Confirmed status immediately.
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/adjustment-materials/cost-adjustment
     * Operation ID: CreateCostAdjustment
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createCostAdjustment(
      args: { body: Models.ERPCostAdjustmentCreatable },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await createCostAdjustmentResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    createWriteOffResponse,
    /**
     * Creates a write-off document. The document is created with Confirmed status immediately.
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/adjustment-materials/write-off
     * Operation ID: CreateWriteOff
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createWriteOff(
      args: { body: Models.ERPWriteOffCreatable },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await createWriteOffResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
