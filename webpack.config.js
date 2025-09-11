const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    clean: true,
    libraryTarget: "umd",
  },
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  externals: {
    react: "react",
  },
  module: {
    rules: [
      //   {
      //     test: /\.css$/i,
      //     use: ["style-loader", "css-loader"],
      //   },
      {
        test: /\.(ts|tsx)$/i,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
};
