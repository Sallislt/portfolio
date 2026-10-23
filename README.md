# Portfolio — saulius.elitecordiste.fr

🇫🇷 Code source de mon site portfolio : site statique multilingue (FR / EN / LT) généré par un petit
script Node.js, sans framework, sans cookies ni traceurs, avec une configuration de sécurité HTTP stricte.

🇬🇧 *Source of my portfolio website: a static multilingual site (FR / EN / LT) built by a small Node.js script, with no framework, no cookies or trackers, and strict HTTP security headers.*

**En ligne : https://saulius.elitecordiste.fr**

## Points techniques

- **Génération statique** : un seul gabarit (`build.mjs`) et un fichier de contenu par langue (`src/content/*.mjs`) → trois pages HTML complètes, lisibles par les moteurs de recherche sans JavaScript.
- **Référencement** : balises `hreflang`, URL canoniques, `sitemap.xml` multilingue, données structurées schema.org (`Person`, `ProfilePage`, certifications), image Open Graph.
- **Sécurité** (`src/static/.htaccess`) :
  - redirection HTTPS et HSTS ;
  - Content-Security-Policy stricte : `default-src 'none'`, aucun script ni style en ligne, aucune ressource externe ;
  - `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `frame-ancestors 'none'` ;
  - polices auto-hébergées : aucune requête vers un tiers (RGPD).
- **Accessibilité** : HTML sémantique, lien d’évitement, navigation au clavier, `prefers-reduced-motion`, contrastes vérifiés en thème clair et sombre.
- **Impression** : feuille de style dédiée qui transforme la page en CV.

## Structure

```
build.mjs              générateur : contenu + gabarit → dist/
src/content/           textes FR / EN / LT, certifications, coordonnées
src/static/            CSS, JS, polices, images, .htaccess, robots.txt
tools/images.mjs       image Open Graph et icône générées avec Chrome headless
docs/DIEGIMAS-LT.md    procédure de mise en ligne (lituanien)
```

## Utilisation

```bash
node build.mjs               # génère dist/
node tools/images.mjs        # régénère og.png et apple-touch-icon.png
python -m http.server 8020 --directory dist
```

Mise en ligne : copie du contenu de `dist/` dans `public_html` (hébergement mutualisé Apache).

---

Développé avec l’aide d’un assistant IA. · Code sous licence MIT ; textes, photo et CV © Saulius Stankevicius.
