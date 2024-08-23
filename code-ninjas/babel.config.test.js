module.exports = (api) => {
  const isTest = api.env("test"); // Only apply this config in test environment

  if (isTest) {
    return {
      presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        "@babel/preset-typescript",
      ],
    };
  }

  return {};
};
