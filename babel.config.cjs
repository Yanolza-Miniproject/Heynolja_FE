// eslint-disable-next-line no-undef
module.exports = {
  presets: [
    "babel-plugin-transform-import-meta",
    ["@babel/preset-env", { targets: { node: "current" } }],
  ],
};
