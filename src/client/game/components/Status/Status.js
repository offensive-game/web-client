// Vendor
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// CSS
import styles from './styles.css';

class Status extends Component {
  render() {
    return (
      <div className={styles.component}>
        Game Status
      </div>
    );
  }
}

Status.propTypes = {};

export default Status;
