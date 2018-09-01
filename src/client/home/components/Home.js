// Vendor
import React, { Component } from 'react';
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
        <h2>Home</h2>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
};

export default Home;
