const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // eslint-disable-line
const path = require('path');

module.exports = {
  name: 'client',
  entry: './src/client/index.js',
  mode: 'development',
  output: {
    filename: 'client-bundle.js',
    path: path.resolve(__dirname, '../public/bundles')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
};
