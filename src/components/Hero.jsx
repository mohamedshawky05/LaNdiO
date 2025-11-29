import React from "react";
import "./Hero.css";
import { FaStar, FaAward, FaUsers, FaGlobe } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero-section py-5">
      <div className="container text-center">

        {/* Badge */}
        <div className="hero-badge d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill">
          <FaStar className="text-warning" />
          <span>Award Winning Agency</span>
        </div>

        {/* Title */}
        <h1 className="hero-title mt-4 fw-bold">
          Transforming Ideas Into <br /> Digital Reality
        </h1>

        {/* Description */}
        <p className="hero-desc mt-3 mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation.
        </p>

        {/* Buttons */}
        <div className="buttons mt-4 d-flex justify-content-center gap-3">
          <button className="btn btn-primary px-4 py-2">Get Started Today</button>
          <button className="btn btn-outline-dark px-4 py-2">View Our Work</button>
        </div>

        {/* Stats */}
        <div className="stats row mt-5 g-4 justify-content-center">
          
          <div className="col-12 col-md-3">
            <div className="stat-card p-3 rounded text-center shadow-sm">
              <FaAward className="stat-icon mb-2" />
              <h4 className="fw-bold">85+</h4>
              <p className="m-0">Awards Won</p>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="stat-card p-3 rounded text-center shadow-sm">
              <FaUsers className="stat-icon mb-2" />
              <h4 className="fw-bold">500+</h4>
              <p className="m-0">Happy Clients</p>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="stat-card p-3 rounded text-center shadow-sm">
              <FaGlobe className="stat-icon mb-2" />
              <h4 className="fw-bold">25+</h4>
              <p className="m-0">Countries</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
