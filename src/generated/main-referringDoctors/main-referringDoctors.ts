// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainReferringDoctors(transport: Transport) {
  /**
   * GetReferringDoctors
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/referring-doctors/lookup
   * Operation ID: GetReferringDoctors
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getReferringDoctorsResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/referring-doctors/lookup",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * GetReferringDoctor
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/referring-doctors/{id}
   * Operation ID: GetReferringDoctor
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getReferringDoctorResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/referring-doctors/{id}",
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
   * GetReferringDoctorUserLookup
   *
   * GET /api/ReferringDoctors/selfUsers
   * Operation ID: GetReferringDoctorUserLookup
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getReferringDoctorUserLookupResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/ReferringDoctors/selfUsers",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * MergeReferringDoctors
   *
   * POST /api/ReferringDoctors/Merge
   * Operation ID: MergeReferringDoctors
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function mergeReferringDoctorsResponse(
    args: { body: Models.ReferringDoctorsIds },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/ReferringDoctors/Merge",
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
   * ResetReferringDoctorPassword
   *
   * POST /api/ReferringDoctors/{id}/reset-password
   * Operation ID: ResetReferringDoctorPassword
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function resetReferringDoctorPasswordResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/ReferringDoctors/{id}/reset-password",
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
    getReferringDoctorsResponse,
    /**
     * GetReferringDoctors
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/referring-doctors/lookup
     * Operation ID: GetReferringDoctors
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getReferringDoctors(
      options?: RequestOptions,
    ): Promise<Array<Models.ReferringDoctorsLookupModel>> {
      return transport.read<Array<Models.ReferringDoctorsLookupModel>>(
        await getReferringDoctorsResponse(options),
        { "200": { kind: "json" } },
      );
    },
    getReferringDoctorResponse,
    /**
     * GetReferringDoctor
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/referring-doctors/{id}
     * Operation ID: GetReferringDoctor
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getReferringDoctor(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ReferringDoctor> {
      return transport.read<Models.ReferringDoctor>(
        await getReferringDoctorResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getReferringDoctorUserLookupResponse,
    /**
     * GetReferringDoctorUserLookup
     *
     * GET /api/ReferringDoctors/selfUsers
     * Operation ID: GetReferringDoctorUserLookup
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getReferringDoctorUserLookup(
      options?: RequestOptions,
    ): Promise<Array<Models.BaseDto>> {
      return transport.read<Array<Models.BaseDto>>(
        await getReferringDoctorUserLookupResponse(options),
        { "200": { kind: "json" } },
      );
    },
    mergeReferringDoctorsResponse,
    /**
     * MergeReferringDoctors
     *
     * POST /api/ReferringDoctors/Merge
     * Operation ID: MergeReferringDoctors
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async mergeReferringDoctors(
      args: { body: Models.ReferringDoctorsIds },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await mergeReferringDoctorsResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    resetReferringDoctorPasswordResponse,
    /**
     * ResetReferringDoctorPassword
     *
     * POST /api/ReferringDoctors/{id}/reset-password
     * Operation ID: ResetReferringDoctorPassword
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async resetReferringDoctorPassword(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await resetReferringDoctorPasswordResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
