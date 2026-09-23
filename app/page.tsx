import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  MessageSquareText,
  Scale,
  ShieldCheck,
  Waypoints,
} from 'lucide-react';

import {
  CoreExampleAccordion,
  SourceAccordion,
  SubjectIdeaAccordion,
} from '@/components/content-accordions';

const taskCheckQuestions = [
  {
    title: 'Lernziel und Agency',
    question: 'Was sollen Lernende selbst verstehen, beurteilen und tun können?',
    graphic: null,
  },
  {
    title: 'Kognitive Aktivität',
    question: 'Welches Denken verlangt die Aufgabe? (z. B. erklären, vergleichen, begründen)',
    graphic: {
      href: './images/bloom-denkaktivitaeten.svg',
      alt: 'Bloom als Denk-Werkzeugkasten mit sechs Denkbereichen und handlungsnahen Verben',
      label: 'Bloom-Verben als Denkimpulse öffnen',
      variants: null,
    },
  },
  {
    title: 'Rolle der KI',
    question: (
      <>
        Was darf oder soll die KI leisten? (
        <a href="https://aiassessmentscale.com/" target="_blank" rel="noreferrer">
          AIAS
        </a>
        )
      </>
    ),
    graphic: {
      href: './images/ai-assessment-scale-2-1-titled-large-de.png',
      alt: 'Deutsche Fassung der AI Assessment Scale (AIAS) v2.1 mit fünf Stufen der KI-Nutzung in Aufgaben',
      label: 'AIAS-Grafik öffnen',
      variants: [
        {
          href: './images/ai-assessment-scale-2-1-titled-large-de.png',
          label: 'de',
          ariaLabel: 'Deutsche AIAS-Grafik öffnen',
        },
        {
          href: './images/ai-assessment-scale-2-1-titled-large.png',
          label: 'en',
          ariaLabel: 'Englische AIAS-Grafik öffnen',
        },
      ],
    },
  },
  {
    title: 'Anspruch an die Lernenden',
    question:
      'KI-Ergebnisse prüfen, übernehmen oder verändern – und die Entscheidung begründen («Lernspuren»)',
    graphic: null,
  },
  {
    title: 'Validitätscheck',
    question: 'Bewirkt die Aufgabe tatsächliches Verstehen oder produziert sie nur überzeugenden Output?',
    graphic: null,
  },
];

const lenses = [
  ['Sprachliche Ausgestaltung', 'Wie überzeugend, klar und adressatengerecht wirkt das Ergebnis?'],
  ['Gültigkeit', 'Welche Aussagen sind belegt und welche müssen überprüft werden?'],
  ['Annahmen', 'Was setzt die Antwort voraus, ohne es ausdrücklich zu nennen?'],
  ['Verantwortung', 'Wer entscheidet über Verwendung, Veröffentlichung oder Umsetzung?'],
];

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#lernziel">Zum Inhalt springen</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Zurück zum Seitenanfang">
          <span>KI-angepasste Aufgaben gestalten</span>
        </a>
        <nav aria-label="Hauptnavigation">
          <a href="#lernziel">Lernziel</a>
          <a href="#schnelltest">Schnelltest</a>
          <a href="#aufgabencheck">Aufgabencheck</a>
          <a href="#beispiele">Beispiele</a>
          <a href="#quellen">Quellen</a>
        </nav>
        <a
          className="brand-org-link"
          href="https://dlh.zh.ch/"
          target="_blank"
          rel="noreferrer"
        >
          Digital Learning Hub Sek II
        </a>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span>Educafé ·</span>
            <span className="hero-date">24. September 2026</span>
          </p>
          <h1>KI hat gute Aufgaben nicht zerstört.</h1>
          <p className="hero-lead">
            Sie macht sichtbar, welche Aufgaben bisher vor allem fertige Produkte
            statt Lernen und Denken gemessen haben.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#lernziel">
              Vom Lernziel her planen <ArrowDown aria-hidden="true" size={18} />
            </a>
            <a className="button button-secondary" href="#beispiele">
              Beispiele ansehen <ArrowRight aria-hidden="true" size={18} />
            </a>
          </div>
          <p className="hero-note">
            Die KI darf Material erzeugen, Vorschläge machen und simulieren.
            Die Lernenden prüfen die KI-Ergebnisse, übernehmen, verändern oder verwerfen sie
            und begründen ihre Entscheidungen.
          </p>
        </div>
        <aside className="hero-access" aria-labelledby="hero-access-title">
          <p className="hero-access-title" id="hero-access-title">
            Zugang zu dieser Seite:
          </p>
          <a
            className="hero-access-link"
            href="https://tinyurl.com/Educafe-ai-tasks"
            target="_blank"
            rel="noreferrer"
          >
            tinyurl.com/Educafe-ai-tasks
          </a>
          <a
            className="hero-access-qr"
            href="https://tinyurl.com/Educafe-ai-tasks"
            target="_blank"
            rel="noreferrer"
            aria-label="QR-Code zur Kurzadresse tinyurl.com/Educafe-ai-tasks öffnen"
          >
            <img
              src="./images/educafe-ai-tasks-qr.png"
              alt="QR-Code zur Kurzadresse tinyurl.com/Educafe-ai-tasks"
              width="640"
              height="640"
            />
          </a>
        </aside>
      </section>

      <section className="section learning-goal-section" id="lernziel" aria-labelledby="lernziel-title">
        <div className="section-heading narrow-heading">
          <p className="eyebrow">Der Ausgangspunkt</p>
          <h2 id="lernziel-title">Vom Lernziel her planen</h2>
          <p>
            Nicht mit der Frage beginnen, ob KI erlaubt oder verboten ist. Zuerst
            wird geklärt, was Lernende selbst verstehen, beurteilen und tun können
            sollen. Erst danach folgen der passende Lernnachweis, die Lernaktivität
            und die Rolle der KI.
          </p>
        </div>
        <ol className="planning-path" aria-label="Drei Schritte des Backward Design">
          <li>
            <span>01</span>
            <h3>Lernziel bestimmen</h3>
            <p>Was sollen die Lernenden am Ende wissen, können und als bedeutsam erkennen?</p>
          </li>
          <li>
            <span>02</span>
            <h3>Lernnachweis festlegen</h3>
            <p>Woran lässt sich erkennen, dass dieses Ziel tatsächlich erreicht wurde?</p>
          </li>
          <li>
            <span>03</span>
            <h3>Lernweg gestalten</h3>
            <p>Welche Aktivitäten unterstützen das Lernen, und wo hilft oder stört KI dabei?</p>
          </li>
        </ol>
        <p className="source-note">
          Quelle: <a href="https://tll.mit.edu/teaching-resources/course-design/backward-design/" target="_blank" rel="noreferrer">MIT Teaching + Learning Lab: «Backward Design» nach Wiggins und McTighe</a>.
        </p>
      </section>

      <section className="section diagnostic-section" id="schnelltest" aria-labelledby="schnelltest-section-title">
        <div className="section-heading narrow-heading">
          <p className="eyebrow">Danach diagnostizieren</p>
          <h2 id="schnelltest-section-title">Zwei Fragen aus Barbara Geyers Polmodell</h2>
          <p>
            Wenn das Lernziel feststeht, zeigen zwei Fragen, ob das Aufgabenformat
            individuelles Verstehen überhaupt sichtbar machen kann.
          </p>
          <blockquote className="diagnostic-quote">
            «Wer Aufgaben jetzt neu baut, baut sie nicht gegen KI, sondern für das,
            was Prüfungsdesign schon immer leisten sollte: eine klare Trennung zwischen
            Verstehen und Vortäuschen.»
          </blockquote>
          <p className="source-note">
            Quellen: <a href="https://barbarageyer.substack.com/p/das-polmodell" target="_blank" rel="noreferrer">Barbara Geyer: «Das Polmodell» (Substack)</a> und <a href="https://de.linkedin.com/posts/barbara-geyer_welche-aufgabenstellungen-funktionieren-in-activity-7500445923391574016-nTHQ" target="_blank" rel="noreferrer">«Welche Aufgabenstellungen funktionieren in Zeiten von KI noch?» (LinkedIn)</a>.
          </p>
        </div>

        <aside className="diagnostic-card" aria-labelledby="schnelltest-title">
          <div className="card-kicker">Diagnose in 30 Sekunden</div>
          <h3 id="schnelltest-title">Liegt die Aufgabe in der gefährlichen Mitte?</h3>
          <ol>
            <li>
              <span>1</span>
              Wird die Leistung unmittelbar geprüft – mündlich, praktisch oder unter Aufsicht?
            </li>
            <li>
              <span>2</span>
              Wäre eine reine KI-Abgabe bei dieser Aufgabe erkennbar ungenügend?
            </li>
          </ol>
          <p className="diagnostic-result">
            <ShieldCheck aria-hidden="true" size={21} />
            Zweimal Nein? Dann braucht die Aufgabe sichtbarere menschliche Leistung.
          </p>
          <a
            className="diagnostic-figure"
            href="./images/polmodell.jpeg"
            target="_blank"
            rel="noreferrer"
            aria-label="Barbara Geyers Polmodell als grosse Grafik öffnen"
          >
            <img
              src="./images/polmodell.jpeg"
              alt="Barbara Geyers Polmodell mit Präsenzpol, gefährlicher Mitte, integriertem Pol und zwei Leitfragen zur Einordnung"
              width="1800"
              height="1238"
            />
            <span>
              Polmodell als grosse Grafik öffnen
              <ArrowRight aria-hidden="true" size={18} />
            </span>
          </a>
        </aside>
      </section>

      <section className="section model-section" id="polmodell" aria-labelledby="polmodell-title">
        <div className="section-heading narrow-heading">
          <p className="eyebrow">Das Polmodell</p>
          <h2 id="polmodell-title">Drei Zonen mit unterschiedlichem Aussagewert</h2>
          <p>
            Barbara Geyers Polmodell fragt, was sich aus einem Lernprodukt tatsächlich
            über die Kompetenz einer einzelnen Person schliessen lässt.
          </p>
        </div>
        <ul className="pole-track" aria-label="Drei Zonen des Polmodells">
          <li className="pole-card presence">
            <span className="pole-number">01</span>
            <h3>Präsenzpol</h3>
            <p>Die Leistung entsteht mündlich, praktisch oder unter Aufsicht und ist einer Person zurechenbar.</p>
          </li>
          <li className="pole-card integrated">
            <span className="pole-number">02</span>
            <h3>Integrierter Pol</h3>
            <p>KI liefert Rohmaterial. Die bewertete Leistung entsteht beim Prüfen, Entscheiden und Verbessern.</p>
          </li>
          <li className="pole-card danger">
            <span className="pole-number">03</span>
            <h3>Gefährliche Mitte</h3>
            <p>Ein unbeaufsichtigtes Endprodukt soll Kompetenz belegen, obwohl KI wesentliche Teile erzeugen kann.</p>
          </li>
        </ul>
        <p className="model-note">
          <strong>Wichtig:</strong> Bei einer formativen Lernaufgabe kann ein KI-Produkt
          sehr nützlich sein. Es darf nur nicht allein als Nachweis selbst aufgebauter
          Kompetenz behandelt werden.
        </p>
        <p className="source-note">
          Quellen: <a href="https://barbarageyer.substack.com/p/das-polmodell" target="_blank" rel="noreferrer">Barbara Geyer: «Das Polmodell» (Substack)</a> und <a href="https://de.linkedin.com/posts/barbara-geyer_welche-aufgabenstellungen-funktionieren-in-activity-7500445923391574016-nTHQ" target="_blank" rel="noreferrer">der ergänzende LinkedIn-Beitrag</a>.
        </p>
      </section>

      <section className="quick-check section" id="aufgabencheck" aria-labelledby="aufgabencheck-title">
        <div className="section-heading">
          <p className="eyebrow">Aufgaben gestalten und prüfen</p>
          <h2 id="aufgabencheck-title">Fünf Fragen: vier Gestaltungsebenen und ein abschliessender Check</h2>
          <p>
            Die ersten vier Fragen gestalten die Arbeitsteilung zwischen Lernenden und
            KI. Die fünfte prüft, ob daraus tatsächlich Verstehen entstehen kann.
          </p>
        </div>
        <ol className="question-grid" aria-label="Vier Gestaltungsebenen und ein Validitätscheck">
          {taskCheckQuestions.map(({ title, question, graphic }, index) => (
            <li className={index === 4 ? 'final-check' : undefined} key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{title}</h3>
                <p>{question}</p>
                {graphic?.variants ? (
                  <div className="question-graphic-choice">
                    <img src={graphic.href} alt={graphic.alt} width="1491" height="1055" />
                    <div className="question-graphic-choice-row">
                      <strong>{graphic.label}:</strong>
                      <span className="question-graphic-language-links" aria-label="Sprachauswahl">
                        {graphic.variants.map((variant) => (
                          <a
                            href={variant.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${variant.ariaLabel} (öffnet in neuem Tab)`}
                            hrefLang={variant.label}
                            key={variant.label}
                          >
                            {variant.label}
                          </a>
                        ))}
                      </span>
                    </div>
                  </div>
                ) : graphic ? (
                  <a
                    className="question-graphic-link"
                    href={graphic.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${graphic.label} (öffnet in neuem Tab)`}
                  >
                    <img src={graphic.href} alt={graphic.alt} width="1600" height="1100" />
                    <span>
                      {graphic.label}
                      <ArrowRight aria-hidden="true" size={18} />
                    </span>
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
        <p className="check-source-note">
          (Diese fünf Fragen enthalten Ideen und Erkenntnisse aus verschiedenen Quellen:
          Lernziel und Agency / ICAP nach Chi und Wylie / AIAS 2.1 / «Lernspuren» /
          B. Geyers Trennung von Verstehen und Vortäuschen.)
        </p>
      </section>

      <section className="section redesign-section" id="umbauen" aria-labelledby="umbauen-title">
        <div className="section-heading narrow-heading">
          <p className="eyebrow">Kleine Eingriffe</p>
          <h2 id="umbauen-title">Drei Wege, eine Aufgabe umzubauen</h2>
          <p>
            Vor dem Umbau hilft ein kurzer KI-Stresstest: Wo ermöglicht die
            Aufgabenstellung bereits überzeugenden Output ohne das beabsichtigte
            Denken?
          </p>
        </div>
        <aside className="redesign-stress-test" aria-labelledby="stresstest-title">
          <div>
            <span>00 · Vor dem Umbau</span>
            <h3 id="stresstest-title">Lass die KI zuerst «schummeln»</h3>
          </div>
          <div>
            <p>
              Gib der KI die bestehende Aufgabe und lass sie den bequemsten Weg zu
              einem guten Resultat suchen. Danach soll sie benennen, welche Lücken
              der Aufgabenstellung sie dabei ausgenutzt hat.
            </p>
            <blockquote>
              «Erledige diese Aufgabe mit KI so, dass mit möglichst wenig eigener
              Denkarbeit noch eine gute Bewertung erreichbar ist. Nenne danach genau
              die Lücken der Aufgabenstellung, die dir das ermöglicht haben.»
            </blockquote>
            <p className="stress-test-caveat">
              Der Test beweist nicht, dass eine überarbeitete Aufgabe «KI-sicher» ist.
              Er zeigt, wo Begründung, Kontext oder sichtbarer Prozess fehlen.
            </p>
            <p className="stress-test-tool-copy">
              <strong>Für die vertiefte Prüfung:</strong> François Jourdes ausführlicher
              Prompt führt durch eine Schwachstellenanalyse, drei Umbauoptionen und die
              Ausarbeitung der gewählten Variante.
            </p>
            <a
              className="stress-test-link"
              href="https://hjperino.github.io/task-audit/"
              target="_blank"
              rel="noreferrer"
            >
              Ausführlichen Prüf-Prompt öffnen
              <ArrowRight aria-hidden="true" size={18} />
            </a>
          </div>
        </aside>
        <p className="source-note">
          Kurztest nach <a href="https://www.linkedin.com/posts/doanwinkel_before-i-assign-anything-i-ask-ai-to-cheat-activity-7476295744560254976-My7P" target="_blank" rel="noreferrer">Doan Winkel: «Before I assign anything, I ask AI to cheat on it»</a>. Ausführlicher Prüf- und Umbauprompt von <a href="https://pro.europeana.eu/person/francois-jourde" target="_blank" rel="noreferrer">François Jourde</a>.
        </p>
        <p className="source-note paul-reference">
          Hinweis: <a href="https://www.linkedin.com/posts/paulmatthewsai_i-just-created-an-8-page-pdf-on-how-to-redesign-activity-7500284029221367809-d2Px/" target="_blank" rel="noreferrer">Paul Matthews · Beitrag zur Neugestaltung von Aufgaben mit KI</a>.
        </p>
        <div className="redesign-grid">
          <article>
            <span>01</span>
            <h3>Ersetzen</h3>
            <p>Statt eines traditionellen Aufsatzes, der leicht von einer KI erzeugt werden kann, wird das Kernformat durch eine Aufgabe ersetzt, die eine persönliche Leistung oder Interaktion in Echtzeit erfordert.</p>
            <p className="redesign-example"><strong>Beispiele:</strong> Live-Rede, Videopräsentation, Podcast, interaktive Debatte oder Viva-voce-Prüfung (mündliche Prüfung)</p>
          </article>
          <article>
            <span>02</span>
            <h3>Ergänzen</h3>
            <p>Das Produkt bleibt, verlangt aber zusätzlich Begründungen, Quellenkontrolle, Änderungsentscheidungen oder ein Fachgespräch.</p>
            <p className="redesign-example"><strong>Beispiele:</strong> handschriftliche Reflexion im Unterricht; eine kommentierte Quellenliste, in der erläutert wird, warum die Quellen ausgewählt wurden</p>
          </article>
          <article>
            <span>03</span>
            <h3>Etappieren</h3>
            <p>Der Weg wird sichtbar: eigener Anfang, begrenzte KI-Phase, Prozessartefakt und menschlicher Abschluss werden verbindlich.</p>
            <p className="redesign-example"><strong>Beispiel:</strong> einen mehrwöchigen Aufsatz in verbindliche, im Unterricht bearbeitete Zwischenetappen aufteilen, etwa gemeinsame Ideensammlungen, Feedbackrunden zur Gliederung und betreutes Schreiben am Entwurf</p>
          </article>
        </div>
      </section>

      <section className="section examples-section" id="beispiele" aria-labelledby="beispiele-title">
        <div className="section-heading split-heading">
          <div>
            <h2 id="beispiele-title" className="section-title">Praxisbeispiele</h2>
            <p className="section-subtitle">KI-Output wird zum Prüfmaterial</p>
          </div>
          <aside className="interaction-note" aria-label="Bedienhinweis">
            <strong>Bedienhinweis</strong>
            <p>
              «Schreiben im Sandwich-Modus», «Wortschatzgeschichte als Prüfmaterial»
              und «Literaturarbeit zu The Great Gatsby» lassen sich für weitere
              Details aufklappen (+).
            </p>
          </aside>
        </div>
        <CoreExampleAccordion />

        <aside className="english-ai-preview" aria-label="Vorankündigung Englisch mit KI">
          <p>
            <strong>Vorankündigung:</strong> Am 9. Oktober geht die Seite «Englisch mit KI»
            live. Dort werden die Resultate des DLH-Innovationsfondsprojekts{' '}
            <a
              href="https://dlh.zh.ch/home/innovationsfonds/projektvorstellungen/uebersicht/997-selbstverantwortliches-lernen-mit-ki-im-englisch"
              target="_blank"
              rel="noreferrer"
            >
              «Selbstverantwortliches Lernen mit KI im Englisch»
            </a>{' '}
            publiziert – mit Lehrplänen, Prompts und allem, was dazugehört. Der Link dazu
            wird dann hier ergänzt: _____
          </p>
        </aside>

        <div className="subject-ideas">
          <div className="section-heading narrow-heading">
            <p className="eyebrow">Weitere Fächer</p>
            <p>
              Diese Entwürfe sind bewusst relativ allgemein gehalten. Die konkreten Quellen,
              Kriterien und fachlichen Sicherungen ergänzt die jeweilige Lehrperson.
            </p>
            <aside className="interaction-note" aria-label="Bedienhinweis">
              <strong>Bedienhinweis</strong>
              <p>
                Die fünf Fachvorschläge lassen sich für weitere Details aufklappen (+).
              </p>
            </aside>
          </div>
          <SubjectIdeaAccordion />
        </div>
      </section>

      <section className="section judgment-section" id="prueflinsen" aria-labelledby="prueflinsen-title">
        <div className="section-heading">
          <p className="eyebrow">Für Lernende</p>
          <h2 id="prueflinsen-title">Vier Prüflinsen für KI-Ergebnisse</h2>
        </div>
        <div className="lens-grid">
          {lenses.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section workshop-section" id="werkstatt" aria-labelledby="werkstatt-title">
        <div className="workshop-copy">
          <p className="eyebrow">Aufgabenwerkstatt</p>
          <h2 id="werkstatt-title">Eine schwache Aufgabe gemeinsam umbauen</h2>
          <blockquote>
            «Erkläre die Photosynthese.»
          </blockquote>
          <p>
            Eine KI liefert dazu in wenigen Sekunden eine fachsprachlich überzeugende
            Standardantwort. Am fertigen Text ist kaum erkennbar, ob die Lernenden die
            Stoff- und Energieumwandlung tatsächlich verstanden haben.
          </p>
        </div>
        <ol className="workshop-steps">
          <li>
            <ClipboardCheck aria-hidden="true" size={22} />
            <div><strong>Lernziel schärfen</strong><span>Welche Zusammenhänge der Photosynthese sollen die Lernenden selbst erklären können?</span></div>
          </li>
          <li>
            <Waypoints aria-hidden="true" size={22} />
            <div><strong>Zwischenschritt einbauen</strong><span>Was skizzieren oder prognostizieren sie, bevor sie die KI befragen?</span></div>
          </li>
          <li>
            <MessageSquareText aria-hidden="true" size={22} />
            <div><strong>Prüfung und Transfer ergänzen</strong><span>Welche Prüfung, Überarbeitung oder neue Situation macht ihr Verständnis sichtbar?</span></div>
          </li>
        </ol>
        <div className="workshop-result">
          <CheckCircle2 aria-hidden="true" size={24} />
          <p>
            <strong>Mögliche Neufassung:</strong> Vor der KI zeichnen die Lernenden ein
            Prozessmodell und kennzeichnen Stoff- und Energieumwandlung. Dann vergleichen
            sie eine KI-Erklärung mit ihrem Modell und dem Unterrichtsmaterial, markieren
            Übereinstimmungen und Unterschiede und überarbeiten ihr Modell begründet. Zum
            Schluss beantworten sie ohne KI eine Transferfrage: «Was verändert sich, wenn
            Licht oder CO₂ knapp wird?»
          </p>
        </div>
        <div className="workshop-links">
          <a className="button workshop-link" href="https://digitalespausenbrot.ch/ki-aufgaben-transformator/" target="_blank" rel="noreferrer">
            Externen KI-Aufgaben-Transformator öffnen <ArrowRight aria-hidden="true" size={18} />
          </a>
          <a className="button workshop-link" href="https://hjperino.github.io/task-audit/" target="_blank" rel="noreferrer">
            Ausführlichen Prüf-Prompt öffnen <ArrowRight aria-hidden="true" size={18} />
          </a>
        </div>
      </section>

      <section className="section sources-section" id="quellen" aria-labelledby="quellen-title">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Quellen und Vertiefungen</p>
            <h2 id="quellen-title">Modelle, Praxiswerkzeuge und Kontext</h2>
          </div>
          <aside className="interaction-note" aria-label="Bedienhinweis">
            <strong>Bedienhinweis</strong>
            <p>
              Alle Inhalte auf dieser Seite bleiben auch nach der Präsentation erhalten
              und sind offen zugänglich. Die externen Links führen zu Originalquellen
              und weiterführenden Werkzeugen.
            </p>
          </aside>
        </div>
        <SourceAccordion />
      </section>

      <section className="closing-section" aria-labelledby="schluss-title">
        <Scale aria-hidden="true" size={34} />
        <h2 id="schluss-title">Die beständige Aufgabe ist jene, bei der Lernende ohne eigenes Denken nicht bestehen.</h2>
      </section>

      <footer>
        <div>
          <strong>Digital Learning Hub Sek II</strong>
          <p>Educafé September 2026 · Hansjürg Perino</p>
          <p className="footer-license">
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">Eigene Inhalte: CC BY 4.0</a>
            {' · '}
            <a href="https://github.com/hjperino/Educafe_KI_angepasste_Aufgabenstellungen/blob/main/LICENSE" target="_blank" rel="noreferrer">Code: MIT</a>
            {' · '}
            <a href="https://github.com/hjperino/Educafe_KI_angepasste_Aufgabenstellungen/blob/main/THIRD_PARTY_NOTICES.md" target="_blank" rel="noreferrer">Hinweise zu Fremdmaterialien</a>
          </p>
        </div>
        <nav aria-label="Navigation im Seitenfuss">
          <a href="#aufgabencheck">Aufgabencheck</a>
          <a href="#beispiele">Beispiele</a>
          <a href="#quellen">Quellen</a>
          <a href="#top">Zum Seitenanfang</a>
        </nav>
      </footer>
    </main>
  );
}
