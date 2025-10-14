import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, isSupportedLocale } from '@/lib/i18n/config';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  
  if (!locale || !isSupportedLocale(locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default
  };
});

