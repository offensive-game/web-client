// Vendor
import { connect } from 'react-redux';

// Internal
import LogOut from './LogOut';
import { logoutAction } from '../../../account/actions/login';

const mapDispatchToProps = {
  logOut: logoutAction
};

export default connect(
  null,
  mapDispatchToProps
)(LogOut);
