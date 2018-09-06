// Vendor
import { combineReducers } from 'redux';

// Internal
import signupReducer from '../components/Signup/reducers/signup';
import loginReducer from '../components/Login/reducers/login';

const reducer = combineReducers({
  login: loginReducer,
  signup: signupReducer
});

export default reducer;
