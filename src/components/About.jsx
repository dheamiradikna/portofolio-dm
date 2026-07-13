import Reveal from "./Reveal.jsx";
import { profile, experience, projects, certifications } from "../data/profile.js";

const STATS = [
  { value: experience.length, label: "professional roles", color: "berry" },
  { value: projects.length, label: "projects on GitHub", color: "teal" },
  { value: certifications.length, label: "certifications completed", color: "amber" },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal>
          <div className="eyebrow">In [02]: about.md</div>
          <h2 className="section-title">About</h2>
        </Reveal>

        <Reveal className="about-bio">
          <p>{profile.bio}</p>
        </Reveal>

        <Reveal className="stat-strip">
          {STATS.map((s) => (
            <div className="stat-item" key={s.label}>
              <div className={`stat-value stat-${s.color}`}>{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>

      <style>{`
        .about-bio p {
          color: var(--text);
          font-size: 16.5px;
          line-height: 1.8;
          white-space: pre-line;
          max-width: 760px;
        }
        .stat-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 36px;
          max-width: 620px;
        }
        .stat-item {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 18px 16px;
          text-align: center;
        }
        .stat-value {
          font-family: var(--mono);
          font-size: 30px;
          font-weight: 700;
        }
        .stat-berry { color: var(--berry); }
        .stat-teal { color: var(--teal); }
        .stat-amber { color: var(--amber); }
        .stat-label {
          font-size: 12.5px;
          color: var(--text-muted);
          margin-top: 6px;
        }
        @media (max-width: 560px) {
          .stat-strip { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
