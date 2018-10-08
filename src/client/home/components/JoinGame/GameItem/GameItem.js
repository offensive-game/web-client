// Vendor
import classnames from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// CSS
import styles from './styles.css';

class GameItem extends Component {
  state = { remaining: '' };

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
    this.tick();
  }

  componentWillUnmount() {
    if (this.interval) clearInterval(this.interval);
  }

  tick = () => {
    const { startTime, gameTimeout, id } = this.props;

    const gameStarts = moment(startTime);
    const diff = Math.max(0, gameStarts.diff(moment(), 'seconds'));

    if (diff <= 0) {
      gameTimeout(id);
    } else {
      this.setState({ remaining: `${diff}s` });
    }
  };

  clickHandler = () => {
    const { id, onClick } = this.props;
    onClick(id);
  };

  render() {
    const { name, selected } = this.props;
    const { remaining } = this.state;

    const time = `[${remaining}]`;
    const classes = classnames(styles.component, {
      [styles.selected]: selected
    });

    return (
      <li onClick={this.clickHandler} role="button" className={classes}>
        <span className={styles.value}>{name}</span>
        <span className={styles.countdown}>{time}</span>
      </li>
    );
  }
}

GameItem.defaultProps = {
  gameTimeout: () => {}
};

GameItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  startTime: PropTypes.number.isRequired,
  gameTimeout: PropTypes.func
};

export default GameItem;
