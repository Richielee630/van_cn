// import '../styles/App.css';
import About from '../pages/About';
import Home from '../pages/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import '../styles/App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Add your header content here */}
        </header>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Routes>

        <nav className="App-nav">
          <Link to="/" className="App-nav-link">
            Home
          </Link>
          <Link to="/about" className="App-nav-link">
            About
          </Link>
        </nav>
      </div>
    </Router>
  );
}

export default App;

