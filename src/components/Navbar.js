import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import { AiOutlineSetting } from 'react-icons/ai';
import styles from './styles/Navbar.module.css';

const Navbar = () => (
  <>
    <nav className={styles.nav}>
      <Link to="/">
        <TiArrowBackOutline className={styles.pointer} />
      </Link>
      <Link to="/" className={styles.navText}>
        Covid Data
      </Link>
      <AiOutlineSetting className={styles.settings} />
      <Outlet />
    </nav>
  </>
);

export default Navbar;
