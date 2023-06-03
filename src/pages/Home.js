import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Import the custom Home page CSS file

const Home = () => {
  return (
    <div className="home-container">
      <Link to="/about">
        <img src="/assets/images/van_cn_logo.svg" alt="VAN_CN Logo" className="logo-image" />
      </Link>
    </div>
  );
};

export default Home;
