const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");


const clientConfig = {
  mode: "production",
  entry: "./src/client.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react"
          ]
        }
      },
      {
        test: /\.css$/,
        use: ["css-loader"]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isClient__: "true"
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/")
    }
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false
          }
        },
        extractComments: false
      })
    ]
  }
};

const serverConfig = {
  mode: "production",
  entry: "./src/server.js",
  target: "node",
  externals: [nodeExternals(), "react-helmet"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react"
          ]
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "app.css"
    }),
    new webpack.DefinePlugin({
      __isClient__: "false"
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: './public/favicon.svg'}
      ]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/")
    }
  }
};

module.exports = [clientConfig, serverConfig];
