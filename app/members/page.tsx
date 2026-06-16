import { MemberShell } from "@/components/MemberShell";
import { notices } from "@/lib/data";

const ops = [
  ["Newsletter", "Weekly briefing draft", "/members/newsletter"],
  ["MGE Board", "Manual rank tracking", "/members/mge"],
  ["KVK Room", "Readiness checklist", "/members/kvk"],
  ["Tools", "Timers and converters", "/members/tools"]
];

export default function MembersPage() {
  return (
    <MemberShell>
      <div className="dash-title">
        <div>
          <div className="eyebrow">Member Command</div>
          <h1>Kingdom operations at a glance.</h1>
        </div>
        <span className="tag">Preview Mode</span>
      </div>
      <div className="grid-4">
        <div className="status"><strong>KVK</strong><span>Prep checklist online</span><small>Members</small></div>
        <div className="status"><strong>MGE</strong><span>Ranks ready for data</span><small>Officers</small></div>
        <div className="status"><strong>UTC</strong><span>Converter planned</span><small>Tools</small></div>
        <div className="status"><strong>TiNY</strong><span>Roster placeholder</span><small>Alliance</small></div>
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
