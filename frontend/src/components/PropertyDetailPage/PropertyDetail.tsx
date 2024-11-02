import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import formatPrice from '../../utils/formatPrice';
import Map from '../common/Map/Map';
import AboutProperty from './AboutProperty/AboutProperty';
import PriceHistory from './PriceHistory/PriceHistory';
import PropertyImages from './PropertyImages/PropertyImages';
import styles from './PropertyDetail.module.css';
import { PropertyDetailResponseDto } from '../../../../src/zillow/dto/property-detail-response.dto';

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<PropertyDetailResponseDto>();
  const [loading, setLoading] = useState<boolean>(true);
  const [showMap, setShowMap] = useState<boolean>(false);

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

  return (
    <div className={styles.propertyDetailsContainer}>
      <PropertyImages
        hiResImageLink={property.hiResImageLink}
        responsivePhotos={property.responsivePhotos}
        abbreviatedAddress={property.abbreviatedAddress}
      />

      <div className={styles.propertyInfoCard}>
        <p className={styles.address}>{property.abbreviatedAddress}, {property.city}, {property.state} {property.zipcode}</p>
        <h1 className={styles.price}>{formatPrice(property.price)}</h1>
        <div className={styles.propertyStats}>
          <span>{property.bedrooms} Beds</span>
          <span>{property.bathrooms} Baths</span>
          <span>{property.livingArea} Sq Ft</span>
        </div>
      </div>
      
      <PriceHistory priceHistory={property.priceHistory}/>
      <AboutProperty description={property.description}/>
      
      <button className={styles.mapButton} onClick={() => setShowMap(true)}>View on Map</button>
      
      {showMap && (
        <Map propertyLongitude={property.longitude} propertyLatitude={property.latitude} />
      )}
    </div>
  );
};

export default PropertyDetail;