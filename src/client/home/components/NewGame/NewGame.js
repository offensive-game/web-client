// Vendor
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// Internal
import Button from '../../../common/Button/Button';
import Modal from '../../../modal/components/Container';
import ErrorPopup from '../../../modal/components/ErrorPopup/ErrorPopup';

// CSS
import styles from './styles.css';

// Constants
import { CREATE_GAME_ERROR } from '../../../modal/constants';

class NewGame extends Component {
  state = {
    name: '',
    numberOfPlayers: 2,
    deadline: 3
  };

  componentDidUpdate(prevProps) {
    const { success: oldSuccess } = prevProps;
    const { success: newSuccess } = this.props;
    const { history, game } = this.props;

    if (oldSuccess === null && newSuccess === true) {
      history.push(`/game/${game.id}`);
    }
  }

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

    create(name, numberOfPlayers, deadline);
  };

  render() {
    const { name } = this.state;

    return (
      <form className={styles.component} onSubmit={this.onSubmit}>
        <div className={styles.wrapper}>
          <div>Game Name:</div>
          <input className={styles.inputElement} type="text" value={name} onChange={this.updateName} name="gameName" />
        </div>

        <div className={styles.wrapper}>
          <div>Players:</div>
          <select className={styles.inputElement} onChange={this.updateNumberOfPlayers} defaultValue="2">
            <option value="2">2</option>
            <option value="3">4</option>
            <option value="4">5</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>

        <div className={styles.wrapper}>
          <div>Game Start:</div>
          <select className={styles.inputElement} onChange={this.updateDeadline} defaultValue="3">
            <option value="3">3 seconds after creation</option>
            <option value="30">30 seconds after creation</option>
            <option value="60">1 minute after creation</option>
            <option value="120">2 minutes after creation</option>
            <option value="1200">20 minutes after creation</option>
          </select>
        </div>

        <Button text="Create & Join" type="submit" className={styles.button} />

        <Modal component={ErrorPopup} name={CREATE_GAME_ERROR} />
      </form>
    );
  }
}

NewGame.defaultProps = {
  game: null,
  success: null
};

NewGame.propTypes = {
  create: PropTypes.func.isRequired,
  game: PropTypes.object,
  history: PropTypes.object.isRequired,
  showErrorModal: PropTypes.func.isRequired,
  success: PropTypes.bool
};

export default NewGame;
