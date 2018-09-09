// Vendor
import React from 'react';
import { hot } from 'react-hot-loader';

// CSS
import styles from './styles.css';

const Application = ({ children }) => (
  <div className={styles.application}>
    {children}
  </div>
);

export default hot(module)(Application);
