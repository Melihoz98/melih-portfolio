import React from 'react';
import './Projects.css'; // Import the custom styles

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
                src="/path-to-your-logo1.png"
                alt="Project 1 Logo"
                className="project-logo"
              />
              <h3 className="project-title">Project 1</h3>
              <p className="project-description">
                This is a cool project where I built something awesome. It features responsive design, sleek functionality, and more.
              </p>
              <div className="project-buttons">
                <a
                  href="https://project1-website.com"
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
                src="/path-to-your-logo2.png"
                alt="Project 2 Logo"
                className="project-logo"
              />
              <h3 className="project-title">Project 2</h3>
              <p className="project-description">
                Another great project that showcases my ability to build modern, clean user interfaces and work with APIs.
              </p>
              <div className="project-buttons">
                <a
                  href="https://project2-website.com"
                  className="btn btn-dark project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
                <a
                  href="https://github.com/yourusername/project2"
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
                src="/path-to-your-logo3.png"
                alt="Project 3 Logo"
                className="project-logo"
              />
              <h3 className="project-title">Project 3</h3>
              <p className="project-description">
                A fantastic project where I used cutting-edge technology to deliver a seamless user experience across devices.
              </p>
              <div className="project-buttons">
                <a
                  href="https://project3-website.com"
                  className="btn btn-dark project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
                <a
                  href="https://github.com/yourusername/project3"
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
