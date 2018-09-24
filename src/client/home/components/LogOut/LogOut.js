// Vendor
import PropTypes from 'prop-types';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { logout } from 'react-icons-kit/iconic/logout';

// CSS
import styles from './styles.css';

const LogOut = ({ logOut }) => (
  <a onClick={logOut} className={styles.component} href="/">
    <Icon size={24} icon={logout} />
  </a>
);

LogOut.propTypes = {
  logOut: PropTypes.func.isRequired
};

export default LogOut;
