"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  getMemberSessionSecret,
  memberAuthIsConfigured,
  memberCookieName,
  sharedMemberAuthIsConfigured,
  supabaseAuthIsConfigured
} from "@/lib/auth";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function loginMember(formData: FormData) {
  const username = String(formData.get("username") || "").trim();
  const password = String(formData.get("password") || "");
  const nextPath = String(formData.get("next") || "/members");

  if (!memberAuthIsConfigured()) {
    redirect("/login?error=setup");
  }

  if (supabaseAuthIsConfigured()) {
    const supabase = createSupabaseServerClient();
    const { error } = await supabase!.auth.signInWithPassword({
      email: username,
      password
    });

    if (error) {
      redirect("/login?error=invalid");
    }

    redirect(nextPath.startsWith("/members") ? nextPath : "/members");
  }

  if (!sharedMemberAuthIsConfigured() || username !== process.env.KD1313_MEMBER_USERNAME || password !== process.env.KD1313_MEMBER_PASSWORD) {
    redirect("/login?error=invalid");
  }

  cookies().set(memberCookieName, getMemberSessionSecret(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 14
  });

  redirect(nextPath.startsWith("/members") ? nextPath : "/members");
}
