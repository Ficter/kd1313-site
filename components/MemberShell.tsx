import Image from "next/image";
import Link from "next/link";

const links = [
  ["Command", "/members"],
  ["Newsletter", "/members/newsletter"],
  ["MGE Board", "/members/mge"],
  ["KVK Room", "/members/kvk"],
  ["Tools", "/members/tools"],
  ["Roster", "/members/roster"],
  ["Council", "/members/council"]
];

export function MemberShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="shell">
      <nav className="nav">
        <Link className="brand" href="/">
          <Image className="brand-mark" src="/assets/images/kd1313-logo-nav.png" alt="KD1313 crest" width={46} height={46} />
          <span>
            <strong>KD1313</strong>
            <span>Members Area</span>
          </span>
        </Link>
        <div className="nav-links">
          <Link href="/">Public Site</Link>
          <Link href="/logout">Sign Out</Link>
        </div>
      </nav>
      <div className="dashboard">
        <aside className="side">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </aside>
        <main className="dash-main">{children}</main>
      </div>
    </div>
  );
}
