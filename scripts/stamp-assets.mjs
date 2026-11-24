// Adds a content hash to the CSS and JS URLs in index.html and 404.html (site.css?v=1a2b3c4d),
// so browsers fetch the new file as soon as it changes instead of pairing a new page with an
// old cached script. Run after editing assets: node scripts/stamp-assets.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const assets = ['assets/css/site.css', 'assets/js/site.js'];

const hashes = Object.fromEntries(assets.map(a => [
  a, createHash('sha256').update(readFileSync(join(root, a))).digest('hex').slice(0, 8),
]));

for (const page of ['index.html', '404.html']) {
  const path = join(root, page);
  let html = readFileSync(path, 'utf8');
  for (const [asset, hash] of Object.entries(hashes)) {
    const escaped = asset.replace(/[.]/g, '\\.');
    html = html.replace(new RegExp(`(${escaped})(\\?v=[0-9a-f]+)?(?=")`, 'g'), `$1?v=${hash}`);
  }
  writeFileSync(path, html);
}
console.log(Object.entries(hashes).map(([a, h]) => `${a} -> ${h}`).join('\n'));
