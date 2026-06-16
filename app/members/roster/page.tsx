import { MemberShell } from "@/components/MemberShell";
import { rosterRows } from "@/lib/data";

export default function RosterPage() {
  return (
    <MemberShell>
      <div className="dash-title"><h1>Player Roster</h1><span className="tag">Draft Data</span></div>
      <div className="table-card">
        <table>
          <thead><tr><th>Governor</th><th>Alliance</th><th>Role</th><th>Timezone</th><th>Status</th></tr></thead>
          <tbody>
            {rosterRows.map((row) => <tr key={row.governor}><td>{row.governor}</td><td>{row.alliance}</td><td>{row.role}</td><td>{row.timezone}</td><td>{row.status}</td></tr>)}
          </tbody>
        </table>
      </div>
    </MemberShell>
  );
}
