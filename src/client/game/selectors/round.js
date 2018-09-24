// Vendor
import { createSelector } from 'reselect';
import { get } from 'lodash';

// Internal
import { selectCurrentGame } from './index';

const selectRound = createSelector(selectCurrentGame, (game) => get(game, 'round', {}));

const selectRoundDeadline = createSelector(selectRound, (round) => round.end);
const selectRoundPhase = createSelector(selectRound, (round) => round.phase);

export {
  selectRound,
  selectRoundDeadline,
  selectRoundPhase
};
