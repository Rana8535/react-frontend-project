import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/Services">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/gallery">
            Gallery
          </NavLink>
        </li>
      </ul>
      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon="fa-solid fa-bars" />
        <span className={`nav-toggle-icon ${isOpen ? 'active' : ''}`}>
          <span />
          <span />
          <span />
        </span>
      </div>
    </nav>
  );
};

export default NavigationBar;