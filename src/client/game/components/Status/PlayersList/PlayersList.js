// Vendor
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// CSS
import styles from './styles.css';

const PlayersList = (props) => {
  const { players } = props;

  const playersElems = players.map((player) => {
    const { color, name, numberOfLands } = player;
    const boxClasses = classnames(styles.colorBox, {
      [styles.colorBlue]: color === 'blue',
      [styles.colorRed]: color === 'red',
      [styles.colorYellow]: color === 'yellow',
      [styles.colorBrown]: color === 'brown',
      [styles.colorPurple]: color === 'purple',
      [styles.colorGreen]: color === 'green'
    });
    return (
      <li key={name} className={styles.list}>
        <div className={styles.player}>
          <div className={boxClasses} />
          <div className={styles.name}>{name}</div>
        </div>
        <div>{numberOfLands}</div>
      </li>
    );
  });

  return (
    <ul className={styles.component}>
      {playersElems}
    </ul>
  );
};

PlayersList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    numberOfLands: PropTypes.number.isRequired
  })).isRequired
};

export default PlayersList;
