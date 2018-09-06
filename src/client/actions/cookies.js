import { setCookie } from 'redux-cookie';

export const SET_ALL_COOKIES = 'SET_ALL_COOKIES_SUCCESS';
export const ADD_COOKIE = 'ADD_COOKIE';

const setAllCookies = (payload) => ({
  type: SET_ALL_COOKIES,
  payload
});

const addCookie = (payload) => ({
  type: ADD_COOKIE,
  payload
});

const loadCookies = (cookies) => (dispatch) => {
  dispatch(setAllCookies(cookies));
};

const storeCookie = (key, value) => (dispatch) => {
  setCookie(key, value);
  dispatch(addCookie({ key, value }));
};

export { loadCookies, storeCookie };
