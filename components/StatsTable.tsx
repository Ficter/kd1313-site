"use client";

import { useMemo, useState } from "react";
import type { PlayerStat } from "@/lib/stats";

type SortKey = keyof Pick<PlayerStat, "currentPower" | "dkp" | "tradeRatio" | "t4Kills" | "t5Kills" | "dead" | "kp" | "healed" | "acclaim">;

const columns: Array<{ key: SortKey; label: string; tone: string }> = [
  { key: "currentPower", label: "Power", tone: "blue" },
  { key: "dkp", label: "DKP", tone: "blue" },
  { key: "tradeRatio", label: "Trade", tone: "gold" },
  { key: "t4Kills", label: "T4", tone: "cyan" },
  { key: "t5Kills", label: "T5", tone: "gold" },
  { key: "dead", label: "Dead", tone: "red" },
  { key: "kp", label: "KP", tone: "pink" },
  { key: "healed", label: "Healed", tone: "green" },
  { key: "acclaim", label: "Acclaim", tone: "orange" }
];

function compact(value: number) {
  if (Math.abs(value) >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(1)}B`;
  if (Math.abs(value) >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (Math.abs(value) >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
  return String(value);
}

function initials(name: string) {
  return name.replace(/[^a-z0-9]/gi, "").slice(0, 2).toUpperCase() || "KD";
}

export function StatsTable({ players }: { players: PlayerStat[] }) {
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("dkp");
  const [direction, setDirection] = useState<"asc" | "desc">("desc");
  const max = useMemo(
    () => Object.fromEntries(columns.map(({ key }) => [key, Math.max(...players.map((player) => player[key]), 1)])) as Record<SortKey, number>,
    [players]
  );

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return players
      .filter((player) => !needle || [player.name, player.govId, player.alliance, player.camp].join(" ").toLowerCase().includes(needle))
      .sort((a, b) => (direction === "desc" ? b[sortKey] - a[sortKey] : a[sortKey] - b[sortKey]));
  }, [players, query, sortKey, direction]);

  function sortBy(key: SortKey) {
    if (key === sortKey) {
      setDirection(direction === "desc" ? "asc" : "desc");
      return;
    }
    setSortKey(key);
    setDirection("desc");
  }

  return (
    <div className="stats-shell">
      <div className="stats-toolbar">
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search governor, ID, alliance, camp" />
        <span>{visible.length} players</span>
      </div>
      <div className="stats-table-wrap">
        <table className="stats-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Player</th>
              {columns.map((column) => (
                <th key={column.key}>
                  <button type="button" onClick={() => sortBy(column.key)}>
                    {column.label} {sortKey === column.key ? (direction === "desc" ? "↓" : "↑") : "↕"}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visible.map((player, index) => (
              <tr key={player.govId}>
                <td>{index + 1}</td>
                <td className="player-cell">
                  <div className="avatar">{initials(player.name)}</div>
                  <div>
                    <small>#{player.govId}</small>
                    <strong>{player.name}</strong>
                    <span><em>{player.alliance}</em><em>{player.camp}</em></span>
                  </div>
                </td>
                {columns.map((column) => {
                  const value = player[column.key];
                  const width = Math.max(4, Math.round((value / max[column.key]) * 100));
                  return (
                    <td key={column.key}>
                      <div className="metric">
                        <b>{column.key === "tradeRatio" ? `${value}:1` : compact(value)}</b>
                        {column.key === "currentPower" ? <small>{compact(player.powerChange)} from {compact(player.startPower)}</small> : null}
                        <span className={`bar ${column.tone}`}><i style={{ width: `${width}%` }} /></span>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
