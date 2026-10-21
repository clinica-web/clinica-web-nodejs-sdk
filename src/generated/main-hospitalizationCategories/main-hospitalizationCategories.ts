// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainHospitalizationCategories(transport: Transport) {
  /**
   * GetHospitalizationCategories
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/hospitalization-categories
   * Operation ID: GetHospitalizationCategories
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getHospitalizationCategoriesResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/hospitalization-categories",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * CreateHospitalizationCategory
   * Required scope - `gambit:erp`
   * POST /api/erp/v1/hospitalization-categories
   * Operation ID: CreateHospitalizationCategory
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createHospitalizationCategoryResponse(
    args: { body: Models.EditableERPHospitalizationCategory },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/hospitalization-categories",
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
   * GetHospitalizationCategoriesLookup
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/hospitalization-categories/lookup
   * Operation ID: GetHospitalizationCategoriesLookup
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getHospitalizationCategoriesLookupResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/hospitalization-categories/lookup",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * GetHospitalizationCategoryById
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/hospitalization-categories/{id}
   * Operation ID: GetHospitalizationCategoryById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getHospitalizationCategoryByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/hospitalization-categories/{id}",
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
   * UpdateHospitalizationCategory
   * Required scope - `gambit:erp`
   * PUT /api/erp/v1/hospitalization-categories/{id}
   * Operation ID: UpdateHospitalizationCategory
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateHospitalizationCategoryResponse(
    args: { id: number; body: Models.EditableERPHospitalizationCategory },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/hospitalization-categories/{id}",
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
   * DeleteHospitalizationCategory
   * Required scope - `gambit:erp`
   * DELETE /api/erp/v1/hospitalization-categories/{id}
   * Operation ID: DeleteHospitalizationCategory
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteHospitalizationCategoryResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/hospitalization-categories/{id}",
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
    getHospitalizationCategoriesResponse,
    /**
     * GetHospitalizationCategories
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/hospitalization-categories
     * Operation ID: GetHospitalizationCategories
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getHospitalizationCategories(
      options?: RequestOptions,
    ): Promise<Array<Models.ERPHospitalizationCategory>> {
      return transport.read<Array<Models.ERPHospitalizationCategory>>(
        await getHospitalizationCategoriesResponse(options),
        { "200": { kind: "json" } },
      );
    },
    createHospitalizationCategoryResponse,
    /**
     * CreateHospitalizationCategory
     * Required scope - `gambit:erp`
     * POST /api/erp/v1/hospitalization-categories
     * Operation ID: CreateHospitalizationCategory
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createHospitalizationCategory(
      args: { body: Models.EditableERPHospitalizationCategory },
      options?: RequestOptions,
    ): Promise<Models.ERPHospitalizationCategory> {
      return transport.read<Models.ERPHospitalizationCategory>(
        await createHospitalizationCategoryResponse(args, options),
        { "201": { kind: "json" } },
      );
    },
    getHospitalizationCategoriesLookupResponse,
    /**
     * GetHospitalizationCategoriesLookup
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/hospitalization-categories/lookup
     * Operation ID: GetHospitalizationCategoriesLookup
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getHospitalizationCategoriesLookup(
      options?: RequestOptions,
    ): Promise<Array<Models.ERPHospitalizationCategory>> {
      return transport.read<Array<Models.ERPHospitalizationCategory>>(
        await getHospitalizationCategoriesLookupResponse(options),
        { "200": { kind: "json" } },
      );
    },
    getHospitalizationCategoryByIdResponse,
    /**
     * GetHospitalizationCategoryById
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/hospitalization-categories/{id}
     * Operation ID: GetHospitalizationCategoryById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getHospitalizationCategoryById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPHospitalizationCategory> {
      return transport.read<Models.ERPHospitalizationCategory>(
        await getHospitalizationCategoryByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateHospitalizationCategoryResponse,
    /**
     * UpdateHospitalizationCategory
     * Required scope - `gambit:erp`
     * PUT /api/erp/v1/hospitalization-categories/{id}
     * Operation ID: UpdateHospitalizationCategory
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateHospitalizationCategory(
      args: { id: number; body: Models.EditableERPHospitalizationCategory },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateHospitalizationCategoryResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deleteHospitalizationCategoryResponse,
    /**
     * DeleteHospitalizationCategory
     * Required scope - `gambit:erp`
     * DELETE /api/erp/v1/hospitalization-categories/{id}
     * Operation ID: DeleteHospitalizationCategory
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteHospitalizationCategory(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteHospitalizationCategoryResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
