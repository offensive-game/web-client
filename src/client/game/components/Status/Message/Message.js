// Vendor
import PropTypes from 'prop-types';
import React from 'react';

// CSS
import styles from './styles.css';

const Message = (props) => {
  const { text } = props;

  return <div className={styles.component}>{text}</div>;
};

Message.propTypes = {
  text: PropTypes.string.isRequired
};

export default Message;
