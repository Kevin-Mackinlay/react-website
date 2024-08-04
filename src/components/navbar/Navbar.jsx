import './navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
          ASTROS <FontAwesomeIcon icon="space-shuttle" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
