import { errorMonitor } from "stream";
import { client, db } from "../../../mongodb/connection";

export async function fetchUser(username: String) {
  await client.connect();
  return db.collection("users").findOne({ username: username });
}

export async function removeUser(user: string){
  await client.connect()
  return db.collection('users').deleteOne({username: user})
}

export async function changeUserDetails(username: string, userDetails: any){
  await client.connect()
  const result = await db.collection('users').updateOne({username: username}, {$set: userDetails})
  if(result.modifiedCount === 0){
    throw Error
  }
  return db.collection('users').findOne({username: userDetails.username})
}
