// Vendor
import PropTypes from 'prop-types';
import React from 'react';

const ErrorPopup = (props) => {
  const { errors } = props;

  return (
    <ul>
      {errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  );
};

ErrorPopup.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ErrorPopup;
