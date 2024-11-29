// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Mental Health Platform
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resource">
                Resources
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/therapist-finder">
                Therapist Finder
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mood-tracker">
                Mood Tracker
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/emergency-contact">
                Emergency
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
