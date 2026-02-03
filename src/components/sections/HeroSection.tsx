"use client";
import { useTranslations } from "next-intl";
import { ArrowDown, Mail, FileDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("hero");

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left space-y-6 animate-fade-in-up">
            <p className="text-lg text-gray-600 dark:text-gray-400">{t("greeting")}</p>
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {t("name")}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              {t("title")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              {t("subtitle")}
            </p>
            
            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Mail size={20} />
                {t("cta_contact")}
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all flex items-center gap-2"
              >
                <FileDown size={20} />
                {t("cta_projects")}
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center animate-fade-in">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
                <Image
                  src="/images/photo1.jpg"
                  alt="Bulşah Keçici"
                  fill
                  className="object-cover rounded-full"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to next section"
      >
        <ArrowDown size={32} className="text-gray-400" />
      </button>
    </section>
  );
}

