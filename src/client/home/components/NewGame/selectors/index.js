// Vendor
import { createSelector } from 'reselect';
import { get } from 'lodash';

const selectNewGame = (state) => get(state, 'gameManagement.newGame', {});

const selectNewGameInProgress = createSelector(
  selectNewGame,
  (newGame) => newGame.inProgress
);

const selectNewGameSuccess = createSelector(
  selectNewGame,
  (newGame) => newGame.success
);

const selectNewGameData = createSelector(
  selectNewGame,
  (newGame) => newGame.game
);

export {
  selectNewGameInProgress,
  selectNewGameSuccess,
  selectNewGameData
};
