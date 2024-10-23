import React from 'react';
import PropertyCard from '../PropertyCard/PropertyCard';
import Map from '../Map/Map';
import styles from './PropertyList.module.css'
import { useProperties } from '../../context/PropertiesContext';
import { SearchPropertyResponseDto } from '../../../../src/zillow/dto/search-property-response.dto';
import PaginationButtonSection from '../PaginationButton/PaginationButtonSection';
import getUserLocation from '../../utils/getUserLocation';

const PropertyList: React.FC = () => {
    const { properties, loading } = useProperties();
    console.log('currentlocation', getUserLocation())
    if(loading) return <p>{}Loading properties...</p>;
    
  return (
    <div>
      {properties && (
        <div className={styles.propertyListContainer}>
          {properties.map((property) => (
           <PropertyCard key={property.zpid} property={property as SearchPropertyResponseDto} />
          ))}
        </div>
      )}

      {!properties && <Map />}
      {properties &&<PaginationButtonSection />}
      
    </div>
  );
};

export default PropertyList;
