// Vendor
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../../../../common/Button/Button';

// CSS
import styles from './styles.css';

class GameInfo extends Component {
  joinGame = () => {
    const { id, joinGame } = this.props;
    joinGame(id);
  };

  render() {
    const { name, numberOfPlayers } = this.props;

    if (!name) {
      return <div>Select game from list</div>;
    }

    return (
      <div>
        <div>
          <div>Name:</div>
          <div className={styles.text}>{name}</div>
        </div>
        <div>
          <div>Players:</div>
          <div className={styles.text}>{numberOfPlayers}</div>
        </div>
        <Button className={styles.button} text="Join" type="button" onClick={this.joinGame} />
      </div>
    );
  }
}

GameInfo.defaultProps = {
  id: null,
  name: null,
  numberOfPlayers: 0,
  startTime: null
};

GameInfo.propTypes = {
  id: PropTypes.string,
  joinGame: PropTypes.func.isRequired,
  name: PropTypes.string,
  numberOfPlayers: PropTypes.number
};

export default GameInfo;
