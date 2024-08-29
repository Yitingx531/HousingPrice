import React from 'react';
import PropertyCard from '../PropertyCard/PropertyCard';
import styles from './PropertyList.module.css'
import { useProperties } from '../../context/PropertiesContext';
import { SearchPropertyResponseDto } from '../../../../src/zillow/dto/search-property-response.dto';

const PropertyList: React.FC = () => {
    const { properties, loading } = useProperties();

    if(loading) return <p>Loading properties...</p>;
    
  return (
    <div>
      {!loading && properties && (
        <div className={styles.propertyListContainer}>
          {properties.map((property, index) => (
           <PropertyCard key={property.zpid} property={property as SearchPropertyResponseDto} />
          ))}
        </div>
      )}
      {!loading && !properties && <p>No properties found</p>}
    </div>
  );
};

export default PropertyList;
