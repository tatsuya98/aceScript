import { testApiHandler } from "next-test-api-route-handler";
import userData from "../app/mongodb/test-data/userData";
import katasData from "../app/mongodb/test-data/katasData";
import { client } from "../app/mongodb/connection";
import seed from "../app/mongodb/seed";
import * as appHandler from "../app/api/users/route";

beforeEach(() => {
  return client.connect().then(() => {
    return seed(userData, katasData);
  });
});

afterAll(() => {
  client.close();
});

describe("GET /api/users", () => {
  it("GET 200 : returns all users from db", async () => {
    await testApiHandler({
      appHandler,

      async test({ fetch }) {
        const data = await fetch({ method: "GET" });
        const { response } = await data.json();
        response.forEach((user: Record<string, any>) => {
          expect(user).toEqual({
            username: expect.any(String),
            _id: expect.any(String),
            password: expect.any(String),
            problems_solved: expect.any(Array),
            avatar_url: expect.any(String),
          });
        });
      },
    });
  });
});
