// Vendor
import { connect } from 'react-redux';

// Internal
import Signup from './Signup';
import { selectSignupError, selectSignupSuccess } from '../../selectors/signup';
import { showModal } from '../../../modal/actions';
import { signupAction, signupClearStatus } from '../../actions/signup';

// Constants
import { INVALID_SIGNUP_DATA, SIGNUP_SUCCESS } from '../../../modal/constants';

const SIGNUP_SUCCESS_MESSAGE = 'You have successfully created a new account. Log in to continue';

const mapStateToProps = (state) => ({
  error: selectSignupError(state),
  success: selectSignupSuccess(state)
});

const mapDispatchToProps = (dispatch) => ({
  clearSignupStatus() {
    dispatch(signupClearStatus());
  },
  showErrorsModal(errors) {
    dispatch(showModal(INVALID_SIGNUP_DATA, { errors }));
  },
  showSuccessModal() {
    dispatch(showModal(SIGNUP_SUCCESS, { message: SIGNUP_SUCCESS_MESSAGE }));
  },
  signup(username, password, email) {
    dispatch(signupAction(username, password, email));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
