import { testApiHandler } from "next-test-api-route-handler";
import userData from "../app/mongodb/test-data/userData";
import katasData from "../app/mongodb/test-data/katasData";
import { client, db } from "../app/mongodb/connection";
import seed from "../app/mongodb/seed";
import * as appHandler from "../app/api/users/[username]/route";

beforeEach(async () => {
  await client.connect();
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
  it("GET 404 : return an error if user does not exist", async () => {
    await testApiHandler({
      appHandler,
      paramsPatcher(params) {
        params.username = "no-user";
      },
      async test({ fetch }) {
        const response = await fetch({
          method: "GET",
        });
        const message = await response.json();
        expect(response.status).toBe(404);
        expect(message).toBe("User not found");
      },
    });
  });
});
describe("DELETE /api/users", () => {
  it("DELETE 200: successfully deletes the user", async () => {
    await testApiHandler({
      appHandler,
      paramsPatcher(params) {
        params.username = "test1";
      },
      async test({ fetch }) {
        const response = await fetch({ method: "DELETE" });
        const message = await response.json();
        expect(response.status).toBe(200);
        expect(message).toBe("User Succesfully Deleted");
      },
    });
  });
  it("DELETE 404: throws and error when user does not exist", async () => {
    await testApiHandler({
      appHandler,
      paramsPatcher(params) {
        params.username = "no-user";
      },
      async test({ fetch }) {
        const response = await fetch({ method: "DELETE" });
        const message = await response.json();
        console.log(message);
        expect(response.status).toBe(404);
        expect(message).toBe("User not found");
      },
    });
  });
});
