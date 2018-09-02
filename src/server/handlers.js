import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { matchPath, Route, StaticRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import Application from '../client/Application';
import rootReducer from '../client/reducer';
import routes from '../client/routes';
import template from './helpers/template';

const ssrHandler = (req, res) => {
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
};

export { ssrHandler };
