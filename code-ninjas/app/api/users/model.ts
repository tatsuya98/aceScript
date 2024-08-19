import { client, db } from "../../mongodb/connection";

export default async function usersModel() {
  await client.connect();
  const users = db.collection("users");
  const allUsers = await users.find().toArray();
  await client.close();
  return allUsers;
}
