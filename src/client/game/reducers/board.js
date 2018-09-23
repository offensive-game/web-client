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
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};

export default reducer;
