export const memberCookieName = "kd1313_member_session";

export function getMemberSessionSecret() {
  return process.env.KD1313_MEMBER_SESSION_SECRET || process.env.KD1313_MEMBER_PASSWORD || "";
}

export function sharedMemberAuthIsConfigured() {
  return Boolean(process.env.KD1313_MEMBER_USERNAME && process.env.KD1313_MEMBER_PASSWORD && getMemberSessionSecret());
}

export function supabaseAuthIsConfigured() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

export function memberAuthIsConfigured() {
  return supabaseAuthIsConfigured() || sharedMemberAuthIsConfigured();
}
