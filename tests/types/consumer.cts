import { createClinicaClient } from "@clinica-web/sdk";
import { createClientCredentialsProvider } from "@clinica-web/sdk/auth";

const tokens = createClientCredentialsProvider({
  clientId: "test",
  clientSecret: "test",
  scopes: [],
});
const client = createClinicaClient({
  baseUrl: "https://example.test",
  accessToken: (options) => tokens.getAccessToken(options),
});
const response: Promise<Response> = client.clinics.listResponse();
void response;
