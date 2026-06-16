import Link from "next/link";

export function PublicNav() {
  return (
    <nav className="nav">
      <Link className="brand" href="/">
        <span className="brand-mark">1313</span>
        <span>
          <strong>KD1313</strong>
          <span>Kingdom of Driftwood</span>
        </span>
      </Link>
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/alliances">Alliances</Link>
        <Link href="/rules">Rules</Link>
        <Link href="/events">Events</Link>
        <Link href="/login">Members</Link>
      </div>
      <Link className="btn" href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL || "https://discord.gg/"}>
        Discord Recruitment
      </Link>
    </nav>
  );
}
