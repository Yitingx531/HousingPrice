import React from 'react';
import NavBar from '../NavBar/NavBar';
import PropertyList from '../PropertyList/PropertyList';
import styles from './HomePage.module.css';
import { PropertiesProvider } from '../../context/PropertiesContext';

const HomePage: React.FC = () => {
  return (
    <PropertiesProvider>
    <div className={styles.homePage}>
      <NavBar/>
      <PropertyList/>
    </div>
    </PropertiesProvider>
  );
};

export default HomePage;
