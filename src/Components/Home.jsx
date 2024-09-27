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
              <a href="https://www.linkedin.com/in/melih-%C3%B8zata-3676832ba/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://github.com/Melihoz98" target="_blank" rel="noopener noreferrer" className="contact-link">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="mailto:melihozata2@gmail.com" className="contact-link">
                <i className="fas fa-envelope"></i> Email
              </a>
            </div>
          </div>

          {/* Right Side (Welcome Text) */}
          <div className="col-lg-6 right-section">
            <div className="welcome-text">
              <h1>Welcome!</h1>
              <h2>I'm Melih Øzata</h2>
              <h2>Currently looking for an internship</h2>
              <p>
    <i className="fas fa-computer"></i> AP Graduate in Computer Science - Student
  </p>            </div>
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
