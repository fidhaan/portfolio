import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top shadow-lg">
      <div className="container-fluid">
        {/* Brand/Logo */}
        <Link style={{color: 'white'}} className="navbar-brand fs-4" href="/">
          Fidhaan
        </Link>
        
        {/* Mobile Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={'/'} className="nav-link" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/profile/'} className="nav-link " >
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/projects'} className="nav-link" >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/contact'} className="nav-link" >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/resume'} className="nav-link " >
                  Resume
                </Link>
              </li>
            
            {/* Call to Action Button
            <li className="nav-item ms-lg-3">
                <a style={{color: 'red', border: '2px solid red', backgroundColor: 'white'}} className="btn btn-outline-danger btn-sm" href="#contact">
                    Resume
                </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;