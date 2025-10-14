import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "@/lib/i18n/getMessages";
import { defaultLocale, isSupportedLocale } from "@/lib/i18n/config";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return [{locale:"en"},{locale:"tr"},{locale:"de"}];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = isSupportedLocale(localeParam) ? localeParam : defaultLocale;
  return {
    title: locale === "tr" ? "Bulşah Keçici | Kişisel Web Sitesi" :
           locale === "de" ? "Bulşah Keçici | Persönliche Website" :
                             "Bulşah Keçici | Personal Website",
    description: "Portfolio, resume and contact."
  };
}

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = isSupportedLocale(localeParam) ? localeParam : defaultLocale;
  const messages = await getMessages(locale);
  return (
    <html lang={locale}>
      <body className="min-h-dvh antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

