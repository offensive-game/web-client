const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'client',
  entry: {
    main: ['webpack-hot-middleware/client', './src/client/index.js']
  },
  mode: 'development',
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, '/'),
    publicPath: '/'
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
              importLoaders: 1
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
      filename: '[name].css',
      publicPath: '../public',
      hot: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
