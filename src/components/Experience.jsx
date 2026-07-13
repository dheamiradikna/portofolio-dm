import Reveal from "./Reveal.jsx";
import { experience } from "../data/profile.js";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal>
          <div className="eyebrow">In [03]: experience.json</div>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-sub">Most recent role first — the actual order things happened.</p>
        </Reveal>

        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal className="tl-item" key={i}>
              <div className="tl-marker">
                <span className="tl-index">{String(experience.length - i).padStart(2, "0")}</span>
                <span className="tl-line" />
              </div>
              <div className="tl-card">
                <div className="tl-head">
                  <div>
                    <div className="tl-role">{job.role}</div>
                    <div className="tl-company">{job.company}</div>
                  </div>
                  <div className="tl-period tag">{job.period}</div>
                </div>
                <ul className="tl-points">
                  {job.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .timeline { position: relative; margin-top: 16px; }
        .tl-item {
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 20px;
        }
        .tl-item + .tl-item { margin-top: 8px; }
        .tl-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .tl-index {
          font-family: var(--mono);
          font-size: 12px;
          color: var(--berry);
          background: var(--berry-soft);
          border: 1px solid var(--berry);
          border-radius: 50%;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .tl-line {
          flex: 1;
          width: 1px;
          background: var(--border-strong);
          margin: 6px 0;
        }
        .tl-item:last-child .tl-line { display: none; }
        .tl-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 22px 24px;
          margin-bottom: 32px;
        }
        .tl-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 14px;
        }
        .tl-role { font-weight: 700; font-size: 17px; }
        .tl-company { color: var(--teal); font-family: var(--mono); font-size: 13px; margin-top: 4px; }
        .tl-points {
          margin: 0;
          padding-left: 20px;
          color: var(--text-muted);
          font-size: 14.5px;
          line-height: 1.75;
        }
        .tl-points li + li { margin-top: 6px; }
      `}</style>
    </section>
  );
}
