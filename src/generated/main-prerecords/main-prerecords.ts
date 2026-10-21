// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainPrerecords(transport: Transport) {
  /**
   * GetPrerecordDeleteReasons
   * Required scope - `gambit:static_data`
   * GET /api/erp/v1/prerecords/deleteReasons
   * Operation ID: GetPrerecordDeleteReasons
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPrerecordDeleteReasonsResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/prerecords/deleteReasons",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * GetPrerecordDeleteReason
   * Required scope - `gambit:static_data`
   * GET /api/erp/v1/prerecords/deleteReasons/{id}
   * Operation ID: GetPrerecordDeleteReason
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPrerecordDeleteReasonResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/prerecords/deleteReasons/{id}",
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
   * CreatePublicPrerecord
   * Required scope - `gambit:public:prerecord:write`
   * POST /api/public/v1/prerecords
   * Operation ID: CreatePublicPrerecord
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createPublicPrerecordResponse(
    args: { body: Models.CreatePublicPrerecordRequest },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/public/v1/prerecords",
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
   * CreatePublicPatientPrerecord
   * Required scope - `gambit:public:prerecord:write`
   * POST /api/public/v1/prerecords/patient
   * Operation ID: CreatePublicPatientPrerecord
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createPublicPatientPrerecordResponse(
    args: { body: Models.CreatePublicPatientPrerecordRequest },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/public/v1/prerecords/patient",
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
   * DeletePublicPrerecord
   * Required scope - `gambit:public:prerecord:delete`
   * DELETE /api/public/v1/prerecords/{id}
   * Operation ID: DeletePublicPrerecord
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deletePublicPrerecordResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/public/v1/prerecords/{id}",
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
   * GetPrerecordDetailsById
   * Required scope - `gambit:public:prerecord:read`
   * GET /api/public/v1/prerecords/{id}
   * Operation ID: GetPrerecordDetailsById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPrerecordDetailsByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/prerecords/{id}",
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
   * UpdatePrerecordNote
   * Required scope - `gambit:public:prerecord:write`
   * PATCH /api/public/v1/prerecords/{id}/note
   * Operation ID: UpdatePrerecordNote
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updatePrerecordNoteResponse(
    args: { id: number; body: Models.StringOneValueUpdateDto },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PATCH",
        path: "/api/public/v1/prerecords/{id}/note",
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
   * UpdatePrerecordPaymentStatus
   * Required scope - `gambit:public:prerecord:write`
   * PATCH /api/public/v1/prerecords/{id}/paymentStatus
   * Operation ID: UpdatePrerecordPaymentStatus
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updatePrerecordPaymentStatusResponse(
    args: {
      id: number;
      body: Models.PrerecordOnlinePaymentStatusNullableOneValueUpdateDto;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PATCH",
        path: "/api/public/v1/prerecords/{id}/paymentStatus",
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
   * GetPrerecordStatusHistory
   *
   * GET /api/public/v1/prerecords/{prerecordId}/statuses
   * Operation ID: GetPrerecordStatusHistory
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPrerecordStatusHistoryResponse(
    args: { prerecordId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/prerecords/{prerecordId}/statuses",
        parameters: [
          {
            name: "prerecordId",
            field: "prerecordId",
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
   * ChangePrerecordStatus
   * Required scope - `gambit:public:prerecord:write`
   * PATCH /api/public/v1/prerecords/{prerecordId}/status
   * Operation ID: ChangePrerecordStatus
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function changePrerecordStatusResponse(
    args: {
      prerecordId: number;
      body: Models.PrerecordStatusOneValueUpdateDto;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PATCH",
        path: "/api/public/v1/prerecords/{prerecordId}/status",
        parameters: [
          {
            name: "prerecordId",
            field: "prerecordId",
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
  return {
    getPrerecordDeleteReasonsResponse,
    /**
     * GetPrerecordDeleteReasons
     * Required scope - `gambit:static_data`
     * GET /api/erp/v1/prerecords/deleteReasons
     * Operation ID: GetPrerecordDeleteReasons
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPrerecordDeleteReasons(
      options?: RequestOptions,
    ): Promise<Array<Models.BaseDto>> {
      return transport.read<Array<Models.BaseDto>>(
        await getPrerecordDeleteReasonsResponse(options),
        { "200": { kind: "json" } },
      );
    },
    getPrerecordDeleteReasonResponse,
    /**
     * GetPrerecordDeleteReason
     * Required scope - `gambit:static_data`
     * GET /api/erp/v1/prerecords/deleteReasons/{id}
     * Operation ID: GetPrerecordDeleteReason
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPrerecordDeleteReason(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.BaseDto> {
      return transport.read<Models.BaseDto>(
        await getPrerecordDeleteReasonResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createPublicPrerecordResponse,
    /**
     * CreatePublicPrerecord
     * Required scope - `gambit:public:prerecord:write`
     * POST /api/public/v1/prerecords
     * Operation ID: CreatePublicPrerecord
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createPublicPrerecord(
      args: { body: Models.CreatePublicPrerecordRequest },
      options?: RequestOptions,
    ): Promise<Models.CreatePublicPrerecordResponse> {
      return transport.read<Models.CreatePublicPrerecordResponse>(
        await createPublicPrerecordResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createPublicPatientPrerecordResponse,
    /**
     * CreatePublicPatientPrerecord
     * Required scope - `gambit:public:prerecord:write`
     * POST /api/public/v1/prerecords/patient
     * Operation ID: CreatePublicPatientPrerecord
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createPublicPatientPrerecord(
      args: { body: Models.CreatePublicPatientPrerecordRequest },
      options?: RequestOptions,
    ): Promise<Models.CreatePublicPrerecordResponse> {
      return transport.read<Models.CreatePublicPrerecordResponse>(
        await createPublicPatientPrerecordResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    deletePublicPrerecordResponse,
    /**
     * DeletePublicPrerecord
     * Required scope - `gambit:public:prerecord:delete`
     * DELETE /api/public/v1/prerecords/{id}
     * Operation ID: DeletePublicPrerecord
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deletePublicPrerecord(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deletePublicPrerecordResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getPrerecordDetailsByIdResponse,
    /**
     * GetPrerecordDetailsById
     * Required scope - `gambit:public:prerecord:read`
     * GET /api/public/v1/prerecords/{id}
     * Operation ID: GetPrerecordDetailsById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPrerecordDetailsById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.OnlinePrerecord> {
      return transport.read<Models.OnlinePrerecord>(
        await getPrerecordDetailsByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updatePrerecordNoteResponse,
    /**
     * UpdatePrerecordNote
     * Required scope - `gambit:public:prerecord:write`
     * PATCH /api/public/v1/prerecords/{id}/note
     * Operation ID: UpdatePrerecordNote
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updatePrerecordNote(
      args: { id: number; body: Models.StringOneValueUpdateDto },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updatePrerecordNoteResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    updatePrerecordPaymentStatusResponse,
    /**
     * UpdatePrerecordPaymentStatus
     * Required scope - `gambit:public:prerecord:write`
     * PATCH /api/public/v1/prerecords/{id}/paymentStatus
     * Operation ID: UpdatePrerecordPaymentStatus
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updatePrerecordPaymentStatus(
      args: {
        id: number;
        body: Models.PrerecordOnlinePaymentStatusNullableOneValueUpdateDto;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updatePrerecordPaymentStatusResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getPrerecordStatusHistoryResponse,
    /**
     * GetPrerecordStatusHistory
     *
     * GET /api/public/v1/prerecords/{prerecordId}/statuses
     * Operation ID: GetPrerecordStatusHistory
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPrerecordStatusHistory(
      args: { prerecordId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPPrerecordStatusHistoryDto>> {
      return transport.read<Array<Models.ERPPrerecordStatusHistoryDto>>(
        await getPrerecordStatusHistoryResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    changePrerecordStatusResponse,
    /**
     * ChangePrerecordStatus
     * Required scope - `gambit:public:prerecord:write`
     * PATCH /api/public/v1/prerecords/{prerecordId}/status
     * Operation ID: ChangePrerecordStatus
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async changePrerecordStatus(
      args: {
        prerecordId: number;
        body: Models.PrerecordStatusOneValueUpdateDto;
      },
      options?: RequestOptions,
    ): Promise<Models.PrerecordStatus> {
      return transport.read<Models.PrerecordStatus>(
        await changePrerecordStatusResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
