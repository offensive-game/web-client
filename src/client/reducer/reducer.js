// Vendor
import { combineReducers } from 'redux';

// Internal
import cookiesReducer from './cookies';
import accountReducer from '../account/reducers/account';
import modalReducer from '../modal/reducer';


const rootReducer = combineReducers({
  account: accountReducer,
  cookies: cookiesReducer,
  modal: modalReducer
});

export default rootReducer;
