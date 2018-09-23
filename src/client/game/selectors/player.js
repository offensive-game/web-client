// Vendor
import { createSelector } from 'reselect';
import { get } from 'lodash';

// Internal
import { selectCurrentGame } from './index';

const selectPlayers = createSelector(selectCurrentGame, (game) => get(game, 'players', []));

const selectPlayerById = createSelector(
  selectPlayers,
  (state, id) => id,
  (players, id) => {
    const player = players.filter((p) => p.id === id);
    return player.length ? player[0] : null;
  }
);

export { selectPlayers, selectPlayerById };
