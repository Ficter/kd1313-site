import { MemberShell } from "@/components/MemberShell";

const tools = [
  ["Countdown Timers", "Track KVK passes, Ark, MGE reset, and kingdom events."],
  ["UTC Converter", "Convert server time to SGT and member local time."],
  ["KVK Checklist", "Prepare every account before war objectives open."],
  ["Roster Filters", "Find players by alliance, role, timezone, and status."],
  ["Discord Bot Hooks", "Future: reminders, announcements, and war attendance."],
  ["Achievement Wall", "Showcase top KP, deads, support work, and clutch plays."]
];

export default function ToolsPage() {
  return (
    <MemberShell>
      <div className="dash-title"><h1>Member Lounge & Tools</h1><span className="tag">Roadmap</span></div>
      <div className="grid-3">
        {tools.map(([title, text]) => <article className="tool-card" key={title}><h3>{title}</h3><p className="muted">{text}</p></article>)}
      </div>
    </MemberShell>
  );
}
