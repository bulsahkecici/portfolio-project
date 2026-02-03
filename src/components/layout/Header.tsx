"use client";
import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import LanguageSwitch from "@/components/common/LanguageSwitch";
import { useTranslations } from "next-intl";

export default function Header(){
  const pathname = usePathname();
  const [_, locale = "en"] = (pathname || "/en").split("/");

  const t = useTranslations("nav");
  const base = `/${locale}`;

  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href={`${base}` as Route} className="font-semibold">BK</Link>
        <nav className="flex items-center gap-4">
          <Link href={`${base}` as Route}>{t("home")}</Link>
          <Link href={`${base}/about` as Route}>{t("about")}</Link>
          <Link href={`${base}/portfolio` as Route}>{t("portfolio")}</Link>
          <Link href={`${base}/contact` as Route}>{t("contact")}</Link>
          <Link href={`${base}/resume` as Route}>{t("resume")}</Link>
          <LanguageSwitch />
        </nav>
      </div>
    </header>
  );
}

