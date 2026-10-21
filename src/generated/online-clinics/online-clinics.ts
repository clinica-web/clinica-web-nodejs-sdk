// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createOnlineClinics(transport: Transport) {
  /**
   * List of clinics\branches available configured for online recording\booking
   * Required scope - `gambit:static_data`
   * GET /api/online/v1/clinics
   * Operation ID: GetBookingClinics
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getBookingClinicsResponse(
    args: {
      /**
       * default is `true`, when true - returns clinics allowed for online recording\booking
       */ onlineOnly?: boolean;
    } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/clinics",
        parameters: [
          {
            name: "onlineOnly",
            field: "onlineOnly",
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
   * Returns doctor`s clinics for online recording\booking
   * Required scope - `gambit:static_data`
   * GET /api/online/v1/clinics/{doctorId}
   * Operation ID: GetBookingClinicsByDoctorId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getBookingClinicsByDoctorIdResponse(
    args: {
      /**
       * doctor identifier
       */ doctorId: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/clinics/{doctorId}",
        parameters: [
          {
            name: "doctorId",
            field: "doctorId",
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
    getBookingClinicsResponse,
    /**
     * List of clinics\branches available configured for online recording\booking
     * Required scope - `gambit:static_data`
     * GET /api/online/v1/clinics
     * Operation ID: GetBookingClinics
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getBookingClinics(
      args: {
        /**
         * default is `true`, when true - returns clinics allowed for online recording\booking
         */ onlineOnly?: boolean;
      } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.ClinicOnlineDto>> {
      return transport.read<Array<Models.ClinicOnlineDto>>(
        await getBookingClinicsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getBookingClinicsByDoctorIdResponse,
    /**
     * Returns doctor`s clinics for online recording\booking
     * Required scope - `gambit:static_data`
     * GET /api/online/v1/clinics/{doctorId}
     * Operation ID: GetBookingClinicsByDoctorId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getBookingClinicsByDoctorId(
      args: {
        /**
         * doctor identifier
         */ doctorId: number;
      },
      options?: RequestOptions,
    ): Promise<Array<Models.ClinicOnlineDto>> {
      return transport.read<Array<Models.ClinicOnlineDto>>(
        await getBookingClinicsByDoctorIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
