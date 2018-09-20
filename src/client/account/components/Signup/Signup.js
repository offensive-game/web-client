// Vendor
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { compact, get } from 'lodash';
import Button from '../../../common/Button/Button';
import Modal from '../../../modal/components/Container';
import ErrorPopup from '../../../modal/components/ErrorPopup/ErrorPopup';
import InfoPopup from '../../../modal/components/InfoPopup/InfoPopup';
import { INVALID_SIGNUP_DATA, SIGNUP_SUCCESS } from '../../../modal/constants';
import { validateEmail, validatePassword, validateUsername } from '../../helpers/validation';

// CSS
import styles from './styles.css';

class Signup extends Component {
  state = {
    username: '',
    password: '',
    email: ''
  };

  componentDidUpdate(prevProps) {
    const { error, showErrorsModal, showSuccessModal, success } = this.props;

    const successModal = !prevProps.success && success;
    const errorModal = !prevProps.error && error;

    if (errorModal) {
      showErrorsModal([error]);
    }

    if (successModal) {
      showSuccessModal();
    }
  }

  inputChange = (event) => {
    const name = get(event, 'target.name', '');
    const value = get(event, 'target.value', '');
    this.setState({ [name]: value });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { username, password, email } = this.state;
    const { showErrorsModal } = this.props;
    const { signup } = this.props;

    const errors = compact([validateUsername(username), validatePassword(password), validateEmail(email)]);

    if (errors.length) {
      showErrorsModal(errors);
      return;
    }

    signup(username, password, email);
  };

  render() {
    const { username, password, email } = this.state;
    const { clearSignupStatus } = this.props;

    return (
      <form className={styles.component} onSubmit={this.onSubmit}>
        <div className={styles.wrapper}>
          <div>E-Mail address:</div>
          <input type="text" value={email} onChange={this.inputChange} name="email" />
        </div>
        <div className={styles.wrapper}>
          <div>Username:</div>
          <input type="text" value={username} onChange={this.inputChange} name="username" />
        </div>
        <div className={styles.wrapper}>
          <div>Password:</div>
          <input type="password" value={password} onChange={this.inputChange} name="password" />
        </div>
        <div className={styles.signupButton}>
          <Button text="Sign Up" type="submit" />
        </div>

        <Modal component={ErrorPopup} name={INVALID_SIGNUP_DATA} closeAction={clearSignupStatus} />
        <Modal component={InfoPopup} name={SIGNUP_SUCCESS} closeAction={clearSignupStatus} />
      </form>
    );
  }
}

Signup.defaultProps = {
  error: null
};

Signup.propTypes = {
  clearSignupStatus: PropTypes.func.isRequired,
  error: PropTypes.string,
  showErrorsModal: PropTypes.func.isRequired,
  showSuccessModal: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired
};

export default Signup;
