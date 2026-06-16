import { MemberShell } from "@/components/MemberShell";
import { notices } from "@/lib/data";

const ops = [
  ["Announcements", "Kingdom notices and updates", "/members/newsletter"],
  ["Events", "Ark, KVK, MGE, and reset planning", "/events"],
  ["Stats", "KP, DKP, dead, healed, and acclaim board", "/members/stats"],
  ["MGE", "Manual rank board", "/members/mge"],
  ["KVK", "Prep checklist and war notes", "/members/kvk"],
  ["Tools", "Timers and converters", "/members/tools"],
  ["Roster", "Member and role visibility", "/members/roster"]
];

export default function MembersPage() {
  return (
    <MemberShell>
      <div className="dash-title">
        <div>
          <div className="eyebrow">KD1313 Portal</div>
          <h1>Member dashboard.</h1>
        </div>
        <span className="tag">Protected</span>
      </div>
      <div className="grid-4">
        <div className="status"><strong>KVK</strong><span>Checklist online</span><small>Prep</small></div>
        <div className="status"><strong>MGE</strong><span>Rank board ready</span><small>Tracking</small></div>
        <div className="status"><strong>Events</strong><span>Calendar structure live</span><small>Planning</small></div>
        <div className="status"><strong>TiNY</strong><span>Main alliance</span><small>KD1313</small></div>
      </div>
      <section style={{ padding: "24px 0 0" }}>
        <div className="module">
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
