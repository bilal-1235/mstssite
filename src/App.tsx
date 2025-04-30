import React from 'react';
import './App.css';
import Header from './compontents/Header';
import Login from './compontents/Loginform';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



// Import your CSS file here

const App: React.FC = () => {
  return (
    <div className="App">
      
      <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
      
    </div>
  );
};

export default App;
