import { setCookie } from 'redux-cookie';

export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_CLEAR_ERROR = 'LOGIN_CLEAR_ERROR';

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

const loginClearError = (payload = {}) => ({
  type: LOGIN_CLEAR_ERROR,
  payload
});

const loginAction = (username, password) => (dispatch, getState, server) => {
  dispatch(loginStarted());

  server.post('login', { username, password }).then(
    (aaaa) => {
      console.log('login respose', aaaa);
      dispatch(loginSuccess({ user: { name: 'adada ' } }));
    }
  ).catch((error) => {
    console.log(error);
  });
};

export { loginAction, loginClearError };
