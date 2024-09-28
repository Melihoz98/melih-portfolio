import React from 'react';
import './Projects.css'; // Import the custom styles
import kontor from '../assets/kontor.png'; // Assuming this is the correct path
import chipotle from '../assets/chipotle.png';
import car from '../assets/car.png';
import chat3 from '../assets/chat3.png';
import handy2 from '../assets/handy2.png';

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
                - Project for Customer that sells office funiture *on going project*
                - Ecommerce webshop for customers to buy and get shipped
                - Stripe API, Shipmondo API, C#, MSSQL, ASP.NET, JQuery, JavaScript, HTML, CSS
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
               - Website for restaurant owner, that displays menu ect
               - Customers can browse and see information about the restaurant
               - Firebase, React.js, JavaScript, HTML, CSS

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
               - Webapplication for car rental owner in Turkey *prototype*
               - Customers can browse cars, and select car to rent based on date ect
               - Azure, C#, ASP.NET, MSSQL, Razor pages, JQuery, JavaScript, HTML, CSS 
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

          {/* Project 4 */}
          <div className="col-md-4 project-card">
            <div className="project-content">
              <img
                src={chat3}
                alt="Project 4 Logo"
                className="project-logo"
              />
              <h3 className="project-title">Chat Space</h3>
              <p className="project-description">
               - Hobby project where users can create chatrooms for chatting
               - Users can create rooms, and chat in real time
               - Angular, Azure, ASP.NET, SignalR, TypeScript, HTML, CSS
            
              </p>
              <div className="project-buttons">
                <a
                  href="https://travelguruapp.com"
                  className="btn btn-dark project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
                <a
                  href="https://github.com/yourusername/travel-guru"
                  className="btn btn-outline-light project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="col-md-4 project-card">
            <div className="project-content">
              <img
                src={handy2}
                alt="Project 5 Logo"
                className="project-logo"
              />
              <h3 className="project-title">Handy Rent</h3>
              <p className="project-description">
                - 3rd Semester project, for renting out tools
                - Distributed application, with solving concurrency problem in mind
                - C#, REST API, ASP.NET, JWT, WinForms, JQuery, Razor Pages, MSSQL
              </p>
              <div className="project-buttons">
                <a
                  href="https://coffeeshopapp.com"
                  className="btn btn-dark project-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
                <a
                  href="https://github.com/yourusername/coffee-shop"
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
