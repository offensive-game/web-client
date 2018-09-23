// Vendor
import { combineReducers } from 'redux';

// Internal
import accountReducer from '../account/reducers';
import cookiesReducer from './cookies';
import gameManagementReducer from '../home/reducers';
import gameReducer from '../game/reducers';
import modalReducer from '../modal/reducers';
import userReducer from './user';


const rootReducer = combineReducers({
  account: accountReducer,
  cookies: cookiesReducer,
  game: gameReducer,
  gameManagement: gameManagementReducer,
  modal: modalReducer,
  user: userReducer
});

export default rootReducer;
