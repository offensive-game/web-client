// Vendor
import { createSelector } from 'reselect';
import { get } from 'lodash';

// Internal
import { selectCurrentGame } from './index';

const selectGeneral = createSelector(selectCurrentGame, (game) => get(game, 'general', {}));

const selectNumberOfPlayers = createSelector(selectGeneral, (general) => get(general, 'numberOfPlayers'));

export { selectGeneral, selectNumberOfPlayers };
