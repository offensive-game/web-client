// Vendor
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// Internal
import Button from '../../../common/Button/Button';
import Modal from '../../../modal/components/Container';
import ErrorPopup from '../../../modal/components/ErrorPopup/ErrorPopup';
import { CREATE_GAME_ERROR } from '../../../modal/constants';

// CSS
import styles from './styles.css';

class NewGame extends Component {
  state = {
    name: '',
    numberOfPlayers: 2,
    deadline: 30
  };

  updateName = (event) => {
    const name = event.target.value;
    this.setState({ name });
  };

  updateNumberOfPlayers = (event) => {
    this.setState({ numberOfPlayers: parseInt(event.target.value, 10) });
  };

  updateDeadline = (event) => {
    this.setState({ deadline: parseInt(event.target.value, 10) });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { name, numberOfPlayers, deadline } = this.state;
    const { create, showErrorModal } = this.props;

    if (!name || name.length < 3) {
      showErrorModal(['Name of the game must be at least 3 characters long']);
      return;
    }

    const gameStart = moment();
    gameStart.add(deadline, 'seconds');
    create(name, numberOfPlayers, deadline);
  };

  render() {
    const { name } = this.state;
    const { success } = this.props;

    if (success) return <Redirect to="game/111" push />;

    return (
      <form className={styles.component} onSubmit={this.onSubmit}>
        <div className={styles.wrapper}>
          <div className={styles.label}>Game Name:</div>
          <div className={styles.input}>
            <input type="text" value={name} onChange={this.updateName} name="gameName" />
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.label}>Number of Players:</div>
          <div className={styles.input}>
            <select onChange={this.updateNumberOfPlayers} defaultValue="2">
              <option value="2">2</option>
              <option value="3">4</option>
              <option value="4">5</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.label}>Game Start:</div>
          <div className={styles.input}>
            <select onChange={this.updateDeadline} defaultValue="30">
              <option value="30">30 seconds after creation</option>
              <option value="60">1 minute after creation</option>
              <option value="120">2 minutes after creation</option>
            </select>
          </div>
        </div>

        <Button text="Create & Join" type="submit" className={styles.button} />

        <Modal component={ErrorPopup} name={CREATE_GAME_ERROR} />
      </form>
    );
  }
}

NewGame.propTypes = {
  create: PropTypes.func.isRequired,
  showErrorModal: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired
};

export default NewGame;
