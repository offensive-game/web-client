const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  name: 'server',
  entry: './src/server/app.js',
  externals: [nodeExternals()],
  mode: 'development',
  target: 'node',
  node: {
    __dirname: false
  },
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'commonjs2',
    publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            plugins: [
              [
                'css-modules-transform',
                {
                  generateScopedName: '[path][name]__[local]--[hash:base64:5]',
                  extensions: ['.css']
                }
              ],
              ['transform-class-properties', { spec: true }]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              locals: true,
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              sourceMap: true
            }
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
  }
};
