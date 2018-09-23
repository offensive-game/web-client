// Vendor
import { get } from 'lodash';

// Constants
import { JOIN_GAME_SUCCESS } from '../../home/actions/joinGame';
import { OPPONENT_JOINED_SUCCESS } from '../../home/actions/wsConstants';

const initialState = [];

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case JOIN_GAME_SUCCESS: {
      return get(payload, 'players', []);
    }
    case OPPONENT_JOINED_SUCCESS: {
      const { player_id: id, name, color } = payload;
      const alreadyJoined = !!state.filter((player) => player.id === id).length;
      if (alreadyJoined) {
        return state;
      } else {
        return [...state, { id, name, color }];
      }
    }
    default:
      return state;
  }
};

export default reducer;
