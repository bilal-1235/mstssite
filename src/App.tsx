import React from 'react';
import './App.css';
import Header from './compontents/Header';
import Login from './compontents/Loginform';
import Signup from './compontents/signupform';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './compontents/Footer';
import Home from './compontents/Home';
import Card from './compontents/card';
import Slider from './compontents/Slider';
import Help from './compontents/Help';
const App: React.FC = () => {
  return (
    <div className="mstssite">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<><Home/><Card/> <Slider/> <Footer /></>} />
          <Route path="/login" element={<><Login /><Footer /></>} />
          <Route path="/signup" element={<><Signup /><Footer /></>} />
          <Route path="/help" element={<><Help /><Footer /></>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
