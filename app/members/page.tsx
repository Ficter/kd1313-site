import { MemberShell } from "@/components/MemberShell";
import { notices } from "@/lib/data";
import { playerStats } from "@/lib/stats";

const ops = [
  ["Announcements", "Kingdom notices and updates", "/members/newsletter"],
  ["Events", "Ark, KVK, MGE, and reset planning", "/events"],
  ["Stats", "KP, DKP, dead, healed, and acclaim board", "/members/stats"],
  ["MGE", "Manual rank board", "/members/mge"],
  ["KVK", "Prep checklist and war notes", "/members/kvk"],
  ["Tools", "Timers and converters", "/members/tools"],
  ["Roster", "Member and role visibility", "/members/roster"]
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

export default function MembersPage() {
  return (
    <MemberShell>
      <div className="dash-title">
        <div>
          <div className="eyebrow">KD1313 Portal</div>
          <h1>Operations dashboard.</h1>
        </div>
        <span className="tag">Protected</span>
      </div>
      <div className="grid-4">
        <div className="status"><strong>{playerStats.length}</strong><span>Tracked players</span><small>Stats</small></div>
        <div className="status"><strong>{compact(totals.dkp)}</strong><span>Total DKP</span><small>Period</small></div>
        <div className="status"><strong>{compact(totals.kp)}</strong><span>T4 + T5 KP</span><small>Combat</small></div>
        <div className="status"><strong>{compact(totals.dead)}</strong><span>Dead troops</span><small>Commitment</small></div>
      </div>
      <section style={{ padding: "24px 0 0" }}>
        <div className="portal-grid">
          <div className="module-list">
            {ops.map(([label, text, href]) => (
              <a className="module-row" href={href} key={label}>
                <b>{label}</b>
                <span>{text}</span>
                <em className="pill">Open →</em>
              </a>
            ))}
          </div>
          <div className="command-card dashboard-brief">
            <span className="tag">Priority</span>
            <h3>Stats are the center.</h3>
            <p className="muted">Use the stats board as the current source of truth. Events, MGE, KVK, and roster tools can grow around it.</p>
            <a className="btn" href="/members/stats">Open Stats Board</a>
          </div>
        </div>
      </section>
      <section style={{ padding: "24px 0 0" }}>
        <div className="grid-3">
          {notices.map((notice) => (
            <article className="notice" key={notice.title}>
              <span className="tag">Notice</span>
              <h3>{notice.title}</h3>
              <p className="muted">{notice.text}</p>
            </article>
          ))}
        </div>
      </section>
    </MemberShell>
  );
}
