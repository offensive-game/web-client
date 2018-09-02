const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // eslint-disable-line
const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'client',
  entry: {
    main:[
      'webpack-hot-middleware/client',
      './src/client/index.js'
    ]
  },
  mode: 'development',
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, '/')
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
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
