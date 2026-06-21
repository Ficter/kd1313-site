import { Footer } from "@/components/Footer";
import { PublicNav } from "@/components/PublicNav";

const leaders = [
  {
    name: "Ficter",
    title: "Founder / Admin",
    role: "Kingdom systems, website, recruitment direction",
    intro: "Builds the structure behind the kingdom and keeps long-term projects moving.",
    strengths: ["Systems thinker", "Persistent", "Kingdom-first"],
    quirks: "Will turn a small idea into a full operational platform if nobody stops him."
  },
  {
    name: "War Council",
    title: "KVK Command",
    role: "War planning, rally calls, pass discipline",
    intro: "The group responsible for making sure activity becomes coordinated pressure.",
    strengths: ["Fast calls", "Objective focus", "Battlefield discipline"],
    quirks: "Lives in UTC timers and probably has too many spreadsheets open."
  },
  {
    name: "TiNY Officers",
    title: "Main Alliance Leadership",
    role: "Member coordination, standards, daily execution",
    intro: "The alliance layer that turns kingdom expectations into daily habits.",
    strengths: ["Member support", "Event coverage", "Accountability"],
    quirks: "Equal parts serious coordination and chaotic alliance chat energy."
  },
  {
    name: "Recruitment Team",
    title: "Migration Gatekeepers",
    role: "Candidate review, interviews, fit checks",
    intro: "Looks beyond power numbers and checks whether a player actually fits the culture.",
    strengths: ["Screening", "Communication", "Culture fit"],
    quirks: "Suspicious of anyone who says they are active but has no receipts."
  }
];

function initials(name: string) {
  return name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
}

export default function LeadershipPage() {
  return (
    <div className="shell">
      <PublicNav />
      <section className="page">
        <div className="eyebrow">Leadership</div>
        <h1>Meet the people behind the kingdom.</h1>
        <p className="lead">
          Strong kingdoms are built by visible leaders, reliable officers, and players who trust the plan.
          These profiles will become the public display section for KD1313 leadership.
        </p>
        <div className="leader-grid">
          {leaders.map((leader) => (
            <article className="leader-card" key={leader.name}>
              <div className="leader-avatar">{initials(leader.name)}</div>
              <div>
                <span className="tag">{leader.title}</span>
                <h3>{leader.name}</h3>
                <p className="muted">{leader.role}</p>
                <p>{leader.intro}</p>
                <div className="leader-chips">
                  {leader.strengths.map((strength) => <span key={strength}>{strength}</span>)}
                </div>
                <p className="muted"><strong>Quirk:</strong> {leader.quirks}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
