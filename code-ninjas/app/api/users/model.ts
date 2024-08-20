import { client, db } from "../../mongodb/connection";

export async function usersModel() {
  await client.connect();
  const users = db.collection("users");
  const allUsers = await users.find().toArray();
  await client.close();
  return allUsers;
}

interface User {
  _id: string;
}

export async function createUser(userDetails: any) {
  try {
    await client.connect();
    const fullUserDetails = {
      ...userDetails,
      problems_solved: [],
      avatar_url: "placeholder",
    };

    const result = await db.collection("users").insertOne(fullUserDetails);
    const user = await db
      .collection("users")
      .findOne({ _id: result.insertedId });

    if (user) {
      const formattedUser: User = {
        ...user,
        _id: user._id.toString(),
      };
      return formattedUser;
    }
    return null;
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}
