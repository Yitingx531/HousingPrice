import React from 'react';
import Search from '../Search/Search';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {

  return (
    <nav className={styles.navBar}>
      <ul className={styles.navLinks}>
      <li><Link to="/">Home</Link></li>
        <li><Link to="#">About</Link></li>
        <li><Link to="#">Services</Link></li>
        <li><Link to="#">Contact</Link></li>
      </ul>
      <div className={styles.searchContainer}>
        <Search/>
      </div>
    </nav>
  );
}

export default NavBar;