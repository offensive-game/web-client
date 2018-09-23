// Vendor
import { createSelector } from 'reselect';
import { get } from 'lodash';
import { selectCurrentGame } from './index';

const selectBoard = createSelector(selectCurrentGame, (game) => get(game, 'board', {}));

const selectLand = createSelector(selectBoard, (state, land) => land, (board, land) => board[land]);
const selectLandPlayerId = createSelector(selectLand, (land) => get(land, 'playerId'));
const selectLandPTroops = createSelector(selectLand, (land) => get(land, 'troops'));

export {
  selectLand,
  selectLandPlayerId,
  selectLandPTroops,
};
