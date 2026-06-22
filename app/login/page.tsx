import Link from "next/link";
import { PublicNav } from "@/components/PublicNav";
import { memberAuthIsConfigured } from "@/lib/auth";
import { loginMember } from "./actions";

const errorMessages: Record<string, string> = {
  invalid: "Those login details are not correct.",
  setup: "Member login is ready, but the private credentials have not been added in Vercel yet."
};

export default function LoginPage({
  searchParams
}: {
  searchParams?: { error?: string; next?: string };
}) {
  const isConfigured = memberAuthIsConfigured();
  const error = searchParams?.error ? errorMessages[searchParams.error] : "";
  const nextPath = searchParams?.next || "/members";

  return (
    <div className="shell">
      <PublicNav />
      <div className="login-wrap">
        <div className="command-card login-card">
          <div className="eyebrow">Members Login</div>
          <h2>Enter the member hall.</h2>
          <p className="muted">
            Use your kingdom member account to open notices, tools, MGE boards, KVK prep,
            roster pages, and council placeholders.
          </p>
          {error ? <p className="login-alert">{error}</p> : null}
          <form action={loginMember}>
            <input name="next" type="hidden" value={nextPath} />
            <div className="field">
              <label htmlFor="username">Username</label>
              <input id="username" name="username" placeholder="member username" autoComplete="username" disabled={!isConfigured} />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" placeholder="password" type="password" autoComplete="current-password" disabled={!isConfigured} />
            </div>
            <div className="actions">
              <button className="btn" type="submit" disabled={!isConfigured}>Enter Member Hall</button>
              <Link className="btn secondary" href="/">Back To Public Site</Link>
            </div>
          </form>
          {!isConfigured ? (
            <p className="muted" style={{ marginTop: 18 }}>
              Add Supabase keys in Vercel to activate member accounts, or keep the temporary shared login variables as a fallback.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
