// Vendor
import { combineReducers } from 'redux';

// Internal
import accountReducer from '../account/reducers/account';
import cookiesReducer from './cookies';
import gameManagementReducer from '../home/reducers';
import modalReducer from '../modal/reducers';


const rootReducer = combineReducers({
  account: accountReducer,
  cookies: cookiesReducer,
  gameManagement: gameManagementReducer,
  modal: modalReducer
});

export default rootReducer;
