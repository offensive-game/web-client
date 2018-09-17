// Vendor
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// Internal
import ErrorPopup from '../../../modal/components/ErrorPopup/ErrorPopup';
import GameInfo from './GameInfo/Container';
import GameItem from './GameItem/GameItem';
import Modal from '../../../modal/components/Container';

// Constants
import { JOIN_GAME_ERROR } from '../../../modal/constants';

// CSS
import styles from './styles.css';

class JoinGame extends Component {
  componentDidMount() {
    const { loaded, inProgress, loadGames } = this.props;
    if (!loaded && !inProgress) {
      loadGames();
    }
  }

  componentDidUpdate(prevProps) {
    const { joinGameSuccess: oldSuccess, showErrorPopup } = prevProps;
    const { joinGameSuccess } = this.props;

    if (oldSuccess === null && joinGameSuccess === false) {
      showErrorPopup();
    }
  }

  onClick = (gameId) => {
    const { selectGame } = this.props;
    selectGame(gameId);
  };

  gameTimeout = (gameId) => {
    const { removeGame } = this.props;
    removeGame(gameId);
  };

  render() {
    const { games, selected, clearJoinGame } = this.props;
    return (
      <div className={styles.component}>
        <Modal component={ErrorPopup} name={JOIN_GAME_ERROR} closeAction={clearJoinGame} />
        <div className={styles.left}>
          <ul className={styles.list}>
            {games.map((game) => (
              <GameItem
                id={game.id}
                key={game.id}
                name={game.name}
                onClick={this.onClick}
                selected={selected === game.id}
                startTime={game.startTime}
                gameTimeout={this.gameTimeout}
              />
            ))}
          </ul>
        </div>
        <div className={styles.right}>
          <GameInfo />
        </div>
      </div>
    );
  }
}

JoinGame.defaultProps = {
  games: [],
  joinGameSuccess: null,
  selected: null
};

JoinGame.propTypes = {
  clearJoinGame: PropTypes.func.isRequired,
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      startTime: PropTypes.object
    })
  ),
  inProgress: PropTypes.bool.isRequired,
  joinGameSuccess: PropTypes.bool,
  loaded: PropTypes.bool.isRequired,
  loadGames: PropTypes.func.isRequired,
  removeGame: PropTypes.func.isRequired,
  selected: PropTypes.string,
  selectGame: PropTypes.func.isRequired,
  showErrorPopup: PropTypes.func.isRequired
};

export default JoinGame;
