// CV PDF (FR) generavimas iš tų pačių duomenų kaip ir svetainė.
// Paleidimas: node tools/cv.mjs  →  src/static/assets/Saulius_Stankevicius_CV.pdf

import { execFileSync } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { site, certGroups } from '../src/content/shared.mjs';
import c from '../src/content/fr.mjs';

const chrome = process.env.CHROME || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const here = (p) => fileURLToPath(new URL(p, import.meta.url));

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]);
const certCount = certGroups.reduce((n, g) => n + g.items.length + (g.highlight ? 1 : 0), 0);
const t = (s) => esc(String(s).replaceAll('{certCount}', certCount));
const list = (items) => `<ul>${items.map((i) => `<li>${t(i)}</li>`).join('')}</ul>`;

// Trumpesnė CV versija: tik svarbiausios eilutės iš svetainės turinio
const profile =
  'Technicien formé en réseaux et administration systèmes (Bachelor professionnel, qualification d’ingénieur), en reprise d’études en informatique à VILNIUS TECH. ' +
  'Treize ans de travaux en hauteur, dont dix comme chef d’équipe, m’ont donné une vraie culture de la sécurité, le réflexe incident et le sens du client. ' +
  'Je recherche un poste de technicien support N1/N2 ou systèmes & réseaux pour évoluer ensuite vers la cybersécurité (SOC).';

const skills = c.skills.groups
  .filter((g) => g.icon !== 'users')
  .map((g) => ({ ...g, items: g.items.filter((i) => !i.startsWith('CTF')) }));
const soft = c.skills.groups.find((g) => g.icon === 'users');

const experience = c.journey.experience
  .map((e) => {
    const period = e.period || `${e.start} – ${e.end ?? 'aujourd’hui'}`;
    const missions = e.missions
      ? `<ul class="missions">${e.missions
          .map((m) => `<li><b>${t(m.org)}</b> <span class="date">${t(m.period)}</span> — ${t(m.text)}</li>`)
          .join('')}</ul>`
      : '';
    return `<div class="item">
      <div class="item-head"><h3>${t(e.role)}</h3><span class="date">${t(period)}</span></div>
      <p class="org">${t(e.org)} · ${t(e.place)}</p>
      ${list(e.bullets)}${missions}
    </div>`;
  })
  .join('');

const education = c.journey.education
  .map(
    (e) => `<div class="item">
      <div class="item-head"><h3>${t(e.degree)}</h3><span class="date">${t(e.period)}</span></div>
      <p class="org">${t(e.school)}</p>${e.note ? `<p class="note">${t(e.note)}</p>` : ''}
    </div>`
  )
  .join('');

const projects = [
  ...c.projects.featured.map((p) => ({ name: p.name, text: p.shows })),
  { name: 'Projets personnels : scripts & outils', text: 'Création de comptes AD en masse (PowerShell), audit de sécurité Windows, analyseur de journaux SSH avec détection de force brute (Python), scripts Linux de sauvegarde et de supervision.' },
]
  .map((p) => `<div class="item"><h3>${t(p.name)}</h3><p class="note">${t(p.text)}</p></div>`)
  .join('');

const certs = certGroups
  .map((g) => {
    const names = [g.highlight?.name, ...g.items.map((i) => i.name)].filter(Boolean);
    const main = g.highlight
      ? `<b>${esc(g.highlight.name)}</b> (${g.items.length} modules)`
      : g.issuer === 'Google Cloud'
        ? `<b>Cloud Security Analyst</b> (${g.items.length} cours)`
        : names.map(esc).join(' · ');
    return `<p class="cert"><span class="issuer">${esc(g.issuer)}</span> ${main}</p>`;
  })
  .join('');

const html = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<title>CV — Saulius Stankevicius</title>
<style>
  @font-face { font-family: Inter; font-weight: 100 900; src: url('../../src/static/assets/fonts/inter-latin-wght-normal.woff2') format('woff2'); }
  @font-face { font-family: Inter; font-weight: 100 900; src: url('../../src/static/assets/fonts/inter-latin-ext-wght-normal.woff2') format('woff2'); unicode-range: U+0100-02BA, U+1E00-1EFF; }
  @page { size: A4; margin: 11mm 12mm; }
  :root { --ink: #0c1324; --soft: #2c3548; --muted: #5b6579; --line: #dfe4ee; --accent: #2149e8; --tint: #f1f4fb; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font: 8.9pt/1.42 Inter, 'Segoe UI', Arial, sans-serif; color: var(--ink); -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  header { display: grid; grid-template-columns: 1fr 26mm; gap: 6mm; align-items: center; padding-bottom: 4mm; border-bottom: 2px solid var(--ink); }
  h1 { font-size: 21pt; font-weight: 800; letter-spacing: -0.02em; line-height: 1.05; }
  .title { font-size: 11pt; font-weight: 600; color: var(--soft); margin-top: 1.5mm; }
  .title b { color: var(--accent); font-weight: 600; }
  .contacts { display: flex; flex-wrap: wrap; gap: 1mm 5mm; margin-top: 2.5mm; color: var(--soft); font-size: 8.4pt; }
  .contacts a { color: inherit; text-decoration: none; }
  .badge { display: inline-block; margin-top: 2.5mm; padding: 0.8mm 2.5mm; border-radius: 99px; background: #e8f6ee; color: #15803d; font-weight: 600; font-size: 8pt; }
  .photo { width: 26mm; height: 26mm; border-radius: 50%; overflow: hidden; }
  .photo img { width: 100%; height: 100%; object-fit: cover; transform: scale(1.27); }
  .profile { margin: 3.5mm 0 1mm; color: var(--soft); font-size: 9.2pt; }
  .cols { display: grid; grid-template-columns: 1fr 62mm; gap: 7mm; }
  h2 { font-size: 8.4pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent); margin: 4.5mm 0 2mm; padding-bottom: 1mm; border-bottom: 1px solid var(--line); }
  h3 { font-size: 9.3pt; font-weight: 700; line-height: 1.3; }
  .item { margin-bottom: 2.8mm; break-inside: avoid; }
  .item-head { display: flex; justify-content: space-between; gap: 3mm; align-items: baseline; }
  .date { color: var(--muted); font-size: 8pt; white-space: nowrap; font-weight: 500; }
  .org { color: var(--muted); font-size: 8.3pt; margin-bottom: 0.8mm; }
  .note { color: var(--soft); font-size: 8.4pt; }
  ul { padding-left: 3.6mm; }
  li { margin-bottom: 0.4mm; }
  li::marker { color: var(--accent); }
  .missions { list-style: none; padding: 1.5mm 2.5mm; margin-top: 1.2mm; background: var(--tint); border-radius: 2mm; }
  .missions li { margin-bottom: 0.8mm; font-size: 8.4pt; color: var(--soft); }
  .side .item { margin-bottom: 2.2mm; }
  .side h3 { font-size: 8.8pt; }
  .side ul { font-size: 8.4pt; color: var(--soft); }
  .cert { font-size: 8.2pt; color: var(--soft); margin-bottom: 1.6mm; }
  .issuer { display: block; font-weight: 700; color: var(--ink); }
  .langs p { display: flex; justify-content: space-between; font-size: 8.6pt; margin-bottom: 0.8mm; }
  .langs span { color: var(--muted); }
  @media screen { body { width: 186mm; } }
  footer { margin-top: 3mm; font-size: 7.6pt; color: var(--muted); text-align: center; }
</style>
</head>
<body>
  <header>
    <div>
      <h1>Saulius Stankevicius</h1>
      <p class="title">Technicien Support Informatique &amp; Systèmes Réseaux · <b>orienté cybersécurité</b></p>
      <p class="contacts">
        <span>${esc(site.phone)}</span>
        <a href="mailto:${site.email}">${esc(site.email)}</a>
        <span>Orgeval (78630) — mobilité Île-de-France</span>
        <span>Permis A et B, véhiculé</span>
        <a href="${site.url}">${site.url.replace('https://', '')}</a>
        <a href="${site.linkedin}">linkedin.com/in/saulius-stankevicius</a>
      </p>
      <span class="badge">Disponible immédiatement · Recherche : ${t(c.hero.roles.join(' · '))}</span>
    </div>
    <div class="photo"><img src="../../src/static/assets/img/profile.jpg" alt=""></div>
  </header>

  <p class="profile">${esc(profile)}</p>

  <div class="cols">
    <main>
      <h2>Expérience professionnelle</h2>
      ${experience}
      <h2>Formation</h2>
      ${education}
      <h2>Projets</h2>
      ${projects}
    </main>
    <aside class="side">
      <h2>Compétences techniques</h2>
      ${skills.map((g) => `<div class="item"><h3>${t(g.name)}</h3>${list(g.items)}</div>`).join('')}
      <h2>Certifications (${certCount})</h2>
      ${certs}
      <h2>Langues</h2>
      <div class="langs">${c.journey.languages.map((l) => `<p><b>${t(l.name)}</b><span>${t(l.level)}</span></p>`).join('')}</div>
      <h2>Savoir-être</h2>
      ${list(soft.items)}
    </aside>
  </div>
  <footer>Certifications vérifiables et projets détaillés sur ${site.url.replace('https://', '')}</footer>
</body>
</html>`;

await mkdir(here('./out/'), { recursive: true });
await writeFile(here('./out/cv.html'), html);

const pdf = here('../src/static/assets/Saulius_Stankevicius_CV.pdf');
execFileSync(chrome, [
  '--headless=new',
  '--disable-gpu',
  '--allow-file-access-from-files',
  '--no-pdf-header-footer',
  '--virtual-time-budget=2000',
  `--print-to-pdf=${pdf}`,
  pathToFileURL(here('./out/cv.html')).href,
], { stdio: 'ignore' });
console.log('✓ CV PDF:', pdf);
