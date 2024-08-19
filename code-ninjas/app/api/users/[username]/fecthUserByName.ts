import { client, db } from "../../../mongodb/connection";

export default async function fetchUser(username: String) {
  await client.connect();
  return db.collection("users").findOne({ username: username });
}
