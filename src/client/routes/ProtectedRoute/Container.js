// Vendor
import { connect } from 'react-redux';

// Internal
import ProtectedRoute from './ProtectedRoute';
import { selectCookie } from '../../selectors/cookie';

const mapStateToProps = (state) => ({
  hasCookie: selectCookie(state, 'offensive-login')
});

export default connect(mapStateToProps)(ProtectedRoute);
