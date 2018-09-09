
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

const modalShow = (payload) => ({
  type: SHOW_MODAL,
  payload
});

const modalHide = (payload) => ({
  type: HIDE_MODAL,
  payload
});

const showModal = (name, props) => (dispatch) => {
  dispatch(modalShow({ name, props }));
};

const hideModal = (name) => (dispatch) => {
  dispatch(modalHide({ name }));
};

export { showModal, hideModal };
