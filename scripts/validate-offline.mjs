import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const clientDir = fileURLToPath(new URL('../dist/client/', import.meta.url));
const indexPath = path.join(clientDir, 'index.html');
const html = await readFile(indexPath, 'utf8');
const errors = [];

if (/<script\b|rel="modulepreload"/.test(html)) {
  errors.push('The offline page still depends on runtime scripts.');
}

if (html.includes('ß')) {
  errors.push('The visible page contains a German sharp s.');
}

const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
const anchors = [...html.matchAll(/href="#([^"]+)"/g)].map((match) => match[1]);
for (const anchor of anchors) {
  if (!ids.has(anchor)) errors.push(`Missing anchor target: #${anchor}`);
}

const localRefs = [...html.matchAll(/(?:href|src)="(?!https?:|mailto:|#)([^"]+)"/g)]
  .map((match) => match[1])
  .filter((ref) => !ref.startsWith('data:'));

for (const ref of localRefs) {
  const target = path.resolve(clientDir, ref.split('#', 1)[0]);
  try {
    await access(target);
  } catch {
    errors.push(`Missing local asset: ${ref}`);
  }
}

const detailsCount = (html.match(/<details\b/g) ?? []).length;
if (detailsCount !== 11) {
  errors.push(`Expected 11 native accordion items, found ${detailsCount}.`);
}

for (const phrase of [
  'Fünf Fragen: vier Gestaltungsebenen und ein abschliessender Check',
  'Gefährliche Mitte',
  'Geschichte und Politik',
  'Mathematik',
  'Zum Seitenanfang',
]) {
  if (!html.includes(phrase)) errors.push(`Missing required content: ${phrase}`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Offline validation passed: ${anchors.length} internal links, ${localRefs.length} local assets, ${detailsCount} accordion items.`);
