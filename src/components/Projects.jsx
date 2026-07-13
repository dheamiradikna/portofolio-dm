import Reveal from "./Reveal.jsx";
import { projects, profile } from "../data/profile.js";

const LANG_COLOR = {
  "Jupyter Notebook": "#f2b155",
  "Python": "#4fd1b5",
  "JavaScript": "#f2e355",
  "Blade": "#e4577b",
  "Java": "#e08a4a",
  "C#": "#6fcf97",
  "Visual Basic .NET": "#9457e8",
};

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <Reveal>
          <div className="eyebrow">In [04]: ls projects/</div>
          <h2 className="section-title">Projects</h2>
          <p className="section-sub">
            The pinned repositories from{" "}
            <a href={profile.github} target="_blank" rel="noreferrer" className="link">
              github.com/dheamiradikna
            </a>{" "}
            — spanning machine learning, data engineering, and full-stack apps.
          </p>
        </Reveal>

        <div className="proj-grid">
          {projects.map((p, i) => (
            <Reveal className="proj-card" key={p.name}>
              <div className="proj-cell-tag">In [{String(i + 1).padStart(2, "0")}]:</div>
              <div className="proj-top">
                <h3 className="proj-name">{p.name}</h3>
                <span
                  className="proj-lang-dot"
                  style={{ background: LANG_COLOR[p.lang] || "var(--teal)" }}
                />
              </div>
              {p.metrics && p.metrics.length > 0 && (
                <div className="proj-metrics">
                  {p.metrics.map((m) => (
                    <span className="metric-badge" key={m}>{m}</span>
                  ))}
                </div>
              )}
              <p className="proj-desc">{p.description}</p>
              <div className="proj-tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
              <a className="proj-link" href={p.url} target="_blank" rel="noreferrer">
                View on GitHub <span aria-hidden>↗</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .link { color: var(--berry); text-decoration: underline; text-underline-offset: 3px; }
        .proj-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 8px;
        }
        .proj-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 20px 20px 22px;
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .proj-card:hover {
          border-color: var(--border-strong);
          transform: translateY(-3px);
        }
        .proj-cell-tag {
          font-family: var(--mono);
          font-size: 11px;
          color: var(--text-muted);
          opacity: 0.7;
          margin-bottom: 10px;
        }
        .proj-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }
        .proj-name {
          font-size: 15.5px;
          font-weight: 600;
          font-family: var(--mono);
          line-height: 1.4;
        }
        .proj-lang-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .proj-metrics {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin: 12px 0 2px;
        }
        .metric-badge {
          font-family: var(--mono);
          font-size: 11.5px;
          font-weight: 700;
          padding: 4px 9px;
          border-radius: 5px;
          background: var(--amber-soft);
          color: var(--amber);
          border: 1px solid rgba(242, 177, 85, 0.35);
          white-space: nowrap;
        }
        .proj-desc {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.65;
          margin: 12px 0 16px;
          flex: 1;
        }
        .proj-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 18px;
        }
        .proj-link {
          font-family: var(--mono);
          font-size: 13px;
          color: var(--teal);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          width: fit-content;
        }
        .proj-link:hover { text-decoration: underline; }
      `}</style>
    </section>
  );
}
