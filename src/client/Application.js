// Vendor
import React from 'react';
import { hot } from 'react-hot-loader';

// CSS
import styles from './styles.css';

const Application = ({ children }) => (
  <div className={styles.application}>
    <h3> Offensive Game</h3>
    {children}
  </div>
);

export default hot(module)(Application);
