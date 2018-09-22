// Vendor
import React, { Component } from 'react';

// Internal
import * as LANDS from '../Land/constants/lands';
import Land from '../Land/Land';

// CSS
import styles from './styles.css';

// Constants
import { BOARD_INITIAL_HEIGHT, BOARD_INITIAL_WIDTH } from './constants';

class Board extends Component {
  boardRef = React.createRef();

  state = { scale: 1 };

  componentDidMount() {
    const board = this.boardRef.current;
    const scaleX = board.offsetWidth / BOARD_INITIAL_WIDTH;
    const scaleY = board.offsetHeight / BOARD_INITIAL_HEIGHT;
    const scale = Math.min(scaleX, scaleY);
    if (scale > 1) {
      this.setState({ scale: Math.max(1, scale) });
    }
  }

  render() {
    const { scale } = this.state;
    const style = { transform: `scale(${scale})` };

    const allLands = Object.keys(LANDS).map((land) => LANDS[land]);
    const lands = allLands.map((name) => <Land key={name} name={name} />);

    return (
      <div className={styles.component} ref={this.boardRef}>
        <svg className={styles.lands} style={style}>
          {lands}
        </svg>
      </div>
    );
  }
}

Board.propTypes = {};

export default Board;
