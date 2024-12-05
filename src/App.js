import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './Component/LandingPage';
import LoginPage from './Component/LoginPage';
import RegistrationPage from './Component/RegistrationPage'
import ProductPage from './Component/ProductPage';
import ProductDetailsPage from './Component/ProductDetailsPage';


function App() {
  return (
    <div className="App">
      <LandingPage />
      <LoginPage />
      <RegistrationPage />
      <ProductPage />
      <ProductDetailsPage />
    </div>


  );
}

export default App;
