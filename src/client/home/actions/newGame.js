import { mapServerGameToClient } from '../helper';

export const CREATE_GAME_STARTED = 'CREATE_GAME_STARTED';
export const CREATE_GAME_FAILED = 'CREATE_GAME_FAILED';
export const CREATE_GAME_SUCCESS = 'CREATE_GAME_SUCCESS';
export const CREATE_GAME_RESET = 'CREATE_GAME_RESET';

const createGameStarted = (payload = {}) => ({
  type: CREATE_GAME_STARTED,
  payload
});

const createGameFailed = (payload = {}) => ({
  type: CREATE_GAME_FAILED,
  payload
});

const createGameSuccess = (payload = {}) => ({
  type: CREATE_GAME_SUCCESS,
  payload
});

const createGameReset = (payload = {}) => ({
  type: CREATE_GAME_RESET,
  payload
});

const createGame = (name, numberOfPlayers, deadline) => async (dispatch, getState, api) => {
  dispatch(createGameStarted());

  try {
    const response = await api.post('/game', { name, number_of_players: numberOfPlayers, wait_time: deadline });
    const game = mapServerGameToClient(response.data);
    dispatch(createGameSuccess({ ...game }));
    dispatch(createGameReset());
  } catch (error) {
    dispatch(createGameFailed());
  }
};

export { createGame };
