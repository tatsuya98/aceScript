import { client, db } from "./connection";

export default async function seed(userData: any, kataData: any) {
  await client.connect();
  await db.dropDatabase();
  const users = db.collection("users");
  const katas = db.collection("katas");

  await users.insertMany(userData);
  await katas.insertMany(kataData);
}
