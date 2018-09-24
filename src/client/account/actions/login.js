// Vendor
import { get } from 'lodash';
import { storeCookie } from '../../actions/cookies';

export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_CLEAR_STATUS = 'LOGIN_CLEAR_STATUS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

const loginStarted = (payload = {}) => ({
  type: LOGIN_STARTED,
  payload
});

const loginSuccess = (payload = {}) => ({
  type: LOGIN_SUCCESS,
  payload
});

const loginFailed = (payload = {}) => ({
  type: LOGIN_FAILED,
  payload
});

const loginClearStatus = (payload = {}) => ({
  type: LOGIN_CLEAR_STATUS,
  payload
});

const logoutSuccess = (payload = {}) => ({
  type: LOGOUT_SUCCESS,
  payload
});

const loginAction = (username, password) => async (dispatch, getState, api) => {
  dispatch(loginStarted());

  try {
    const response = await api.post('login', { username, password });
    dispatch(loginSuccess());
    dispatch(storeCookie('offensive-login', response.data.token || 123));
  } catch (error) {
    const errorMessage = get(error, 'response.data.errors');
    dispatch(loginFailed({ error: errorMessage }));
  }
};

const logoutAction = () => async (dispatch, getState, api) => {
  await api.post('/signout');
  dispatch(logoutSuccess());
};

export { loginAction, logoutAction, loginClearStatus };
