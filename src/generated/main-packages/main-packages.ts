// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainPackages(transport: Transport) {
  /**
   * GetPackageLookup
   * Required scope - `gambit:static_data`
   * GET /api/erp/v1/packages/lookup
   * Operation ID: GetPackageLookup
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPackageLookupResponse(
    args: { from: string; to: string },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/packages/lookup",
        parameters: [
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
   * GetPackageSecondaryPackages
   * Required scope - `gambit:erp:packages`
   * GET /api/erp/v1/packages/{packageId}/secondaryPackages
   * Operation ID: GetPackageSecondaryPackages
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPackageSecondaryPackagesResponse(
    args: { packageId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/packages/{packageId}/secondaryPackages",
        parameters: [
          {
            name: "packageId",
            field: "packageId",
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
   * RemovePackageSecondaryPackage
   * Required scope - `gambit:erp:packages`
   * DELETE /api/erp/v1/packages/{packageId}/secondaryPackages/{secondaryPackageId}
   * Operation ID: RemovePackageSecondaryPackage
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function removePackageSecondaryPackageResponse(
    args: { packageId: number; secondaryPackageId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/packages/{packageId}/secondaryPackages/{secondaryPackageId}",
        parameters: [
          {
            name: "packageId",
            field: "packageId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "secondaryPackageId",
            field: "secondaryPackageId",
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
   * AddPackageSecondaryPackage
   * Required scope - `gambit:erp:packages`
   * POST /api/erp/v1/packages/{packageId}/secondaryPackages/{secondaryPackageId}
   * Operation ID: AddPackageSecondaryPackage
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function addPackageSecondaryPackageResponse(
    args: { packageId: number; secondaryPackageId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/packages/{packageId}/secondaryPackages/{secondaryPackageId}",
        parameters: [
          {
            name: "packageId",
            field: "packageId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "secondaryPackageId",
            field: "secondaryPackageId",
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
   * GetPackageTypeDoctors
   * Required scope - `gambit:erp:packages`
   * GET /api/erp/v1/packages/{packageId}/typeDoctors
   * Operation ID: GetPackageTypeDoctors
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPackageTypeDoctorsResponse(
    args: { packageId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/packages/{packageId}/typeDoctors",
        parameters: [
          {
            name: "packageId",
            field: "packageId",
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
   * AddPackageTypeDoctor
   * Required scope - `gambit:erp:packages`
   * POST /api/erp/v1/packages/{packageId}/typeDoctors/{typeDoctorId}
   * Operation ID: AddPackageTypeDoctor
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function addPackageTypeDoctorResponse(
    args: { packageId: number; typeDoctorId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/packages/{packageId}/typeDoctors/{typeDoctorId}",
        parameters: [
          {
            name: "packageId",
            field: "packageId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "typeDoctorId",
            field: "typeDoctorId",
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
   * RemovePackageTypeDoctor
   * Required scope - `gambit:erp:packages`
   * DELETE /api/erp/v1/packages/{packageId}/typeDoctors/{typeDoctorId}
   * Operation ID: RemovePackageTypeDoctor
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function removePackageTypeDoctorResponse(
    args: { packageId: number; typeDoctorId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/packages/{packageId}/typeDoctors/{typeDoctorId}",
        parameters: [
          {
            name: "packageId",
            field: "packageId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "typeDoctorId",
            field: "typeDoctorId",
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
   * GetPackageAnalysisComponents
   * Required scope - `gambit:erp:packages`
   * GET /api/erp/v1/packages/{packageId}/analysisComponents
   * Operation ID: GetPackageAnalysisComponents
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPackageAnalysisComponentsResponse(
    args: { packageId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/packages/{packageId}/analysisComponents",
        parameters: [
          {
            name: "packageId",
            field: "packageId",
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
   * AddPackageAnalysisComponent
   * Required scope - `gambit:erp:packages`
   * POST /api/erp/v1/packages/{packageId}/analysisComponents/{analysisComponentId}
   * Operation ID: AddPackageAnalysisComponent
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function addPackageAnalysisComponentResponse(
    args: {
      packageId: number;
      analysisComponentId: number;
      body: Array<Models.PackageAnalysisComponentsModel>;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/packages/{packageId}/analysisComponents/{analysisComponentId}",
        parameters: [
          {
            name: "packageId",
            field: "packageId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "analysisComponentId",
            field: "analysisComponentId",
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
   * RemovePackageAnalysisComponent
   * Required scope - `gambit:erp:packages`
   * PATCH /api/erp/v1/packages/{packageId}/analysisComponents/{analysisComponentId}
   * Operation ID: RemovePackageAnalysisComponent
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function removePackageAnalysisComponentResponse(
    args: {
      packageId: number;
      analysisComponentId: number;
      body: Array<Models.PackageAnalysisComponentsModel>;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PATCH",
        path: "/api/erp/v1/packages/{packageId}/analysisComponents/{analysisComponentId}",
        parameters: [
          {
            name: "packageId",
            field: "packageId",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "analysisComponentId",
            field: "analysisComponentId",
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
   * ReorderPackageAnalysisComponents
   * Required scope - `gambit:erp:packages`
   * PATCH /api/erp/v1/packages/{packageId}/analysisComponents/reorder
   * Operation ID: ReorderPackageAnalysisComponents
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function reorderPackageAnalysisComponentsResponse(
    args: {
      packageId: number;
      body: Array<Models.PackageAnalysisComponentsModel>;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PATCH",
        path: "/api/erp/v1/packages/{packageId}/analysisComponents/reorder",
        parameters: [
          {
            name: "packageId",
            field: "packageId",
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
   * GetPackage
   * Required scope - `gambit:erp:packages`
   * GET /api/erp/v1/packages/{id}
   * Operation ID: GetPackage
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPackageResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/packages/{id}",
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
   * DeletePackage
   * Required scope - `gambit:erp:packages`
   * DELETE /api/erp/v1/packages/{id}
   * Operation ID: DeletePackage
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deletePackageResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/packages/{id}",
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
   * UpdatePackage
   * Required scope - `gambit:erp:packages`
   * PUT /api/erp/v1/packages/{id}
   * Operation ID: UpdatePackage
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updatePackageResponse(
    args: { id: number; body: Models.PackageEditableModel },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/packages/{id}",
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
   * GetPackageByCode
   * Required scope - `gambit:erp:packages`
   * GET /api/erp/v1/packages/by/code/{code}
   * Operation ID: GetPackageByCode
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPackageByCodeResponse(
    args: { code: string },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/packages/by/code/{code}",
        parameters: [
          {
            name: "code",
            field: "code",
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
   * GetPackages
   * Required scope - `gambit:erp:packages`
   * GET /api/erp/v1/packages
   * Operation ID: GetPackages
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPackagesResponse(options?: RequestOptions): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/packages",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * CreatePackage
   * Required scope - `gambit:erp:packages`
   * POST /api/erp/v1/packages
   * Operation ID: CreatePackage
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createPackageResponse(
    args: { body: Models.PackageEditableModel },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/packages",
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
   * CreatePackageFull
   * Required scope - `gambit:erp:packages`
   * POST /api/erp/v1/packages/full
   * Operation ID: CreatePackageFull
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createPackageFullResponse(
    args: { body: Models.PackageCreateCommand },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/packages/full",
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
   * GetPublicPackages
   * Required scope - `gambit:public:package:read`
   * GET /api/public/v1/packages
   * Operation ID: GetPublicPackages
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPublicPackagesResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/public/v1/packages",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  return {
    getPackageLookupResponse,
    /**
     * GetPackageLookup
     * Required scope - `gambit:static_data`
     * GET /api/erp/v1/packages/lookup
     * Operation ID: GetPackageLookup
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPackageLookup(
      args: { from: string; to: string },
      options?: RequestOptions,
    ): Promise<Array<Models.PackagesReportsDto>> {
      return transport.read<Array<Models.PackagesReportsDto>>(
        await getPackageLookupResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPackageSecondaryPackagesResponse,
    /**
     * GetPackageSecondaryPackages
     * Required scope - `gambit:erp:packages`
     * GET /api/erp/v1/packages/{packageId}/secondaryPackages
     * Operation ID: GetPackageSecondaryPackages
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPackageSecondaryPackages(
      args: { packageId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.PackageShortDto>> {
      return transport.read<Array<Models.PackageShortDto>>(
        await getPackageSecondaryPackagesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    removePackageSecondaryPackageResponse,
    /**
     * RemovePackageSecondaryPackage
     * Required scope - `gambit:erp:packages`
     * DELETE /api/erp/v1/packages/{packageId}/secondaryPackages/{secondaryPackageId}
     * Operation ID: RemovePackageSecondaryPackage
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async removePackageSecondaryPackage(
      args: { packageId: number; secondaryPackageId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await removePackageSecondaryPackageResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    addPackageSecondaryPackageResponse,
    /**
     * AddPackageSecondaryPackage
     * Required scope - `gambit:erp:packages`
     * POST /api/erp/v1/packages/{packageId}/secondaryPackages/{secondaryPackageId}
     * Operation ID: AddPackageSecondaryPackage
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async addPackageSecondaryPackage(
      args: { packageId: number; secondaryPackageId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await addPackageSecondaryPackageResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getPackageTypeDoctorsResponse,
    /**
     * GetPackageTypeDoctors
     * Required scope - `gambit:erp:packages`
     * GET /api/erp/v1/packages/{packageId}/typeDoctors
     * Operation ID: GetPackageTypeDoctors
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPackageTypeDoctors(
      args: { packageId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.PackageTypeDoctorsModel>> {
      return transport.read<Array<Models.PackageTypeDoctorsModel>>(
        await getPackageTypeDoctorsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    addPackageTypeDoctorResponse,
    /**
     * AddPackageTypeDoctor
     * Required scope - `gambit:erp:packages`
     * POST /api/erp/v1/packages/{packageId}/typeDoctors/{typeDoctorId}
     * Operation ID: AddPackageTypeDoctor
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async addPackageTypeDoctor(
      args: { packageId: number; typeDoctorId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await addPackageTypeDoctorResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    removePackageTypeDoctorResponse,
    /**
     * RemovePackageTypeDoctor
     * Required scope - `gambit:erp:packages`
     * DELETE /api/erp/v1/packages/{packageId}/typeDoctors/{typeDoctorId}
     * Operation ID: RemovePackageTypeDoctor
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async removePackageTypeDoctor(
      args: { packageId: number; typeDoctorId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await removePackageTypeDoctorResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getPackageAnalysisComponentsResponse,
    /**
     * GetPackageAnalysisComponents
     * Required scope - `gambit:erp:packages`
     * GET /api/erp/v1/packages/{packageId}/analysisComponents
     * Operation ID: GetPackageAnalysisComponents
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPackageAnalysisComponents(
      args: { packageId: number },
      options?: RequestOptions,
    ): Promise<Array<Models.PackageAnalysisComponentsModel>> {
      return transport.read<Array<Models.PackageAnalysisComponentsModel>>(
        await getPackageAnalysisComponentsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    addPackageAnalysisComponentResponse,
    /**
     * AddPackageAnalysisComponent
     * Required scope - `gambit:erp:packages`
     * POST /api/erp/v1/packages/{packageId}/analysisComponents/{analysisComponentId}
     * Operation ID: AddPackageAnalysisComponent
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async addPackageAnalysisComponent(
      args: {
        packageId: number;
        analysisComponentId: number;
        body: Array<Models.PackageAnalysisComponentsModel>;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await addPackageAnalysisComponentResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    removePackageAnalysisComponentResponse,
    /**
     * RemovePackageAnalysisComponent
     * Required scope - `gambit:erp:packages`
     * PATCH /api/erp/v1/packages/{packageId}/analysisComponents/{analysisComponentId}
     * Operation ID: RemovePackageAnalysisComponent
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async removePackageAnalysisComponent(
      args: {
        packageId: number;
        analysisComponentId: number;
        body: Array<Models.PackageAnalysisComponentsModel>;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await removePackageAnalysisComponentResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    reorderPackageAnalysisComponentsResponse,
    /**
     * ReorderPackageAnalysisComponents
     * Required scope - `gambit:erp:packages`
     * PATCH /api/erp/v1/packages/{packageId}/analysisComponents/reorder
     * Operation ID: ReorderPackageAnalysisComponents
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async reorderPackageAnalysisComponents(
      args: {
        packageId: number;
        body: Array<Models.PackageAnalysisComponentsModel>;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await reorderPackageAnalysisComponentsResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getPackageResponse,
    /**
     * GetPackage
     * Required scope - `gambit:erp:packages`
     * GET /api/erp/v1/packages/{id}
     * Operation ID: GetPackage
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPackage(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.PackageInformationModel> {
      return transport.read<Models.PackageInformationModel>(
        await getPackageResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    deletePackageResponse,
    /**
     * DeletePackage
     * Required scope - `gambit:erp:packages`
     * DELETE /api/erp/v1/packages/{id}
     * Operation ID: DeletePackage
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deletePackage(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deletePackageResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    updatePackageResponse,
    /**
     * UpdatePackage
     * Required scope - `gambit:erp:packages`
     * PUT /api/erp/v1/packages/{id}
     * Operation ID: UpdatePackage
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updatePackage(
      args: { id: number; body: Models.PackageEditableModel },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updatePackageResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getPackageByCodeResponse,
    /**
     * GetPackageByCode
     * Required scope - `gambit:erp:packages`
     * GET /api/erp/v1/packages/by/code/{code}
     * Operation ID: GetPackageByCode
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPackageByCode(
      args: { code: string },
      options?: RequestOptions,
    ): Promise<Models.PackageInformationModel> {
      return transport.read<Models.PackageInformationModel>(
        await getPackageByCodeResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPackagesResponse,
    /**
     * GetPackages
     * Required scope - `gambit:erp:packages`
     * GET /api/erp/v1/packages
     * Operation ID: GetPackages
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPackages(
      options?: RequestOptions,
    ): Promise<Array<Models.PackageInformationModel>> {
      return transport.read<Array<Models.PackageInformationModel>>(
        await getPackagesResponse(options),
        { "200": { kind: "json" } },
      );
    },
    createPackageResponse,
    /**
     * CreatePackage
     * Required scope - `gambit:erp:packages`
     * POST /api/erp/v1/packages
     * Operation ID: CreatePackage
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createPackage(
      args: { body: Models.PackageEditableModel },
      options?: RequestOptions,
    ): Promise<number> {
      return transport.read<number>(
        await createPackageResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createPackageFullResponse,
    /**
     * CreatePackageFull
     * Required scope - `gambit:erp:packages`
     * POST /api/erp/v1/packages/full
     * Operation ID: CreatePackageFull
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createPackageFull(
      args: { body: Models.PackageCreateCommand },
      options?: RequestOptions,
    ): Promise<Models.BaseDto> {
      return transport.read<Models.BaseDto>(
        await createPackageFullResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPublicPackagesResponse,
    /**
     * GetPublicPackages
     * Required scope - `gambit:public:package:read`
     * GET /api/public/v1/packages
     * Operation ID: GetPublicPackages
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPublicPackages(
      options?: RequestOptions,
    ): Promise<Array<Models.PackageShortDto>> {
      return transport.read<Array<Models.PackageShortDto>>(
        await getPublicPackagesResponse(options),
        { "200": { kind: "json" } },
      );
    },
  };
}
