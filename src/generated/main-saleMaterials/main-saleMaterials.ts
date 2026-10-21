// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainSaleMaterials(transport: Transport) {
  /**
   * Returns sale material documents.
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/sale-materials
   * Operation ID: GetSaleMaterials
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getSaleMaterialsResponse(
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
        path: "/api/erp/v1/sale-materials",
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
   * Creates a sale material document and optionally applies it immediately.
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/sale-materials
   * Operation ID: CreateSaleMaterial
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createSaleMaterialResponse(
    args: {
      /**
       * Whether the document should be applied immediately.
       */ apply?: boolean;
      /**
       * Sale material payload.
       */ body: Models.ERPSaleMaterialEditable;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/sale-materials",
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
   * Updates a sale material document.
   * Required scope - `gambit:erp:material:write`
   * PUT /api/erp/v1/sale-materials/{id}
   * Operation ID: UpdateSaleMaterial
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateSaleMaterialResponse(
    args: {
      /**
       * Sale material identifier.
       */ id: number;
      /**
       * Whether the document should be applied immediately.
       */ apply?: boolean;
      /**
       * Sale material payload.
       */ body: Models.ERPSaleMaterialEditable;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/sale-materials/{id}",
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
   * Deletes a sale material document by identifier. Only non-applied documents can be deleted.
   * Required scope - `gambit:erp:material:write`
   * DELETE /api/erp/v1/sale-materials/{id}
   * Operation ID: DeleteSaleMaterial
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteSaleMaterialResponse(
    args: {
      /**
       * Sale material identifier.
       */ id: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/sale-materials/{id}",
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
   * GetSaleMaterialById
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/sale-materials/{id}
   * Operation ID: GetSaleMaterialById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getSaleMaterialByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/sale-materials/{id}",
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
   * Applies a sale material document by identifier.
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/sale-materials/{id}/apply
   * Operation ID: ApplySaleMaterial
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function applySaleMaterialResponse(
    args: {
      /**
       * Sale material identifier.
       */ id: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/sale-materials/{id}/apply",
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
   * Unapplies (reverses) a sale material document by identifier.
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/sale-materials/{id}/unapply
   * Operation ID: UnapplySaleMaterial
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function unapplySaleMaterialResponse(
    args: {
      /**
       * Sale material identifier.
       */ id: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/sale-materials/{id}/unapply",
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
   * Returns sale material documents linked to a specific patient.
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/sale-materials/by-patient/{patientId}
   * Operation ID: GetSaleMaterialsByPatientId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getSaleMaterialsByPatientIdResponse(
    args: {
      /**
       * Patient identifier.
       */ patientId: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/sale-materials/by-patient/{patientId}",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
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
    getSaleMaterialsResponse,
    /**
     * Returns sale material documents.
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/sale-materials
     * Operation ID: GetSaleMaterials
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getSaleMaterials(
      args: {
        /**
         * Start date filter.
         */ from?: string;
        /**
         * End date filter.
         */ to?: string;
      } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.ERPSaleMaterial>> {
      return transport.read<Array<Models.ERPSaleMaterial>>(
        await getSaleMaterialsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createSaleMaterialResponse,
    /**
     * Creates a sale material document and optionally applies it immediately.
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/sale-materials
     * Operation ID: CreateSaleMaterial
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createSaleMaterial(
      args: {
        /**
         * Whether the document should be applied immediately.
         */ apply?: boolean;
        /**
         * Sale material payload.
         */ body: Models.ERPSaleMaterialEditable;
      },
      options?: RequestOptions,
    ): Promise<Models.ERPSaleMaterial> {
      return transport.read<Models.ERPSaleMaterial>(
        await createSaleMaterialResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateSaleMaterialResponse,
    /**
     * Updates a sale material document.
     * Required scope - `gambit:erp:material:write`
     * PUT /api/erp/v1/sale-materials/{id}
     * Operation ID: UpdateSaleMaterial
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateSaleMaterial(
      args: {
        /**
         * Sale material identifier.
         */ id: number;
        /**
         * Whether the document should be applied immediately.
         */ apply?: boolean;
        /**
         * Sale material payload.
         */ body: Models.ERPSaleMaterialEditable;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateSaleMaterialResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deleteSaleMaterialResponse,
    /**
     * Deletes a sale material document by identifier. Only non-applied documents can be deleted.
     * Required scope - `gambit:erp:material:write`
     * DELETE /api/erp/v1/sale-materials/{id}
     * Operation ID: DeleteSaleMaterial
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteSaleMaterial(
      args: {
        /**
         * Sale material identifier.
         */ id: number;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteSaleMaterialResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getSaleMaterialByIdResponse,
    /**
     * GetSaleMaterialById
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/sale-materials/{id}
     * Operation ID: GetSaleMaterialById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getSaleMaterialById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPSaleMaterial> {
      return transport.read<Models.ERPSaleMaterial>(
        await getSaleMaterialByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    applySaleMaterialResponse,
    /**
     * Applies a sale material document by identifier.
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/sale-materials/{id}/apply
     * Operation ID: ApplySaleMaterial
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async applySaleMaterial(
      args: {
        /**
         * Sale material identifier.
         */ id: number;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await applySaleMaterialResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    unapplySaleMaterialResponse,
    /**
     * Unapplies (reverses) a sale material document by identifier.
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/sale-materials/{id}/unapply
     * Operation ID: UnapplySaleMaterial
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async unapplySaleMaterial(
      args: {
        /**
         * Sale material identifier.
         */ id: number;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await unapplySaleMaterialResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getSaleMaterialsByPatientIdResponse,
    /**
     * Returns sale material documents linked to a specific patient.
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/sale-materials/by-patient/{patientId}
     * Operation ID: GetSaleMaterialsByPatientId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getSaleMaterialsByPatientId(
      args: {
        /**
         * Patient identifier.
         */ patientId: number;
      },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPSaleMaterial>> {
      return transport.read<Array<Models.ERPSaleMaterial>>(
        await getSaleMaterialsByPatientIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
