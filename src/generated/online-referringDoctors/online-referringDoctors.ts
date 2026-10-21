// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createOnlineReferringDoctors(transport: Transport) {
  /**
   * GetReferringDoctorsByHospital
   * Required scope - `gambit:static_data`
   * GET /api/online/v1/referringDoctors
   * Operation ID: GetReferringDoctorsByHospitalId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getReferringDoctorsByHospitalIdResponse(
    args: { hospitalId?: number } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/referringDoctors",
        parameters: [
          {
            name: "hospitalId",
            field: "hospitalId",
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
   * GetReferringDoctorById
   * Required scope - `gambit:static_data`
   * GET /api/online/v1/referringDoctors/{id}
   * Operation ID: GetReferringDoctorDetailsById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getReferringDoctorDetailsByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/referringDoctors/{id}",
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
    getReferringDoctorsByHospitalIdResponse,
    /**
     * GetReferringDoctorsByHospital
     * Required scope - `gambit:static_data`
     * GET /api/online/v1/referringDoctors
     * Operation ID: GetReferringDoctorsByHospitalId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getReferringDoctorsByHospitalId(
      args: { hospitalId?: number } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.ReferringDoctorDto>> {
      return transport.read<Array<Models.ReferringDoctorDto>>(
        await getReferringDoctorsByHospitalIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getReferringDoctorDetailsByIdResponse,
    /**
     * GetReferringDoctorById
     * Required scope - `gambit:static_data`
     * GET /api/online/v1/referringDoctors/{id}
     * Operation ID: GetReferringDoctorDetailsById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getReferringDoctorDetailsById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ReferringDoctorDto> {
      return transport.read<Models.ReferringDoctorDto>(
        await getReferringDoctorDetailsByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
