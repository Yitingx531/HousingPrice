import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import formatPrice from '../../utils/formatPrice';
import Map from '../Map/Map'; 
import styles from './PropertyDetail.module.css';
import { PropertyDetailResponseDto } from '../../../../src/zillow/dto/property-detail-response.dto';

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<PropertyDetailResponseDto>();
  const [loading, setLoading] = useState<boolean>(true);
  const [showMap, setShowMap] = useState<boolean>(false); // State to control map visibility

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/zillow/property-details?zpid=${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch property details');
        }
        const propertyDetailData: PropertyDetailResponseDto = await response.json();
        console.log('propertyDetailData', propertyDetailData);
        setProperty(propertyDetailData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to get detail of this property', error);
      }
    };

    if (id) {
      fetchPropertyDetails();
    }
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!property) {
    return <p>Property not found</p>;
  }

  const displayedPhotos = property.responsivePhotos.slice(0, 5); // Display only the first 5 photos

  return (
    <div className={styles.propertyDetailsContainer}>
      <div className={styles.propertyImageContainer}>
        {displayedPhotos.map((image, index) => (
          <img key={index} src={image.url} alt={property.abbreviatedAddress} className={styles.propertyImage} />
        ))}
      </div>
      <h1>{formatPrice(property.price)}</h1>
      <p>{property.abbreviatedAddress}, {property.city}, {property.state} {property.zipcode}</p>
      <div className={styles.propertyDetailSection}>
        <p>{property.bedrooms} bds</p> {'  '}
        <p>{property.bathrooms} ba</p> {'  '}
        <p>{property.livingArea} sqft</p>
      </div>
      <button className={styles.mapButton} onClick={() => setShowMap(true)}>View on Map</button> {/* Show map when button is clicked */}
      
      {/* Conditionally render the map */}
      {showMap && (
        <Map longitude={property.longitude} latitude={property.latitude} />
      )}
    </div>
  );
};

export default PropertyDetail;
