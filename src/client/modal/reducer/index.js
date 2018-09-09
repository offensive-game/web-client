import { HIDE_MODAL, SHOW_MODAL } from '../actions';

const initialState = {};

const reducer = (state = initialState, action) => {
  const { type, payload = {} } = action;
  const { name, props } = payload;
  switch (type) {
    case SHOW_MODAL: {
      return {
        ...state,
        [name]: {
          isOpen: true,
          props
        }
      };
    }
    case HIDE_MODAL: {
      if (!name) return {};
      const newState = { ...state };
      delete newState[name];
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
