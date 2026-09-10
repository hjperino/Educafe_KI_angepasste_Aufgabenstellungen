# Session Notes: Educafé-Hauptseite

**Stand:** 10. September 2026  
**Zweck:** Übergabe für das Finetuning der Educafé-Präsentationswebseite in einem neuen Chat.

## Unmittelbar nächster Schritt

Im Abschnitt **«Drei Wege, eine Aufgabe umzubauen»**, innerhalb des KI-Stresstests **«Lass die KI zuerst ‹schummeln›»** beziehungsweise der Materiallinie **«let AI cheat before your students do»**, soll die deutschsprachige Task-Audit-Seite ergänzt werden.

- Präsentationslink: <https://tinyurl.com/task-audit>
- Öffentliche Zielseite als Fallback: <https://hjperino.github.io/task-audit/>
- Vorgeschlagte Linkbeschriftung: **Aufgaben-Audit öffnen**
- Vorgeschlagener knapper Kommentar: **Der Aufgaben-Audit erzeugt aus den Angaben zur eigenen Aufgabe einen strukturierten Prompt für Schwachstellenanalyse und Redesign.**

Der neue Link soll den bereits vorhandenen Link zu François Jourdes Original-Prompt **ergänzen, nicht ersetzen**. Jourdes Urheberschaft, Originalquelle und Lizenzhinweis bleiben sichtbar. Falls zwei Schaltflächen nebeneinander oder untereinander erscheinen, muss ihr Abstand in `app/globals.css` sauber gelöst werden.

An der Hauptseite wurde dieser Link in der abschliessenden Session noch nicht eingefügt. Das ist der erste konkrete Bearbeitungsschritt im neuen Chat.

## Verlässliche Arbeitsdateien

- Projektordner: `/Users/hj/Codex_Workfolder/Projects/KI-angeppasste Aufgabenstellungen/webseite`
- Seiteninhalt und Struktur: `app/page.tsx`
- Gestaltung: `app/globals.css`
- Erzeugte Offline-Seite: `dist/client/index.html`
- Ausführlicher inhaltlicher Stand: `/Users/hj/Codex_Workfolder/Projects/KI-angeppasste Aufgabenstellungen/PROJEKTSTAND.md`

`dist/client/index.html` ist ein erzeugtes Ergebnis und wird **nicht direkt bearbeitet**. Änderungen erfolgen in `app/page.tsx` beziehungsweise `app/globals.css`; danach wird die Offline-Fassung neu erzeugt.

## Aktueller technischer Stand

- Git-Repository: `webseite/`
- Branch: `main`
- Letzter inhaltlicher Commit: `8d7e201` – `Refine website task check and learning guidance`
- Arbeitsverzeichnis vor dem Anlegen dieser Session Notes: sauber
- Build am 10. September 2026 erfolgreich neu erzeugt
- Offline-Prüfung erfolgreich: **13 interne Links, 5 lokale Assets, 11 Akkordeon-Elemente**

Arbeitsablauf:

```bash
pnpm build
pnpm validate
```

Beim Build kann die abgeschirmte Umgebung das kurzzeitige Öffnen eines lokalen Ports mit `listen EPERM 127.0.0.1` verhindern. In diesem Fall denselben Build mit der dafür vorgesehenen lokalen Berechtigung erneut ausführen; dies ist kein Fehler der Webseite.

Der Git-Remote `sites` gehört zur bestehenden Veröffentlichung. **Nicht pushen oder neu veröffentlichen, solange Hans dies nicht ausdrücklich verlangt.**

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
