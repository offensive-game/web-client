// Vendor
import { get } from 'lodash';

// Constants
import { JOIN_GAME_SUCCESS } from '../../home/actions/joinGame';
import { WAITING_TO_START } from '../constants/rounds';

const initialState = {
  round: WAITING_TO_START,
  phase: null,
  end: null,
  selected: null
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case JOIN_GAME_SUCCESS: {
      return {
        ...state,
        round: WAITING_TO_START,
        phase: null,
        end: get(payload, 'start_time'),
        selected: null
      };
    }
    default:
      return state;
  }
};

export default reducer;
