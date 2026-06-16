import { Footer } from "@/components/Footer";
import { PublicNav } from "@/components/PublicNav";

const rules = [
  ["No rogue hits", "Unauthorized city hits, tile hits, and revenge drama weaken the kingdom."],
  ["Follow event calls", "MGE, KVK, Ark, passes, rallies, and ruins follow posted leadership instructions."],
  ["Respect alliance channels", "Problems go through officers first. Public drama is the slowest way to solve anything."],
  ["KVK participation matters", "Fighting, reinforcing, building, farming, scouting, and support work all count when coordinated."],
  ["Discord is the command layer", "Live instructions, migration applications, war rooms, and notices belong in Discord."],
  ["Kingdom first", "Alliance pride is welcome. Kingdom sabotage is not."]
];

export default function RulesPage() {
  return (
    <div className="shell">
      <PublicNav />
      <section className="page">
        <div className="eyebrow">Rules</div>
        <h1>Simple standards, fewer excuses.</h1>
        <p className="lead">Public rules help visitors understand the culture. Detailed council rules can live in the members area.</p>
        <div className="grid-3">
          {rules.map(([title, text]) => (
            <article className="panel" key={title}>
              <h3>{title}</h3>
              <p className="muted">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
