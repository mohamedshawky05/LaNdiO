import React from 'react';

const ServicesSection = () => {
  return (
    <section className="services-section" id='services'>
      <style>{`
        .services-section { padding: 80px 0; text-align: center; }
        .services-title { font-size: 32px; font-weight: 700; color: #1a1a1a; letter-spacing: 2px; }
        .services-subtitle { max-width: 700px; margin: 15px auto 50px; font-size: 16px; color: #777; line-height: 1.6; }
        .services-container { display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: 25px; max-width: 1250px; margin: auto; align-items: start; }
        .featured-card { grid-row: span 2; background: #fff; border-radius: 20px; padding: 40px; text-align: left; position: relative; box-shadow: 0 6px 20px rgba(0,0,0,0.06); }
        .featured-badge { position: absolute; top: -18px; left: 40px; background: linear-gradient(90deg, #0044ff, #0077ff); color: #fff; padding: 7px 20px; font-size: 14px; font-weight: 600; border-radius: 30px; }
        .featured-icon { width: 70px; height: 70px; background: #e9edff; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 25px; }
        .featured-title { font-size: 26px; font-weight: 700; margin-bottom: 15px; }
        .featured-text { font-size: 15px; color: #666; margin-bottom: 25px; line-height: 1.6; }
        .featured-list li { list-style: none; display: flex; gap: 10px; align-items: center; font-size: 15px; color: #333; margin-bottom: 12px; }
        .featured-list li i { color: #0044ff; }
        .featured-btn { margin-top: 25px; background: linear-gradient(90deg, #0044ff, #0077ff); color: #fff; padding: 14px 25px; border-radius: 10px; border: none; font-weight: 600; cursor: pointer; transition: 0.2s; }
        .featured-btn:hover { opacity: 0.95; transform: translateY(-2px); }
        .service-card { background: #fff; border-radius: 20px; padding: 30px; text-align: left; box-shadow: 0 6px 20px rgba(0,0,0,0.05); }
        .service-icon { width: 55px; height: 55px; background: #eef3ff; border-radius: 15px; display: flex; justify-content: center; align-items: center; margin-bottom: 20px; }
        .service-title { font-size: 19px; font-weight: 700; margin-bottom: 10px; }
        .service-text { color: #666; font-size: 14px; line-height: 1.6; margin-bottom: 20px; }
        .service-link { color: #0044ff; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 7px; }
        .service-link:hover { text-decoration: underline; }
        @media (max-width: 992px) {
          .services-container { grid-template-columns: 1fr; }
          .featured-card { grid-row: auto; }
        }
      `}</style>

      <h3 className="services-title">SERVICES</h3>
      <p className="services-subtitle">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam</p>

      <div className="services-container">
        {/* Featured large card */}
        <div className="featured-card">
          <div className="featured-badge">Most Popular</div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div className="featured-icon">
              {/* rocket svg */}
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 20c0 0 4-1 6-3s3-6 3-6l5-5c0 0-2 1-5 1s-6 3-6 3-1 3-3 5z" stroke="#0044ff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="5" cy="19" r="1" fill="#0044ff" />
              </svg>
            </div>

            <h4 className="featured-title">Automated Workflows</h4>
            <p className="featured-text">Streamline your business processes with intelligent automation that saves time and reduces human error. Perfect for scaling teams.</p>

            <ul className="featured-list">
              <li><i>✔</i> 24/7 Processing</li>
              <li><i>✔</i> Smart Analytics</li>
              <li><i>✔</i> Easy Integration</li>
            </ul>

            <button className="featured-btn">Get Started Free</button>
          </div>
        </div>

        {/* Right column cards (2x2 grid) */}
        <div>
          <div className="service-card" style={{ marginBottom: 20 }}>
            <div className="service-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2l1.5 4.5L18 8l-3 2 1 4-4-2-4 2 1-4L6 8l4.5-1.5L12 2z" fill="#4453ff"/></svg>
            </div>
            <div className="service-title">Security Solutions</div>
            <div className="service-text">Enterprise-grade security measures to protect your data and maintain compliance standards.</div>
            <a className="service-link" href="#">Learn More →</a>
          </div>

          <div className="service-card" style={{ marginBottom: 20 }}>
            <div className="service-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 12h18M12 3v18" stroke="#4453ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="service-title">Performance Analytics</div>
            <div className="service-text">Real-time insights and comprehensive reporting to optimize your business performance.</div>
            <a className="service-link" href="#">Learn More →</a>
          </div>
        </div>

        <div>
          <div className="service-card" style={{ marginBottom: 20 }}>
            <div className="service-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z" fill="#4453ff"/></svg>
            </div>
            <div className="service-title">Team Collaboration</div>
            <div className="service-text">Seamless collaboration tools that bring your team together regardless of location.</div>
            <a className="service-link" href="#">Learn More →</a>
          </div>

          <div className="service-card" style={{ marginBottom: 0 }}>
            <div className="service-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3v12l3-3h4V3h-7z" fill="#4453ff"/></svg>
            </div>
            <div className="service-title">Cloud Integration</div>
            <div className="service-text">Flexible cloud solutions that scale with your business needs and requirements.</div>
            <a className="service-link" href="#">Learn More →</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
