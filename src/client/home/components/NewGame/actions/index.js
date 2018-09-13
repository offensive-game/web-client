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

const createGame = (name, numberOfPlayers, deadline) => (dispatch) => {
  dispatch(createGameStarted());

  setTimeout(() => {
    if (name !== 'fail') {
      dispatch(createGameSuccess({ name, numberOfPlayers, deadline }));
      dispatch(createGameReset());
    } else {
      dispatch(createGameFailed());
    }
  }, 1000);
};

export { createGame };
