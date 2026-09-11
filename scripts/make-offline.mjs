import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const clientDirectory = fileURLToPath(new URL('../dist/client/', import.meta.url));
const cssDirectoryUrl = new URL('../dist/client/_next/static/css/', import.meta.url);

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

const htmlPaths = await findHtmlFiles(clientDirectory);
for (const htmlPath of htmlPaths) {
  const source = await readFile(htmlPath, 'utf8');
  const relativeClientDirectory = path.relative(path.dirname(htmlPath), clientDirectory).replaceAll(path.sep, '/') || '.';
  const offlineHtml = source
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')
    .replace(/<link\b(?=[^>]*rel="modulepreload")[^>]*>/g, '')
    .replaceAll('="/./_next/', `="${relativeClientDirectory}/_next/`);

  if (source.includes('/./_next/') && !offlineHtml.includes(`href="${relativeClientDirectory}/_next/static/css/`)) {
    throw new Error(`The offline stylesheet reference in ${htmlPath} was not generated as a relative path.`);
  }

  if (/<script\b|rel="modulepreload"|="\/\.\/_next\//.test(offlineHtml)) {
    throw new Error(`The offline HTML in ${htmlPath} still contains runtime-only or absolute asset references.`);
  }

  await writeFile(htmlPath, offlineHtml, 'utf8');
}

for (const fileName of await readdir(cssDirectoryUrl)) {
  if (!fileName.endsWith('.css')) continue;

  const cssUrl = new URL(fileName, cssDirectoryUrl);
  const css = await readFile(cssUrl, 'utf8');
  const offlineCss = css.replace(/url\((["']?)\.\/media\//g, 'url($1../media/');
  if (offlineCss !== css) await writeFile(cssUrl, offlineCss, 'utf8');
}

console.log(`Offline HTML prepared: ${htmlPaths.length} pages in dist/client`);
