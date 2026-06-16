import { MemberShell } from "@/components/MemberShell";

export default function NewsletterPage() {
  return (
    <MemberShell>
      <div className="dash-title"><h1>Weekly Newsletter</h1><span className="tag">Draft</span></div>
      <div className="grid-3">
        <article className="notice"><h3>This Week In KD1313</h3><p className="muted">Council summary, alliance shoutouts, event reminders, and kingdom mood can live here.</p></article>
        <article className="notice"><h3>Member Spotlight</h3><p className="muted">Showcase top fighters, helpful farmers, rally captains, scouts, and support players.</p></article>
        <article className="notice"><h3>Next Push</h3><p className="muted">Set the week&apos;s focus: KVK prep, MGE discipline, recruitment, or alliance growth.</p></article>
      </div>
    </MemberShell>
  );
}
