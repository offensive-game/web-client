// Vendor
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// Internal
import { getLandByName } from './helper';

class Land extends Component {
  logName = () => {
    const { name } = this.props;
    console.log(name);
  };

  render() {
    const { name } = this.props;
    const LandComponent = getLandByName(name);

    return <LandComponent onClick={this.logName} />;
  }
}

Land.propTypes = {
  name: PropTypes.string.isRequired
};

export default Land;
