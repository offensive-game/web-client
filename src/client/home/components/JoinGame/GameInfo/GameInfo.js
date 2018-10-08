// Vendor
import PropTypes from 'prop-types';
import React from 'react';

// Internal
import LinkButton from '../../../../common/Button/LinkButton';

// CSS
import styles from './styles.css';

function GameInfo(props) {
  const { name, numberOfPlayers, id } = props;

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
      <LinkButton className={styles.button} text="Join" to={`/game/${id}`} />
    </div>
  );
}

GameInfo.defaultProps = {
  id: null,
  name: null,
  numberOfPlayers: 0
};

GameInfo.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  numberOfPlayers: PropTypes.number
};

export default GameInfo;
