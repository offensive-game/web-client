import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Game extends Component {
  componentDidMount() {
    const { openConnection } = this.props;
    openConnection();
  }

  render() {
    return <div>Game Screen</div>;
  }
}

PropTypes.propTypes = {
  openConnection: PropTypes.func.isRequired
};

export default Game;
