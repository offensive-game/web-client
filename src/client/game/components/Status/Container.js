// Vendor
import { connect } from 'react-redux';

// Internal
import Status from './Status';
import { selectIsMobile } from '../../../selectors/user';

const mapStateToProps = (state) => ({
  mobile: selectIsMobile(state)
});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   action() {
//   }
// });

export default connect(mapStateToProps)(Status);
