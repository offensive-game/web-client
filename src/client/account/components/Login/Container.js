// Vendor
import { connect } from 'react-redux';

// Internal
import Login from './Login';
import { loginAction, loginClearStatus } from '../../actions/login';
import { selectLoginError } from '../../selectors/login';
import { showModal } from '../../../modal/actions';

// Constants
import { INVALID_CREDENTIALS } from '../../../modal/constants';

const mapStateToProps = (state) => ({
  error: selectLoginError(state)
});

const mapDispatchToProps = (dispatch) => ({
  showErrorsModal(errors = []) {
    if (!errors.length) return;
    dispatch(showModal(INVALID_CREDENTIALS, { errors }));
  },
  clearErrors() {
    dispatch(loginClearStatus());
  },
  login(username, password) {
    dispatch(loginAction(username, password));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
