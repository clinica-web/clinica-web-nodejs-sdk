// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainCities(transport: Transport) {
  /**
   * Returns cities filtered by name.
   * Required scope - `gambit:erp:cities`
   * GET /api/erp/v1/cities
   * Operation ID: GetCities
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getCitiesResponse(
    args: {
      /**
       * City name prefix to search for.
       */ search?: string;
      /**
       * Number of cities to skip.
       */ skip?: number;
      /**
       * Maximum number of cities to return.
       */ take?: number;
    } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/cities",
        parameters: [
          {
            name: "search",
            field: "search",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "skip",
            field: "skip",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "take",
            field: "take",
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
   * Creates a new city.
   * Required scope - `gambit:erp`
   * POST /api/erp/v1/cities
   * Operation ID: CreateCity
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createCityResponse(
    args: {
      /**
       * City data.
       */ body: Models.EditableERPCity;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/cities",
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
   * Returns city details by identifier.
   * Required scope - `gambit:erp:cities`
   * GET /api/erp/v1/cities/{cityId}
   * Operation ID: GetCity
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getCityResponse(
    args: {
      /**
       * City identifier.
       */ cityId: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/cities/{cityId}",
        parameters: [
          {
            name: "cityId",
            field: "cityId",
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
   * Replaces an existing city by identifier.
   * Required scope - `gambit:erp`
   * PUT /api/erp/v1/cities/{id}
   * Operation ID: UpdateCity
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateCityResponse(
    args: {
      /**
       * City identifier.
       */ id: number;
      /**
       * Updated city data.
       */ body: Models.EditableERPCity;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/cities/{id}",
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
   * Updates multiple existing cities in a single request.
   * Required scope - `gambit:erp`
   * POST /api/erp/v1/cities/bulk
   * Operation ID: BulkUpdateCities
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function bulkUpdateCitiesResponse(
    args: {
      /**
       * Cities to update.
       */ body: Array<Models.EditableERPBulkCity>;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/cities/bulk",
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
    getCitiesResponse,
    /**
     * Returns cities filtered by name.
     * Required scope - `gambit:erp:cities`
     * GET /api/erp/v1/cities
     * Operation ID: GetCities
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getCities(
      args: {
        /**
         * City name prefix to search for.
         */ search?: string;
        /**
         * Number of cities to skip.
         */ skip?: number;
        /**
         * Maximum number of cities to return.
         */ take?: number;
      } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.ERPCity>> {
      return transport.read<Array<Models.ERPCity>>(
        await getCitiesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createCityResponse,
    /**
     * Creates a new city.
     * Required scope - `gambit:erp`
     * POST /api/erp/v1/cities
     * Operation ID: CreateCity
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createCity(
      args: {
        /**
         * City data.
         */ body: Models.EditableERPCity;
      },
      options?: RequestOptions,
    ): Promise<Models.ERPCity> {
      return transport.read<Models.ERPCity>(
        await createCityResponse(args, options),
        { "201": { kind: "json" } },
      );
    },
    getCityResponse,
    /**
     * Returns city details by identifier.
     * Required scope - `gambit:erp:cities`
     * GET /api/erp/v1/cities/{cityId}
     * Operation ID: GetCity
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getCity(
      args: {
        /**
         * City identifier.
         */ cityId: number;
      },
      options?: RequestOptions,
    ): Promise<Models.ERPCity> {
      return transport.read<Models.ERPCity>(
        await getCityResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateCityResponse,
    /**
     * Replaces an existing city by identifier.
     * Required scope - `gambit:erp`
     * PUT /api/erp/v1/cities/{id}
     * Operation ID: UpdateCity
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateCity(
      args: {
        /**
         * City identifier.
         */ id: number;
        /**
         * Updated city data.
         */ body: Models.EditableERPCity;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(await updateCityResponse(args, options), {
        "200": { kind: "unknown" },
      });
    },
    bulkUpdateCitiesResponse,
    /**
     * Updates multiple existing cities in a single request.
     * Required scope - `gambit:erp`
     * POST /api/erp/v1/cities/bulk
     * Operation ID: BulkUpdateCities
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async bulkUpdateCities(
      args: {
        /**
         * Cities to update.
         */ body: Array<Models.EditableERPBulkCity>;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await bulkUpdateCitiesResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
