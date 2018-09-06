import { get } from 'lodash';

export const selectAccount = (state) => get(state, 'account', {});
