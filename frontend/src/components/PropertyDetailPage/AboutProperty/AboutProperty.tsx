import React, { useState } from 'react';
import styles from './AboutProperty.module.css';

interface AboutPropertyProps {
  description: string | null;
}

const AboutProperty: React.FC<AboutPropertyProps> = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const wordLimit = 80;

  // Handle null or empty description case
  const validDescription = description || 'Description not available';
  const words = validDescription.split(' ');
  const truncatedDescription = words.length > 0 ? words.slice(0, wordLimit).join(' ') : validDescription;
  const isLongDescription = words.length > wordLimit;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.aboutCard}>
      <p className={styles.header}>About Property</p>
      <p className={styles.description}>
        {isExpanded ? validDescription : truncatedDescription}
        {isLongDescription && !isExpanded && '...'}
      </p>
      {isLongDescription && (
        <button className={styles.showMoreButton} onClick={toggleExpand}>
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
}

export default AboutProperty;
