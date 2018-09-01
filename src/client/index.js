// Vendor
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

// Internal
import Application from './Application';
import Home from './home/components/Home';
import rootReducer from './reducer';
import Signup from './signup/components/Signup';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
  applyMiddleware(thunk)
);

const wrapped = (
  <Provider store={store}>
    <BrowserRouter>
      <Application>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
      </Application>
    </BrowserRouter>
  </Provider>
);

render(wrapped, document.getElementById('app'));
