const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  name: 'server',
  entry: './src/server/app.js',
  externals: [nodeExternals()],
  mode: 'development',
  target: 'node',
  node: {
    __dirname: false,
  },
  output: {
    filename: 'server-bundle.js',
    path: path.resolve(__dirname, '../dist')
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
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
};
