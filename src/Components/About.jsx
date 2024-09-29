import React from 'react';
import './About.css'; // Import custom styles
import AboutImage from '../assets/Picture1.jpg'; // Import the image

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi, I'm <span className="highlight">Melih Øzata</span>, a 4th-semester Datamatiker student at UCN, deeply passionate about software development and programming. Alongside my studies, I work on web applications for companies, helping to transform their ideas into functional and responsive solutions.
            </p>
            <p>
              I love coding and constantly improving my skills. My passion extends to exploring advanced technologies such as Artificial Intelligence (AI) and cybersecurity, two areas that I believe will play a crucial role in shaping the future of the tech industry.
            </p>
            <p>
              I thrive on learning new tools, frameworks, and techniques to enhance my capabilities as a developer.
            </p>
          </div>

          <div className="about-image">
            <img src={AboutImage} alt="About me" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
