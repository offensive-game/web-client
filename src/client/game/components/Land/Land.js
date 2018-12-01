// Vendor
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// Internal
import uiData from './data';

// CSS
import styles from './styles.css';

class Land extends Component {
  logName = () => {
    const { name } = this.props;
    console.log(name);
  };

  render() {
    const { color, name } = this.props;

    const classes = classnames({
      [styles.colorGreen]: color === 'green',
      [styles.colorRed]: color === 'red',
      [styles.colorBlue]: color === 'blue',
      [styles.colorBrown]: color === 'brown',
      [styles.colorPurple]: color === 'purple',
      [styles.colorYellow]: color === 'yellow',
      [styles.colorGrey]: color === 'grey'
    });

    const { d, text } = uiData[name];
    const { x, y } = text;

    const formattedName = name.replace(/_/g, ' ');

    return (
      <g>
        <path id={name} onClick={this.logName} className={classes} d={d} />
        <text className={styles.text} x={x} y={y}>
          <tspan>{formattedName}</tspan>
          <tspan>(11)</tspan>
        </text>
      </g>
    );
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
