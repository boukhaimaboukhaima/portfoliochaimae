// Navbar.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfo, faAddressBook, faMoon, faSun, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/image-removebg-preview.png'; // Adjust the path accordingly
import '../Navbar.css';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setShowMenu(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <div className="navbar-header">
        <div className="logo">
          <img src={logo} alt="Logo" style={{ width: '200px', height: 'auto' }} />
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
        </div>
      </div>
      <ul className={`nav-list ${showMenu ? 'show' : ''}`}>
        <li className={`nav-item ${activeItem === 'home' ? 'active' : ''}`} onClick={() => handleItemClick('home')}>
          <FontAwesomeIcon icon={faHome} />&nbsp;
          <span>Home</span>
        </li>
        <li className={`nav-item ${activeItem === 'info' ? 'active' : ''}`} onClick={() => handleItemClick('info')}>
          <FontAwesomeIcon icon={faInfo} />&nbsp;
          <span>Info</span>
        </li>
        <li className={`nav-item ${activeItem === 'contact' ? 'active' : ''}`} onClick={() => handleItemClick('contact')}>
          <FontAwesomeIcon icon={faAddressBook} /> &nbsp;
          <span>Contact</span>
        </li>
        <li className="dark-mode-button" onClick={toggleDarkMode}>
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          &nbsp;
          <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
