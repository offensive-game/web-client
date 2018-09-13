// Vendor
import { combineReducers } from 'redux';

// Internal
import signupReducer from './signup';
import loginReducer from './login';

const reducer = combineReducers({
  login: loginReducer,
  signup: signupReducer
});

export default reducer;
