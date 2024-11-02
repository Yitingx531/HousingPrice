import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchPropertyResponseDto } from '../../../../../src/zillow/dto/search-property-response.dto';
import styles from './PropertyCard.module.css';
import formatPrice from '../../../utils/formatPrice';

interface PropertyCardProps {
  property: SearchPropertyResponseDto;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/property/${property.zpid}`);
  };

  return (
    <div className={styles.PropertyCardContainer} onClick={handleClick}>
      <img src={property.imgSrc} alt={property.streetAddress} />
      <p id={styles.propertyPrice}>{formatPrice(property.price)}</p>
      <div className={styles.propertyDetailSection}>
        <p>{property.bedrooms} bds</p> {'  '}
        <p>{property.bathrooms} ba</p> {'  '}
        <p>{property.livingArea} sqft</p>
      </div>
      <p id={styles.propertyAddress}>
        {property.streetAddress}, {property.city}, {property.state}, {property.zipcode}
      </p>
    </div>
  );
};

export default PropertyCard;
