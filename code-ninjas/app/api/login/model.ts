import { client, db } from "../../mongodb/connection";
import { passwordLoginAttempt } from "../utils/utils";
import { HttpError } from "../../api/utils/errorHandler";

export async function fetchUserLoginAttempt(
  username: string,
  userPasswordAttempt: string
) {
  await client.connect();
  const error = new HttpError("invalid credentials", 401);
  const user = await db.collection("users").findOne({ username: username });
  if (!user) throw error;
  const correctPassword = await passwordLoginAttempt(
    userPasswordAttempt,
    user.password
  );

  if (!correctPassword) throw error;
  return user;
}
