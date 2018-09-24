// Vendor
import { connect } from 'react-redux';
import { WAITING_TO_START } from '../../constants/phases';

// Internal
import Board from './Board';
import { selectRoundPhase } from '../../selectors/round';

const mapStateToProps = (state) => {
  const round = selectRoundPhase(state);

  const loading = round === WAITING_TO_START;

  return { loading };
};
export default connect(mapStateToProps)(Board);
