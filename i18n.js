/* ===========================
   LOTUS-IT — i18n v1
   DE / EN language switcher
   =========================== */

const TRANSLATIONS = {
  de: {
    /* Navigation */
    'nav.leistungen': 'Leistungen',
    'nav.preise':     'Preise',
    'nav.prozess':    'Prozess',
    'nav.ueber':      'Über uns',
    'nav.cta':        'Kontakt',

    /* Hero */
    'hero.badge': 'Application Support · Debugging · Prozessautomatisierung',
    'hero.h1':    'Weniger Tickets.<br />Schnellere Fehleranalyse.<br /><em>Stabilere Systeme.</em>',
    'hero.sub':   'Ich analysiere echte Logdaten, finde Fehlerursachen schnell und automatisiere wiederkehrende Aufgaben – damit Ihr Support entlastet wird und Ihre Anwendungen zuverlässig laufen.',
    'hero.cta1':  'Leistungen entdecken',
    'hero.cta2':  'Kontakt aufnehmen',
    'hero.chip1': 'Weniger wiederkehrende Tickets',
    'hero.chip2': 'Schnellere Fehlerursachenanalyse',
    'hero.chip3': 'Stabilere, planbare Systeme',
    'hero.spotlight.aria': 'Weitere Leistungen',
    'hero.spotlight.eyebrow': 'Weitere Leistungen',
    'hero.spotlight.title': 'Einfach online sichtbar und verkaufsbereit',
    'hero.spotlight.intro': 'Wir erstellen für Sie eine starke Webseite oder einen funktionierenden Webshop - klar, verständlich und auf Ihr Geschäft zugeschnitten.',
    'hero.spotlight.card1.title': 'Webseitenerstellung',
    'hero.spotlight.card1.copy': 'Wir bauen Ihre Webseite so, dass Interessenten schnell verstehen, was Sie anbieten.',
    'hero.spotlight.card2.title': 'Webshoperstellung',
    'hero.spotlight.card2.copy': 'Wir richten Ihren Shop so ein, dass Kunden einfach kaufen und sicher bezahlen können.',

    /* Stats */
    'stat.1': 'Maßgeschneidert',
    'stat.2': 'Kernkompetenzen',
    'stat.3': 'Skalierbarkeit',
    'stat.4': 'Support & Betreuung',

    /* Services section header */
    'svc.tag': 'Leistungen',
    'svc.h2':  'Drei Kernbereiche, ein klares Ziel: weniger Aufwand, schnellere Lösungen',
    'svc.sub': 'Ich übernehme dort, wo Standard-Support an Grenzen stößt – mit konkreten technischen Ergebnissen statt Beratungsfolien.',

    /* Service card 1 – Prozessautomatisierung */
    'svc1.h3':   'Prozessautomatisierung',
    'svc1.p':    'Ich automatisiere wiederkehrende Aufgaben wie Ticketbearbeitung oder Datenverarbeitung und reduziere manuellen Aufwand deutlich.',
    'svc1.li1':  'APIs & Schnittstellen verbinden',
    'svc1.li2':  'Workflows end-to-end automatisieren',
    'svc1.li3':  'Tool-Integration (Ticketing, ERP, CRM)',
    'svc1.li4':  'Messbar weniger manueller Aufwand',
    'svc.more':  'Mehr erfahren →',
    'svc1.link': 'Anfrage stellen →',

    /* Service card 2 – Systemanalyse & Debugging */
    'svc2.h3':   'Systemanalyse & Debugging',
    'svc2.p':    'Ich analysiere echte Logdaten, finde Fehlerursachen schnell und beseitige Performance-Probleme – damit Sie nicht länger im Nebel suchen.',
    'svc2.li1':  'Log-Analyse mit reproduzierbaren Befunden',
    'svc2.li2':  'Fehlerursachenanalyse statt Symptombehandlung',
    'svc2.li3':  'Performance-Optimierung mit Messwerten',
    'svc2.li4':  'Klare Dokumentation jedes Befunds',
    'svc2.li5':  '',
    'svc2.link': 'Anfrage stellen →',

    /* Service card 3 – Application Support (2nd-Level+) */
    'svc3.h3':   'Application Support (2nd-Level+)',
    'svc3.p':    'Ich übernehme komplexe technische Probleme, die der 1st-Level-Support nicht abschließend lösen kann – inklusive Schnittstellen-Fehler und nachhaltiger Systemstabilisierung.',
    'svc3.li1':  'Komplexe technische Probleme lösen',
    'svc3.li2':  'Schnittstellen-Fehler isolieren und beheben',
    'svc3.li3':  'Systemstabilisierung statt wiederholter Eingriffe',
    'svc3.li4':  'Sauber dokumentierte Lösungen statt Workarounds',
    'svc3.li5':  '',
    'svc3.link': 'Anfrage stellen →',

    /* Pricing */
    'pricing.tag': 'Einstiegspakete',
    'pricing.h2':  'Klare Startpakete – transparent kalkuliert',
    'pricing.sub': 'Drei Einstiegspakete für einen schnellen, planbaren Start. Individuelle Projektlösungen sind jederzeit möglich.',
    'p1.h3':  'Startpaket: Festpreis-Projekt',
    'p1.sub': 'Einstiegspaket für klar abgrenzbare Vorhaben – etwa eine erste Automatisierung oder ein konkreter Fix.',
    'p1.li1': 'Fixer Preis nach Briefing',
    'p1.li2': 'Klares Leistungsversprechen',
    'p1.li3': 'Automatisierung oder gezielter Fix',
    'p1.li4': 'Schriftlicher Befund inklusive',
    'p1.li5': 'Abnahme nach Ihren Kriterien',
    'p1.cta': 'Projekt anfragen',
    'p2.h3':  'Startpaket: Application Support',
    'p2.sub': 'Festes monatliches Kontingent – fester Ansprechpartner für Eskalationen, Debugging und Stabilisierung.',
    'p2.li1': '5–20 h/Monat wählbar',
    'p2.li2': 'Günstigerer Stundensatz',
    'p2.li3': 'Vorrang bei Eskalationen',
    'p2.li4': '2nd-Level+ Application Support',
    'p2.li5': 'Log-Reviews & Stabilisierung',
    'p2.li6': 'Monatliches Status-Update',
    'p2.cta': 'Support-Paket anfragen',
    'p3.h3':  'Startpaket: System-Analyse',
    'p3.sub': 'Erste technische Bestandsaufnahme – Logdaten, Engpässe, Quick Wins.',
    'p3.li1': 'Sichtung echter Logdaten',
    'p3.li2': 'Identifikation wiederkehrender Tickets',
    'p3.li3': 'Priorisierte Quick Wins',
    'p3.li4': 'Schriftlicher Befund mit Empfehlung',
    'p3.li5': 'Remote oder vor Ort',
    'p3.cta': 'Analyse anfragen',
    'ps.label': '// Hinweis',
    'ps.title': 'Individuelle Projektlösungen',
    'ps.sub':   'Jenseits der Startpakete',
    'ps.price': 'nach Aufwand',
    'ps.desc':  'Für größere Vorhaben – etwa Migrationen, dauerhafte Integrationen oder mehrstufige Automatisierungen – erstelle ich ein individuelles Angebot auf Basis Ihrer Anforderungen.',

    /* KMU / Approach */
    'kmu.tag': 'Unser Ansatz',
    'kmu.h2':  'IT auf Augenhöhe –<br />direkt, verlässlich, individuell',
    'kmu.sub': 'Wer eine verlässliche digitale Lösung sucht, ist bei uns richtig. Individuelle Lösungen statt Standardverträge.',
    'kmu1.h3': 'Kein "Zwischenhändler"',
    'kmu1.p':  'Sie sprechen direkt mit dem Experten, der Ihr Projekt umsetzt – nicht mit einem Account-Manager, der weiterleitet.',
    'kmu2.h3': 'Budgetgerechte Lösungen',
    'kmu2.p':  'Wir skalieren Umfang und Technologie auf Ihre Möglichkeiten – ohne Abstriche bei Qualität und Sicherheit.',
    'kmu3.h3': 'Schnelle Reaktionszeiten',
    'kmu3.p':  'Kein Ticket-Ping-Pong. Bei dringenden Problemen erhalten Sie eine direkte, schnelle Antwort – immer vom selben Ansprechpartner.',
    'kmu4.h3': 'Echte Daten statt Annahmen',
    'kmu4.p':  'Befunde entstehen aus echten Logs, Tickets und Messwerten – nicht aus Vermutungen. So wird klar, wo der Hebel wirklich liegt.',
    'kmu5.h3': 'Messbare Ergebnisse',
    'kmu5.p':  'Vor und nach der Umsetzung wird gemessen – weniger Tickets, kürzere Analysezeiten, planbarere Releases. Sie sehen schwarz auf weiß, was die Investition gebracht hat.',
    'kmu6.h3': 'Langfristige Partnerschaft',
    'kmu6.p':  'Kein Verschwinden nach dem Launch. Wir bleiben als verlässlicher Partner an Ihrer Seite – für Wartung, Weiterentwicklung und neue Ideen.',

    /* Process */
    'proc.tag': 'Prozess',
    'proc.h2':  'Vom Logfile zum stabilen System',
    'proc.sub': 'Konkrete technische Schritte statt Beratungsphasen. Vom ersten Logfile bis zum nachweislich entlasteten Support – jeder Schritt ist nachvollziehbar dokumentiert.',
    'proc.cta': 'Jetzt System analysieren lassen',
    'git1.msg':  'Analyse echter Logdaten',
    'git1.desc': 'Ich nehme Ihre realen Log- und Ticketdaten unter die Lupe – keine Folien, keine Hypothesen.',
    'git1.tag1': 'echte Daten',
    'git1.tag2': 'remote / vor Ort',
    'git2.msg':  'Fehlerursache & Hypothese',
    'git2.desc': 'Klar dokumentierte Root Cause statt Symptombehandlung – mit nachvollziehbarem Beleg aus den Logs.',
    'git2.tag1': 'Root Cause',
    'git2.tag2': 'Dokumentiert',
    'git3.msg':  'Proof-of-Concept',
    'git3.desc': 'Lauffähiger PoC innerhalb von 5–10 Tagen – mit echten Daten am realen System.',
    'git3.tag1': '5–10 Tage',
    'git3.tag2': 'echtes System',
    'git4.msg':  'Umsetzung & Integration',
    'git4.desc': 'Fix, Automatisierung oder Integration im Zielsystem – versioniert, dokumentiert, nachvollziehbar.',
    'git5.msg':  'Stabilisierung & Messung',
    'git5.desc': 'Messbar weniger Tickets, kürzere Analysezeiten, planbarere Releases – mit Vorher/Nachher-Vergleich.',

    /* About */
    'about.tag':             'Über uns',
    'about.h2':              'Technik aus zwei Welten – zu Ihrem Vorteil',
    'about.p1':              '<strong>Ich verbinde praktisches Technikverständnis aus der Instandhaltung mit moderner Softwareentwicklung und Automatisierung.</strong> Das heißt: Ich kenne reale Ausfallmuster, weiss wie Maschinen, Anlagen und Prozesse in der Praxis kippen – und ich kann diese Probleme messbar in Software, Schnittstellen und Workflows lösen.',
    'about.v1.title':        'Praxisbezug',
    'about.v1.text':         'Hintergrund Instandhaltung – reale Ausfall- und Fehlermuster verstanden',
    'about.v2.title':        'Softwarekompetenz',
    'about.v2.text':         'Moderne Entwicklung, Automatisierung, Integration – ISTQB-zertifiziert',
    'about.v3.title':        'Ergebnisorientiert',
    'about.v3.text':         'Weniger Tickets, schnellere Analysen, stabilere Systeme – messbar',
    'about.terminal.comment': '// Bereit für Ihr Projekt.',
    'about.terminal.status':  'verfügbar',
    'about.terminal.ansatz':  'inhabergeführt',
    'about.t.k1': 'unternehmen',
    'about.t.k2': 'inhaber',
    'about.t.k3': 'ansatz',
    'about.t.k4': 'leistungen',
    'about.t.k5': 'reaktionszeit',
    'about.t.v1': 'Prozessautomatisierung',
    'about.t.v2': 'Systemanalyse & Debugging',
    'about.t.v3': 'Application Support (2nd-Level+)',

    /* FAQ */
    'faq.tag': 'FAQ',
    'faq.h2':  'Häufige Fragen',
    'faq.sub': 'Antworten auf die Fragen, die uns am häufigsten erreichen.',
    'faq1.q': 'Wie läuft eine Zusammenarbeit ab?',
    'faq1.a': 'Erst kurzes Gespräch, dann Sichtung echter Logdaten oder Tickets. Daraus entsteht ein konkreter Befund mit priorisierten nächsten Schritten – keine Folien, kein langer Beratungsprozess.',
    'faq2.q': 'Wie schnell gibt es einen ersten Befund?',
    'faq2.a': 'Bei abgegrenzten Fällen meist innerhalb weniger Tage. Sie bekommen einen schriftlichen Befund mit Zeitachse, betroffenen Komponenten und Empfehlung.',
    'faq3.q': 'Welche Daten brauchen Sie für eine Analyse?',
    'faq3.a': 'In der Regel Anwendungs- und Systemlogs vom Zeitraum eines Vorfalls plus optional Tickethistorie. Sensible Felder können vorab maskiert werden.',
    'faq4.q': 'Arbeiten Sie mit unserem bestehenden Support-Team zusammen?',
    'faq4.a': 'Ja. Ich docke an Ihren Eskalationsprozess an, übernehme abgegrenzte 2nd-Level+-Fälle und gebe nachvollziehbare Lösungen zurück – inklusive Wissenstransfer.',
    'faq5.q': 'Bieten Sie auch laufende Betreuung an?',
    'faq5.a': 'Ja, im Rahmen des Application-Support-Startpakets. Sie haben damit ein festes monatliches Stundenkontingent und Vorrang bei Eskalationen.',

    /* Contact */
    'contact.tag':      'Kontakt',
    'contact.h2':       'Reduzieren Sie Ihren Supportaufwand',
    'contact.sub':      'Lassen Sie uns Ihr System analysieren – ich melde mich innerhalb von 24 Stunden mit konkreten nächsten Schritten.',
    'form.name':        'Name',
    'form.email':       'E-Mail',
    'form.service':     'Leistung',
    'form.opt.placeholder': 'Auswählen…',
    'form.opt.software':    'Prozessautomatisierung',
    'form.opt.ki':          'Systemanalyse & Debugging',
    'form.opt.security':    'Application Support (2nd-Level+)',
    'form.opt.other':       'Sonstiges',
    'form.message':         'Nachricht',
    'form.msg.placeholder': 'Beschreiben Sie Ihr Vorhaben…',
    'form.submit':          'Nachricht senden',
    'form.privacy':         'Ihre Daten werden vertraulich behandelt.',
    'form.success':         'Ihre Nachricht wurde übermittelt. Wir melden uns zeitnah.',
    'info.h4':              'Direkter Kontakt',
    'info.email':           'E-Mail',
    'info.location':        'Standort',
    'info.response':        'Antwortzeit',
    'info.response.val':    'Innerhalb von 24 Stunden',
    'info.free.h4':         'Erstes Gespräch kostenlos',
    'info.free.p':          'Kurzes, unverbindliches Erstgespräch – ich sichte mit Ihnen einen konkreten Vorfall oder Schmerzpunkt und schlage einen pragmatischen nächsten Schritt vor.',

    /* Footer */
    'footer.tagline':   'Application Support · Systemanalyse & Debugging · Prozessautomatisierung',
    'footer.services':  'Leistungen',
    'footer.process':   'Prozess',
    'footer.about':     'Über uns',
    'footer.contact':   'Kontakt',
    'footer.tools':     'Sicherheitstools',
    'footer.datenschutz': 'Datenschutz',
    'footer.impressum': 'Impressum',
    'footer.copy':      '© 2026 Lotus IT-Services · Alle Rechte vorbehalten',
    'legal.privacy.title': 'Datenschutzerklärung',
    'legal.privacy.body': `<div class="imp-section">
          <strong>1. Verantwortlicher</strong>
          <p>
            Lotus IT-Services<br />
            Inh. Helge Meier<br />
            c/o <br />
            Falk Fehlandt <br />
            Kochstraße 15 <br />
            04275 Leipzig<br />
            Telefon: <a href="tel:+4964528024680">06452 8024680</a><br />
            E-Mail: <a href="mailto:contact@lotus-it.eu">contact@lotus-it.eu</a>
          </p>
        </div>

        <div class="imp-section">
          <strong>2. Allgemeines zur Datenverarbeitung</strong>
          <p>Diese Webseite wird als statische HTML-Seite betrieben. Es werden <strong>keine Cookies</strong> gesetzt, <strong>keine Tracking- oder Analysedienste</strong> eingebunden und <strong>keine Daten an Drittanbieter</strong> übermittelt. Die Schriftarten (Inter, Sora) werden lokal von unserem Server geladen – es findet keine Verbindung zu Google oder anderen externen Diensten statt.</p>
        </div>

        <div class="imp-section">
          <strong>3. Hosting &amp; Server-Logfiles</strong>
          <p>Unser Hosting-Provider erhebt in Server-Logfiles folgende Daten, die Ihr Browser automatisch übermittelt:</p>
          <ul>
            <li>IP-Adresse (anonymisiert oder gekürzt, sofern vom Provider unterstützt)</li>
            <li>Datum und Uhrzeit der Anfrage</li>
            <li>Aufgerufene Seite / Datei</li>
            <li>HTTP-Statuscode</li>
            <li>Übertragene Datenmenge</li>
            <li>Referrer-URL</li>
            <li>Browser und Betriebssystem</li>
          </ul>
          <p>Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung mit anderen Datenquellen findet nicht statt. Die Verarbeitung erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> (berechtigtes Interesse an der sicheren und stabilen Bereitstellung der Webseite).</p>
        </div>

        <div class="imp-section">
          <strong>4. Kontaktformular</strong>
          <p>Wenn Sie uns über das Kontaktformular eine Nachricht senden, werden die von Ihnen eingegebenen Daten (Name, E-Mail-Adresse, Nachricht, ggf. gewählte Leistung) zum Zweck der Bearbeitung Ihrer Anfrage verarbeitet. Rechtsgrundlage ist <strong>Art. 6 Abs. 1 lit. b DSGVO</strong> (vorvertragliche Maßnahmen) bzw. <strong>Art. 6 Abs. 1 lit. f DSGVO</strong> (berechtigtes Interesse an der Beantwortung Ihrer Anfrage). Ihre Daten werden nach abschließender Bearbeitung gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>
        </div>

        <div class="imp-section">
          <strong>5. Lokale Speicherung (localStorage)</strong>
          <p>Diese Webseite speichert Ihre <strong>Sprachauswahl</strong> (Deutsch / Englisch) im localStorage Ihres Browsers. Dies ist eine rein technische Funktion, die Ihren Komfort beim erneuten Besuch der Seite gewährleistet. Es werden keine personenbezogenen Daten gespeichert. Die Speicherung erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>. Sie können den localStorage jederzeit über die Browsereinstellungen löschen.</p>
        </div>

        <div class="imp-section">
          <strong>6. Keine Weitergabe an Dritte</strong>
          <p>Eine Weitergabe personenbezogener Daten an Dritte erfolgt nicht, es sei denn, dies ist zur Vertragserfüllung erforderlich oder es besteht eine gesetzliche Verpflichtung.</p>
        </div>

        <div class="imp-section">
          <strong>7. Ihre Rechte</strong>
          <p>Sie haben jederzeit das Recht auf:</p>
          <ul>
            <li><strong>Auskunft</strong> über die bei uns gespeicherten Daten (Art. 15 DSGVO)</li>
            <li><strong>Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)</li>
            <li><strong>Löschung</strong> Ihrer Daten (Art. 17 DSGVO)</li>
            <li><strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
            <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
            <li><strong>Widerspruch</strong> gegen die Verarbeitung (Art. 21 DSGVO)</li>
          </ul>
          <p>Zur Ausübung Ihrer Rechte genügt eine E-Mail an <a href="mailto:contact@lotus-it.eu">contact@lotus-it.eu</a>.</p>
        </div>

        <div class="imp-section">
          <strong>8. Beschwerderecht</strong>
          <p>Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Die für Hessen zuständige Behörde ist:</p>
          <p>
            Der Hessische Beauftragte für Datenschutz und Informationsfreiheit<br />
            Postfach 3163, 65021 Wiesbaden<br />
            <a href="https://datenschutz.hessen.de" target="_blank" rel="noopener noreferrer">https://datenschutz.hessen.de</a>
          </p>
        </div>

        <div class="imp-section">
          <strong>9. Aktualität dieser Erklärung</strong>
          <p>Stand: April 2026. Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht.</p>
        </div>`,
    'legal.imprint.title': 'Impressum',
    'legal.imprint.body': `<div class="imp-section">
          <strong>Angaben gemäß § 5 TMG</strong>
          <p>
            Lotus IT-Services<br />
            Inh. Helge Meier <br />
            c/o <br />
            Falk Fehlandt <br />
            Kochstraße 15 <br />
            04275 Leipzig <br />
            Deutschland
          </p>
        </div>

        <div class="imp-section">
          <strong>Kontakt</strong>
          <p>
            Telefon: <a href="tel:+4964528024680">06452 8024680</a><br />
            E-Mail: <a href="mailto:contact@lotus-it.eu">contact@lotus-it.eu</a>
          </p>
        </div>

        <div class="imp-section">
          <strong>Umsatzsteuer</strong>
          <p>Gemäß § 19 UStG (Kleinunternehmerregelung) wird keine Umsatzsteuer ausgewiesen.</p>
        </div>

        <div class="imp-section">
          <strong>Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV</strong>
          <p>
            Helge Meier<br />
            c/o <br />
            Falk Fehlandt <br />
            Kochstraße 15 <br />
            04275 Leipzig <br />
          </p>
        </div>

        <div class="imp-section">
          <strong>EU-Streitschlichtung</strong>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a><br />
            Unsere E-Mail-Adresse finden Sie im Abschnitt „Kontakt" oben.
          </p>
        </div>

        <div class="imp-section">
          <strong>Verbraucherstreitbeilegung (VSBG)</strong>
          <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </div>`,

    /* Pricing extras */
    'pricing.badge':     'Empfohlen',
    'pricing.onrequest': 'Auf Anfrage',
    'form.name.ph':      'Max Mustermann',
    'form.email.ph':     'max@firma.de',

    /* Modal: Prozessautomatisierung */
    'msw.title':        'Prozessautomatisierung',
    'msw.sub':          'Wiederkehrende Aufgaben automatisieren – weniger manueller Aufwand, weniger Fehler, schnellere Durchlaufzeiten.',
    'msw.s1.h':         '⚡ Konkrete Ergebnisse statt Beratungsfolien',
    'msw.s1.p':         'Ich automatisiere wiederkehrende Aufgaben wie Ticketbearbeitung, Datenabgleiche oder Reports – am Ende steht ein lauffähiges Skript, eine Schnittstelle oder ein Workflow. Kein PowerPoint, sondern messbar weniger manueller Aufwand.',
    'msw.s1.hl.title':  'Beispiele aus der Praxis',
    'msw.s1.hl.text':   'Ticket-Klassifizierung · Datenabgleich zwischen Systemen · automatisierte Reports',
    'msw.s2.h':         '🔌 APIs, Workflows & Tool-Integration',
    'msw.s2.p':         'Ich verbinde bestehende Tools (Ticketing, ERP, CRM, Mail, Datenbanken) über deren APIs und automatisiere ganze Workflows end-to-end. Sie behalten Ihre Systeme – ich beseitige die Lücken dazwischen.',
    'msw.s3.h':         '📊 Messbar weniger Aufwand',
    'msw.s3.p':         'Vor jeder Automatisierung legen wir konkrete Kennzahlen fest (z. B. Bearbeitungszeit pro Vorgang, Tickets pro Tag). Nach dem Roll-out gibt es einen schriftlichen Vorher/Nachher-Vergleich – Sie sehen, was die Investition gebracht hat.',
    'msw.faq.h':        'Häufige Fragen',
    'msw.faq1.q':       'Für welche Aufgaben lohnt sich Automatisierung?',
    'msw.faq1.a':       'Immer dann, wenn dieselbe Aufgabe regelmäßig manuell erledigt wird: Tickets sortieren, Daten zwischen Tools übertragen, Reports erzeugen, Stamm- oder Statusdaten pflegen. Faustregel: Wenn etwas mehrmals pro Woche manuell passiert, ist es ein Kandidat.',
    'msw.faq2.q':       'Funktioniert das auch ohne komplette Tool-Umstellung?',
    'msw.faq2.a':       'Ja. Ich integriere Ihre bestehenden Systeme über deren APIs – ohne Migration und ohne Lock-in in eine neue Plattform.',
    'msw.faq3.q':       'Wie wird der Erfolg gemessen?',
    'msw.faq3.a':       'Vorab definieren wir konkrete Kennzahlen – z. B. manuelle Bearbeitungszeit pro Vorgang oder Tickets pro Tag im 1st-Level. Nach dem Roll-out gibt es einen Vergleich vorher/nachher.',
    'msw.cta':          'Automatisierung anfragen →',

    /* Modal: Systemanalyse & Debugging */
    'mki.title':        'Systemanalyse & Debugging',
    'mki.sub':          'Echte Logdaten, echte Befunde – schnellere Fehleranalyse statt Rätselraten.',
    'mki.s1.h':         '🔎 Log-Analyse mit reproduzierbaren Befunden',
    'mki.s1.p':         'Ich analysiere echte Anwendungs- und Systemlogs – idealerweise vom Zeitraum eines konkreten Vorfalls. Aus Logs, Traces und Tickets entsteht ein nachvollziehbarer Befund mit Zeitachse, betroffenen Komponenten und konkreter Empfehlung.',
    'mki.s1.hl.title':  'Klarer Befund pro Vorfall',
    'mki.s1.hl.text':   'Korrelation · Zeitachse · betroffene Komponenten · Reproduktionsschritte',
    'mki.s2.h':         '🤯 Fehlerursachenanalyse statt Symptombehandlung',
    'mki.s2.p':         'Wenn ein Fehler immer wieder auftritt, hat das einen Grund. Ich suche die Root Cause – nicht den nächsten Workaround. Das Ergebnis ist ein klar dokumentierter Befund, der entscheidet, ob ein Fix, eine Konfiguration oder eine Architekturänderung nötig ist.',
    'mki.s3.h':         '⚡ Performance-Optimierung mit Messwerten',
    'mki.s3.p':         'Bei langsamen Systemen messe ich, statt zu raten: konkrete Antwortzeiten, Engpässe in DB / Netz / Anwendung, Lastverhalten. Optimierungen werden vor und nach der Umsetzung gemessen, damit Verbesserungen nachvollziehbar bleiben.',
    'mki.faq.h':        'Häufige Fragen',
    'mki.faq1.q':       'Welche Daten brauchen Sie für eine Analyse?',
    'mki.faq1.a':       'In den meisten Fällen Anwendungs- und Systemlogs (Application, Webserver, DB, ggf. Container). Idealerweise vom Zeitraum eines konkreten Vorfalls. Sensible Felder können vorab maskiert werden.',
    'mki.faq2.q':       'Wie schnell gibt es einen ersten Befund?',
    'mki.faq2.a':       'Bei abgegrenzten Vorfällen oft innerhalb weniger Tage. Sie bekommen einen schriftlichen Befund mit Zeitachse, betroffenen Komponenten und konkreter Empfehlung.',
    'mki.faq3.q':       'Wird der Fehler dann auch behoben?',
    'mki.faq3.a':       'Auf Wunsch ja. Aus dem Befund wird direkt die Umsetzung – als Fix, Patch oder dauerhafte Stabilisierung im Application-Support-Paket.',
    'mki.cta':          'System analysieren lassen →',

    /* Modal: Application Support (2nd-Level+) */
    'msec.title':       'Application Support (2nd-Level+)',
    'msec.sub':         'Wenn 1st-Level nicht weiterkommt: komplexe technische Probleme, Schnittstellen-Fehler und Systemstabilisierung – nachvollziehbar gelöst.',
    'msec.s1.h':        '🧩 Komplexe technische Probleme',
    'msec.s1.p':        'Ich übernehme Fälle, die der 1st-Level-Support nicht abschließend lösen kann – sporadische Ausfälle, undokumentierte Altsysteme, Fehler über mehrere Komponenten hinweg. Sie bekommen eine reproduzierbare Lösung, kein "Neustart hilft meistens".',
    'msec.s1.hl.title': 'Typische Fälle',
    'msec.s1.hl.text':  'Wiederkehrende Fehler · unklare Eskalationen · undokumentierte Altsysteme · sporadische Ausfälle',
    'msec.s2.h':        '🔗 Schnittstellen-Fehler isolieren',
    'msec.s2.p':        'Schnittstellen sind die häufigste Stelle, an der Daten verloren gehen oder Systeme „aussteigen". Ich finde heraus, ob Quelle, Transport oder Zielsystem die Ursache ist – mit Logs, Trace-Aufzeichnungen und reproduzierbaren Tests statt Vermutungen.',
    'msec.s2.hl.title': 'Vorgehen',
    'msec.s2.hl.text':  'Request/Response analysieren · Daten am Bruchpunkt vergleichen · klaren Fix dokumentieren',
    'msec.s3.h':        '🛠️ Systemstabilisierung statt Workaround',
    'msec.s3.p':        'Wenn dieselbe Störung immer wieder auftritt, ist der Workaround nicht die Lösung. Ich beseitige die Ursache – sei es ein Konfigurationsproblem, eine Race Condition, eine fehlende Validierung oder ein Architekturthema – damit Tickets dauerhaft ausbleiben.',
    'msec.faq.h':       'Häufige Fragen',
    'msec.faq1.q':      'Ab wann ist ein Fall ein Fall für 2nd-Level+?',
    'msec.faq1.a':      'Sobald ein Standard-Skript oder eine Wissensdatenbank-Antwort nicht mehr ausreicht. Typisch: mehrere Systeme beteiligt, sporadisches Auftreten, oder ein bekannter Workaround, der die Ursache nicht löst.',
    'msec.faq2.q':      'Arbeiten Sie mit unserem bestehenden Support-Team zusammen?',
    'msec.faq2.a':      'Ja. Ich docke direkt an Ihr Ticketsystem oder Eskalationsprozess an, übernehme abgegrenzte Fälle und gebe nachvollziehbare Lösungen zurück, die Ihr Team beim nächsten Mal selbst anwenden kann.',
    'msec.faq3.q':      'Bieten Sie auch laufenden Support an?',
    'msec.faq3.a':      'Ja, im Rahmen eines Support-Startpakets (Retainer). Sie haben damit Vorrang bei Eskalationen und ein festes Stunden-Kontingent pro Monat.',
    'msec.cta':         'Eskalation anfragen →',
  },

  en: {
    /* Navigation */
    'nav.leistungen': 'Services',
    'nav.preise':     'Pricing',
    'nav.prozess':    'Process',
    'nav.ueber':      'About',
    'nav.cta':        'Contact',

    /* Hero */
    'hero.badge': 'Application Support · Debugging · Process Automation',
    'hero.h1':    'Fewer tickets.<br />Faster root-cause analysis.<br /><em>More stable systems.</em>',
    'hero.sub':   'I analyse real log data, identify root causes quickly, and automate repetitive tasks – so your support team is freed up and your applications run reliably.',
    'hero.cta1':  'Explore services',
    'hero.cta2':  'Get in touch',
    'hero.chip1': 'Fewer recurring tickets',
    'hero.chip2': 'Faster root-cause analysis',
    'hero.chip3': 'More stable, predictable systems',
    'hero.spotlight.aria': 'Additional services',
    'hero.spotlight.eyebrow': 'Additional services',
    'hero.spotlight.title': 'Get visible online and ready to sell',
    'hero.spotlight.intro': 'We create a strong website or a functional web shop for you - clear, understandable and tailored to your business.',
    'hero.spotlight.card1.title': 'Website creation',
    'hero.spotlight.card1.copy': 'We build your website so that prospects quickly understand what you offer.',
    'hero.spotlight.card2.title': 'Web shop creation',
    'hero.spotlight.card2.copy': 'We set up your shop so that customers can buy easily and pay securely.',

    /* Stats */
    'stat.1': 'Custom-built',
    'stat.2': 'Core competencies',
    'stat.3': 'Scalability',
    'stat.4': 'Support & Care',

    /* Services section header */
    'svc.tag': 'Services',
    'svc.h2':  'Three core services, one clear goal: less effort, faster solutions',
    'svc.sub': 'I step in where standard support hits its limits – with concrete technical results instead of consulting slides.',

    /* Service card 1 – Process Automation */
    'svc1.h3':   'Process Automation',
    'svc1.p':    'I automate repetitive tasks such as ticket handling or data processing and noticeably reduce manual effort.',
    'svc1.li1':  'Connect APIs & interfaces',
    'svc1.li2':  'Automate workflows end-to-end',
    'svc1.li3':  'Tool integration (ticketing, ERP, CRM)',
    'svc1.li4':  'Measurably less manual effort',
    'svc.more':  'Learn more →',
    'svc1.link': 'Request →',

    /* Service card 2 – System Analysis & Debugging */
    'svc2.h3':   'System Analysis & Debugging',
    'svc2.p':    'I analyse real log data, find root causes quickly and remove performance bottlenecks – so you no longer have to grope in the dark.',
    'svc2.li1':  'Log analysis with reproducible findings',
    'svc2.li2':  'Root-cause analysis instead of symptom treatment',
    'svc2.li3':  'Performance optimisation with measurements',
    'svc2.li4':  'Clear documentation of every finding',
    'svc2.li5':  '',
    'svc2.link': 'Request →',

    /* Service card 3 – Application Support (2nd-Level+) */
    'svc3.h3':   'Application Support (2nd-Level+)',
    'svc3.p':    'I take on complex technical issues that 1st-level support cannot fully solve – including interface failures and lasting system stabilisation.',
    'svc3.li1':  'Solve complex technical issues',
    'svc3.li2':  'Isolate and fix interface failures',
    'svc3.li3':  'System stabilisation instead of repeated fire-fighting',
    'svc3.li4':  'Clearly documented solutions instead of workarounds',
    'svc3.li5':  '',
    'svc3.link': 'Request →',

    /* Pricing */
    'pricing.tag': 'Starter packages',
    'pricing.h2':  'Clear starter packages – transparently priced',
    'pricing.sub': 'Three starter packages for a fast, predictable beginning. Custom project solutions are always possible.',
    'p1.h3':  'Starter: Fixed-Price Project',
    'p1.sub': 'Entry package for clearly scoped projects – e.g. a first automation or a targeted fix.',
    'p1.li1': 'Fixed price after briefing',
    'p1.li2': 'Clear deliverables',
    'p1.li3': 'Automation or targeted fix',
    'p1.li4': 'Written report included',
    'p1.li5': 'Acceptance on your terms',
    'p1.cta': 'Request project',
    'p2.h3':  'Starter: Application Support',
    'p2.sub': 'Fixed monthly hours – a dedicated contact for escalations, debugging and stabilisation.',
    'p2.li1': '5–20 h/month selectable',
    'p2.li2': 'Reduced hourly rate',
    'p2.li3': 'Priority on escalations',
    'p2.li4': '2nd-Level+ application support',
    'p2.li5': 'Log reviews & stabilisation',
    'p2.li6': 'Monthly status update',
    'p2.cta': 'Request support',
    'p3.h3':  'Starter: System Analysis',
    'p3.sub': 'A first technical assessment – log data, bottlenecks, quick wins.',
    'p3.li1': 'Review of real log data',
    'p3.li2': 'Identification of recurring tickets',
    'p3.li3': 'Prioritised quick wins',
    'p3.li4': 'Written report with recommendation',
    'p3.li5': 'Remote or on-site',
    'p3.cta': 'Request analysis',
    'ps.label': '// Note',
    'ps.title': 'Custom project solutions',
    'ps.sub':   'Beyond the starter packages',
    'ps.price': 'on request',
    'ps.desc':  'For larger initiatives – such as migrations, lasting integrations or multi-stage automations – I provide an individual proposal based on your requirements.',

    /* KMU / Approach */
    'kmu.tag': 'Our Approach',
    'kmu.h2':  'IT at eye level –<br />direct, reliable, individual',
    'kmu.sub': 'Anyone seeking a reliable digital solution is in the right place. Tailored solutions instead of standard contracts.',
    'kmu1.h3': 'No "middlemen"',
    'kmu1.p':  'You speak directly with the expert implementing your project – not an account manager who just forwards things.',
    'kmu2.h3': 'Budget-friendly solutions',
    'kmu2.p':  'We scale scope and technology to your budget – without compromising on quality or security.',
    'kmu3.h3': 'Fast response times',
    'kmu3.p':  'No ticket ping-pong. For urgent issues you get a direct, fast response – always from the same contact.',
    'kmu4.h3': 'Real data instead of assumptions',
    'kmu4.p':  'Findings come from real logs, tickets and measurements – not from guesswork. That makes it clear where the real lever lies.',
    'kmu5.h3': 'Measurable results',
    'kmu5.p':  'We measure before and after – fewer tickets, shorter analysis times, more predictable releases. You see in black and white what the investment delivered.',
    'kmu6.h3': 'Long-term partnership',
    'kmu6.p':  'No disappearing after launch. We stay as your reliable partner – for maintenance, further development and new ideas.',

    /* Process */
    'proc.tag': 'Process',
    'proc.h2':  'From log file to a stable system',
    'proc.sub': 'Concrete technical steps instead of consulting phases. From the first log file to demonstrably reduced support load – every step traceably documented.',
    'proc.cta': 'Have my system analysed',
    'git1.msg':  'Analysis of real log data',
    'git1.desc': 'I dig into your real log and ticket data – no slides, no guesswork.',
    'git1.tag1': 'real data',
    'git1.tag2': 'remote / on-site',
    'git2.msg':  'Root cause & hypothesis',
    'git2.desc': 'A clearly documented root cause instead of symptom treatment – with traceable evidence from the logs.',
    'git2.tag1': 'Root cause',
    'git2.tag2': 'Documented',
    'git3.msg':  'Proof of concept',
    'git3.desc': 'A working proof of concept within 5–10 days – with real data on the real system.',
    'git3.tag1': '5–10 days',
    'git3.tag2': 'real system',
    'git4.msg':  'Implementation & integration',
    'git4.desc': 'Fix, automation or integration in the target system – versioned, documented, traceable.',
    'git5.msg':  'Stabilisation & measurement',
    'git5.desc': 'Measurably fewer tickets, shorter analysis times, more predictable releases – with a before/after comparison.',

    /* About */
    'about.tag':             'About',
    'about.h2':              'Engineering from two worlds – to your advantage',
    'about.p1':              '<strong>I combine practical engineering experience from industrial maintenance with modern software development and automation.</strong> That means: I know real failure patterns, I understand how machines, plants and processes break in practice – and I can solve those problems measurably in software, interfaces and workflows.',
    'about.v1.title':        'Hands-on background',
    'about.v1.text':         'Industrial maintenance background – real failure and error patterns understood',
    'about.v2.title':        'Software competence',
    'about.v2.text':         'Modern development, automation, integration – ISTQB-certified',
    'about.v3.title':        'Result-oriented',
    'about.v3.text':         'Fewer tickets, faster analysis, more stable systems – measurable',
    'about.terminal.comment': '// Ready for your project.',
    'about.terminal.status':  'available',
    'about.terminal.ansatz':  'owner-operated',
    'about.t.k1': 'company',
    'about.t.k2': 'owner',
    'about.t.k3': 'approach',
    'about.t.k4': 'services',
    'about.t.k5': 'response_time',
    'about.t.v1': 'Process Automation',
    'about.t.v2': 'System Analysis & Debugging',
    'about.t.v3': 'Application Support (2nd-Level+)',

    /* FAQ */
    'faq.tag': 'FAQ',
    'faq.h2':  'Frequently asked questions',
    'faq.sub': 'Answers to the questions we receive most often.',
    'faq1.q': 'How does a collaboration work?',
    'faq1.a': 'We start with a short conversation, then I review real log data or tickets. From there you receive a concrete report with prioritised next steps – no slides, no lengthy consulting process.',
    'faq2.q': 'How quickly do I get a first report?',
    'faq2.a': 'For scoped cases, usually within a few days. You get a written report with a timeline, affected components and a recommendation.',
    'faq3.q': 'What data do you need for an analysis?',
    'faq3.a': 'Typically application and system logs covering the time of an incident, plus optionally ticket history. Sensitive fields can be masked beforehand.',
    'faq4.q': 'Do you work alongside our existing support team?',
    'faq4.a': 'Yes. I plug into your escalation process, take on scoped 2nd-Level+ cases and hand back traceable solutions – including knowledge transfer.',
    'faq5.q': 'Do you also offer ongoing support?',
    'faq5.a': 'Yes, as part of the application support starter package. You get a fixed monthly hour budget and priority on escalations.',

    /* Contact */
    'contact.tag':      'Contact',
    'contact.h2':       'Reduce your support workload',
    'contact.sub':      'Let me analyse your system – I’ll get back to you within 24 hours with concrete next steps.',
    'form.name':        'Name',
    'form.email':       'Email',
    'form.service':     'Service',
    'form.opt.placeholder': 'Select…',
    'form.opt.software':    'Process automation',
    'form.opt.ki':          'System analysis & debugging',
    'form.opt.security':    'Application support (2nd-Level+)',
    'form.opt.other':       'Other',
    'form.message':         'Message',
    'form.msg.placeholder': 'Describe your project…',
    'form.submit':          'Send message',
    'form.privacy':         'Your data is treated confidentially.',
    'form.success':         'Your message has been sent. We\'ll be in touch shortly.',
    'info.h4':              'Direct contact',
    'info.email':           'Email',
    'info.location':        'Location',
    'info.response':        'Response time',
    'info.response.val':    'Within 24 hours',
    'info.free.h4':         'First consultation free',
    'info.free.p':          'A short, non-binding initial conversation – I’ll review a concrete incident or pain point with you and propose a pragmatic next step.',

    /* Footer */
    'footer.tagline':   'Application Support · System Analysis & Debugging · Process Automation',
    'footer.services':  'Services',
    'footer.process':   'Process',
    'footer.about':     'About',
    'footer.contact':   'Contact',
    'footer.tools':     'Security tools',
    'footer.datenschutz': 'Privacy',
    'footer.impressum': 'Legal notice',
    'footer.copy':      '© 2026 Lotus IT-Services · All rights reserved',
    'legal.privacy.title': 'Privacy policy',
    'legal.privacy.body': `<div class="imp-section">
          <strong>1. Controller</strong>
          <p>
            Lotus IT-Services<br />
            Proprietor: Helge Meier<br />
            c/o <br />
            Falk Fehlandt <br />
            Kochstraße 15 <br />
            04275 Leipzig<br />
            Phone: <a href="tel:+4964528024680">06452 8024680</a><br />
            Email: <a href="mailto:contact@lotus-it.eu">contact@lotus-it.eu</a>
          </p>
        </div>

        <div class="imp-section">
          <strong>2. General information on data processing</strong>
          <p>This website is operated as a static HTML site. <strong>No cookies</strong> are set, <strong>no tracking or analytics services</strong> are integrated and <strong>no data is transmitted to third parties</strong>. Fonts (Inter, Sora) are loaded locally from our server — no connection is made to Google or other external services.</p>
        </div>

        <div class="imp-section">
          <strong>3. Hosting &amp; server log files</strong>
          <p>Our hosting provider automatically collects the following data in server log files:</p>
          <ul>
            <li>IP address (anonymised or truncated where supported by the provider)</li>
            <li>Date and time of the request</li>
            <li>Requested page / file</li>
            <li>HTTP status code</li>
            <li>Amount of data transferred</li>
            <li>Referrer URL</li>
            <li>Browser and operating system</li>
          </ul>
          <p>This data cannot be assigned to specific persons. It is not merged with other data sources. Processing is based on <strong>Art. 6 para. 1 lit. f GDPR</strong> (legitimate interest in the secure and stable provision of the website).</p>
        </div>

        <div class="imp-section">
          <strong>4. Contact form</strong>
          <p>If you send us a message via the contact form, the data you enter (name, email address, message and, where applicable, selected service) will be processed for the purpose of handling your enquiry. The legal basis is <strong>Art. 6 para. 1 lit. b GDPR</strong> (pre-contractual measures) or <strong>Art. 6 para. 1 lit. f GDPR</strong> (legitimate interest in responding to your enquiry). Your data will be deleted after your enquiry has been processed, unless statutory retention obligations apply.</p>
        </div>

        <div class="imp-section">
          <strong>5. Local storage (localStorage)</strong>
          <p>This website stores your <strong>language preference</strong> (German / English) in your browser's localStorage. This is a purely technical function that preserves your preferred language when you revisit the site. No personal data is stored. Storage is based on <strong>Art. 6 para. 1 lit. f GDPR</strong>. You can delete localStorage at any time in your browser settings.</p>
        </div>

        <div class="imp-section">
          <strong>6. No disclosure to third parties</strong>
          <p>Personal data will not be disclosed to third parties unless this is necessary for contract performance or there is a legal obligation to do so.</p>
        </div>

        <div class="imp-section">
          <strong>7. Your rights</strong>
          <p>You have the right at any time to:</p>
          <ul>
            <li><strong>Access</strong> to the data stored by us (Art. 15 GDPR)</li>
            <li><strong>Rectification</strong> of inaccurate data (Art. 16 GDPR)</li>
            <li><strong>Erasure</strong> of your data (Art. 17 GDPR)</li>
            <li><strong>Restriction of processing</strong> (Art. 18 GDPR)</li>
            <li><strong>Data portability</strong> (Art. 20 GDPR)</li>
            <li><strong>Objection</strong> to processing (Art. 21 GDPR)</li>
          </ul>
          <p>To exercise your rights, simply send an email to <a href="mailto:contact@lotus-it.eu">contact@lotus-it.eu</a>.</p>
        </div>

        <div class="imp-section">
          <strong>8. Right to lodge a complaint</strong>
          <p>You have the right to lodge a complaint with a supervisory authority for data protection. The authority responsible for Hesse is:</p>
          <p>
            The Hessian Commissioner for Data Protection and Freedom of Information<br />
            Postfach 3163, 65021 Wiesbaden<br />
            <a href="https://datenschutz.hessen.de" target="_blank" rel="noopener noreferrer">https://datenschutz.hessen.de</a>
          </p>
        </div>

        <div class="imp-section">
          <strong>9. Current version of this statement</strong>
          <p>Status: April 2026. We reserve the right to amend this privacy policy if necessary so that it always complies with current legal requirements.</p>
        </div>`,
    'legal.imprint.title': 'Legal notice',
    'legal.imprint.body': `<div class="imp-section">
          <strong>Information pursuant to Section 5 TMG</strong>
          <p>
            Lotus IT-Services<br />
            Proprietor: Helge Meier <br />
            c/o <br />
            Falk Fehlandt <br />
            Kochstraße 15 <br />
            04275 Leipzig <br />
            Germany
          </p>
        </div>

        <div class="imp-section">
          <strong>Contact</strong>
          <p>
            Phone: <a href="tel:+4964528024680">06452 8024680</a><br />
            Email: <a href="mailto:contact@lotus-it.eu">contact@lotus-it.eu</a>
          </p>
        </div>

        <div class="imp-section">
          <strong>VAT</strong>
          <p>No VAT is shown in accordance with Section 19 UStG (small business regulation).</p>
        </div>

        <div class="imp-section">
          <strong>Responsible for content pursuant to Section 18 para. 2 MStV</strong>
          <p>
            Helge Meier<br />
            c/o <br />
            Falk Fehlandt <br />
            Kochstraße 15 <br />
            04275 Leipzig <br />
          </p>
        </div>

        <div class="imp-section">
          <strong>EU dispute resolution</strong>
          <p>
            The European Commission provides a platform for online dispute resolution (ODR):<br />
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a><br />
            You can find our email address above in the “Contact” section.
          </p>
        </div>

        <div class="imp-section">
          <strong>Consumer dispute resolution (VSBG)</strong>
          <p>We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
        </div>`,

    /* Pricing extras */
    'pricing.badge':     'Recommended',
    'pricing.onrequest': 'On request',
    'form.name.ph':      'John Doe',
    'form.email.ph':     'john@company.com',

    /* Modal: Process Automation */
    'msw.title':        'Process Automation',
    'msw.sub':          'Automate repetitive tasks – less manual effort, fewer errors, faster turnaround.',
    'msw.s1.h':         '⚡ Concrete results instead of consulting slides',
    'msw.s1.p':         'I automate recurring tasks such as ticket handling, data reconciliation or reporting – the deliverable is a working script, interface or workflow. No PowerPoint, just measurably less manual effort.',
    'msw.s1.hl.title':  'Real-world examples',
    'msw.s1.hl.text':   'Ticket classification · cross-system data reconciliation · automated reports',
    'msw.s2.h':         '🔌 APIs, workflows & tool integration',
    'msw.s2.p':         'I connect existing tools (ticketing, ERP, CRM, mail, databases) via their APIs and automate full workflows end-to-end. You keep your systems – I close the gaps in between.',
    'msw.s3.h':         '📊 Measurably less effort',
    'msw.s3.p':         'Before any automation we agree on concrete KPIs (e.g. handling time per case, tickets per day). After roll-out you receive a written before/after comparison – so you can see what the investment delivered.',
    'msw.faq.h':        'Frequently Asked Questions',
    'msw.faq1.q':       'Which tasks are worth automating?',
    'msw.faq1.a':       'Whenever the same task is done manually on a regular basis: sorting tickets, moving data between tools, generating reports, maintaining master or status data. Rule of thumb: if something happens manually several times a week, it\'s a candidate.',
    'msw.faq2.q':       'Does this work without a complete tool migration?',
    'msw.faq2.a':       'Yes. I integrate your existing systems via their APIs – no migration and no lock-in into a new platform.',
    'msw.faq3.q':       'How is success measured?',
    'msw.faq3.a':       'We define concrete metrics up front – e.g. manual handling time per case or 1st-level tickets per day. After roll-out there is a before/after comparison.',
    'msw.cta':          'Request automation →',

    /* Modal: System Analysis & Debugging */
    'mki.title':        'System Analysis & Debugging',
    'mki.sub':          'Real log data, real findings – faster root-cause analysis instead of guesswork.',
    'mki.s1.h':         '🔎 Log analysis with reproducible findings',
    'mki.s1.p':         'I analyse real application and system logs – ideally covering the time of a concrete incident. From logs, traces and tickets I produce a traceable report with timeline, affected components and a clear recommendation.',
    'mki.s1.hl.title':  'A clear report per incident',
    'mki.s1.hl.text':   'Correlation · timeline · affected components · reproduction steps',
    'mki.s2.h':         '🤯 Root-cause analysis instead of symptom treatment',
    'mki.s2.p':         'When a problem keeps coming back, there is a reason. I look for the root cause – not the next workaround. The result is a clearly documented finding that decides whether a fix, a configuration change or an architectural change is needed.',
    'mki.s3.h':         '⚡ Performance optimisation with measurements',
    'mki.s3.p':         'For slow systems I measure rather than guess: concrete response times, bottlenecks in DB / network / application, load behaviour. Optimisations are measured before and after, so improvements stay traceable.',
    'mki.faq.h':        'Frequently Asked Questions',
    'mki.faq1.q':       'What data do you need for an analysis?',
    'mki.faq1.a':       'Typically application and system logs (application, web server, DB, optionally container) – ideally covering the time of a concrete incident. Sensitive fields can be masked beforehand.',
    'mki.faq2.q':       'How quickly do I get a first finding?',
    'mki.faq2.a':       'For scoped incidents, often within a few days. You get a written report with a timeline, affected components and a concrete recommendation.',
    'mki.faq3.q':       'Do you also fix the issue?',
    'mki.faq3.a':       'On request, yes. The analysis turns directly into implementation – as a fix, patch or lasting stabilisation as part of the application support package.',
    'mki.cta':          'Have my system analysed →',

    /* Modal: Application Support (2nd-Level+) */
    'msec.title':       'Application Support (2nd-Level+)',
    'msec.sub':         'When 1st-level support hits its limits: complex technical issues, interface failures and system stabilisation – traceably solved.',
    'msec.s1.h':        '🧩 Complex technical issues',
    'msec.s1.p':        'I take on cases that 1st-level support cannot fully resolve – sporadic outages, undocumented legacy systems, faults spanning multiple components. You get a reproducible solution, not "a restart usually helps".',
    'msec.s1.hl.title': 'Typical cases',
    'msec.s1.hl.text':  'Recurring errors · unclear escalations · undocumented legacy systems · sporadic outages',
    'msec.s2.h':        '🔗 Isolating interface failures',
    'msec.s2.p':        'Interfaces are the most common place where data is lost or systems "give up". I find out whether the source, transport or target system is at fault – using logs, traces and reproducible tests instead of assumptions.',
    'msec.s2.hl.title': 'Approach',
    'msec.s2.hl.text':  'Analyse request/response · compare data at the breaking point · document a clear fix',
    'msec.s3.h':        '🛠️ System stabilisation instead of workarounds',
    'msec.s3.p':        'When the same incident keeps recurring, the workaround is not the solution. I remove the cause – a configuration issue, a race condition, missing validation or an architectural concern – so the tickets stop coming back.',
    'msec.faq.h':       'Frequently Asked Questions',
    'msec.faq1.q':      'When is a case a 2nd-Level+ case?',
    'msec.faq1.a':      'As soon as a standard script or knowledge-base answer is no longer enough. Typical: multiple systems involved, sporadic occurrence, or a known workaround that does not solve the cause.',
    'msec.faq2.q':      'Do you work alongside our existing support team?',
    'msec.faq2.a':      'Yes. I plug directly into your ticket system or escalation process, take over scoped cases and hand back traceable solutions your team can apply themselves next time.',
    'msec.faq3.q':      'Do you also offer ongoing support?',
    'msec.faq3.a':      'Yes, as part of a support starter package (retainer). You get priority on escalations and a fixed monthly hour budget.',
    'msec.cta':         'Request escalation support →',
  },
};

/* ── Core apply function ── */
function applyLang(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);

  // textContent replacements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (TRANSLATIONS[lang]?.[key] !== undefined) el.textContent = TRANSLATIONS[lang][key];
  });

  // innerHTML replacements (for keys with <br>, <em>, <strong> etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (TRANSLATIONS[lang]?.[key] !== undefined) el.innerHTML = TRANSLATIONS[lang][key];
  });

  // placeholder replacements
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (TRANSLATIONS[lang]?.[key] !== undefined) el.placeholder = TRANSLATIONS[lang][key];
  });

  // active state on lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // show/hide elements that belong to a specific language
  document.querySelectorAll('[data-lang-show]').forEach(el => {
    el.style.display = el.dataset.langShow === lang ? '' : 'none';
  });

}

/* ── Bootstrap on DOMContentLoaded ── */
document.addEventListener('DOMContentLoaded', () => {
  // Honour ?lang= query param, then localStorage, then default DE
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  const saved   = urlLang || localStorage.getItem('lang') || 'de';
  applyLang(saved);

  document.querySelectorAll('.lang-btn').forEach(btn =>
    btn.addEventListener('click', () => applyLang(btn.dataset.lang))
  );
});

// Expose globally for inline onclick handlers
window.applyLang = applyLang;
