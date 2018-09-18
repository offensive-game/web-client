// Internal
import { LOAD_USER_FAILED, LOAD_USER_STARTED, LOAD_USER_SUCCESS } from '../actions/user';

const initialState = {
  inProgress: false,
  loaded: false,
  error: null,
  username: null,
  id: null
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

    default:
      return state;
  }
};

export default reducer;
