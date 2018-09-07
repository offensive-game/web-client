// Vendor
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ hasCookie, ...props }) => {
  if (hasCookie) {
    return <Route {...props} />;
  }
  return <Redirect to="/account" />;
};

export default ProtectedRoute;
