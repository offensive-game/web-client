// Vendor
import { createSelector } from 'reselect';
import { get } from 'lodash';

// Internal
import { selectAccount } from '.';

const selectSignup = createSelector(selectAccount, (account) => get(account, 'signup', {}));

const selectSignupInProgress = createSelector(selectSignup, (login) => get(login, 'inProgress'));
const selectSignupSuccess = createSelector(selectSignup, (login) => get(login, 'success'));
const selectSignupError = createSelector(selectSignup, (login) => get(login, 'error'));

export {
  selectSignupError,
  selectSignupInProgress,
  selectSignupSuccess
};
