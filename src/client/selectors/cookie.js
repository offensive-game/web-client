// Vendor
import { createSelector } from 'reselect';
import { get } from 'lodash';

const selectCookies = (state) => get(state, 'cookies', {});
const selectCookie = createSelector(
  selectCookies,
  (state, key) => key,
  (cookies, key) => cookies[key]
);

export {
  selectCookies,
  selectCookie
};
