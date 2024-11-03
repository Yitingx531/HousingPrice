import React from 'react';
import styles from './HomePage.module.css';
import Map from '../common/Map/Map';
import { useProperties } from '../../context/PropertiesContext';

const HomePage: React.FC = () => {
  const {setSearchTerm, searchTerm} = useProperties();
  setSearchTerm('')
  console.log('searchTerminhomepage', searchTerm)
  //TODO: add more sections//

  return (
    <div className={styles.homePage}>
     <Map />
    </div>
  );
};

export default HomePage;