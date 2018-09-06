import { ADD_COOKIE, SET_ALL_COOKIES } from '../actions/cookies';

const initialState = {};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALL_COOKIES: {
      return payload;
    }
    case ADD_COOKIE: {
      const { key, value } = payload;
      return {
        ...state,
        [key]: value
      };
    }
    default:
      return state;
  }
};

export default reducer;
