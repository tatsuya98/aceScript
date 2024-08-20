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
  const katas = db.collection("katas");
  await users.insertMany(userData);
  await katas.insertMany(kataData);
}
