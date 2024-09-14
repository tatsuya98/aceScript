import { testApiHandler } from "next-test-api-route-handler";
import userData from "../app/mongodb/test-data/userData";
import katasData from "../app/mongodb/test-data/katasData";
import { client } from "../app/mongodb/connection";
import seed from "../app/mongodb/seed";
import * as appHandler from "../app/api/sortKatas/route";

beforeEach(async () => {
  await client.connect();
  await seed(userData, katasData);
});

afterAll(() => {
  client.close();
});


describe("/api/sortKatas", () => {
  it("returns all katas starting with Hard", () => {
    const sortedKatas = [
      {
        _id: expect.any(String),
        title: "test kata 4",
        slug: "test-kata-4",
        description: "test kata description",
        example: "kata example",
        language: "javascript",
        difficulty: "Hard",
        topic: "",
      },
      {
        _id: expect.any(String),
        title: "test kata3",
        slug: "test-kata-3",
        description: "write a function",
        example: "1+1 expected output 2",
        language: "javascript",
        difficulty: "Medium",
        topic: "",
      },
      {
        _id: expect.any(String),
        title: "test kata",
        slug: "test-kata",
        description: "write a function",
        example: "1+1 expected output 2",
        language: "javascript",
        difficulty: "Easy",
        topic: "",
      },
      {
        _id: expect.any(String),
        title: "test kata2",
        slug: "test-kata-2",
        description: "write a function",
        example: "1+1 expected output 2",
        language: "javascript",
        difficulty: "Easy",
        topic: "",
      },
    ];
    testApiHandler({
      appHandler,
      async test({ fetch }) {
        const data = await fetch({
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ sort_by: "Hard" }),
        });
        const { response } = await data.json();
        expect(response).toEqual(sortedKatas);
      },
    });
  });
  it("returns all katas starting with Easy", () => {
    const katas = katasData.map((kata) => {
      return { _id: expect.any(String), ...kata };
    });
    testApiHandler({
      appHandler,
      async test({ fetch }) {
        const data = await fetch({
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ sort_by: "Easy" }),
        });
        const { response } = await data.json();
        expect(response).toEqual(katas);
      },
    });
  });
});
