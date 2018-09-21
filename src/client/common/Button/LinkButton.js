// Vendor
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import styles from './styles.css';

const LinkButton = (props) => {
  const { className, mode, text, to, onClick } = props;
  const classes = classnames(className, styles.component, styles.linkButton, {
    [styles.primary]: mode === 'primary',
    [styles.secondary]: mode === 'secondary'
  });

  return (
    <Link className={classes} onClick={onClick} to={to}>
      {text}
    </Link>
  );
};

LinkButton.defaultProps = {
  className: '',
  type: 'button',
  mode: 'primary',
  onClick: null
};

LinkButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  mode: PropTypes.oneOf(['primary', 'secondary'])
};

export default LinkButton;
