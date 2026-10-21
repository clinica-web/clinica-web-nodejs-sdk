// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createOnlinePatients(transport: Transport) {
  /**
   * Api used to connect patient to telegram bot,
   * api returns link to configured telegram bot with one time token associated with patient
   * Required scope - `gambit:patient:profile`
   *
   * this api requires JWT token issued for patient using `grant_type=patient`
   * PATCH /api/online/v1/patient/identity/connect/telegram
   * Operation ID: GenerateCurrentPatientTelegramLink
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function generateCurrentPatientTelegramLinkResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PATCH",
        path: "/api/online/v1/patient/identity/connect/telegram",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * Returns true if patient is connected to telegram bot
   * Required scope - `gambit:patient:profile`
   *
   * this api requires JWT token issued for patient using `grant_type=patient`
   * GET /api/online/v1/patient/identity/connect/telegram
   * Operation ID: IsCurrentPatientTelegramConnected
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function isCurrentPatientTelegramConnectedResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/patient/identity/connect/telegram",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * Get information patient by token
   * Required scope - `gambit:patient:profile`
   *
   * this api requires JWT token issued for patient using `grant_type=patient`
   * GET /api/online/v1/patient/identity/me
   * Operation ID: GetCurrentPatient
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getCurrentPatientResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/patient/identity/me",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * Returns patient discount information
   * Required scope - `gambit:patient:profile`
   *
   * this api requires JWT token issued for patient using `grant_type=patient`
   * GET /api/online/v1/patient/identity/me/discount
   * Operation ID: GetCurrentPatientDiscount
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getCurrentPatientDiscountResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/patient/identity/me/discount",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * Api used to initialize OTP login for patient
   * Required scope - `gambit:online`
   *
   * this api sends one time password for patient that found by phone number or additional parameters if patient can not be deduplicated by phone
   * POST /api/online/v2/patient/identity/initialize-otp-login
   * Operation ID: InitializePatientOtpLogin
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function initializePatientOtpLoginResponse(
    args: { body: Models.InitializeOTPLogin },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/online/v2/patient/identity/initialize-otp-login",
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
   * Get patient history
   * Required scope - `gambit:patient:profile`
   *
   * this api requires JWT token issued for patient using `grant_type=patient`
   * GET /api/online/v1/patient/history
   * Operation ID: GetCurrentPatientHistory
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getCurrentPatientHistoryResponse(
    args: {
      /**
       * Patient family member
       */ patientId?: number;
    } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/patient/history",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
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
   * Get analysis files by analysis id
   * Required scope - `gambit:patient:profile`
   *
   * this api requires JWT token issued for patient using `grant_type=patient`
   * GET /api/online/v1/patient/history/analysisFiles/{analysisId}
   * Operation ID: GetCurrentPatientAnalysisFiles
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getCurrentPatientAnalysisFilesResponse(
    args: {
      /**
       * analysis id identifier
       */ analysisId: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/patient/history/analysisFiles/{analysisId}",
        parameters: [
          {
            name: "analysisId",
            field: "analysisId",
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
   * Get patient history
   * Required scope - `gambit:public:patient:read`
   * GET /api/online/v1/patient/{externalPatientId}/history
   * Operation ID: GetPatientHistoryByExternalId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPatientHistoryByExternalIdResponse(
    args: {
      /**
       * external patient identifier
       */ externalPatientId: string;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/patient/{externalPatientId}/history",
        parameters: [
          {
            name: "externalPatientId",
            field: "externalPatientId",
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
   * get analysis printout form by analysis id
   * Required scope - `gambit:patient:profile`
   *
   * this api requires JWT token issued for patient using `grant_type=patient`
   * GET /api/online/v1/patient/history/print/analysis/{analysisId}
   * Operation ID: PrintCurrentPatientAnalysis
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function printCurrentPatientAnalysisResponse(
    args: {
      /**
       * analysis id identifier
       */ analysisId: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/patient/history/print/analysis/{analysisId}",
        parameters: [
          {
            name: "analysisId",
            field: "analysisId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
        ],
        accept: "application/pdf",
      },
      args,
      options,
    );
  }
  /**
   * get analyses printout form by analysis ids
   * Required scope - `gambit:patient:profile`
   *
   * this api requires JWT token issued for patient using `grant_type=patient`
   * GET /api/online/v1/patient/history/print/analyses
   * Operation ID: PrintCurrentPatientAnalyses
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function printCurrentPatientAnalysesResponse(
    args: {
      /**
       * analysis ids identifier
       */ analysisIds: Array<number>;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/patient/history/print/analyses",
        parameters: [
          {
            name: "analysisIds",
            field: "analysisIds",
            in: "query",
            required: true,
            array: true,
            explode: true,
          },
        ],
        accept: "application/pdf",
      },
      args,
      options,
    );
  }
  /**
   * Get protocol printout form by protocol id
   * Required scope - `gambit:patient:profile`
   *
   * this api requires JWT token issued for patient using `grant_type=patient`
   * GET /api/online/v1/patient/history/print/protocol/{protocolId}
   * Operation ID: PrintCurrentPatientProtocol
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function printCurrentPatientProtocolResponse(
    args: {
      /**
       * protocol identifier
       */ protocolId: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/patient/history/print/protocol/{protocolId}",
        parameters: [
          {
            name: "protocolId",
            field: "protocolId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
        ],
        accept: "application/pdf",
      },
      args,
      options,
    );
  }
  /**
   * Returns a list of future (active) prerecords for the patient
   * Required scope - `gambit:patient:profile`
   *
   * this api requires JWT token issued for patient using `grant_type=patient`
   * GET /api/online/v1/patient/prerecords
   * Operation ID: GetCurrentPatientPlannedPrerecords
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getCurrentPatientPlannedPrerecordsResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/patient/prerecords",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * Create prrecord appointment
   * Required scope - `gambit:patient:profile`
   *
   * this api requires JWT token issued for patient using `grant_type=patient`
   * POST /api/online/v1/patient/prerecords
   * Operation ID: CreateCurrentPatientPrerecord
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createCurrentPatientPrerecordResponse(
    args: {
      /**
       * Prerecord data
       */ body: Models.CreateOnlinePrerecordModel;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/online/v1/patient/prerecords",
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
   * Returns count of future (active) prerecords for the patient
   * Required scope - `gambit:patient:profile`
   *
   * this api requires JWT token issued for patient using `grant_type=patient`
   * GET /api/online/v1/patient/prerecords/countPlanned
   * Operation ID: GetCurrentPatientPlannedPrerecordCount
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getCurrentPatientPlannedPrerecordCountResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/patient/prerecords/countPlanned",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * Returns count of future (active) prerecords for the patient
   * Required scope - `gambit:public:prerecord:read`
   * GET /api/online/v1/patient/{externalPatientId}/prerecords/countPlanned
   * Operation ID: GetPlannedPrerecordCountByExternalPatientId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPlannedPrerecordCountByExternalPatientIdResponse(
    args: {
      /**
       * external patient identifier
       */ externalPatientId: string;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/patient/{externalPatientId}/prerecords/countPlanned",
        parameters: [
          {
            name: "externalPatientId",
            field: "externalPatientId",
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
   * Returns a list of future (active) prerecords for the patient (by patientId - family members only)
   * Required scope - `gambit:patient:profile`
   *
   * this api requires JWT token issued for patient using `grant_type=patient`
   * GET /api/online/v1/patient/prerecords/{patientId}
   * Operation ID: GetFamilyPatientPlannedPrerecords
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getFamilyPatientPlannedPrerecordsResponse(
    args: { patientId: number; includeInactive?: boolean },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/patient/prerecords/{patientId}",
        parameters: [
          {
            name: "patientId",
            field: "patientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "includeInactive",
            field: "includeInactive",
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
   * Returns prerecord by id
   * Required scope - `gambit:patient:profile`
   *
   * this api requires JWT token issued for patient using `grant_type=patient`
   * GET /api/online/v1/patient/prerecords/by/id/{id}
   * Operation ID: GetCurrentPatientPrerecordById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getCurrentPatientPrerecordByIdResponse(
    args: {
      /**
       * Prerecord identifier
       */ id: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/patient/prerecords/by/id/{id}",
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
   * Cancel prerecord appointment by id
   * Required scope - `gambit:public:prerecord:write`
   *
   * Token issued for patient can cancel only own prerecords
   * DELETE /api/online/v1/patient/prerecords/{prerecordId}
   * Operation ID: CancelPrerecord
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function cancelPrerecordResponse(
    args: {
      /**
       * identifier of prerecord to cancel
       */ prerecordId: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/online/v1/patient/prerecords/{prerecordId}",
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
   * Create prerecord appointment for external patient id
   * Required scope - `gambit:public:prerecord:write`
   * POST /api/online/v1/patient/{externalPatientId}/prerecords
   * Operation ID: CreatePrerecordByExternalPatientId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createPrerecordByExternalPatientIdResponse(
    args: {
      /**
       * external patient identifier
       */ externalPatientId: string;
      /**
       * Prerecord data
       */ body: Models.CreateOnlinePrerecordModel;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/online/v1/patient/{externalPatientId}/prerecords",
        parameters: [
          {
            name: "externalPatientId",
            field: "externalPatientId",
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
   * Returns a list of prerecords for the patient
   * Required scope - `gambit:public:prerecord:read`
   * GET /api/online/v1/patient/{externalPatientId}/prerecords
   * Operation ID: GetPrerecordsByExternalPatientId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPrerecordsByExternalPatientIdResponse(
    args: {
      /**
       * external patient identifier
       */ externalPatientId: string;
      /**
       * default is `false`, when true - returns past and future prerecords
       */ includeInactive?: boolean;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/patient/{externalPatientId}/prerecords",
        parameters: [
          {
            name: "externalPatientId",
            field: "externalPatientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "includeInactive",
            field: "includeInactive",
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
   * Returns prerecord by id
   * Required scope - `gambit:public:prerecord:read`
   * GET /api/online/v1/patient/{externalPatientId}/prerecords/{id}
   * Operation ID: GetPrerecordByIdAndExternalPatientId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPrerecordByIdAndExternalPatientIdResponse(
    args: {
      /**
       * external patient identifier
       */ externalPatientId: string;
      /**
       * Prerecord identifier
       */ id: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/patient/{externalPatientId}/prerecords/{id}",
        parameters: [
          {
            name: "externalPatientId",
            field: "externalPatientId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
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
   * GetProtocolInformation
   * Required scope - `gambit:patient:profile`
   * GET /api/online/v1/patient/protocols/{id}/information
   * Operation ID: GetCurrentPatientProtocolInformation
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getCurrentPatientProtocolInformationResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/patient/protocols/{id}/information",
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
   * GetAnalysisInformation
   * Required scope - `gambit:patient:profile`
   * GET /api/online/v1/patient/analysis/{id}/information
   * Operation ID: GetCurrentPatientAnalysisInformation
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getCurrentPatientAnalysisInformationResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/patient/analysis/{id}/information",
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
   * ChangePassword
   * Required scope - `gambit:patient:profile`
   * POST /api/online/v1/patient/identity/changePassword
   * Operation ID: ChangeCurrentPatientPassword
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function changeCurrentPatientPasswordResponse(
    args: { body?: Models.ChangePatientPasswordModel } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/online/v1/patient/identity/changePassword",
        parameters: [],
        bodyField: "body",
        bodyRequired: false,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * ChangePhone
   * Required scope - `gambit:patient:profile`
   * POST /api/online/v1/patient/identity/changePhone
   * Operation ID: ChangeCurrentPatientPhone
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function changeCurrentPatientPhoneResponse(
    args: { body?: Models.ChangePatientPhoneModel } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/online/v1/patient/identity/changePhone",
        parameters: [],
        bodyField: "body",
        bodyRequired: false,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * UpdateInformation
   * Required scope - `gambit:patient:profile`
   * POST /api/online/v1/patient/identity/update
   * Operation ID: UpdateCurrentPatientProfile
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateCurrentPatientProfileResponse(
    args: { body?: Models.UpdatePatientInformationModel } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/online/v1/patient/identity/update",
        parameters: [],
        bodyField: "body",
        bodyRequired: false,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * InitializeRegistration
   * Required scope - `gambit:online`
   * POST /api/online/v1/patients/register/initialize
   * Operation ID: InitializePatientRegistration
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function initializePatientRegistrationResponse(
    args: { body?: Models.InitializeRegisterModel } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/online/v1/patients/register/initialize",
        parameters: [],
        bodyField: "body",
        bodyRequired: false,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * Register
   * Required scope - `gambit:online`
   * POST /api/online/v1/patients/register
   * Operation ID: RegisterPatient
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function registerPatientResponse(
    args: { body?: Models.RegisterModel } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/online/v1/patients/register",
        parameters: [],
        bodyField: "body",
        bodyRequired: false,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * ResetPassword
   * Required scope - `gambit:online`
   * POST /api/online/v1/patients/password/reset
   * Operation ID: RequestPatientPasswordReset
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function requestPatientPasswordResetResponse(
    args: { body?: Models.ResetPatientPasswordModel } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/online/v1/patients/password/reset",
        parameters: [],
        bodyField: "body",
        bodyRequired: false,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * ConfirmResetPassword
   * Required scope - `gambit:online`
   * POST /api/online/v1/patients/password/confirm
   * Operation ID: ConfirmPatientPasswordReset
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function confirmPatientPasswordResetResponse(
    args: { body?: Models.ConfirmResetPasswordModel } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/online/v1/patients/password/confirm",
        parameters: [],
        bodyField: "body",
        bodyRequired: false,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  return {
    generateCurrentPatientTelegramLinkResponse,
    /**
     * Api used to connect patient to telegram bot,
     * api returns link to configured telegram bot with one time token associated with patient
     * Required scope - `gambit:patient:profile`
     *
     * this api requires JWT token issued for patient using `grant_type=patient`
     * PATCH /api/online/v1/patient/identity/connect/telegram
     * Operation ID: GenerateCurrentPatientTelegramLink
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async generateCurrentPatientTelegramLink(
      options?: RequestOptions,
    ): Promise<string> {
      return transport.read<string>(
        await generateCurrentPatientTelegramLinkResponse(options),
        { "200": { kind: "json" } },
      );
    },
    isCurrentPatientTelegramConnectedResponse,
    /**
     * Returns true if patient is connected to telegram bot
     * Required scope - `gambit:patient:profile`
     *
     * this api requires JWT token issued for patient using `grant_type=patient`
     * GET /api/online/v1/patient/identity/connect/telegram
     * Operation ID: IsCurrentPatientTelegramConnected
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async isCurrentPatientTelegramConnected(
      options?: RequestOptions,
    ): Promise<boolean> {
      return transport.read<boolean>(
        await isCurrentPatientTelegramConnectedResponse(options),
        { "200": { kind: "json" } },
      );
    },
    getCurrentPatientResponse,
    /**
     * Get information patient by token
     * Required scope - `gambit:patient:profile`
     *
     * this api requires JWT token issued for patient using `grant_type=patient`
     * GET /api/online/v1/patient/identity/me
     * Operation ID: GetCurrentPatient
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getCurrentPatient(
      options?: RequestOptions,
    ): Promise<Models.OnlinePatientProfile> {
      return transport.read<Models.OnlinePatientProfile>(
        await getCurrentPatientResponse(options),
        { "200": { kind: "json" } },
      );
    },
    getCurrentPatientDiscountResponse,
    /**
     * Returns patient discount information
     * Required scope - `gambit:patient:profile`
     *
     * this api requires JWT token issued for patient using `grant_type=patient`
     * GET /api/online/v1/patient/identity/me/discount
     * Operation ID: GetCurrentPatientDiscount
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getCurrentPatientDiscount(
      options?: RequestOptions,
    ): Promise<Array<Models.PatientDiscountDto>> {
      return transport.read<Array<Models.PatientDiscountDto>>(
        await getCurrentPatientDiscountResponse(options),
        { "200": { kind: "json" } },
      );
    },
    initializePatientOtpLoginResponse,
    /**
     * Api used to initialize OTP login for patient
     * Required scope - `gambit:online`
     *
     * this api sends one time password for patient that found by phone number or additional parameters if patient can not be deduplicated by phone
     * POST /api/online/v2/patient/identity/initialize-otp-login
     * Operation ID: InitializePatientOtpLogin
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async initializePatientOtpLogin(
      args: { body: Models.InitializeOTPLogin },
      options?: RequestOptions,
    ): Promise<Models.InitializeOTPLoginCommandOnlineResult> {
      return transport.read<Models.InitializeOTPLoginCommandOnlineResult>(
        await initializePatientOtpLoginResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getCurrentPatientHistoryResponse,
    /**
     * Get patient history
     * Required scope - `gambit:patient:profile`
     *
     * this api requires JWT token issued for patient using `grant_type=patient`
     * GET /api/online/v1/patient/history
     * Operation ID: GetCurrentPatientHistory
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getCurrentPatientHistory(
      args: {
        /**
         * Patient family member
         */ patientId?: number;
      } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.OnlinePatientHistory>> {
      return transport.read<Array<Models.OnlinePatientHistory>>(
        await getCurrentPatientHistoryResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getCurrentPatientAnalysisFilesResponse,
    /**
     * Get analysis files by analysis id
     * Required scope - `gambit:patient:profile`
     *
     * this api requires JWT token issued for patient using `grant_type=patient`
     * GET /api/online/v1/patient/history/analysisFiles/{analysisId}
     * Operation ID: GetCurrentPatientAnalysisFiles
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getCurrentPatientAnalysisFiles(
      args: {
        /**
         * analysis id identifier
         */ analysisId: number;
      },
      options?: RequestOptions,
    ): Promise<Array<Models.OnlineAnalysisFile>> {
      return transport.read<Array<Models.OnlineAnalysisFile>>(
        await getCurrentPatientAnalysisFilesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPatientHistoryByExternalIdResponse,
    /**
     * Get patient history
     * Required scope - `gambit:public:patient:read`
     * GET /api/online/v1/patient/{externalPatientId}/history
     * Operation ID: GetPatientHistoryByExternalId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPatientHistoryByExternalId(
      args: {
        /**
         * external patient identifier
         */ externalPatientId: string;
      },
      options?: RequestOptions,
    ): Promise<Array<Models.OnlinePatientHistory>> {
      return transport.read<Array<Models.OnlinePatientHistory>>(
        await getPatientHistoryByExternalIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    printCurrentPatientAnalysisResponse,
    printCurrentPatientAnalysesResponse,
    printCurrentPatientProtocolResponse,
    getCurrentPatientPlannedPrerecordsResponse,
    /**
     * Returns a list of future (active) prerecords for the patient
     * Required scope - `gambit:patient:profile`
     *
     * this api requires JWT token issued for patient using `grant_type=patient`
     * GET /api/online/v1/patient/prerecords
     * Operation ID: GetCurrentPatientPlannedPrerecords
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getCurrentPatientPlannedPrerecords(
      options?: RequestOptions,
    ): Promise<Array<Models.OnlinePrerecord>> {
      return transport.read<Array<Models.OnlinePrerecord>>(
        await getCurrentPatientPlannedPrerecordsResponse(options),
        { "200": { kind: "json" } },
      );
    },
    createCurrentPatientPrerecordResponse,
    /**
     * Create prrecord appointment
     * Required scope - `gambit:patient:profile`
     *
     * this api requires JWT token issued for patient using `grant_type=patient`
     * POST /api/online/v1/patient/prerecords
     * Operation ID: CreateCurrentPatientPrerecord
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createCurrentPatientPrerecord(
      args: {
        /**
         * Prerecord data
         */ body: Models.CreateOnlinePrerecordModel;
      },
      options?: RequestOptions,
    ): Promise<Models.PrerecordValidationResult> {
      return transport.read<Models.PrerecordValidationResult>(
        await createCurrentPatientPrerecordResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getCurrentPatientPlannedPrerecordCountResponse,
    /**
     * Returns count of future (active) prerecords for the patient
     * Required scope - `gambit:patient:profile`
     *
     * this api requires JWT token issued for patient using `grant_type=patient`
     * GET /api/online/v1/patient/prerecords/countPlanned
     * Operation ID: GetCurrentPatientPlannedPrerecordCount
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getCurrentPatientPlannedPrerecordCount(
      options?: RequestOptions,
    ): Promise<number | undefined> {
      return transport.read<number | undefined>(
        await getCurrentPatientPlannedPrerecordCountResponse(options),
        { "200": { kind: "json" }, "204": { kind: "empty" } },
      );
    },
    getPlannedPrerecordCountByExternalPatientIdResponse,
    /**
     * Returns count of future (active) prerecords for the patient
     * Required scope - `gambit:public:prerecord:read`
     * GET /api/online/v1/patient/{externalPatientId}/prerecords/countPlanned
     * Operation ID: GetPlannedPrerecordCountByExternalPatientId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPlannedPrerecordCountByExternalPatientId(
      args: {
        /**
         * external patient identifier
         */ externalPatientId: string;
      },
      options?: RequestOptions,
    ): Promise<number> {
      return transport.read<number>(
        await getPlannedPrerecordCountByExternalPatientIdResponse(
          args,
          options,
        ),
        { "200": { kind: "json" } },
      );
    },
    getFamilyPatientPlannedPrerecordsResponse,
    /**
     * Returns a list of future (active) prerecords for the patient (by patientId - family members only)
     * Required scope - `gambit:patient:profile`
     *
     * this api requires JWT token issued for patient using `grant_type=patient`
     * GET /api/online/v1/patient/prerecords/{patientId}
     * Operation ID: GetFamilyPatientPlannedPrerecords
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getFamilyPatientPlannedPrerecords(
      args: { patientId: number; includeInactive?: boolean },
      options?: RequestOptions,
    ): Promise<Array<Models.OnlinePrerecord>> {
      return transport.read<Array<Models.OnlinePrerecord>>(
        await getFamilyPatientPlannedPrerecordsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getCurrentPatientPrerecordByIdResponse,
    /**
     * Returns prerecord by id
     * Required scope - `gambit:patient:profile`
     *
     * this api requires JWT token issued for patient using `grant_type=patient`
     * GET /api/online/v1/patient/prerecords/by/id/{id}
     * Operation ID: GetCurrentPatientPrerecordById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getCurrentPatientPrerecordById(
      args: {
        /**
         * Prerecord identifier
         */ id: number;
      },
      options?: RequestOptions,
    ): Promise<Models.OnlinePrerecord> {
      return transport.read<Models.OnlinePrerecord>(
        await getCurrentPatientPrerecordByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    cancelPrerecordResponse,
    /**
     * Cancel prerecord appointment by id
     * Required scope - `gambit:public:prerecord:write`
     *
     * Token issued for patient can cancel only own prerecords
     * DELETE /api/online/v1/patient/prerecords/{prerecordId}
     * Operation ID: CancelPrerecord
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async cancelPrerecord(
      args: {
        /**
         * identifier of prerecord to cancel
         */ prerecordId: number;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await cancelPrerecordResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    createPrerecordByExternalPatientIdResponse,
    /**
     * Create prerecord appointment for external patient id
     * Required scope - `gambit:public:prerecord:write`
     * POST /api/online/v1/patient/{externalPatientId}/prerecords
     * Operation ID: CreatePrerecordByExternalPatientId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createPrerecordByExternalPatientId(
      args: {
        /**
         * external patient identifier
         */ externalPatientId: string;
        /**
         * Prerecord data
         */ body: Models.CreateOnlinePrerecordModel;
      },
      options?: RequestOptions,
    ): Promise<Models.PrerecordValidationResult> {
      return transport.read<Models.PrerecordValidationResult>(
        await createPrerecordByExternalPatientIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPrerecordsByExternalPatientIdResponse,
    /**
     * Returns a list of prerecords for the patient
     * Required scope - `gambit:public:prerecord:read`
     * GET /api/online/v1/patient/{externalPatientId}/prerecords
     * Operation ID: GetPrerecordsByExternalPatientId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPrerecordsByExternalPatientId(
      args: {
        /**
         * external patient identifier
         */ externalPatientId: string;
        /**
         * default is `false`, when true - returns past and future prerecords
         */ includeInactive?: boolean;
      },
      options?: RequestOptions,
    ): Promise<Array<Models.OnlinePrerecord>> {
      return transport.read<Array<Models.OnlinePrerecord>>(
        await getPrerecordsByExternalPatientIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPrerecordByIdAndExternalPatientIdResponse,
    /**
     * Returns prerecord by id
     * Required scope - `gambit:public:prerecord:read`
     * GET /api/online/v1/patient/{externalPatientId}/prerecords/{id}
     * Operation ID: GetPrerecordByIdAndExternalPatientId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPrerecordByIdAndExternalPatientId(
      args: {
        /**
         * external patient identifier
         */ externalPatientId: string;
        /**
         * Prerecord identifier
         */ id: number;
      },
      options?: RequestOptions,
    ): Promise<Models.OnlinePrerecord> {
      return transport.read<Models.OnlinePrerecord>(
        await getPrerecordByIdAndExternalPatientIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getCurrentPatientProtocolInformationResponse,
    /**
     * GetProtocolInformation
     * Required scope - `gambit:patient:profile`
     * GET /api/online/v1/patient/protocols/{id}/information
     * Operation ID: GetCurrentPatientProtocolInformation
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getCurrentPatientProtocolInformation(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.OnlineProtocolInformation> {
      return transport.read<Models.OnlineProtocolInformation>(
        await getCurrentPatientProtocolInformationResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getCurrentPatientAnalysisInformationResponse,
    /**
     * GetAnalysisInformation
     * Required scope - `gambit:patient:profile`
     * GET /api/online/v1/patient/analysis/{id}/information
     * Operation ID: GetCurrentPatientAnalysisInformation
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getCurrentPatientAnalysisInformation(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.OnlineAnalysisInformation> {
      return transport.read<Models.OnlineAnalysisInformation>(
        await getCurrentPatientAnalysisInformationResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    changeCurrentPatientPasswordResponse,
    /**
     * ChangePassword
     * Required scope - `gambit:patient:profile`
     * POST /api/online/v1/patient/identity/changePassword
     * Operation ID: ChangeCurrentPatientPassword
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async changeCurrentPatientPassword(
      args: { body?: Models.ChangePatientPasswordModel } = {},
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await changeCurrentPatientPasswordResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    changeCurrentPatientPhoneResponse,
    /**
     * ChangePhone
     * Required scope - `gambit:patient:profile`
     * POST /api/online/v1/patient/identity/changePhone
     * Operation ID: ChangeCurrentPatientPhone
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async changeCurrentPatientPhone(
      args: { body?: Models.ChangePatientPhoneModel } = {},
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await changeCurrentPatientPhoneResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    updateCurrentPatientProfileResponse,
    /**
     * UpdateInformation
     * Required scope - `gambit:patient:profile`
     * POST /api/online/v1/patient/identity/update
     * Operation ID: UpdateCurrentPatientProfile
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateCurrentPatientProfile(
      args: { body?: Models.UpdatePatientInformationModel } = {},
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateCurrentPatientProfileResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    initializePatientRegistrationResponse,
    /**
     * InitializeRegistration
     * Required scope - `gambit:online`
     * POST /api/online/v1/patients/register/initialize
     * Operation ID: InitializePatientRegistration
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async initializePatientRegistration(
      args: { body?: Models.InitializeRegisterModel } = {},
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await initializePatientRegistrationResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    registerPatientResponse,
    /**
     * Register
     * Required scope - `gambit:online`
     * POST /api/online/v1/patients/register
     * Operation ID: RegisterPatient
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async registerPatient(
      args: { body?: Models.RegisterModel } = {},
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await registerPatientResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    requestPatientPasswordResetResponse,
    /**
     * ResetPassword
     * Required scope - `gambit:online`
     * POST /api/online/v1/patients/password/reset
     * Operation ID: RequestPatientPasswordReset
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async requestPatientPasswordReset(
      args: { body?: Models.ResetPatientPasswordModel } = {},
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await requestPatientPasswordResetResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    confirmPatientPasswordResetResponse,
    /**
     * ConfirmResetPassword
     * Required scope - `gambit:online`
     * POST /api/online/v1/patients/password/confirm
     * Operation ID: ConfirmPatientPasswordReset
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async confirmPatientPasswordReset(
      args: { body?: Models.ConfirmResetPasswordModel } = {},
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await confirmPatientPasswordResetResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
