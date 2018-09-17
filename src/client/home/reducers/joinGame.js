import {
  LOAD_GAMES_FAILED,
  LOAD_GAMES_STARTED,
  LOAD_GAMES_SUCCESS,
  REMOVE_GAME,
  SELECT_GAME
} from '../actions/joinGame';
import { CREATE_GAME_SUCCESS } from '../actions/newGame';

const initialState = {
  inProgress: false,
  loaded: false,
  games: [],
  selected: null
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_GAMES_STARTED: {
      return {
        ...state,
        inProgress: true,
        loaded: false
      };
    }
    case LOAD_GAMES_FAILED: {
      return {
        ...state,
        inProgress: false,
        loaded: false
      };
    }
    case LOAD_GAMES_SUCCESS: {
      return {
        ...state,
        inProgress: false,
        loaded: true,
        games: payload.games
      };
    }
    case SELECT_GAME: {
      return {
        ...state,
        selected: payload
      };
    }
    case REMOVE_GAME: {
      return {
        ...state,
        games: state.games.filter((g) => g.id !== payload),
        selected: payload === state.selected ? null : state.selected
      };
    }
    case CREATE_GAME_SUCCESS: {
      return {
        ...state,
        games: [...state.games, payload]
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
