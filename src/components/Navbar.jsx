import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm rounded-pill mx-4 my-4 px-4 py-2 fixed-top">
      <div className="container-fluid px-3">
        <a className="navbar-brand fw-bold" href="#">
          Landio
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navMenu"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faature">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contect">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex ms-auto">
          <button className="btn btn-primary rounded-pill px-4">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
