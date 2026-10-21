import { createClinicaClient, type ERPClinicEditModel } from "@clinica-web/sdk";
import { createClientCredentialsProvider } from "@clinica-web/sdk/auth";

const provider = createClientCredentialsProvider({
  clientId: "test",
  clientSecret: "test",
  scopes: ["gambit:erp:clinics"],
});
const client = createClinicaClient({
  baseUrl: "https://example.test",

  accessToken: (options) => provider.getAccessToken(options),
});
const clinic: ERPClinicEditModel = {
  CityId: 0,
  NameClinic: "Clinic",
  LocalNameClinic: "C",
  Prefix: null,
  IsOnline: false,
};
void client.clinics.update({ clinicId: 1, clinic });
// @ts-expect-error Full entity writes require required schema fields.
void client.clinics.update({ clinicId: 1, clinic: { IsOnline: true } });
const invalid: ERPClinicEditModel = {
  // @ts-expect-error A nullable optional field does not make a required field nullable.
  CityId: null,
  NameClinic: "C",
  LocalNameClinic: "C",
};
void invalid;

void client.online.doctors.getOnlineDoctors();
void client.referring.getReferringDoctorDirections();
// @ts-expect-error Area APIs are nested, not exposed as root resources.
void client.doctors.getOnlineDoctors();
// @ts-expect-error Route identifiers stay required.
void client.patients.getAnalysisConclusion({ patientId: 1 });
