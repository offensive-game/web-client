// Vendor
import { connect } from 'react-redux';

// Internal
import Account from './Account';
import { selectCookie } from '../../../selectors/cookie';

const mapStateToProps = (state) => {
  const a = !!selectCookie(state, 'offensive-login');
  return {
    loggedIn: a
  };
};

export default connect(mapStateToProps)(Account);
