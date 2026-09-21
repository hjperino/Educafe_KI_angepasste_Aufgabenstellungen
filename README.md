# Educafé: KI-angepasste Aufgabenstellungen

Diese Webseite begleitet das Educafé vom 24. September 2026. Sie zeigt, wie
Aufgaben vom Lernziel her geplant und so gestaltet werden können, dass
menschliches Verstehen, Prüfen, Urteilen und Begründen sichtbar bleiben.

## Webseite

Nach der ersten erfolgreichen Publikation ist die Seite unter folgender
Adresse erreichbar:

<https://hjperino.github.io/Educafe_KI_angepasste_Aufgabenstellungen/>

## Lokal ausführen und prüfen

Vorausgesetzt werden Node.js 22.13 oder neuer und pnpm 11.

```sh
pnpm install --frozen-lockfile
pnpm lint
pnpm build
pnpm validate
```

Die statische Ausgabe wird in `dist/client` erzeugt. Die Webseite verwendet
relative Pfade und kann deshalb auch direkt über `dist/client/index.html`
geöffnet werden.

### Lokaler Browsercheck

Für echte Klick- und Darstellungsprüfungen kann Playwright projektlokal
eingerichtet werden:

```sh
python3 -m venv .playwright-venv
.playwright-venv/bin/python -m pip install playwright
PLAYWRIGHT_BROWSERS_PATH=.playwright-browsers .playwright-venv/bin/python -m playwright install chromium
pnpm test:browser
```

Die lokale Python-Umgebung und die Browserdateien werden nicht in Git
aufgenommen. Der Browsercheck erwartet eine zuvor mit `pnpm build` erzeugte
Offline-Seite.

## Veröffentlichung

Der Workflow `.github/workflows/pages.yml` prüft, baut und validiert die Seite
bei jedem Push auf `main` und veröffentlicht die statische Ausgabe über
GitHub Pages.

## Lizenzen

- Programmcode: [MIT](LICENSE)
- Eigene Texte und Grafiken: [CC BY 4.0](LICENSE-CONTENT.md)
- Fremdmaterialien und abweichende Lizenzen:
  [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)

Insbesondere die AIAS-Grafiken stehen unter CC BY-NC-SA 4.0. Die
Polmodell-Grafik wird mit ausdrücklicher Erlaubnis von Barbara Geyer und unter
Namensnennung verwendet. Sie ist von den Projektlizenzen ausgenommen.
