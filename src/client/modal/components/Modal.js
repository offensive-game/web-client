// Vendor
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';
import Button from '../../common/Button/Button';

// CSS
import styles from './styles.css';

const Modal = (props) => {
  const { title, close, size, component: Component, isOpen, componentProps, ...rest } = props;
  let { actions } = props;

  if (!isOpen) return null;

  const classes = classnames(styles.component, {
    [styles.small]: size === 'small',
    [styles.medium]: size === 'medium',
    [styles.large]: size === 'large'
  });

  if (actions === null) {
    actions = [{ title: 'OK', action: close }];
  }
  return (
    <ReactModal className={classes} overlayClassName={styles.overlay} isOpen={isOpen} {...rest}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        <button type="button" className={styles.close} onClick={close}>
          &#215;
        </button>
      </div>
      <div className={styles.content}>
        <Component {...componentProps} close={close} />
      </div>
      <div className={styles.actions}>
        {actions.map((action) => (
          <Button text={action.title} onClick={action.action} key={title} />
        ))}
      </div>
    </ReactModal>
  );
};

Modal.defaultProps = {
  actions: null,
  componentProps: {},
  isOpen: false,
  size: 'small',
  title: 'Info'
};

Modal.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      action: PropTypes.func.isRequired
    })
  ),
  close: PropTypes.func.isRequired,
  component: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  componentProps: PropTypes.object,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  title: PropTypes.string
};

export default Modal;
