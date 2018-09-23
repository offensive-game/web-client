// Vendor
import { get } from 'lodash';

// Constants
import { JOIN_GAME_SUCCESS } from '../../home/actions/joinGame';

const initialState = {
  numberOfPlayers: 0
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case JOIN_GAME_SUCCESS: {
      return {
        ...state,
        numberOfPlayers: get(payload, 'number_of_players', 0)
      };
    }
    default:
      return state;
  }
};

export default reducer;
