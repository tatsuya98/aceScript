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
