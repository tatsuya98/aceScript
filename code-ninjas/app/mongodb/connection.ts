import { MongoClient } from "mongodb";
const ENV = process.env.NODE_ENV || "development";

require("dotenv").config({
  path: `${__dirname}/../../.env`,
});

const uri = process.env.MONGODB_DEV_URI!;

export const client = new MongoClient(uri);
export const db = client.db(ENV);
