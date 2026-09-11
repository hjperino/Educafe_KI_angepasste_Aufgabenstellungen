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
Polmodell-Grafik ist von den Projektlizenzen ausgenommen; ihre Freigabe zur
Veröffentlichung wurde angefragt.
