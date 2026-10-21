// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainPackagePrice(transport: Transport) {
  /**
   * GetAllPackagePriceByPriceId
   * Required scope - `gambit:erp:package-price`
   * GET /api/erp/v1/package-price/prices/{priceId}
   * Operation ID: GetPackagePricesByPriceId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPackagePricesByPriceIdResponse(
    args: { priceId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/package-price/prices/{priceId}",
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
   * GetAllPackagePriceByPackageId
   * Required scope - `gambit:erp:package-price`
   * GET /api/erp/v1/package-price/packages/{packageId}
   * Operation ID: GetPackagePricesByPackageId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPackagePricesByPackageIdResponse(
    args: { packageId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/package-price/packages/{packageId}",
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
   * UpdatePackagePrice
   * Required scope - `gambit:erp:package-price`
   * PATCH /api/erp/v1/package-price/packages/{packageId}/prices/{priceId}
   * Operation ID: UpdatePackagePrice
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updatePackagePriceResponse(
    args: { packageId: number; priceId: number; cost?: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PATCH",
        path: "/api/erp/v1/package-price/packages/{packageId}/prices/{priceId}",
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
            name: "priceId",
            field: "priceId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "cost",
            field: "cost",
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
   * CreatePackagePrice
   * Required scope - `gambit:erp:package-price`
   * POST /api/erp/v1/package-price/packages/{packageId}/prices/{priceId}
   * Operation ID: CreatePackagePrice
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createPackagePriceResponse(
    args: { packageId: number; priceId: number; cost?: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/package-price/packages/{packageId}/prices/{priceId}",
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
            name: "priceId",
            field: "priceId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "cost",
            field: "cost",
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
   * DeletePackage
   * Required scope - `gambit:erp:package-price`
   * DELETE /api/erp/v1/package-price/packages/{packageId}/prices/{priceId}
   * Operation ID: DeletePackagePrice
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deletePackagePriceResponse(
    args: { packageId: number; priceId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/package-price/packages/{packageId}/prices/{priceId}",
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
  return {
    getPackagePricesByPriceIdResponse,
    /**
     * GetAllPackagePriceByPriceId
     * Required scope - `gambit:erp:package-price`
     * GET /api/erp/v1/package-price/prices/{priceId}
     * Operation ID: GetPackagePricesByPriceId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPackagePricesByPriceId(
      args: { priceId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPPackagePrice>> {
      return transport.read<Array<Models.ERPPackagePrice>>(
        await getPackagePricesByPriceIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPackagePricesByPackageIdResponse,
    /**
     * GetAllPackagePriceByPackageId
     * Required scope - `gambit:erp:package-price`
     * GET /api/erp/v1/package-price/packages/{packageId}
     * Operation ID: GetPackagePricesByPackageId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPackagePricesByPackageId(
      args: { packageId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPPackagePrice>> {
      return transport.read<Array<Models.ERPPackagePrice>>(
        await getPackagePricesByPackageIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updatePackagePriceResponse,
    /**
     * UpdatePackagePrice
     * Required scope - `gambit:erp:package-price`
     * PATCH /api/erp/v1/package-price/packages/{packageId}/prices/{priceId}
     * Operation ID: UpdatePackagePrice
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updatePackagePrice(
      args: { packageId: number; priceId: number; cost?: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updatePackagePriceResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    createPackagePriceResponse,
    /**
     * CreatePackagePrice
     * Required scope - `gambit:erp:package-price`
     * POST /api/erp/v1/package-price/packages/{packageId}/prices/{priceId}
     * Operation ID: CreatePackagePrice
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createPackagePrice(
      args: { packageId: number; priceId: number; cost?: number },
      options?: RequestOptions,
    ): Promise<Models.ERPPackagePrice> {
      return transport.read<Models.ERPPackagePrice>(
        await createPackagePriceResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    deletePackagePriceResponse,
    /**
     * DeletePackage
     * Required scope - `gambit:erp:package-price`
     * DELETE /api/erp/v1/package-price/packages/{packageId}/prices/{priceId}
     * Operation ID: DeletePackagePrice
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deletePackagePrice(
      args: { packageId: number; priceId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deletePackagePriceResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
