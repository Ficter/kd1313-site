import Link from "next/link";
import { Footer } from "@/components/Footer";
import { PublicNav } from "@/components/PublicNav";
import { alliances } from "@/lib/data";
import { playerStats, statsPeriod } from "@/lib/stats";

const portalModules = [
  ["Announcements", "Kingdom notices that do not vanish in chat."],
  ["Events", "Ark, KVK, MGE, reset windows, and signups."],
  ["Stats", "KP, DKP, dead, healed, acclaim, and power tracking."],
  ["Accounts", "Roster visibility and future Discord-linked IDs."]
];

const totals = playerStats.reduce(
  (sum, player) => ({
    power: sum.power + player.currentPower,
    dkp: sum.dkp + player.dkp,
    kp: sum.kp + player.kp,
    dead: sum.dead + player.dead
  }),
  { power: 0, dkp: 0, kp: 0, dead: 0 }
);

function compact(value: number) {
  if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(1)}B`;
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
  return String(value);
}

export default function HomePage() {
  return (
    <div className="shell">
      <PublicNav />
      <main className="portal-home">
        <section className="portal-hero">
          <div>
            <div className="eyebrow">Kingdom 1313 / TiNY</div>
            <h1>KD1313 command portal.</h1>
            <p className="lead">
              A clean public gate for migrants and allies, with the practical kingdom tools kept behind member login.
            </p>
            <div className="actions">
              <Link className="btn" href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL || "https://discord.gg/"}>
                Recruitment Discord
              </Link>
              <Link className="btn secondary" href="/login">Member Login</Link>
            </div>
            <div className="signal-strip">
              <div className="signal"><b>1313</b><span>Kingdom</span></div>
              <div className="signal"><b>TiNY</b><span>Main alliance</span></div>
              <div className="signal"><b>{playerStats.length}</b><span>Tracked players</span></div>
              <div className="signal"><b>{compact(totals.kp)}</b><span>Period KP</span></div>
            </div>
          </div>
          <div className="portal-card">
            <span className="tag">Stats Window</span>
            <h2>{statsPeriod}</h2>
            <div className="mini-stats">
              <div><strong>{compact(totals.power)}</strong><span>Total power</span></div>
              <div><strong>{compact(totals.dkp)}</strong><span>Total DKP</span></div>
              <div><strong>{compact(totals.dead)}</strong><span>Dead troops</span></div>
              <div><strong>{compact(totals.kp)}</strong><span>T4 + T5 KP</span></div>
            </div>
            <Link className="btn secondary" href="/login">Open Protected Stats</Link>
          </div>
        </section>
        <section className="portal-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">Portal Modules</div>
            <h2>Simple on purpose.</h2>
            <p className="lead">The site should do useful work: show credibility outside, organize members inside, and grow toward Discord login later.</p>
          </div>
        </div>
        <div className="grid-4">
          {portalModules.map(([label, text]) => (
            <article className="panel" key={label}>
              <span className="tag">{label}</span>
              <p className="muted">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="portal-section">
        <div className="section-head">
          <div>
            <div className="eyebrow">Kingdom Structure</div>
            <h2>Current main banner: TiNY.</h2>
            <p className="lead">Recruitment stays in Discord. The website stays clean, fast, and operational.</p>
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
      </main>
      <Footer />
    </div>
  );
}
