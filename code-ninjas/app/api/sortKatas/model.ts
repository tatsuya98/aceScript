import { client, db } from "../../mongodb/connection";

export async function fetchKatasBySort(sort: string) {
  await client.connect();
  if (sort === "very hard") {
    const order = ["very hard", "hard", "medium", "easy", "very easy"];
    const m = { $match: { difficulty: { $in: order } } };
    const a = {
      $addFields: { __order: { $indexOfArray: [order, "$difficulty"] } },
    };
    const p = { $project: { __order: 0 } };
    const s = { $sort: { __order: 1 } };
    const result = await db
      .collection("katas")
      .aggregate([m, a, s, p])
      .toArray();
    return result;
  } else {
    return await db.collection("katas").find().toArray();
  }
}
