import { client, db } from "../../../mongodb/connection";
import { handleNotFound } from "../../utils/errorHandler";
import { passwordLoginAttempt } from "../../utils/utils";



export async function fetchUser(username: string) {
  await client.connect();
  try {
    const user = await db.collection("users").findOne({ username });
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
      .deleteOne({ username });
    return deleteSuccess;
  } catch (error: any) {
    throw error;
  } finally {
    client.close();
  }
}

export async function changeUserDetails(username: string, userDetails: any) {
  await client.connect();
  try {
      const updateResult = await db.collection("users").updateOne(
          { username: username },
          { $set: userDetails }
      );
      console.log("Update result:", updateResult);

      if (updateResult.matchedCount === 0) {
          console.log("No user found with username:", username);
          return { error: "No user found with given username", status: 404 };
      } else if (updateResult.modifiedCount === 0) {
          console.log("No changes made to the user details:", username);
          return { error: "No changes made", status: 304 };
      }

      const updatedUser = await db.collection("users").findOne({ username: username });
      if (!updatedUser) {
          console.log("Failed to retrieve updated details for username:", username);
          return { error: "Failed to retrieve user after update", status: 500 };
      }
      return { data: updatedUser, status: 200 };
  } catch (error) {
      console.error("Error updating user details:", error);
      if (error.code === 121) {
          return { error: "Document failed validation", details: error.errmsg, status: 400 };
      }
      return { error: "Internal server error", status: 500 };
  }
}
