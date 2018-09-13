// Vendor
import { combineReducers } from 'redux';

// Internal
import newGameReducer from './newGame';
import joinGameReducer from './joinGame';

export default combineReducers({
  newGame: newGameReducer,
  joinGame: joinGameReducer
});
