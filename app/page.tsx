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
            <div className="eyebrow">Kingdom 1313</div>
            <h1>Order. Loyalty. Victory.</h1>
            <p className="lead">
              KD1313 is a competitive kingdom built on disciplined leadership, organized warfare,
              and a kingdom-first culture. We value contribution, teamwork, and long-term success
              above individual ambition.
            </p>
            <div className="actions">
              <Link className="btn" href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL || "https://discord.gg/"}>
                Apply for Migration
              </Link>
              <Link className="btn secondary" href="/login">Member Portal</Link>
            </div>
          </div>
          <div className="signal-strip">
            <div className="signal"><b>1313</b><span>Kingdom Number</span></div>
            <div className="signal"><b>Season of Conquest</b><span>Current Season</span></div>
            <div className="signal"><b>Competitive KVK</b><span>Kingdom Focus</span></div>
            <div className="signal"><b>International Community</b><span>Player Base</span></div>
          </div>
        </div>
        <aside className="hero-side" aria-label="Kingdom 1313 cinematic artwork">
          <div className="command-card">
            <span className="tag">Recruitment & Access</span>
            <h3>Recruitment & Access</h3>
            <p className="muted">
              Visitors can explore kingdom information, rules, and recruitment requirements.
            </p>
            <p className="muted">
              Members can access internal resources, event planning, and kingdom operations through the secure portal.
            </p>
            <div className="actions">
              <Link className="btn" href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL || "https://discord.gg/"}>
                Recruitment Discord
              </Link>
              <Link className="btn secondary" href="/login">Member Login</Link>
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
