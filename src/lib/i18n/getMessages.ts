export async function getMessages(locale: string) {
  const msgs = await import(`@/locales/${locale}.json`).then(m => m.default);
  return msgs;
}

