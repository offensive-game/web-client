const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'client',
  entry: {
    main: ['./src/client/index.js']
  },
  mode: 'development',
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, '../dist/client')
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
            loader: ExtractCssChunks.loader
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              sourceMap: true,
              url: true
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: ''
        }
      }
    ]
  },
  plugins: [
    new ExtractCssChunks({
      filename: '[name].css'
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
};
