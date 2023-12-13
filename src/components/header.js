// header.js
import React, { useState, useEffect } from 'react';
import '../header.css'; // Assuming you have a CSS file for styling

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleLinkClick = () => {
      setIsOpen(false);
    };
  
    const links = document.querySelectorAll('.navbar-responsive__link');
    links.forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });
  
    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);
   // Empty dependency array ensures that this effect runs once when the component mounts

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="navbar">
        <div className="navbar__wrapper">
          <nav className="navbar__menu">
            <a href="#" className="navbar__brand">
              Brand
              <img src="#" alt="" />
            </a>
            <div id="nav-icon3" onClick={handleToggle}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <ul className="navbar__nav">
              <li className="navbar__link after-transform">
                <a href="#" className={isOpen ? '' : 'active'}>
                  Inicio
                </a>
              </li>
              <li className="navbar__link after-transform">
                <a href="#">Nosotros</a>
              </li>
              <li className="navbar__link after-transform">
                <a href="#">Galeria</a>
              </li>
              <li className="navbar__link after-transform">
                <a href="#">Blog</a>
              </li>
              <li className="navbar__link after-transform">
                <a href="#">Contacto</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {isOpen && (
        <div className="navbar-responsive">
          <ul className="navbar-responsive__nav">
            <li className="navbar-responsive__link after-transform">
              <a href="#" className={isOpen ? 'active' : ''}>
                Inicio
              </a>
            </li>
            <li className="navbar-responsive__link after-transform">
              <a href="#">Nosotros</a>
            </li>
            <li className="navbar-responsive__link after-transform">
              <a href="#">Galeria</a>
            </li>
            <li className="navbar-responsive__link after-transform">
              <a href="#">Blog</a>
            </li>
            <li className="navbar-responsive__link after-transform">
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
