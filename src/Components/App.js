import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header'
import Bank from './Bank'

import Home from './Home'; // Assuming you have a Home component
import './App.css'

function App() {

  const handleLogout = () => {
    // Your logout logic here
  };
  return (
    <Router>
      <div className="App">
      <Header companyName="First Bank" onLogout={handleLogout} />
       
          <Routes>
          <Route path="/" element={<Bank/>} />
          <Route path="/home" element={<Home/>} />
            
          </Routes>
        
      </div>
    </Router>
  );
}

export default App;
