# Deployment Checklist - bulsahkecici.com

## Pre-Deployment Checklist

### 1. Environment Variables (Vercel)
Aşağıdaki environment variables'ları Vercel dashboard'unda ayarlayın:

```
NEXT_PUBLIC_SITE_URL=https://bulsahkecici.com
SITE_URL=https://bulsahkecici.com
NEXT_PUBLIC_GA_ID=G-SHL1ETZPVZ
RESEND_API_KEY=re_your_resend_api_key
CONTACT_EMAIL=contact@bulsahkecici.com
NODE_ENV=production
```

### 2. Domain Configuration
- Vercel'de domain'i `bulsahkecici.com` olarak ekleyin
- DNS kayıtlarını domain sağlayıcınızdan Vercel'e yönlendirin
- SSL sertifikası Vercel tarafından otomatik sağlanacak

### 3. Resend Email Configuration
- Resend dashboard'unda `bulsahkecici.com` domain'ini doğrulayın
- `from` adresini `contact@bulsahkecici.com` olarak güncelleyin (src/app/api/contact/route.ts)

### 4. Build & Deploy
```bash
npm run build
```

Build başarılı olmalı ve sitemap otomatik oluşturulmalı.

### 5. Post-Deployment Checks
- [ ] Ana sayfa yükleniyor mu?
- [ ] Tüm diller çalışıyor mu? (en, tr, de)
- [ ] Blog sayfaları açılıyor mu?
- [ ] İletişim formu çalışıyor mu?
- [ ] Google Analytics veri gönderiyor mu?
- [ ] robots.txt erişilebilir mi? (https://bulsahkecici.com/robots.txt)
- [ ] sitemap.xml erişilebilir mi? (https://bulsahkecici.com/sitemap.xml)
- [ ] 404 sayfası çalışıyor mu?
- [ ] Tüm linkler çalışıyor mu?

### 6. Security Checklist
- [x] Security headers eklendi (next.config.mjs)
- [x] XSS koruması eklendi (API route)
- [x] Rate limiting eklendi (API route)
- [x] Input validation (Zod schema)
- [x] HTML escaping (XSS prevention)
- [x] HTTPS zorunlu (Vercel otomatik)

### 7. SEO Checklist
- [x] Metadata yapılandırıldı
- [x] Open Graph tags eklendi
- [x] Twitter Card tags eklendi
- [x] Canonical URLs eklendi
- [x] robots.txt hazır
- [x] sitemap.xml otomatik oluşturulacak
- [x] Hreflang tags eklendi

### 8. Performance
- [x] Image optimization (next/image)
- [x] Compression enabled
- [x] Static generation where possible
- [x] Lazy loading for images

## Notes
- Sitemap otomatik olarak build sırasında oluşturulacak
- Google Analytics sadece production'da çalışacak
- Rate limiting basit in-memory (production için Redis önerilir)
