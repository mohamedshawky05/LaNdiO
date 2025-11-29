import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      text: "The platform’s intuitive design has streamlined our workflow and boosted team productivity by 40%. The automation features are game‑changing.",
      name: "Sarah Williams",
      role: "Product Manager",
      company: "TechFlow Inc.",
      img: "https://i.pravatar.cc/60?img=5",
    },
    {
      text: "Outstanding customer support and feature-rich platform. The analytics dashboard provides incredible insights that transformed our decision‑making.",
      name: "Michael Chen",
      role: "CEO & Founder",
      company: "DataDrive Solutions",
      img: "https://i.pravatar.cc/60?img=12",
      topReview: true,
    },
    {
      text: "Seamless integration with our existing tools made the transition effortless. Real-time collaboration features enhanced our remote work.",
      name: "Emma Rodriguez",
      role: "Operations Director",
      company: "CloudSync Corp",
      img: "https://i.pravatar.cc/60?img=32",
    },
    {
      text: "The mobile app functionality is exceptional. Managing projects on‑the‑go improved response times and overall efficiency.",
      name: "James Parker",
      role: "Team Lead",
      company: "AgileWorks",
      img: "https://i.pravatar.cc/60?img=18",
    },
    {
      text: "Advanced security features and compliance tools give us peace of mind. Customization options allow us to tailor the platform to our needs.",
      name: "Lisa Thompson",
      role: "Security Specialist",
      company: "SecureBase",
      img: "https://i.pravatar.cc/60?img=27",
    },
    {
      text: "Incredible value for money with comprehensive features. The learning curve was minimal thanks to intuitive design and helpful documentation.",
      name: "David Kim",
      role: "Growth Manager",
      company: "ScaleUp Digital",
      img: "https://i.pravatar.cc/60?img=45",
    },
  ];

  return (
    <section className="py-5 text-center bg-light">
      <h6 className="text-primary fw-bold">TESTIMONIALS</h6>
      <p className="text-muted mb-5">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
      </p>

      <div className="container">
        <div className="row g-4">
          {testimonials.map((item, index) => (
            <div key={index} className="col-md-4">
              <div
                className={`p-4 bg-white shadow-sm rounded-4 h-100 position-relative ${
                  item.topReview ? "border border-primary shadow-lg" : ""
                }`}
              >
                {item.topReview && (
                  <span className="badge bg-primary position-absolute top-0 start-50 translate-middle-x mt-2 px-3 py-2 shadow">
                    ⭐ Top Review
                  </span>
                )}

                <div className="mb-2 text-warning d-flex justify-content-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className="fst-italic text-muted">“{item.text}”</p>

                <hr />

                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="rounded-circle me-3"
                    width="55"
                    height="55"
                  />
                  <div className="text-start">
                    <h6 className="mb-0 fw-bold">{item.name}</h6>
                    <small className="text-primary d-block">{item.role}</small>
                    <small className="text-muted">{item.company}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
