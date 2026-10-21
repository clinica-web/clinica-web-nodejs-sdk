// Generated from openapi/swagger.json and sdk-config.json. Do not edit.
import type * as Models from "../../models";
import type { Transport, RequestOptions } from "../../transport/transport";

export function createMainWebhooks(transport: Transport) {
  /**
   * GetWebhooks
   * Required scope - `gambit:webhooks`
   * GET /api/webhooks
   * Operation ID: GetWebhooks
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getWebhooksResponse(options?: RequestOptions): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/webhooks",
        parameters: [],
        accept: "application/json",
      },
      {},
      options,
    );
  }
  /**
   * CreateWebhook
   * Required scope - `gambit:webhooks`
   *
   * Trigger types:
   *
   *  - PrerecordCreated = 0 fire on prerecord creation
   *
   *  - PrerecordDeleted = 1 fire on prerecord deletion
   *
   *  - PrerecordUpdated = 2 fire on prerecord update
   *
   *  - PatientCreated = 3 fire on patient creation
   *
   *  - PatientUpdated = 4 fire on patient update
   *
   *  - OrderAdded = 5 fire on order addition
   *
   *  - OrderUpdated = 6 fire on order update
   *
   *  - OrderDeleted = 7 fire on order deletion
   *
   *  - Fiscalization = 8 fire on fiscalization
   *
   *  - ProtocolUpdated = 9 fire on protocol update (when user presses Save button)
   *
   *  - ReferralSalepackPackageCreated = 10 fire on referral salepack package creation
   *
   *  - ReferralSalepackPackageDeleted = 11 fire on referral salepack package deletion
   *
   *  - ReferralSalepackPackageUpdated = 12 fire on referral salepack package update
   *
   *  - ProtocolDrugCreated = 13 fire on ERP protocol drug creation
   *
   *  - ProtocolDrugDeleted = 14 fire on ERP protocol drug deletion
   *
   *  - ProtocolDrugUpdated = 15 fire on ERP protocol drug update
   *
   *  - ProtocolMonitoringAssignmentCreated = 16 fire on ERP monitoring assignment creation
   *
   *  - ProtocolMonitoringAssignmentDeleted = 17 fire on ERP monitoring assignment deletion
   *
   *  - ProtocolMonitoringAssignmentUpdated = 18 fire on ERP monitoring assignment update
   *
   * You can specify secret token `SecretToken` to be used for webhook authentication, value will be passed in the `X-ClinicaWeb-Token` header.
   *
   * Note that after any changes in webhooks will be applied within 5 minutes.
   *
   * Endpoint returns the Id of the created webhook
   * POST /api/webhooks
   * Operation ID: CreateWebhook
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function createWebhookResponse(
    args: { body: Models.WebhookEditModel },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/webhooks",
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
   * GetWebhookById
   * Required scope - `gambit:webhooks`
   * GET /api/webhooks/{id}
   * Operation ID: GetWebhookById
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function getWebhookByIdResponse(
    args: { id: string },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "GET",
        path: "/api/webhooks/{id}",
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
   * DeleteWebhook
   * Required scope - `gambit:webhooks`
   * DELETE /api/webhooks/{id}
   * Operation ID: DeleteWebhook
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function deleteWebhookResponse(
    args: { id: string },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "DELETE",
        path: "/api/webhooks/{id}",
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
   * UpdateWebhook
   * Required scope - `gambit:webhooks`
   * PUT /api/webhooks/{id}
   * Operation ID: UpdateWebhook
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function updateWebhookResponse(
    args: { id: string; body: Models.WebhookEditModel },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "PUT",
        path: "/api/webhooks/{id}",
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
   * webhook endpoint example
   * Required scope - `gambit:webhooks`
   *
   * The webhook handlers should follow this endpoint example.
   *
   * The application will send a `POST` request to the configured uri with the body of the request being the `WebhookUpdateEvent` object.
   *
   * Not every field in the `WebhookUpdateEvent` object will be populated, only the fields that are relevant to the trigger that caused the webhook to be called.
   *
   * In case of triggers:
   *
   *  - PrerecordCreated = 0
   *
   *  - PrerecordDeleted = 1
   *
   *  - PrerecordUpdated = 2
   *
   * field 'Prerecord' will be populated, but other fields will be null.
   *
   * ProtocolDrugCreated/Deleted/Updated populate 'ProtocolDrug' with the shared REST response, including
   * 'patientId', 'protocolId' and 'del'. ProtocolMonitoringAssignmentCreated/Deleted/Updated populate
   * 'ProtocolMonitoringAssignment', including 'PatientId', 'ProtocolId' and 'Del'. Deletion payloads include
   * the soft-deleted record. Unrelated payload fields are omitted.
   *
   * These events are published after successful ERP mutations through the internal notification bus.
   * Legacy drug add and OData mutations do not publish these events. Payloads contain the saved state
   * when the background worker reads the record.
   *
   * In case of any failures, application will try to send request **10** times with **1** seconds delay between each try.
   *
   * POST /api/webhooks/dummy
   * Operation ID: HandleExampleWebhook
   * Raw response: caller consumes or cancels the body, including HTTP errors.
   */
  function handleExampleWebhookResponse(
    args: { body: Models.WebhookUpdateEvent },
    options?: RequestOptions,
  ): Promise<Response> {
    return transport.request(
      {
        method: "POST",
        path: "/api/webhooks/dummy",
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
    getWebhooksResponse,
    /**
     * GetWebhooks
     * Required scope - `gambit:webhooks`
     * GET /api/webhooks
     * Operation ID: GetWebhooks
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getWebhooks(
      options?: RequestOptions,
    ): Promise<Array<Models.WebhookDescription>> {
      return transport.read<Array<Models.WebhookDescription>>(
        await getWebhooksResponse(options),
        { "200": { kind: "json" } },
      );
    },
    createWebhookResponse,
    /**
     * CreateWebhook
     * Required scope - `gambit:webhooks`
     *
     * Trigger types:
     *
     *  - PrerecordCreated = 0 fire on prerecord creation
     *
     *  - PrerecordDeleted = 1 fire on prerecord deletion
     *
     *  - PrerecordUpdated = 2 fire on prerecord update
     *
     *  - PatientCreated = 3 fire on patient creation
     *
     *  - PatientUpdated = 4 fire on patient update
     *
     *  - OrderAdded = 5 fire on order addition
     *
     *  - OrderUpdated = 6 fire on order update
     *
     *  - OrderDeleted = 7 fire on order deletion
     *
     *  - Fiscalization = 8 fire on fiscalization
     *
     *  - ProtocolUpdated = 9 fire on protocol update (when user presses Save button)
     *
     *  - ReferralSalepackPackageCreated = 10 fire on referral salepack package creation
     *
     *  - ReferralSalepackPackageDeleted = 11 fire on referral salepack package deletion
     *
     *  - ReferralSalepackPackageUpdated = 12 fire on referral salepack package update
     *
     *  - ProtocolDrugCreated = 13 fire on ERP protocol drug creation
     *
     *  - ProtocolDrugDeleted = 14 fire on ERP protocol drug deletion
     *
     *  - ProtocolDrugUpdated = 15 fire on ERP protocol drug update
     *
     *  - ProtocolMonitoringAssignmentCreated = 16 fire on ERP monitoring assignment creation
     *
     *  - ProtocolMonitoringAssignmentDeleted = 17 fire on ERP monitoring assignment deletion
     *
     *  - ProtocolMonitoringAssignmentUpdated = 18 fire on ERP monitoring assignment update
     *
     * You can specify secret token `SecretToken` to be used for webhook authentication, value will be passed in the `X-ClinicaWeb-Token` header.
     *
     * Note that after any changes in webhooks will be applied within 5 minutes.
     *
     * Endpoint returns the Id of the created webhook
     * POST /api/webhooks
     * Operation ID: CreateWebhook
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async createWebhook(
      args: { body: Models.WebhookEditModel },
      options?: RequestOptions,
    ): Promise<string> {
      return transport.read<string>(
        await createWebhookResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    getWebhookByIdResponse,
    /**
     * GetWebhookById
     * Required scope - `gambit:webhooks`
     * GET /api/webhooks/{id}
     * Operation ID: GetWebhookById
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async getWebhookById(
      args: { id: string },
      options?: RequestOptions,
    ): Promise<Models.WebhookDetails> {
      return transport.read<Models.WebhookDetails>(
        await getWebhookByIdResponse(args, options),
        { "200": { kind: "json" } },
      );
    },
    deleteWebhookResponse,
    /**
     * DeleteWebhook
     * Required scope - `gambit:webhooks`
     * DELETE /api/webhooks/{id}
     * Operation ID: DeleteWebhook
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async deleteWebhook(
      args: { id: string },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await deleteWebhookResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    updateWebhookResponse,
    /**
     * UpdateWebhook
     * Required scope - `gambit:webhooks`
     * PUT /api/webhooks/{id}
     * Operation ID: UpdateWebhook
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async updateWebhook(
      args: { id: string; body: Models.WebhookEditModel },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await updateWebhookResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
    handleExampleWebhookResponse,
    /**
     * webhook endpoint example
     * Required scope - `gambit:webhooks`
     *
     * The webhook handlers should follow this endpoint example.
     *
     * The application will send a `POST` request to the configured uri with the body of the request being the `WebhookUpdateEvent` object.
     *
     * Not every field in the `WebhookUpdateEvent` object will be populated, only the fields that are relevant to the trigger that caused the webhook to be called.
     *
     * In case of triggers:
     *
     *  - PrerecordCreated = 0
     *
     *  - PrerecordDeleted = 1
     *
     *  - PrerecordUpdated = 2
     *
     * field 'Prerecord' will be populated, but other fields will be null.
     *
     * ProtocolDrugCreated/Deleted/Updated populate 'ProtocolDrug' with the shared REST response, including
     * 'patientId', 'protocolId' and 'del'. ProtocolMonitoringAssignmentCreated/Deleted/Updated populate
     * 'ProtocolMonitoringAssignment', including 'PatientId', 'ProtocolId' and 'Del'. Deletion payloads include
     * the soft-deleted record. Unrelated payload fields are omitted.
     *
     * These events are published after successful ERP mutations through the internal notification bus.
     * Legacy drug add and OData mutations do not publish these events. Payloads contain the saved state
     * when the background worker reads the record.
     *
     * In case of any failures, application will try to send request **10** times with **1** seconds delay between each try.
     *
     * POST /api/webhooks/dummy
     * Operation ID: HandleExampleWebhook
     * Throws ApiError for HTTP failure; network, abort and parse errors propagate.
     */
    async handleExampleWebhook(
      args: { body: Models.WebhookUpdateEvent },
      options?: RequestOptions,
    ): Promise<unknown> {
      return transport.read<unknown>(
        await handleExampleWebhookResponse(args, options),
        { "200": { kind: "unknown" } },
      );
    },
  };
}
