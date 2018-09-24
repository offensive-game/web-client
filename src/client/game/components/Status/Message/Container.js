// Vendor
import { connect } from 'react-redux';

// Internal
import Message from './Message';
import { selectNumberOfPlayers } from '../../../selectors/general';
import { selectPlayers } from '../../../selectors/player';
import { selectRoundPhase } from '../../../selectors/round';

// Constants
import { WAITING_TO_START } from '../../../constants/phases';

const mapStateToProps = (state) => {
  const round = selectRoundPhase(state);
  let text = '';

  if (round === WAITING_TO_START) {
    const numberOfPlayers = selectNumberOfPlayers(state);
    const joined = selectPlayers(state).length;

    text = `Waiting players to join (${joined} / ${numberOfPlayers})`;
  }
  return {
    text
  };
};

export default connect(mapStateToProps)(Message);
