"use client";
import { useTranslations } from "next-intl";

export default function Page(){
  const t = useTranslations("resume");
  return (
    <section className="prose max-w-none">
      <h1>{t("title")}</h1>
      <a className="inline-block rounded border px-4 py-2" href="/resume.pdf" download>
        {t("download_pdf")}
      </a>
    </section>
  );
}
