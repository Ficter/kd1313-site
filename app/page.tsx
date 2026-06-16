import Link from "next/link";
import { Footer } from "@/components/Footer";
import { PublicNav } from "@/components/PublicNav";
import { alliances, notices } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="shell">
      <PublicNav />
      <section className="hero">
        <div>
          <div className="eyebrow">Kingdom 1313</div>
          <h1>Kingdom of Driftwood. <span>Built to survive the storm.</span></h1>
          <p className="lead">
            KD1313 is a Rise of Kingdoms community for active players who value war discipline,
            practical leadership, clear rules, and a kingdom culture with actual personality.
          </p>
          <div className="actions">
            <Link className="btn" href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL || "https://discord.gg/"}>Apply Through Discord</Link>
            <Link className="btn secondary" href="/login">Members Login</Link>
          </div>
        </div>
        <aside className="command-card">
          <img className="crest" src="/assets/images/kingdom-crest.svg" alt="KD1313 crest" />
          <div className="status-grid">
            <div className="status"><strong>1313</strong><span>Kingdom ID</span></div>
            <div className="status"><strong>TiNY</strong><span>Main Alliance</span></div>
            <div className="status"><strong>KVK</strong><span>War Focus</span></div>
            <div className="status"><strong>SGT</strong><span>Admin Timezone</span></div>
          </div>
        </aside>
      </section>
      <section>
        <div className="section-head">
          <div>
            <div className="eyebrow">Public Signal</div>
            <h2>For recruits, allies, and members who want the truth fast.</h2>
            <p className="lead">This site is the front door. Discord is still where applications, war rooms, voice calls, and live command happen.</p>
          </div>
        </div>
        <div className="grid-3">
          <article className="panel"><span className="tag">Recruitment</span><h3>Migration Starts In Discord</h3><p className="muted">Candidates can learn the kingdom identity here, then apply in the recruitment server with their governor profile.</p></article>
          <article className="panel"><span className="tag">Reputation</span><h3>A Kingdom With A Spine</h3><p className="muted">KD1313 is being shaped around clear expectations, active participation, and council communication.</p></article>
          <article className="panel"><span className="tag">Members</span><h3>Command Center Coming Online</h3><p className="muted">Members will get a login area with notices, MGE ranks, KVK prep, tools, roster, and achievement showcases.</p></article>
        </div>
      </section>
      <section>
        <div className="section-head">
          <div>
            <div className="eyebrow">Alliance</div>
            <h2>TiNY: Tiddies N&apos; Yams</h2>
            <p className="lead">The name is unserious. The expectations are not.</p>
          </div>
          <Link className="btn secondary" href="/alliances">Alliance Directory</Link>
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
      <section>
        <div className="section-head">
          <div>
            <div className="eyebrow">Live Shape</div>
            <h2>What this platform becomes next.</h2>
          </div>
        </div>
        <div className="grid-3">
          {notices.map((notice) => (
            <article className="notice" key={notice.title}>
              <h3>{notice.title}</h3>
              <p className="muted">{notice.text}</p>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
