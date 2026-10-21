// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createOnlinePrices(transport: Transport) {
  /**
   * GetPriceViewModel
   * Required scope - `gambit:static_data`
   * GET /api/online/v1/prices/{priceId}/view
   * Operation ID: GetOnlinePriceView
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getOnlinePriceViewResponse(
    args: { priceId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/prices/{priceId}/view",
        parameters: [
          {
            name: "priceId",
            field: "priceId",
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
   * GetPackageCategories
   * Required scope - `gambit:static_data`
   * GET /api/online/v1/prices/package-categories
   * Operation ID: GetOnlinePricePackageCategories
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getOnlinePricePackageCategoriesResponse(
    args: { parentId?: number } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/prices/package-categories",
        parameters: [
          {
            name: "parentId",
            field: "parentId",
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
   * GetPackages
   * Required scope - `gambit:static_data`
   * GET /api/online/v1/prices/packages
   * Operation ID: SearchOnlinePricePackages
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function searchOnlinePricePackagesResponse(
    args: { categoryId?: number; searchExpr?: string } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/prices/packages",
        parameters: [
          {
            name: "categoryId",
            field: "categoryId",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "searchExpr",
            field: "searchExpr",
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
   * GetPackage
   * Required scope - `gambit:static_data`
   * GET /api/online/v1/prices/packages/{id}
   * Operation ID: GetOnlinePricePackageById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getOnlinePricePackageByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/prices/packages/{id}",
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
    getOnlinePriceViewResponse,
    /**
     * GetPriceViewModel
     * Required scope - `gambit:static_data`
     * GET /api/online/v1/prices/{priceId}/view
     * Operation ID: GetOnlinePriceView
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getOnlinePriceView(
      args: { priceId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.OnlinePriceViewModel>> {
      return transport.read<Array<Models.OnlinePriceViewModel>>(
        await getOnlinePriceViewResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getOnlinePricePackageCategoriesResponse,
    /**
     * GetPackageCategories
     * Required scope - `gambit:static_data`
     * GET /api/online/v1/prices/package-categories
     * Operation ID: GetOnlinePricePackageCategories
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getOnlinePricePackageCategories(
      args: { parentId?: number } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.BaseDto>> {
      return transport.read<Array<Models.BaseDto>>(
        await getOnlinePricePackageCategoriesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    searchOnlinePricePackagesResponse,
    /**
     * GetPackages
     * Required scope - `gambit:static_data`
     * GET /api/online/v1/prices/packages
     * Operation ID: SearchOnlinePricePackages
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async searchOnlinePricePackages(
      args: { categoryId?: number; searchExpr?: string } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.OnlinePackageSlim>> {
      return transport.read<Array<Models.OnlinePackageSlim>>(
        await searchOnlinePricePackagesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getOnlinePricePackageByIdResponse,
    /**
     * GetPackage
     * Required scope - `gambit:static_data`
     * GET /api/online/v1/prices/packages/{id}
     * Operation ID: GetOnlinePricePackageById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getOnlinePricePackageById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.OnlinePackageFull> {
      return transport.read<Models.OnlinePackageFull>(
        await getOnlinePricePackageByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
