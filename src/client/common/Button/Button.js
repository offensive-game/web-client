// Vendor
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// CSS
import styles from './styles.css';

const Button = (props) => {
  const { className, mode, text, type, onClick } = props;
  const classes = classnames(className, styles.component, {
    [styles.primary]: mode === 'primary',
    [styles.secondary]: mode === 'secondary'
  });

  return (
    <button className={classes} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  type: 'button',
  mode: 'primary',
  onClick: null
};

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  onClick: PropTypes.func,
  mode: PropTypes.oneOf(['primary', 'secondary'])
};

export default Button;
