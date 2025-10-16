import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "@/lib/i18n/getMessages";
import { defaultLocale, isSupportedLocale } from "@/lib/i18n/config";
import "@/styles/globals.css";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "tr" }, { locale: "de" }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isSupportedLocale(localeParam) ? localeParam : defaultLocale;
  
  const titles = {
    en: "Bulşah Keçici | Data Scientist & Engineer",
    tr: "Bulşah Keçici | Veri Bilimci & Mühendis",
    de: "Bulşah Keçici | Data Scientist & Ingenieur"
  };

  const descriptions = {
    en: "Data Scientist and Computer Engineer specializing in AI-driven analytics, intelligent automation, and modern web systems.",
    tr: "Yapay zeka destekli analizler, akıllı otomasyon ve modern web sistemleri konusunda uzmanlaşmış Veri Bilimci ve Bilgisayar Mühendisi.",
    de: "Data Scientist und Informatikingenieur, spezialisiert auf KI-gestützte Analysen, intelligente Automatisierung und moderne Websysteme."
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    alternates: {
      languages: {
        en: "/en",
        tr: "/tr",
        de: "/de",
      },
    },
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: "website",
      locale: locale,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = isSupportedLocale(localeParam) ? localeParam : defaultLocale;
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className="min-h-dvh antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
