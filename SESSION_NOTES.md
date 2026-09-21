# Session Notes: Educafé-Hauptseite

**Stand:** 21. September 2026
**Zweck:** Übergabe des aktuellen lokalen und veröffentlichten Stands der Educafé-Präsentationswebseite.

## Veröffentlichungsfreigabe

Hans hat die fertige lokale Webseite am 11. September 2026 ausdrücklich zur Veröffentlichung im neuen GitHub-Repository freigegeben:

<https://github.com/hjperino/Educafe_KI_angepasste_Aufgabenstellungen>

Die veröffentlichte Webseite ist erreichbar unter:

- Hauptadresse: <https://hjperino.github.io/Educafe_KI_angepasste_Aufgabenstellungen/>
- Kurzadresse für Teilnehmende: <https://tinyurl.com/Educafe-ai-tasks>
- Letzter veröffentlichter Commit: `8efd94a` – `Add participant access block with QR code`

Der Programmcode wird unter MIT veröffentlicht, die eigenen Inhalte unter CC BY 4.0. Abweichende Rechte an Fremdmaterialien sind separat dokumentiert. Barbara Geyer hat die Verwendung ihres Polmodells im Educafé-Beitrag und die Darstellung der Abbildung auf der Materialseite ausdrücklich erlaubt, sofern sie als Quelle genannt wird. Die Grafik bleibt von den Projektlizenzen ausgenommen.

Die deutschsprachige Task-Audit-Seite ist beim KI-Stresstest verlinkt. Die öffentliche Zielseite lautet <https://hjperino.github.io/task-audit/>; François Jourdes Urheberschaft und der ursprüngliche Prüf- und Umbauprompt bleiben sichtbar.

Im Praxisbeispiel «Schreiben im Sandwich-Modus» stehen in der Spalte «Umbau» zwei klein gesetzte Beispielverweise auf den CEFR Writing Feedback Buddy: als GPT-Bot und als öffentlicher Fobizz-Assistent.

Im französischen Praxisbeispiel beschreibt die herkömmliche Aufgabenstellung das Lernen mit einem einzigen vorgegebenen Kursbuchtext. Der Umbau lässt die Lehrperson oder die Lernenden aus einer Wortliste eigene Texte erstellen und diese kritisch beleuchten. Als Lernnachweis werden zusätzlich Erklärungen zur Bedeutung der Wortschatzelemente im neuen Kontext verlangt. Der bestehende Link zur lokalen Beispielseite bleibt unverändert und öffnet sie in einem neuen Tab. Im Gatsby-Beispiel stehen in der Spalte «Umbau» zwei klein gesetzte Links zu den Beispiel-Chats 1 und 2; auch sie öffnen jeweils in einem neuen Tab.

In der Aufgabenwerkstatt stehen der externe KI-Aufgaben-Transformator und der ausführliche Prüf-Prompt als zwei gleich gestaltete weisse Linkblöcke nebeneinander; auf schmalen Bildschirmen werden sie untereinander angeordnet.

Im Einstieg ist «Educafé ·» gleich gross wie «Praxisbeispiele». Das etwas kleinere Datum «24. September 2026» steht in einer eigenen zweiten Zeile. Beide Einstiegstexte sind orange; nur die Überschrift «Praxisbeispiele» wurde in diesem Abschnitt umgefärbt.

Die Kopfzeile beginnt mit «KI-angepasste Aufgaben gestalten». Danach folgen die Navigationspunkte. «Digital Learning Hub Sek II» steht rechts und führt in einem neuen Tab zu <https://dlh.zh.ch/>. Diese Anordnung gilt auch für die Beispielseite; auf schmalen Bildschirmen wird sie platzsparend umgebrochen.

Rechts neben dem Veranstaltungstitel steht ein dezent umrandeter Zugangsblock mit der Überschrift «Zugang zu dieser Seite:», der Kurzadresse und dem lokalen QR-Code `public/images/educafe-ai-tasks-qr.png`. Kurzadresse und QR-Code öffnen die Teilnehmendenadresse in einem neuen Tab. Auf schmalen Bildschirmen steht der Block unter dem Titel.

## Veröffentlichungsablauf

Der Workflow `.github/workflows/pages.yml` baut und validiert die statische Seite bei jedem Push auf `main` und veröffentlicht `dist/client` über GitHub Pages.

Die Veröffentlichungsworkflows für die letzten Layoutänderungen wurden erfolgreich abgeschlossen:

- `bb5c033` – Kopfzeile neu geordnet und DLH-Webseite verlinkt
- `8efd94a` – Zugangsblock mit Kurzadresse und QR-Code ergänzt

Die Hauptadresse, die Kurzadresse und das veröffentlichte QR-Bild wurden nach dem Deployment direkt online geprüft. Die Kurzadresse leitet korrekt auf die GitHub-Pages-Seite weiter.

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
- Aktueller Commit auf `main` und `origin/main`: `8efd94a` – `Add participant access block with QR code`
- Lokaler, noch nicht veröffentlichter Änderungsstand vom 21. September 2026: französisches Praxisbeispiel präzisiert, Barbara Geyers Nutzungserlaubnis dokumentiert und alle drei Praxisbeispiele standardmässig geschlossen.
- Der veröffentlichte Stand enthält die redaktionellen und gestalterischen Anpassungen, die statische Beispielseite, die lokalen Grafiken einschliesslich QR-Code, Lizenzhinweise und den GitHub-Pages-Workflow.
- Lokale Offline-Ausgabe am 21. September 2026 neu erzeugt.
- Offline-Prüfung erfolgreich: **2 HTML-Seiten, 13 interne Links, 15 lokale Assets, 11 Akkordeon-Elemente**.
- Der Vinext-Build kompiliert alle Stufen. Das abgeschirmte Prerendering kann weiterhin mit `listen EPERM 127.0.0.1` abbrechen; mit der vorgesehenen lokalen Berechtigung wurde der Build am 21. September erfolgreich abgeschlossen.
- Linter erfolgreich ohne Meldungen abgeschlossen.
- Playwright und Chromium sind projektlokal installiert und von Git ausgeschlossen. Der feste Befehl `pnpm test:browser` prüft die geschlossenen Praxisbeispiele, das Öffnen und Schliessen sowie Konsolenfehler in Desktop- und Mobilbreite.
- Beim zusätzlichen Offline-Browsercheck vom 11. September bestanden alle **66** gezielten Inhalts-, Darstellungs-, Navigations-, Link-, QR- und Lizenzprüfungen; es gab keine Konsolenfehler und keine fehlenden lokalen Ressourcen.

Arbeitsablauf:

```bash
pnpm build
pnpm validate
```

Beim Build kann die abgeschirmte Umgebung das kurzzeitige Öffnen eines lokalen Ports mit `listen EPERM 127.0.0.1` verhindern. In diesem Fall denselben Build mit der dafür vorgesehenen lokalen Berechtigung erneut ausführen; dies ist kein Fehler der Webseite.

Der frühere Git-Remote `sites` wird für diese Veröffentlichung nicht verwendet. Ziel ist das neue GitHub-Repository unter dem Remote `origin`.

## Nutzungserlaubnis für Barbara Geyers Polmodell-Grafik

Barbara Geyer hat Hansjürg ausdrücklich erlaubt, das Polmodell im Educafé-Beitrag zu verwenden und die Abbildung auf der Materialseite zu zeigen. Bedingung ist die Namensnennung als Quelle. Der entscheidende Wortlaut ihrer Nachricht lautet:

> You are welcome to use the pole model in your Educafé intervention and to show the illustration on the materials page, as long as you name me as the source. That is exactly what you proposed, so we are in agreement.

Barbara betont ausserdem, dass nicht die beiden Pole für sich genommen, sondern die gefährliche Mitte zwischen ihnen der Kern des Modells ist. Dort sehen Aufgaben unverändert aus, erlauben aber keine belastbare Aussage mehr darüber, was Lernende selbst können. Dieser Schwerpunkt ist auf der Webseite bereits im vorangestellten Schnelltest sichtbar.

`THIRD_PARTY_NOTICES.md` dokumentiert die zweckgebundene Erlaubnis. Die Polmodell-Grafik bleibt von der MIT- und der CC-BY-4.0-Lizenz des Projekts ausgenommen; aus der Erlaubnis folgt keine allgemeine Weiterverwendungslizenz für Dritte.

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
