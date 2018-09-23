// Vendor
import { combineReducers } from 'redux';

// Internal
import generalReducer from './general';
import playersReducer from './players';
import roundReducer from './round';

export default combineReducers({
  general: generalReducer,
  players: playersReducer,
  round: roundReducer
});
