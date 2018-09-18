// Vendor
const cookieParser = require('cookie-parser');
const path = require('path');
const express = require('express');
const fs = require('fs');
const https = require('https');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

// Internal
const serverWPConfig = require('../config/webpack.dev.server');
const clientWPConfig = require('../config/webpack.dev.client');

const options = {
  key: fs.readFileSync('./offensive.local.key'),
  cert: fs.readFileSync('./offensive.local.crt'),
  requestCert: false,
  rejectUnauthorized: false
};

const compiler = webpack([clientWPConfig, serverWPConfig]);
const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));

const server = https.createServer(options, app);

app.use(cookieParser());
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: '/',
    serverSideRender: true
  })
);
app.use(webpackHotMiddleware(compiler.compilers.find((c) => c.name === 'client')));
app.use(webpackHotServerMiddleware(compiler));

server.listen(process.env.PORT || 443, () => {
  console.log('Server listening on port', server.address().port);
});
