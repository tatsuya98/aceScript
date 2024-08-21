import { client, db } from "../../../mongodb/connection";
import { passwordLoginAttempt } from "../../utils/utils";

export async function fetchUser(username: String) {
  await client.connect();
  try {
    const user = await db.collection("users").findOne({ username: username });
    return user;
  } catch (error: any) {
    throw error;
  } finally {
    client.close();
  }
}
export async function fetchUserLoginAttempt(
  username: string,
  userPasswordAttempt: string
) {
  await client.connect();
  const user = await db.collection("users").findOne({ username: username });
  if (!user) throw Error("User does not exist");
  const correctPassword = await passwordLoginAttempt(
    userPasswordAttempt,
    user.password
  );
  if (correctPassword) {
    console.log("hello");
    return user;
  } else {
    return Promise.reject({ message: "Incorrect password" });
  }
}

export async function removeUser(username: string) {
  await client.connect();
  try {
    const deleteSuccess = await db
      .collection("users")
      .deleteOne({ username: username });
    return deleteSuccess;
  } catch (error: any) {
    throw error;
  } finally {
    client.close();
  }
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
