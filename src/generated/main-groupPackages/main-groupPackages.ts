// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainGroupPackages(transport: Transport) {
  /**
   * GetGroupPackageTree
   * Required scope - `gambit:static_data`
   * GET /api/erp/v1/group-packages/groupPackageTree
   * Operation ID: GetGroupPackageTree
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getGroupPackageTreeResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/group-packages/groupPackageTree",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * GetGroupPackages
   * Required scope - `gambit:erp:group-packages`
   * GET /api/erp/v1/group-packages
   * Operation ID: GetGroupPackages
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getGroupPackagesResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/group-packages",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * CreateGroupPackage
   * Required scope - `gambit:erp:group-packages`
   * POST /api/erp/v1/group-packages
   * Operation ID: CreateGroupPackage
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createGroupPackageResponse(
    args: { body: Models.EditableERPGroupPackage },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/group-packages",
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
   * GetGroupPackage
   * Required scope - `gambit:erp:group-packages`
   * GET /api/erp/v1/group-packages/{groupPackageId}
   * Operation ID: GetGroupPackage
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getGroupPackageResponse(
    args: { groupPackageId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/group-packages/{groupPackageId}",
        parameters: [
          {
            name: "groupPackageId",
            field: "groupPackageId",
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
   * UpdateGroupPackage
   * Required scope - `gambit:erp:group-packages`
   * PUT /api/erp/v1/group-packages/{groupPackageId}
   * Operation ID: UpdateGroupPackage
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateGroupPackageResponse(
    args: { groupPackageId: number; body: Models.EditableERPGroupPackage },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/group-packages/{groupPackageId}",
        parameters: [
          {
            name: "groupPackageId",
            field: "groupPackageId",
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
   * DeleteGroupPackage
   * Required scope - `gambit:erp:group-packages`
   * DELETE /api/erp/v1/group-packages/{groupPackageId}
   * Operation ID: DeleteGroupPackage
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteGroupPackageResponse(
    args: { groupPackageId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/group-packages/{groupPackageId}",
        parameters: [
          {
            name: "groupPackageId",
            field: "groupPackageId",
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
    getGroupPackageTreeResponse,
    /**
     * GetGroupPackageTree
     * Required scope - `gambit:static_data`
     * GET /api/erp/v1/group-packages/groupPackageTree
     * Operation ID: GetGroupPackageTree
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getGroupPackageTree(
      options?: RequestOptions,
    ): Promise<Array<Models.GroupPackageTree>> {
      return transport.read<Array<Models.GroupPackageTree>>(
        await getGroupPackageTreeResponse(options),
        { "200": { kind: "json" } },
      );
    },
    getGroupPackagesResponse,
    /**
     * GetGroupPackages
     * Required scope - `gambit:erp:group-packages`
     * GET /api/erp/v1/group-packages
     * Operation ID: GetGroupPackages
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getGroupPackages(
      options?: RequestOptions,
    ): Promise<Array<Models.ERPGroupPackage>> {
      return transport.read<Array<Models.ERPGroupPackage>>(
        await getGroupPackagesResponse(options),
        { "200": { kind: "json" } },
      );
    },
    createGroupPackageResponse,
    /**
     * CreateGroupPackage
     * Required scope - `gambit:erp:group-packages`
     * POST /api/erp/v1/group-packages
     * Operation ID: CreateGroupPackage
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createGroupPackage(
      args: { body: Models.EditableERPGroupPackage },
      options?: RequestOptions,
    ): Promise<Models.ERPGroupPackage> {
      return transport.read<Models.ERPGroupPackage>(
        await createGroupPackageResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getGroupPackageResponse,
    /**
     * GetGroupPackage
     * Required scope - `gambit:erp:group-packages`
     * GET /api/erp/v1/group-packages/{groupPackageId}
     * Operation ID: GetGroupPackage
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getGroupPackage(
      args: { groupPackageId: number },
      options?: RequestOptions,
    ): Promise<Models.ERPGroupPackage> {
      return transport.read<Models.ERPGroupPackage>(
        await getGroupPackageResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateGroupPackageResponse,
    /**
     * UpdateGroupPackage
     * Required scope - `gambit:erp:group-packages`
     * PUT /api/erp/v1/group-packages/{groupPackageId}
     * Operation ID: UpdateGroupPackage
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateGroupPackage(
      args: { groupPackageId: number; body: Models.EditableERPGroupPackage },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateGroupPackageResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deleteGroupPackageResponse,
    /**
     * DeleteGroupPackage
     * Required scope - `gambit:erp:group-packages`
     * DELETE /api/erp/v1/group-packages/{groupPackageId}
     * Operation ID: DeleteGroupPackage
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteGroupPackage(
      args: { groupPackageId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteGroupPackageResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
