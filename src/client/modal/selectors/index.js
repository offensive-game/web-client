// Vendor
import { createSelector } from 'reselect';
import { get } from 'lodash';

const selectModal = (state) => get(state, 'modal', {});

const selectModalIsOpened = createSelector(
  selectModal,
  (state, name) => name,
  (modal, name) => get(modal, `${name}.isOpen`, false)
);

const selectModalProps = createSelector(
  selectModal,
  (state, name) => name,
  (modal, name) => get(modal, `${name}.props`, {})
);

export { selectModalIsOpened, selectModalProps };
