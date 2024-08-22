import { testApiHandler } from "next-test-api-route-handler";
import userData from "../app/mongodb/test-data/userData";
import katasData from "../app/mongodb/test-data/katasData";
import { client } from "../app/mongodb/connection";
import seed from "../app/mongodb/seed";
import * as appHandler from "../app/api/katas/[slug]/route";

beforeEach(async () => {
  await client.connect();
  await seed(userData, katasData);
});

afterAll(() => {
  client.close();
});

describe("GET /api/katas/:slug", () => {
  it("GET 200 : returns the correct kata", async () => {
    await testApiHandler({
      appHandler,
      paramsPatcher(params) {
        params.slug = "test-kata";
      },
      async test({ fetch }) {
        const data = await fetch({
          method: "GET",
        });
        const kata = await data.json();
        expect(kata.slug).toBe("test-kata");
      },
    });
  });
  it("GET 404 : return an error if kata does not exist", async () => {
    await testApiHandler({
      appHandler,
      paramsPatcher(params) {
        params.slug = "no-kata";
      },
      async test({ fetch }) {
        const response = await fetch({
          method: "GET",
        });
        const message = await response.json();
        expect(response.status).toBe(404);
        expect(message).toBe("kata not found");
      },
    });
  });
});
