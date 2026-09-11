import { access, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const clientDir = fileURLToPath(new URL('../dist/client/', import.meta.url));
const errors = [];

async function findHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await findHtmlFiles(entryPath));
    if (entry.isFile() && entry.name.endsWith('.html')) files.push(entryPath);
  }

  return files;
}

const htmlPaths = await findHtmlFiles(clientDir);
for (const htmlPath of htmlPaths) {
  const pageDirectory = path.dirname(htmlPath);
  const pageLabel = path.relative(clientDir, htmlPath);
  const pageHtml = await readFile(htmlPath, 'utf8');

  if (/<script\b|rel="modulepreload"/.test(pageHtml)) {
    errors.push(`${pageLabel} still depends on runtime scripts.`);
  }

  if (pageHtml.includes('ß')) {
    errors.push(`${pageLabel} contains a German sharp s.`);
  }

  const ids = new Set([...pageHtml.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
  const anchors = [...pageHtml.matchAll(/href="#([^"]+)"/g)].map((match) => match[1]);
  for (const anchor of anchors) {
    if (!ids.has(anchor)) errors.push(`${pageLabel} is missing anchor target: #${anchor}`);
  }

  const localRefs = [...pageHtml.matchAll(/(?:href|src)="(?!https?:|mailto:|#)([^"]+)"/g)]
    .map((match) => match[1])
    .filter((ref) => !ref.startsWith('data:'));

  for (const ref of localRefs) {
    const target = path.resolve(pageDirectory, ref.split('#', 1)[0]);
    try {
      await access(target);
    } catch {
      errors.push(`${pageLabel} is missing local asset: ${ref}`);
    }
  }

  const stylesheetRefs = localRefs.filter((ref) => ref.endsWith('.css'));
  for (const stylesheetRef of stylesheetRefs) {
    const stylesheetPath = path.resolve(pageDirectory, stylesheetRef);
    const stylesheet = await readFile(stylesheetPath, 'utf8');
    const stylesheetDirectory = path.dirname(stylesheetPath);
    const assetRefs = [...stylesheet.matchAll(/url\(["']?([^"')]+)["']?\)/g)]
      .map((match) => match[1])
      .filter((ref) => !/^(?:data:|https?:|\/)/.test(ref));

    for (const assetRef of assetRefs) {
      try {
        await access(path.resolve(stylesheetDirectory, assetRef));
      } catch {
        errors.push(`${pageLabel} is missing stylesheet asset: ${assetRef}`);
      }
    }
  }
}

const indexPath = path.join(clientDir, 'index.html');
const html = await readFile(indexPath, 'utf8');
const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
const anchors = [...html.matchAll(/href="#([^"]+)"/g)].map((match) => match[1]);
const localRefs = [...html.matchAll(/(?:href|src)="(?!https?:|mailto:|#)([^"]+)"/g)]
  .map((match) => match[1])
  .filter((ref) => !ref.startsWith('data:'));

const detailsCount = (html.match(/<details\b/g) ?? []).length;
if (detailsCount !== 11) {
  errors.push(`Expected 11 native accordion items, found ${detailsCount}.`);
}

for (const anchor of anchors) {
  if (!ids.has(anchor)) errors.push(`Missing target for internal link: #${anchor}`);
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

const exampleHtml = await readFile(path.join(clientDir, 'beispiel-wortschatzgeschichte', 'index.html'), 'utf8');
for (const phrase of [
  'Geschichte aus einer französischen Wortliste',
  'Expression en français',
  'demander la permission à qn.',
  'Ganzer Chatverlauf',
  'Extra: Geschichte als Video',
]) {
  if (!exampleHtml.includes(phrase)) errors.push(`Missing example-page content: ${phrase}`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Offline validation passed: ${htmlPaths.length} pages, ${anchors.length} internal links, ${localRefs.length} local assets, ${detailsCount} accordion items.`);
