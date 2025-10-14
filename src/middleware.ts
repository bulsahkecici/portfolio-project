import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, isSupportedLocale } from "@/lib/i18n/config";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname === "/favicon.ico" || pathname === "/robots.txt" || pathname === "/sitemap.xml") {
    return;
  }
  const seg = pathname.split("/")[1];
  if (isSupportedLocale(seg)) return;

  const cookieLocale = req.cookies.get("locale")?.value;
  if (cookieLocale && isSupportedLocale(cookieLocale)) {
    return NextResponse.redirect(new URL(`/${cookieLocale}${pathname}`, req.url));
  }

  const header = req.headers.get("accept-language")?.toLowerCase() || "";
  const preferred = locales.find(l => header.includes(l)) ?? defaultLocale;
  return NextResponse.redirect(new URL(`/${preferred}${pathname}`, req.url));
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|robots.txt|sitemap.xml).*)"]
};

