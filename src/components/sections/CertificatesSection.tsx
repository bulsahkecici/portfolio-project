"use client";
import { useTranslations } from "next-intl";
import { GraduationCap, Award, Calendar } from "lucide-react";

type Certificate = {
  title: string;
  institution: string;
  year: string;
  type: string;
  description?: string;
  link?: string;
};

export default function CertificatesSection() {
  const t = useTranslations("certificates");
  const items = t.raw("items") as Certificate[];

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          {t("title")}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
            
            {items.map((item, index) => (
              <div
                key={index}
                className={`relative mb-8 ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                }`}
              >
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full transform -translate-x-1/2 border-4 border-white dark:border-gray-800"></div>
                
                <div className={`ml-16 md:ml-0 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 ${
                  item.link ? 'cursor-pointer hover:border-blue-300 dark:hover:border-blue-600' : ''
                }`}
                onClick={() => {
                  if (item.link) {
                    window.open(item.link, '_blank', 'noopener,noreferrer');
                  }
                }}>
                  <div className="flex items-start gap-3 mb-3">
                    {item.type === "Bachelor's Degree" || item.type === "Lisans Derecesi" || item.type === "Bachelor-Abschluss" ? (
                      <GraduationCap className="text-blue-600 flex-shrink-0" size={24} />
                    ) : (
                      <Award className="text-purple-600 flex-shrink-0" size={24} />
                    )}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        {item.institution}
                      </p>
                      {item.description && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={16} />
                    <span>{item.year}</span>
                    <span className="mx-2">•</span>
                    <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
                      {item.type}
                    </span>
                    {item.link && (
                      <>
                        <span className="mx-2">•</span>
                        <span className="text-blue-600 dark:text-blue-400 hover:underline">
                          {t("viewCertificate")}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

