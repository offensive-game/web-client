// Vendor
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

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
        <h2>Home</h2>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
};

export default Home;
