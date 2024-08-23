import { createUser } from "../app/api/users/model";
import { testApiHandler } from "next-test-api-route-handler";
import * as appHandler from "../app/api/login/route";
import { client } from "../app/mongodb/connection";
import userData from "../app/mongodb/test-data/userData";
import katasData from "../app/mongodb/test-data/katasData";
import seed from "../app/mongodb/seed";

beforeEach(async () => {
  await client.connect();
  await seed(userData, katasData);
});

afterAll(() => {
  client.close();
});

describe("POST /api/login", () => {
  it("POST 200: successfully returns authenticated user", async () => {
    await testApiHandler({
      appHandler,
      async test({ fetch }) {
        await createUser({ username: "test-user", password: "123456" });
        const response = await fetch({
          method: "POST",
          headers: {
            "content-type": "application/json", // Must use correct content type
          },
          body: JSON.stringify({ username: "test-user", password: "123456" }),
        });
        const { username } = await response.json();
        expect(response.status).toBe(200);
        expect(username).toBe("test-user");
      },
    });
  });
  it("POST 401: throws error for invalid username", async () => {
    await testApiHandler({
      appHandler,
      async test({ fetch }) {
        await createUser({ username: "test-user", password: "123456" });
        const response = await fetch({
          method: "POST",
          headers: {
            "content-type": "application/json", // Must use correct content type
          },
          body: JSON.stringify({
            username: "invalid-username",
            password: "123456",
          }),
        });
        const message = await response.json();
        expect(response.status).toBe(401);
        expect(message).toEqual({ message: "invalid credentials" });
      },
    });
  });
  it("POST 401: throws error for invalid password", async () => {
    await testApiHandler({
      appHandler,
      async test({ fetch }) {
        await createUser({ username: "test-user", password: "123456" });
        const response = await fetch({
          method: "POST",
          headers: {
            "content-type": "application/json", // Must use correct content type
          },
          body: JSON.stringify({
            username: "test-user",
            password: "invalid-password",
          }),
        });
        const message = await response.json();
        expect(response.status).toBe(401);
        expect(message).toEqual({ message: "invalid credentials" });
      },
    });
  });
});
