"use client";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>© {currentYear} Bulşah Keçici.</span>
            <span>{t("rights")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
