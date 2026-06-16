import { MemberShell } from "@/components/MemberShell";
import { mgeRows } from "@/lib/data";

export default function MgePage() {
  return (
    <MemberShell>
      <div className="dash-title"><h1>MGE Rank Board</h1><span className="tag">Manual Tracker</span></div>
      <div className="table-card">
        <table>
          <thead><tr><th>Rank</th><th>Governor</th><th>Alliance</th><th>Points</th><th>Status</th></tr></thead>
          <tbody>
            {mgeRows.map((row) => (
              <tr key={row.rank}><td>{row.rank}</td><td>{row.governor}</td><td>{row.alliance}</td><td>{row.points}</td><td>{row.status}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </MemberShell>
  );
}
