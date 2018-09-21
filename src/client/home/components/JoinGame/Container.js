// Vendor
import moment from 'moment';
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
    selected: selectSelectedGame(state)
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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JoinGame);
