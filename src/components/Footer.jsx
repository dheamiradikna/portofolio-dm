import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span># {profile.funFact}</span>
        <span>© {new Date().getFullYear()} {profile.name}</span>
      </div>
      <style>{`
        .footer {
          padding: 32px 0 48px;
        }
        .footer-inner {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
          font-family: var(--mono);
          font-size: 12.5px;
          color: var(--text-muted);
        }
      `}</style>
    </footer>
  );
}
