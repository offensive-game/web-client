// Vendor
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { get } from 'lodash';
import Button from '../../../common/Button/Button';

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

  onSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const { username, password, email } = this.state;
    const { signup } = this.props;

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
          <Button text="Sign Up" type="submit" onClick={signup} />
        </div>
      </form>
    );
  }
}

Signup.defaultProps = {
  signup: () => {}
};

Signup.propTypes = {
  signup: PropTypes.func
};

export default Signup;
