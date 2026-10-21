// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createOnlinePatientFamily(transport: Transport) {
  /**
   * Get list of family members
   *
   * (only family owner can see family members)
   * Required scope - `gambit:patient:profile`
   *
   * this api requires JWT token issued for patient using `grant_type=patient`
   * GET /api/online/v1/patientFamily
   * Operation ID: GetCurrentPatientFamilyMembers
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getCurrentPatientFamilyMembersResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/patientFamily",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * GetCurrentPatientFamilyMemberById
   * Required scope - `gambit:patient:profile`
   * GET /api/online/v1/patientFamily/{patientId}
   * Operation ID: GetCurrentPatientFamilyMemberById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getCurrentPatientFamilyMemberByIdResponse(
    args: { patientId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/online/v1/patientFamily/{patientId}",
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
   * Update patient information by family owner
   * Required scope - `gambit:patient:profile`
   * POST /api/online/v1/patientFamily/{patientId}
   * Operation ID: UpdateCurrentPatientFamilyMember
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateCurrentPatientFamilyMemberResponse(
    args: {
      /**
       * Identifier of patient to be updated
       */ patientId: number;
      /**
       * Patient data
       */ body: Models.UpdatePatientInformationModel;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/online/v1/patientFamily/{patientId}",
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
        bodyField: "body",
        bodyRequired: true,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * Remove family member by family member identifier
   *
   * (only family owner can remove family member)
   * Required scope - `gambit:patient:profile`
   *
   * this api requires JWT token issued for patient using `grant_type=patient`
   * DELETE /api/online/v1/patientFamily/{patientId}
   * Operation ID: RemoveCurrentPatientFamilyMember
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function removeCurrentPatientFamilyMemberResponse(
    args: {
      /**
       * Family member identifier
       */ patientId: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/online/v1/patientFamily/{patientId}",
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
   * RegisterCurrentPatientFamilyMember
   * Required scope - `gambit:patient:profile`
   * POST /api/online/v1/patientFamily/register
   * Operation ID: RegisterCurrentPatientFamilyMember
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function registerCurrentPatientFamilyMemberResponse(
    args: { body: Models.RegisterFamilyMemberModel },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/online/v1/patientFamily/register",
        parameters: [],
        bodyField: "body",
        bodyRequired: true,
        accept: "application/json",
      },
      args,
      options,
    );
  }
  return {
    getCurrentPatientFamilyMembersResponse,
    /**
     * Get list of family members
     *
     * (only family owner can see family members)
     * Required scope - `gambit:patient:profile`
     *
     * this api requires JWT token issued for patient using `grant_type=patient`
     * GET /api/online/v1/patientFamily
     * Operation ID: GetCurrentPatientFamilyMembers
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getCurrentPatientFamilyMembers(
      options?: RequestOptions,
    ): Promise<Array<Models.OnlinePatientFamilyMember>> {
      return transport.read<Array<Models.OnlinePatientFamilyMember>>(
        await getCurrentPatientFamilyMembersResponse(options),
        { "200": { kind: "json" } },
      );
    },
    getCurrentPatientFamilyMemberByIdResponse,
    /**
     * GetCurrentPatientFamilyMemberById
     * Required scope - `gambit:patient:profile`
     * GET /api/online/v1/patientFamily/{patientId}
     * Operation ID: GetCurrentPatientFamilyMemberById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getCurrentPatientFamilyMemberById(
      args: { patientId: number },
      options?: RequestOptions,
    ): Promise<Models.OnlinePatient> {
      return transport.read<Models.OnlinePatient>(
        await getCurrentPatientFamilyMemberByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateCurrentPatientFamilyMemberResponse,
    /**
     * Update patient information by family owner
     * Required scope - `gambit:patient:profile`
     * POST /api/online/v1/patientFamily/{patientId}
     * Operation ID: UpdateCurrentPatientFamilyMember
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateCurrentPatientFamilyMember(
      args: {
        /**
         * Identifier of patient to be updated
         */ patientId: number;
        /**
         * Patient data
         */ body: Models.UpdatePatientInformationModel;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateCurrentPatientFamilyMemberResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    removeCurrentPatientFamilyMemberResponse,
    /**
     * Remove family member by family member identifier
     *
     * (only family owner can remove family member)
     * Required scope - `gambit:patient:profile`
     *
     * this api requires JWT token issued for patient using `grant_type=patient`
     * DELETE /api/online/v1/patientFamily/{patientId}
     * Operation ID: RemoveCurrentPatientFamilyMember
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async removeCurrentPatientFamilyMember(
      args: {
        /**
         * Family member identifier
         */ patientId: number;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await removeCurrentPatientFamilyMemberResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    registerCurrentPatientFamilyMemberResponse,
    /**
     * RegisterCurrentPatientFamilyMember
     * Required scope - `gambit:patient:profile`
     * POST /api/online/v1/patientFamily/register
     * Operation ID: RegisterCurrentPatientFamilyMember
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async registerCurrentPatientFamilyMember(
      args: { body: Models.RegisterFamilyMemberModel },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await registerCurrentPatientFamilyMemberResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
