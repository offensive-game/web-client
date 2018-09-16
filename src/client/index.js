// Vendor
import axios from 'axios';
import Cookies from 'js-cookie';
import Modal from 'react-modal';
import React from 'react';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createCookieMiddleware } from 'redux-cookie';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';

// Internal
import Application from './Application';
import ProtectedRoute from './routes/ProtectedRoute/Container';
import rootReducer from './reducer/reducer';
import routes from './routes/routes';

const axiosInstance = axios.create({ baseURL: 'https://offensive.local/demo' });

const store = createStore(
  rootReducer,
  window.REDUX_DATA,
  compose(
    applyMiddleware(thunk.withExtraArgument(axiosInstance), createCookieMiddleware(Cookies)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
  )
);

const wrapped = (
  <Provider store={store}>
    <BrowserRouter>
      <Application>
        <Switch>
          {routes.map((route) => (route.protected ? <ProtectedRoute {...route} /> : <Route {...route} />))}
        </Switch>
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

Modal.setAppElement('#app');
hydrate(wrapped, document.getElementById('app'));
