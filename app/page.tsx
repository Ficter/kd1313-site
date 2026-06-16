import Link from "next/link";
import { Footer } from "@/components/Footer";
import { PublicNav } from "@/components/PublicNav";
import { alliances } from "@/lib/data";

const modules = [
  ["Public", "Recruitment, reputation, alliance identity", "Live"],
  ["Members", "Newsletter, MGE, KVK, roster, tools", "Preview"],
  ["Discord", "Applications, voice, command calls, bot hooks", "Next"],
  ["Supabase", "Accounts, roles, protected member data", "Next"]
];

export default function HomePage() {
  return (
    <div className="shell">
      <PublicNav />
      <section className="hero">
        <div className="hero-main">
          <div>
            <div className="eyebrow">KD1313 Command Network</div>
            <h1>Kingdom of Driftwood. <span>Not another sleepy kingdom page.</span></h1>
            <p className="lead">
              A public front door for recruits and allies, plus a growing members platform for
              notices, MGE tracking, KVK preparation, tools, roster visibility, and future Discord automation.
            </p>
            <div className="actions">
              <Link className="btn" href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL || "https://discord.gg/"}>
                Apply Through Discord
              </Link>
              <Link className="btn secondary" href="/login">Preview Members Area</Link>
            </div>
          </div>
          <div className="signal-strip">
            <div className="signal"><b>1313</b><span>Kingdom ID</span></div>
            <div className="signal"><b>TiNY</b><span>Main alliance</span></div>
            <div className="signal"><b>KVK</b><span>War prep focus</span></div>
            <div className="signal"><b>Driftwood</b><span>Kingdom identity</span></div>
          </div>
        </div>
        <aside className="hero-side">
          <div className="command-card">
            <img className="crest" src="/assets/images/kingdom-crest.svg" alt="KD1313 crest" />
            <h3>Kingdom Status</h3>
            <p className="muted">Public site is live. Members area is in preview until Supabase login and roles are connected.</p>
          </div>
          <div className="status-grid">
            <div className="status"><strong>Public</strong><span>Recruitment and rules</span><small>Open</small></div>
            <div className="status"><strong>Member</strong><span>Dashboard preview</span><small>Soft gated</small></div>
            <div className="status"><strong>Roles</strong><span>R4/R5/Council later</span><small>Planned</small></div>
            <div className="status"><strong>Bot</strong><span>Discord link later</span><small>Planned</small></div>
          </div>
        </aside>
      </section>
      <section>
        <div className="section-head">
          <div>
            <div className="eyebrow">Platform Shape</div>
            <h2>Public website plus member command center.</h2>
            <p className="lead">Different audiences, different doors. Visitors see identity and recruitment. Members get tools and coordination.</p>
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
            <div className="eyebrow">Alliance Signal</div>
            <h2>TiNY is public. Sensitive command stays private.</h2>
            <p className="lead">Alliance names can build reputation. War details, target calls, and council decisions belong behind member access.</p>
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
