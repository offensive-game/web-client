// Vendor
import { connect } from 'react-redux';

// Internal
import JoinGame from './JoinGame';
import { loadGames, selectGame, removeGame } from '../../actions/joinGame';
import {
  selectJoinableGames,
  selectJoinGameLoaded,
  selectJoinGameLoadingInProgress,
  selectSelectedGame
} from '../../selectors/joinGame';

const mapStateToProps = (state) => ({
  inProgress: selectJoinGameLoadingInProgress(state),
  loaded: selectJoinGameLoaded(state),
  games: selectJoinableGames(state),
  selected: selectSelectedGame(state)
});

const mapDispatchToProps = {
  loadGames,
  selectGame,
  removeGame
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JoinGame);
