import React from 'react';
import './Projects.css'; // Import the custom styles
import kontor from '../assets/kontor.png'; // Assuming this is the correct path
import chipotle from '../assets/chipotle.png';
import car from '../assets/car.png';
const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div className="row">
          {/* Project 1 */}
          <div className="col-md-4 project-card">
            <div className="project-content">
            <img
  src={kontor}
  alt="Project 1 Logo"
  className="project-logo"
/>
              <h3 className="project-title">KontorXpert</h3>
              <p className="project-description">
                This is a cool project where I built something awesome. It features responsive design, sleek functionality, and more.
              </p>
              <div className="project-buttons">
                <a
                  href="https://kontorxpert.dk/"
                  className="btn btn-dark project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
                <a
                  href="https://github.com/yourusername/project1"
                  className="btn btn-outline-light project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-4 project-card">
            <div className="project-content">
              <img
                src={chipotle}
                alt="Project 2 Logo"
                className="project-logo"
              />
              <h3 className="project-title">Chipotle Mexican</h3>
              <p className="project-description">
                Another great project that showcases my ability to build modern, clean user interfaces and work with APIs.
              </p>
              <div className="project-buttons">
                <a
                  href="https://chipotlemexicansteak.dk/"
                  className="btn btn-dark project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
                <a
                  href="https://github.com/Melihoz98/chipotle-jsx-app/tree/master"
                  className="btn btn-outline-light project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-4 project-card">
            <div className="project-content">
              <img
                src={car}
                alt="Project 3 Logo"
                className="project-logo"
              />
              <h3 className="project-title">Grandes Rent A Car</h3>
              <p className="project-description">
                A fantastic project where I used cutting-edge technology to deliver a seamless user experience across devices.
              </p>
              <div className="project-buttons">
                <a
                  href="https://nynygrandesrentacar20240915113435.azurewebsites.net/"
                  className="btn btn-dark project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
                <a
                  href="https://github.com/Melihoz98/GrandesRentACar"
                  className="btn btn-outline-light project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
