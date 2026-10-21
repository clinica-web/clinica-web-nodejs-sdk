// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createOnlineCities(transport: Transport) {
  /**
   * Get city information by id
   * Required scope - `gambit:static_data`
   * GET /api/online/v1/cities/{id}
   * Operation ID: GetCityLookupById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getCityLookupByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/cities/{id}",
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
   * Search city by name
   * Required scope - `gambit:static_data`
   * GET /api/online/v1/cities
   * Operation ID: SearchCityLookup
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function searchCityLookupResponse(
    args: {
      /**
       * searching value (case insensitive)
       *
       * - min length is 3 characters
       */ query?: string;
    } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/cities",
        parameters: [
          {
            name: "query",
            field: "query",
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
  return {
    getCityLookupByIdResponse,
    /**
     * Get city information by id
     * Required scope - `gambit:static_data`
     * GET /api/online/v1/cities/{id}
     * Operation ID: GetCityLookupById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getCityLookupById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.CityModel> {
      return transport.read<Models.CityModel>(
        await getCityLookupByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    searchCityLookupResponse,
    /**
     * Search city by name
     * Required scope - `gambit:static_data`
     * GET /api/online/v1/cities
     * Operation ID: SearchCityLookup
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async searchCityLookup(
      args: {
        /**
         * searching value (case insensitive)
         *
         * - min length is 3 characters
         */ query?: string;
      } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.CityModel>> {
      return transport.read<Array<Models.CityModel>>(
        await searchCityLookupResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
