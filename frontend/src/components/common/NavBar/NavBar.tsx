import React from 'react';
import Search from '../../Search/Search';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {

  return (
    <div className={styles.navBarWrapper}>
    <nav className={styles.navBar}>
      <div className={styles.navLinks}>
      <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className={styles.searchContainer}>
        <Search/>
      </div>
      <div className={styles.signInSignUpContainer}> 
      <Link className={styles.signIn} to="/users/signin">Sign In</Link>
      <Link className={styles.signUp} to="/users/signup">Sign Up</Link>
      </div>
    </nav>
    </div>
  );
}

export default NavBar;
 