// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainDrugs(transport: Transport) {
  /**
   * SearchDrugs
   * Required scope - `gambit:static_data`
   * GET /api/erp/v1/drugs
   * Operation ID: SearchDrugs
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function searchDrugsResponse(
    args: { search?: string } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/drugs",
        parameters: [
          {
            name: "search",
            field: "search",
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
   * CreateDrug
   * Required scope - `gambit:static_data`
   * POST /api/erp/v1/drugs
   * Operation ID: CreateDrug
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createDrugResponse(
    args: { body: Models.DrugDto },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/drugs",
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
   * SearchCatalogDrugs
   * Required scope - `gambit:static_data`
   * GET /api/erp/v1/drugs/catalog/search
   * Operation ID: SearchCatalogDrugs
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function searchCatalogDrugsResponse(
    args: { search?: string } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/drugs/catalog/search",
        parameters: [
          {
            name: "search",
            field: "search",
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
   * SearchDrugCatalog
   * Required scope - `gambit:static_data`
   * GET /api/erp/v1/drugs/catalog
   * Operation ID: SearchDrugCatalog
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function searchDrugCatalogResponse(
    args: {
      q?: string;
      atc?: string;
      medicationForm?: string;
      manufacturer?: string;
      programId?: string;
      registryStatus?: string;
      /**
       * Values:
       *
       * - `0`: None
       *
       * - `1`: EhealthMedication
       *
       * - `2`: ReestrCsv
       *
       * - `4`: Pills
       *
       *
       */ sourceFlags?: Models.MedicationCatalogSourceFlags;
      limit?: number;
    } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/drugs/catalog",
        parameters: [
          {
            name: "q",
            field: "q",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "atc",
            field: "atc",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "medicationForm",
            field: "medicationForm",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "manufacturer",
            field: "manufacturer",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "programId",
            field: "programId",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "registryStatus",
            field: "registryStatus",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "sourceFlags",
            field: "sourceFlags",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "limit",
            field: "limit",
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
   * AutocompleteDrugCatalog
   * Required scope - `gambit:static_data`
   * GET /api/erp/v1/drugs/catalog/autocomplete
   * Operation ID: AutocompleteDrugCatalog
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function autocompleteDrugCatalogResponse(
    args: { text?: string; language?: string } = {},
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/drugs/catalog/autocomplete",
        parameters: [
          {
            name: "text",
            field: "text",
            in: "query",
            required: false,
            array: false,
            explode: true,
          },
          {
            name: "language",
            field: "language",
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
   * GetDrugCatalogMedication
   * Required scope - `gambit:static_data`
   * GET /api/erp/v1/drugs/catalog/{stableId}
   * Operation ID: GetDrugCatalogMedication
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getDrugCatalogMedicationResponse(
    args: { stableId: string },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/drugs/catalog/{stableId}",
        parameters: [
          {
            name: "stableId",
            field: "stableId",
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
    searchDrugsResponse,
    /**
     * SearchDrugs
     * Required scope - `gambit:static_data`
     * GET /api/erp/v1/drugs
     * Operation ID: SearchDrugs
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async searchDrugs(
      args: { search?: string } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.DrugDto>> {
      return transport.read<Array<Models.DrugDto>>(
        await searchDrugsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    createDrugResponse,
    /**
     * CreateDrug
     * Required scope - `gambit:static_data`
     * POST /api/erp/v1/drugs
     * Operation ID: CreateDrug
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createDrug(
      args: { body: Models.DrugDto },
      options?: RequestOptions,
    ): Promise<Models.DrugDto> {
      return transport.read<Models.DrugDto>(
        await createDrugResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    searchCatalogDrugsResponse,
    /**
     * SearchCatalogDrugs
     * Required scope - `gambit:static_data`
     * GET /api/erp/v1/drugs/catalog/search
     * Operation ID: SearchCatalogDrugs
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async searchCatalogDrugs(
      args: { search?: string } = {},
      options?: RequestOptions,
    ): Promise<Array<Models.DrugDto>> {
      return transport.read<Array<Models.DrugDto>>(
        await searchCatalogDrugsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    searchDrugCatalogResponse,
    /**
     * SearchDrugCatalog
     * Required scope - `gambit:static_data`
     * GET /api/erp/v1/drugs/catalog
     * Operation ID: SearchDrugCatalog
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async searchDrugCatalog(
      args: {
        q?: string;
        atc?: string;
        medicationForm?: string;
        manufacturer?: string;
        programId?: string;
        registryStatus?: string;
        /**
         * Values:
         *
         * - `0`: None
         *
         * - `1`: EhealthMedication
         *
         * - `2`: ReestrCsv
         *
         * - `4`: Pills
         *
         *
         */ sourceFlags?: Models.MedicationCatalogSourceFlags;
        limit?: number;
      } = {},
      options?: RequestOptions,
    ): Promise<Models.MedicationCatalogSearchResponse> {
      return transport.read<Models.MedicationCatalogSearchResponse>(
        await searchDrugCatalogResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    autocompleteDrugCatalogResponse,
    /**
     * AutocompleteDrugCatalog
     * Required scope - `gambit:static_data`
     * GET /api/erp/v1/drugs/catalog/autocomplete
     * Operation ID: AutocompleteDrugCatalog
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async autocompleteDrugCatalog(
      args: { text?: string; language?: string } = {},
      options?: RequestOptions,
    ): Promise<Models.MedicationCatalogSearchResponse> {
      return transport.read<Models.MedicationCatalogSearchResponse>(
        await autocompleteDrugCatalogResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getDrugCatalogMedicationResponse,
    /**
     * GetDrugCatalogMedication
     * Required scope - `gambit:static_data`
     * GET /api/erp/v1/drugs/catalog/{stableId}
     * Operation ID: GetDrugCatalogMedication
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getDrugCatalogMedication(
      args: { stableId: string },
      options?: RequestOptions,
    ): Promise<Models.MedicationCatalogDetail> {
      return transport.read<Models.MedicationCatalogDetail>(
        await getDrugCatalogMedicationResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
