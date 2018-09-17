// Vendor
import { createSelector } from 'reselect';
import { get } from 'lodash';

const selectJoinGame = (state) => get(state, 'gameManagement.joinGame', {});

const selectJoinGameLoadingInProgress = createSelector(selectJoinGame, (joinGame) => get(joinGame, 'inProgress'));
const selectJoinGameLoaded = createSelector(selectJoinGame, (joinGame) => get(joinGame, 'loaded'));
const selectJoinableGames = createSelector(selectJoinGame, (joinGame) => get(joinGame, 'games'));
const selectJoinableGameById = createSelector(
  selectJoinableGames,
  (state, id) => id,
  (games, id) => {
    const game = games.filter((g) => g.id === id);
    return game.length ? game[0] : null;
  }
);
const selectSelectedGame = createSelector(selectJoinGame, (joinGame) => get(joinGame, 'selected'));

const selectJoinGameJoining = createSelector(selectJoinGame, (joinGame) => get(joinGame, 'joining', {}));

const selectJoinGameJoiningGameId = createSelector(selectJoinGameJoining, (joining) => get(joining, 'gameId'), null);
const selectJoinGameJoiningInProgress = createSelector(
  selectJoinGameJoining,
  (joining) => get(joining, 'inProgress'),
  null
);
const selectJoinGameJoiningSuccess = createSelector(selectJoinGameJoining, (joining) => get(joining, 'success', null));

export {
  selectJoinableGameById,
  selectJoinableGames,
  selectJoinGameJoiningGameId,
  selectJoinGameJoiningInProgress,
  selectJoinGameJoiningSuccess,
  selectJoinGameLoaded,
  selectJoinGameLoadingInProgress,
  selectSelectedGame
};
