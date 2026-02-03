import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, isSupportedLocale } from "@/lib/i18n/config";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Statik/özel yolları geç
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  // İlk segment zaten desteklenen bir locale ise devam
  const seg = pathname.split("/")[1];
  if (isSupportedLocale(seg)) return NextResponse.next();

  // Cookie ile yönlendir
  const cookieLocale = req.cookies.get("locale")?.value;
  if (cookieLocale && isSupportedLocale(cookieLocale)) {
    return NextResponse.redirect(new URL(`/${cookieLocale}${pathname}`, req.url));
  }

  // Accept-Language başlığına göre varsayılan yönlendirme
  const header = req.headers.get("accept-language")?.toLowerCase() ?? "";
  const preferred = locales.find(l => header.includes(l)) ?? defaultLocale;
  return NextResponse.redirect(new URL(`/${preferred}${pathname}`, req.url));
}

export const config = {
  matcher: ["/((?!_next|api|images|favicon.ico|robots.txt|sitemap.xml).*)"],
};
