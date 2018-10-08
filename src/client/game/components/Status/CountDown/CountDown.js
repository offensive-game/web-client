// Vendor
import classnames from 'classnames';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// CSS
import styles from './styles.css';

const BLINKING_PERIOD = 10;

class CountDown extends Component {
  state = { remaining: null };

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
    this.tick();
  }

  componentWillUnmount() {
    if (this.interval) clearInterval(this.interval);
  }

  tick = () => {
    const { deadline } = this.props;
    if (!deadline) {
      return;
    }

    const deadlineMoment = moment(deadline);
    const remaining = Math.max(0, deadlineMoment.diff(moment(), 'seconds'));
    this.setState({ remaining });
  };

  render() {
    const { title } = this.props;
    const { remaining } = this.state;

    const classes = classnames(styles.component, {
      [styles.disabled]: remaining === 0
    });

    const remainingClasses = classnames(styles.remaining, {
      [styles.remainingRegular]: remaining > BLINKING_PERIOD,
      [styles.remainingEnding]: remaining <= BLINKING_PERIOD
    });

    return (
      <section className={classes}>
        <header className={styles.header}>{title}</header>
        <div className={remainingClasses}>{remaining}</div>
      </section>
    );
  }
}

CountDown.defaultProps = {
  title: '',
  deadline: null
};

CountDown.propTypes = {
  deadline: PropTypes.number,
  title: PropTypes.string
};

export default CountDown;
