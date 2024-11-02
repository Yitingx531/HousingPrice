import React, { useState } from 'react';
import styles from './Search.module.css';
import { useProperties } from '../../context/PropertiesContext';
import { useNavigate } from 'react-router-dom';

const Search: React.FC = () => {
  const { setSearchTerm } = useProperties();
  const [inputValue, setInputValue] = useState<string>('');
  const navigate = useNavigate(); 

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    navigate('/search'); // Redirect to the homepage when a search is submitted
    setInputValue('');
  };
  
  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <svg
          className={styles.searchIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input
          type="text"
          placeholder="Search properties..."
          value={inputValue}
          onChange={handleSearchInput}
          className={styles.searchInput}
        />
      </div>
      <button type="submit" className={styles.searchButton}> 
        Search
      </button>
    </form>
  );
};

export default Search;
