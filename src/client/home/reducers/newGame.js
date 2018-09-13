import {
  CREATE_GAME_FAILED,
  CREATE_GAME_RESET,
  CREATE_GAME_STARTED,
  CREATE_GAME_SUCCESS
} from '../actions/newGame';

const initialState = {
  inProgress: false,
  success: false,
  game: {}
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_GAME_STARTED: {
      return {
        ...state,
        inProgress: true,
        success: false
      };
    }
    case CREATE_GAME_SUCCESS: {
      return {
        ...state,
        inProgress: false,
        success: true,
        game: payload
      };
    }
    case CREATE_GAME_FAILED: {
      return {
        ...state,
        inProgress: false,
        success: false
      };
    }
    case CREATE_GAME_RESET: {
      return initialState;
    }
    default:
      return state;
  }
};

export default reducer;
