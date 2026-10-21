// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainNomenclaturePrices(transport: Transport) {
  /**
   * GetNomenclaturePrices
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/nomenclature-prices/{nomenclatureId}
   * Operation ID: GetNomenclaturePrices
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getNomenclaturePricesResponse(
    args: { nomenclatureId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/nomenclature-prices/{nomenclatureId}",
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
   * GetNomenclaturePricesByPriceId
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/nomenclature-prices/price/{priceId}
   * Operation ID: GetNomenclaturePricesByPriceId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getNomenclaturePricesByPriceIdResponse(
    args: { priceId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/nomenclature-prices/price/{priceId}",
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
   * GetNomenclaturePrice
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/nomenclature-prices/{nomenclatureId}/{priceId}
   * Operation ID: GetNomenclaturePrice
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getNomenclaturePriceResponse(
    args: { priceId: number; nomenclatureId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/nomenclature-prices/{nomenclatureId}/{priceId}",
        parameters: [
          {
            name: "priceId",
            field: "priceId",
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
  /**
   * UpdateNomenclaturePrice
   * Required scope - `gambit:erp:material:write`
   * PUT /api/erp/v1/nomenclature-prices/{nomenclatureId}/{priceId}
   * Operation ID: UpdateNomenclaturePrice
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateNomenclaturePriceResponse(
    args: {
      priceId: number;
      nomenclatureId: number;
      body: Models.EditableERPNomenclaturePrice;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/nomenclature-prices/{nomenclatureId}/{priceId}",
        parameters: [
          {
            name: "priceId",
            field: "priceId",
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
        bodyField: "body",
        bodyRequired: true,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * DeleteNomenclaturePrice
   * Required scope - `gambit:erp:material:write`
   * DELETE /api/erp/v1/nomenclature-prices/{nomenclatureId}/{priceId}
   * Operation ID: DeleteNomenclaturePrice
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteNomenclaturePriceResponse(
    args: { priceId: number; nomenclatureId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/nomenclature-prices/{nomenclatureId}/{priceId}",
        parameters: [
          {
            name: "priceId",
            field: "priceId",
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
  /**
   * CreateNomenclaturePrice
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/nomenclature-prices
   * Operation ID: CreateNomenclaturePrice
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createNomenclaturePriceResponse(
    args: { body: Models.ERPNomenclaturePrice },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/nomenclature-prices",
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
    getNomenclaturePricesResponse,
    /**
     * GetNomenclaturePrices
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/nomenclature-prices/{nomenclatureId}
     * Operation ID: GetNomenclaturePrices
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getNomenclaturePrices(
      args: { nomenclatureId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPNomenclaturePrice>> {
      return transport.read<Array<Models.ERPNomenclaturePrice>>(
        await getNomenclaturePricesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getNomenclaturePricesByPriceIdResponse,
    /**
     * GetNomenclaturePricesByPriceId
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/nomenclature-prices/price/{priceId}
     * Operation ID: GetNomenclaturePricesByPriceId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getNomenclaturePricesByPriceId(
      args: { priceId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPNomenclaturePrice>> {
      return transport.read<Array<Models.ERPNomenclaturePrice>>(
        await getNomenclaturePricesByPriceIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getNomenclaturePriceResponse,
    /**
     * GetNomenclaturePrice
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/nomenclature-prices/{nomenclatureId}/{priceId}
     * Operation ID: GetNomenclaturePrice
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getNomenclaturePrice(
      args: { priceId: number; nomenclatureId: number },
      options?: RequestOptions,
    ): Promise<Models.ERPNomenclaturePrice> {
      return transport.read<Models.ERPNomenclaturePrice>(
        await getNomenclaturePriceResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateNomenclaturePriceResponse,
    /**
     * UpdateNomenclaturePrice
     * Required scope - `gambit:erp:material:write`
     * PUT /api/erp/v1/nomenclature-prices/{nomenclatureId}/{priceId}
     * Operation ID: UpdateNomenclaturePrice
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateNomenclaturePrice(
      args: {
        priceId: number;
        nomenclatureId: number;
        body: Models.EditableERPNomenclaturePrice;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateNomenclaturePriceResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deleteNomenclaturePriceResponse,
    /**
     * DeleteNomenclaturePrice
     * Required scope - `gambit:erp:material:write`
     * DELETE /api/erp/v1/nomenclature-prices/{nomenclatureId}/{priceId}
     * Operation ID: DeleteNomenclaturePrice
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteNomenclaturePrice(
      args: { priceId: number; nomenclatureId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteNomenclaturePriceResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    createNomenclaturePriceResponse,
    /**
     * CreateNomenclaturePrice
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/nomenclature-prices
     * Operation ID: CreateNomenclaturePrice
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createNomenclaturePrice(
      args: { body: Models.ERPNomenclaturePrice },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await createNomenclaturePriceResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
