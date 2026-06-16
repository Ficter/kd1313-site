import { MemberShell } from "@/components/MemberShell";
import { StatsTable } from "@/components/StatsTable";
import { playerStats, statsPeriod } from "@/lib/stats";

const totals = playerStats.reduce(
  (sum, player) => ({
    power: sum.power + player.currentPower,
    dkp: sum.dkp + player.dkp,
    kp: sum.kp + player.kp,
    dead: sum.dead + player.dead
  }),
  { power: 0, dkp: 0, kp: 0, dead: 0 }
);

function compact(value: number) {
  if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(1)}B`;
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
  return String(value);
}

export default function StatsPage() {
  return (
    <MemberShell>
      <div className="dash-title">
        <div>
          <div className="eyebrow">KVK Stats</div>
          <h1>Player performance board.</h1>
        </div>
        <span className="tag">{statsPeriod}</span>
      </div>
      <div className="grid-4">
        <div className="status"><strong>{playerStats.length}</strong><span>Tracked players</span><small>KD1313</small></div>
        <div className="status"><strong>{compact(totals.power)}</strong><span>Total power</span><small>Current</small></div>
        <div className="status"><strong>{compact(totals.dkp)}</strong><span>Total DKP</span><small>Period</small></div>
        <div className="status"><strong>{compact(totals.kp)}</strong><span>Total KP</span><small>T4 + T5</small></div>
      </div>
      <section style={{ padding: "24px 0 0" }}>
        <StatsTable players={playerStats} />
      </section>
    </MemberShell>
  );
}
