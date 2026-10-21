// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainPackageTags(transport: Transport) {
  /**
   * GetPackageTags
   * Required scope - `gambit:static_data`
   * GET /api/erp/v1/package-tags
   * Operation ID: GetPackageTags
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPackageTagsResponse(options?: RequestOptions): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/package-tags",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * CreatePackageTag
   * Required scope - `gambit:erp:packages`
   * POST /api/erp/v1/package-tags
   * Operation ID: CreatePackageTag
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createPackageTagResponse(
    args: { body: Models.ERPPackageTagEditableDto },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/package-tags",
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
   * GetPackageTag
   * Required scope - `gambit:static_data`
   * GET /api/erp/v1/package-tags/{id}
   * Operation ID: GetPackageTag
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPackageTagResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/package-tags/{id}",
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
   * UpdatePackageTag
   * Required scope - `gambit:erp:packages`
   * PUT /api/erp/v1/package-tags/{id}
   * Operation ID: UpdatePackageTag
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updatePackageTagResponse(
    args: { id: number; body: Models.ERPPackageTagEditableDto },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/package-tags/{id}",
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
   * DeletePackageTag
   * Required scope - `gambit:erp:packages`
   * DELETE /api/erp/v1/package-tags/{id}
   * Operation ID: DeletePackageTag
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deletePackageTagResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/package-tags/{id}",
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
   * GetPackageTagPackages
   * Required scope - `gambit:static_data`
   * GET /api/erp/v1/package-tags/{id}/packages
   * Operation ID: GetPackageTagPackages
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPackageTagPackagesResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/package-tags/{id}/packages",
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
   * AddPackageTagPackage
   * Required scope - `gambit:erp:packages`
   * POST /api/erp/v1/package-tags/{id}/packages/{packageId}
   * Operation ID: AddPackageTagPackage
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function addPackageTagPackageResponse(
    args: { id: number; packageId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/package-tags/{id}/packages/{packageId}",
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
   * DeletePackageTagPackage
   * Required scope - `gambit:erp:packages`
   * DELETE /api/erp/v1/package-tags/{id}/packages/{packageId}
   * Operation ID: DeletePackageTagPackage
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deletePackageTagPackageResponse(
    args: { id: number; packageId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/package-tags/{id}/packages/{packageId}",
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
  return {
    getPackageTagsResponse,
    /**
     * GetPackageTags
     * Required scope - `gambit:static_data`
     * GET /api/erp/v1/package-tags
     * Operation ID: GetPackageTags
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPackageTags(
      options?: RequestOptions,
    ): Promise<Array<Models.BaseDto>> {
      return transport.read<Array<Models.BaseDto>>(
        await getPackageTagsResponse(options),
        { "200": { kind: "json" } },
      );
    },
    createPackageTagResponse,
    /**
     * CreatePackageTag
     * Required scope - `gambit:erp:packages`
     * POST /api/erp/v1/package-tags
     * Operation ID: CreatePackageTag
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createPackageTag(
      args: { body: Models.ERPPackageTagEditableDto },
      options?: RequestOptions,
    ): Promise<Models.BaseDto> {
      return transport.read<Models.BaseDto>(
        await createPackageTagResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPackageTagResponse,
    /**
     * GetPackageTag
     * Required scope - `gambit:static_data`
     * GET /api/erp/v1/package-tags/{id}
     * Operation ID: GetPackageTag
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPackageTag(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.BaseDto> {
      return transport.read<Models.BaseDto>(
        await getPackageTagResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updatePackageTagResponse,
    /**
     * UpdatePackageTag
     * Required scope - `gambit:erp:packages`
     * PUT /api/erp/v1/package-tags/{id}
     * Operation ID: UpdatePackageTag
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updatePackageTag(
      args: { id: number; body: Models.ERPPackageTagEditableDto },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updatePackageTagResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deletePackageTagResponse,
    /**
     * DeletePackageTag
     * Required scope - `gambit:erp:packages`
     * DELETE /api/erp/v1/package-tags/{id}
     * Operation ID: DeletePackageTag
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deletePackageTag(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deletePackageTagResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getPackageTagPackagesResponse,
    /**
     * GetPackageTagPackages
     * Required scope - `gambit:static_data`
     * GET /api/erp/v1/package-tags/{id}/packages
     * Operation ID: GetPackageTagPackages
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPackageTagPackages(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Array<Models.PackageShortDto>> {
      return transport.read<Array<Models.PackageShortDto>>(
        await getPackageTagPackagesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    addPackageTagPackageResponse,
    /**
     * AddPackageTagPackage
     * Required scope - `gambit:erp:packages`
     * POST /api/erp/v1/package-tags/{id}/packages/{packageId}
     * Operation ID: AddPackageTagPackage
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async addPackageTagPackage(
      args: { id: number; packageId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await addPackageTagPackageResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deletePackageTagPackageResponse,
    /**
     * DeletePackageTagPackage
     * Required scope - `gambit:erp:packages`
     * DELETE /api/erp/v1/package-tags/{id}/packages/{packageId}
     * Operation ID: DeletePackageTagPackage
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deletePackageTagPackage(
      args: { id: number; packageId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deletePackageTagPackageResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
