import React from 'react';
import KettlebellCard from './components/KettlebellCard.js';
import Header from './components/Header.js';
import SystemCard from './components/SystemCard.js';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Kettlebells from './Kettlebells.js'; // Import the new page component


function App() {
  return (
 <>
      <Header />
      <div className='cards-container'>
      <SystemCard />
      <KettlebellCard />
      </div>
 </>
  );
}

export default App;
