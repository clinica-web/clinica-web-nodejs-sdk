// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainLaboratories(transport: Transport) {
  /**
   * GetLaboratories
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/laboratories
   * Operation ID: GetLaboratories
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getLaboratoriesResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/laboratories",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * GetLaboratoryById
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/laboratories/{id}
   * Operation ID: GetLaboratoryById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getLaboratoryByIdResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/laboratories/{id}",
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
   * GetPackageLaboratoriesMap
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/laboratories/packagesMap
   * Operation ID: GetPackageLaboratoriesMap
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPackageLaboratoriesMapResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/laboratories/packagesMap",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * GetPackageLaboratoriesMapByPackageIds
   * Required scope - `gambit:erp`
   * POST /api/erp/v1/laboratories/packagesMap
   * Operation ID: GetPackageLaboratoriesMapByPackageIds
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPackageLaboratoriesMapByPackageIdsResponse(
    args: { body: Array<number> },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/laboratories/packagesMap",
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
   * GetLaboratoryPackages
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/laboratories/{id}/packages
   * Operation ID: GetLaboratoryPackages
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getLaboratoryPackagesResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/laboratories/{id}/packages",
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
   * GetLaboratoryPackagesCost
   * Required scope - `gambit:erp`
   * GET /api/erp/v1/laboratories/{id}/laboratoryPackagesCost
   * Operation ID: GetLaboratoryPackagesCost
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getLaboratoryPackagesCostResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/laboratories/{id}/laboratoryPackagesCost",
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
   * CreateLaboratoryOrderAnalysisCodes
   * Required scope - `gambit:lab_client`
   * POST /api/v1/laboratory/integration/create-analysis-code
   * Operation ID: CreateLaboratoryOrderAnalysisCodes
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createLaboratoryOrderAnalysisCodesResponse(
    args: { body: Models.CreateExternalAnalysisGroupCodesRequest },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/v1/laboratory/integration/create-analysis-code",
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
   * CreateLaboratoryOrder
   * Required scope - `gambit:lab_client`
   * POST /api/v1/laboratory/integration/create-order
   * Operation ID: CreateLaboratoryOrder
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createLaboratoryOrderResponse(
    args: { body: Models.PublicExternalOrderPackage },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/v1/laboratory/integration/create-order",
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
   * GetLaboratoryIntegrationPriceList
   * Required scope - `gambit:lab_client`
   * GET /api/v1/laboratory/integration/price
   * Operation ID: GetLaboratoryIntegrationPriceList
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getLaboratoryIntegrationPriceListResponse(
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/v1/laboratory/integration/price",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  return {
    getLaboratoriesResponse,
    /**
     * GetLaboratories
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/laboratories
     * Operation ID: GetLaboratories
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getLaboratories(
      options?: RequestOptions,
    ): Promise<Array<Models.BaseDto>> {
      return transport.read<Array<Models.BaseDto>>(
        await getLaboratoriesResponse(options),
        { "200": { kind: "json" } },
      );
    },
    getLaboratoryByIdResponse,
    /**
     * GetLaboratoryById
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/laboratories/{id}
     * Operation ID: GetLaboratoryById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getLaboratoryById(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.BaseDto> {
      return transport.read<Models.BaseDto>(
        await getLaboratoryByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPackageLaboratoriesMapResponse,
    /**
     * GetPackageLaboratoriesMap
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/laboratories/packagesMap
     * Operation ID: GetPackageLaboratoriesMap
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPackageLaboratoriesMap(
      options?: RequestOptions,
    ): Promise<Array<Models.PackageLaboratoryDto>> {
      return transport.read<Array<Models.PackageLaboratoryDto>>(
        await getPackageLaboratoriesMapResponse(options),
        { "200": { kind: "json" } },
      );
    },
    getPackageLaboratoriesMapByPackageIdsResponse,
    /**
     * GetPackageLaboratoriesMapByPackageIds
     * Required scope - `gambit:erp`
     * POST /api/erp/v1/laboratories/packagesMap
     * Operation ID: GetPackageLaboratoriesMapByPackageIds
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPackageLaboratoriesMapByPackageIds(
      args: { body: Array<number> },
      options?: RequestOptions,
    ): Promise<Array<Models.PackageLaboratoryDto>> {
      return transport.read<Array<Models.PackageLaboratoryDto>>(
        await getPackageLaboratoriesMapByPackageIdsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getLaboratoryPackagesResponse,
    /**
     * GetLaboratoryPackages
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/laboratories/{id}/packages
     * Operation ID: GetLaboratoryPackages
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getLaboratoryPackages(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Array<Models.PackageInformationModel>> {
      return transport.read<Array<Models.PackageInformationModel>>(
        await getLaboratoryPackagesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getLaboratoryPackagesCostResponse,
    /**
     * GetLaboratoryPackagesCost
     * Required scope - `gambit:erp`
     * GET /api/erp/v1/laboratories/{id}/laboratoryPackagesCost
     * Operation ID: GetLaboratoryPackagesCost
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getLaboratoryPackagesCost(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Array<Models.LaboratoryPackageCostModel>> {
      return transport.read<Array<Models.LaboratoryPackageCostModel>>(
        await getLaboratoryPackagesCostResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createLaboratoryOrderAnalysisCodesResponse,
    /**
     * CreateLaboratoryOrderAnalysisCodes
     * Required scope - `gambit:lab_client`
     * POST /api/v1/laboratory/integration/create-analysis-code
     * Operation ID: CreateLaboratoryOrderAnalysisCodes
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createLaboratoryOrderAnalysisCodes(
      args: { body: Models.CreateExternalAnalysisGroupCodesRequest },
      options?: RequestOptions,
    ): Promise<Models.CreateExternalAnalysisCodeResponse> {
      return transport.read<Models.CreateExternalAnalysisCodeResponse>(
        await createLaboratoryOrderAnalysisCodesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createLaboratoryOrderResponse,
    /**
     * CreateLaboratoryOrder
     * Required scope - `gambit:lab_client`
     * POST /api/v1/laboratory/integration/create-order
     * Operation ID: CreateLaboratoryOrder
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createLaboratoryOrder(
      args: { body: Models.PublicExternalOrderPackage },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await createLaboratoryOrderResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getLaboratoryIntegrationPriceListResponse,
    /**
     * GetLaboratoryIntegrationPriceList
     * Required scope - `gambit:lab_client`
     * GET /api/v1/laboratory/integration/price
     * Operation ID: GetLaboratoryIntegrationPriceList
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getLaboratoryIntegrationPriceList(
      options?: RequestOptions,
    ): Promise<Array<Models.OnlinePriceViewModel>> {
      return transport.read<Array<Models.OnlinePriceViewModel>>(
        await getLaboratoryIntegrationPriceListResponse(options),
        { "200": { kind: "json" } },
      );
    },
  };
}
