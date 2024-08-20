import { client, db } from "../../mongodb/connection";

export async function getKatas(){
    await client.connect()
    return db.collection('katas').find().toArray()
}