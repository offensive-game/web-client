export const SIGNUP_STARTED = 'LOGIN_STARTED';
export const SIGNUP_FAILED = 'LOGIN_FAILED';
export const SIGNUP_SUCCESS = 'LOGIN_SUCCESS';
export const SIGNUP_CLEAR_ERROR = 'LOGIN_CLEAR_ERROR';

const signupStarted = (payload = {}) => ({
  type: SIGNUP_STARTED,
  payload
});

const signupSuccess = (payload = {}) => ({
  type: SIGNUP_SUCCESS,
  payload
});

const signupFailed = (payload = {}) => ({
  type: SIGNUP_FAILED,
  payload
});

const signupClearError = (payload = {}) => ({
  type: SIGNUP_CLEAR_ERROR,
  payload
});

const signupAction = (username, password, email) => (dispatch, getState, api) => {
  dispatch(signupStarted());

  api
    .post('/signup', { username, password, email })
    .then((response) => {
      console.log(response);
      dispatch(signupSuccess());
    })
    .catch((error) => {
      console.log(error);
      dispatch(signupFailed({ error: 'email taken' }));
    });
};

export { signupAction, signupClearError };
