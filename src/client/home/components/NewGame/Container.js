// Vendor
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Internal
import NewGame from './NewGame';
import { createGame } from '../../actions/newGame';
import { selectNewGameData, selectNewGameInProgress, selectNewGameSuccess } from '../../selectors/newGame';
import { showModal } from '../../../modal/actions';

// Constants
import { CREATE_GAME_ERROR } from '../../../modal/constants';

const mapStateToProps = (state) => ({
  inProgress: selectNewGameInProgress(state),
  success: selectNewGameSuccess(state),
  game: selectNewGameData(state)
});

const mapDispatchToProps = (dispatch) => ({
  create(name, numberOfPlayers, deadline) {
    dispatch(createGame(name, numberOfPlayers, deadline));
  },
  showErrorModal(errors) {
    dispatch(showModal(CREATE_GAME_ERROR, { errors }));
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    create(name, numberOfPlayers, deadline) {
      if (stateProps.inProgress) return;
      dispatchProps.create(name, numberOfPlayers, deadline);
    }
  };
};

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(NewGame);
export default withRouter(ConnectedComponent);
