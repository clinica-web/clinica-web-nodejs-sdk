// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainPrePrerecords(transport: Transport) {
  /**
   * GetPrePrerecords
   * Required scope - `gambit:public:prerecord:read`
   * GET /api/erp/v1/pre-prerecords
   * Operation ID: GetPrePrerecords
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPrePrerecordsResponse(
    args: { clinicId: Array<number>; from: string; to: string },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/pre-prerecords",
        parameters: [
          {
            name: "clinicId",
            field: "clinicId",
            in: "query",
            required: true,
            array: true,
            explode: true,
          },
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
        ],
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * CreatePrePrerecord
   * Required scope - `gambit:public:prerecord:write`
   * POST /api/erp/v1/pre-prerecords
   * Operation ID: CreatePrePrerecord
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createPrePrerecordResponse(
    args: { body: Models.PrePrerecordCreateModel },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/pre-prerecords",
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
   * GetPrePrerecordsCount
   * Required scope - `gambit:public:prerecord:read`
   * GET /api/erp/v1/pre-prerecords/count
   * Operation ID: GetPrePrerecordsCount
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPrePrerecordsCountResponse(
    args: { clinicId: Array<number>; from: string; to: string },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/pre-prerecords/count",
        parameters: [
          {
            name: "clinicId",
            field: "clinicId",
            in: "query",
            required: true,
            array: true,
            explode: true,
          },
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
        ],
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * GetPrePrerecordsByPatient
   * Required scope - `gambit:public:prerecord:read`
   * GET /api/erp/v1/pre-prerecords/patient/{patientId}
   * Operation ID: GetPrePrerecordsByPatient
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPrePrerecordsByPatientResponse(
    args: { patientId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/pre-prerecords/patient/{patientId}",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
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
   * SetPrePrerecordPrerecordId
   * Required scope - `gambit:public:prerecord:write`
   * PATCH /api/erp/v1/pre-prerecords/{id}
   * Operation ID: SetPrePrerecordPrerecordId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function setPrePrerecordPrerecordIdResponse(
    args: { id: number; body: Models.PrePrerecordPatch },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PATCH",
        path: "/api/erp/v1/pre-prerecords/{id}",
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
   * DeletePrePrerecord
   * Required scope - `gambit:public:prerecord:write`
   * DELETE /api/erp/v1/pre-prerecords/{id}
   * Operation ID: DeletePrePrerecord
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deletePrePrerecordResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/pre-prerecords/{id}",
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
    getPrePrerecordsResponse,
    /**
     * GetPrePrerecords
     * Required scope - `gambit:public:prerecord:read`
     * GET /api/erp/v1/pre-prerecords
     * Operation ID: GetPrePrerecords
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPrePrerecords(
      args: { clinicId: Array<number>; from: string; to: string },
      options?: RequestOptions,
    ): Promise<Array<Models.PrePrerecordDto>> {
      return transport.read<Array<Models.PrePrerecordDto>>(
        await getPrePrerecordsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createPrePrerecordResponse,
    /**
     * CreatePrePrerecord
     * Required scope - `gambit:public:prerecord:write`
     * POST /api/erp/v1/pre-prerecords
     * Operation ID: CreatePrePrerecord
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createPrePrerecord(
      args: { body: Models.PrePrerecordCreateModel },
      options?: RequestOptions,
    ): Promise<Models.BaseDto> {
      return transport.read<Models.BaseDto>(
        await createPrePrerecordResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPrePrerecordsCountResponse,
    /**
     * GetPrePrerecordsCount
     * Required scope - `gambit:public:prerecord:read`
     * GET /api/erp/v1/pre-prerecords/count
     * Operation ID: GetPrePrerecordsCount
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPrePrerecordsCount(
      args: { clinicId: Array<number>; from: string; to: string },
      options?: RequestOptions,
    ): Promise<number> {
      return transport.read<number>(
        await getPrePrerecordsCountResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPrePrerecordsByPatientResponse,
    /**
     * GetPrePrerecordsByPatient
     * Required scope - `gambit:public:prerecord:read`
     * GET /api/erp/v1/pre-prerecords/patient/{patientId}
     * Operation ID: GetPrePrerecordsByPatient
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPrePrerecordsByPatient(
      args: { patientId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.PrePrerecordDto>> {
      return transport.read<Array<Models.PrePrerecordDto>>(
        await getPrePrerecordsByPatientResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    setPrePrerecordPrerecordIdResponse,
    /**
     * SetPrePrerecordPrerecordId
     * Required scope - `gambit:public:prerecord:write`
     * PATCH /api/erp/v1/pre-prerecords/{id}
     * Operation ID: SetPrePrerecordPrerecordId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async setPrePrerecordPrerecordId(
      args: { id: number; body: Models.PrePrerecordPatch },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await setPrePrerecordPrerecordIdResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deletePrePrerecordResponse,
    /**
     * DeletePrePrerecord
     * Required scope - `gambit:public:prerecord:write`
     * DELETE /api/erp/v1/pre-prerecords/{id}
     * Operation ID: DeletePrePrerecord
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deletePrePrerecord(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deletePrePrerecordResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
