export const locales = ["en","tr","de"] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = "en";

export function isSupportedLocale(l: string): l is Locale {
  return (locales as readonly string[]).includes(l);
}
