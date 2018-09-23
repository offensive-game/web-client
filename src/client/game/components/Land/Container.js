// Vendor
import { connect } from 'react-redux';
import { selectLandPlayerId } from '../../selectors/board';
import { selectPlayerById } from '../../selectors/player';

// Internal
import Land from './Land';

const mapStateToProps = (state, ownProps) => {
  const { name } = ownProps;
  let color = 'grey';

  const player = selectLandPlayerId(state, name);

  if (player) {
    const playerInfo = selectPlayerById(player);
    color = playerInfo.color;
  }

  return {
    color
  };
};

export default connect(mapStateToProps)(Land);
