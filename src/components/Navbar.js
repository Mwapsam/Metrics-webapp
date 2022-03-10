import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import { HiSearchCircle } from 'react-icons/hi';
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
      <HiSearchCircle className={styles.settings} />
      <Outlet />
    </nav>
  </>
);

export default Navbar;
