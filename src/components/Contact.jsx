import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { profile } from "../data/profile.js";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — no-op, the email is visible on screen anyway
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <Reveal>
          <div className="eyebrow">In [07]: contact.sh</div>
          <h2 className="section-title">Let's build something</h2>
          <p className="section-sub">
            Open to backend, data, and AI/ML opportunities — feel free to reach out.
          </p>
        </Reveal>

        <Reveal className="contact-card">
          <div className="contact-cmd">
            <span className="term-prompt">$</span> contact --name "{profile.name}"
          </div>
          <div className="contact-rows">
            <a className="contact-row" href={profile.cvFile} download>
              <span className="contact-flag">--resume</span>
              <span className="contact-val">{profile.cvFile}</span>
              <span className="contact-copy">download ↓</span>
            </a>
            <button className="contact-row" onClick={copyEmail}>
              <span className="contact-flag">--email</span>
              <span className="contact-val">{profile.email}</span>
              <span className="contact-copy">{copied ? "copied ✓" : "copy"}</span>
            </button>
            <a className="contact-row" href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>
              <span className="contact-flag">--phone</span>
              <span className="contact-val">{profile.phone}</span>
            </a>
            <a className="contact-row" href={profile.linkedin} target="_blank" rel="noreferrer">
              <span className="contact-flag">--linkedin</span>
              <span className="contact-val">{profile.linkedin.replace("https://", "")}</span>
              <span className="contact-copy">open ↗</span>
            </a>
            <a className="contact-row" href={profile.github} target="_blank" rel="noreferrer">
              <span className="contact-flag">--github</span>
              <span className="contact-val">{profile.github.replace("https://", "")}</span>
              <span className="contact-copy">open ↗</span>
            </a>
          </div>
        </Reveal>
      </div>

      <style>{`
        .contact-card {
          background: var(--surface);
          border: 1px solid var(--border-strong);
          border-radius: 12px;
          padding: 26px 28px;
        }
        .contact-cmd {
          font-family: var(--mono);
          font-size: 14px;
          color: var(--text-muted);
          margin-bottom: 20px;
        }
        .contact-rows { display: flex; flex-direction: column; gap: 2px; }
        .contact-row {
          display: grid;
          grid-template-columns: 110px 1fr auto;
          align-items: center;
          gap: 12px;
          padding: 13px 10px;
          border-radius: 8px;
          background: none;
          border: none;
          text-decoration: none;
          color: var(--text);
          cursor: pointer;
          font-family: var(--mono);
          font-size: 14px;
          text-align: left;
          transition: background 0.15s ease;
        }
        .contact-row:hover { background: var(--surface-raised); }
        .contact-flag { color: var(--teal); }
        .contact-val { overflow-wrap: anywhere; }
        .contact-copy { color: var(--berry); font-size: 12px; flex-shrink: 0; }
        @media (max-width: 600px) {
          .contact-row { grid-template-columns: 1fr; gap: 4px; }
          .contact-copy { justify-self: start; }
        }
      `}</style>
    </section>
  );
}
