// Vendor
import { connect } from 'react-redux';

// Internal
import Game from './Game';
import { open } from '../../../home/actions/ws';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  openConnection() {
    dispatch(open());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
