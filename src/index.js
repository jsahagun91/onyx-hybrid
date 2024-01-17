import React from 'react';
import App from './App.js';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Card from './components/Card.js';
// import Header from './components/Header.js';
// import Carousel from './components/Carousel.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Kettlebells from './Kettlebells.js';
import System from './System.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      {/* Route configuration */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/kettlebells" element={<Kettlebells />} />
        <Route path="/thesystem" element={<System />} />
      </Routes>
    </Router>
  </React.StrictMode>
);



