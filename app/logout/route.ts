import { NextResponse } from "next/server";
import { memberCookieName, supabaseAuthIsConfigured } from "@/lib/auth";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  if (supabaseAuthIsConfigured()) {
    const supabase = createSupabaseServerClient();
    await supabase?.auth.signOut();
  }

  const response = NextResponse.redirect(new URL("/login", request.url));
  response.cookies.delete(memberCookieName);
  return response;
}
