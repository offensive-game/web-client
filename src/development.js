// Vendor
const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const cookieParser = require('cookie-parser');

// Internal
const serverWPConfig = require('../config/webpack.dev.server');
const clientWPConfig = require('../config/webpack.dev.client');

const compiler = webpack([clientWPConfig, serverWPConfig]);

const app = express();
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: '/',
    serverSideRender: true
  })
);
app.use(webpackHotMiddleware(compiler.compilers.find((c) => c.name === 'client')));
app.use(webpackHotServerMiddleware(compiler));

app.listen(process.env.PORT || 3000);
