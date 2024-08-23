import { client, db } from "../../../mongodb/connection";
import { handleNotFound } from "../../utils/errorHandler";
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
  const result = await db.collection("users").updateOne(
    { username: username },
    {
      $set: {
        username: userDetails.username,
        password: userDetails.password,
        problems_solved: userDetails.problems_solved,
        avatar_url: userDetails.avatar_url,
      },
    }
  );
  return db.collection("users").findOne({ username: userDetails.username });
}
