import { testApiHandler } from "next-test-api-route-handler";
import userData from "../app/mongodb/test-data/userData";
import katasData from "../app/mongodb/test-data/katasData";
import { client } from "../app/mongodb/connection";
import seed from "../app/mongodb/seed";
import * as appHandler from "../app/api/katas/route";

beforeEach(async () => {
  await client.connect();
  await seed(userData, katasData);
});

afterAll(() => {
  client.close();
});

describe("GET /api/katas", () => {
  it("GET 200 : returns all katas from db", async () => {
    await testApiHandler({
      appHandler,

      async test({ fetch }) {
        const data = await fetch({ method: "GET" });
        const { response } = await data.json();
        response.forEach((kata: {}) => {
          expect(kata).toEqual({
            title: expect.any(String),
            _id: expect.any(String),
            slug: expect.any(String),
            description: expect.any(String),
            example: expect.any(String),
            language: expect.any(String),
            difficulty: expect.any(String),
            topic: expect.any(String),
          });
        });
      },
    });
  });
});
