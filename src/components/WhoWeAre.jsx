import React from "react";
import "./WhoWeAre.css";
import { FaChartLine, FaUsers } from "react-icons/fa";
import images1 from "../assets/1.webp";
import images2 from "../assets/2.webp";
import images3 from "../assets/3.webp";

export default function WhoWeAre() {
  return (
    <section className="who-section container py-5" id="about">
      <div className="row align-items-center g-5">
        {/* LEFT SIDE IMAGES */}
        <div className="col-lg-6">
          <div className="big-img">
            <img
              src={images1}
              alt="man working"
              className="img-fluid rounded"
            />

            <div className="years-box shadow">
              <h2>15+</h2>
              <p>YEARS OF EXCELLENCE</p>
            </div>
          </div>

          <div className="d-flex gap-3 mt-4 small-imgs">
            <img src={images2} className="img-fluid rounded small-img" />
            <img src={images3} className="img-fluid rounded small-img" />
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="col-lg-6">
          <span className="who-badge">WHO WE ARE</span>

          <h2 className="who-title mt-3 fw-bold">
            Building tomorrow's solutions with proven expertise and innovation
          </h2>

          <p className="mt-3 text-muted">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt.
          </p>

          {/* FEATURES */}
          <div className="d-flex align-items-start gap-3 mt-4">
            <div className="icon-box">
              <FaChartLine />
            </div>

            <div>
              <h5 className="fw-bold">Strategic Growth</h5>
              <p className="text-muted m-0">
                Occaecat cupidatat non proident sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div className="d-flex align-items-start gap-3 mt-4">
            <div className="icon-box">
              <FaUsers />
            </div>

            <div>
              <h5 className="fw-bold">Expert Team</h5>
              <p className="text-muted m-0">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
            </div>
          </div>

          {/* BUTTON & PHONE */}
          <div className="d-flex align-items-center gap-4 mt-5">
            <button className="btn btn-primary px-4 py-2">
              Learn More About Us
            </button>

            <div>
              <small className="text-muted d-block">Call us directly:</small>
              <strong className="phone-number">+1 (555) 234-5678</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
