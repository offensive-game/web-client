import moment from 'moment';

// Vendor
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from '../../../../common/Button/Button';

class GameInfo extends Component {
  state = { remaining: '' };

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
    this.tick();
  }

  componentWillUnmount() {
    if (this.interval) clearInterval(this.interval);
  }

  tick = () => {
    const { name, startTime } = this.props;

    if (!name) clearInterval(this.interval);

    const gameStarts = moment(startTime);
    const diff = Math.max(0, gameStarts.diff(moment(), 'seconds'));

    if (diff > 0) {
      this.setState({ remaining: `${diff}s` });
    }
  };

  joinGame = () => {
    const { id, joinGame } = this.props;
    joinGame(id);
  };

  render() {
    const { name, numberOfPlayers } = this.props;
    const { remaining } = this.state;

    if (!name) {
      return <div>Select game from list</div>;
    }

    return (
      <div>
        <div>
          <span>Name:</span>
          <span>{name}</span>
        </div>
        <div>
          <span>Number of Players:</span>
          <span>{numberOfPlayers}</span>
        </div>
        <div>
          <span>Starts in:</span>
          <span>{remaining}</span>
        </div>
        <Button text="Join" type="button" onClick={this.joinGame} />
      </div>
    );
  }
}

GameInfo.defaultProps = {
  id: null,
  name: null,
  numberOfPlayers: 0,
  startTime: null
};

GameInfo.propTypes = {
  id: PropTypes.string,
  joinGame: PropTypes.func.isRequired,
  name: PropTypes.string,
  numberOfPlayers: PropTypes.number,
  startTime: PropTypes.object
};

export default GameInfo;
