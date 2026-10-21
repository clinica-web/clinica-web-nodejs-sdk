// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createOnlineSpecializations(transport: Transport) {
  /**
   * List of specializations available in online portals
   *
   * if specialization is not configured to be visible in online portals, it will not be returned
   * Required scope - `gambit:static_data`
   * GET /api/online/v1/specializations
   * Operation ID: GetSpecializations
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getSpecializationsResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/specializations",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * Return specialization by id
   * Required scope - `gambit:static_data`
   * GET /api/online/v1/specializations/{id}
   * Operation ID: GetSpecializationById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getSpecializationByIdResponse(
    args: {
      /**
       * specialization identifier
       */ id: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/specializations/{id}",
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
   * get categories for specializations
   *
   * Specialization can have category, but it is not required
   * Required scope - `gambit:static_data`
   * GET /api/online/v1/specializations/categories
   * Operation ID: GetSpecializationCategories
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getSpecializationCategoriesResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/specializations/categories",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  return {
    getSpecializationsResponse,
    /**
     * List of specializations available in online portals
     *
     * if specialization is not configured to be visible in online portals, it will not be returned
     * Required scope - `gambit:static_data`
     * GET /api/online/v1/specializations
     * Operation ID: GetSpecializations
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getSpecializations(
      options?: RequestOptions,
    ): Promise<Array<Models.OnlineSpecialization>> {
      return transport.read<Array<Models.OnlineSpecialization>>(
        await getSpecializationsResponse(options),
        { "200": { kind: "json" } },
      );
    },
    getSpecializationByIdResponse,
    /**
     * Return specialization by id
     * Required scope - `gambit:static_data`
     * GET /api/online/v1/specializations/{id}
     * Operation ID: GetSpecializationById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getSpecializationById(
      args: {
        /**
         * specialization identifier
         */ id: number;
      },
      options?: RequestOptions,
    ): Promise<Models.OnlineSpecialization> {
      return transport.read<Models.OnlineSpecialization>(
        await getSpecializationByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getSpecializationCategoriesResponse,
    /**
     * get categories for specializations
     *
     * Specialization can have category, but it is not required
     * Required scope - `gambit:static_data`
     * GET /api/online/v1/specializations/categories
     * Operation ID: GetSpecializationCategories
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getSpecializationCategories(
      options?: RequestOptions,
    ): Promise<Array<Models.BaseDto>> {
      return transport.read<Array<Models.BaseDto>>(
        await getSpecializationCategoriesResponse(options),
        { "200": { kind: "json" } },
      );
    },
  };
}
