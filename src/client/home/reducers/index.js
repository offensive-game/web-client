// Vendor
import { combineReducers } from 'redux';

// Internal
import newGameReducer from '../components/NewGame/reducers';

export default combineReducers({
  newGame: newGameReducer
});
