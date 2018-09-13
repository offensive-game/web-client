import moment from 'moment';

const games = [
  {
    id: '213',
    name: 'aaa',
    numberOfPlayers: 5,
    startTime: moment().add(15, 'seconds')
  },
  {
    id: '12',
    name: 'bbbb',
    numberOfPlayers: 5,
    startTime: moment().add(60, 'seconds')
  },
  {
    id: '1ew2',
    name: 'bbdfasfasbb',
    numberOfPlayers: 5,
    startTime: moment().add(70, 'seconds')
  }
];

export const LOAD_GAMES_STARTED = 'LOAD_GAMES_STARTED';
export const LOAD_GAMES_FAILED = 'LOAD_GAMES_FAILED';
export const LOAD_GAMES_SUCCESS = 'LOAD_GAMES_SUCCESS';
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

const loadGames = () => (dispatch) => {
  dispatch(loadGamesStarted());

  setTimeout(() => {
    dispatch(loadGamesSuccess(games));
  }, 500);
};

const selectGame = (id) => (dispatch) => {
  dispatch(selectGameSuccess(id));
};

const removeGame = (id) => (dispatch) => {
  dispatch(removeGameSuccess(id));
};

const joinGame = (id) => () => {
  console.log('JOINING GAME');
};

export { loadGames, selectGame, removeGame, joinGame };
