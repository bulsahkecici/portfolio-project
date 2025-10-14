module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true,
  exclude: ['/api/*'],
  alternateRefs: [
    { href: 'https://example.com/en', hreflang: 'en' },
    { href: 'https://example.com/tr', hreflang: 'tr' },
    { href: 'https://example.com/de', hreflang: 'de' },
  ],
};

