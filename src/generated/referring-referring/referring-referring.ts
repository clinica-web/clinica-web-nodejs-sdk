// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createReferringReferring(transport: Transport) {
  /**
   * GetPatientListV2
   * Required scope - `gambit:referral`
   * GET /api/v2/referringDoctor/GetPatientList
   * Operation ID: GetReferringDoctorPatientsWithSurveys
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getReferringDoctorPatientsWithSurveysResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/v2/referringDoctor/GetPatientList",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * CreateReferralDoctorDiction
   * Required scope - `gambit:referral`
   * POST /api/v1/referringDoctor/CreateDirection
   * Operation ID: CreateReferringDoctorDirection
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createReferringDoctorDirectionResponse(
    args: { body?: Models.CreateDirectionModel } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/v1/referringDoctor/CreateDirection",
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
   * GetReferringDoctorDirections
   * Required scope - `gambit:referral`
   * GET /api/v1/referringDoctor/GetDirection
   * Operation ID: GetReferringDoctorDirections
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getReferringDoctorDirectionsResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/v1/referringDoctor/GetDirection",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * GetReferringDoctorSurveys
   * Required scope - `gambit:referral`
   * GET /api/v1/referringDoctor/GetSurveyList
   * Operation ID: GetReferringDoctorSurveys
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getReferringDoctorSurveysResponse(
    args: { patientId?: number } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/v1/referringDoctor/GetSurveyList",
        parameters: [
          {
            name: "PatientId",
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
   * GetReferringDoctorSurveyInfo
   * Required scope - `gambit:referral`
   * GET /api/v1/referringDoctor/GetSurveyInfo
   * Operation ID: GetReferringDoctorSurveyInfo
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getReferringDoctorSurveyInfoResponse(
    args: { id?: number } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/v1/referringDoctor/GetSurveyInfo",
        parameters: [
          {
            name: "Id",
            field: "id",
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
   * GetReferringDoctorPatients
   * Required scope - `gambit:referral`
   * GET /api/v1/referringDoctor/GetPatientList
   * Operation ID: GetReferringDoctorPatients
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getReferringDoctorPatientsResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/v1/referringDoctor/GetPatientList",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * GetReferringDoctorInfo
   * Required scope - `gambit:referral`
   * GET /api/v1/referringDoctor/GetDoctorInfo
   * Operation ID: GetReferringDoctorInfo
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getReferringDoctorInfoResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/v1/referringDoctor/GetDoctorInfo",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * GetReferringDoctorStatistics
   * Required scope - `gambit:referral`
   * GET /api/v1/referringDoctor/GetDoctorStatistic
   * Operation ID: GetReferringDoctorStatistics
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getReferringDoctorStatisticsResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/v1/referringDoctor/GetDoctorStatistic",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * PrintSurvey
   * Required scope - `gambit:referral`
   * GET /api/v1/referringDoctor/print/survey/{surveyId}
   * Operation ID: PrintReferringDoctorSurvey
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function printReferringDoctorSurveyResponse(
    args: { surveyId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/v1/referringDoctor/print/survey/{surveyId}",
        parameters: [
          {
            name: "surveyId",
            field: "surveyId",
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
   * PrintSurveyRaw
   * Required scope - `gambit:referral`
   *
   * Returns the PDF as unquoted Base64 text with Content-Type application/octet-stream.
   * GET /api/v1/referringDoctor/printRaw/survey/{surveyId}
   * Operation ID: PrintReferringDoctorSurveyBase64
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function printReferringDoctorSurveyBase64Response(
    args: { surveyId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/v1/referringDoctor/printRaw/survey/{surveyId}",
        parameters: [
          {
            name: "surveyId",
            field: "surveyId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
        ],
        accept: "*/*",
      },
      args,
      options,
    );
  }
  /**
   * CreateOrUpdateReferralDoctor
   * Required scope - `gambit:referral:identity`
   * POST /api/v1/referringDoctor/identity
   * Operation ID: CreateOrUpdateReferringDoctor
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createOrUpdateReferringDoctorResponse(
    args: { body?: Models.ExternalCreateReferringDoctorModel } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/v1/referringDoctor/identity",
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
   * UpdateReferralDoctor
   * Required scope - `gambit:referral`
   * PUT /api/v1/referringDoctor/identity
   * Operation ID: UpdateReferringDoctorIdentity
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateReferringDoctorIdentityResponse(
    args: { body?: Models.ExternalCreateReferringDoctorModel } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/v1/referringDoctor/identity",
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
    getReferringDoctorPatientsWithSurveysResponse,
    /**
     * GetPatientListV2
     * Required scope - `gambit:referral`
     * GET /api/v2/referringDoctor/GetPatientList
     * Operation ID: GetReferringDoctorPatientsWithSurveys
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getReferringDoctorPatientsWithSurveys(
      options?: RequestOptions,
    ): Promise<Array<Models.DoctorPatientV2>> {
      return transport.read<Array<Models.DoctorPatientV2>>(
        await getReferringDoctorPatientsWithSurveysResponse(options),
        { "200": { kind: "json" } },
      );
    },
    createReferringDoctorDirectionResponse,
    /**
     * CreateReferralDoctorDiction
     * Required scope - `gambit:referral`
     * POST /api/v1/referringDoctor/CreateDirection
     * Operation ID: CreateReferringDoctorDirection
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createReferringDoctorDirection(
      args: { body?: Models.CreateDirectionModel } = {},
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await createReferringDoctorDirectionResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getReferringDoctorDirectionsResponse,
    /**
     * GetReferringDoctorDirections
     * Required scope - `gambit:referral`
     * GET /api/v1/referringDoctor/GetDirection
     * Operation ID: GetReferringDoctorDirections
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getReferringDoctorDirections(
      options?: RequestOptions,
    ): Promise<Array<Models.ReferralDto>> {
      return transport.read<Array<Models.ReferralDto>>(
        await getReferringDoctorDirectionsResponse(options),
        { "200": { kind: "json" } },
      );
    },
    getReferringDoctorSurveysResponse,
    /**
     * GetReferringDoctorSurveys
     * Required scope - `gambit:referral`
     * GET /api/v1/referringDoctor/GetSurveyList
     * Operation ID: GetReferringDoctorSurveys
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getReferringDoctorSurveys(
      args: { patientId?: number } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.PatientSurveys>> {
      return transport.read<Array<Models.PatientSurveys>>(
        await getReferringDoctorSurveysResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getReferringDoctorSurveyInfoResponse,
    /**
     * GetReferringDoctorSurveyInfo
     * Required scope - `gambit:referral`
     * GET /api/v1/referringDoctor/GetSurveyInfo
     * Operation ID: GetReferringDoctorSurveyInfo
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getReferringDoctorSurveyInfo(
      args: { id?: number } = {},
      options?: RequestOptions,
    ): Promise<Models.SurveyInfo> {
      return transport.read<Models.SurveyInfo>(
        await getReferringDoctorSurveyInfoResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getReferringDoctorPatientsResponse,
    /**
     * GetReferringDoctorPatients
     * Required scope - `gambit:referral`
     * GET /api/v1/referringDoctor/GetPatientList
     * Operation ID: GetReferringDoctorPatients
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getReferringDoctorPatients(
      options?: RequestOptions,
    ): Promise<Array<Models.DoctorPatient>> {
      return transport.read<Array<Models.DoctorPatient>>(
        await getReferringDoctorPatientsResponse(options),
        { "200": { kind: "json" } },
      );
    },
    getReferringDoctorInfoResponse,
    /**
     * GetReferringDoctorInfo
     * Required scope - `gambit:referral`
     * GET /api/v1/referringDoctor/GetDoctorInfo
     * Operation ID: GetReferringDoctorInfo
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getReferringDoctorInfo(
      options?: RequestOptions,
    ): Promise<Models.DoctorInfo> {
      return transport.read<Models.DoctorInfo>(
        await getReferringDoctorInfoResponse(options),
        { "200": { kind: "json" } },
      );
    },
    getReferringDoctorStatisticsResponse,
    /**
     * GetReferringDoctorStatistics
     * Required scope - `gambit:referral`
     * GET /api/v1/referringDoctor/GetDoctorStatistic
     * Operation ID: GetReferringDoctorStatistics
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getReferringDoctorStatistics(
      options?: RequestOptions,
    ): Promise<Array<Models.DoctorStatistic>> {
      return transport.read<Array<Models.DoctorStatistic>>(
        await getReferringDoctorStatisticsResponse(options),
        { "200": { kind: "json" } },
      );
    },
    printReferringDoctorSurveyResponse,
    printReferringDoctorSurveyBase64Response,
    createOrUpdateReferringDoctorResponse,
    /**
     * CreateOrUpdateReferralDoctor
     * Required scope - `gambit:referral:identity`
     * POST /api/v1/referringDoctor/identity
     * Operation ID: CreateOrUpdateReferringDoctor
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createOrUpdateReferringDoctor(
      args: { body?: Models.ExternalCreateReferringDoctorModel } = {},
      options?: RequestOptions,
    ): Promise<number> {
      return transport.read<number>(
        await createOrUpdateReferringDoctorResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateReferringDoctorIdentityResponse,
    /**
     * UpdateReferralDoctor
     * Required scope - `gambit:referral`
     * PUT /api/v1/referringDoctor/identity
     * Operation ID: UpdateReferringDoctorIdentity
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateReferringDoctorIdentity(
      args: { body?: Models.ExternalCreateReferringDoctorModel } = {},
      options?: RequestOptions,
    ): Promise<number> {
      return transport.read<number>(
        await updateReferringDoctorIdentityResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
