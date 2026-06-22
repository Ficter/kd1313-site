"use client";

import { useEffect, useMemo, useState } from "react";

const checklist = [
  "Hospitals cleared",
  "Speedups reviewed",
  "Troop presets ready",
  "Rally and garrison gear checked",
  "Discord notifications enabled",
  "Resources moved or protected",
  "Teleport and shield stock checked",
  "March queues free before objective"
];

function formatTime(date: Date, timeZone?: string) {
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone,
    timeZoneName: "short"
  }).format(date);
}

function formatCountdown(ms: number) {
  if (ms <= 0) return "Event time reached";
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

export function MemberTools() {
  const [now, setNow] = useState<Date | null>(null);
  const [target, setTarget] = useState("");
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const saved = window.localStorage.getItem("kd1313-kvk-checklist");
    if (saved) setChecked(JSON.parse(saved));
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) window.localStorage.setItem("kd1313-kvk-checklist", JSON.stringify(checked));
  }, [checked, loaded]);

  const countdown = useMemo(() => {
    if (!now || !target) return "Choose an event time";
    return formatCountdown(new Date(target).getTime() - now.getTime());
  }, [now, target]);

  const complete = checklist.filter((item) => checked[item]).length;

  return (
    <div className="member-tools">
      <section className="tool-panel">
        <div>
          <span className="tag">Time Board</span>
          <h2>Server rhythm, local time, and SGT.</h2>
          <p className="muted">Use this when planning reset pushes, Ark timing, council calls, or cross-timezone reminders.</p>
        </div>
        <div className="time-grid">
          <div><b>UTC</b><span>{now ? formatTime(now, "UTC") : "Loading"}</span></div>
          <div><b>Singapore</b><span>{now ? formatTime(now, "Asia/Singapore") : "Loading"}</span></div>
          <div><b>Your Device</b><span>{now ? formatTime(now) : "Loading"}</span></div>
        </div>
      </section>

      <section className="tool-panel">
        <div>
          <span className="tag">Countdown</span>
          <h2>Event countdown.</h2>
          <p className="muted">Pick the next pass opening, Ark match, MGE reset, or kingdom call.</p>
        </div>
        <div className="countdown-box">
          <label htmlFor="event-time">Event time</label>
          <input id="event-time" type="datetime-local" value={target} onChange={(event) => setTarget(event.target.value)} />
          <strong>{countdown}</strong>
        </div>
      </section>

      <section className="tool-panel wide">
        <div className="tool-head">
          <div>
            <span className="tag">KVK Checklist</span>
            <h2>Personal readiness.</h2>
          </div>
          <span className="pill">{complete}/{checklist.length} ready</span>
        </div>
        <div className="checklist">
          {checklist.map((item) => (
            <label key={item}>
              <input
                type="checkbox"
                checked={Boolean(checked[item])}
                onChange={(event) => setChecked((current) => ({ ...current, [item]: event.target.checked }))}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </section>
    </div>
  );
}
