// Vendor
import Cookies from 'cookies';
import React from 'react';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { createCookieMiddleware } from 'redux-cookie';
import { matchPath, Route, StaticRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

// Internal
import Application from '../client/Application';
import ProtectedRoute from '../client/routes/ProtectedRoute/Container';
import rootReducer from '../client/reducer/reducer';
import routes from '../client/routes/routes';
import template from './helpers/template';
import { loadCookies } from '../client/actions/cookies';

const ssrHandler = () => (req, res) => {
  const cookies = new Cookies(req, res);
  const store = createStore(rootReducer, applyMiddleware(thunk, createCookieMiddleware(cookies)));
  store.dispatch(loadCookies(req.cookies));
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
