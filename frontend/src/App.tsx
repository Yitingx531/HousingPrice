import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './components/HomePage/HomePage';
import PropertyDetail from './components/PropertyDetailPage/PropertyDetail';
import { PropertiesProvider } from './context/PropertiesContext';

const App: React.FC = () => {
  return (
    <Router>
      <PropertiesProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
          </Route>
        </Routes>
      </PropertiesProvider>
    </Router>
  );
};

export default App;