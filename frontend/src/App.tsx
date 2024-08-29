import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import PropertyDetail from './components/PropertyDetail/PropertyDetail';
import { PropertiesProvider } from './context/PropertiesContext';

const App: React.FC = () => {
  return (
    <PropertiesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/property/:id" element={<PropertyDetail/>} />
      </Routes>
    </BrowserRouter>
  </PropertiesProvider>
  );
};

export default App;
