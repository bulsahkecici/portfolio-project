"use client";
import { useTranslations } from "next-intl";
import { Heart } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>© {currentYear} Bulşah Keçici.</span>
            <span>{t("rights")}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>{t("made")}</span>
            <Heart className="text-red-500" size={16} fill="currentColor" />
          </div>
        </div>
      </div>
    </footer>
  );
}
