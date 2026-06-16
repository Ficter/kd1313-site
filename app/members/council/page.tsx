import { MemberShell } from "@/components/MemberShell";

export default function CouncilPage() {
  return (
    <MemberShell>
      <div className="dash-title"><h1>Officer & Council Space</h1><span className="tag">Reserved</span></div>
      <div className="grid-3">
        <article className="notice"><h3>Role-Gated Later</h3><p className="muted">This area is reserved for R4, R5, council, and admin tools once roles are defined.</p></article>
        <article className="notice"><h3>Admin Tools</h3><p className="muted">Future tools can include notices, MGE updates, roster edits, KVK posts, and Discord sync.</p></article>
        <article className="notice"><h3>Do Not Store Secrets Yet</h3><p className="muted">Keep sensitive plans out until Supabase auth and role protection are live.</p></article>
      </div>
    </MemberShell>
  );
}
