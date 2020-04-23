const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    login: "./src/js/login/login.js",
    home: "./src/js/home/home.js",
    profile: "./src/js/profile/profile.js",
    products: "./src/js/products/products.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "js/[name]/[name].js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080,
    open: true,
  },
  module: {
    // Babel config
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
        },
      },
    ],

    rules: [
      {
        test: /\.css$/,
        exclude: "/node_modules",
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],

    /* rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "assets/img",
          useRelativePath: true,
        },
      },
    ] */
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      chunks: [],
    }),
    new HtmlWebpackPlugin({
      filename: "login.html",
      template: "src/login.html",
      chunks: [],
    }),
    new HtmlWebpackPlugin({
      filename: "products.html",
      template: "src/products.html",
      chunks: [],
    }),
  ],
};
