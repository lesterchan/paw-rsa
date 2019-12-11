const path = require("path");

const name = "RSA";

module.exports = {
  mode: "production",
  entry: `./src/${name}.js`,
  output: {
    path: path.resolve(
      __dirname,
      `./build/com.lesterchan.PawExtensions.${name}`
    ),
    filename: `${name}.js`
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  }
};
