// Vendor
import { connect } from 'react-redux';
import { selectModalIsOpened, selectModalProps } from '../selectors';

// Internal
import Modal from './Modal';
import { hideModal } from '../actions';

const mapStateToProps = (state, ownProps) => {
  const { name } = ownProps;
  return {
    isOpen: selectModalIsOpened(state, name),
    componentProps: selectModalProps(state, name)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  close() {
    dispatch(hideModal(ownProps.name));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
