export const memberCookieName = "kd1313_member_session";

export function getMemberSessionSecret() {
  return process.env.KD1313_MEMBER_SESSION_SECRET || process.env.KD1313_MEMBER_PASSWORD || "";
}

export function memberAuthIsConfigured() {
  return Boolean(process.env.KD1313_MEMBER_USERNAME && process.env.KD1313_MEMBER_PASSWORD && getMemberSessionSecret());
}
