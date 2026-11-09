// Puts the fully rendered page into dist/index.html, so the content shows
// before any JavaScript loads (faster first paint, and search engines can read it).
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const { render } = await import(pathToFileURL(`${root}dist-ssr/entry-server.js`).href);
const file = `${root}dist/index.html`;
const html = readFileSync(file, 'utf8');
if (!html.includes('<div id="root"></div>')) throw new Error('root element not found in dist/index.html');
writeFileSync(file, html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`));
rmSync(`${root}dist-ssr`, { recursive: true, force: true });
console.log('Pre-rendered dist/index.html');
