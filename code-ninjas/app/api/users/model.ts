import { client, db } from "../../mongodb/connection";
import { generateHash } from "../utils/utils";
import { z } from "zod";

export async function fetchUsers() {
  await client.connect();
  const users = db.collection("users");
  const allUsers = await users.find().toArray();
  await client.close();
  return allUsers;
}
const userDetailsSchema = z.object({
  username: z.string().refine((value) => !/\s/.test(value), {
    message: "Username must not contain spaces",
  }),
  password: z.string().min(6),
});

interface User {
  _id: string;
}

export async function createUser(userDetails: any) {
  try {
    userDetailsSchema.parse(userDetails);
    const { password } = userDetails;
    const hashedPassword = await generateHash(password);
    await client.connect();
    const fullUserDetails = {
      ...userDetails,
      password: hashedPassword.hash,
      problems_solved: [] as string[],
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
