"use client";
import { useTranslations } from "next-intl";
import { ArrowDown, Mail, FileDown } from "lucide-react";
import HeroOrbit from "./HeroOrbit";

export default function HeroSection() {
  const t = useTranslations("hero");

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <HeroOrbit />
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce"
          aria-label="Scroll to next section"
        >
          <ArrowDown size={32} className="text-white drop-shadow-lg" />
        </button>
      </div>
    </section>
  );
}

