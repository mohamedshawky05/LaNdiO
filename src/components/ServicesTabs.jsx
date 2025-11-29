import React, { useState, useEffect } from 'react';

// ServicesTabs.jsx
// Single-file React component for Vite + React + Bootstrap + Font Awesome
// Usage: import and render <ServicesTabs /> inside your app.

export default function ServicesTabs() {
  const [active, setActive] = useState('development');

  const data = {
    development: [
      {
        id: 'web',
        title: 'Web Development',
        desc: 'Modern, responsive websites built with cutting-edge technologies for optimal performance.',
        icon: 'fa-solid fa-laptop'
      },
      {
        id: 'mobile',
        title: 'Mobile Apps',
        desc: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
        icon: 'fa-solid fa-mobile-screen-button'
      },
      {
        id: 'api',
        title: 'API Development',
        desc: 'Robust and scalable APIs that power your applications and enable seamless integrations.',
        icon: 'fa-solid fa-database'
      }
    ],
    marketing: [
      {
        id: 'seo',
        title: 'SEO Optimization',
        desc: 'Improve search visibility and drive organic traffic with data-driven SEO strategies.',
        icon: 'fa-solid fa-chart-line'
      },
      {
        id: 'content',
        title: 'Content Marketing',
        desc: 'Create valuable content that engages users and converts visitors into customers.',
        icon: 'fa-solid fa-pen-nib'
      },
      {
        id: 'social',
        title: 'Social Media',
        desc: 'Grow your brand and reach through targeted social media campaigns and community building.',
        icon: 'fa-brands fa-facebook'
      }
    ],
    support: [
      {
        id: 'sla',
        title: 'SLA & Uptime',
        desc: 'Guaranteed uptime and fast incident response to keep your services running smoothly.',
        icon: 'fa-solid fa-shield-halved'
      },
      {
        id: 'maintenance',
        title: 'Maintenance',
        desc: 'Regular updates, security patches, and performance optimizations for long-term stability.',
        icon: 'fa-solid fa-gears'
      },
      {
        id: 'helpdesk',
        title: 'Helpdesk',
        desc: '24/7 friendly support to help your team and customers resolve issues quickly.',
        icon: 'fa-solid fa-headset'
      }
    ]
  };

  // small stylesheet injected so this file works standalone
  useEffect(() => {
    const id = 'services-tabs-styles';
    if (document.getElementById(id)) return;
    const css = `
      .tabs-pill { display:inline-flex; gap:12px; background:rgba(15,23,42,0.04); padding:8px; border-radius:40px; }
      .tab-btn { border-radius:40px; padding:10px 22px; border:none; background:transparent; cursor:pointer; font-weight:600; color:#4b5563; }
      .tab-btn.active { background: linear-gradient(90deg,#2d6df6,#3b3bff); color:#fff; box-shadow:0 6px 20px rgba(59,59,255,0.18); }
      .service-card { border-radius:12px; padding:36px 26px; background: #fff; box-shadow: 0 10px 30px rgba(15,23,42,0.06); border:1px solid rgba(15,23,42,0.03); min-height:260px; display:flex; flex-direction:column; align-items:center; text-align:center; }
      .service-icon { width:56px; height:56px; display:flex; align-items:center; justify-content:center; border-radius:10px; background:linear-gradient(180deg, rgba(59,59,255,0.06), rgba(59,59,255,0.02)); font-size:20px; color:#3b3bff; margin-bottom:18px; }
      .service-title { font-weight:600; margin-bottom:10px; color:#111827; }
      .service-desc { color:#6b7280; font-size:14px; margin-bottom:22px; max-width:320px; }
      .view-btn { border-radius:8px; padding:8px 18px; border:1.5px solid #3b3bff; background:transparent; color:#3b3bff; font-weight:600; }

      @media (max-width: 991px) {
        .service-desc { max-width: 100%; }
      }
    `;
    const style = document.createElement('style');
    style.id = id;
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }, []);

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-start mb-4">
        <div className="tabs-pill">
          <button
            className={`tab-btn ${active === 'development' ? 'active' : ''}`}
            onClick={() => setActive('development')}
          >
            Development
          </button>

          <button
            className={`tab-btn ${active === 'marketing' ? 'active' : ''}`}
            onClick={() => setActive('marketing')}
          >
            Marketing
          </button>

          <button
            className={`tab-btn ${active === 'support' ? 'active' : ''}`}
            onClick={() => setActive('support')}
          >
            Support
          </button>
        </div>
      </div>

      <div className="row gx-4 gy-4">
        {data[active].map((card) => (
          <div key={card.id} className="col-12 col-md-6 col-lg-4">
            <div className="service-card h-100">
              <div className="service-icon">
                <i className={card.icon} aria-hidden="true"></i>
              </div>
              <div className="service-title">{card.title}</div>
              <div className="service-desc">{card.desc}</div>
              <button className="view-btn mt-auto">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
