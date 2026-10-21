import { test } from "node:test";
import assert from "node:assert/strict";
import { build } from "esbuild";
import { Miniflare } from "miniflare";

test(
  "five scenarios, area APIs and auth run in workerd without nodejs_compat",
  { timeout: 30000 },
  async () => {
    const result = await build({
      stdin: {
        resolveDir: process.cwd(),
        contents: `
        import { createClinicaClient } from "./dist/index.js";
        import { createClientCredentialsProvider } from "./dist/auth/index.js";
        export default {
          async fetch(request, env) {
            const fetcher = (input, init) => env.API.fetch(input, init);
            const auth = createClientCredentialsProvider({
              clientId: "test", clientSecret: "test", scopes: ["test"],
              tokenUrl: "https://api.test/connect/token", fetch: fetcher
            });
            const client = createClinicaClient({
              baseUrl: "https://api.test", fetch: fetcher,
              accessToken: options => auth.getAccessToken(options)
            });
            const doctors = await client.online.doctors.getOnlineDoctorsResponse(); await doctors.body?.cancel();
            const directions = await client.referring.getReferringDoctorDirectionsResponse(); await directions.body?.cancel();
            const clinics = await client.clinics.list();
            await client.clinics.update({ clinicId: 1, clinic: {
              CityId: 0, NameClinic: "Test", LocalNameClinic: "T", IsOnline: false, Prefix: null
            } });
            const conclusion = await client.patients.getAnalysisConclusion({ patientId: 1, analysisId: 2 });
            const rows = [];
            for await (const row of client.reports.streamCashDesk({
              dateStart: "2026-01-01", dateEnd: "2026-02-01"
            })) rows.push(row);
            const pdf = await client.patients.printAnalysisResponse({ patientId: 1, analysisId: 2 });
            if (!pdf.ok || pdf.bodyUsed) throw new Error("Invalid raw PDF");
            const forwarded = new Response(pdf.body, { headers: { "Content-Type": "application/pdf" } });
            return Response.json({ clinics, conclusion, rows, pdf: await forwarded.text() });
          }
        };
      `,
      },
      bundle: true,
      write: false,
      platform: "browser",
      format: "esm",
    });
    let tokens = 0;
    let updates = 0;
    const mf = new Miniflare({
      modules: true,
      compatibilityDate: "2026-07-01",
      script: result.outputFiles[0].text,
      serviceBindings: {
        API: async (request) => {
          const path = new URL(request.url).pathname;
          if (path === "/connect/token") {
            tokens++;
            return Response.json({
              access_token: "worker-token",
              token_type: "Bearer",
              expires_in: 3600,
            });
          }
          assert.equal(
            request.headers.get("authorization"),
            "Bearer worker-token",
          );
          if (request.method === "PUT") {
            updates++;
            assert.deepEqual(await request.json(), {
              CityId: 0,
              NameClinic: "Test",
              LocalNameClinic: "T",
              IsOnline: false,
              Prefix: null,
            });
            return new Response(null, { status: 204 });
          }
          if (path.endsWith("/clinics"))
            return Response.json([{ ClinicId: 1 }]);
          if (path.endsWith("/cashDesk"))
            return Response.json([{ BookingId: 7 }, { BookingId: 8 }]);
          if (path.endsWith("/analysis-conclusion"))
            return new Response(Buffer.from("Висновок", "utf16le"), {
              headers: { "Content-Type": "text/plain;charset=UTF-16" },
            });
          if (path.endsWith("/print"))
            return new Response("%PDF-worker", {
              headers: { "Content-Type": "application/pdf" },
            });
          return new Response("unknown", { status: 404 });
        },
      },
    });
    try {
      const response = await mf.dispatchFetch("https://worker.test");
      assert.equal(response.status, 200, await response.clone().text());
      assert.deepEqual(await response.json(), {
        clinics: [{ ClinicId: 1 }],
        conclusion: "Висновок",
        rows: [{ BookingId: 7 }, { BookingId: 8 }],
        pdf: "%PDF-worker",
      });
      assert.equal(tokens, 1);
      assert.equal(updates, 1);
    } finally {
      await mf.dispose();
    }
  },
);
