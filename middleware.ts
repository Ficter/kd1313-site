import { NextRequest, NextResponse } from "next/server";
import { getMemberSessionSecret, memberCookieName } from "@/lib/auth";

export function middleware(request: NextRequest) {
  const secret = getMemberSessionSecret();

  if (!secret || request.cookies.get(memberCookieName)?.value !== secret) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/members/:path*"]
};
