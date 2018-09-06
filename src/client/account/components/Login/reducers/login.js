import { LOGIN_CLEAR_ERROR, LOGIN_FAILED, LOGIN_STARTED, LOGIN_SUCCESS } from '../actions/login';

const initialState = {
  inProgress: false,
  success: false,
  error: null
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_STARTED: {
      return {
        ...state,
        inProgress: true
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        inProgress: false,
        success: true,
        error: null
      };
    }
    case LOGIN_CLEAR_ERROR: {
      return {
        ...state,
        error: null
      };
    }
    case LOGIN_FAILED: {
      const { error } = payload;
      return {
        ...state,
        inProgress: false,
        success: false,
        error
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
