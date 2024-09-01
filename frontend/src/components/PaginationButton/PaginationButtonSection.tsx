import React, { useState } from 'react';
import styles from './PaginationButtonSection.module.css';
import { useProperties } from '../../context/PropertiesContext';

const PaginationButton: React.FC = () => {
    const { properties, page, setPage } = useProperties();
    
    const handlePageClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const buttonValue = e.currentTarget.value;
        if(buttonValue === 'next'){
          setPage(page+1);
        } else if(buttonValue === 'prev' && page > 1){
            setPage(page - 1);
        }
    }

  return (
    <div className={styles.paginationButtonContainer}>
       <button className={styles.paginationButton} 
       value='prev' 
       disabled={page <= 1} 
       onClick={handlePageClick}
       >&laquo; Prev
       </button>
       <span>{page}</span>
       <button 
       className={styles.paginationButton} 
       value='next' 
       disabled={!properties || properties.length < 41}
       onClick={handlePageClick}
        >Next &raquo;
        </button>
    </div>
  )
}

export default PaginationButton
