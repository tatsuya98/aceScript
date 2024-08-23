import { client, db } from '../../../mongodb/connection'

export async function fetchKata(slug: String) {
    await client.connect();
    return db.collection("katas").findOne({ slug });
  }