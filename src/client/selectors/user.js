// Vendor
import { createSelector } from 'reselect';
import { get } from 'lodash';

const selectUser = (state) => get(state, 'user', {});

const selectUsername = createSelector(selectUser, (user) => user.username);
const selectInProgress = createSelector(selectUser, (user) => user.inProgress);
const selectIsLoaded = createSelector(selectUser, (user) => user.loaded);
const selectId = createSelector(selectUser, (user) => user.id);
const selectError = createSelector(selectUser, (user) => user.error);

const selectBrowser = createSelector(selectUser, (user) => get(user, 'browser'), {});
const selectIsMobile = createSelector(selectBrowser, (browser) => get(browser, 'mobile', false));
const selectIsPhone = createSelector(selectBrowser, (browser) => get(browser, 'phone', false));
const selectIsTablet = createSelector(selectBrowser, (browser) => get(browser, 'tablet', false));
const selectIsDesktop = createSelector(selectBrowser, (browser) => get(browser, 'desktop', false));

export {
  selectError,
  selectId,
  selectInProgress,
  selectIsLoaded,
  selectIsMobile,
  selectUsername,
  selectIsDesktop,
  selectIsPhone,
  selectIsTablet
};
