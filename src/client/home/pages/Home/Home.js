// Vendor
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

// Internal
import Hamburger from '../../../common/Hamburger/Hamburger';
import JoinGame from '../../components/JoinGame/Container';
import LogOut from '../../components/LogOut/Container';
import NewGame from '../../components/NewGame/Container';
import { loadGames } from '../../actions/joinGame';
import { loadUser } from '../../../actions/user';

// CSS
import styles from './styles.css';

class Home extends Component {
  static async serverFetch(dispatch) {
    return Promise.all([
      dispatch(loadGames()),
      dispatch(loadUser())
    ]);
  }

  componentDidMount() {
    const { loaded, inProgress, loadUserAction } = this.props;

    if (!loaded && !inProgress) {
      loadUserAction();
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <div className={styles.gameName} />
        <LogOut/>
        <div className={styles.content}>
          <Hamburger className={styles.hamburger} title="New Game">
            <NewGame />
          </Hamburger>

          <Hamburger className={styles.hamburger} title="Join Game" large>
            <JoinGame />
          </Hamburger>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  inProgress: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
  loadUserAction: PropTypes.func.isRequired
};

export default Home;
