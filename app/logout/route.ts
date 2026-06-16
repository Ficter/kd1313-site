import { NextResponse } from "next/server";
import { memberCookieName } from "@/lib/auth";

export function GET(request: Request) {
  const response = NextResponse.redirect(new URL("/login", request.url));
  response.cookies.delete(memberCookieName);
  return response;
}
