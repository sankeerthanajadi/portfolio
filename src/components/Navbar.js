import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  const inc_height={
    height: '60px',
    width: '100%',
    position: 'fixed', // Ensures it stays at the top
    top: 0,
    left: 0,
    zIndex: 1000, // Keeps it above other elements
    backgroundColor: '#90d5af',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };
  return (
    <nav style={inc_height} className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">J Sai Sankeerthana</Link>
        <span id="desc"> - Computer science undergraduate student</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/resume">
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs/blogMain">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/art/art_work">
                Art work
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact/contactme">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
