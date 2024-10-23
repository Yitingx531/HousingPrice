import React, { useState, useMemo } from 'react';
import styles from './PriceHistory.module.css';
import { PriceHistoryItem } from '../../../../../src/zillow/dto/property-detail-response.dto';
import formatPrice from '../../../utils/formatPrice';
import formatDate from '../../../utils/formatDate';

interface PriceHistoryProps {
    priceHistory: PriceHistoryItem[]
}

const PriceHistory: React.FC<PriceHistoryProps> = ({priceHistory}) => {
  const [showAll, setShowAll] = useState(false);

  const displayedHistory = useMemo(() => {
    return showAll ? priceHistory : priceHistory.slice(0, 2);
  }, [showAll, priceHistory]);

  const toggleShowAll = () => {
    setShowAll(prevShowAll => !prevShowAll);
  }

  return (
    <div className={styles.priceHistory}>
      <h2 className={styles.title}>Price History</h2>
      
      <div className={styles.historyGrid}>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Date</h3>
          <ul className={styles.list}>
            {displayedHistory.map((data, index) => (
              <li key={`date-${index}`}>{formatDate(data.date)}</li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Price</h3>
          <ul className={styles.list}>
            {displayedHistory.map((data, index) => (
              <li key={`price-${index}`}>{formatPrice(data.price)}</li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Price Per Sq Ft</h3>
          <ul className={styles.list}>
            {displayedHistory.map((data, index) => (
              <li key={`sqft-${index}`}>{formatPrice(data.pricePerSquareFoot)}/sqft</li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Event</h3>
          <ul className={styles.list}>
            {displayedHistory.map((data, index) => (
              <li key={`event-${index}`}>{data.event}</li>
            ))}
          </ul>
        </div>
      </div>

      {priceHistory.length > 2 && (
        <button className={styles.toggleButton} onClick={toggleShowAll}>
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  )
}

export default PriceHistory