"use client";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

export default function Page() {
  const t = useTranslations("home");
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">{t("title")}</h1>
      <p className="text-lg opacity-80">{t("subtitle")}</p>
      <a href="#portfolio" className="inline-flex items-center gap-2 rounded-md border px-4 py-2">
        {t("cta_view_work")} <ArrowRight size={18}/>
      </a>
    </section>
  );
}

