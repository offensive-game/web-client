// Vendor
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { get } from 'lodash';
import Modal from '../../../modal/components/Container';
import ErrorPopup from '../../../modal/components/ErrorPopup/ErrorPopup';

// Internal
import Status from '../../components/Status/Container';
import Board from '../../components/Board/Board';

// CSS
import styles from './styles.css';

// Constants
import { JOIN_GAME_ERROR } from '../../../modal/constants';

class Game extends Component {
  constructor(props) {
    super(props);
    this.closeJoinErrorPopup = this.closeJoinErrorPopup.bind(this);
  }

  componentDidMount() {
    const { joinGame, match, joinInProgress, joinSuccess } = this.props;
    const gameId = get(match, 'params.id');

    if (gameId && !joinInProgress && joinSuccess === null) {
      joinGame(gameId);
    }
  }

  componentDidUpdate(prevProps) {
    const { joinSuccess: oldJoinSuccess } = prevProps;
    const { joinSuccess: newJoinSuccess } = this.props;
    const { showError, openConnection } = this.props;

    if (oldJoinSuccess === null) {
      if (newJoinSuccess === false) {
        showError();
      } else if (newJoinSuccess === true) {
        openConnection();
      }
    }
  }

  closeJoinErrorPopup() {
    const { clearJoiningError, history } = this.props;
    history.push('/');
    clearJoiningError();
  }

  render() {
    return (
      <div className={styles.component}>
        <Board />
        <Status />

        <Modal component={ErrorPopup} name={JOIN_GAME_ERROR} closeAction={this.closeJoinErrorPopup} />
      </div>
    );
  }
}

Game.defaultProps = {
  joinInProgress: null,
  joinSuccess: null
};

Game.propTypes = {
  clearJoiningError: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  joinGame: PropTypes.func.isRequired,
  joinInProgress: PropTypes.bool,
  joinSuccess: PropTypes.bool,
  match: PropTypes.object.isRequired,
  openConnection: PropTypes.func.isRequired,
  showError: PropTypes.func.isRequired
};

export default Game;
