import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheck, FaTimes } from "react-icons/fa";

export default function Pricing() {
  const plans = [
    {
      title: "Starter",
      desc: "For individuals just getting started",
      price: 12,
      icon: "📦",
      features: [
        { text: "Nullam accumsan lorem", available: true },
        { text: "Vestibulum auctor dapibus", available: true },
        { text: "Nulla consequat massa", available: true },
        { text: "In enim justo rhoncus ut", available: false },
        { text: "Curabitur ullamcorper ultricies", available: false }
      ],
    },

    {
      title: "Professional",
      desc: "For small teams and growing businesses",
      price: 39,
      icon: "💼",
      popular: true,
      features: [
        { text: "Donec quam felis ultricies", available: true },
        { text: "Nam eget dui etiam rhoncus", available: true },
        { text: "Maecenas tempus tellus", available: true },
        { text: "Donec pede justo fringilla", available: true },
        { text: "Cras dapibus vivamus", available: false }
      ],
    },

    {
      title: "Enterprise",
      desc: "For large organizations and corporations",
      price: 79,
      icon: "🏢",
      features: [
        { text: "Etiam sit amet orci eget", available: true },
        { text: "Pellentesque posuere vulputate", available: true },
        { text: "Quisque rutrum aenean", available: true },
        { text: "Fusce vulputate eleifend", available: true },
        { text: "Phasellus viverra nulla", available: true }
      ],
    },
  ];

  return (
    <section className="py-5 text-center bg-light">
      <h6 className="text-primary fw-bold">PRICING</h6>
      <p className="text-muted mb-5">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
      </p>

      <div className="container">
        <div className="row g-4">
          {plans.map((plan, index) => (
            <div key={index} className="col-md-4">
              <div
                className={`p-4 bg-white rounded-4 shadow-sm h-100 position-relative ${
                  plan.popular ? "border border-primary shadow-lg" : ""
                }`}
              >
                {plan.popular && (
                  <span className="badge bg-primary position-absolute top-0 end-0 m-3 px-3 py-1">
                    Most Popular
                  </span>
                )}

                <div className="display-6 mb-3">{plan.icon}</div>
                <h4 className="fw-bold">{plan.title}</h4>
                <p className="text-muted">{plan.desc}</p>

                <h2 className="fw-bold my-3">
                  ${plan.price}
                  <span className="fs-6 text-muted">/month</span>
                </h2>

                <ul className="list-unstyled text-start mt-4">
                  {plan.features.map((f, i) => (
                    <li key={i} className="d-flex align-items-center mb-3">
                      {f.available ? (
                        <FaCheck className="text-primary me-2" />
                      ) : (
                        <FaTimes className="text-muted me-2" />
                      )}
                      <span className={f.available ? "" : "text-muted"}>{f.text}</span>
                    </li>
                  ))}
                </ul>

                <button className="btn btn-light w-100 py-2 rounded-pill mt-3 fw-bold border">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
