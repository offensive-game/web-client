// Vendor
import { combineReducers } from 'redux';

// Internal
import cookiesReducer from './cookies';
import accountReducer from '../account/reducers/account';


const rootReducer = combineReducers({
  account: accountReducer,
  cookies: cookiesReducer
});

export default rootReducer;
