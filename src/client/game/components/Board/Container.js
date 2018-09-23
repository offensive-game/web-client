// Vendor
import { connect } from 'react-redux';
import { WAITING_TO_START } from '../../constants/rounds';

// Internal
import Board from './Board';
import { selectRoundRound } from '../../selectors/round';

const mapStateToProps = (state) => {
  const round = selectRoundRound(state);

  const loading = round === WAITING_TO_START;

  return { loading };
};
export default connect(mapStateToProps)(Board);
