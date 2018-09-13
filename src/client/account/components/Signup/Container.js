// Vendor
import { connect } from 'react-redux';

// Internal
import Signup from './Signup';
import { selectSignupError } from '../../selectors/signup';
import { showModal } from '../../../modal/actions';
import { signupAction, signupClearError } from '../../actions/signup';

// Constants
import { INVALID_CREDENTIALS } from '../../../modal/constants';

const mapStateToProps = (state) => ({
  error: selectSignupError(state)
});

const mapDispatchToProps = (dispatch) => ({
  showErrorsModal(errors = []) {
    if (!errors.length) return;
    dispatch(showModal(INVALID_CREDENTIALS, { errors }));
    dispatch(signupClearError());
  },
  signup(username, password, email) {
    dispatch(signupAction(username, password, email));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
