import { MemberShell } from "@/components/MemberShell";

const checklist = ["Teleport ready", "Hospitals clear", "Resources stocked", "Healing speedups checked", "March presets saved", "Discord notifications on"];

export default function KvkPage() {
  return (
    <MemberShell>
      <div className="dash-title"><h1>KVK War Room</h1><span className="tag">Placeholder</span></div>
      <div className="grid-3">
        {checklist.map((item) => <article className="tool-card" key={item}><h3>{item}</h3><p className="muted">Mark this as complete once interactive tools are connected.</p></article>)}
      </div>
    </MemberShell>
  );
}
