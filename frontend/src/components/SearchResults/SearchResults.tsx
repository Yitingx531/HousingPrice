import React from 'react';
import PropertyCard from '../PropertyCard/PropertyCard';
import Map from '../Map/Map';
import styles from './SearchResults.module.css'
import { useProperties } from '../../context/PropertiesContext';
import { SearchPropertyResponseDto } from '../../../../src/zillow/dto/search-property-response.dto';
import PaginationButtonSection from '../PaginationButton/PaginationButtonSection';
import useUserLocation from '../../hooks/useUserLocation';

const SearchResults: React.FC = () => {
    const { properties, loading, searchTerm } = useProperties();
    const userLocation = useUserLocation();
    console.log('userlocation', userLocation)
    console.log('searchTerminSearchResults', searchTerm)
    // const formatSearchTerm = (location: string): string =>  {
    //   if(location){

    //   }
    //  return location;
    // }
    if (loading) return <div className={styles.loadingDiv}>Loading Properties...</div>;

  return (
    <div>
      <div className={styles.propertyResult}>Showing properties in {searchTerm}</div>
      {properties && (
        <div className={styles.searchResultsContainer}>
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

export default SearchResults;
