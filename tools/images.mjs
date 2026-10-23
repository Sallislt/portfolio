// Generuoja og.png ir apple-touch-icon.png per Chrome „headless“ režimą
// Paleidimas: node tools/images.mjs

import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const chrome = process.env.CHROME || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const here = (p) => fileURLToPath(new URL(p, import.meta.url));

const shots = [
  { src: './og.html', out: '../src/static/assets/img/og.png', size: '1200,630' },
  { src: './icon.html', out: '../src/static/assets/img/apple-touch-icon.png', size: '180,180' },
];

for (const s of shots) {
  execFileSync(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--allow-file-access-from-files',
    '--virtual-time-budget=2000',
    `--window-size=${s.size}`,
    `--screenshot=${here(s.out)}`,
    pathToFileURL(here(s.src)).href,
  ], { stdio: 'inherit' });
  console.log('✓', s.out);
}
