// Vendor
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { compact, get } from 'lodash';
import { Redirect } from 'react-router-dom';

// Internal
import Button from '../../../common/Button/Button';
import InvalidCredentials from '../../../modal/components/InvalidCredentials/InvalidCredentials';
import Modal from '../../../modal/components/Container';
import { validatePassword, validateUsername } from '../../helpers/validation';

// Constants
import { INVALID_CREDENTIALS } from '../../../modal/constants';

// CSS
import styles from './styles.css';

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  inputChange = (event) => {
    const name = get(event, 'target.name', '');
    const value = get(event, 'target.value', '');

    this.setState({ [name]: value });
  };

  componentDidUpdate = (prevProps) => {
    const { error, showErrorsModal } = this.props;

    const previousError = prevProps.error && prevProps.error.length;
    const currentError = error && error.length;

    if (!previousError && currentError) {
      showErrorsModal(error);
    }
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;
    const { showErrorsModal } = this.props;
    const { login } = this.props;

    const errors = compact([validateUsername(username), validatePassword(password)]);

    if (errors.length) {
      showErrorsModal(errors);
      return;
    }

    login(username, password);
  };

  render() {
    const { username, password } = this.state;
    const { loggedIn } = this.props;

    if (loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <form className={styles.component} onSubmit={this.onSubmit}>
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
        <div className={styles.loginButton}>
          <Button text="Log In" type="submit" />
        </div>
        <Modal component={InvalidCredentials} name={INVALID_CREDENTIALS} />
      </form>
    );
  }
}

Login.defaultProps = {
  error: []
};

Login.propTypes = {
  error: PropTypes.string,
  login: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  showErrorsModal: PropTypes.func.isRequired
};

export default Login;
