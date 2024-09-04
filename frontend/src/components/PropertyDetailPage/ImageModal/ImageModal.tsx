import React from 'react';
import styles from './ImageModal.module.css';

interface ImageModalProps {
    responsivePhotos: { url: string }[];
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ responsivePhotos, onClose }) => {
  return (
    <div className={styles.imageModalContainer}>
      <button className={styles.closeButton} onClick={onClose}>×</button>
      <div className={styles.imageGrid}>
        {responsivePhotos.map((photo, index) => (
          <img 
            key={index}
            src={photo.url} 
            alt={`property-${index}`} 
            className={styles.modalImage}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageModal;