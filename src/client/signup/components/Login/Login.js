// Vendor
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { get } from 'lodash';
import Button from '../../../common/Button/Button';

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

  onSubmit = (event) => {
    event.preventDefault();
    console.log('logging in');
  };

  render() {
    const { username, password } = this.state;
    const { login } = this.props;

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
          <Button text="Log In" type="submit" onClick={login} />
        </div>
      </form>
    );
  }
}

Login.defaultProps = {
  login: () => {}
};

Login.propTypes = {
  login: PropTypes.func
};

export default Login;
