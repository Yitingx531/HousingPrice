import React, { useState } from 'react';
import styles from './AboutProperty.module.css';

interface AboutPropertyProps {
  description: string;
}

const AboutProperty: React.FC<AboutPropertyProps> = ({description}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const wordLimit = 80;

  const words = description.split(' ');
  const truncatedDescription = words.slice(0, wordLimit).join(' ');
  const isLongDescription = words.length > wordLimit;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.aboutCard}>
      <p className={styles.header}>About Property</p>
      <p className={styles.description}>
        {isExpanded ? description : truncatedDescription}
        {isLongDescription && !isExpanded && '...'}
      </p>
      {isLongDescription && (
        <button className={styles.showMoreButton} onClick={toggleExpand}>
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  )
}

export default AboutProperty;
