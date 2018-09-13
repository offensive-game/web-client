// Vendor
import { combineReducers } from 'redux';

// Internal
import newGameReducer from './newGame';

export default combineReducers({
  newGame: newGameReducer
});
