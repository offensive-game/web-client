// Vendor
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Internal
import Game from './Game';
import { clearJoinGame, joinGame } from '../../../home/actions/joinGame';
import { open } from '../../../home/actions/ws';
import { selectJoinGameJoiningInProgress, selectJoinGameJoiningSuccess } from '../../../home/selectors/joinGame';
import { showModal } from '../../../modal/actions';

// Constants
import { JOIN_GAME_ERROR } from '../../../modal/constants';

const mapStateToProps = (state) => ({
  joinInProgress: selectJoinGameJoiningInProgress(state),
  joinSuccess: selectJoinGameJoiningSuccess(state)
});

const mapDispatchToProps = (dispatch) => ({
  openConnection() {
    dispatch(open());
  },
  joinGame(id) {
    dispatch(joinGame(id));
  },
  showError() {
    dispatch(showModal(JOIN_GAME_ERROR, { errors: ['Unable to join game'] }));
  },
  clearJoiningError() {
    dispatch(clearJoinGame());
  }
});

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
export default withRouter(ConnectedComponent);
