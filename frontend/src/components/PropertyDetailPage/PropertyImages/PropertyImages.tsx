import React, { useState } from 'react';
import styles from './PropertyImages.module.css';
import ImageModal from '../ImageModal/ImageModal';

interface PropertyImagesProps {
  hiResImageLink: string;
  responsivePhotos: { url: string }[];
  abbreviatedAddress: string;
}

const PropertyImages: React.FC<PropertyImagesProps> = ({ hiResImageLink, responsivePhotos, abbreviatedAddress }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const firstImage = hiResImageLink;
  const displayedPhotos = responsivePhotos.length > 1 
    ? responsivePhotos.slice(1, 3) 
    : responsivePhotos;

  return (
    <div className={styles.propertyImageContainer}>
      <img src={firstImage} alt="hiRes" className={styles.hiResImage} />
      <div className={styles.otherImage}>
        {displayedPhotos.map((image, index) => (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img 
            key={index} 
            src={image.url} 
            alt={`${abbreviatedAddress} - Image ${index + 1}`} 
            className={styles.propertyImage} 
          />
        ))}
      </div>
      <button className={styles.morePhotoButton} onClick={handleImageButtonClick}>
        More Photos
      </button>
      {isModalOpen && (
        <ImageModal 
          responsivePhotos={responsivePhotos} 
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default PropertyImages;