// Vendor
import { connect } from 'react-redux';

// Internal
import Home from './Home';
import { loadUser } from '../../../actions/user';
import { selectInProgress, selectIsLoaded } from '../../../selectors/user';

const mapStateToProps = (state) => ({
  loaded: selectIsLoaded(state),
  inProgress: selectInProgress(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadUserAction() {
    dispatch(loadUser());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
