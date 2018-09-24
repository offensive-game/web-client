// Vendor
import { get } from 'lodash';

// Constants
import { JOIN_GAME_SUCCESS } from '../../home/actions/joinGame';
import { GAME_START_SUCCESS, PHASE_ADVANCE_SUCCESS } from '../../home/actions/wsConstants';
import { DEPLOY, WAITING_TO_START } from '../constants/phases';

const initialState = {
  phase: WAITING_TO_START,
  battle: null,
  end: null,
  selected: null
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case JOIN_GAME_SUCCESS: {
      return {
        ...state,
        phase: WAITING_TO_START,
        battle: null,
        end: get(payload, 'start_time'),
        selected: null
      };
    }
    case GAME_START_SUCCESS: {
      return {
        ...state,
        phase: DEPLOY,
        end: null
      };
    }
    case PHASE_ADVANCE_SUCCESS: {
      const { phase, round_deadline: deadline } = payload;
      return {
        ...state,
        phase,
        end: deadline
      };
    }
    default:
      return state;
  }
};

export default reducer;
