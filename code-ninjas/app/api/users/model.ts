import { client, db } from "../../mongodb/connection";


export async function usersModel() {
  await client.connect();
  const users = db.collection("users");
  const allUsers = await users.find().toArray();
  await client.close();
  return allUsers;
}

export async function createUser(userDetails: any) {
  try {
    await client.connect();
    await db.collection("users").insertOne(userDetails);
    return db.collection("users").findOne(userDetails);
  } catch (error) {
    throw error;
  }
}

