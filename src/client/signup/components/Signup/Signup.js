// Vendor
import React from 'react';
import { Helmet } from 'react-helmet';

// Internal
import Hamburger from '../../../common/Hamburger/Hamburger';

// CSS
import styles from './styles.css';

const Signup = () => (
  <div>
    <Helmet>
      <title>Sign Up</title>
    </Helmet>
    <div>
      <div className={styles.gameName} />
    </div>
    <div className={styles.content}>
      <Hamburger className={styles.hamburger} title="Sign Up">
        <div>
          Djordje Vukovic
        </div>
      </Hamburger>

      <Hamburger className={styles.hamburger} title="Log In">
        <div>
          Login Here
        </div>
      </Hamburger>
    </div>
  </div>
);

export default Signup;
