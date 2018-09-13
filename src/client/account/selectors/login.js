// Vendor
import { createSelector } from 'reselect';
import { get } from 'lodash';

// Internal
import { selectAccount } from '.';

const selectLogin = createSelector(selectAccount, (account) => get(account, 'login', {}));

const selectLoginInProgress = createSelector(selectLogin, (login) => get(login, 'inProgress'));
const selectLoginSuccess = createSelector(selectLogin, (login) => get(login, 'success'));
const selectLoginError = createSelector(selectLogin, (login) => get(login, 'error'));

export {
  selectLoginError,
  selectLoginInProgress,
  selectLoginSuccess
};
