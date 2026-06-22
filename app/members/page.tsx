import { MemberShell } from "@/components/MemberShell";
import { memberPosts, memberResources } from "@/lib/data";
import { playerStats } from "@/lib/stats";

const ops = [
  ["Command Posts", "Pinned briefs, notices, and member highlights", "/members/newsletter"],
  ["Stats Board", "KP, DKP, dead, healed, and acclaim tracking", "/members/stats"],
  ["Member Tools", "Time board, countdowns, and KVK readiness", "/members/tools"],
  ["Roster", "Member and role visibility", "/members/roster"]
];

function compact(value: number) {
  return Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(value);
}

export default function MembersPage() {
  const totals = playerStats.reduce(
    (sum, player) => ({
      dkp: sum.dkp + player.dkp,
      kp: sum.kp + player.kp,
      dead: sum.dead + player.dead,
      healed: sum.healed + player.healed
    }),
    { dkp: 0, kp: 0, dead: 0, healed: 0 }
  );

  return (
    <MemberShell>
      <div className="dash-title">
        <div>
          <div className="eyebrow">KD1313 Portal</div>
          <h1>Member command center.</h1>
        </div>
        <span className="tag">Protected</span>
      </div>
      <div className="grid-4">
        <div className="status"><strong>{playerStats.length}</strong><span>Tracked governors</span><small>Stats board</small></div>
        <div className="status"><strong>{compact(totals.dkp)}</strong><span>Total DKP</span><small>Contribution</small></div>
        <div className="status"><strong>{compact(totals.kp)}</strong><span>Total KP</span><small>T4 + T5</small></div>
        <div className="status"><strong>{compact(totals.dead)}</strong><span>Dead troops</span><small>War cost</small></div>
      </div>

      <section className="member-section">
        <div className="section-head compact">
          <div>
            <span className="tag">Briefing</span>
            <h2>Curated posts.</h2>
          </div>
          <a className="btn secondary" href="/members/newsletter">View all posts</a>
        </div>
        <div className="grid-3">
          {memberPosts.map((post) => (
            <article className="notice post-card" key={post.title}>
              <span className="tag">{post.category}</span>
              <h3>{post.title}</h3>
              <p className="muted">{post.summary}</p>
              <small>{post.date} · {post.priority}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="member-section split">
        <div className="module">
          <span className="tag">Quick Access</span>
          <div className="module-list">
            {ops.map(([label, text, href]) => (
              <a className="module-row" href={href} key={label}>
                <b>{label}</b>
                <span>{text}</span>
                <em className="pill">Open</em>
              </a>
            ))}
          </div>
        </div>
        <div className="module">
          <span className="tag">Pinned Info</span>
          <div className="module-list">
            {memberResources.map((item) => (
              <a className="module-row" href={item.href} key={item.title}>
                <b>{item.title}</b>
                <span>{item.text}</span>
                <em className="pill">Open</em>
              </a>
            ))}
          </div>
        </div>
      </section>
    </MemberShell>
  );
}
