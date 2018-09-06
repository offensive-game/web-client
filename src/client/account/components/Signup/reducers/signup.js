import {
  SIGNUP_CLEAR_ERROR,
  SIGNUP_FAILED,
  SIGNUP_STARTED,
  SIGNUP_SUCCESS
} from '../actions/signup';

const initialState = {
  inProgress: false,
  error: null,
  success: false
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_STARTED: {
      return {
        ...state,
        inProgress: true
      };
    }
    case SIGNUP_FAILED: {
      const { error } = payload;
      return {
        ...state,
        inProgress: false,
        success: false,
        error
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        inProgress: false,
        success: true,
        error: null
      };
    }
    case SIGNUP_CLEAR_ERROR: {
      return {
        ...state,
        error: null
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
