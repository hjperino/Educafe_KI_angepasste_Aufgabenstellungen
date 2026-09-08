import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const indexUrl = new URL('../dist/client/index.html', import.meta.url);
const indexPath = fileURLToPath(indexUrl);
const source = await readFile(indexPath, 'utf8');

const offlineHtml = source
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')
  .replace(/<link\b(?=[^>]*rel="modulepreload")[^>]*>/g, '')
  .replaceAll('="/./_next/', '="./_next/');

if (!offlineHtml.includes('href="./_next/static/css/')) {
  throw new Error('The offline stylesheet reference was not generated as a relative path.');
}

if (/<script\b|rel="modulepreload"|="\/\.\/_next\//.test(offlineHtml)) {
  throw new Error('The offline HTML still contains runtime-only or absolute asset references.');
}

await writeFile(indexPath, offlineHtml, 'utf8');
console.log('Offline index prepared: dist/client/index.html');
