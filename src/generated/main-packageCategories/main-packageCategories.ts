// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainPackageCategories(transport: Transport) {
  /**
   * CreatePackageCategory
   * Required scope - `gambit:erp:packages`
   * POST /api/erp/v1/package-category
   * Operation ID: CreatePackageCategory
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createPackageCategoryResponse(
    args: { body: Models.PackageCategoryEditableDto },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/package-category",
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
   * GetPackageCategories
   * Required scope - `gambit:erp:packages`
   * GET /api/erp/v1/package-category
   * Operation ID: GetPackageCategories
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPackageCategoriesResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/package-category",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * UpdatePackageCategory
   * Required scope - `gambit:erp:packages`
   * PUT /api/erp/v1/package-category/{id}
   * Operation ID: UpdatePackageCategory
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updatePackageCategoryResponse(
    args: { id: number; body: Models.PackageCategoryEditableDto },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/package-category/{id}",
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
   * DeletePackageCategory
   * Required scope - `gambit:erp:packages`
   * DELETE /api/erp/v1/package-category/{id}
   * Operation ID: DeletePackageCategory
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deletePackageCategoryResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/package-category/{id}",
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
   * GetPackageCategory
   * Required scope - `gambit:erp:packages`
   * GET /api/erp/v1/package-category/{id}
   * Operation ID: GetPackageCategory
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPackageCategoryResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/package-category/{id}",
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
   * ReorderPackageCategories
   * Required scope - `gambit:erp:packages`
   * POST /api/erp/v1/package-category/reorder
   * Operation ID: ReorderPackageCategories
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function reorderPackageCategoriesResponse(
    args: { body: Models.ReorderPackageCategoryCommad },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/package-category/reorder",
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
   * GetPackageCategoryPackages
   * Required scope - `gambit:erp:packages`
   * GET /api/erp/v1/package-category/{id}/packages
   * Operation ID: GetPackageCategoryPackages
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPackageCategoryPackagesResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/package-category/{id}/packages",
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
   * CreatePackageCategoryPackage
   * Required scope - `gambit:erp:packages`
   * POST /api/erp/v1/package-category/{id}/packages/{packageId}
   * Operation ID: CreatePackageCategoryPackage
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createPackageCategoryPackageResponse(
    args: { id: number; packageId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/package-category/{id}/packages/{packageId}",
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
   * UpdatePackageCategoryPackageOrder
   * Required scope - `gambit:erp:packages`
   * PUT /api/erp/v1/package-category/{id}/packages/{packageId}
   * Operation ID: UpdatePackageCategoryPackageOrder
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updatePackageCategoryPackageOrderResponse(
    args: {
      id: number;
      packageId: number;
      body: Models.UpdatePacakgeCategoryPackageOrderCommad;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/package-category/{id}/packages/{packageId}",
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
        bodyField: "body",
        bodyRequired: true,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * DeletePackageCategoryPackage
   * Required scope - `gambit:erp:packages`
   * DELETE /api/erp/v1/package-category/{id}/packages/{packageId}
   * Operation ID: DeletePackageCategoryPackage
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deletePackageCategoryPackageResponse(
    args: { id: number; packageId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/package-category/{id}/packages/{packageId}",
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
   * ReorderPackageCategoryPackages
   * Required scope - `gambit:erp:packages`
   * POST /api/erp/v1/package-category/{id}/packages/reorder
   * Operation ID: ReorderPackageCategoryPackages
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function reorderPackageCategoryPackagesResponse(
    args: { id: number; body: Array<number> },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/package-category/{id}/packages/reorder",
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
   * ClearPackageCategoryPackages
   * Required scope - `gambit:erp:packages`
   * POST /api/erp/v1/package-category/{id}/packages/clear
   * Operation ID: ClearPackageCategoryPackages
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function clearPackageCategoryPackagesResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/package-category/{id}/packages/clear",
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
   * GetPackageCategoryLookup
   * Required scope - `gambit:static_data`
   * GET /api/v1/package-categories
   * Operation ID: GetPackageCategoryLookup
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPackageCategoryLookupResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/v1/package-categories",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  return {
    createPackageCategoryResponse,
    /**
     * CreatePackageCategory
     * Required scope - `gambit:erp:packages`
     * POST /api/erp/v1/package-category
     * Operation ID: CreatePackageCategory
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createPackageCategory(
      args: { body: Models.PackageCategoryEditableDto },
      options?: RequestOptions,
    ): Promise<number> {
      return transport.read<number>(
        await createPackageCategoryResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPackageCategoriesResponse,
    /**
     * GetPackageCategories
     * Required scope - `gambit:erp:packages`
     * GET /api/erp/v1/package-category
     * Operation ID: GetPackageCategories
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPackageCategories(
      options?: RequestOptions,
    ): Promise<Array<Models.PackageCategoriesViewModel>> {
      return transport.read<Array<Models.PackageCategoriesViewModel>>(
        await getPackageCategoriesResponse(options),
        { "200": { kind: "json" } },
      );
    },
    updatePackageCategoryResponse,
    /**
     * UpdatePackageCategory
     * Required scope - `gambit:erp:packages`
     * PUT /api/erp/v1/package-category/{id}
     * Operation ID: UpdatePackageCategory
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updatePackageCategory(
      args: { id: number; body: Models.PackageCategoryEditableDto },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updatePackageCategoryResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deletePackageCategoryResponse,
    /**
     * DeletePackageCategory
     * Required scope - `gambit:erp:packages`
     * DELETE /api/erp/v1/package-category/{id}
     * Operation ID: DeletePackageCategory
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deletePackageCategory(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deletePackageCategoryResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getPackageCategoryResponse,
    /**
     * GetPackageCategory
     * Required scope - `gambit:erp:packages`
     * GET /api/erp/v1/package-category/{id}
     * Operation ID: GetPackageCategory
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPackageCategory(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.PackageCategoriesInfoModel> {
      return transport.read<Models.PackageCategoriesInfoModel>(
        await getPackageCategoryResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    reorderPackageCategoriesResponse,
    /**
     * ReorderPackageCategories
     * Required scope - `gambit:erp:packages`
     * POST /api/erp/v1/package-category/reorder
     * Operation ID: ReorderPackageCategories
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async reorderPackageCategories(
      args: { body: Models.ReorderPackageCategoryCommad },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await reorderPackageCategoriesResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getPackageCategoryPackagesResponse,
    /**
     * GetPackageCategoryPackages
     * Required scope - `gambit:erp:packages`
     * GET /api/erp/v1/package-category/{id}/packages
     * Operation ID: GetPackageCategoryPackages
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPackageCategoryPackages(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Array<Models.PackageCategoryPackageViewModel>> {
      return transport.read<Array<Models.PackageCategoryPackageViewModel>>(
        await getPackageCategoryPackagesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createPackageCategoryPackageResponse,
    /**
     * CreatePackageCategoryPackage
     * Required scope - `gambit:erp:packages`
     * POST /api/erp/v1/package-category/{id}/packages/{packageId}
     * Operation ID: CreatePackageCategoryPackage
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createPackageCategoryPackage(
      args: { id: number; packageId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await createPackageCategoryPackageResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    updatePackageCategoryPackageOrderResponse,
    /**
     * UpdatePackageCategoryPackageOrder
     * Required scope - `gambit:erp:packages`
     * PUT /api/erp/v1/package-category/{id}/packages/{packageId}
     * Operation ID: UpdatePackageCategoryPackageOrder
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updatePackageCategoryPackageOrder(
      args: {
        id: number;
        packageId: number;
        body: Models.UpdatePacakgeCategoryPackageOrderCommad;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updatePackageCategoryPackageOrderResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deletePackageCategoryPackageResponse,
    /**
     * DeletePackageCategoryPackage
     * Required scope - `gambit:erp:packages`
     * DELETE /api/erp/v1/package-category/{id}/packages/{packageId}
     * Operation ID: DeletePackageCategoryPackage
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deletePackageCategoryPackage(
      args: { id: number; packageId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deletePackageCategoryPackageResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    reorderPackageCategoryPackagesResponse,
    /**
     * ReorderPackageCategoryPackages
     * Required scope - `gambit:erp:packages`
     * POST /api/erp/v1/package-category/{id}/packages/reorder
     * Operation ID: ReorderPackageCategoryPackages
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async reorderPackageCategoryPackages(
      args: { id: number; body: Array<number> },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await reorderPackageCategoryPackagesResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    clearPackageCategoryPackagesResponse,
    /**
     * ClearPackageCategoryPackages
     * Required scope - `gambit:erp:packages`
     * POST /api/erp/v1/package-category/{id}/packages/clear
     * Operation ID: ClearPackageCategoryPackages
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async clearPackageCategoryPackages(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await clearPackageCategoryPackagesResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getPackageCategoryLookupResponse,
    /**
     * GetPackageCategoryLookup
     * Required scope - `gambit:static_data`
     * GET /api/v1/package-categories
     * Operation ID: GetPackageCategoryLookup
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPackageCategoryLookup(
      options?: RequestOptions,
    ): Promise<Array<Models.PackageCategoriesViewModel>> {
      return transport.read<Array<Models.PackageCategoriesViewModel>>(
        await getPackageCategoryLookupResponse(options),
        { "200": { kind: "json" } },
      );
    },
  };
}
