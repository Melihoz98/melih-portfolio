// Home.jsx
import React from 'react';
import './Home.css';
import profileImage from '../assets/profile-img.png';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container home-container">
        <div className="row">
          {/* Left Side (Image and Contact Info) */}
          <div className="col-lg-6 left-section">
            <div className="profile-image-wrapper">
              <img src={profileImage} alt="Your Name" className="profile-image" />
            </div>
            <div className="contact-info">
              <a href="https://www.linkedin.com/in/melih-%C3%B8zata-3676832ba/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
              <a href="https://github.com/Melihoz98" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
              <a href="mailto:melihozata2@gmail.com" className="contact-link">Email</a>
            </div>
          </div>

          {/* Right Side (Welcome Text) */}
          <div className="col-lg-6 right-section">
            <div className="welcome-text">
              <h1>Welcome!</h1>
              <h2>I am [Your Name]</h2>
              <p>Datamatiker studerende</p>
            </div>
          </div>
        </div>

        {/* Arrow at the bottom */}
        <div className="arrow-down">
          <a href="#projects">
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
