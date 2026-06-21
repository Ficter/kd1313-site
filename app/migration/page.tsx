import Link from "next/link";
import { Footer } from "@/components/Footer";
import { PublicNav } from "@/components/PublicNav";

const migrationDiscordUrl = "https://discord.gg/nyAUTP9mJZ";

const requirements = [
  ["Contribution", "Migration candidates should be ready to contribute in KVK, events, and kingdom objectives."],
  ["Teamwork", "KD1313 values players who follow kingdom direction and strengthen the group."],
  ["Activity", "Reliable activity matters more than inflated numbers or short-term ambition."],
  ["Discord", "Applications and interviews happen through the recruitment Discord."]
];

export default function MigrationPage() {
  return (
    <div className="shell">
      <PublicNav />
      <section className="page">
        <div className="eyebrow">Migration</div>
        <h1>Apply through Discord.</h1>
        <p className="lead">
          KD1313 reviews migration candidates through the recruitment server. Bring your account details,
          KVK history, goals, and attitude. The kingdom is built around contribution and discipline.
        </p>
        <div className="actions">
          <Link className="btn" href={migrationDiscordUrl}>
            Open Recruitment Discord
          </Link>
          <Link className="btn secondary" href="/rules">Read Rules</Link>
        </div>
        <div className="grid-4" style={{ marginTop: 28 }}>
          {requirements.map(([title, text]) => (
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
