import express from 'express';
import path from 'path';
import React from 'react';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { Route, StaticRouter, matchPath } from 'react-router-dom';

import Application from '../client/Application';
import rootReducer from '../client/reducer';
import routes from '../client/routes';
import template from './helpers/template';

const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/*', (req, res) => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  const context = {};

  const dataRequirements = routes
    .filter((route) => matchPath(req.url, route))
    .map((route) => route.component)
    .filter((comp) => comp.serverFetch)
    .map((comp) => comp.serverFetch());

  Promise.all(dataRequirements).then(() => {
    const wrapped = (
      <Provider store={store}>
        <StaticRouter context={context} location={req.url}>
          <Application>
            {routes.map((route) => (
              <Route {...route} />
            ))}
          </Application>
        </StaticRouter>
      </Provider>
    );
    const reactDom = renderToString(wrapped);

    const reduxState = store.getState();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(template(reactDom, reduxState));
  });
});

app.listen(process.env.PORT || 3000);
