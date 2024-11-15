import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/common/Layout/Layout';
import HomePage from './components/HomePage/HomePage';
import PropertyDetail from './components/PropertyDetailPage/PropertyDetail';
import ContactPage from './components/ContactPage/ContactPage';
import { PropertiesProvider } from './context/PropertiesContext';
import SearchResults from './components/PropertySearchResultsPage/PropertySearchResults';
import SignUp from './components/SignInSignUpPage/SignUp/SignUp';
import SignIn from './components/SignInSignUpPage/SignIn/SignIn';
import Me from './components/Me/Me';


const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
      <PropertiesProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path='/service' />
            <Route path='/search' element={<SearchResults />}></Route>
            <Route path="/property/:id" element={<PropertyDetail />} />
            <Route path='/users/signin' element={<SignIn/>} />
            <Route path='/users/signup' element={<SignUp/>} />
            <Route path='/users/me' element={<Me/>} />
          </Route>
        </Routes>
      </PropertiesProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;