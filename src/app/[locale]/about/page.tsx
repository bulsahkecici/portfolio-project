"use client";
import { useTranslations } from "next-intl";
import SocialLinks from "@/components/common/SocialLinks";

export default function Page(){
  const t = useTranslations("about");
  return (
    <section className="prose max-w-none">
      <h1>{t("title")}</h1>
      <p>{t("bio")}</p>
      <SocialLinks />
    </section>
  );
}
