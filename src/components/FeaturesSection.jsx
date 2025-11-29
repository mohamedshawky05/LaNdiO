import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import image from "../assets/4.webp";


export default function FeaturesSection() {
  return (
    <section className="container py-5" id="faature">
      {/* Title */}
      <div className="text-center mb-4">
        <h6 className="text-primary fw-bold">FEATURES</h6>
        <p className="text-muted w-75 mx-auto">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.
        </p>
      </div>

      {/* Main Content Row */}
      <div className="row align-items-center">
        {/* Left Text */}
        <div className="col-md-6 pe-5">
          <h2 className="fw-bold text-dark mb-3">Voluptatum deleniti atque corrupti quos dolores</h2>
          <p className="text-muted">
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
          </p>
        </div>

        {/* Right Image */}
        <div className="col-md-6 text-center">
          <img
            src={image}
            alt="Features"
            className="img-fluid rounded-4 shadow-sm"
          />
        </div>
      </div>

      {/* Icons Row */}
      <div className="row text-center mt-5 g-4">
        <div className="col-md-3">
          <div className="p-3 rounded-4 bg-white shadow-sm">
            <i className="fa-solid fa-bolt fs-2 text-primary"></i>
            <h5 className="mt-3 fw-bold">Expedita Voluptas</h5>
            <p className="text-muted small">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="p-3 rounded-4 bg-white shadow-sm">
            <i className="fa-solid fa-gem fs-2 text-primary"></i>
            <h5 className="mt-3 fw-bold">Nemo Quisquam</h5>
            <p className="text-muted small">
              Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
            </p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="p-3 rounded-4 bg-white shadow-sm">
            <i className="fa-solid fa-star fs-2 text-primary"></i>
            <h5 className="mt-3 fw-bold">Beatae Vitae</h5>
            <p className="text-muted small">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur.
            </p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="p-3 rounded-4 bg-white shadow-sm">
            <i className="fa-solid fa-rocket fs-2 text-primary"></i>
            <h5 className="mt-3 fw-bold">Dicta Sunt</h5>
            <p className="text-muted small">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
