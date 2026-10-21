// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainReferralSalepackPackages(transport: Transport) {
  /**
   * SearchReferralSalepackPackages
   *
   * POST /api/referralSalepackPackages/search
   * Operation ID: SearchReferralSalepackPackages
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function searchReferralSalepackPackagesResponse(
    args: { body: Models.PackagesForPatientSearchDto },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/referralSalepackPackages/search",
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
   * AddReferralSalepackPackage
   *
   * POST /api/referralSalepackPackages
   * Operation ID: AddReferralSalepackPackage
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function addReferralSalepackPackageResponse(
    args: { body: Models.AddPatientPackageRequestModel },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/referralSalepackPackages",
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
   * DeleteReferralSalepackPackage
   *
   * DELETE /api/referralSalepackPackages
   * Operation ID: DeleteReferralSalepackPackage
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteReferralSalepackPackageResponse(
    args: {
      id: number;
      /**
       * Values:
       *
       * - `0`: CorrectionOfAppointments
       *
       * - `1`: PatientRefusal
       *
       * - `2`: AlreadyDone
       *
       *
       */ removeReasonId?: Models.RemoveReferalSalepackPackageReason;
    },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/referralSalepackPackages",
        parameters: [
          {
            name: "id",
            field: "id",
            in: "query",
            required: true,
            array: false,
            explode: true,
          },
          {
            name: "RemoveReasonId",
            field: "removeReasonId",
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
   * AddReferralSalepackPackageByIcdIds
   *
   * POST /api/referralSalepackPackages/icd
   * Operation ID: AddReferralSalepackPackageByIcdIds
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function addReferralSalepackPackageByIcdIdsResponse(
    args: { body: Models.AddReferalSalepackPackageByIcd10RequestModel },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/referralSalepackPackages/icd",
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
    searchReferralSalepackPackagesResponse,
    /**
     * SearchReferralSalepackPackages
     *
     * POST /api/referralSalepackPackages/search
     * Operation ID: SearchReferralSalepackPackages
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async searchReferralSalepackPackages(
      args: { body: Models.PackagesForPatientSearchDto },
      options?: RequestOptions,
    ): Promise<Array<Models.UserTyperDoctorsPackageModel>> {
      return transport.read<Array<Models.UserTyperDoctorsPackageModel>>(
        await searchReferralSalepackPackagesResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    addReferralSalepackPackageResponse,
    /**
     * AddReferralSalepackPackage
     *
     * POST /api/referralSalepackPackages
     * Operation ID: AddReferralSalepackPackage
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async addReferralSalepackPackage(
      args: { body: Models.AddPatientPackageRequestModel },
      options?: RequestOptions,
    ): Promise<Models.PatientPackagesDto> {
      return transport.read<Models.PatientPackagesDto>(
        await addReferralSalepackPackageResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    deleteReferralSalepackPackageResponse,
    /**
     * DeleteReferralSalepackPackage
     *
     * DELETE /api/referralSalepackPackages
     * Operation ID: DeleteReferralSalepackPackage
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteReferralSalepackPackage(
      args: {
        id: number;
        /**
         * Values:
         *
         * - `0`: CorrectionOfAppointments
         *
         * - `1`: PatientRefusal
         *
         * - `2`: AlreadyDone
         *
         *
         */ removeReasonId?: Models.RemoveReferalSalepackPackageReason;
      },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteReferralSalepackPackageResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    addReferralSalepackPackageByIcdIdsResponse,
    /**
     * AddReferralSalepackPackageByIcdIds
     *
     * POST /api/referralSalepackPackages/icd
     * Operation ID: AddReferralSalepackPackageByIcdIds
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async addReferralSalepackPackageByIcdIds(
      args: { body: Models.AddReferalSalepackPackageByIcd10RequestModel },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await addReferralSalepackPackageByIcdIdsResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
