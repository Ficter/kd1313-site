import { MemberShell } from "@/components/MemberShell";
import { notices } from "@/lib/data";

export default function MembersPage() {
  return (
    <MemberShell>
      <div className="dash-title">
        <div>
          <div className="eyebrow">Command Center</div>
          <h1>Welcome back, Driftwood.</h1>
        </div>
        <span className="tag">Preview Mode</span>
      </div>
      <div className="grid-4">
        <div className="status"><strong>KVK</strong><span>Preparation phase</span></div>
        <div className="status"><strong>MGE</strong><span>Board pending</span></div>
        <div className="status"><strong>UTC</strong><span>Use converter</span></div>
        <div className="status"><strong>TiNY</strong><span>Main alliance</span></div>
      </div>
      <section style={{ padding: "28px 0 0" }}>
        <div className="grid-3">
          {notices.map((notice) => (
            <article className="notice" key={notice.title}>
              <h3>{notice.title}</h3>
              <p className="muted">{notice.text}</p>
            </article>
          ))}
        </div>
      </section>
    </MemberShell>
  );
}
