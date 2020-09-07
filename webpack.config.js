const path = require('path');
require('dotenv').config()

const MODE = process.env.NODE_ENV || "development";

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

module.exports = {
  entry: './src/index.tsx',
  mode: MODE,
  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        use: [
          // 下から順に処理される
          { loader: "babel-loader",
            options: {
              "presets": ["@hirokihello/babel-preset-hydrogen"]
            }
          },
          { loader: "ts-loader" }
        ],
      },
      {
        test: /\.scss/,
        // ローダー名
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: enabledSourceMap
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: enabledSourceMap
            }
          }
        ]
      },
      {
        // 対象となるファイルの拡張子
        test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
        // 画像をBase64として取り込む
        loader: "url-loader"
      }
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js', '.tsx'
    ],
  },
  output: {
    path: path.resolve(__dirname, './src'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src',
    hot: true,
  }
};
