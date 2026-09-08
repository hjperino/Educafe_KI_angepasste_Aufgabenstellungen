import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  Eye,
  MessageSquareText,
  Scale,
  ShieldCheck,
  Sparkles,
  Waypoints,
} from 'lucide-react';

import {
  CoreExampleAccordion,
  SourceAccordion,
  SubjectIdeaAccordion,
} from '@/components/content-accordions';

const quickQuestions = [
  'Was sollen Lernende selbst verstehen, beurteilen und tun können?',
  'Welche kognitive Aktivität verlangt die Aufgabe?',
  'Was darf oder soll die KI leisten?',
  'Welches menschliche Urteil muss sichtbar werden – und in welchen Lernspuren?',
  'Unterscheidet die Aufgabe Verstehen von überzeugendem Output und bleibt sie bezüglich Zugang, Aufwand und Beurteilung fair?',
];

const designLayers = [
  {
    icon: Compass,
    number: '01',
    title: 'Lernziel und Agency',
    text: 'Was sollen die Lernenden nachher selbst verstehen, beurteilen und tun können?',
  },
  {
    icon: BrainCircuit,
    number: '02',
    title: 'Kognitive Aktivität',
    text: 'Bearbeiten die Lernenden Vorgegebenes, entwickeln sie selbst etwas Neues oder bauen sie gemeinsam Wissen auf?',
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Rolle der KI',
    text: 'Plant, coacht, kritisiert, simuliert oder formuliert die KI – und wo endet ihre Rolle?',
  },
  {
    icon: Eye,
    number: '04',
    title: 'Menschliches Urteil',
    text: 'Welche Prüfung, Entscheidung, Revision oder Begründung macht das Lernen sichtbar?',
  },
];

const lenses = [
  ['Rhetorik', 'Wie überzeugend, klar und adressatengerecht wirkt das Ergebnis?'],
  ['Evidenz', 'Welche Aussagen sind belegt und welche müssen überprüft werden?'],
  ['Annahmen', 'Was setzt die Antwort voraus, ohne es ausdrücklich zu nennen?'],
  ['Verantwortung', 'Wer entscheidet über Verwendung, Veröffentlichung oder Umsetzung?'],
];

const fluencySkills = [
  ['Delegation', 'Aufgaben zwischen Mensch und KI sinnvoll aufteilen.'],
  ['Description', 'Ziel, Kriterien, Kontext und Materialien präzise beschreiben.'],
  ['Discernment', 'Vorgehen und Ergebnisse fachlich sowie kritisch prüfen.'],
  ['Diligence', 'Verantwortung für Prozess, Entscheidungen und Ergebnis übernehmen.'],
];

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#lernziel">Zum Inhalt springen</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Zurück zum Seitenanfang">
          <span className="brand-org">Digital Learning Hub Sek II</span>
          <span className="brand-divider" aria-hidden="true" />
          <span>KI-angepasste Aufgaben gestalten</span>
        </a>
        <nav aria-label="Hauptnavigation">
          <a href="#lernziel">Lernziel</a>
          <a href="#schnelltest">Schnelltest</a>
          <a href="#aufgabencheck">Aufgabencheck</a>
          <a href="#beispiele">Beispiele</a>
          <a href="#quellen">Quellen</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Educafé · 24. September 2026</p>
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
            Das begründete Urteil bleibt bei den Lernenden.
          </p>
        </div>
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
        <div className="pole-track" role="list" aria-label="Drei Zonen des Polmodells">
          <article className="pole-card presence" role="listitem">
            <span className="pole-number">01</span>
            <h3>Präsenzpol</h3>
            <p>Die Leistung entsteht mündlich, praktisch oder unter Aufsicht und ist einer Person zurechenbar.</p>
          </article>
          <article className="pole-card integrated" role="listitem">
            <span className="pole-number">02</span>
            <h3>Integrierter Pol</h3>
            <p>KI liefert Rohmaterial. Die bewertete Leistung entsteht beim Prüfen, Entscheiden und Verbessern.</p>
          </article>
          <article className="pole-card danger" role="listitem">
            <span className="pole-number">03</span>
            <h3>Gefährliche Mitte</h3>
            <p>Ein unbeaufsichtigtes Endprodukt soll Kompetenz belegen, obwohl KI wesentliche Teile erzeugen kann.</p>
          </article>
        </div>
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
          <p className="eyebrow">Vom Diagnosefilter zum Aufgabencheck</p>
          <h2 id="aufgabencheck-title">Fünf Fragen für den Aufgabencheck</h2>
          <p>
            Der Check beginnt beim Lernziel und endet bei der Frage, ob die Aufgabe
            Verstehen von bloss überzeugendem Output unterscheiden kann.
          </p>
        </div>
        <ol className="question-grid">
          {quickQuestions.map((question, index) => (
            <li key={question}>
              <span>{index + 1}</span>
              <p>{question}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section design-section" id="gestalten" aria-labelledby="gestalten-title">
        <div className="section-heading">
          <p className="eyebrow">Dann gestalten</p>
          <h2 id="gestalten-title">Vier Ebenen halten die Arbeitsteilung klar</h2>
        </div>
        <div className="layer-grid">
          {designLayers.map(({ icon: Icon, number, title, text }) => (
            <article className="layer-card" key={title}>
              <div className="layer-topline">
                <Icon aria-hidden="true" size={22} />
                <span>{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section redesign-section" id="umbauen" aria-labelledby="umbauen-title">
        <div className="section-heading narrow-heading">
          <p className="eyebrow">Kleine Eingriffe</p>
          <h2 id="umbauen-title">Drei Wege, eine Aufgabe umzubauen</h2>
        </div>
        <div className="redesign-grid">
          <article>
            <span>01</span>
            <h3>Ersetzen</h3>
            <p>Eine leicht an KI delegierbare Teilaufgabe wird durch eine lernwirksamere ersetzt.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Ergänzen</h3>
            <p>Das Produkt bleibt, erhält aber Vorarbeit, Quellenkontrolle, Änderungsbegründung oder Fachgespräch.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Etappieren</h3>
            <p>Ein menschlicher Anfang, eine begrenzte KI-Phase und ein menschlicher Abschluss werden verbindlich.</p>
          </article>
        </div>
      </section>

      <section className="section examples-section" id="beispiele" aria-labelledby="beispiele-title">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Praxisbeispiele</p>
            <h2 id="beispiele-title">KI-Output wird zum Prüfmaterial</h2>
          </div>
          <p>
            Die Kurzfassungen bleiben sichtbar. Ausgangslage, Umbau und Lernnachweis
            lassen sich bei Bedarf aufklappen.
          </p>
        </div>
        <CoreExampleAccordion />

        <div className="subject-ideas">
          <div className="section-heading narrow-heading">
            <p className="eyebrow">Weitere Fächer</p>
            <h3>Fünf übertragbare Vorschläge</h3>
            <p>
              Diese Entwürfe sind bewusst fachoffen gehalten. Die konkreten Quellen,
              Kriterien und fachlichen Sicherungen ergänzt die jeweilige Lehrperson.
            </p>
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

      <section className="section fluency-section" id="fluency" aria-labelledby="fluency-title">
        <div className="fluency-intro">
          <p className="eyebrow">KI-Fluency im Dienst menschlicher Agency</p>
          <h2 id="fluency-title">Gute Zusammenarbeit mit KI stärkt eigenes Urteilen</h2>
          <p>
            KI-Kompetenz zeigt sich nicht allein an einem geschickten Prompt. Entscheidend
            bleibt, was Lernende selbst verstehen, prüfen und verantworten können.
          </p>
        </div>
        <ol className="fluency-list">
          {fluencySkills.map(([title, text], index) => (
            <li key={title}>
              <span>{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section workshop-section" id="werkstatt" aria-labelledby="werkstatt-title">
        <div className="workshop-copy">
          <p className="eyebrow">Aufgabenwerkstatt</p>
          <h2 id="werkstatt-title">Eine schwache Aufgabe gemeinsam umbauen</h2>
          <blockquote>
            «Verfasse eine Zusammenfassung zu einem Unterrichtsthema und gib den fertigen Text ab.»
          </blockquote>
          <p>
            Diese Aufgabe verlangt ein plausibles Produkt, macht den Weg dorthin aber kaum
            sichtbar. Drei Entscheidungen reichen für einen ersten Umbau.
          </p>
        </div>
        <ol className="workshop-steps">
          <li>
            <ClipboardCheck aria-hidden="true" size={22} />
            <div><strong>Lernziel klären</strong><span>Was müssen die Lernenden selbst verstehen?</span></div>
          </li>
          <li>
            <Waypoints aria-hidden="true" size={22} />
            <div><strong>KI-Rolle begrenzen</strong><span>Welche Hilfe ist nützlich, ohne das Denken zu übernehmen?</span></div>
          </li>
          <li>
            <MessageSquareText aria-hidden="true" size={22} />
            <div><strong>Urteil sichtbar machen</strong><span>Welche Änderung oder Begründung zeigt das Verständnis?</span></div>
          </li>
        </ol>
        <div className="workshop-result">
          <CheckCircle2 aria-hidden="true" size={24} />
          <p>
            <strong>Mögliche Neufassung:</strong> Zuerst drei Kernaussagen selbst festhalten.
            Dann eine KI-Zusammenfassung an diesen Aussagen und am Unterrichtsmaterial prüfen.
            Zwei Änderungen vornehmen und begründen. Zum Schluss eine neue Aussage ohne KI erklären.
          </p>
        </div>
        <a className="button workshop-link" href="https://digitalespausenbrot.ch/ki-aufgaben-transformator/" target="_blank" rel="noreferrer">
          Externen KI-Aufgaben-Transformator öffnen <ArrowRight aria-hidden="true" size={18} />
        </a>
      </section>

      <section className="section sources-section" id="quellen" aria-labelledby="quellen-title">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">Quellen und Vertiefungen</p>
            <h2 id="quellen-title">Modelle, Praxiswerkzeuge und Kontext</h2>
          </div>
          <p>
            Alle Kerninhalte bleiben auf dieser Seite verständlich. Die externen Links
            führen zu Originalquellen und weiterführenden Werkzeugen.
          </p>
        </div>
        <SourceAccordion />
      </section>

      <section className="closing-section" aria-labelledby="schluss-title">
        <Scale aria-hidden="true" size={34} />
        <h2 id="schluss-title">Die haltbare Aufgabe ist nicht jene, an der KI scheitert.</h2>
        <p>Es ist jene, bei der Lernende ohne eigenes Denken nicht bestehen.</p>
      </section>

      <footer>
        <div>
          <strong>Digital Learning Hub Sek II</strong>
          <p>Educafé September 2026 · Hansjürg Perino</p>
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
