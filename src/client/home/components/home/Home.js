// Vendor
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

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
        <Link to="signup" />
      </div>
    );
  }
}

export default Home;
