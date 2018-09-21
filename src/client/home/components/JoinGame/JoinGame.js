// Vendor
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// Internal
import GameInfo from './GameInfo/Container';
import GameItem from './GameItem/GameItem';

// CSS
import styles from './styles.css';

class JoinGame extends Component {
  componentDidMount() {
    const { loaded, inProgress, loadGames } = this.props;
    if (!loaded && !inProgress) {
      loadGames();
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
    const { games, selected } = this.props;

    return (
      <div className={styles.component}>
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
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      startTime: PropTypes.object
    })
  ),
  inProgress: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
  loadGames: PropTypes.func.isRequired,
  removeGame: PropTypes.func.isRequired,
  selected: PropTypes.string,
  selectGame: PropTypes.func.isRequired
};

export default JoinGame;
