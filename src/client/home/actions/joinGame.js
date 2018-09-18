// Vendor
import { get } from 'lodash';
import { mapServerGameToClient } from '../helper';

export const LOAD_GAMES_STARTED = 'LOAD_GAMES_STARTED';
export const LOAD_GAMES_FAILED = 'LOAD_GAMES_FAILED';
export const LOAD_GAMES_SUCCESS = 'LOAD_GAMES_SUCCESS';
export const JOIN_GAME_STARTED = 'JOIN_GAME_STARTED';
export const JOIN_GAME_FAILED = 'JOIN_GAME_FAILED';
export const JOIN_GAME_SUCCESS = 'JOIN_GAME_SUCCESS';
export const JOIN_GAME_CLEAR = 'JOIN_GAME_CLEAR';
export const SELECT_GAME = 'SELECT_GAME';
export const REMOVE_GAME = 'REMOVE_GAME';

const loadGamesStarted = (payload = {}) => ({
  type: LOAD_GAMES_STARTED,
  payload
});

const loadGamesFailed = (payload = {}) => ({
  type: LOAD_GAMES_FAILED,
  payload
});

const loadGamesSuccess = (payload = {}) => ({
  type: LOAD_GAMES_SUCCESS,
  payload
});

const selectGameSuccess = (payload) => ({
  type: SELECT_GAME,
  payload
});

const removeGameSuccess = (payload) => ({
  type: REMOVE_GAME,
  payload
});

const joinGameStarted = (payload = {}) => ({
  type: JOIN_GAME_STARTED,
  payload
});

const joinGameFailed = (payload = {}) => ({
  type: JOIN_GAME_FAILED,
  payload
});

const joinGameSuccess = (payload = {}) => ({
  type: JOIN_GAME_SUCCESS,
  payload
});

const joinGameClear = (payload = {}) => ({
  type: JOIN_GAME_CLEAR,
  payload
});

const selectGame = (id) => (dispatch) => {
  dispatch(selectGameSuccess(id));
};

const removeGame = (id) => (dispatch) => {
  dispatch(removeGameSuccess(id));
};

const loadGames = () => async (dispatch, getState, api) => {
  dispatch(loadGamesStarted());

  try {
    const response = await api.get('/game');
    const responseGames = get(response, 'data.games', []);
    const games = responseGames.map((game) => mapServerGameToClient(game));
    dispatch(loadGamesSuccess({ games }));
  } catch (error) {
    dispatch(loadGamesFailed(error.response.data));
  }
};

const joinGame = (id) => async (dispatch, getState, api) => {
  dispatch(joinGameStarted({ id }));
  try {
    const response = await api.get(`/game/${id}`);
    dispatch(joinGameSuccess(response));
  } catch (error) {
    dispatch(joinGameFailed());
  }
};

const clearJoinGame = () => (dispatch) => {
  dispatch(joinGameClear());
};

export { loadGames, selectGame, removeGame, joinGame, clearJoinGame };
