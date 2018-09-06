// Vendor
import Cookies from 'js-cookie';
import React from 'react';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { createCookieMiddleware } from 'redux-cookie';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';

// Internal
import Application from './Application';
import rootReducer from './reducer/reducer';
import routes from './routes';

const store = createStore(
  rootReducer,
  window.REDUX_DATA,
  compose(
    applyMiddleware(thunk, createCookieMiddleware(Cookies)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
  )
);

const wrapped = (
  <Provider store={store}>
    <BrowserRouter>
      <Application>
        {routes.map((route) => (
          <Route {...route} />
        ))}
      </Application>
    </BrowserRouter>
  </Provider>
);

if (module.hot) {
  module.hot.accept();
}

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducer/reducer', () => {
    const nextRootReducer = require('./reducer/reducer');
    store.replaceReducer(nextRootReducer);
  });
}

hydrate(wrapped, document.getElementById('app'));
