// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainPrices(transport: Transport) {
  /**
   * GetPrices
   * Required scope - `gambit:erp:prices`
   * GET /api/erp/v1/prices
   * Operation ID: GetPrices
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPricesResponse(options?: RequestOptions): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/prices",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * CreatePrice
   * Required scope - `gambit:erp:prices`
   * POST /api/erp/v1/prices
   * Operation ID: CreatePrice
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createPriceResponse(
    args: { body: Models.ERPPrice },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/erp/v1/prices",
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
   * GetPrice
   * Required scope - `gambit:erp:prices`
   * GET /api/erp/v1/prices/{id}
   * Operation ID: GetPrice
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPriceResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/prices/{id}",
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
   * DeletePrice
   * Required scope - `gambit:erp:prices`
   * DELETE /api/erp/v1/prices/{id}
   * Operation ID: DeletePrice
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deletePriceResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/prices/{id}",
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
   * UpdatePrice
   * Required scope - `gambit:erp:prices`
   * PUT /api/erp/v1/prices/{id}
   * Operation ID: UpdatePrice
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updatePriceResponse(
    args: { id: number; body: Models.ERPPrice },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/erp/v1/prices/{id}",
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
   * GetPriceViewModel
   * Required scope - `gambit:erp:prices`
   * GET /api/erp/v1/prices/{id}/view
   * Operation ID: GetPriceViewModel
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPriceViewModelResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/prices/{id}/view",
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
   * DeletePriceClinic
   * Required scope - `gambit:erp:prices`
   * DELETE /api/erp/v1/prices/{id}/clinics/{clinicId}
   * Operation ID: DeletePriceClinic
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deletePriceClinicResponse(
    args: { id: number; clinicId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/erp/v1/prices/{id}/clinics/{clinicId}",
        parameters: [
          {
            name: "id",
            field: "id",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "clinicId",
            field: "clinicId",
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
   * AddPriceClinic
   * Required scope - `gambit:erp:prices`
   * PATCH /api/erp/v1/prices/{id}/clinics/{clinicId}
   * Operation ID: AddPriceClinic
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function addPriceClinicResponse(
    args: { id: number; clinicId: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PATCH",
        path: "/api/erp/v1/prices/{id}/clinics/{clinicId}",
        parameters: [
          {
            name: "id",
            field: "id",
            in: "path",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "clinicId",
            field: "clinicId",
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
   * GetPriceClinics
   * Required scope - `gambit:erp:prices`
   * GET /api/erp/v1/prices/{id}/clinics
   * Operation ID: GetPriceClinics
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPriceClinicsResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/prices/{id}/clinics",
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
   * GetPricePackages
   * Required scope - `gambit:erp:prices`
   * GET /api/erp/v1/prices/{id}/packages
   * Operation ID: GetPricePackages
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPricePackagesResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/prices/{id}/packages",
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
   * GetPriceGroupPackages
   * Required scope - `gambit:erp:prices`
   * GET /api/erp/v1/prices/{id}/groupPackages
   * Operation ID: GetPriceGroupPackages
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getPriceGroupPackagesResponse(
    args: { id: number },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/erp/v1/prices/{id}/groupPackages",
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
   * Returns list of prices for online recording\booking
   * Required scope - `gambit:static_data`
   * GET /clinic-onilne-prices
   * Operation ID: GetBookingPrices
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getBookingPricesResponse(
    args: {
      /**
       * required - clinic identifier
       */ clinicId: number;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/clinic-onilne-prices",
        parameters: [
          {
            name: "ClinicId",
            field: "clinicId",
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
  return {
    getPricesResponse,
    /**
     * GetPrices
     * Required scope - `gambit:erp:prices`
     * GET /api/erp/v1/prices
     * Operation ID: GetPrices
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPrices(options?: RequestOptions): Promise<Array<Models.ERPPrice>> {
      return transport.read<Array<Models.ERPPrice>>(
        await getPricesResponse(options),
        { "200": { kind: "json" } },
      );
    },
    createPriceResponse,
    /**
     * CreatePrice
     * Required scope - `gambit:erp:prices`
     * POST /api/erp/v1/prices
     * Operation ID: CreatePrice
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createPrice(
      args: { body: Models.ERPPrice },
      options?: RequestOptions,
    ): Promise<Models.BaseDto> {
      return transport.read<Models.BaseDto>(
        await createPriceResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPriceResponse,
    /**
     * GetPrice
     * Required scope - `gambit:erp:prices`
     * GET /api/erp/v1/prices/{id}
     * Operation ID: GetPrice
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPrice(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Models.ERPPrice> {
      return transport.read<Models.ERPPrice>(
        await getPriceResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    deletePriceResponse,
    /**
     * DeletePrice
     * Required scope - `gambit:erp:prices`
     * DELETE /api/erp/v1/prices/{id}
     * Operation ID: DeletePrice
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deletePrice(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(await deletePriceResponse(args, options), {
        "200": { kind: "unknown" },
      });
    },
    updatePriceResponse,
    /**
     * UpdatePrice
     * Required scope - `gambit:erp:prices`
     * PUT /api/erp/v1/prices/{id}
     * Operation ID: UpdatePrice
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updatePrice(
      args: { id: number; body: Models.ERPPrice },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(await updatePriceResponse(args, options), {
        "200": { kind: "unknown" },
      });
    },
    getPriceViewModelResponse,
    /**
     * GetPriceViewModel
     * Required scope - `gambit:erp:prices`
     * GET /api/erp/v1/prices/{id}/view
     * Operation ID: GetPriceViewModel
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPriceViewModel(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Array<Models.OnlinePriceViewModel>> {
      return transport.read<Array<Models.OnlinePriceViewModel>>(
        await getPriceViewModelResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    deletePriceClinicResponse,
    /**
     * DeletePriceClinic
     * Required scope - `gambit:erp:prices`
     * DELETE /api/erp/v1/prices/{id}/clinics/{clinicId}
     * Operation ID: DeletePriceClinic
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deletePriceClinic(
      args: { id: number; clinicId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deletePriceClinicResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    addPriceClinicResponse,
    /**
     * AddPriceClinic
     * Required scope - `gambit:erp:prices`
     * PATCH /api/erp/v1/prices/{id}/clinics/{clinicId}
     * Operation ID: AddPriceClinic
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async addPriceClinic(
      args: { id: number; clinicId: number },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await addPriceClinicResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    getPriceClinicsResponse,
    /**
     * GetPriceClinics
     * Required scope - `gambit:erp:prices`
     * GET /api/erp/v1/prices/{id}/clinics
     * Operation ID: GetPriceClinics
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPriceClinics(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Array<Models.ERPPriceClinic>> {
      return transport.read<Array<Models.ERPPriceClinic>>(
        await getPriceClinicsResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPricePackagesResponse,
    /**
     * GetPricePackages
     * Required scope - `gambit:erp:prices`
     * GET /api/erp/v1/prices/{id}/packages
     * Operation ID: GetPricePackages
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPricePackages(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Array<Models.PackageInformationModel>> {
      return transport.read<Array<Models.PackageInformationModel>>(
        await getPricePackagesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getPriceGroupPackagesResponse,
    /**
     * GetPriceGroupPackages
     * Required scope - `gambit:erp:prices`
     * GET /api/erp/v1/prices/{id}/groupPackages
     * Operation ID: GetPriceGroupPackages
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getPriceGroupPackages(
      args: { id: number },
      options?: RequestOptions,
    ): Promise<Array<Models.GroupPackageInformation>> {
      return transport.read<Array<Models.GroupPackageInformation>>(
        await getPriceGroupPackagesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getBookingPricesResponse,
    /**
     * Returns list of prices for online recording\booking
     * Required scope - `gambit:static_data`
     * GET /clinic-onilne-prices
     * Operation ID: GetBookingPrices
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getBookingPrices(
      args: {
        /**
         * required - clinic identifier
         */ clinicId: number;
      },
      options?: RequestOptions,
    ): Promise<Array<Models.OnlinePriceModel>> {
      return transport.read<Array<Models.OnlinePriceModel>>(
        await getBookingPricesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
  };
}
