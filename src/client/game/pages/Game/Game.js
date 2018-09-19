// Vendor
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Board from '../../components/Board/Board';

// Internal
import Status from '../../components/Status/Status';

// CSS
import styles from './styles.css';

class Game extends Component {
  componentDidMount() {
    const { openConnection } = this.props;
    openConnection();
  }

  render() {
    return (
      <div className={styles.component}>
        <Status />
        <Board />
      </div>
    );
  }
}

Game.propTypes = {
  openConnection: PropTypes.func.isRequired
};

export default Game;
