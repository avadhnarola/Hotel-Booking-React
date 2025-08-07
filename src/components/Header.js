import React from 'react';

const Header = () => (
  <header className="main-header sticky-top shadow-sm">
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <strong className="logo">
          <a className="navbar-brand fw-bold fs-2" href="#">
            Ecoland
          </a></strong>
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
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Destination</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Hotel</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Restaurant</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
        <button className="btn book-btn rounded-pill px-4 ms-lg-3 mt-2 mt-lg-0">
          Book Now
        </button>
      </div>
    </nav>
  </header>
);

export default Header;