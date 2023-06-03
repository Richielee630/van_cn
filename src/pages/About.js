import React from 'react';
import AgentSlideshow from '../components/AgentSlideshow';
import '../styles/About.css'; // Import the custom About page CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">ACTIVE DUTY AGENTS</h1>
      <AgentSlideshow />

      <div className="about-content">
        <p>
          Welcome to VAN_CN, the elite global agency committed to safeguarding
          our nation. With a team of highly trained agents, cutting-edge
          technology, and unwavering dedication, we protect and serve with
          utmost integrity. Our mission is to ensure national security, combat
          organized crime, and defend the values that make our country strong.
          Join us in our pursuit of justice and peace.
        </p>
      </div>
    </div>
  );
};

export default About;
