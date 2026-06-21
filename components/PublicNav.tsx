import Image from "next/image";
import Link from "next/link";

export function PublicNav() {
  return (
    <nav className="nav">
      <Link className="brand" href="/">
        <Image className="brand-mark" src="/assets/images/kd1313-logo-nav.png" alt="KD1313 crest" width={46} height={46} />
        <span>
          <strong>KD1313</strong>
          <span>Kingdom of Driftwood</span>
        </span>
      </Link>
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/rules">Rules</Link>
        <Link href="/migration">Migration</Link>
        <Link href="/leadership">Leadership</Link>
        <Link href="/login">Members</Link>
      </div>
      <Link className="btn" href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL || "https://discord.gg/"}>
        Discord Recruitment
      </Link>
    </nav>
  );
}
