// Vendor
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

// Internal
import Hamburger from '../../../common/Hamburger/Hamburger';
import JoinGame from '../../components/JoinGame/Container';
import NewGame from '../../components/NewGame/Container';

// CSS
import styles from './styles.css';

class Home extends Component {
  static serverFetch() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <div className={styles.gameName} />
        <div className={styles.content}>
          <Hamburger className={styles.hamburger} title="New Game">
            <NewGame />
          </Hamburger>

          <Hamburger className={styles.hamburger} title="Join Game" large>
            <JoinGame />
          </Hamburger>
        </div>
      </div>
    );
  }
}

export default Home;
