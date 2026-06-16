import { Footer } from "@/components/Footer";
import { PublicNav } from "@/components/PublicNav";

const events = [
  ["KVK Prep", "Troops, heals, teleports, resources, presets, and alliance roles."],
  ["MGE Week", "Rank board and rules will be visible inside the members area."],
  ["Ark Signups", "Alliance officers coordinate rosters and backup players."],
  ["Migration Review", "Applications continue in the Discord recruitment server."]
];

export default function EventsPage() {
  return (
    <div className="shell">
      <PublicNav />
      <section className="page">
        <div className="eyebrow">Events</div>
        <h1>Public event board. Private details stay private.</h1>
        <p className="lead">Visitors can see the kingdom is active. Members will get the detailed calendar, countdowns, and checklists after login.</p>
        <div className="grid-4">
          {events.map(([title, text]) => (
            <article className="panel" key={title}>
              <span className="tag">Upcoming</span>
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
