// Vendor
import { connect } from 'react-redux';

// Internal
import Board from './Board';

const mapStateToProps = (state, ownProps) => {};

const mapDispatchToProps = (dispatch, ownProps) => ({
  action() {}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
