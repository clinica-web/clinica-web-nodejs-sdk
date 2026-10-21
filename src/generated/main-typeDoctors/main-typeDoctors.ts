// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainTypeDoctors(transport: Transport) {
  /**
   * GetPackagesByTypeDoctor
   * Required scope - `gambit:erp:type-doctors`
   * GET /api/erp/v1/type-doctors/{id}/packages
   * Operation ID: GetPackagesByTypeDoctor
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPackagesByTypeDoctorResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/type-doctors/{id}/packages",
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
   * GetUsersByTypeDoctorId
   * Required scope - `gambit:erp:type-doctors`
   * GET /api/erp/v1/type-doctors/{id}/users
   * Operation ID: GetUsersByTypeDoctorId
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getUsersByTypeDoctorIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/type-doctors/{id}/users",
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
   * GetTypeDoctors
   * Required scope - `gambit:erp:type-doctors`
   * GET /api/erp/v1/type-doctors
   * Operation ID: GetTypeDoctors
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getTypeDoctorsResponse(options?: RequestOptions): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/type-doctors",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * CreateTypeDoctor
   * Required scope - `gambit:erp:type-doctors`
   * POST /api/erp/v1/type-doctors
   * Operation ID: CreateTypeDoctor
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createTypeDoctorResponse(
    args: { body: Models.TypeDoctorEditableDto },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/type-doctors",
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
   * GetTypeDoctorById
   * Required scope - `gambit:erp:type-doctors`
   * GET /api/erp/v1/type-doctors/{id}
   * Operation ID: GetTypeDoctorById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getTypeDoctorByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/type-doctors/{id}",
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
   * UpdateTypeDoctor
   * Required scope - `gambit:erp:type-doctors`
   * PUT /api/erp/v1/type-doctors/{id}
   * Operation ID: UpdateTypeDoctor
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateTypeDoctorResponse(
    args: { id: number; body: Models.TypeDoctorEditableDto },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/type-doctors/{id}",
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
   * DeleteTypeDoctor
   * Required scope - `gambit:erp:type-doctors`
   * DELETE /api/erp/v1/type-doctors/{id}
   * Operation ID: DeleteTypeDoctor
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteTypeDoctorResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/type-doctors/{id}",
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
   * GetTypeDoctorsWithMetadata
   * Required scope - `gambit:erp:type-doctors`
   * GET /api/erp/v1/type-doctors/extended
   * Operation ID: GetTypeDoctorsWithMetadata
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getTypeDoctorsWithMetadataResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/type-doctors/extended",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * GetPackagesByTypeDoctorIds
   * Required scope - `gambit:erp:type-doctors`
   * GET /api/erp/v1/type-doctors/packages
   * Operation ID: GetPackagesByTypeDoctorIds
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPackagesByTypeDoctorIdsResponse(
    args: {
      /**
       * Type doctor IDs. Repeat the query parameter, for example ids=1&ids=2. Omit it to use an empty list.
       */ ids?: Array<number>;
    } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/type-doctors/packages",
        parameters: [
          {
            name: "ids",
            field: "ids",
            in: "query",
            required: false,
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
   * GetUsersByTypeDoctorIds
   * Required scope - `gambit:erp:type-doctors`
   * GET /api/erp/v1/type-doctors/users
   * Operation ID: GetUsersByTypeDoctorIds
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getUsersByTypeDoctorIdsResponse(
    args: {
      /**
       * Type doctor IDs. Repeat the query parameter, for example ids=1&ids=2. Omit it to use an empty list.
       */ ids?: Array<number>;
    } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/type-doctors/users",
        parameters: [
          {
            name: "ids",
            field: "ids",
            in: "query",
            required: false,
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
   * GetPackageTypeDoctorsMap
   * Required scope - `gambit:erp:type-doctors`
   * GET /api/erp/v1/type-doctors/packagesMap
   * Operation ID: GetPackageTypeDoctorsMap
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPackageTypeDoctorsMapResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/type-doctors/packagesMap",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * GetPackageTypeDoctorsMapByPackageIds
   * Required scope - `gambit:erp:type-doctors`
   * POST /api/erp/v1/type-doctors/packagesMap
   * Operation ID: GetPackageTypeDoctorsMapByPackageIds
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPackageTypeDoctorsMapByPackageIdsResponse(
    args: { body: Array<number> },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/type-doctors/packagesMap",
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
    getPackagesByTypeDoctorResponse,
    /**
     * GetPackagesByTypeDoctor
     * Required scope - `gambit:erp:type-doctors`
     * GET /api/erp/v1/type-doctors/{id}/packages
     * Operation ID: GetPackagesByTypeDoctor
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPackagesByTypeDoctor(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Array<Models.BaseDto>> {
      return transport.read<Array<Models.BaseDto>>(
        await getPackagesByTypeDoctorResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getUsersByTypeDoctorIdResponse,
    /**
     * GetUsersByTypeDoctorId
     * Required scope - `gambit:erp:type-doctors`
     * GET /api/erp/v1/type-doctors/{id}/users
     * Operation ID: GetUsersByTypeDoctorId
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getUsersByTypeDoctorId(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Array<Models.BaseDto>> {
      return transport.read<Array<Models.BaseDto>>(
        await getUsersByTypeDoctorIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getTypeDoctorsResponse,
    /**
     * GetTypeDoctors
     * Required scope - `gambit:erp:type-doctors`
     * GET /api/erp/v1/type-doctors
     * Operation ID: GetTypeDoctors
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getTypeDoctors(
      options?: RequestOptions,
    ): Promise<Array<Models.TypeDoctorDto>> {
      return transport.read<Array<Models.TypeDoctorDto>>(
        await getTypeDoctorsResponse(options),
        { "200": { kind: "json" } },
      );
    },
    createTypeDoctorResponse,
    /**
     * CreateTypeDoctor
     * Required scope - `gambit:erp:type-doctors`
     * POST /api/erp/v1/type-doctors
     * Operation ID: CreateTypeDoctor
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createTypeDoctor(
      args: { body: Models.TypeDoctorEditableDto },
      options?: RequestOptions,
    ): Promise<Models.BaseDto> {
      return transport.read<Models.BaseDto>(
        await createTypeDoctorResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getTypeDoctorByIdResponse,
    /**
     * GetTypeDoctorById
     * Required scope - `gambit:erp:type-doctors`
     * GET /api/erp/v1/type-doctors/{id}
     * Operation ID: GetTypeDoctorById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getTypeDoctorById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.TypeDoctorDto> {
      return transport.read<Models.TypeDoctorDto>(
        await getTypeDoctorByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    updateTypeDoctorResponse,
    /**
     * UpdateTypeDoctor
     * Required scope - `gambit:erp:type-doctors`
     * PUT /api/erp/v1/type-doctors/{id}
     * Operation ID: UpdateTypeDoctor
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateTypeDoctor(
      args: { id: number; body: Models.TypeDoctorEditableDto },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateTypeDoctorResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    deleteTypeDoctorResponse,
    /**
     * DeleteTypeDoctor
     * Required scope - `gambit:erp:type-doctors`
     * DELETE /api/erp/v1/type-doctors/{id}
     * Operation ID: DeleteTypeDoctor
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteTypeDoctor(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteTypeDoctorResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getTypeDoctorsWithMetadataResponse,
    /**
     * GetTypeDoctorsWithMetadata
     * Required scope - `gambit:erp:type-doctors`
     * GET /api/erp/v1/type-doctors/extended
     * Operation ID: GetTypeDoctorsWithMetadata
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getTypeDoctorsWithMetadata(
      options?: RequestOptions,
    ): Promise<Array<Models.TypeDoctorWithMetadataDto>> {
      return transport.read<Array<Models.TypeDoctorWithMetadataDto>>(
        await getTypeDoctorsWithMetadataResponse(options),
        { "200": { kind: "json" } },
      );
    },
    getPackagesByTypeDoctorIdsResponse,
    /**
     * GetPackagesByTypeDoctorIds
     * Required scope - `gambit:erp:type-doctors`
     * GET /api/erp/v1/type-doctors/packages
     * Operation ID: GetPackagesByTypeDoctorIds
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPackagesByTypeDoctorIds(
      args: {
        /**
         * Type doctor IDs. Repeat the query parameter, for example ids=1&ids=2. Omit it to use an empty list.
         */ ids?: Array<number>;
      } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.BaseDto>> {
      return transport.read<Array<Models.BaseDto>>(
        await getPackagesByTypeDoctorIdsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getUsersByTypeDoctorIdsResponse,
    /**
     * GetUsersByTypeDoctorIds
     * Required scope - `gambit:erp:type-doctors`
     * GET /api/erp/v1/type-doctors/users
     * Operation ID: GetUsersByTypeDoctorIds
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getUsersByTypeDoctorIds(
      args: {
        /**
         * Type doctor IDs. Repeat the query parameter, for example ids=1&ids=2. Omit it to use an empty list.
         */ ids?: Array<number>;
      } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.BaseDto>> {
      return transport.read<Array<Models.BaseDto>>(
        await getUsersByTypeDoctorIdsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPackageTypeDoctorsMapResponse,
    /**
     * GetPackageTypeDoctorsMap
     * Required scope - `gambit:erp:type-doctors`
     * GET /api/erp/v1/type-doctors/packagesMap
     * Operation ID: GetPackageTypeDoctorsMap
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPackageTypeDoctorsMap(
      options?: RequestOptions,
    ): Promise<Array<Models.PackageTypeDoctorDto>> {
      return transport.read<Array<Models.PackageTypeDoctorDto>>(
        await getPackageTypeDoctorsMapResponse(options),
        { "200": { kind: "json" } },
      );
    },
    getPackageTypeDoctorsMapByPackageIdsResponse,
    /**
     * GetPackageTypeDoctorsMapByPackageIds
     * Required scope - `gambit:erp:type-doctors`
     * POST /api/erp/v1/type-doctors/packagesMap
     * Operation ID: GetPackageTypeDoctorsMapByPackageIds
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPackageTypeDoctorsMapByPackageIds(
      args: { body: Array<number> },
      options?: RequestOptions,
    ): Promise<Array<Models.PackageTypeDoctorDto>> {
      return transport.read<Array<Models.PackageTypeDoctorDto>>(
        await getPackageTypeDoctorsMapByPackageIdsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
