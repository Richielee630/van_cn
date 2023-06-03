import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../styles/App.css';

import About from '../pages/About';
import Home from '../pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="App-header-content">
            VAN_CN global agency, active regions: USA, CHINA, AUSTRALIA, GERMAN
          </div>
        </header>

        <nav className="App-nav">
          <Link to="/" className="App-nav-link">
            Home
          </Link>
          <Link to="/about" className="App-nav-link">
            About
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
