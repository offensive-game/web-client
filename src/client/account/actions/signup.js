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

const signupAction = (username, password, email) => (dispatch) => {
  dispatch(signupStarted());

  setTimeout(() => {
    if (username && password && email) {
      dispatch(signupSuccess());
    } else {
      dispatch(signupFailed({ error: 'email taken' }));
    }
  }, 1000);
};

export { signupAction, signupClearError };
