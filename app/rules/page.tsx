import { Footer } from "@/components/Footer";
import { PublicNav } from "@/components/PublicNav";

const rules = [
  {
    title: "Kingdom calls come first",
    text: "During KVK, pass fights, ruins, altars, king skills, and kingdom-wide operations, leadership calls override personal plans."
  },
  {
    title: "No rogue hits",
    text: "Unauthorized city hits, tile hits, random revenge, and cross-alliance drama are not tolerated. Handle issues through officers."
  },
  {
    title: "MGE discipline is mandatory",
    text: "MGE rules, fixed rankings, point limits, and approved pushes must be followed. Breaking MGE structure damages trust."
  },
  {
    title: "KE rules must be respected",
    text: "Kill Event instructions may change depending on kingdom status. Follow posted targets, safe zones, and no-hit lists."
  },
  {
    title: "KVK participation matters",
    text: "Fighting, reinforcing, building flags, filling rallies, scouting, farming for war, and following timers all count when coordinated."
  },
  {
    title: "Discord is required",
    text: "Discord is the command layer for announcements, war rooms, migration review, and urgent instructions. Members are expected to be reachable."
  },
  {
    title: "Titles and buffs are shared resources",
    text: "Kingdom titles, runes, buffs, and kingdom skills must be requested and used responsibly. Do not waste limited kingdom resources."
  },
  {
    title: "Migration is culture fit, not just power",
    text: "Strong stats help, but attitude, history, activity, and willingness to follow kingdom direction matter more."
  },
  {
    title: "Respect leadership decisions",
    text: "Debate can happen privately and constructively. Public undermining, panic, or sabotage during operations weakens everyone."
  },
  {
    title: "Kingdom first",
    text: "Alliance pride is welcome. Individual ambition is welcome. Neither comes before the long-term success of KD1313."
  }
];

export default function RulesPage() {
  return (
    <div className="shell">
      <PublicNav />
      <section className="page">
        <div className="eyebrow">Rules</div>
        <h1>Kingdom standards.</h1>
        <p className="lead">
          KD1313 rules are built around the same ideas serious kingdoms rely on: discipline, clear command,
          controlled events, KVK contribution, and kingdom-first behavior.
        </p>
        <div className="rules-list">
          {rules.map((rule, index) => (
            <article className="rule-row" key={rule.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{rule.title}</h3>
                <p className="muted">{rule.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
