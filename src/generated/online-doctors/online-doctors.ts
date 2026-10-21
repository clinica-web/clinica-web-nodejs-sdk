// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createOnlineDoctors(transport: Transport) {
  /**
   * Doctors available for online recording\booking
   * Required scope - `gambit:online`
   * GET /api/online/v2/doctors
   * Operation ID: GetOnlineDoctors
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getOnlineDoctorsResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v2/doctors",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * returns information about doctor in context of online recording\booking
   * Required scope - `gambit:online`
   * GET /api/online/v2/doctors/{id}
   * Operation ID: GetOnlineDoctor
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getOnlineDoctorResponse(
    args: {
      /**
       * doctor`s identifier
       */ id: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v2/doctors/{id}",
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
    getOnlineDoctorsResponse,
    /**
     * Doctors available for online recording\booking
     * Required scope - `gambit:online`
     * GET /api/online/v2/doctors
     * Operation ID: GetOnlineDoctors
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getOnlineDoctors(
      options?: RequestOptions,
    ): Promise<Array<Models.OnlineUserDto>> {
      return transport.read<Array<Models.OnlineUserDto>>(
        await getOnlineDoctorsResponse(options),
        { "200": { kind: "json" } },
      );
    },
    getOnlineDoctorResponse,
    /**
     * returns information about doctor in context of online recording\booking
     * Required scope - `gambit:online`
     * GET /api/online/v2/doctors/{id}
     * Operation ID: GetOnlineDoctor
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getOnlineDoctor(
      args: {
        /**
         * doctor`s identifier
         */ id: number;
      },
      options?: RequestOptions,
    ): Promise<Models.OnlineDoctorFull> {
      return transport.read<Models.OnlineDoctorFull>(
        await getOnlineDoctorResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
