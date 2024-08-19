import { testApiHandler } from "next-test-api-route-handler";
import userData from "../app/mongodb/test-data/userData";
import katasData from "../app/mongodb/test-data/katasData";
import { client, db } from "../app/mongodb/connection";
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

describe("api/users", () => {
  it("returns an array of users", () => {
    return client
      .connect()
      .then(() => {
        return db.collection("users").find().toArray();
      })
      .then((res) => {
        res.forEach((user) => {
          expect(typeof user.username).toBe("string");
        });
      });
  });
});
describe("GET /api/users", () => {
  it("does what I want", async () => {
    await testApiHandler({
      appHandler,

      async test({ fetch }) {
        const data = await fetch({ method: "GET" });
        console.log(data);
        const { response } = await data.json();
        console.log(response);
        response.forEach((user) => {
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
