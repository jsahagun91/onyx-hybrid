import React from 'react';
import Card from './components/Card.js';
import Header from './components/Header.js';
import Carousel from './components/Carousel.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Kettlebells from './Kettlebells.js'; // Import the new page component


function App() {
  return (
    <Router>
    <Header/>
    <Card/>
    <Carousel />
    
    {/* Route configuration */}
      <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/kettlebells" element={<Kettlebells />} />
      </Routes>
      </Router>
  );
}

export default App;
