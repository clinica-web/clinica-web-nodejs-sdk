// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainUsers(transport: Transport) {
  /**
   * SearchUserShifts
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/users/shifts
   * Operation ID: SearchUserShifts
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function searchUserShiftsResponse(
    args: {
      dateFrom: string;
      dateTo: string;
      userId?: number;
      /**
       * Values:
       *
       * - `0`: None
       *
       * - `1`: Approved
       *
       * - `2`: Rejected
       *
       * - `3`: Pending
       *
       *
       */ type?: Models.UserShiftType;
      clinicId?: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/users/shifts",
        parameters: [
          {
            name: "dateFrom",
            field: "dateFrom",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "dateTo",
            field: "dateTo",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "userId",
            field: "userId",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "type",
            field: "type",
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
        ],
        accept: "application/json",
      },
      args,
      options,
    );
  }
  /**
   * TrackUserShift
   * Required scope - `gambit:erp`
   * POST /api/erp/v1/users/shifts
   * Operation ID: TrackUserShift
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function trackUserShiftResponse(
    args: { body: Models.EditableERPUserShift },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/users/shifts",
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
   * GetUserShift
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/users/shifts/{id}
   * Operation ID: GetUserShift
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getUserShiftResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/users/shifts/{id}",
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
   * DeleteUserShift
   * Required scope - `gambit:erp`
   * DELETE /api/erp/v1/users/shifts/{id}
   * Operation ID: DeleteUserShift
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteUserShiftResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/users/shifts/{id}",
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
   * UpdateUserShift
   * Required scope - `gambit:erp`
   * PUT /api/erp/v1/users/shifts/{id}
   * Operation ID: UpdateUserShift
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateUserShiftResponse(
    args: { id: number; body: Models.EditableERPUserShift },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/users/shifts/{id}",
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
   * ApproveUserShift
   * Required scope - `gambit:erp`
   * PATCH /api/erp/v1/users/shifts/{id}/approve
   * Operation ID: ApproveUserShift
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function approveUserShiftResponse(
    args: { id: number; body: Models.ERPUserShiftApprove },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PATCH",
        path: "/api/erp/v1/users/shifts/{id}/approve",
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
   * RejectUserShift
   * Required scope - `gambit:erp`
   * PATCH /api/erp/v1/users/shifts/{id}/reject
   * Operation ID: RejectUserShift
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function rejectUserShiftResponse(
    args: { id: number; body: Models.ERPUserShiftApprove },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PATCH",
        path: "/api/erp/v1/users/shifts/{id}/reject",
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
   * GetUserSpecializations
   * Required scope - `gambit:erp:users`
   * GET /api/erp/v1/users/{userId}/typedoctors
   * Operation ID: GetUserSpecializations
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getUserSpecializationsResponse(
    args: { userId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/users/{userId}/typedoctors",
        parameters: [
          {
            name: "userId",
            field: "userId",
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
   * AddUserSpecialization
   * Required scope - `gambit:erp:users`
   * PATCH /api/erp/v1/users/{userId}/typedoctors/{typedoctorId}
   * Operation ID: AddUserSpecialization
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function addUserSpecializationResponse(
    args: { userId: number; typedoctorId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PATCH",
        path: "/api/erp/v1/users/{userId}/typedoctors/{typedoctorId}",
        parameters: [
          {
            name: "userId",
            field: "userId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "typedoctorId",
            field: "typedoctorId",
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
   * DeleteUserSpecialization
   * Required scope - `gambit:erp:users`
   * DELETE /api/erp/v1/users/{userId}/typedoctors/{typedoctorId}
   * Operation ID: DeleteUserSpecialization
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteUserSpecializationResponse(
    args: { userId: number; typedoctorId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/users/{userId}/typedoctors/{typedoctorId}",
        parameters: [
          {
            name: "userId",
            field: "userId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "typedoctorId",
            field: "typedoctorId",
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
   * ReorderUserSpecializations
   * Required scope - `gambit:erp:users`
   * PUT /api/erp/v1/users/{userId}/typedoctors/order
   * Operation ID: ReorderUserSpecializations
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function reorderUserSpecializationsResponse(
    args: { userId: number; body: Models.UpdateUserTypeDoctorOrderRequest },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/users/{userId}/typedoctors/order",
        parameters: [
          {
            name: "userId",
            field: "userId",
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
   * GetUserAcls
   * Required scope - `gambit:erp:users`
   * GET /api/erp/v1/users/{userId}/acls
   * Operation ID: GetUserAcls
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getUserAclsResponse(
    args: { userId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/users/{userId}/acls",
        parameters: [
          {
            name: "userId",
            field: "userId",
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
   * AssignAclToUser
   * Required scope - `gambit:erp:users`
   * PATCH /api/erp/v1/users/{userId}/acls/{aclId}
   * Operation ID: AssignAclToUser
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function assignAclToUserResponse(
    args: { userId: number; aclId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PATCH",
        path: "/api/erp/v1/users/{userId}/acls/{aclId}",
        parameters: [
          {
            name: "userId",
            field: "userId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "aclId",
            field: "aclId",
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
   * UnassignAclFromUser
   * Required scope - `gambit:erp:users`
   * DELETE /api/erp/v1/users/{userId}/acls/{aclId}
   * Operation ID: UnassignAclFromUser
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function unassignAclFromUserResponse(
    args: { userId: number; aclId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/users/{userId}/acls/{aclId}",
        parameters: [
          {
            name: "userId",
            field: "userId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "aclId",
            field: "aclId",
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
   * GetUsers
   * Required scope - `gambit:erp:users`
   * GET /api/erp/v1/users
   * Operation ID: GetUsers
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getUsersResponse(options?: RequestOptions): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/users",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * CreateUser
   * Required scope - `gambit:erp:users`
   * POST /api/erp/v1/users
   * Operation ID: CreateUser
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createUserResponse(
    args: {
      generatePassword?: boolean;
      sendEmail?: boolean;
      body: Models.ERPUserCreateInformation;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/users",
        parameters: [
          {
            name: "generatePassword",
            field: "generatePassword",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "sendEmail",
            field: "sendEmail",
            in: "query",
            required: false,
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
   * GetUser
   * Required scope - `gambit:erp:users`
   * GET /api/erp/v1/users/{userId}
   * Operation ID: GetUser
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getUserResponse(
    args: { userId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/users/{userId}",
        parameters: [
          {
            name: "userId",
            field: "userId",
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
   * DeleteUser
   * Required scope - `gambit:erp:users`
   * DELETE /api/erp/v1/users/{userId}
   * Operation ID: DeleteUser
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteUserResponse(
    args: { userId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/users/{userId}",
        parameters: [
          {
            name: "userId",
            field: "userId",
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
   * UpdateUser
   * Required scope - `gambit:erp:users`
   * PUT /api/erp/v1/users/{userId}
   * Operation ID: UpdateUser
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateUserResponse(
    args: { userId: number; body: Models.ERPUserInformation },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/users/{userId}",
        parameters: [
          {
            name: "userId",
            field: "userId",
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
   * GetUserByExternalId
   * Required scope - `gambit:erp:users`
   * GET /api/erp/v1/users/{externalId}
   * Operation ID: GetUserByExternalId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getUserByExternalIdResponse(
    args: { externalId: string },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/users/{externalId}",
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
   * DeleteUserByExternalId
   * Required scope - `gambit:erp:users`
   * DELETE /api/erp/v1/users/{externalId}
   * Operation ID: DeleteUserByExternalId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteUserByExternalIdResponse(
    args: { externalId: string },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/users/{externalId}",
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
   * UpdateUserByExternalId
   * Required scope - `gambit:erp:users`
   * PUT /api/erp/v1/users/{externalId}
   * Operation ID: UpdateUserByExternalId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateUserByExternalIdResponse(
    args: { externalId: string; body: Models.ERPUserInformation },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/users/{externalId}",
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
   * GetPublicUsers
   * Required scope - `gambit:public:user:read`
   * GET /api/public/v1/users
   * Operation ID: GetPublicUsers
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPublicUsersResponse(options?: RequestOptions): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/users",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  return {
    searchUserShiftsResponse,
    /**
     * SearchUserShifts
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/users/shifts
     * Operation ID: SearchUserShifts
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async searchUserShifts(
      args: {
        dateFrom: string;
        dateTo: string;
        userId?: number;
        /**
         * Values:
         *
         * - `0`: None
         *
         * - `1`: Approved
         *
         * - `2`: Rejected
         *
         * - `3`: Pending
         *
         *
         */ type?: Models.UserShiftType;
        clinicId?: number;
      },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPUserShift>> {
      return transport.read<Array<Models.ERPUserShift>>(
        await searchUserShiftsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    trackUserShiftResponse,
    /**
     * TrackUserShift
     * Required scope - `gambit:erp`
     * POST /api/erp/v1/users/shifts
     * Operation ID: TrackUserShift
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async trackUserShift(
      args: { body: Models.EditableERPUserShift },
      options?: RequestOptions,
    ): Promise<Models.ERPUserShift> {
      return transport.read<Models.ERPUserShift>(
        await trackUserShiftResponse(args, options),
        { "201": { kind: "json" } },
      );
    },
    getUserShiftResponse,
    /**
     * GetUserShift
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/users/shifts/{id}
     * Operation ID: GetUserShift
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getUserShift(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPUserShift> {
      return transport.read<Models.ERPUserShift>(
        await getUserShiftResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    deleteUserShiftResponse,
    /**
     * DeleteUserShift
     * Required scope - `gambit:erp`
     * DELETE /api/erp/v1/users/shifts/{id}
     * Operation ID: DeleteUserShift
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteUserShift(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteUserShiftResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    updateUserShiftResponse,
    /**
     * UpdateUserShift
     * Required scope - `gambit:erp`
     * PUT /api/erp/v1/users/shifts/{id}
     * Operation ID: UpdateUserShift
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateUserShift(
      args: { id: number; body: Models.EditableERPUserShift },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateUserShiftResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    approveUserShiftResponse,
    /**
     * ApproveUserShift
     * Required scope - `gambit:erp`
     * PATCH /api/erp/v1/users/shifts/{id}/approve
     * Operation ID: ApproveUserShift
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async approveUserShift(
      args: { id: number; body: Models.ERPUserShiftApprove },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await approveUserShiftResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    rejectUserShiftResponse,
    /**
     * RejectUserShift
     * Required scope - `gambit:erp`
     * PATCH /api/erp/v1/users/shifts/{id}/reject
     * Operation ID: RejectUserShift
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async rejectUserShift(
      args: { id: number; body: Models.ERPUserShiftApprove },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await rejectUserShiftResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getUserSpecializationsResponse,
    /**
     * GetUserSpecializations
     * Required scope - `gambit:erp:users`
     * GET /api/erp/v1/users/{userId}/typedoctors
     * Operation ID: GetUserSpecializations
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getUserSpecializations(
      args: { userId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.UserTypeDoctorDto>> {
      return transport.read<Array<Models.UserTypeDoctorDto>>(
        await getUserSpecializationsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    addUserSpecializationResponse,
    /**
     * AddUserSpecialization
     * Required scope - `gambit:erp:users`
     * PATCH /api/erp/v1/users/{userId}/typedoctors/{typedoctorId}
     * Operation ID: AddUserSpecialization
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async addUserSpecialization(
      args: { userId: number; typedoctorId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await addUserSpecializationResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deleteUserSpecializationResponse,
    /**
     * DeleteUserSpecialization
     * Required scope - `gambit:erp:users`
     * DELETE /api/erp/v1/users/{userId}/typedoctors/{typedoctorId}
     * Operation ID: DeleteUserSpecialization
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteUserSpecialization(
      args: { userId: number; typedoctorId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteUserSpecializationResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    reorderUserSpecializationsResponse,
    /**
     * ReorderUserSpecializations
     * Required scope - `gambit:erp:users`
     * PUT /api/erp/v1/users/{userId}/typedoctors/order
     * Operation ID: ReorderUserSpecializations
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async reorderUserSpecializations(
      args: { userId: number; body: Models.UpdateUserTypeDoctorOrderRequest },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await reorderUserSpecializationsResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getUserAclsResponse,
    /**
     * GetUserAcls
     * Required scope - `gambit:erp:users`
     * GET /api/erp/v1/users/{userId}/acls
     * Operation ID: GetUserAcls
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getUserAcls(
      args: { userId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.AclDto>> {
      return transport.read<Array<Models.AclDto>>(
        await getUserAclsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    assignAclToUserResponse,
    /**
     * AssignAclToUser
     * Required scope - `gambit:erp:users`
     * PATCH /api/erp/v1/users/{userId}/acls/{aclId}
     * Operation ID: AssignAclToUser
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async assignAclToUser(
      args: { userId: number; aclId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await assignAclToUserResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    unassignAclFromUserResponse,
    /**
     * UnassignAclFromUser
     * Required scope - `gambit:erp:users`
     * DELETE /api/erp/v1/users/{userId}/acls/{aclId}
     * Operation ID: UnassignAclFromUser
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async unassignAclFromUser(
      args: { userId: number; aclId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await unassignAclFromUserResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getUsersResponse,
    /**
     * GetUsers
     * Required scope - `gambit:erp:users`
     * GET /api/erp/v1/users
     * Operation ID: GetUsers
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getUsers(
      options?: RequestOptions,
    ): Promise<Array<Models.ERPUserDto>> {
      return transport.read<Array<Models.ERPUserDto>>(
        await getUsersResponse(options),
        { "200": { kind: "json" } },
      );
    },
    createUserResponse,
    /**
     * CreateUser
     * Required scope - `gambit:erp:users`
     * POST /api/erp/v1/users
     * Operation ID: CreateUser
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createUser(
      args: {
        generatePassword?: boolean;
        sendEmail?: boolean;
        body: Models.ERPUserCreateInformation;
      },
      options?: RequestOptions,
    ): Promise<number> {
      return transport.read<number>(await createUserResponse(args, options), {
        "200": { kind: "json" },
      });
    },
    getUserResponse,
    /**
     * GetUser
     * Required scope - `gambit:erp:users`
     * GET /api/erp/v1/users/{userId}
     * Operation ID: GetUser
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getUser(
      args: { userId: number },
      options?: RequestOptions,
    ): Promise<Models.ERPUserDto> {
      return transport.read<Models.ERPUserDto>(
        await getUserResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    deleteUserResponse,
    /**
     * DeleteUser
     * Required scope - `gambit:erp:users`
     * DELETE /api/erp/v1/users/{userId}
     * Operation ID: DeleteUser
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteUser(
      args: { userId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(await deleteUserResponse(args, options), {
        "200": { kind: "unknown" },
      });
    },
    updateUserResponse,
    /**
     * UpdateUser
     * Required scope - `gambit:erp:users`
     * PUT /api/erp/v1/users/{userId}
     * Operation ID: UpdateUser
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateUser(
      args: { userId: number; body: Models.ERPUserInformation },
      options?: RequestOptions,
    ): Promise<number> {
      return transport.read<number>(await updateUserResponse(args, options), {
        "200": { kind: "json" },
      });
    },
    getUserByExternalIdResponse,
    /**
     * GetUserByExternalId
     * Required scope - `gambit:erp:users`
     * GET /api/erp/v1/users/{externalId}
     * Operation ID: GetUserByExternalId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getUserByExternalId(
      args: { externalId: string },
      options?: RequestOptions,
    ): Promise<Models.ERPUserDto> {
      return transport.read<Models.ERPUserDto>(
        await getUserByExternalIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    deleteUserByExternalIdResponse,
    /**
     * DeleteUserByExternalId
     * Required scope - `gambit:erp:users`
     * DELETE /api/erp/v1/users/{externalId}
     * Operation ID: DeleteUserByExternalId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteUserByExternalId(
      args: { externalId: string },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteUserByExternalIdResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    updateUserByExternalIdResponse,
    /**
     * UpdateUserByExternalId
     * Required scope - `gambit:erp:users`
     * PUT /api/erp/v1/users/{externalId}
     * Operation ID: UpdateUserByExternalId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateUserByExternalId(
      args: { externalId: string; body: Models.ERPUserInformation },
      options?: RequestOptions,
    ): Promise<number> {
      return transport.read<number>(
        await updateUserByExternalIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPublicUsersResponse,
    /**
     * GetPublicUsers
     * Required scope - `gambit:public:user:read`
     * GET /api/public/v1/users
     * Operation ID: GetPublicUsers
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPublicUsers(
      options?: RequestOptions,
    ): Promise<Array<Models.UserShortInformationModel>> {
      return transport.read<Array<Models.UserShortInformationModel>>(
        await getPublicUsersResponse(options),
        { "200": { kind: "json" } },
      );
    },
  };
}
