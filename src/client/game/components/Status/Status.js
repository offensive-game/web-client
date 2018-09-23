// Vendor
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../../../common/Button/Button';

// Internal
import CountDown from './CountDown/Container';
import Message from './Message/Container';
import PlayersList from './PlayersList/Container';

// CSS
import styles from './styles.css';

class Status extends Component {
  state = { expanded: false };

  expand = () => {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  };

  render() {
    const { mobile } = this.props;
    const { expanded } = this.state;

    const opened = !mobile || expanded;

    const classes = classnames(styles.component, {
      [styles.expanded]: opened,
      [styles.closed]: !opened
    });

    return (
      <div className={classes}>
        {mobile && <button onClick={this.expand}>E</button>}
        <Message />
        <CountDown />
        <PlayersList />
        <Button text="Cards" />
        <Button text="Surrender" className={styles.surrender} />
      </div>
    );
  }
}

Status.propTypes = {
  mobile: PropTypes.bool.isRequired
};

export default Status;
