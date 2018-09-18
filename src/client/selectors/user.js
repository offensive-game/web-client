// Vendor
import { createSelector } from 'reselect';
import { get } from 'lodash';

const selectUser = (state) => get(state, 'user', {});

const selectUsername = createSelector(selectUser, (user) => user.username);
const selectInProgress = createSelector(selectUser, (user) => user.inProgress);
const selectIsLoaded = createSelector(selectUser, (user) => user.loaded);
const selectId = createSelector(selectUser, (user) => user.id);
const selectError = createSelector(selectUser, (user) => user.error);

export {
  selectError,
  selectId,
  selectInProgress,
  selectIsLoaded,
  selectUsername
};
