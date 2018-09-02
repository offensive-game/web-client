// Vendor
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Signup = () => (
  <div>
    <Helmet>
      <title>Sign UP</title>
    </Helmet>
    <h2>Signup</h2>
    <Link to="/">Home</Link>
  </div>
);

export default Signup;
