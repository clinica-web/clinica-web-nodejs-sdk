// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainIcd10(transport: Transport) {
  /**
   * Returns ICD10 dictionary items ordered by code.
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/icd10
   * Operation ID: GetIcd10Items
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getIcd10ItemsResponse(
    args: {
      /**
       * Optional text filter applied to code and description.
       */ query?: string;
      /**
       * Optional number of ordered items to skip.
       */ skip?: number;
      /**
       * Optional number of ordered items to return.
       */ take?: number;
    } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/icd10",
        parameters: [
          {
            name: "query",
            field: "query",
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
   * Creates a new ICD10 dictionary item.
   * Required scope - `gambit:erp`
   * POST /api/erp/v1/icd10
   * Operation ID: CreateIcd10Item
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createIcd10ItemResponse(
    args: {
      /**
       * ICD10 data to create.
       */ body: Models.EditableERPIcd10;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/icd10",
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
   * Returns a single ICD10 dictionary item by identifier.
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/icd10/{id}
   * Operation ID: GetIcd10ItemById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getIcd10ItemByIdResponse(
    args: {
      /**
       * ICD10 identifier.
       */ id: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/icd10/{id}",
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
   * Updates an existing ICD10 dictionary item.
   * Required scope - `gambit:erp`
   * PUT /api/erp/v1/icd10/{id}
   * Operation ID: UpdateIcd10Item
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateIcd10ItemResponse(
    args: {
      /**
       * ICD10 identifier.
       */ id: number;
      /**
       * Updated ICD10 data.
       */ body: Models.EditableERPIcd10;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/icd10/{id}",
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
  return {
    getIcd10ItemsResponse,
    /**
     * Returns ICD10 dictionary items ordered by code.
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/icd10
     * Operation ID: GetIcd10Items
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getIcd10Items(
      args: {
        /**
         * Optional text filter applied to code and description.
         */ query?: string;
        /**
         * Optional number of ordered items to skip.
         */ skip?: number;
        /**
         * Optional number of ordered items to return.
         */ take?: number;
      } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.ERPIcd10>> {
      return transport.read<Array<Models.ERPIcd10>>(
        await getIcd10ItemsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createIcd10ItemResponse,
    /**
     * Creates a new ICD10 dictionary item.
     * Required scope - `gambit:erp`
     * POST /api/erp/v1/icd10
     * Operation ID: CreateIcd10Item
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createIcd10Item(
      args: {
        /**
         * ICD10 data to create.
         */ body: Models.EditableERPIcd10;
      },
      options?: RequestOptions,
    ): Promise<Models.ERPIcd10> {
      return transport.read<Models.ERPIcd10>(
        await createIcd10ItemResponse(args, options),
        { "201": { kind: "json" } },
      );
    },
    getIcd10ItemByIdResponse,
    /**
     * Returns a single ICD10 dictionary item by identifier.
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/icd10/{id}
     * Operation ID: GetIcd10ItemById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getIcd10ItemById(
      args: {
        /**
         * ICD10 identifier.
         */ id: number;
      },
      options?: RequestOptions,
    ): Promise<Models.ERPIcd10> {
      return transport.read<Models.ERPIcd10>(
        await getIcd10ItemByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateIcd10ItemResponse,
    /**
     * Updates an existing ICD10 dictionary item.
     * Required scope - `gambit:erp`
     * PUT /api/erp/v1/icd10/{id}
     * Operation ID: UpdateIcd10Item
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateIcd10Item(
      args: {
        /**
         * ICD10 identifier.
         */ id: number;
        /**
         * Updated ICD10 data.
         */ body: Models.EditableERPIcd10;
      },
      options?: RequestOptions,
    ): Promise<Models.ERPIcd10> {
      return transport.read<Models.ERPIcd10>(
        await updateIcd10ItemResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
