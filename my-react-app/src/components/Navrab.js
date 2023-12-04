// Navbar.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfo, faAddressBook, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/image-removebg-preview.png'; // Adjust the path accordingly
import '../Navbar.css';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    // Toggle dark mode class on the body element
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <div className="navbar-brand">
        <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto' }} /> {/* Adjust the width and height as needed */}
      </div>
      <ul className="nav-list">
        <li className={`nav-item ${activeItem === 'home' ? 'active' : ''}`} onClick={() => handleItemClick('home')}>
          <FontAwesomeIcon icon={faHome} /> Home
        </li>
        <li className={`nav-item ${activeItem === 'info' ? 'active' : ''}`} onClick={() => handleItemClick('info')}>
          <FontAwesomeIcon icon={faInfo} /> Info
        </li>
        <li className={`nav-item ${activeItem === 'contact' ? 'active' : ''}`} onClick={() => handleItemClick('contact')}>
          <FontAwesomeIcon icon={faAddressBook} /> Contact
        </li>
      </ul>
      <div className="dark-mode-button" onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      </div>
    </nav>
  );
};

export default Navbar;
