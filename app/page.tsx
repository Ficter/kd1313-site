import Link from "next/link";
import { Footer } from "@/components/Footer";
import { PublicNav } from "@/components/PublicNav";
import { alliances } from "@/lib/data";

const modules = [
  ["The Gate", "A polished public face for recruits, allies, rivals, and curious visitors.", "Open"],
  ["The Hall", "A private members area for notices, rules, war prep, rankings, and kingdom tools.", "Members"],
  ["The War Room", "KVK planning, MGE visibility, roster coordination, and officer updates.", "Council"],
  ["The Tavern", "A lighter lounge for member highlights, weekly notes, and kingdom culture.", "Community"]
];

export default function HomePage() {
  return (
    <div className="shell">
      <PublicNav />
      <section className="hero">
        <div className="hero-main">
          <div>
            <div className="eyebrow">Kingdom 1313 | Kingdom of Driftwood</div>
            <h1>Kingdom of Driftwood. <span>Rise with the tide.</span></h1>
            <p className="lead">
              A kingdom built for players who show up: sharp recruitment, visible standards,
              stronger member coordination, and a community identity that feels worth fighting for.
            </p>
            <div className="actions">
              <Link className="btn" href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL || "https://discord.gg/"}>
                Apply Through Discord
              </Link>
              <Link className="btn secondary" href="/login">Members Entrance</Link>
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
            <span className="tag">Driftwood Doctrine</span>
            <h3>Stand together, move clean, answer the call.</h3>
            <p className="muted">Recruitment happens through Discord. The site gives KD1313 a public identity and gives members a central place for the things that should not get buried in chat.</p>
            <div className="status-grid" style={{ marginTop: 18 }}>
              <div className="status"><strong>Recruit</strong><span>Apply in Discord</span><small>Visitors</small></div>
              <div className="status"><strong>Gather</strong><span>Member hall</span><small>KD1313</small></div>
            </div>
          </div>
        </aside>
      </section>
      <section>
        <div className="section-head">
          <div>
            <div className="eyebrow">Kingdom Structure</div>
            <h2>One public legend. One private hall.</h2>
            <p className="lead">Visitors see what KD1313 stands for. Members get the operational layer: rankings, reminders, rules, prep lists, and the tools that make a kingdom easier to run.</p>
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
            <div className="eyebrow">Alliance Banner</div>
            <h2>TiNY carries the first banner.</h2>
            <p className="lead">Tiddies N&apos; Yams brings the name, the noise, and the nerve. The kingdom site gives that energy a sharper home.</p>
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
