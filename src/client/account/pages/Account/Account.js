// Vendor
import React from 'react';
import { Helmet } from 'react-helmet';

// Internal
import CreateAccount from '../../components/Signup/Container';
import Hamburger from '../../../common/Hamburger/Hamburger';
import Login from '../../components/Login/Container';

// CSS
import styles from './styles.css';

const Account = () => (
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

export default Account;
