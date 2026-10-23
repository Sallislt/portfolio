// Statinės svetainės generatorius: src/content/*.mjs + šablonas → dist/
// Paleidimas: node build.mjs

import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { site, languages, certGroups, stacks, repos } from './src/content/shared.mjs';
import fr from './src/content/fr.mjs';
import en from './src/content/en.mjs';
import lt from './src/content/lt.mjs';

const OUT = new URL('./dist/', import.meta.url);
const contents = { fr, en, lt };

// Sertifikatų skaičius skaičiuojamas automatiškai
const certCount = certGroups.reduce((n, g) => n + g.items.length + (g.highlight ? 1 : 0), 0);

// HTML specialiųjų simbolių apsauga
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

// Teksto vietos rezervavimo ženklų pakeitimas
const t = (s) => esc(String(s).replaceAll('{certCount}', certCount));

// Ikonos (24×24, linijinės)
const icons = {
  shield: '<path d="M12 3 4 6v6c0 5 3.4 8.3 8 9 4.6-.7 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8V21h3.2l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.4-.5-.5-2.4 2.5-2.7Z"/>',
  doc: '<path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8l-5-5Z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
  headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1"/><rect x="17" y="14" width="4" height="6" rx="1"/><path d="M19 20a3 3 0 0 1-3 2h-2"/>',
  server: '<rect x="3" y="4" width="18" height="7" rx="1.5"/><rect x="3" y="13" width="18" height="7" rx="1.5"/><path d="M7 7.5h.01M7 16.5h.01M11 7.5h6M11 16.5h6"/>',
  network: '<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M6 16v-2h12v2"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/>',
  code: '<path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 4l-4 16"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14.5a6.5 6.5 0 0 1 3.5 5.5"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  phone: '<path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 12l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 5a2 2 0 0 1 2-2Z"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
  github: '<path d="M9 19c-4 1.3-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6.2 0C6.6 2.8 5.6 3.1 5.6 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.2 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
  pin: '<path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/>',
  download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  check: '<path d="m5 12 5 5 9-10"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
  printer: '<path d="M7 9V3h10v6M7 17H4v-7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v7h-3"/><rect x="7" y="14" width="10" height="7"/>',
  award: '<circle cx="12" cy="9" r="6"/><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7"/>',
};
const icon = (name, cls = 'icon') =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${icons[name]}</svg>`;

const fmtDate = (iso, c) => new Intl.DateTimeFormat(c.dateLocale, { month: 'short', year: 'numeric' }).format(new Date(iso));

const absUrl = (path) => site.url + path;

// Struktūrizuoti duomenys (schema.org) paieškos sistemoms
function jsonLd(c, lang) {
  const person = {
    '@type': 'Person',
    '@id': site.url + '/#person',
    name: site.name,
    givenName: 'Saulius',
    familyName: 'Stankevicius',
    jobTitle: c.meta.jobTitle,
    description: c.meta.description,
    url: absUrl(lang.path),
    image: absUrl(site.photo),
    email: 'mailto:' + site.email,
    telephone: site.phoneHref,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.locality,
      postalCode: site.postalCode,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    sameAs: [site.linkedin, site.github].filter(Boolean),
    knowsLanguage: ['fr', 'en', 'lt'],
    knowsAbout: [
      'IT support', 'Windows Server', 'Active Directory', 'Linux', 'Computer networking', 'VLAN',
      'Cybersecurity', 'SIEM', 'Splunk', 'PowerShell', 'Bash', 'Laravel',
    ],
    alumniOf: c.journey.education.map((e) => ({ '@type': 'EducationalOrganization', name: e.school })),
    hasCredential: certGroups.flatMap((g) => [g.highlight, ...g.items].filter(Boolean)).map((x) => ({
      '@type': 'EducationalOccupationalCredential',
      name: x.name,
      credentialCategory: 'certificate',
      ...(x.url ? { url: x.url } : {}),
    })),
    seeks: {
      '@type': 'Demand',
      name: c.hero.roles.join(' · '),
      areaServed: { '@type': 'AdministrativeArea', name: 'Île-de-France' },
    },
  };
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': absUrl(lang.path) + '#page',
        url: absUrl(lang.path),
        name: c.meta.title,
        inLanguage: c.code,
        dateModified: site.updated,
        mainEntity: { '@id': person['@id'] },
      },
      person,
    ],
  };
}

function render(c) {
  const lang = languages.find((l) => l.code === c.code);
  const canonical = absUrl(lang.path);

  const alternates = languages
    .map((l) => `<link rel="alternate" hreflang="${l.code}" href="${absUrl(l.path)}">`)
    .concat(`<link rel="alternate" hreflang="x-default" href="${absUrl('/')}">`)
    .join('\n  ');

  const langSwitch = languages
    .map((l) =>
      l.code === c.code
        ? `<a href="${l.path}" class="lang-link is-current" aria-current="page" lang="${l.code}" title="${esc(l.name)}">${l.label}</a>`
        : `<a href="${l.path}" class="lang-link" hreflang="${l.code}" lang="${l.code}" title="${esc(l.name)}">${l.label}</a>`
    )
    .join('');

  const nav = c.nav.map((n) => `<li><a href="#${n.id}">${t(n.label)}</a></li>`).join('');

  const terminal = c.hero.terminal
    .map(([cmd, out]) => `<p><span class="t-prompt">$</span> ${t(cmd)}</p><p class="t-out">${t(out)}</p>`)
    .join('');

  const stats = c.stats
    .map((s) => `<div class="stat reveal"><dt>${t(s.label)}</dt><dd>${t(s.value)}</dd></div>`)
    .join('');

  const storyCards = c.story.cards
    .map((k) => `<article class="card reveal">${icon(k.icon, 'icon icon-badge')}<h3>${t(k.title)}</h3><p>${t(k.text)}</p></article>`)
    .join('');

  const facts = c.story.facts.map(([k, v]) => `<div><dt>${t(k)}</dt><dd>${t(v)}</dd></div>`).join('');

  const skills = c.skills.groups
    .map(
      (g) => `<article class="card skill reveal">
          <h3>${icon(g.icon, 'icon icon-badge')}${t(g.name)}</h3>
          <ul class="ticks">${g.items.map((i) => `<li>${t(i)}</li>`).join('')}</ul>
        </article>`
    )
    .join('');

  const tags = (key) => `<ul class="tags" aria-label="Stack">${stacks[key].map((s) => `<li>${esc(s)}</li>`).join('')}</ul>`;

  const featured = c.projects.featured
    .map(
      (p, i) => `<article class="project reveal${i === 0 ? ' project-main' : ''}">
          <div class="project-head">
            ${i === 0 ? `<span class="pill pill-live"><span class="dot" aria-hidden="true"></span>${t(c.projects.featuredLabel)}</span>` : ''}
            <p class="project-tag">${t(p.tag)}</p>
            <h3>${t(p.name)}</h3>
            <p>${t(p.text)}</p>
          </div>
          <ul class="ticks">${p.bullets.map((b) => `<li>${t(b)}</li>`).join('')}</ul>
          <p class="shows"><strong>${t(c.projects.shows)}</strong> ${t(p.shows)}</p>
          ${tags(p.key)}
          ${site.github && repos[p.key] ? `<a class="lab-link" href="${site.github}/${repos[p.key]}" target="_blank" rel="noopener">${icon('github', 'icon icon-xs')}${esc(repos[p.key])}</a>` : ''}
        </article>`
    )
    .join('');

  const labs = c.projects.labs
    .map((l) => {
      const repo = site.github && repos[l.key] ? `${site.github}/${repos[l.key]}` : null;
      const link = repo
        ? `<a class="lab-link" href="${repo}" target="_blank" rel="noopener">${icon('github', 'icon icon-xs')}${esc(repos[l.key])}</a>`
        : '';
      return `<article class="lab reveal"><h4>${t(l.name)}</h4><p>${t(l.text)}</p>${tags(l.key)}${link}</article>`;
    })
    .join('');

  const experience = c.journey.experience
    .map(
      (e) => `<li class="tl-item reveal">
            <p class="tl-period">${e.period ? t(e.period) : `${esc(e.start)} – ${e.end ? esc(e.end) : t(c.ui.present)}`}</p>
            <h4>${t(e.role)}</h4>
            <p class="tl-org">${t(e.org)} · ${t(e.place)}</p>
            <ul class="ticks">${e.bullets.map((b) => `<li>${t(b)}</li>`).join('')}</ul>
            ${e.missions ? `<ul class="missions">${e.missions.map((m) => `<li><p class="mission-head"><strong>${t(m.org)}</strong><span class="tl-period">${t(m.period)}</span></p><p>${t(m.text)}</p></li>`).join('')}</ul>` : ''}
          </li>`
    )
    .join('');

  const education = c.journey.education
    .map(
      (e) => `<li><p class="tl-period">${t(e.period)}</p><h4>${t(e.degree)}</h4><p class="tl-org">${
        e.url ? `<a href="${esc(e.url)}" target="_blank" rel="noopener">${t(e.school)}</a>` : t(e.school)
      }</p>${e.note ? `<p class="edu-note">${t(e.note)}</p>` : ''}</li>`
    )
    .join('');

  const langs = c.journey.languages
    .map(
      (l) => `<li><div class="lang-row"><span>${t(l.name)}</span><span class="muted">${t(l.level)}</span></div>
            <div class="meter" role="presentation"><span class="w-${l.pct}"></span></div></li>`
    )
    .join('');

  const certItem = (x) =>
    `<li><span class="cert-name">${esc(x.name)}</span><span class="cert-meta"><time datetime="${x.date}">${esc(fmtDate(x.date, c))}</time>${
      x.url ? `<a href="${esc(x.url)}" target="_blank" rel="noopener noreferrer" aria-label="${t(c.ui.verify)} – ${esc(x.name)}">${t(c.ui.verify)}${icon('external', 'icon icon-xs')}</a>` : ''
    }</span></li>`;

  const certs = certGroups
    .map(
      (g) => `<article class="card cert-group reveal">
          <header><h3>${icon('award', 'icon icon-badge')}${esc(g.issuer)}</h3>${g.platform ? `<p class="muted">${esc(g.platform)}</p>` : ''}</header>
          ${g.highlight ? `<div class="cert-highlight">${certItem(g.highlight).replace(/^<li>|<\/li>$/g, '')}<p class="muted">${g.items.length} ${t(c.certs.modules)}</p></div>` : ''}
          <ul class="cert-list">${g.items.map(certItem).join('')}</ul>
        </article>`
    )
    .join('');

  const roles = c.hero.roles.map((r) => `<li>${t(r)}</li>`).join('');

  return `<!doctype html>
<html lang="${c.code}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${t(c.meta.title)}</title>
  <meta name="description" content="${t(c.meta.description)}">
  <meta name="keywords" content="${t(c.meta.keywords.join(', '))}">
  <meta name="author" content="${esc(site.name)}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <meta name="color-scheme" content="light dark">
  <meta name="theme-color" content="#f6f7fb" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#0a0f1c" media="(prefers-color-scheme: dark)">
  <link rel="canonical" href="${canonical}">
  ${alternates}
  <meta property="og:type" content="profile">
  <meta property="og:site_name" content="${esc(site.name)}">
  <meta property="og:title" content="${t(c.meta.ogTitle)}">
  <meta property="og:description" content="${t(c.meta.description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${absUrl(site.ogImage)}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:locale" content="${c.locale}">
  ${languages.filter((l) => l.code !== c.code).map((l) => `<meta property="og:locale:alternate" content="${contents[l.code].locale}">`).join('\n  ')}
  <meta property="profile:first_name" content="Saulius">
  <meta property="profile:last_name" content="Stankevicius">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
  <link rel="preload" href="/assets/fonts/inter-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="/assets/css/style.css?v=${site.updated}">
  <script src="/assets/js/theme.js?v=${site.updated}"></script>
  <script src="/assets/js/main.js?v=${site.updated}" defer></script>
  <script type="application/ld+json">${JSON.stringify(jsonLd(c, lang))}</script>
</head>
<body>
  <a class="skip" href="#main">${t(c.ui.skip)}</a>

  <header class="topbar" id="top">
    <div class="wrap topbar-inner">
      <a class="brand" href="${lang.path}" aria-label="${esc(site.name)}"><img class="brand-mark" src="/assets/img/logo-mark.svg" width="36" height="36" alt=""><span class="brand-name">Saulius Stankevicius</span></a>
      <nav class="nav" id="nav" aria-label="${t(c.ui.menu)}">
        <ul>${nav}</ul>
      </nav>
      <div class="tools">
        <div class="langs" role="group" aria-label="${t(c.ui.lang)}">${langSwitch}</div>
        <button class="icon-btn" type="button" id="theme-toggle" aria-label="${t(c.ui.theme)}" title="${t(c.ui.theme)}">${icon('sun', 'icon i-sun')}${icon('moon', 'icon i-moon')}</button>
        <button class="icon-btn menu-btn" type="button" id="menu-toggle" aria-controls="nav" aria-expanded="false" aria-label="${t(c.ui.menu)}">${icon('menu')}</button>
      </div>
    </div>
  </header>

  <main id="main">
    <section class="hero">
      <div class="wrap hero-grid">
        <div class="hero-copy">
          <p class="pill pill-live"><span class="dot" aria-hidden="true"></span>${t(c.hero.status)}</p>
          <h1><span class="hello">${t(c.hero.hello)}</span> Saulius Stankevicius</h1>
          <p class="role">${t(c.hero.role)} <span class="accent">${t(c.hero.roleAccent)}</span></p>
          <p class="lead">${t(c.hero.lead)}</p>
          <div class="seeking">
            <p class="kicker">${t(c.hero.lookingFor)}</p>
            <ul class="roles">${roles}</ul>
          </div>
          <div class="print-qr"><img src="/assets/img/qr.svg" width="96" height="96" alt=""><p>saulius.elitecordiste.fr</p></div>
          <div class="cta">
            <a class="btn btn-primary" href="#contact">${t(c.ui.contactMe)}${icon('arrow', 'icon icon-sm')}</a>
            <a class="btn btn-ghost" href="${site.cv}" download>${icon('download', 'icon icon-sm')}${t(c.ui.downloadCv)}</a>
          </div>
        </div>
        <div class="hero-side">
          <figure class="portrait">
            <img src="${site.photo}" width="424" height="424" alt="${t(c.ui.photoAlt)}" fetchpriority="high">
          </figure>
          <div class="terminal" aria-hidden="true">
            <div class="terminal-bar"><span></span><span></span><span></span><em>saulius@portfolio:~</em></div>
            <div class="terminal-body">${terminal}<p><span class="t-prompt">$</span> <span class="caret"></span></p></div>
          </div>
        </div>
      </div>
      <div class="wrap">
        <dl class="stats">${stats}</dl>
      </div>
    </section>

    <section class="section" id="profil" aria-labelledby="profil-title">
      <div class="wrap">
        <header class="section-head reveal">
          <p class="kicker">${t(c.story.kicker)}</p>
          <h2 id="profil-title">${t(c.story.title)}</h2>
          <p class="section-intro">${t(c.story.intro)}</p>
        </header>
        <div class="grid-3">${storyCards}</div>
        <dl class="facts reveal">${facts}</dl>
      </div>
    </section>

    <section class="section section-alt" id="competences" aria-labelledby="competences-title">
      <div class="wrap">
        <header class="section-head reveal">
          <p class="kicker">${t(c.skills.kicker)}</p>
          <h2 id="competences-title">${t(c.skills.title)}</h2>
          <p class="section-intro">${t(c.skills.intro)}</p>
        </header>
        <div class="grid-3">${skills}</div>
      </div>
    </section>

    <section class="section" id="projets" aria-labelledby="projets-title">
      <div class="wrap">
        <header class="section-head reveal">
          <p class="kicker">${t(c.projects.kicker)}</p>
          <h2 id="projets-title">${t(c.projects.title)}</h2>
          <p class="section-intro">${t(c.projects.intro)}</p>
        </header>
        <div class="projects">${featured}</div>
        <h3 class="sub-title reveal">${t(c.projects.labsTitle)}</h3>
        ${site.github ? `<p class="reveal"><a class="btn btn-ghost" href="${site.github}" target="_blank" rel="noopener">${icon('github', 'icon icon-sm')}${t(c.projects.githubCta)}</a></p>` : ''}
        <div class="labs">${labs}</div>
      </div>
    </section>

    <section class="section section-alt" id="parcours" aria-labelledby="parcours-title">
      <div class="wrap">
        <header class="section-head reveal">
          <p class="kicker">${t(c.journey.kicker)}</p>
          <h2 id="parcours-title">${t(c.journey.title)}</h2>
        </header>
        <div class="journey">
          <div>
            <h3 class="sub-title">${t(c.journey.experienceTitle)}</h3>
            <ol class="timeline">${experience}</ol>
          </div>
          <aside class="journey-side">
            <div class="card reveal">
              <h3 class="sub-title">${t(c.journey.educationTitle)}</h3>
              <ol class="edu">${education}</ol>
            </div>
            <div class="card reveal">
              <h3 class="sub-title">${t(c.journey.languagesTitle)}</h3>
              <ul class="lang-list">${langs}</ul>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section class="section" id="certifications" aria-labelledby="certifications-title">
      <div class="wrap">
        <header class="section-head reveal">
          <p class="kicker">${t(c.certs.kicker)}</p>
          <h2 id="certifications-title">${t(c.certs.title)}</h2>
          <p class="section-intro">${t(c.certs.intro)}</p>
        </header>
        <div class="certs">${certs}</div>
      </div>
    </section>

    <section class="section contact" id="contact" aria-labelledby="contact-title">
      <div class="wrap"><div class="contact-box reveal">
        <div class="contact-copy">
          <p class="kicker">${t(c.contact.kicker)}</p>
          <h2 id="contact-title">${t(c.contact.title)}</h2>
          <p class="lead">${t(c.contact.lead)}</p>
          <div class="cta">
            <a class="btn btn-primary" href="mailto:${site.email}">${icon('mail', 'icon icon-sm')}${esc(site.email)}</a>
            <a class="btn btn-ghost" href="${site.cv}" download>${icon('download', 'icon icon-sm')}${t(c.ui.downloadCv)}</a>
          </div>
        </div>
        <ul class="contact-list">
          <li>${icon('mail', 'icon icon-badge')}<div><span class="muted">${t(c.contact.email)}</span><a href="mailto:${site.email}">${esc(site.email)}</a></div>
            <button class="copy-btn" type="button" data-copy="${site.email}" data-done="${t(c.ui.copied)}" aria-label="${t(c.ui.copy)} ${esc(site.email)}">${icon('copy', 'icon icon-sm')}<span>${t(c.ui.copy)}</span></button></li>
          <li>${icon('phone', 'icon icon-badge')}<div><span class="muted">${t(c.contact.phone)}</span><a href="tel:${site.phoneHref}">${esc(site.phone)}</a></div></li>
          <li>${icon('linkedin', 'icon icon-badge')}<div><span class="muted">${t(c.contact.linkedin)}</span><a href="${site.linkedin}" target="_blank" rel="noopener me">linkedin.com/in/saulius-stankevicius</a></div></li>
          ${site.github ? `<li>${icon('github', 'icon icon-badge')}<div><span class="muted">GitHub</span><a href="${site.github}" target="_blank" rel="noopener me">${esc(site.github.replace('https://', ''))}</a></div></li>` : ''}
          <li>${icon('pin', 'icon icon-badge')}<div><span class="muted">${t(c.contact.location)}</span><span>${t(c.contact.locationValue)}</span></div></li>
        </ul>
      </div></div>
    </section>
  </main>

  <footer class="footer">
    <div class="wrap footer-inner">
      <p>© ${new Date(site.updated).getFullYear()} ${esc(site.name)} · ${t(c.footer.note)} ${t(c.footer.updated)} <time datetime="${site.updated}">${esc(new Intl.DateTimeFormat(c.dateLocale, { dateStyle: 'long' }).format(new Date(site.updated)))}</time></p>
      <div class="footer-tools">
        <a class="link-btn" href="${site.cv}" target="_blank" rel="noopener">${icon('printer', 'icon icon-sm')}${t(c.ui.print)}</a>
        <div class="langs">${langSwitch}</div>
      </div>
    </div>
  </footer>
</body>
</html>
`;
}

// Svetainės žemėlapis su kalbų alternatyvomis
function sitemap() {
  const alt = languages
    .map((l) => `    <xhtml:link rel="alternate" hreflang="${l.code}" href="${absUrl(l.path)}"/>`)
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${absUrl('/')}"/>`)
    .join('\n');
  const urls = languages
    .map((l) => `  <url>\n    <loc>${absUrl(l.path)}</loc>\n    <lastmod>${site.updated}</lastmod>\n${alt}\n  </url>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });
await cp(new URL('./src/static/', import.meta.url), OUT, { recursive: true });

for (const l of languages) {
  const dir = new URL('.' + l.path, OUT);
  await mkdir(dir, { recursive: true });
  await writeFile(new URL('index.html', dir), render(contents[l.code]));
}
await writeFile(new URL('sitemap.xml', OUT), sitemap());

console.log(`dist/ sugeneruota: ${languages.length} kalbos, ${certCount} sertifikatai`);
