import React, { useState } from 'react';
import './App.scss';
import NavBar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import {Routes, Route} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import PortfliosPage from './Pages/PortfoliosPage';


export default function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
          <div className="content">
          <Routes>
              <Route path="/" element={<HomePage />} exact />
              <Route path="/about" element={<AboutPage />} exact />
              <Route path="/portfolios" element={<PortfliosPage />} exact />
              <Route path="/contact" element={<ContactPage />} exact />
              </Routes>
          </div>
      </div>
    </div>
  );
}