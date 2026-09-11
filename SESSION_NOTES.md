# Session Notes: Educafé-Hauptseite

**Stand:** 11. September 2026
**Zweck:** Übergabe für das Finetuning der Educafé-Präsentationswebseite in einem neuen Chat.

## Veröffentlichungsfreigabe

Hans hat die fertige lokale Webseite am 11. September 2026 ausdrücklich zur Veröffentlichung im neuen GitHub-Repository freigegeben:

<https://github.com/hjperino/Educafe_KI_angepasste_Aufgabenstellungen>

Der Programmcode wird unter MIT veröffentlicht, die eigenen Inhalte unter CC BY 4.0. Abweichende Rechte an Fremdmaterialien sind separat dokumentiert. Die Freigabe für Barbara Geyers Polmodell-Grafik wird angefragt; bis dahin bleibt die Grafik ausdrücklich von den Projektlizenzen ausgenommen.

Die deutschsprachige Task-Audit-Seite ist beim KI-Stresstest verlinkt. Die öffentliche Zielseite lautet <https://hjperino.github.io/task-audit/>; François Jourdes Urheberschaft und der ursprüngliche Prüf- und Umbauprompt bleiben sichtbar.

Im Praxisbeispiel «Schreiben im Sandwich-Modus» stehen in der Spalte «Umbau» zwei klein gesetzte Beispielverweise auf den CEFR Writing Feedback Buddy: als GPT-Bot und als öffentlicher Fobizz-Assistent.

Die lokale Beispielseite zur französischen Wortschatzgeschichte wird von der Hauptseite in einem neuen Tab geöffnet. Im Gatsby-Beispiel stehen in der Spalte «Umbau» zwei klein gesetzte Links zu den Beispiel-Chats 1 und 2; auch sie öffnen jeweils in einem neuen Tab.

In der Aufgabenwerkstatt stehen der externe KI-Aufgaben-Transformator und der ausführliche Prüf-Prompt als zwei gleich gestaltete weisse Linkblöcke nebeneinander; auf schmalen Bildschirmen werden sie untereinander angeordnet.

Im Einstieg ist «Educafé ·» gleich gross wie «Praxisbeispiele». Das etwas kleinere Datum «24. September 2026» steht in einer eigenen zweiten Zeile. Beide Einstiegstexte sind orange; nur die Überschrift «Praxisbeispiele» wurde in diesem Abschnitt umgefärbt.

## Veröffentlichungsablauf

Der Workflow `.github/workflows/pages.yml` baut und validiert die statische Seite bei jedem Push auf `main` und veröffentlicht `dist/client` über GitHub Pages.

## Verlässliche Arbeitsdateien

- Projektordner: `/Users/hj/Codex_Workfolder/Projects/KI-angeppasste Aufgabenstellungen/webseite`
- Seiteninhalt und Struktur: `app/page.tsx`
- Gestaltung: `app/globals.css`
- Erzeugte Offline-Seite: `dist/client/index.html`
- Beispielseite zur französischen Wortschatzgeschichte: `public/beispiel-wortschatzgeschichte/index.html`
- Erzeugte Offline-Beispielseite: `dist/client/beispiel-wortschatzgeschichte/index.html`
- Ausführlicher inhaltlicher Stand: `/Users/hj/Codex_Workfolder/Projects/KI-angeppasste Aufgabenstellungen/PROJEKTSTAND.md`

`dist/client/index.html` ist ein erzeugtes Ergebnis und wird **nicht direkt bearbeitet**. Änderungen erfolgen in `app/page.tsx` beziehungsweise `app/globals.css`; danach wird die Offline-Fassung neu erzeugt.

## Aktueller technischer Stand

- Git-Repository: `webseite/`
- Branch: `main`
- Ausgangscommit vor dem aktuellen Finetuning: `8d7e201` – `Refine website task check and learning guidance`
- Der zur Veröffentlichung vorbereitete Stand enthält die redaktionellen und gestalterischen Anpassungen, die neue statische Beispielseite, drei lokale Grafiken, Lizenzhinweise und den GitHub-Pages-Workflow.
- Lokale Offline-Ausgabe am 11. September 2026 zuletzt neu erzeugt.
- Offline-Prüfung erfolgreich: **2 HTML-Seiten, 13 interne Links, 13 lokale Assets, 11 Akkordeon-Elemente**.
- Der Vinext-Build kompiliert alle Stufen. Das abgeschirmte Prerendering kann weiterhin mit `listen EPERM 127.0.0.1` abbrechen; mit der vorgesehenen lokalen Berechtigung wurde der Build am 11. September erfolgreich abgeschlossen.
- Linter erfolgreich ohne Meldungen abgeschlossen.
- Zusätzlicher Offline-Browsercheck erfolgreich: alle 37 gezielten Inhalts-, Darstellungs-, Navigations-, Link- und Lizenzprüfungen bestanden; keine Konsolenfehler und keine fehlenden lokalen Ressourcen.

Arbeitsablauf:

```bash
pnpm build
pnpm validate
```

Beim Build kann die abgeschirmte Umgebung das kurzzeitige Öffnen eines lokalen Ports mit `listen EPERM 127.0.0.1` verhindern. In diesem Fall denselben Build mit der dafür vorgesehenen lokalen Berechtigung erneut ausführen; dies ist kein Fehler der Webseite.

Der frühere Git-Remote `sites` wird für diese Veröffentlichung nicht verwendet. Ziel ist das neue GitHub-Repository unter dem Remote `origin`.

## Abgrenzung zur Task-Audit-Seite

Die Task-Audit-Seite ist ein eigenständiges Projekt und wird in der Educafé-Seite nur als vertiefendes Werkzeug verlinkt:

- Kurzlink: <https://tinyurl.com/task-audit>
- Öffentliche Webseite: <https://hjperino.github.io/task-audit/>
- Repository: <https://github.com/hjperino/task-audit>
- Inhalte und deutschsprachige Adaption: CC BY 4.0
- Programmcode: MIT-Lizenz
- Konzeptionelle Grundlage und Original-Prompt: François Jourde, «Assessment Redesign», CC BY 4.0

Die Task-Audit-Seite erzeugt einen Prompt, trifft aber keine automatische Beurteilung. Fachliche und pädagogische Entscheidungen bleiben bei der Lehrperson.

## Leitplanken für das weitere Finetuning

- Schweizer Orthografie verwenden.
- Bestehende Struktur, DLH-Farbwelt und Inhalte erhalten, sofern Hans keine Änderung verlangt.
- Die Seite wird per Bildschirmfreigabe präsentiert: normaler Fliesstext muss gut lesbar bleiben; nur Quellenangaben bleiben bewusst klein.
- Bedienhinweise müssen als solche erkennbar sein. Aufklapphinweise nennen **aufklappen (+)**.
- Nach einer gewünschten Korrektur lokal neu bauen und prüfen; keine ungefragte inhaltliche oder gestalterische Weiterentwicklung.
- Vor weiteren Änderungen zuerst `PROJEKTSTAND.md` und diese Session Notes lesen.
