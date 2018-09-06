// Vendor
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { get } from 'lodash';

// Internal
import Button from '../../../common/Button/Button';
import { validatePassword, validateUsername } from '../../helpers/validation';

// CSS
import styles from './styles.css';

class Login extends Component {
  state = {
    username: '',
    password: '',
    usernameError: null,
    passwordError: null
  };

  static getDerivedStateFromProps(props, state) {
    const { error } = props;
    if (error) {
      return {
        ...state,
        usernameError: error,
        username: '',
        password: ''
      };
    }

    return state;
  }

  inputChange = (event) => {
    const name = get(event, 'target.name', '');
    const value = get(event, 'target.value', '');

    this.clearErrors();
    this.setState({ [name]: value });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;
    const { login } = this.props;

    const usernameError = validateUsername(username);
    const passwordError = validatePassword(password);

    if (usernameError || passwordError) {
      this.setErrors(usernameError, passwordError);
      return;
    }

    login(username, password);
  };

  setErrors = (usernameError, passwordError) => {
    this.setState({ usernameError, passwordError });
  };

  clearErrors = () => {
    const { clearError } = this.props;
    this.setState({ usernameError: null, passwordError: null });
    clearError();
  };

  render() {
    const { username, password, usernameError, passwordError } = this.state;

    const usernameValue = usernameError || username;
    const passwordValue = password;

    const usernameClass = classnames({
      [styles.error]: !!usernameError
    });
    const passwordClass = classnames({
      [styles.error]: !!passwordError
    });

    return (
      <form className={styles.component} onSubmit={this.onSubmit}>
        <div className={styles.wrapper}>
          <div className={styles.label}>Username:</div>
          <div className={styles.input}>
            <input className={usernameClass} type="text" value={usernameValue} onChange={this.inputChange} name="username" />
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.label}>Password:</div>
          <div className={styles.input}>
            <input className={passwordClass} type="password" value={passwordValue} onChange={this.inputChange} name="password" />
          </div>
        </div>
        <div className={styles.loginButton}>
          <Button text="Log In" type="submit" />
        </div>
      </form>
    );
  }
}

Login.defaultProps = {
  error: null
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default Login;
