// Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css'; // Import the custom styles

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
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
              <a className="nav-link" href="#home" onClick={toggleMenu}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={toggleMenu}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={toggleMenu}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={toggleMenu}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
