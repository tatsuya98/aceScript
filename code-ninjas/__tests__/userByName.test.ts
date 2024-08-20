import { testApiHandler } from "next-test-api-route-handler";
import userData from "../app/mongodb/test-data/userData";
import katasData from "../app/mongodb/test-data/katasData";
import { client, db } from "../app/mongodb/connection";
import seed from "../app/mongodb/seed";
import * as appHandler from "../app/api/users/[username]/route";

beforeEach(async () => {
  await client.connect();
  await db.dropDatabase();
  await seed(userData, katasData);
});

afterAll(() => {
  client.close();
});

describe("GET /api/users", () => {
  it("GET 200 : returns the correct user", async () => {
    await testApiHandler({
      appHandler,
      paramsPatcher(params) {
        params.username = "test1";
      },
      async test({ fetch }) {
        const data = await fetch({
          method: "GET",
        });
        const user = await data.json();
        expect(user.username).toBe("test1");
      },
    });
  });
  it("GET 400 : return an error if user does not exist", async () => {
    await testApiHandler({
      appHandler,
      paramsPatcher(params) {
        params.username = "no-user";
      },
      async test({ fetch }) {
        const data = await fetch({
          method: "GET",
        });
        const user = await data.json();
        expect(user.username).toBe("test1");
      },
    });
  });
});
