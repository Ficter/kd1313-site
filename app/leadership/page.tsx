import { Footer } from "@/components/Footer";
import { PublicNav } from "@/components/PublicNav";

const principles = [
  ["Order", "Clear rules, organized planning, and consistent expectations."],
  ["Loyalty", "Kingdom-first decisions over personal score chasing."],
  ["Victory", "Preparation, activity, and disciplined execution in KVK."],
  ["Accountability", "Leaders and members are expected to contribute, communicate, and improve."]
];

export default function LeadershipPage() {
  return (
    <div className="shell">
      <PublicNav />
      <section className="page">
        <div className="eyebrow">Leadership</div>
        <h1>Kingdoms follow leaders.</h1>
        <p className="lead">
          KD1313 leadership is built around order, loyalty, and victory. The goal is a kingdom where
          active players know the plan, understand the standards, and trust that contribution matters.
        </p>
        <div className="grid-4" style={{ marginTop: 28 }}>
          {principles.map(([title, text]) => (
            <article className="panel" key={title}>
              <span className="tag">{title}</span>
              <p className="muted">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
