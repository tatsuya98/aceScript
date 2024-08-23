import { client, db } from "./connection";

export default async function seed(userData: any, kataData: any) {
  await client.connect();
  await db.dropDatabase();
  const users = await db.createCollection("users", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["username", "password"],
        properties: {
          _id: { bsonType: "objectId" },
          username: {
            bsonType: "string",
          },
          password: {
            bsonType: "string",
          },
          avatar_url: {
            bsonType: "string",
          },
          problems_solved: {
            bsonType: "array",
          },
        },
        additionalProperties: false,
      },
    },
  });
  users.createIndex("username", { unique: true });
  const katas = await db.createCollection("katas", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        properties: {
          _id: { bsonType: "objectId" },
          title: {
            bsonType: "string",
          },
          slug: {
            bsonType: "string",
          },
          description: {
            bsonType: "string",
          },
          example: {
            bsonType: "string",
          },
          language: {
            bsonType: "string",
          },
          difficulty: {
            bsonType: "string",
          },
          topic: {
            bsonType: "string",
          },
          initial_code: {
            bsonType: "string",
          },
          tests: {
            bsonType: "array",
          },
        },
        additionalProperties: false,
      },
    },
  });
  katas.createIndex("slug", { unique: true });

  await users.insertMany(userData);
  await katas.insertMany(kataData);
}
