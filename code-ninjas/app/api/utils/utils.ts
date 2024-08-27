export const generateHash = async (password: string) => {
  const bcrypt = require("bcrypt");
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  return Promise.resolve({ salt, hash });
};

export const passwordLoginAttempt = async (
  passwordAttempt: string,
  hash: string
) => {
  const bcrypt = require("bcrypt");
  const result = await bcrypt.compare(passwordAttempt, hash);
  return Promise.resolve(result);
};
export const sortData = async (
  db: any,
  order?: string[],
  column_name?: string,
  slug?: string
) => {
  let result;
  let duplicateKatas = await db.collection("katas").find().toArray();
  let uniqueObjects: any = {};
  const m = { $match: { [`${column_name}`]: { $in: order } } };
  const a = {
    $addFields: { __order: { $indexOfArray: [order, `$${column_name}`] } },
  };
  const p = { $project: { __order: 0 } };
  const s = { $sort: { __order: 1 } };
  if (slug === "Incomplete") {
    result = await db.collection("katas").aggregate([m, a, s, p]).toArray();
    duplicateKatas = duplicateKatas.filter(
      (kata: any) => !order?.includes(kata.slug)
    );
    duplicateKatas.push(...result);
    duplicateKatas.forEach((obj) => {
      uniqueObjects[obj.slug] = obj;
    });
  } else {
    result = await db.collection("katas").aggregate([m, a, s, p]).toArray();
    result.push(...duplicateKatas);
    result.forEach((obj) => {
      uniqueObjects[obj.slug] = obj;
    });
  }
  const sortedKatas = Object.values(uniqueObjects);
  return sortedKatas;
};
