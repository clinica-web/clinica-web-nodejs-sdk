// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createOnlineSchedulers(transport: Transport) {
  /**
   * Use /api/online/v1/schedulers instead.
   * Required scope - `gambit:online`
   * GET /api/online/v1/schedulers/{doctorId}/{clinicId}
   * Operation ID: GetDoctorClinicScheduler
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getDoctorClinicSchedulerResponse(
    args: { from: string; to: string; doctorId: number; clinicId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/schedulers/{doctorId}/{clinicId}",
        parameters: [
          {
            name: "from",
            field: "from",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "to",
            field: "to",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "doctorId",
            field: "doctorId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "clinicId",
            field: "clinicId",
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
   * Get schedulers for specified period
   * Required scope - `gambit:online`
   *
   * Doctors can be present more than one time per day in the list,
   * because of different clinics, rooms, or time intervals.
   * GET /api/online/v1/schedulers
   * Operation ID: SearchSchedulers
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function searchSchedulersResponse(
    args: {
      from: string;
      to: string;
      /**
       * Doctor identifier
       */ doctorId?: number;
      /**
       * Clinic identifier
       */ clinicId?: number;
      /**
       * Clinic external identifier
       */ externalClinicId?: string;
      /**
       * additional filter by doctor name
       */ searchExpr?: string;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/schedulers",
        parameters: [
          {
            name: "from",
            field: "from",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "to",
            field: "to",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "doctorId",
            field: "doctorId",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "clinicId",
            field: "clinicId",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "externalClinicId",
            field: "externalClinicId",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "searchExpr",
            field: "searchExpr",
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
    getDoctorClinicSchedulerResponse,
    /**
     * Use /api/online/v1/schedulers instead.
     * Required scope - `gambit:online`
     * GET /api/online/v1/schedulers/{doctorId}/{clinicId}
     * Operation ID: GetDoctorClinicScheduler
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getDoctorClinicScheduler(
      args: { from: string; to: string; doctorId: number; clinicId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.OldOnlineSchedulerIntervals>> {
      return transport.read<Array<Models.OldOnlineSchedulerIntervals>>(
        await getDoctorClinicSchedulerResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    searchSchedulersResponse,
    /**
     * Get schedulers for specified period
     * Required scope - `gambit:online`
     *
     * Doctors can be present more than one time per day in the list,
     * because of different clinics, rooms, or time intervals.
     * GET /api/online/v1/schedulers
     * Operation ID: SearchSchedulers
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async searchSchedulers(
      args: {
        from: string;
        to: string;
        /**
         * Doctor identifier
         */ doctorId?: number;
        /**
         * Clinic identifier
         */ clinicId?: number;
        /**
         * Clinic external identifier
         */ externalClinicId?: string;
        /**
         * additional filter by doctor name
         */ searchExpr?: string;
      },
      options?: RequestOptions,
    ): Promise<Array<Models.OnlineSchedulerIntervals>> {
      return transport.read<Array<Models.OnlineSchedulerIntervals>>(
        await searchSchedulersResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
