// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainHospitals(transport: Transport) {
  /**
   * GetAllHospitals
   * Required scope - `gambit:erp:hospitals`
   * GET /api/erp/v1/hospitals
   * Operation ID: GetHospitals
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getHospitalsResponse(options?: RequestOptions): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/hospitals",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * CreateHospital
   * Required scope - `gambit:erp:hospitals`
   * POST /api/erp/v1/hospitals
   * Operation ID: CreateHospital
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createHospitalResponse(
    args: { body?: Models.ERPHospitals } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/hospitals",
        parameters: [],
        bodyField: "body",
        bodyRequired: false,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * GetHospital
   * Required scope - `gambit:erp:hospitals`
   * GET /api/erp/v1/hospitals/{hospitalId}
   * Operation ID: GetHospitalById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getHospitalByIdResponse(
    args: { hospitalId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/hospitals/{hospitalId}",
        parameters: [
          {
            name: "hospitalId",
            field: "hospitalId",
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
   * DeleteHospitals
   * Required scope - `gambit:erp:hospitals`
   * DELETE /api/erp/v1/hospitals/{hospitalId}
   * Operation ID: DeleteHospital
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteHospitalResponse(
    args: { hospitalId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/hospitals/{hospitalId}",
        parameters: [
          {
            name: "hospitalId",
            field: "hospitalId",
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
   * UpdateHospital
   * Required scope - `gambit:erp:hospitals`
   * PUT /api/erp/v1/hospitals/{hospitalId}
   * Operation ID: UpdateHospital
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateHospitalResponse(
    args: { hospitalId: number; body?: Models.ERPHospitals },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/hospitals/{hospitalId}",
        parameters: [
          {
            name: "hospitalId",
            field: "hospitalId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
        ],
        bodyField: "body",
        bodyRequired: false,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * SearchHospitalLookup
   * Required scope - `gambit:static_data`
   * GET /api/v1/hospitals
   * Operation ID: SearchHospitalLookup
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function searchHospitalLookupResponse(
    args: { q?: string } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/v1/hospitals",
        parameters: [
          {
            name: "q",
            field: "q",
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
   * GetHospitalLookupById
   * Required scope - `gambit:static_data`
   * GET /api/v1/hospitals/{id}
   * Operation ID: GetHospitalLookupById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getHospitalLookupByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/v1/hospitals/{id}",
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
    getHospitalsResponse,
    /**
     * GetAllHospitals
     * Required scope - `gambit:erp:hospitals`
     * GET /api/erp/v1/hospitals
     * Operation ID: GetHospitals
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getHospitals(
      options?: RequestOptions,
    ): Promise<Array<Models.ERPHospitals>> {
      return transport.read<Array<Models.ERPHospitals>>(
        await getHospitalsResponse(options),
        { "200": { kind: "json" } },
      );
    },
    createHospitalResponse,
    /**
     * CreateHospital
     * Required scope - `gambit:erp:hospitals`
     * POST /api/erp/v1/hospitals
     * Operation ID: CreateHospital
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createHospital(
      args: { body?: Models.ERPHospitals } = {},
      options?: RequestOptions,
    ): Promise<number> {
      return transport.read<number>(
        await createHospitalResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getHospitalByIdResponse,
    /**
     * GetHospital
     * Required scope - `gambit:erp:hospitals`
     * GET /api/erp/v1/hospitals/{hospitalId}
     * Operation ID: GetHospitalById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getHospitalById(
      args: { hospitalId: number },
      options?: RequestOptions,
    ): Promise<Models.ERPHospitals> {
      return transport.read<Models.ERPHospitals>(
        await getHospitalByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    deleteHospitalResponse,
    /**
     * DeleteHospitals
     * Required scope - `gambit:erp:hospitals`
     * DELETE /api/erp/v1/hospitals/{hospitalId}
     * Operation ID: DeleteHospital
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteHospital(
      args: { hospitalId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteHospitalResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    updateHospitalResponse,
    /**
     * UpdateHospital
     * Required scope - `gambit:erp:hospitals`
     * PUT /api/erp/v1/hospitals/{hospitalId}
     * Operation ID: UpdateHospital
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateHospital(
      args: { hospitalId: number; body?: Models.ERPHospitals },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateHospitalResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    searchHospitalLookupResponse,
    /**
     * SearchHospitalLookup
     * Required scope - `gambit:static_data`
     * GET /api/v1/hospitals
     * Operation ID: SearchHospitalLookup
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async searchHospitalLookup(
      args: { q?: string } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.HospitalModel>> {
      return transport.read<Array<Models.HospitalModel>>(
        await searchHospitalLookupResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getHospitalLookupByIdResponse,
    /**
     * GetHospitalLookupById
     * Required scope - `gambit:static_data`
     * GET /api/v1/hospitals/{id}
     * Operation ID: GetHospitalLookupById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getHospitalLookupById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.HospitalModel> {
      return transport.read<Models.HospitalModel>(
        await getHospitalLookupByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
