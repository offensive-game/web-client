// Vendor
import { connect } from 'react-redux';

// Internal
import Login from './Login';
import { loginAction, loginClearError } from './actions/login';
import { selectLoginError } from './selectors/login';

const mapStateToProps = (state) => ({
  error: selectLoginError(state)
});

const mapDispatchToProps = {
  clearError: loginClearError,
  login: loginAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
