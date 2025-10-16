"use client";
import { useTranslations } from "next-intl";
import { MapPin, Briefcase, CheckCircle } from "lucide-react";

export default function AboutSection() {
  const t = useTranslations("about");
  const highlights = t.raw("highlights.items") as string[];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          {t("title")}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t("bio")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <MapPin className="text-blue-600" size={24} />
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">{t("location")}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Briefcase className="text-purple-600" size={24} />
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">{t("availability")}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              {t("highlights.title")}
            </h3>
            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

