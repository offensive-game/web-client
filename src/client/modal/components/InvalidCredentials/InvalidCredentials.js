// Vendor
import PropTypes from 'prop-types';
import React from 'react';

const InvalidCredentials = (props) => {
  const { errors } = props;

  return (
    <ul>
      {errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  );
};

InvalidCredentials.propTypes = {
  // close: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default InvalidCredentials;
