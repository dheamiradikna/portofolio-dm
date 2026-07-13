import Reveal from "./Reveal.jsx";
import { skills } from "../data/profile.js";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Reveal>
          <div className="eyebrow">In [05]: skills.yml</div>
          <h2 className="section-title">Skills</h2>
        </Reveal>

        <div className="skills-grid">
          {Object.entries(skills).map(([group, items]) => (
            <Reveal className="skill-group" key={group}>
              <div className="skill-key">{group.toLowerCase().replace(/ & /g, "_&_").replace(/ /g, "_")}:</div>
              <div className="skill-pills">
                {items.map((s) => (
                  <span className="tag skill-pill" key={s}>{s}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .skill-group {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 20px 22px;
        }
        .skill-key {
          font-family: var(--mono);
          font-size: 13px;
          color: var(--amber);
          margin-bottom: 14px;
        }
        .skill-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .skill-pill { color: var(--text); }
        @media (max-width: 700px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
