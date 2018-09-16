// Vendor
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';

// Internal
import CreateAccount from '../../components/Signup/Container';
import Hamburger from '../../../common/Hamburger/Hamburger';
import Login from '../../components/Login/Container';

// CSS
import styles from './styles.css';

const Account = (props) => {
  const { loggedIn } = props;

  if (loggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div>
        <div className={styles.gameName} />
      </div>
      <div className={styles.content}>
        <Hamburger className={styles.hamburger} title="Sign Up">
          <CreateAccount />
        </Hamburger>

        <Hamburger className={styles.hamburger} title="Log In">
          <Login />
        </Hamburger>
      </div>
    </div>
  );
};

Account.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};

export default Account;
