import { ExternalLink } from 'lucide-react';

const coreExamples = [
  {
    value: 'sandwich',
    title: 'Schreiben im Sandwich-Modus',
    meta: 'Sprachen · KI als Feedbackpartnerin',
    before: 'Ein fertiger Text wird abgegeben; die Entwicklung bleibt unsichtbar.',
    after:
      'Die Lernenden schreiben zuerst selbst. Danach erhalten sie sprachliches und strukturelles KI-Feedback, prüfen die Hinweise und überarbeiten gezielt.',
    tools: [
      {
        label: 'GPT-Bot',
        href: 'https://chatgpt.com/g/g-6867942b8e5c8191bab5ea3857148b1a-cefr-writing-feedback-buddy-swiss-sek-i-and-ii',
      },
      {
        label: 'Fobizz-Assistent',
        href: 'https://app.fobizz.com/ai/chats/public_assistants/c16e38ef-1743-4212-b6a8-accb632f5347?token=1f2f69dab5dc55e728bcd5f59c19ffd3',
      },
    ],
    toolsLabel: 'Benutze z. B.',
    trace:
      'Ausgangstext, ausgewählte Feedbackhinweise, überarbeitete Fassung und eine kurze Begründung der wichtigsten Entscheidungen.',
    resource: null,
  },
  {
    value: 'wortschatz',
    title: 'Wortschatzgeschichte als Prüfmaterial',
    meta: 'Französisch · KI erzeugt ein prüfbares Artefakt',
    before: 'Eine KI-Geschichte wird als anschauliches Übungsmaterial konsumiert.',
    after:
      'Die Lernenden prüfen die Verwendung vorgegebener Ausdrücke, klären mehrdeutige Stellen, verbessern problematische Sätze und entwickeln eigene Varianten.',
    tools: null,
    toolsLabel: null,
    trace:
      'Markierungen im KI-Text, begründete Korrekturen und die sprachlichen Entscheidungen der Gruppe.',
    resource: {
      label: 'Beispiel Chatverlauf und «Extra»: Geschichte zu Video',
      href: './beispiel-wortschatzgeschichte/index.html',
    },
  },
  {
    value: 'gatsby',
    title: 'Literaturarbeit zu The Great Gatsby',
    meta: 'Literatur · KI als zusätzliche Lesart',
    before: 'Eine Figurenanalyse oder Interpretation wird nur als Endprodukt beurteilt.',
    after:
      'Eigene Beobachtungen entstehen vor der KI-Nutzung. Anschliessend vergleichen die Lernenden sie mit einer KI-Zusammenfassung oder einer simulierten Figurenstimme.',
    tools: [
      {
        label: 'Beispiel Chat 1',
        href: 'https://chatgpt.com/c/fc15bec7-8234-4e06-a87c-85572bfd61b9',
      },
      {
        label: 'Beispiel Chat 2',
        href: 'https://chatgpt.com/c/2f6758e7-fcdc-48e0-bee6-750fed50775a',
      },
    ],
    toolsLabel: null,
    trace:
      'Textbelege, angenommene oder verworfene KI-Ideen und ein eigenes literarisches Urteil. Die Simulation wird als Modellkonstruktion gekennzeichnet.',
    resource: null,
  },
];

const subjectIdeas = [
  {
    value: 'geschichte',
    title: 'Geschichte und Politik',
    task:
      'Zwei KI-Darstellungen eines historischen Ereignisses oder politischen Konflikts mit einer im Unterricht behandelten Quelle vergleichen.',
    judgment:
      'Die Lernenden markieren Behauptungen, Perspektiven und Auslassungen und formulieren ein quellenbasiertes Urteil.',
  },
  {
    value: 'mathematik',
    title: 'Mathematik',
    task:
      'Zuerst einen eigenen Lösungsansatz skizzieren, danach mit einer KI-Lösung vergleichen und die erste Abweichung untersuchen.',
    judgment:
      'Die Lernenden prüfen rechnerisch oder grafisch, welcher Schritt trägt, erklären den Fehler und lösen anschliessend eine kurze Transferaufgabe ohne KI.',
  },
  {
    value: 'naturwissenschaften',
    title: 'Naturwissenschaften',
    task:
      'Vor einem Versuch eine eigene Prognose festhalten. Nach der Messung schlägt die KI eine Interpretation der Daten vor.',
    judgment:
      'Die Lernenden vergleichen Prognose, Messwerte und KI-Deutung, benennen Unsicherheiten und begründen ihre Schlussfolgerung.',
  },
  {
    value: 'wirtschaft',
    title: 'Berufskunde und Wirtschaft',
    task:
      'Einen realistischen Kundenauftrag mit Zielgruppe, Budget und lokalen Bedingungen bearbeiten. Die KI liefert mehrere Lösungsvorschläge.',
    judgment:
      'Die Lernenden legen Kriterien fest, wählen oder verändern einen Vorschlag und verteidigen ihre Entscheidung in einem kurzen Gespräch.',
  },
  {
    value: 'gestaltung',
    title: 'Gestalten und Kunst',
    task:
      'Eine menschlich entwickelte, eine KI-generierte und eine gemeinsam entwickelte Fassung gegenüberstellen.',
    judgment:
      'Die Lernenden erläutern Absicht, gestalterische Entscheidungen, Urheberschaft und ethische Grenzen und begründen ihre bevorzugte Fassung.',
  },
];

const sources = [
  {
    value: 'kernquellen',
    title: 'Kernmodelle und Forschung',
    links: [
      ['Backward Design · MIT Teaching + Learning Lab', 'https://tll.mit.edu/teaching-resources/course-design/backward-design/'],
      ['Das Polmodell · Barbara Geyer (Substack)', 'https://barbarageyer.substack.com/p/das-polmodell'],
      ['Polmodell von Barbara Geyer · ergänzender LinkedIn-Beitrag', 'https://de.linkedin.com/posts/barbara-geyer_welche-aufgabenstellungen-funktionieren-in-activity-7500445923391574016-nTHQ'],
      ['ICAP Framework von Chi und Wylie', 'https://doi.org/10.1080/00461520.2014.965823'],
      ['AI Assessment Scale 2.1', 'https://aiassessmentscale.com/'],
      ['AIAS Implementation Guide', 'https://aiassessmentscale.com/implementation-guide/'],
      ['AI Fluency for Educators · Anthropic', 'https://anthropic.skilljar.com/ai-fluency-for-educators'],
      ['AI Literacy Framework', 'https://ailiteracyframework.org/'],
    ],
  },
  {
    value: 'praxis',
    title: 'Praxiswerkzeuge und Vertiefungen',
    links: [
      ['KI-Stresstest vor dem Aufgabenumbau · Doan Winkel', 'https://www.linkedin.com/posts/doanwinkel_before-i-assign-anything-i-ask-ai-to-cheat-activity-7476295744560254976-My7P'],
      ['Ausführlicher Prüf- und Umbauprompt · François Jourde', 'https://hjperino.github.io/task-audit/'],
      ['KI-Aufgaben-Transformator', 'https://digitalespausenbrot.ch/ki-aufgaben-transformator/'],
      ['Planungsvorlage KI-Aufgabenkultur von Falck und Flick', 'https://joschafalck.de/ki-didaktik-planungsvorlage/'],
      ['Entscheidungsbaum KI und Hausaufgaben', 'https://view.genially.com/69fb3374dbd17c55f9d937de'],
    ],
  },
  {
    value: 'kontext',
    title: 'Schweizer Kontext und Veranstaltung',
    links: [
      ['Praxisbeispiele: Denken mit KI · Digital Learning Hub Sek II', 'https://dlh.zh.ch/home/fokus-2026?view=article&id=1106:praxisbeispiele-denken-mit-ki&catid=174'],
      ['Impulsworkshops des DLH', 'https://dlh.zh.ch/home/impuls-workshops'],
      ['Weiterbildungs-Kompass des DLH', 'https://dlh.zh.ch/home/wb-kompass'],
      ['Künstliche Intelligenz in der Volksschule · Kanton Zürich', 'https://www.zh.ch/de/bildung/informationen-fuer-schulen/informationen-volksschule/volksschule-schulinfo-unterricht/kuenstliche-intelligenz.html'],
      ['Educafé September · Edubase', 'https://www.edubase.ch/edubase/events/event/educafe-september'],
    ],
  },
];

function LinkList({ links }: { links: string[][] }) {
  return (
    <ul className="source-links">
      {links.map(([label, href]) => (
        <li key={href}>
          <a href={href} target="_blank" rel="noreferrer">
            {label}
            <ExternalLink aria-hidden="true" size={16} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function CoreExampleAccordion() {
  return (
    <div className="content-accordion">
      {coreExamples.map((example, index) => (
        <details key={example.value} className="accordion-item" open={index === 0}>
          <summary className="accordion-trigger" aria-label={`Details zu ${example.title} aufklappen`}>
            <span>
              <strong>{example.title}</strong>
              <small>{example.meta}</small>
            </span>
          </summary>
          <div className="accordion-content">
            <div className="example-detail-grid">
              <div>
                <h4>Herkömmliche Aufgabenstellung</h4>
                <p>{example.before}</p>
              </div>
              <div>
                <h4>Umbau</h4>
                <p>{example.after}</p>
                {example.tools ? (
                  <div className="example-tools">
                    {example.toolsLabel ? <small>{example.toolsLabel}</small> : null}
                    {example.tools.map((tool) => (
                      <a href={tool.href} target="_blank" rel="noreferrer" key={tool.href}>
                        {tool.label}
                        <ExternalLink aria-hidden="true" size={14} />
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
              <div>
                <h4>Sichtbarer Lernnachweis</h4>
                <p>{example.trace}</p>
                {example.resource ? (
                  <div className="example-resource">
                    <a
                      href={example.resource.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${example.resource.label} (öffnet in neuem Tab)`}
                    >
                      {example.resource.label}
                      <ExternalLink aria-hidden="true" size={16} />
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}

export function SubjectIdeaAccordion() {
  return (
    <div className="content-accordion compact-accordion">
      {subjectIdeas.map((idea) => (
        <details key={idea.value} className="accordion-item">
          <summary className="accordion-trigger"><strong>{idea.title}</strong></summary>
          <div className="accordion-content">
            <p><strong>Aufgabe:</strong> {idea.task}</p>
            <p><strong>Menschliches Urteil:</strong> {idea.judgment}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

export function SourceAccordion() {
  return (
    <div className="content-accordion source-accordion">
      {sources.map((group, index) => (
        <details key={group.value} className="accordion-item" open={index === 0}>
          <summary className="accordion-trigger"><strong>{group.title}</strong></summary>
          <div className="accordion-content"><LinkList links={group.links} /></div>
        </details>
      ))}
    </div>
  );
}
