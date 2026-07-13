import { useEffect, useState } from "react";

const TABS = [
  { id: "hero", label: "hero.jsx" },
  { id: "about", label: "about.md" },
  { id: "experience", label: "experience.json" },
  { id: "projects", label: "projects/" },
  { id: "skills", label: "skills.yml" },
  { id: "certs", label: "certs.log" },
  { id: "contact", label: "contact.sh" },
];

export default function Nav() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = TABS.map((t) => document.getElementById(t.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav-inner container">
        <div className="nav-brand" onClick={() => goTo("hero")}>
          <span className="nav-dot" />
          dhea<span className="nav-brand-accent">.dev</span>
        </div>

        <button
          className="nav-burger"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-tabs ${open ? "nav-tabs-open" : ""}`}>
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`nav-tab ${active === t.id ? "nav-tab-active" : ""}`}
              onClick={() => goTo(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(18, 24, 31, 0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          gap: 24px;
          height: 60px;
        }
        .nav-brand {
          font-family: var(--mono);
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }
        .nav-brand-accent { color: var(--berry); }
        .nav-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--teal);
          box-shadow: 0 0 0 3px var(--teal-soft);
        }
        .nav-tabs {
          display: flex;
          gap: 2px;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .nav-tabs::-webkit-scrollbar { display: none; }
        .nav-tab {
          font-family: var(--mono);
          font-size: 13px;
          background: transparent;
          border: none;
          border-bottom: 2px solid transparent;
          color: var(--text-muted);
          padding: 10px 12px;
          cursor: pointer;
          white-space: nowrap;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .nav-tab:hover { color: var(--text); }
        .nav-tab-active {
          color: var(--berry);
          border-bottom-color: var(--berry);
        }
        .nav-burger {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          margin-left: auto;
        }
        .nav-burger span {
          width: 20px;
          height: 2px;
          background: var(--text);
        }
        @media (max-width: 780px) {
          .nav-burger { display: flex; }
          .nav-tabs {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 60px;
            left: 0;
            right: 0;
            background: var(--ink-soft);
            border-bottom: 1px solid var(--border);
            padding: 8px 24px 16px;
          }
          .nav-tabs-open { display: flex; }
          .nav-tab { text-align: left; border-bottom: none; border-left: 2px solid transparent; padding: 10px 8px; }
          .nav-tab-active { border-left-color: var(--berry); border-bottom: none; }
        }
      `}</style>
    </nav>
  );
}
