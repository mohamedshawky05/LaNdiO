import React, { useEffect, useRef } from "react";

const defaultStats = [
  { value: 480, suffix: "+", label: "Successful Projects" },
  { value: 99.8, suffix: "%", label: "Customer Satisfaction" },
  { value: 65, suffix: "+", label: "Team Members" },
  { value: 24, suffix: "/7", label: "Customer Support" },
];

export default function StatsComponent({ stats = defaultStats }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const els = rootRef.current?.querySelectorAll('.stat-number');
    if (!els) return;

    els.forEach((el) => {
      const target = parseFloat(el.dataset.target) || 0;
      const isFloat = String(el.dataset.target).includes('.');
      let current = 0;
      const duration = 1200;
      const frameTime = 20;
      const frames = Math.ceil(duration / frameTime);
      const inc = target / frames;
      let f = 0;
      const t = setInterval(() => {
        f++;
        current += inc;
        if (f >= frames) {
          clearInterval(t);
          el.textContent = (isFloat ? target.toFixed(1) : Math.round(target)) + (el.dataset.suffix || '');
        } else {
          el.textContent = (isFloat ? current.toFixed(1) : Math.round(current)) + (el.dataset.suffix || '');
        }
      }, frameTime);
    });

    return () => {};
  }, [stats]);

  return (
    <div style={{ width: '100%' }}>
      <div
        ref={rootRef}
        className="stats-banner"
        style={{
          background: '#ffffff',
          borderRadius: 12,
          padding: '48px 28px',
          boxShadow: '0 2px 0 rgba(0,0,0,0.02)',
          border: '1px solid rgba(0,0,0,0.04)',
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        <div className="stats-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ flex: '1 1 180px', minWidth: 160, textAlign: 'center', padding: '8px 12px' }}>
              <div
                className="stat-number"
                data-target={s.value}
                data-suffix={s.suffix}
                style={{ fontSize: 44, fontWeight: 800, color: '#103bff', lineHeight: 1 }}
              >
                0{s.suffix}
              </div>
              <div style={{ marginTop: 12, color: '#73787f', fontWeight: 600 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* small responsive tweaks (optional) */}
      <style>{`
        @media (max-width: 768px) {
          .stat-number { font-size: 32px !important }
        }
      `}</style>
    </div>
  );
}
