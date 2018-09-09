// Vendor
import { connect } from 'react-redux';
import { showModal } from '../../../modal/actions';

// Internal
import Login from './Login';
import { loginAction, loginClearError } from './actions/login';
import { selectLoginError, selectLoginSuccess } from './selectors/login';
import { INVALID_CREDENTIALS } from '../../../modal/constants';

const mapStateToProps = (state) => ({
  error: selectLoginError(state),
  loggedIn: selectLoginSuccess(state)
});

const mapDispatchToProps = (dispatch) => ({
  showErrorsModal(errors = []) {
    if (!errors.length) return;
    dispatch(showModal(INVALID_CREDENTIALS, { errors }));
    dispatch(loginClearError());
  },
  login(username, password) {
    dispatch(loginAction(username, password));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
