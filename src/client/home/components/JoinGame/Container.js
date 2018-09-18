// Vendor
import moment from 'moment';
import { connect } from 'react-redux';
import { showModal } from '../../../modal/actions';
import { JOIN_GAME_ERROR } from '../../../modal/constants';

// Internal
import JoinGame from './JoinGame';
import { loadGames, selectGame, removeGame, clearJoinGame } from '../../actions/joinGame';
import {
  selectJoinableGames,
  selectJoinGameJoiningSuccess,
  selectJoinGameLoaded,
  selectJoinGameLoadingInProgress,
  selectSelectedGame
} from '../../selectors/joinGame';

const mapStateToProps = (state) => {
  let games = selectJoinableGames(state);
  if (games) {
    games = games.map((game) => ({
      ...game,
      startTime: moment(game.startTime)
    }));
  }

  return {
    inProgress: selectJoinGameLoadingInProgress(state),
    loaded: selectJoinGameLoaded(state),
    games,
    selected: selectSelectedGame(state),
    joinGameSuccess: selectJoinGameJoiningSuccess(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadGames() {
    dispatch(loadGames());
  },
  selectGame(id) {
    dispatch(selectGame(id));
  },
  removeGame(id) {
    dispatch(removeGame(id));
  },
  clearJoinGame() {
    dispatch(clearJoinGame());
  },
  showErrorPopup() {
    dispatch(showModal(JOIN_GAME_ERROR, { errors: ['Unable to join game'] }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JoinGame);
