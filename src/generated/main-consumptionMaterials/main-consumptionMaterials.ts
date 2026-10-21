// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainConsumptionMaterials(transport: Transport) {
  /**
   * Returns consumption material documents.
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/consumption-materials
   * Operation ID: GetConsumptionMaterials
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getConsumptionMaterialsResponse(
    args: {
      /**
       * Start date filter.
       */ from?: string;
      /**
       * End date filter.
       */ to?: string;
    } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/consumption-materials",
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
   * Creates a consumption material document and optionally applies it immediately.
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/consumption-materials
   * Operation ID: CreateConsumptionMaterial
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createConsumptionMaterialResponse(
    args: {
      /**
       * Whether the document should be applied immediately.
       */ apply?: boolean;
      /**
       * Consumption material payload.
       */ body: Models.ERPConsumptionMaterialCreatable;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/consumption-materials",
        parameters: [
          {
            name: "apply",
            field: "apply",
            in: "query",
            required: false,
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
   * Updates a consumption material document.
   * Required scope - `gambit:erp:material:write`
   * PUT /api/erp/v1/consumption-materials/{id}
   * Operation ID: UpdateConsumptionMaterial
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateConsumptionMaterialResponse(
    args: {
      /**
       * Consumption material identifier.
       */ id: number;
      /**
       * Whether the document should be applied immediately.
       */ apply?: boolean;
      /**
       * Consumption material payload.
       */ body: Models.ERPConsumptionMaterialEditable;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/consumption-materials/{id}",
        parameters: [
          {
            name: "id",
            field: "id",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "apply",
            field: "apply",
            in: "query",
            required: false,
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
   * Deletes a consumption material document by identifier. Only non-applied documents can be deleted.
   * Required scope - `gambit:erp:material:write`
   * DELETE /api/erp/v1/consumption-materials/{id}
   * Operation ID: DeleteConsumptionMaterial
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteConsumptionMaterialResponse(
    args: {
      /**
       * Consumption material identifier.
       */ id: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/consumption-materials/{id}",
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
   * GetConsumptionMaterialById
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/consumption-materials/{id}
   * Operation ID: GetConsumptionMaterialById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getConsumptionMaterialByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/consumption-materials/{id}",
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
   * Applies a consumption material document by identifier.
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/consumption-materials/{id}/apply
   * Operation ID: ApplyConsumptionMaterial
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function applyConsumptionMaterialResponse(
    args: {
      /**
       * Consumption material identifier.
       */ id: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/consumption-materials/{id}/apply",
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
   * Unapplies (reverses) a consumption material document by identifier.
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/consumption-materials/{id}/unapply
   * Operation ID: UnapplyConsumptionMaterial
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function unapplyConsumptionMaterialResponse(
    args: {
      /**
       * Consumption material identifier.
       */ id: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/consumption-materials/{id}/unapply",
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
   * Recalculates the provisional consumption for a consumption material document by identifier.
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/consumption-materials/{id}/recalculate-provisional
   * Operation ID: RecalculateProvisionalConsumption
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function recalculateProvisionalConsumptionResponse(
    args: {
      /**
       * Consumption material identifier.
       */ id: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/consumption-materials/{id}/recalculate-provisional",
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
   * Returns consumption material documents linked to a specific salepack.
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/consumption-materials/by-salepack/{salepackId}
   * Operation ID: GetConsumptionMaterialsBySalepackId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getConsumptionMaterialsBySalepackIdResponse(
    args: {
      /**
       * Salepack identifier.
       */ salepackId: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/consumption-materials/by-salepack/{salepackId}",
        parameters: [
          {
            name: "salepackId",
            field: "salepackId",
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
    getConsumptionMaterialsResponse,
    /**
     * Returns consumption material documents.
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/consumption-materials
     * Operation ID: GetConsumptionMaterials
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getConsumptionMaterials(
      args: {
        /**
         * Start date filter.
         */ from?: string;
        /**
         * End date filter.
         */ to?: string;
      } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.ERPConsumptionMaterial>> {
      return transport.read<Array<Models.ERPConsumptionMaterial>>(
        await getConsumptionMaterialsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createConsumptionMaterialResponse,
    /**
     * Creates a consumption material document and optionally applies it immediately.
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/consumption-materials
     * Operation ID: CreateConsumptionMaterial
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createConsumptionMaterial(
      args: {
        /**
         * Whether the document should be applied immediately.
         */ apply?: boolean;
        /**
         * Consumption material payload.
         */ body: Models.ERPConsumptionMaterialCreatable;
      },
      options?: RequestOptions,
    ): Promise<Models.ERPConsumptionMaterial> {
      return transport.read<Models.ERPConsumptionMaterial>(
        await createConsumptionMaterialResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateConsumptionMaterialResponse,
    /**
     * Updates a consumption material document.
     * Required scope - `gambit:erp:material:write`
     * PUT /api/erp/v1/consumption-materials/{id}
     * Operation ID: UpdateConsumptionMaterial
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateConsumptionMaterial(
      args: {
        /**
         * Consumption material identifier.
         */ id: number;
        /**
         * Whether the document should be applied immediately.
         */ apply?: boolean;
        /**
         * Consumption material payload.
         */ body: Models.ERPConsumptionMaterialEditable;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateConsumptionMaterialResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deleteConsumptionMaterialResponse,
    /**
     * Deletes a consumption material document by identifier. Only non-applied documents can be deleted.
     * Required scope - `gambit:erp:material:write`
     * DELETE /api/erp/v1/consumption-materials/{id}
     * Operation ID: DeleteConsumptionMaterial
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteConsumptionMaterial(
      args: {
        /**
         * Consumption material identifier.
         */ id: number;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteConsumptionMaterialResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getConsumptionMaterialByIdResponse,
    /**
     * GetConsumptionMaterialById
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/consumption-materials/{id}
     * Operation ID: GetConsumptionMaterialById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getConsumptionMaterialById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPConsumptionMaterial> {
      return transport.read<Models.ERPConsumptionMaterial>(
        await getConsumptionMaterialByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    applyConsumptionMaterialResponse,
    /**
     * Applies a consumption material document by identifier.
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/consumption-materials/{id}/apply
     * Operation ID: ApplyConsumptionMaterial
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async applyConsumptionMaterial(
      args: {
        /**
         * Consumption material identifier.
         */ id: number;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await applyConsumptionMaterialResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    unapplyConsumptionMaterialResponse,
    /**
     * Unapplies (reverses) a consumption material document by identifier.
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/consumption-materials/{id}/unapply
     * Operation ID: UnapplyConsumptionMaterial
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async unapplyConsumptionMaterial(
      args: {
        /**
         * Consumption material identifier.
         */ id: number;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await unapplyConsumptionMaterialResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    recalculateProvisionalConsumptionResponse,
    /**
     * Recalculates the provisional consumption for a consumption material document by identifier.
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/consumption-materials/{id}/recalculate-provisional
     * Operation ID: RecalculateProvisionalConsumption
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async recalculateProvisionalConsumption(
      args: {
        /**
         * Consumption material identifier.
         */ id: number;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await recalculateProvisionalConsumptionResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getConsumptionMaterialsBySalepackIdResponse,
    /**
     * Returns consumption material documents linked to a specific salepack.
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/consumption-materials/by-salepack/{salepackId}
     * Operation ID: GetConsumptionMaterialsBySalepackId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getConsumptionMaterialsBySalepackId(
      args: {
        /**
         * Salepack identifier.
         */ salepackId: number;
      },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPConsumptionMaterial>> {
      return transport.read<Array<Models.ERPConsumptionMaterial>>(
        await getConsumptionMaterialsBySalepackIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
