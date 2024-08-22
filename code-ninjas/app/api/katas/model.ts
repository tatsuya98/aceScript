import { client, db } from "../../mongodb/connection";

interface Kata {
  _id: string;
}

export async function getKatas() {
  await client.connect();
  return db.collection("katas").find().toArray();
}

export async function createKata(kata: any) {
  await client.connect();
  const kataDetails = { ...kata };
  try {
    const result = await db.collection("katas").insertOne(kataDetails);
    const kata = await db
      .collection("katas")
      .findOne({ _id: result.insertedId });

    if (kata) {
      const formattedKata: Kata = {
        ...kata,
        _id: kata._id.toString(),
      };
      return formattedKata;
    }
  } catch (error) {
    throw error;
  } finally {
    await client.close();
  }
}
