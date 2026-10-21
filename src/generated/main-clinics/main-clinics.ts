// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainClinics(transport: Transport) {
  /**
   * CreateClinic
   * Required scope - `gambit:erp:clinics`
   * POST /api/erp/v1/clinics
   * Operation ID: CreateClinic
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createClinicResponse(
    args: { body: Models.ERPClinicEditModel },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/clinics",
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
   * GetClinics
   * Required scope - `gambit:erp:clinics`
   * GET /api/erp/v1/clinics
   * Operation ID: GetClinics
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function listResponse(options?: RequestOptions): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/clinics",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * UpdateClinicById
   * Required scope - `gambit:erp:clinics`
   * PUT /api/erp/v1/clinics/{id}
   * Operation ID: UpdateClinicById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateResponse(
    args: { clinicId: number; clinic: Models.ERPClinicEditModel },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/clinics/{id}",
        parameters: [
          {
            name: "id",
            field: "clinicId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
        ],
        bodyField: "clinic",
        bodyRequired: true,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * RemoveClinicById
   * Required scope - `gambit:erp:clinics`
   * DELETE /api/erp/v1/clinics/{id}
   * Operation ID: RemoveClinicById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function removeClinicByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/clinics/{id}",
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
   * GetClinicById
   * Required scope - `gambit:erp:clinics`
   * GET /api/erp/v1/clinics/{id}
   * Operation ID: GetClinicById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getClinicByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/clinics/{id}",
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
   * UpdateClinicByExternalId
   * Required scope - `gambit:erp:clinics`
   * PUT /api/erp/v1/clinics/{externalId}
   * Operation ID: UpdateClinicByExternalId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateClinicByExternalIdResponse(
    args: { externalId: string; body: Models.ERPClinicEditModel },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/clinics/{externalId}",
        parameters: [
          {
            name: "externalId",
            field: "externalId",
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
   * RemoveClinicByExternalId
   * Required scope - `gambit:erp:clinics`
   * DELETE /api/erp/v1/clinics/{externalId}
   * Operation ID: RemoveClinicByExternalId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function removeClinicByExternalIdResponse(
    args: { externalId: string },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/clinics/{externalId}",
        parameters: [
          {
            name: "externalId",
            field: "externalId",
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
   * GetClinicByExternalId
   * Required scope - `gambit:erp:clinics`
   * GET /api/erp/v1/clinics/{externalId}
   * Operation ID: GetClinicByExternalId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getClinicByExternalIdResponse(
    args: { externalId: string },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/clinics/{externalId}",
        parameters: [
          {
            name: "externalId",
            field: "externalId",
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
   * GetClinicPrices
   * Required scope - `gambit:erp:clinics`
   * GET /api/erp/v1/clinics/{id}/price-clinics
   * Operation ID: GetClinicPrices
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getClinicPricesResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/clinics/{id}/price-clinics",
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
    createClinicResponse,
    /**
     * CreateClinic
     * Required scope - `gambit:erp:clinics`
     * POST /api/erp/v1/clinics
     * Operation ID: CreateClinic
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createClinic(
      args: { body: Models.ERPClinicEditModel },
      options?: RequestOptions,
    ): Promise<Models.ClinicDto> {
      return transport.read<Models.ClinicDto>(
        await createClinicResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    listResponse,
    /**
     * GetClinics
     * Required scope - `gambit:erp:clinics`
     * GET /api/erp/v1/clinics
     * Operation ID: GetClinics
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async list(options?: RequestOptions): Promise<Array<Models.ERPClinic>> {
      return transport.read<Array<Models.ERPClinic>>(
        await listResponse(options),
        { "200": { kind: "json" } },
      );
    },
    updateResponse,
    /**
     * UpdateClinicById
     * Required scope - `gambit:erp:clinics`
     * PUT /api/erp/v1/clinics/{id}
     * Operation ID: UpdateClinicById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async update(
      args: { clinicId: number; clinic: Models.ERPClinicEditModel },
      options?: RequestOptions,
    ): Promise<void> {
      return transport.read<void>(await updateResponse(args, options), {
        "200": { kind: "empty" },
      });
    },
    removeClinicByIdResponse,
    /**
     * RemoveClinicById
     * Required scope - `gambit:erp:clinics`
     * DELETE /api/erp/v1/clinics/{id}
     * Operation ID: RemoveClinicById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async removeClinicById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await removeClinicByIdResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getClinicByIdResponse,
    /**
     * GetClinicById
     * Required scope - `gambit:erp:clinics`
     * GET /api/erp/v1/clinics/{id}
     * Operation ID: GetClinicById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getClinicById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPClinic> {
      return transport.read<Models.ERPClinic>(
        await getClinicByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateClinicByExternalIdResponse,
    /**
     * UpdateClinicByExternalId
     * Required scope - `gambit:erp:clinics`
     * PUT /api/erp/v1/clinics/{externalId}
     * Operation ID: UpdateClinicByExternalId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateClinicByExternalId(
      args: { externalId: string; body: Models.ERPClinicEditModel },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateClinicByExternalIdResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    removeClinicByExternalIdResponse,
    /**
     * RemoveClinicByExternalId
     * Required scope - `gambit:erp:clinics`
     * DELETE /api/erp/v1/clinics/{externalId}
     * Operation ID: RemoveClinicByExternalId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async removeClinicByExternalId(
      args: { externalId: string },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await removeClinicByExternalIdResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getClinicByExternalIdResponse,
    /**
     * GetClinicByExternalId
     * Required scope - `gambit:erp:clinics`
     * GET /api/erp/v1/clinics/{externalId}
     * Operation ID: GetClinicByExternalId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getClinicByExternalId(
      args: { externalId: string },
      options?: RequestOptions,
    ): Promise<Models.ERPClinic> {
      return transport.read<Models.ERPClinic>(
        await getClinicByExternalIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getClinicPricesResponse,
    /**
     * GetClinicPrices
     * Required scope - `gambit:erp:clinics`
     * GET /api/erp/v1/clinics/{id}/price-clinics
     * Operation ID: GetClinicPrices
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getClinicPrices(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPPriceClinic>> {
      return transport.read<Array<Models.ERPPriceClinic>>(
        await getClinicPricesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
