import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "@/lib/i18n/getMessages";
import { defaultLocale, isSupportedLocale } from "@/lib/i18n/config";
import Script from "next/script";
import { GA_ID } from "@/lib/ga";
import GAListener from "@/components/analytics/GAListener";
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

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bulsahkecici.com";
  const currentUrl = `${siteUrl}/${locale}`;

  return {
    title: titles[locale as keyof typeof titles] || titles.en,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: currentUrl,
      languages: {
        en: `${siteUrl}/en`,
        tr: `${siteUrl}/tr`,
        de: `${siteUrl}/de`,
      },
    },
    openGraph: {
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
      type: "website",
      locale: locale,
      url: currentUrl,
      siteName: "Bulşah Keçici",
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale as keyof typeof titles] || titles.en,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.en,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
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
  const isProd = process.env.NODE_ENV === "production";

  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-dvh antialiased" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>

        {isProd && GA_ID && (
          <>
            <Script
              id="ga4-src"
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script
              id="ga4-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', { 
                    anonymize_ip: true,
                    page_location: window.location.href,
                    page_title: document.title
                  });
                `,
              }}
            />
            <GAListener />
          </>
        )}
      </body>
    </html>
  );
}
