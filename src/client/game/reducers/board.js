import { PHASE_ADVANCE_SUCCESS } from '../../home/actions/wsConstants';

// Internal
import * as LANDS from '../components/Land/constants/lands';

const buildInitialState = () => {
  const allLands = Object.keys(LANDS);
  const initial = {};
  allLands.forEach((key) => {
    initial[LANDS[key]] = {
      playerId: null,
      troops: 0
    };
  });
  return initial;
};

const initialState = buildInitialState();

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PHASE_ADVANCE_SUCCESS: {
      const { players } = payload;
      const newState = {};

      players.forEach((player) => {
        const { lands } = player;
        lands.forEach((land) => {
          newState[land.name] = {
            playerId: player.id,
            troops: land.number_of_units
          };
        });
      });

      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
