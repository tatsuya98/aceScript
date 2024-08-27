import { client, db } from "../../mongodb/connection";
import { sortData } from "../utils/utils";

export async function fetchKatasBySort(
  sort: string,
  problems_solved?: string[]
) {
  await client.connect();
  let order = [];
  let column_name;
  switch (sort) {
    case "Easy":
      order = ["Easy", "Medium", "Hard"];
      column_name = "difficulty";
      return await sortData(db, order, column_name);
    case "Hard":
      order = ["Hard", "Medium", "Easy"];
      column_name = "difficulty";
      return await sortData(db, order, column_name);
    case "Completed":
      column_name = "slug";
      return await sortData(db, problems_solved, column_name);
    case "Incomplete":
      column_name = "slug";
      const slug = "Incomplete";
      return await sortData(db, problems_solved, column_name, slug);
    default:
  }
}
