const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    login: "./src/js/login/login.js",
    home: "./src/js/home/home.js",
    profile: "./src/js/profile/profile.js",
    purchasesMade: "./src/js/purchasesMade/purchasesMade.js",
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
    /*
    // Babel config 
    rules: [
      {
        test: /\.js$/ ,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader'
        }
      }
    ] */

    rules: [
      {
        test: /\.css$/,
        exclude: "/node_modules",
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "login.html",
      template: "src/login.html",
    })
  ],
};
