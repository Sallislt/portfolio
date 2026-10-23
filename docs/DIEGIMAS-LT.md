# saulius.elitecordiste.fr – portfolio

Statinė daugiakalbė (FR / EN / LT) svetainė. Be duomenų bazės, be PHP, be slapukų.

## Struktūra

- `src/content/fr.mjs`, `en.mjs`, `lt.mjs` – visi tekstai (redaguoti čia)
- `src/content/shared.mjs` – kontaktai, sertifikatai, technologijų žymos, atnaujinimo data
- `src/static/` – CSS, JS, šriftai, nuotraukos, CV PDF, `.htaccess`, `robots.txt`
- `build.mjs` – generuoja `dist/` (3 HTML puslapiai + `sitemap.xml`)
- `tools/images.mjs` – per Chrome sugeneruoja `og.png` (nuotrauka dalijantis nuoroda) ir `apple-touch-icon.png`

## Atnaujinimas

1. Pakeisti tekstą `src/content/*.mjs` (visose 3 kalbose).
2. `shared.mjs` faile pakeisti `updated: 'YYYY-MM-DD'`.
3. Paleisti `node build.mjs`.
4. Įkelti `dist/` turinį į serverį.

Pakeitus antraštę ar nuotrauką, iš naujo sugeneruoti paveikslėlius: `node tools/images.mjs`.

## Diegimas Hostinger

1. hPanel → Svetainės → saulius.elitecordiste.fr → **Failų tvarkyklė** → `public_html`.
2. Atsisiųsti seną turinį kaip atsarginę kopiją, tada jį ištrinti.
3. Įkelti **visą `dist/` aplanko turinį** (ne patį aplanką): `index.html`, `en/`, `lt/`, `assets/`,
   `.htaccess`, `404.html`, `favicon.svg`, `robots.txt`, `sitemap.xml`.
   Failas `.htaccess` paslėptas – įsitikinti, kad jis įkeltas.
4. Patikrinti: https://saulius.elitecordiste.fr, `/en/`, `/lt/`.
5. Saugumo antraštės: https://securityheaders.com (tikslas – A arba A+).

## Po paleidimo (SEO)

- Google Search Console: pridėti svetainę, pateikti `https://saulius.elitecordiste.fr/sitemap.xml`.
- Bing Webmaster Tools: importuoti iš Search Console.
- LinkedIn: nuorodą įdėti į profilio „Contact info“ ir „Featured“.
- Patikrinti dalijimosi peržiūrą: https://www.linkedin.com/post-inspector/
