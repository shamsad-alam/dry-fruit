// App.js
// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './App.css';
// import LandingPage from './Component/LandingPage';
// import LoginPage from './Component/LoginPage';
// import RegistrationPage from './Component/RegistrationPage'
// import ProductPage from './Component/ProductPage';
// import ProductDetailsPage from './Component/ProductDetailsPage';

import ApiDatafetch from './Component/ApiDataFetch';

function App() {
  return (
    <div className="App">
      {/* <LandingPage />
      <LoginPage />
      <RegistrationPage />
      <ProductPage />
      <ProductDetailsPage /> */}

      <ApiDatafetch/>
    </div>


  );
}

export default App;
