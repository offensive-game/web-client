// Vendor
import { connect } from 'react-redux';
import { WAITING_TO_START } from '../../../constants/phases';
import { selectRoundDeadline, selectRoundPhase } from '../../../selectors/round';

// Internal
import CountDown from './CountDown';

const mapStateToProps = (state) => {
  const round = selectRoundPhase(state);
  let title;

  if (round === WAITING_TO_START) {
    title = 'Starts in';
  } else {
    title = 'Round ends in';
  }

  return {
    deadline: selectRoundDeadline(state),
    title
  };
};


export default connect(mapStateToProps)(CountDown);
