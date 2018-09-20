// Internal
import {
  LOAD_USER_FAILED,
  LOAD_USER_STARTED,
  LOAD_USER_SUCCESS,
  STORE_BROWSER_INFO
} from '../actions/user';

const initialState = {
  inProgress: false,
  loaded: false,
  error: null,
  username: null,
  id: null,
  browser: {}
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_USER_STARTED: {
      return {
        ...state,
        inProgress: true,
        loaded: false
      };
    }

    case LOAD_USER_FAILED: {
      return {
        ...initialState,
        error: payload.error
      };
    }

    case LOAD_USER_SUCCESS: {
      const { username, id } = payload;
      return {
        ...state,
        inProgress: false,
        loaded: true,
        username,
        id
      };
    }

    case STORE_BROWSER_INFO: {
      return {
        ...state,
        browser: payload
      };
    }

    default:
      return state;
  }
};

export default reducer;
