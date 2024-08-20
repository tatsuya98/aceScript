import { client, db } from "../../../mongodb/connection";
import { passwordLoginAttempt } from "../../utils/utils";

export async function fetchUser(username: String) {
  await client.connect();
  return db.collection("users").findOne({ username: username });
}
export async function fetchUserLoginAttempt(
  username: string,
  userPasswordAttempt: string
) {
  await client.connect();
  const user = await db.collection("users").findOne({ username: username });
  if (!user) throw Error;
  const correctPassword = await passwordLoginAttempt(
    userPasswordAttempt,
    user.password
  );
  if (correctPassword) return user;
}

export async function removeUser(user: string) {
  await client.connect();
  return db.collection("users").deleteOne({ username: user });
}

export async function changeUserDetails(username: string, userDetails: any) {
  await client.connect();
  const result = await db
    .collection("users")
    .updateOne({ username: username }, { $set: userDetails });
  if (result.modifiedCount === 0) {
    throw Error;
  }
  return db.collection("users").findOne({ username: userDetails.username });
}
