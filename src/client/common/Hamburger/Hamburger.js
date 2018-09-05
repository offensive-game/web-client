// Vendor
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

// CSS
import styles from './styles.css';

class Hamburger extends Component {
  state = {
    opened: false
  };

  headerClick = () => {
    const { opened } = this.state;
    this.setState({ opened: !opened});
  };

  render() {
    const { className, children, title } = this.props;
    const { opened } = this.state;

    const classes = classnames(styles.component, className);
    const expandingClasses = classnames(styles.expanding, {
      [styles.opened]: opened
    });
    const titleClasses = classnames(styles.title, {
      [styles.titleBorder]: opened
    });

    return (
      <div className={classes}>
        <div className={titleClasses} onClick={this.headerClick}>
          {title}
        </div>
        <div className={expandingClasses}>{children}</div>
      </div>
    );
  }
}

Hamburger.defaultProps = {
  className: null
};

Hamburger.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default Hamburger;
