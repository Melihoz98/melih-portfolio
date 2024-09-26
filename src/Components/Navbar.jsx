import React, { useState } from 'react';
import './Navbar.css'; // Import the custom styles

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (section) => {
    // Close the menu when a link is clicked
    toggleMenu();
    // Smooth scroll to the section
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#" onClick={() => scrollToSection('home')}>
          MyPortfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          {/* Close button for mobile view */}
          <button className="close-btn" onClick={toggleMenu}>&times;</button>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('home')}>Home</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('projects')}>Projects</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('about')}>About</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => scrollToSection('contact')}>Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
