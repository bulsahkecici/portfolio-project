"use client";
import Link from "next/link";
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
        <Link href={`${base}`} className="font-semibold">BK</Link>
        <nav className="flex items-center gap-4">
          <Link href={`${base}`}>{t("home")}</Link>
          <Link href={`${base}/about`}>{t("about")}</Link>
          <Link href={`${base}/portfolio`}>{t("portfolio")}</Link>
          <Link href={`${base}/contact`}>{t("contact")}</Link>
          <Link href={`${base}/resume`}>{t("resume")}</Link>
          <LanguageSwitch />
        </nav>
      </div>
    </header>
  );
}

