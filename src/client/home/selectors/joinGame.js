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

export {
  selectJoinGameLoadingInProgress,
  selectJoinGameLoaded,
  selectJoinableGames,
  selectJoinableGameById,
  selectSelectedGame
};
