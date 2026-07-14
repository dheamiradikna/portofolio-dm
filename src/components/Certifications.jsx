import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { certifications, trainings, certificatesLink } from "../data/profile.js";

export default function Certifications() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="certs">
      <div className="container">
        <Reveal>
          <div className="eyebrow">In [06]: run certs.log</div>
          <h2 className="section-title">Certifications & Training</h2>
          <p className="section-sub">
            Continuous learning across networking, security, data, and AI — see the{" "}
            <a className="link" href={certificatesLink} target="_blank" rel="noreferrer">
              full certificate archive ↗
            </a>
          </p>
        </Reveal>

        <Reveal className="cert-log">
          {certifications.map((c, i) => (
            <div className="cert-line" key={i}>
              <span className="cert-pass">PASS</span>
              <span className="cert-name">{c.name}</span>
              <span className="cert-year">{c.year}</span>
            </div>
          ))}
        </Reveal>

        <Reveal className="training-block">
          <div className="training-label">training/details</div>
          <div className="training-list">
            {trainings.map((t, i) => (
              <div className="training-item" key={i}>
                <button
                  className="training-head"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  aria-expanded={openIdx === i}
                >
                  <span className="training-caret">{openIdx === i ? "▾" : "▸"}</span>
                  <span className="training-title">{t.title}</span>
                  <span className="tag training-org">{t.org} · {t.year}</span>
                </button>
                {openIdx === i && (
                  t.subcourses ? (
                    <div className="training-subcourses">
                      {t.subcourses.map((sc, k) => (
                        <div className="training-subcourse" key={k}>
                          <div className="training-subname">{sc.name}</div>
                          <ul className="training-points">
                            {sc.points.map((p, j) => (
                              <li key={j}>{p}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="training-points">
                      {t.points.map((p, j) => (
                        <li key={j}>{p}</li>
                      ))}
                    </ul>
                  )
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        .cert-log {
          background: var(--ink-soft);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 20px 22px;
          font-family: var(--mono);
          font-size: 13.5px;
          overflow-x: auto;
        }
        .cert-line {
          display: grid;
          grid-template-columns: 52px 1fr auto;
          gap: 14px;
          align-items: center;
          padding: 7px 0;
          border-bottom: 1px dashed var(--border);
        }
        .cert-line:last-child { border-bottom: none; }
        .cert-pass {
          color: var(--teal);
          background: var(--teal-soft);
          border-radius: 4px;
          padding: 2px 6px;
          text-align: center;
          font-weight: 700;
          font-size: 11px;
        }
        .cert-name { color: var(--text); }
        .cert-year { color: var(--text-muted); }

        .training-block { margin-top: 36px; }
        .training-label {
          font-family: var(--mono);
          font-size: 12px;
          color: var(--amber);
          margin-bottom: 14px;
        }
        .training-item {
          border: 1px solid var(--border);
          border-radius: 10px;
          margin-bottom: 10px;
          overflow: hidden;
          background: var(--surface);
        }
        .training-head {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          background: none;
          border: none;
          color: var(--text);
          text-align: left;
          padding: 14px 18px;
          cursor: pointer;
          font-size: 14px;
        }
        .training-caret { color: var(--berry); font-family: var(--mono); width: 12px; }
        .training-title { flex: 1; font-weight: 500; }
        .training-org { flex-shrink: 0; }
        .training-points {
          margin: 0;
          padding: 0 18px 16px 46px;
          color: var(--text-muted);
          font-size: 13.5px;
          line-height: 1.7;
        }
        .training-points li + li { margin-top: 4px; }
        .training-subcourses {
          padding: 0 18px 14px 46px;
        }
        .training-subcourse + .training-subcourse { margin-top: 16px; }
        .training-subname {
          font-family: var(--mono);
          font-size: 13px;
          color: var(--teal);
          margin-bottom: 6px;
        }
        .training-subcourses .training-points { padding-left: 18px; }
      `}</style>
    </section>
  );
}
