// Vendor
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// Internal
import { getLandByName } from './helper';

// CSS
import styles from './styles.css';

class Land extends Component {
  logName = () => {
    const { name } = this.props;
    console.log(name);
  };

  render() {
    const { color, name } = this.props;
    const LandComponent = getLandByName(name);

    const classes = classnames({
      [styles.colorGreen]: color === 'green',
      [styles.colorRed]: color === 'red',
      [styles.colorBlue]: color === 'blue',
      [styles.colorBrown]: color === 'brown',
      [styles.colorPurple]: color === 'purple',
      [styles.colorYellow]: color === 'yellow',
      [styles.colorGrey]: color === 'grey'
    });

    return <LandComponent onClick={this.logName} className={classes} />;
  }
}

Land.defaultProps = {
  color: 'grey'
};

Land.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default Land;
