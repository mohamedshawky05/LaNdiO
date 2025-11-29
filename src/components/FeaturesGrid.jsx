import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function FeaturesGrid() {
  const items = [
    {
      icon: "fa-solid fa-microchip",
      title: "AI-Powered Automation",
      desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      tags: ["Smart", "Automated"],
    },
    {
      icon: "fa-solid fa-cloud",
      title: "Cloud Integration",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus.",
      tags: ["Scalable", "Reliable"],
    },
    {
      icon: "fa-solid fa-users",
      title: "Team Collaboration",
      desc: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
      tags: ["Collaborative", "Efficient"],
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "Advanced Analytics",
      desc: "Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.",
      tags: ["Insights", "Data-driven"],
    },
  ];

  return (
    <section className="container py-5">
      <div className="row g-5">
        {items.map((item, index) => (
          <div key={index} className="col-md-6 d-flex">
            <div className="me-3">
              <div className="p-3 rounded shadow-sm bg-white" style={{ width: "60px", height: "60px" }}>
                <i className={`${item.icon} text-primary fs-3`}></i>
              </div>
            </div>
            <div>
              <h5 className="fw-bold">{item.title}</h5>
              <p className="text-muted">{item.desc}</p>
              <div>
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="badge rounded-pill bg-light text-primary border me-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="text-center mt-5">
        <button className="btn btn-primary px-4 py-2 me-3 rounded-pill fw-semibold">
          Get Started Today
        </button>
        <button className="btn btn-outline-dark px-4 py-2 rounded-pill fw-semibold">
          View Demo
        </button>
      </div>
    </section>
  );
}
