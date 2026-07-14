import { useEffect, useState } from "react";
import { profile } from "../data/profile.js";

const LINES = [
  { prompt: "$", text: "whoami" },
  { prompt: ">", text: profile.name, color: "text" },
  { prompt: "$", text: "cat role.txt" },
  { prompt: ">", text: profile.role, color: "berry" },
  { prompt: "$", text: "cat location.txt" },
  { prompt: ">", text: profile.location, color: "muted" },
];

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIndex >= LINES.length) {
      setDone(true);
      return;
    }
    const current = LINES[lineIndex].text;
    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 22);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, 260);
      return () => clearTimeout(t);
    }
  }, [charIndex, lineIndex]);

  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">In [01]: profile.load()</div>
          <div className="terminal">
            <div className="terminal-bar">
              <span className="dot dot-r" />
              <span className="dot dot-y" />
              <span className="dot dot-g" />
              <span className="terminal-title">zsh — dhea@portfolio</span>
            </div>
            <div className="terminal-body">
              {LINES.slice(0, lineIndex).map((l, i) => (
                <div key={i} className={`term-line term-${l.color || "muted"}`}>
                  <span className="term-prompt">{l.prompt}</span> {l.text}
                </div>
              ))}
              {lineIndex < LINES.length && (
                <div className={`term-line term-${LINES[lineIndex].color || "muted"}`}>
                  <span className="term-prompt">{LINES[lineIndex].prompt}</span>{" "}
                  {LINES[lineIndex].text.slice(0, charIndex)}
                  <span className="cursor" />
                </div>
              )}
              {done && (
                <div className="term-line term-muted">
                  <span className="term-prompt">$</span> <span className="cursor" />
                </div>
              )}
            </div>
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({behavior:"smooth"}); }}>
              ./view-projects
            </a>
            <a className="btn btn-ghost" href={profile.cvFile} download>
              ./download-cv
            </a>
            <a className="btn btn-ghost" href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({behavior:"smooth"}); }}>
              ./get-in-touch
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-card">
            <img src="profile.jpg" alt={profile.name} className="hero-photo" />
            <div className="hero-photo-caption">
              <span className="dotpx" /> Semarang, ID — field notes from a pine forest hike
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero { padding-top: 72px; }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 56px;
          align-items: center;
        }
        .terminal {
          background: var(--surface);
          border: 1px solid var(--border-strong);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 30px 60px -30px rgba(0,0,0,0.6);
        }
        .terminal-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          background: var(--surface-raised);
          border-bottom: 1px solid var(--border);
        }
        .dot { width: 10px; height: 10px; border-radius: 50%; }
        .dot-r { background: #e4577b; }
        .dot-y { background: #f2b155; }
        .dot-g { background: #4fd1b5; }
        .terminal-title {
          margin-left: 8px;
          font-family: var(--mono);
          font-size: 12px;
          color: var(--text-muted);
        }
        .terminal-body {
          padding: 22px 20px;
          font-family: var(--mono);
          font-size: 15px;
          min-height: 190px;
        }
        .term-line { margin-bottom: 10px; }
        .term-prompt { color: var(--teal); }
        .term-muted { color: var(--text-muted); }
        .term-text { color: var(--text); font-weight: 600; }
        .term-berry { color: var(--berry); font-weight: 600; }
        .cursor {
          display: inline-block;
          width: 8px;
          height: 16px;
          background: var(--teal);
          margin-left: 2px;
          vertical-align: text-bottom;
          animation: blink 1s step-start infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }
        .hero-actions {
          display: flex;
          gap: 14px;
          margin-top: 26px;
          flex-wrap: wrap;
        }
        .hero-photo-wrap { display: flex; justify-content: center; }
        .hero-photo-card {
          background: var(--surface);
          border: 1px solid var(--border-strong);
          border-radius: 16px;
          padding: 10px;
          max-width: 320px;
          box-shadow: 0 30px 60px -30px rgba(0,0,0,0.6);
        }
        .hero-photo {
          width: 100%;
          border-radius: 10px;
          display: block;
          object-fit: cover;
          aspect-ratio: 3 / 4;
        }
        .hero-photo-caption {
          font-family: var(--mono);
          font-size: 12px;
          color: var(--text-muted);
          padding: 12px 6px 4px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .dotpx { width: 6px; height: 6px; background: var(--amber); display: inline-block; border-radius: 1px; }
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr; }
          .hero-photo-wrap { order: -1; }
          .hero-photo-card { max-width: 220px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
