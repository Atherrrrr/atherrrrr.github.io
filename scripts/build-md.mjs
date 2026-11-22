// Generates index.md and llms.txt from the agent view in index.html,
// so the three always carry the same content. Run: node scripts/build-md.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(join(root, 'index.html'), 'utf8');

const match = html.match(/<pre[^>]*id="agent-md"[^>]*>([\s\S]*?)<\/pre>/);
if (!match) {
  console.error('Could not find <pre id="agent-md"> in index.html');
  process.exit(1);
}

const entities = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", '#39': "'", '#x27': "'" };
const markdown = match[1]
  .replace(/&(amp|lt|gt|quot|apos|#39|#x27);/g, (_, name) => entities[name])
  .replace(/\r\n/g, '\n')
  .trim() + '\n';

if (/<[a-z][^>]*>/i.test(markdown)) {
  console.error('Agent view contains HTML tags; keep it plain markdown.');
  process.exit(1);
}

for (const file of ['index.md', 'llms.txt']) {
  writeFileSync(join(root, file), markdown);
  console.log(`wrote ${file} (${markdown.length} chars)`);
}
