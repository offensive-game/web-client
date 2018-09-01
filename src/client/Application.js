import React from 'react';
import styles from './styles.css';

const Application = props => (
  <div>
    <h3 className={styles.demoClass}>Offensive Game</h3>
    {props.children}
  </div>
);

export default Application;
