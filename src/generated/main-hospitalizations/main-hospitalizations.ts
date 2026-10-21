// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainHospitalizations(transport: Transport) {
  /**
   * CreateHospitalization
   * Required scope - `gambit:erp`
   * POST /api/erp/v1/hospitalizations
   * Operation ID: CreateHospitalization
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createHospitalizationResponse(
    args: { body: Models.EditableERPHospitalization },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/hospitalizations",
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
   * UpdateHospitalization
   * Required scope - `gambit:erp`
   * PUT /api/erp/v1/hospitalizations/{id}
   * Operation ID: UpdateHospitalization
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateHospitalizationResponse(
    args: { id: number; body: Models.EditableERPHospitalization },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/hospitalizations/{id}",
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
   * DeleteHospitalization
   * Required scope - `gambit:erp`
   * DELETE /api/erp/v1/hospitalizations/{id}
   * Operation ID: DeleteHospitalization
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteHospitalizationResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/hospitalizations/{id}",
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
    createHospitalizationResponse,
    /**
     * CreateHospitalization
     * Required scope - `gambit:erp`
     * POST /api/erp/v1/hospitalizations
     * Operation ID: CreateHospitalization
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createHospitalization(
      args: { body: Models.EditableERPHospitalization },
      options?: RequestOptions,
    ): Promise<Models.HospitalizationAppointment> {
      return transport.read<Models.HospitalizationAppointment>(
        await createHospitalizationResponse(args, options),
        { "201": { kind: "json" } },
      );
    },
    updateHospitalizationResponse,
    /**
     * UpdateHospitalization
     * Required scope - `gambit:erp`
     * PUT /api/erp/v1/hospitalizations/{id}
     * Operation ID: UpdateHospitalization
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateHospitalization(
      args: { id: number; body: Models.EditableERPHospitalization },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateHospitalizationResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deleteHospitalizationResponse,
    /**
     * DeleteHospitalization
     * Required scope - `gambit:erp`
     * DELETE /api/erp/v1/hospitalizations/{id}
     * Operation ID: DeleteHospitalization
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteHospitalization(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteHospitalizationResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
