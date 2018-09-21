// Vendor
import { connect } from 'react-redux';

// Internal
import GameInfo from './GameInfo';
import { selectJoinableGameById, selectSelectedGame } from '../../../selectors/joinGame';

const mapStateToProps = (state) => {
  const selected = selectSelectedGame(state);
  let selectedDetails = null;
  if (selected) {
    selectedDetails = selectJoinableGameById(state, selected);
  }

  const name = selectedDetails && selectedDetails.name;
  const numberOfPlayers = selectedDetails && selectedDetails.numberOfPlayers;

  return {
    id: selected,
    name,
    numberOfPlayers
  };
};

export default connect(mapStateToProps)(GameInfo);
