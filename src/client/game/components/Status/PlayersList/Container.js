// Vendor
import { connect } from 'react-redux';

// Internal
import PlayersList from './PlayersList';
import { selectPlayers } from '../../../selectors/player';

const mapStateToProps = (state) => {
  const players = selectPlayers(state);

  return {
    players: players.map((p) => ({ ...p, numberOfLands: 0 }))
  };
};

export default connect(mapStateToProps)(PlayersList);
