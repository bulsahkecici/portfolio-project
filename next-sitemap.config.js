const siteUrl = process.env.SITE_URL || 'https://bulsahkecici.com';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ['/api/*'],
  alternateRefs: [
    { href: `${siteUrl}/en`, hreflang: 'en' },
    { href: `${siteUrl}/tr`, hreflang: 'tr' },
    { href: `${siteUrl}/de`, hreflang: 'de' },
  ],
};
