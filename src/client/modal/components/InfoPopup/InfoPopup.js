// Vendor
import PropTypes from 'prop-types';
import React from 'react';

const InfoPopup = (props) => {
  const { message } = props;

  return <div>{message}</div>;
};

InfoPopup.propTypes = {
  message: PropTypes.string.isRequired
};

export default InfoPopup;
