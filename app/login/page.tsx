import Link from "next/link";
import { PublicNav } from "@/components/PublicNav";

export default function LoginPage() {
  return (
    <div className="shell">
      <PublicNav />
      <div className="login-wrap">
        <div className="command-card login-card">
          <div className="eyebrow">Members Login</div>
          <h2>Kingdom access is being prepared.</h2>
          <p className="muted">
            The production login will use Supabase username/password accounts, with Discord login and role mapping planned later.
            For now, the member pages contain placeholder content only.
          </p>
          <div className="field">
            <label>Username</label>
            <input placeholder="governor name or email" disabled />
          </div>
          <div className="field">
            <label>Password</label>
            <input placeholder="password" type="password" disabled />
          </div>
          <div className="actions">
            <Link className="btn" href="/members">Preview Members Area</Link>
            <Link className="btn secondary" href="/">Back To Public Site</Link>
          </div>
          <p className="muted" style={{ marginTop: 18 }}>
            Do not publish sensitive KVK plans here until Supabase auth is connected.
          </p>
        </div>
      </div>
    </div>
  );
}
