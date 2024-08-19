import { userData } from "./dev-data/userData";
import { katasData } from "./dev-data/katasData";
import seed from "./seed";
import { client } from "./connection";

async function runSeed() {
  await seed(userData, katasData);
  await client.close();
}

runSeed();
