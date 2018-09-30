// Vendor
import 'regenerator-runtime/runtime';
import axios from 'axios';
import Cookies from 'cookies';
import https from 'https';
import React from 'react';
import thunk from 'redux-thunk';
import uaParser from 'ua-parser-js';
import { applyMiddleware, createStore } from 'redux';
import { createCookieMiddleware } from 'redux-cookie';
import { get } from 'lodash';
import { matchPath, Route, StaticRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { storeBrowserInfo } from '../client/actions/user';

// Internal
import Application from '../client/Application';
import ProtectedRoute from '../client/routes/ProtectedRoute/Container';
import rootReducer from '../client/reducer/reducer';
import routes from '../client/routes/routes';
import template from './helpers/template';
import { loadCookies } from '../client/actions/cookies';

const wrapPromise = (promise) => new Promise((resolve) => promise.then(resolve).catch(resolve));

const ssrHandler = () => (req, res) => {
  const cookies = new Cookies(req, res);
  const axiosInstance = axios.create({
    baseURL: 'https://offensive.local/api',
    withCredentials: true,
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    })
  });
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(axiosInstance), createCookieMiddleware(cookies))
  );
  store.dispatch(loadCookies(req.cookies));

  const deviceType = get(uaParser(req.headers['user-agent']), 'device.type', 'desktop');
  store.dispatch(
    storeBrowserInfo({
      desktop: deviceType === 'desktop',
      mobile: deviceType === 'mobile' || deviceType === 'tablet',
      phone: deviceType === 'mobile',
      tablet: deviceType === 'tablet',
      userAgent: req.headers['user-agent']
    })
  );
  const context = {};

  const dataRequirements = routes
    .filter((route) => matchPath(req.path, route))
    .map((route) => route.component)
    .filter((comp) => comp.serverFetch)
    .map((comp) => comp.serverFetch(store.dispatch, store.getState))
    .map(wrapPromise);

  Promise.all(dataRequirements).then(() => {
    const wrapped = (
      <Provider store={store}>
        <StaticRouter context={context} location={req.url}>
          <Application>
            <Switch>
              {routes.map((route) => (route.protected ? <ProtectedRoute {...route} /> : <Route {...route} />))}
            </Switch>
          </Application>
        </StaticRouter>
      </Provider>
    );
    const reactDom = renderToString(wrapped);

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      const reduxState = store.getState();
      res.end(template(reactDom, reduxState));
    }
  });
};

export default ssrHandler;
