import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SearchPropertyResponseDto } from '../../../src/zillow/dto/search-property-response.dto';

interface PropertiesProviderProps {
  children: ReactNode;
}

interface PropertiesContextValue {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  properties: SearchPropertyResponseDto[] | null;
  loading: boolean;
  page: number;
  setPage: (page: number) => void;
}

const PropertiesContext = createContext<PropertiesContextValue | undefined>(undefined);

export const useProperties = () => {
  const context = useContext(PropertiesContext);
  if (!context) {
    throw new Error('useProperties must be used within a PropertiesProvider');
  }
  return context;
};

export const PropertiesProvider: React.FC<PropertiesProviderProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [properties, setProperties] = useState<SearchPropertyResponseDto[] | null>(null);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          location: searchTerm,
          page: page.toString(),
          output: 'json',
          status: 'forSale',
          sortSelection: 'priorityscore',
        });

        const response = await fetch(`http://localhost:4000/zillow/search?${params}`);

        if (!response.ok) {
          throw new Error('Failed to fetch property data');
        }

        const data: SearchPropertyResponseDto[] = await response.json();
        setProperties(data);
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchProperties();
    } 
  }, [searchTerm, page]);

  const contextValue: PropertiesContextValue = {
    searchTerm,
    setSearchTerm,
    properties,
    loading,
    page, 
    setPage
  };

  return (
    <PropertiesContext.Provider value={contextValue}>
      {children}
    </PropertiesContext.Provider>
  );
};