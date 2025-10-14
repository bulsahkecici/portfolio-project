import { getMessages } from "@/lib/i18n/getMessages";
import { defaultLocale, isSupportedLocale } from "@/lib/i18n/config";
import PortfolioGrid from "@/components/sections/PortfolioGrid";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = isSupportedLocale(localeParam) ? localeParam : defaultLocale;
  const messages: any = await getMessages(locale);
  const title: string = messages?.portfolio?.title ?? "Portfolio";
  const projects = (messages?.portfolio?.projects ?? []) as {
    name: string; desc: string; role: string; result: string; image?: string;
  }[];

  return (
    <section className="prose max-w-none">
      <h1>{title}</h1>
      <PortfolioGrid projects={projects} />
    </section>
  );
}
