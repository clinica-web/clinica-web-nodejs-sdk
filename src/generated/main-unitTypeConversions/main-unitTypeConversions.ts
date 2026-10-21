// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainUnitTypeConversions(transport: Transport) {
  /**
   * GetUnitTypeConversions
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/unit-type-conversions
   * Operation ID: GetUnitTypeConversions
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getUnitTypeConversionsResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/unit-type-conversions",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * CreateUnitTypeConversion
   * Required scope - `gambit:erp:material:write`
   * POST /api/erp/v1/unit-type-conversions
   * Operation ID: CreateUnitTypeConversion
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createUnitTypeConversionResponse(
    args: { body: Models.ERPUnitTypeConversions },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/unit-type-conversions",
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
   * GetUnitTypeConversionsByFromId
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/unit-type-conversions/from/{fromId}
   * Operation ID: GetUnitTypeConversionsByFromId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getUnitTypeConversionsByFromIdResponse(
    args: { fromId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/unit-type-conversions/from/{fromId}",
        parameters: [
          {
            name: "fromId",
            field: "fromId",
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
   * GetUnitTypeConversionsByToId
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/unit-type-conversions/to/{toId}
   * Operation ID: GetUnitTypeConversionsByToId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getUnitTypeConversionsByToIdResponse(
    args: { toId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/unit-type-conversions/to/{toId}",
        parameters: [
          {
            name: "toId",
            field: "toId",
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
   * GetUnitTypeConversion
   * Required scope - `gambit:erp:material:read`
   * GET /api/erp/v1/unit-type-conversions/{fromId}/{toId}
   * Operation ID: GetUnitTypeConversion
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getUnitTypeConversionResponse(
    args: { fromId: number; toId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/unit-type-conversions/{fromId}/{toId}",
        parameters: [
          {
            name: "fromId",
            field: "fromId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "toId",
            field: "toId",
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
   * UpdateUnitTypeConversion
   * Required scope - `gambit:erp:material:write`
   * PUT /api/erp/v1/unit-type-conversions/{fromId}/{toId}
   * Operation ID: UpdateUnitTypeConversion
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateUnitTypeConversionResponse(
    args: { fromId: number; toId: number; body: Models.ERPUnitTypeConversions },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/unit-type-conversions/{fromId}/{toId}",
        parameters: [
          {
            name: "fromId",
            field: "fromId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "toId",
            field: "toId",
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
   * DeleteUnitTypeConversion
   * Required scope - `gambit:erp:material:write`
   * DELETE /api/erp/v1/unit-type-conversions/{fromId}/{toId}
   * Operation ID: DeleteUnitTypeConversion
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteUnitTypeConversionResponse(
    args: { fromId: number; toId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/unit-type-conversions/{fromId}/{toId}",
        parameters: [
          {
            name: "fromId",
            field: "fromId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "toId",
            field: "toId",
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
    getUnitTypeConversionsResponse,
    /**
     * GetUnitTypeConversions
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/unit-type-conversions
     * Operation ID: GetUnitTypeConversions
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getUnitTypeConversions(
      options?: RequestOptions,
    ): Promise<Array<Models.ERPUnitTypeConversions>> {
      return transport.read<Array<Models.ERPUnitTypeConversions>>(
        await getUnitTypeConversionsResponse(options),
        { "200": { kind: "json" } },
      );
    },
    createUnitTypeConversionResponse,
    /**
     * CreateUnitTypeConversion
     * Required scope - `gambit:erp:material:write`
     * POST /api/erp/v1/unit-type-conversions
     * Operation ID: CreateUnitTypeConversion
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createUnitTypeConversion(
      args: { body: Models.ERPUnitTypeConversions },
      options?: RequestOptions,
    ): Promise<Models.ERPUnitTypeConversions> {
      return transport.read<Models.ERPUnitTypeConversions>(
        await createUnitTypeConversionResponse(args, options),
        { "201": { kind: "json" } },
      );
    },
    getUnitTypeConversionsByFromIdResponse,
    /**
     * GetUnitTypeConversionsByFromId
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/unit-type-conversions/from/{fromId}
     * Operation ID: GetUnitTypeConversionsByFromId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getUnitTypeConversionsByFromId(
      args: { fromId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPUnitTypeConversions>> {
      return transport.read<Array<Models.ERPUnitTypeConversions>>(
        await getUnitTypeConversionsByFromIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getUnitTypeConversionsByToIdResponse,
    /**
     * GetUnitTypeConversionsByToId
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/unit-type-conversions/to/{toId}
     * Operation ID: GetUnitTypeConversionsByToId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getUnitTypeConversionsByToId(
      args: { toId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPUnitTypeConversions>> {
      return transport.read<Array<Models.ERPUnitTypeConversions>>(
        await getUnitTypeConversionsByToIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getUnitTypeConversionResponse,
    /**
     * GetUnitTypeConversion
     * Required scope - `gambit:erp:material:read`
     * GET /api/erp/v1/unit-type-conversions/{fromId}/{toId}
     * Operation ID: GetUnitTypeConversion
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getUnitTypeConversion(
      args: { fromId: number; toId: number },
      options?: RequestOptions,
    ): Promise<Models.ERPUnitTypeConversions> {
      return transport.read<Models.ERPUnitTypeConversions>(
        await getUnitTypeConversionResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateUnitTypeConversionResponse,
    /**
     * UpdateUnitTypeConversion
     * Required scope - `gambit:erp:material:write`
     * PUT /api/erp/v1/unit-type-conversions/{fromId}/{toId}
     * Operation ID: UpdateUnitTypeConversion
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateUnitTypeConversion(
      args: {
        fromId: number;
        toId: number;
        body: Models.ERPUnitTypeConversions;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateUnitTypeConversionResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deleteUnitTypeConversionResponse,
    /**
     * DeleteUnitTypeConversion
     * Required scope - `gambit:erp:material:write`
     * DELETE /api/erp/v1/unit-type-conversions/{fromId}/{toId}
     * Operation ID: DeleteUnitTypeConversion
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteUnitTypeConversion(
      args: { fromId: number; toId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteUnitTypeConversionResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
