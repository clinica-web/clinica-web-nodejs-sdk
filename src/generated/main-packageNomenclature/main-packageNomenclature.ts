// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainPackageNomenclature(transport: Transport) {
  /**
   * Returns all package nomenclatures by package identifier.
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/package-nomenclature/packages/{packageId}
   * Operation ID: GetPackageNomenclaturesByPackageId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPackageNomenclaturesByPackageIdResponse(
    args: { packageId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/package-nomenclature/packages/{packageId}",
        parameters: [
          {
            name: "packageId",
            field: "packageId",
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
   * Returns all package nomenclatures by salepack identifier.
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/package-nomenclature/salepack/{salepackId}
   * Operation ID: GetPackageNomenclaturesBySalepackId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPackageNomenclaturesBySalepackIdResponse(
    args: { salepackId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/package-nomenclature/salepack/{salepackId}",
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
  /**
   * Returns all package nomenclatures by nomenclature identifier.
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/package-nomenclature/nomenclatures/{nomenclatureId}
   * Operation ID: GetPackageNomenclaturesByNomenclatureId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPackageNomenclaturesByNomenclatureIdResponse(
    args: { nomenclatureId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/package-nomenclature/nomenclatures/{nomenclatureId}",
        parameters: [
          {
            name: "nomenclatureId",
            field: "nomenclatureId",
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
   * Creates a new package nomenclature.
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/package-nomenclature/packages/{packageId}/nomenclatures/{nomenclatureId}
   * Operation ID: CreatePackageNomenclature
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createPackageNomenclatureResponse(
    args: { packageId: number; nomenclatureId: number; count: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/package-nomenclature/packages/{packageId}/nomenclatures/{nomenclatureId}",
        parameters: [
          {
            name: "packageId",
            field: "packageId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "nomenclatureId",
            field: "nomenclatureId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "count",
            field: "count",
            in: "query",
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
   * Updates the count of a package nomenclature.
   * Required scope - `gambit:erp:material:write`
   * PATCH /api/erp/v1/package-nomenclature/packages/{packageId}/nomenclatures/{nomenclatureId}
   * Operation ID: UpdatePackageNomenclature
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updatePackageNomenclatureResponse(
    args: { packageId: number; nomenclatureId: number; count: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PATCH",
        path: "/api/erp/v1/package-nomenclature/packages/{packageId}/nomenclatures/{nomenclatureId}",
        parameters: [
          {
            name: "packageId",
            field: "packageId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "nomenclatureId",
            field: "nomenclatureId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "count",
            field: "count",
            in: "query",
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
   * Deletes a package nomenclature.
   * Required scope - `gambit:erp:material:write`
   * DELETE /api/erp/v1/package-nomenclature/packages/{packageId}/nomenclatures/{nomenclatureId}
   * Operation ID: DeletePackageNomenclature
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deletePackageNomenclatureResponse(
    args: { packageId: number; nomenclatureId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/package-nomenclature/packages/{packageId}/nomenclatures/{nomenclatureId}",
        parameters: [
          {
            name: "packageId",
            field: "packageId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "nomenclatureId",
            field: "nomenclatureId",
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
    getPackageNomenclaturesByPackageIdResponse,
    /**
     * Returns all package nomenclatures by package identifier.
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/package-nomenclature/packages/{packageId}
     * Operation ID: GetPackageNomenclaturesByPackageId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPackageNomenclaturesByPackageId(
      args: { packageId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPPackageNomenclature>> {
      return transport.read<Array<Models.ERPPackageNomenclature>>(
        await getPackageNomenclaturesByPackageIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPackageNomenclaturesBySalepackIdResponse,
    /**
     * Returns all package nomenclatures by salepack identifier.
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/package-nomenclature/salepack/{salepackId}
     * Operation ID: GetPackageNomenclaturesBySalepackId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPackageNomenclaturesBySalepackId(
      args: { salepackId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPPackageNomenclature>> {
      return transport.read<Array<Models.ERPPackageNomenclature>>(
        await getPackageNomenclaturesBySalepackIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPackageNomenclaturesByNomenclatureIdResponse,
    /**
     * Returns all package nomenclatures by nomenclature identifier.
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/package-nomenclature/nomenclatures/{nomenclatureId}
     * Operation ID: GetPackageNomenclaturesByNomenclatureId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPackageNomenclaturesByNomenclatureId(
      args: { nomenclatureId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPPackageNomenclature>> {
      return transport.read<Array<Models.ERPPackageNomenclature>>(
        await getPackageNomenclaturesByNomenclatureIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createPackageNomenclatureResponse,
    /**
     * Creates a new package nomenclature.
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/package-nomenclature/packages/{packageId}/nomenclatures/{nomenclatureId}
     * Operation ID: CreatePackageNomenclature
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createPackageNomenclature(
      args: { packageId: number; nomenclatureId: number; count: number },
      options?: RequestOptions,
    ): Promise<Models.ERPPackageNomenclature> {
      return transport.read<Models.ERPPackageNomenclature>(
        await createPackageNomenclatureResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updatePackageNomenclatureResponse,
    /**
     * Updates the count of a package nomenclature.
     * Required scope - `gambit:erp:material:write`
     * PATCH /api/erp/v1/package-nomenclature/packages/{packageId}/nomenclatures/{nomenclatureId}
     * Operation ID: UpdatePackageNomenclature
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updatePackageNomenclature(
      args: { packageId: number; nomenclatureId: number; count: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updatePackageNomenclatureResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deletePackageNomenclatureResponse,
    /**
     * Deletes a package nomenclature.
     * Required scope - `gambit:erp:material:write`
     * DELETE /api/erp/v1/package-nomenclature/packages/{packageId}/nomenclatures/{nomenclatureId}
     * Operation ID: DeletePackageNomenclature
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deletePackageNomenclature(
      args: { packageId: number; nomenclatureId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deletePackageNomenclatureResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
