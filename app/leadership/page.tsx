import Image from "next/image";
import { Footer } from "@/components/Footer";
import { PublicNav } from "@/components/PublicNav";

const leaders = [
  {
    name: "Dis",
    color: "Blue",
    title: "Events & Diplomacy",
    image: "/assets/images/leaders/dis.jpg",
    intro: "The calm connector of the council. Dis keeps event rhythm and diplomatic lines moving so the kingdom stays coordinated instead of reactive.",
    strengths: ["Event timing", "Diplomacy", "Steady coordination"],
    quirk: "Blue-coded, composed, and somehow always aware of three conversations at once."
  },
  {
    name: "Arya",
    color: "Gold",
    title: "Territory & Diplomacy",
    image: "/assets/images/leaders/arya.jpg",
    intro: "The territorial mind with a diplomat's patience. Arya focuses on placement, map control, and the quiet conversations that prevent loud problems.",
    strengths: ["Territory planning", "Diplomacy", "Map awareness"],
    quirk: "Sees a border dispute and immediately starts arranging the chessboard."
  },
  {
    name: "Gyomei",
    color: "Green",
    title: "Infantry Warlord & Events",
    image: "/assets/images/leaders/gyomei.jpg",
    intro: "A frontline presence with event discipline. Gyomei brings infantry pressure, activity, and the kind of dependable energy that keeps members showing up.",
    strengths: ["Infantry leadership", "Event activity", "Battlefield pressure"],
    quirk: "Looks peaceful until the march queues open."
  },
  {
    name: "Dragon",
    color: "Red",
    title: "Archer Warlord & Welfare",
    image: "/assets/images/leaders/dragon.jpg",
    intro: "The red-banner war engine with a welfare streak. Dragon brings archer firepower while keeping an eye on whether the kingdom can sustain the fight.",
    strengths: ["Archer warfare", "Member welfare", "War commitment"],
    quirk: "Equal chance of discussing kill points or checking if people have enough support."
  }
];

export default function LeadershipPage() {
  return (
    <div className="shell">
      <PublicNav />
      <section className="page">
        <div className="eyebrow">Leadership</div>
        <h1>Meet the leadership core.</h1>
        <p className="lead">
          KD1313 is shaped by leaders with different colors, roles, and instincts. This is the public showcase for the people members and migrants will recognize.
        </p>
        <div className="leader-grid">
          {leaders.map((leader) => (
            <article className={`leader-card leader-${leader.color.toLowerCase()}`} key={leader.name}>
              <div className="leader-photo">
                <Image src={leader.image} alt={`${leader.name} governor profile`} width={1200} height={675} />
              </div>
              <div className="leader-body">
                <span className="tag">{leader.color} Command</span>
                <h3>{leader.name}</h3>
                <p className="leader-role">{leader.title}</p>
                <p>{leader.intro}</p>
                <div className="leader-chips">
                  {leader.strengths.map((strength) => <span key={strength}>{strength}</span>)}
                </div>
                <p className="muted"><strong>Quirk:</strong> {leader.quirk}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
