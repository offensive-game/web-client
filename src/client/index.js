// Vendor
import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { hydrate } from 'react-dom';

// Internal
import Application from './Application';
import rootReducer from './reducer';
import routes from './routes';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
  applyMiddleware(thunk)
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
  module.hot.accept('./reducer', () => {
    const nextRootReducer = require('./reducer');
    store.replaceReducer(nextRootReducer);
  });
}

hydrate(wrapped, document.getElementById('app'));
