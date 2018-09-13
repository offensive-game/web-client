// Vendor
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { compact, get } from 'lodash';
import Button from '../../../common/Button/Button';
import { validateEmail, validatePassword, validateUsername } from '../../helpers/validation';

// CSS
import styles from './styles.css';

class Signup extends Component {
  state = {
    username: '',
    password: '',
    email: ''
  };

  inputChange = (event) => {
    const name = get(event, 'target.name', '');
    const value = get(event, 'target.value', '');
    this.setState({ [name]: value });
  };

  componentDidUpdate(prevProps) {
    const { error, showErrorsModal } = this.props;

    const previousError = prevProps.error && prevProps.error.length;
    const currentError = error && error.length;

    if (!previousError && currentError) {
      showErrorsModal(error);
    }
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

    return (
      <form className={styles.component} onSubmit={this.onSubmit}>
        <div className={styles.wrapper}>
          <div className={styles.label}>E-Mail address:</div>
          <div className={styles.input}>
            <input type="text" value={email} onChange={this.inputChange} name="email" />
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.label}>Username:</div>
          <div className={styles.input}>
            <input type="text" value={username} onChange={this.inputChange} name="username" />
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.label}>Password:</div>
          <div className={styles.input}>
            <input type="password" value={password} onChange={this.inputChange} name="password" />
          </div>
        </div>
        <div className={styles.signupButton}>
          <Button text="Sign Up" type="submit" />
        </div>
      </form>
    );
  }
}

Signup.defaultProps = {
  error: null
};

Signup.propTypes = {
  signup: PropTypes.func.isRequired,
  error: PropTypes.string,
  showErrorsModal: PropTypes.func.isRequired
};

export default Signup;
