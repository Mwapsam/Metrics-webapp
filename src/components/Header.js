import React from 'react';
import image from '../assests/new.jpg';
import styles from './styles/Header.module.css';

const Header = () => (
  <>
    <div className={styles.image}>
      <img src={image} alt="europe" />
      <h1 className={styles.text}>
        World Covid 19 Cases
        {' '}
        <br />
        Updated Reports
      </h1>
    </div>
  </>
);
export default Header;
