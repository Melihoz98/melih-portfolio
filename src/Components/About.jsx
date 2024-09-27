import React from 'react';
import './About.css'; // Import custom styles

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi, I'm <span className="highlight">Your Name</span>, a passionate web developer with a keen interest in building sleek, responsive, and user-friendly websites. I enjoy working with cutting-edge technologies and transforming ideas into real-world projects.
            </p>
            <p>
              Over the years, I've gained experience in both front-end and back-end development, constantly learning and improving my skills.
            </p>
          </div>

          <div className="about-image">
            <img src={`${process.env.PUBLIC_URL}/assets/profile-img.png`} alt="About me" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
