// Vendor
import moment from 'moment';
import { connect } from 'react-redux';

// Internal
import GameInfo from './GameInfo';
import { joinGame } from '../../../actions/joinGame';
import { selectJoinableGameById, selectSelectedGame } from '../../../selectors/joinGame';

const mapStateToProps = (state) => {
  const selected = selectSelectedGame(state);
  let selectedDetails = null;
  if (selected) {
    selectedDetails = selectJoinableGameById(state, selected);
  }

  const name = selectedDetails && selectedDetails.name;
  const numberOfPlayers = selectedDetails && selectedDetails.numberOfPlayers;
  const startTime = selectedDetails && moment(selectedDetails.startTime);

  return {
    id: selected,
    name,
    numberOfPlayers,
    startTime
  };
};

const mapDispatchToProps = {
  joinGame
};

export default connect(mapStateToProps, mapDispatchToProps)(GameInfo);
