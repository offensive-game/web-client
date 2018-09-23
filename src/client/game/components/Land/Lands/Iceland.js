// Vendor
import PropTypes from 'prop-types';
import React from 'react';

const Iceland = (props) => {
  const { className, onClick } = props;
  return (
    <path
      id="iceland"
      onClick={onClick}
      className={className}
      d="M 324,112.5 C 324,112.5 326,114.375 326.50001,113.375 C 327.00001,112.37501 325.87501,111.125 327.37501,112.25 C 328.875,113.375 328.75,113 329.25001,113.625 C 329.75001,114.25 332.75,112.125 331.625,114.125 C 330.5,116.12501 329.75001,116.875 330.5,116.75001 C 331.25001,116.625 330.375,116 331.37501,117.25001 C 332.37501,118.5 332.25001,119.5 333.62501,118.37501 L 334.875,114.50001 C 334.875,114.50001 338.37501,114.625 338.125,115.875 C 337.87501,117.125 337,117 338.87501,116 C 340.75,115 339.75,113.25 341.00001,114.375 C 342.25001,115.5 342.87501,116.625 343.37501,115.5 C 343.87501,114.375 342.25001,113.125 343.75001,113.375 C 345.25,113.625 345.37501,115 346.25,113.375 C 347.12501,111.75001 346.12501,110.875 347.5,111.125 C 348.87501,111.375 348.25001,111.75001 349.25001,110.875 C 350.25,110 350.00001,109.125 351.00001,110 C 352.00001,110.875 352.00001,111.25001 352.00001,111.25001 C 352.00001,111.25001 354,111.5 354.5,111.75001 C 355,112 354.25001,110.75 354.75001,112.75 C 355.25001,114.75 355.37501,115.375 356.00001,115.125 C 356.625,114.875 357.00001,114.00001 357.00001,115.62501 C 357.00001,117.25001 355.87501,117.75 357.375,117.5 C 358.875,117.25001 359.25001,117.125 359.375,118.25 C 359.5,119.375 360.12501,120.25 360.12501,120.25 C 360.12501,120.25 360.25001,121.12501 360.12501,121.62501 C 360,122.125 359.75001,122.375 360,123 C 360.25001,123.625 360.5,124.625 360,124.87501 C 359.5,125.125 358.75001,125.625 357.875,125.75 C 357.00001,125.875 356.50001,126.5 356.25,127.12501 C 356.00001,127.75 357.00001,127.375 355.87501,128.75001 C 354.75001,130.125 355.125,130.37501 354.37501,130.625 C 353.62501,130.87501 352.75001,131.375 352.75001,131.375 L 349.37501,131.875 L 348.625,130.5 C 348.625,130.5 348.12501,129.375 347.62501,129.87501 C 347.12501,130.37501 347.75001,131.375 347.25001,131.50001 C 346.75001,131.625 345.50001,129.375 345.50001,130.37501 C 345.50001,131.375 346.12501,133.12501 346.12501,133.12501 C 346.12501,133.12501 346.25,134.625 345.62501,134.875 C 345.00001,135.125 345.00001,135.87501 343.37501,136 C 341.75001,136.125 341.62501,136.875 340.75,137 C 339.875,137.125 339.62501,138.875 338.00001,137.625 C 336.375,136.37501 331.87501,134.375 331,134.625 C 330.12501,134.875 329.75001,135.25001 328.00001,134.75001 C 326.25001,134.25 325.5,135.375 325.125,134.625 C 324.75001,133.875 324.62501,135 325,133.25 C 325.37501,131.50001 327.00001,130.625 327.00001,130.625 C 327.00001,130.625 327.62501,130.25 327.50001,129.625 C 327.37501,129 327.50001,128.75001 326.75,128.625 C 326,128.5 326.25001,128.125 325.87501,127.12501 C 325.5,126.125 325.125,126.25 324.12501,126.5 C 323.12501,126.75 322.875,127.875 321.75,126.625 C 320.625,125.375 320.125,125.625 320.625,124.87501 C 321.125,124.125 321.00001,123.875 322.25,123.625 C 323.50001,123.375 323.62501,124.625 324.12501,123.125 C 324.62501,121.62501 325.125,121 325.125,121 C 325.125,121 324.62501,120.75 323.75001,120.875 C 322.875,121 323.12501,122 322.12501,120.00001 C 321.125,118 320,118 320,118 C 320,118 319.75001,118 320.37501,117 C 321.00001,116 321.625,116 322.25,115 C 322.875,114.00001 321.75,113.125 322.62501,112.25 C 323.50001,111.375 323.75001,112 323.75001,112 L 324,112.5 z"
    />
  );
};

Iceland.defaultProps = {
  className: ''
};

Iceland.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default Iceland;
