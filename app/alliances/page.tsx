import { Footer } from "@/components/Footer";
import { PublicNav } from "@/components/PublicNav";
import { alliances } from "@/lib/data";

export default function AlliancesPage() {
  return (
    <div className="shell">
      <PublicNav />
      <section className="page">
        <div className="eyebrow">Alliance Directory</div>
        <h1>Public alliance map.</h1>
        <p className="lead">Alliance names can be public, while sensitive war planning stays inside Discord and the members area.</p>
        <div className="grid-3">
          {alliances.map((alliance) => (
            <article className="panel" key={alliance.tag}>
              <span className="tag">{alliance.role}</span>
              <h3>{alliance.tag} | {alliance.name}</h3>
              <p className="muted">{alliance.focus}</p>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
