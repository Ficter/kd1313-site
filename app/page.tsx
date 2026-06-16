import Link from "next/link";
import { Footer } from "@/components/Footer";
import { PublicNav } from "@/components/PublicNav";
import { alliances } from "@/lib/data";

const modules = [
  ["Announcements", "Kingdom updates and instructions in one place.", "Portal"],
  ["Events", "Ark, KVK, MGE, and reset reminders.", "Portal"],
  ["KVK Stats", "A home for KP, dead troops, prep, and performance tracking.", "Planned"],
  ["Accounts", "Roster and governor ID management for officers.", "Planned"]
];

export default function HomePage() {
  return (
    <div className="shell">
      <PublicNav />
      <section className="hero">
        <div className="hero-main">
          <div>
            <div className="eyebrow">Kingdom 1313 | Kingdom of Driftwood</div>
            <h1>Kingdom of Driftwood.</h1>
            <p className="lead">
              A simple public front door for Kingdom 1313, with recruitment handled through Discord
              and member tools kept behind the portal.
            </p>
            <div className="actions">
              <Link className="btn" href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL || "https://discord.gg/"}>
                Join Recruitment Discord
              </Link>
              <Link className="btn secondary" href="/login">Member Login</Link>
            </div>
          </div>
          <div className="signal-strip">
            <div className="signal"><b>1313</b><span>Kingdom ID</span></div>
            <div className="signal"><b>TiNY</b><span>Main alliance</span></div>
            <div className="signal"><b>KVK</b><span>War prep focus</span></div>
            <div className="signal"><b>Driftwood</b><span>Kingdom identity</span></div>
          </div>
        </div>
        <aside className="hero-side" aria-label="Kingdom 1313 cinematic artwork">
          <div className="command-card">
            <span className="tag">Portal Status</span>
            <h3>Public outside. Operational inside.</h3>
            <p className="muted">Visitors get the essentials. Members log in for rankings, prep, tools, roster info, and future Discord-connected features.</p>
            <div className="status-grid" style={{ marginTop: 18 }}>
              <div className="status"><strong>Open</strong><span>Recruitment Discord</span><small>Visitors</small></div>
              <div className="status"><strong>Login</strong><span>Member portal</span><small>KD1313</small></div>
            </div>
          </div>
        </aside>
      </section>
      <section>
        <div className="section-head">
          <div>
            <div className="eyebrow">Portal</div>
            <h2>Built for practical kingdom use.</h2>
            <p className="lead">The site stays small: public identity, Discord recruitment, member login, and tools that help leadership run the kingdom.</p>
          </div>
        </div>
        <div className="module">
          <div className="module-list">
            {modules.map(([label, text, status]) => (
              <div className="module-row" key={label}>
                <b>{label}</b>
                <span>{text}</span>
                <em className="pill">{status}</em>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="section-head">
          <div>
            <div className="eyebrow">Alliance</div>
            <h2>Main alliance: TiNY.</h2>
            <p className="lead">Tiddies N&apos; Yams is the current main alliance banner for Kingdom 1313.</p>
          </div>
          <Link className="btn secondary" href="/alliances">Directory</Link>
        </div>
        <div className="grid-3">
          {alliances.map((alliance) => (
            <article className="panel" key={alliance.tag}>
              <span className="tag">{alliance.tag}</span>
              <h3>{alliance.name}</h3>
              <p className="muted">{alliance.focus}</p>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
