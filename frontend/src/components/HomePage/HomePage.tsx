import React from 'react';
import PropertyList from '../PropertyList/PropertyList';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <PropertyList/>
    </div>
  );
};

export default HomePage;