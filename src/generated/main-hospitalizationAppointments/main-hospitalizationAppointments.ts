// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainHospitalizationAppointments(transport: Transport) {
  /**
   * GetHospitalizationAppointments
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/hospitalizationAppointments
   * Operation ID: GetHospitalizationAppointments
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getHospitalizationAppointmentsResponse(
    args: { from: string; to: string; clinics: Array<number> },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/hospitalizationAppointments",
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
            name: "clinics",
            field: "clinics",
            in: "query",
            required: true,
            array: true,
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
   * GetHospitalizationAppointmentById
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/hospitalizationAppointments/{id}
   * Operation ID: GetHospitalizationAppointmentById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getHospitalizationAppointmentByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/hospitalizationAppointments/{id}",
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
    getHospitalizationAppointmentsResponse,
    /**
     * GetHospitalizationAppointments
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/hospitalizationAppointments
     * Operation ID: GetHospitalizationAppointments
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getHospitalizationAppointments(
      args: { from: string; to: string; clinics: Array<number> },
      options?: RequestOptions,
    ): Promise<Array<Models.HospitalizationAppointment>> {
      return transport.read<Array<Models.HospitalizationAppointment>>(
        await getHospitalizationAppointmentsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getHospitalizationAppointmentByIdResponse,
    /**
     * GetHospitalizationAppointmentById
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/hospitalizationAppointments/{id}
     * Operation ID: GetHospitalizationAppointmentById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getHospitalizationAppointmentById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.HospitalizationAppointment> {
      return transport.read<Models.HospitalizationAppointment>(
        await getHospitalizationAppointmentByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
