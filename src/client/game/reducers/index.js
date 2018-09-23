// Vendor
import { combineReducers } from 'redux';

// Internal
import generalReducer from './general';
import playersReducer from './players';
import roundReducer from './round';
import boardReducer from './board';

export default combineReducers({
  board: boardReducer,
  general: generalReducer,
  players: playersReducer,
  round: roundReducer
});
