// Vendor
import { get } from 'lodash';

export const LOAD_USER_STARTED = 'LOAD_USER_STARTED';
export const LOAD_USER_FAILED = 'LOAD_USER_STARTED';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';

const loadUserStarted = (payload = {}) => ({
  type: LOAD_USER_STARTED,
  payload
});

const loadUserFailed = (payload = {}) => ({
  type: LOAD_USER_FAILED,
  payload
});

const loadUserSuccess = (payload = {}) => ({
  type: LOAD_USER_SUCCESS,
  payload
});

const loadUser = () => async (dispatch, getState, api) => {
  dispatch(loadUserStarted());

  try {
    const response = await api.get('/me');
    const { username, player_id: id } = response.data;
    dispatch(loadUserSuccess({ username, id }));
  } catch (error) {
    dispatch(loadUserFailed({ error: get(error, 'response.data.error', 'ERROR') }));
  }
};

export { loadUser };
