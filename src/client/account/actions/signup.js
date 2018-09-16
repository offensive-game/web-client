// Vendor
import { get } from 'lodash';

export const SIGNUP_STARTED = 'SIGNUP_STARTED';
export const SIGNUP_FAILED = 'SIGNUP_FAILED';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_CLEAR_STATUS = 'SIGNUP_CLEAR_STATUS';

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

const signupClearStatus = (payload = {}) => ({
  type: SIGNUP_CLEAR_STATUS,
  payload
});

const signupAction = (username, password, email) => async (dispatch, getState, api) => {
  dispatch(signupStarted());

  try {
    await api.post('/signup', { username, password, email });
    dispatch(signupSuccess());
  } catch (error) {
    const errorMessage = get(error, 'response.data.errors', 'Signup Error');
    dispatch(signupFailed({ error: errorMessage }));
  }
};

export { signupAction, signupClearStatus };
