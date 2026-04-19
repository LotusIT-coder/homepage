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
    'nav.cta':        'Anfrage',

    /* Hero */
    'hero.badge': 'Ihr Partner für digitale Exzellenz',
    'hero.h1':    'Software,<br />die <em>einfach</em><br />funktioniert.',
    'hero.sub':   'Entwicklung sicherer Software, KI Consulting, Security Consulting, Webshopbetreuung – maßgeschneidert für Ihr Vorhaben. Direkt, budgetgerecht, ohne Overhead.',
    'hero.cta1':  'Leistungen entdecken',
    'hero.cta2':  'Kontakt aufnehmen',
    'hero.chip1': 'Sichere Software',
    'hero.chip2': 'KI Consulting',
    'hero.chip3': 'Security Consulting',

    /* Stats */
    'stat.1': 'Maßgeschneidert',
    'stat.2': 'Kernkompetenzen',
    'stat.3': 'Skalierbarkeit',
    'stat.4': 'Support & Betreuung',

    /* Services section header */
    'svc.tag': 'Leistungen',
    'svc.h2':  'Entwicklung der nächsten Generation – individuell für jedes Vorhaben',
    'svc.sub': 'Von der ersten Idee bis zum laufenden Betrieb – ein direkter Ansprechpartner, keine Zwischenhändler. Ob Einzelprojekt, laufender Betrieb oder langfristige Partnerschaft.',

    /* Service card 1 */
    'svc1.h3':   'Softwareentwicklung & -betreuung',
    'svc1.p':    'Individuelle Webanwendungen, APIs und Systemintegrationen, die exakt zu Ihren Abläufen passen – egal ob gewachsene Struktur oder Neuentwicklung von Grund auf.',
    'svc1.li1':  'Web- & Mobil-Applikationen',
    'svc1.li2':  'API-Entwicklung & Integration',
    'svc1.li3':  'Legacy-Modernisierung',
    'svc1.li4':  'Langzeitbetreuung & Updates',
    'svc.more':  'Mehr erfahren →',
    'svc1.link': 'Anfrage stellen →',

    /* Service card 2 */
    'svc2.h3':   'KI Consulting, Implementierung & Schulung',
    'svc2.p':    'Wir analysieren Ihre Abläufe und zeigen, wo künstliche Intelligenz echten Mehrwert schafft – praxisnah und ohne Buzzword-Bingo. Oft ein unterschätzter Hebel – der durch die richtige Beratung greifbar und konkret umsetzbar wird.',
    'svc2.li1':  'KI-Potenzialanalyse',
    'svc2.li2':  'CompanyGPT, LLM & Chatbot-Integration',
    'svc2.li3':  'Prozessautomatisierung mit KI',
    'svc2.li4':  'KI-Kompetenzschulungen (EU AI Act Art. 4)',
    'svc2.li5':  'Workshops & Strategie',
    'svc2.link': 'Anfrage stellen →',

    /* Service card 3 */
    'svc3.h3':   'Security Consulting',
    'svc3.p':    'Ihre digitale Infrastruktur so sicher wie möglich – durch Risikoanalysen und robuste Sicherheitskonzepte. Systematisch, nachvollziehbar, nach anerkannten Standards.',
    'svc3.li1':  'Sicherheitsaudits & Schwachstellenanalyse',
    'svc3.li2':  'Zero-Trust-Architektur',
    'svc3.li3':  'DSGVO & Compliance',
    'svc3.li4':  'Incident Response',
    'svc3.li5':  'Resilienz- & Notfallplanung',
    'svc3.link': 'Anfrage stellen →',

    /* Pricing */
    'pricing.tag': 'Preismodelle',
    'pricing.h2':  'Transparent von Anfang an',
    'pricing.sub': 'Kein verstecktes Kleingedrucktes. Drei klare Modelle – je nachdem, was Ihr Vorhaben braucht.',
    'p1.h3':  'Festpreis-Projekt',
    'p1.sub': 'Für klar definierte Vorhaben mit planbarem Umfang.',
    'p1.li1': 'Fixer Preis nach Briefing',
    'p1.li2': 'Klares Leistungsversprechen',
    'p1.li3': 'Web- & Mobil-Apps, APIs',
    'p1.li4': 'Sicherheitsaudits',
    'p1.li5': 'Abnahme nach Ihren Kriterien',
    'p1.cta': 'Projekt anfragen',
    'p2.h3':  'Betreuungsvertrag',
    'p2.sub': 'Festes monatliches Kontingent – immer ein Ansprechpartner, der Ihr System kennt.',
    'p2.li1': 'ab 5h/Monat frei wählbar (nach Verfügbarkeit)',
    'p2.li2': 'Günstigerer Stundensatz',
    'p2.li3': 'Priorisierung inklusive',
    'p2.li4': 'Softwarebetreuung & Updates',
    'p2.li5': 'KI- & Sicherheitsmonitoring',
    'p2.li6': 'Monatliches Status-Update',
    'p2.cta': 'Retainer anfragen',
    'p3.h3':  'Beratung & Workshops',
    'p3.sub': 'Für Strategie, KI-Potenzialanalysen und Sicherheits-Workshops.',
    'p3.li1': 'KI-Strategie & Roadmap',
    'p3.li2': 'Sicherheits-Workshops',
    'p3.li3': 'Technologie-Evaluierung',
    'p3.li4': 'Schriftliche Auswertung',
    'p3.li5': 'Remote oder vor Ort',
    'p3.cta': 'Workshop anfragen',
    'ps.label': '// Sonderpreis',
    'ps.title': 'KI-Kompetenzschulung',
    'ps.sub':   'EU AI Act · Art. 4 · Nachweispflichtig',
    'ps.desc':  'Halbtägige Schulung zur gesetzlich geforderten KI-Kompetenz für Mitarbeitende – inkl. Teilnahmezertifikat.',

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
    'kmu4.h3': 'Praxisnahe KI ohne Hype',
    'kmu4.p':  'KI lohnt sich – wenn sie richtig eingesetzt wird. Wir zeigen ehrlich, was in Ihrer konkreten Situation funktioniert und was nicht.',
    'kmu5.h3': 'DSGVO & Compliance',
    'kmu5.p':  'Datenschutz und regulatorische Anforderungen gelten für alle. Wir sorgen dafür, dass Ihre Lösung rechtssicher ist – von Anfang an.',
    'kmu6.h3': 'Langfristige Partnerschaft',
    'kmu6.p':  'Kein Verschwinden nach dem Launch. Wir bleiben als verlässlicher Partner an Ihrer Seite – für Wartung, Weiterentwicklung und neue Ideen.',

    /* Process */
    'proc.tag': 'Prozess',
    'proc.h2':  'Wie wir zusammenarbeiten',
    'proc.sub': 'Klar, strukturiert, ohne Überraschungen. Von der Anfrage bis zur fertig betreuten Lösung – ein Ablauf, dem Sie zu jeder Zeit folgen können.',
    'proc.cta': 'Jetzt starten',
    'git1.msg':  'Erstgespräch & Bedarfsanalyse',
    'git1.desc': 'Wir hören zu. Keine Standardfloskeln, keine Präsentationen – nur ehrliches Zuhören und präzise Fragen.',
    'git1.tag1': 'kostenlos',
    'git1.tag2': 'remote / vor Ort',
    'git2.msg':  'Konzept & Architektur',
    'git2.desc': 'Transparentes Angebot, klare Architektur, realistische Zeitplanung – bevor eine Zeile Code entsteht.',
    'git2.tag1': 'Festpreis möglich',
    'git2.tag2': 'Dokumentiert',
    'git3.msg':  'Entwicklung & Iteration',
    'git3.desc': 'Agile Lieferungen in kurzen Zyklen. Sie sehen Fortschritt, wir holen Ihr Feedback – kontinuierlich.',
    'git3.tag1': 'Agil',
    'git3.tag2': 'Regelmäßige Updates',
    'git4.msg':  'Deployment & Go-Live',
    'git4.desc': 'Sauberes Rollout, Monitoring eingerichtet, Dokumentation übergeben. Kein Stress am großen Tag.',
    'git5.msg':  'Betreuung & Weiterentwicklung',
    'git5.desc': 'Kein Verschwinden nach dem Launch. Wir bleiben – mit Support, Updates und neuen Ideen.',

    /* About */
    'about.tag':             'Über uns',
    'about.h2':              'Verlässlichkeit ohne Kompromisse',
    'about.p1':              'Lotus IT-Services steht für tiefgreifende technische Expertise gepaart mit einem klaren Blick für das Wesentliche: <strong>Ihr Ziel</strong>. Als inhabergeführtes Unternehmen arbeiten wir ohne Umwege, ohne Hierarchien und mit voller Verantwortung.',
    'about.v1.title':        'Präzision',
    'about.v1.text':         'Lösungen, die auf den Punkt genau passen',
    'about.v2.title':        'Verlässlichkeit',
    'about.v2.text':         'Transparente Kommunikation, pünktliche Lieferung',
    'about.v3.title':        'Innovation',
    'about.v3.text':         'Moderne Technologien, nachhaltiger Ansatz',
    'about.terminal.comment': '// Bereit für Ihr Projekt.',
    'about.terminal.status':  'verfügbar',
    'about.terminal.ansatz':  'inhabergeführt',
    'about.t.k1': 'unternehmen',
    'about.t.k2': 'inhaber',
    'about.t.k3': 'ansatz',
    'about.t.k4': 'leistungen',
    'about.t.k5': 'reaktionszeit',
    'about.t.v1': 'Sichere Software',
    'about.t.v2': 'KI Consulting und Implementierung',
    'about.t.v3': 'Security Consulting',

    /* FAQ */
    'faq.tag': 'FAQ',
    'faq.h2':  'Häufige Fragen',
    'faq.sub': 'Antworten auf die Fragen, die uns am häufigsten erreichen.',
    'faq1.q': 'Wie läuft eine Zusammenarbeit ab?',
    'faq1.a': 'Nach einem kostenlosen Erstgespräch erstellen wir ein transparentes Angebot mit klarer Architektur und realistischer Zeitplanung. Die Umsetzung erfolgt agil in kurzen Zyklen – mit regelmäßigen Updates und direktem Feedback.',
    'faq2.q': 'Was kostet eine KI-Beratung?',
    'faq2.a': 'Das erste Gespräch ist kostenlos und unverbindlich. Im Anschluss erhalten Sie ein transparentes Angebot – ohne versteckte Kosten. Festpreisprojekte sind ebenso möglich wie laufende Betreuungsmodelle.',
    'faq3.q': 'Kann Lotus IT-Services unsere bestehende Software weiterentwickeln?',
    'faq3.a': 'Absolut. Wir übernehmen bestehende Systeme, analysieren die Codebasis und entwickeln gezielt weiter – egal ob es sich um Legacy-Anwendungen oder moderne Stacks handelt.',
    'faq4.q': 'Wie läuft ein Sicherheitsaudit ab?',
    'faq4.a': 'Wir beginnen mit einer strukturierten Bestandsaufnahme Ihrer Infrastruktur, identifizieren Schwachstellen und erstellen einen priorisierten Maßnahmenplan – verständlich, ohne IT-Kauderwelsch.',
    'faq5.q': 'Bieten Sie auch langfristige Betreuung nach Projektabschluss an?',
    'faq5.a': 'Ja. Wir bieten Wartungs- und Supportverträge für eine dauerhafte Betreuung an – so bleiben Ihre Systeme aktuell und sicher, ohne dass Sie sich darum kümmern müssen.',

    /* Contact */
    'contact.tag':      'Kontakt',
    'contact.h2':       'Starten Sie Ihr Projekt',
    'contact.sub':      'Schildern Sie uns Ihre Anforderungen – wir melden uns innerhalb von 24 Stunden.',
    'form.name':        'Name',
    'form.email':       'E-Mail',
    'form.service':     'Leistung',
    'form.opt.placeholder': 'Auswählen…',
    'form.opt.software':    'Softwareentwicklung & -betreuung',
    'form.opt.ki':          'KI-Schulungen, Implementierung & Beratung',
    'form.opt.security':    'Sicherheitsberatung',
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
    'info.free.p':          'In einem unverbindlichen Erstgespräch analysieren wir gemeinsam Ihre Anforderungen und zeigen Ihnen konkrete Lösungsansätze.',

    /* Footer */
    'footer.tagline':   'Sichere Software · KI Consulting / Implementierung · Security Consulting · Webshopbetreuung',
    'footer.services':  'Leistungen',
    'footer.process':   'Prozess',
    'footer.about':     'Über uns',
    'footer.contact':   'Kontakt',
    'footer.datenschutz': 'Datenschutz',
    'footer.impressum': 'Impressum',
    'footer.copy':      '© 2026 Lotus IT-Services · Alle Rechte vorbehalten',

    /* Pricing extras */
    'pricing.badge':     'Empfohlen',
    'pricing.onrequest': 'Auf Anfrage',
    'form.name.ph':      'Max Mustermann',
    'form.email.ph':     'max@firma.de',

    /* Modal: Software */
    'msw.title':        'Softwareentwicklung & -betreuung',
    'msw.sub':          'Maßgeschneiderte Lösungen – mit modernsten Methoden und Qualitätssicherung auf höchstem Niveau.',
    'msw.s1.h':         '🤖 Vibe-Coding & KI-gestützte Entwicklung',
    'msw.s1.p':         'Wir setzen auf <strong>KI-assistierte Entwicklung</strong> (Vibe-Coding) – das bedeutet: dramatisch kürzere Entwicklungszeiten bei gleichbleibend hoher Qualität. Sie erhalten mehr für Ihr Budget, ohne Abstriche bei der Sorgfalt.',
    'msw.s1.hl.title':  'Bis zu 60% schnellere Entwicklung',
    'msw.s1.hl.text':   'Durch KI-gestützte Code-Generierung und intelligente Automatisierung',
    'msw.s2.h':         '🧠 Human-in-the-Loop – Qualität bleibt Menschensache',
    'msw.s2.p':         'KI kann Code generieren. Aber ob er <em>richtig</em> ist, entscheidet der Mensch. Ich bin fest in jeder Entwicklungsphase eingebunden – als Architekt, Reviewer und Qualitätssicherer. Kein blindes Vertrauen in Maschinen.',
    'msw.s3.h':         '🏅 ISTQB-zertifizierter Softwaretester',
    'msw.s3.p':         'Als zertifizierter Softwaretester nach <strong>ISTQB-Standard</strong> bringe ich strukturiertes Qualitätsdenken in jedes Projekt. Fehler werden gefunden, bevor sie zum Problem werden – systematisch, nicht zufällig.',
    'msw.s3.hl.title':  'Zertifizierte Qualitätssicherung',
    'msw.s3.hl.text':   'ISTQB Certified Tester – Testplanung, Testdesign, Fehlermanagement',
    'msw.faq.h':        'Häufige Fragen',
    'msw.faq1.q':       'Was ist Vibe-Coding genau?',
    'msw.faq1.a':       'Vibe-Coding bezeichnet einen Entwicklungsansatz, bei dem KI-Modelle (wie GitHub Copilot oder Claude) aktiv Code generieren und vorschlagen – gesteuert und überprüft durch einen erfahrenen Entwickler.',
    'msw.faq2.q':       'Verliere ich die Kontrolle über meinen Code?',
    'msw.faq2.a':       'Nein. Sie erhalten vollständigen Quellcode, Dokumentation und volle Eigentumsrechte.',
    'msw.faq3.q':       'Kann ich bestehende Software übernehmen lassen?',
    'msw.faq3.a':       'Ja – Legacy-Modernisierung ist ein Schwerpunkt.',
    'msw.cta':          'Projekt anfragen →',

    /* Modal: KI */
    'mki.title':        'KI-Schulungen & Beratung',
    'mki.sub':          'Künstliche Intelligenz, die wirklich zu Ihrem Unternehmen passt – praxisnah, ohne Hype, mit echtem ROI.',
    'mki.s1.h':         '🤖 CompanyGPT – Ihr eigener KI-Assistent',
    'mki.s1.p':         'Ein auf Ihre Dokumente, Prozesse und Sprache trainierter KI-Assistent – intern, datenschutzkonform, ohne öffentliche Cloud.',
    'mki.s1.hl.title':  'Beispiele: CompanyGPT',
    'mki.s1.hl.text':   'Internes FAQ-System · Vertragsanalyse · Onboarding-Assistent · Support-Bot',
    'mki.s2.h':         '⚙️ Prozessautomatisierung mit KI',
    'mki.s2.p':         'Wiederkehrende, regelbasierte Aufgaben gehören automatisiert.',
    'mki.s2.hl.title':  'Beispiele: Automatisierung',
    'mki.s2.hl.text':   'E-Mail-Klassifizierung · Dokumentenverarbeitung · Reporting · Datenpflege',
    'mki.s3.h':         '🎓 KI-Kompetenz für alle Level',
    'mki.s3.p':         'Von der Geschäftsführung bis zur Sachbearbeitung – KI betrifft alle. Inklusive Pflichtschulung nach <strong>EU AI Act Art. 4</strong>.',
    'mki.s3.hl.title':  'EU AI Act Art. 4 – Nachweispflichtig',
    'mki.s3.hl.text':   '195 € p.P. · Halbtägig · Zertifikat inklusive',
    'mki.s4.h':         '🏅 IHK-geprüfte Expertise',
    'mki.s4.p':         'Hinter der Beratung steht nachgewiesenes, geprüftes Fachwissen:',
    'mki.s4.hl1.title': 'IHK-geprüfter KI-Manager',
    'mki.s4.hl1.text':  'Praktische Umsetzung von KI-Projekten – von der Potenzialanalyse bis zur produktiven Anwendung',
    'mki.s4.hl2.title': 'IHK-geprüfter KI-Beauftragter',
    'mki.s4.hl2.text':  'Regulatorische Umsetzung – EU AI Act, Risikobewertung, Compliance und KI-Governance',
    'mki.faq.h':        'Häufige Fragen',
    'mki.faq1.q':       'Sind unsere Daten sicher bei einem CompanyGPT?',
    'mki.faq1.a':       'Ja. Ein CompanyGPT kann vollständig on-premise oder in einer privaten Cloud betrieben werden.',
    'mki.faq2.q':       'Welche Voraussetzungen braucht ein Unternehmen für KI?',
    'mki.faq2.a':       'Die wichtigste Voraussetzung ist ein konkreter Anwendungsfall. Wir analysieren Ihre Prozesse und identifizieren, wo KI echten Mehrwert schafft – praxisnah und mit klarem ROI.',
    'mki.faq3.q':       'Was kostet ein CompanyGPT-Projekt?',
    'mki.faq3.a':       'Das hängt von Umfang und Infrastruktur ab. Ein erstes Gespräch ist kostenlos.',
    'mki.cta':          'KI-Schulung anfragen →',

    /* Modal: Security */
    'msec.title':       'Sicherheitsberatung',
    'msec.sub':         'IT-Sicherheit beginnt nicht mit Technik – sie beginnt mit Bewusstsein. Wir stärken beides.',
    'msec.s1.h':        '🎯 Security Awareness Trainings',
    'msec.s1.p':        'Die größte Schwachstelle in jedem System ist der Mensch.',
    'msec.s1.hl.title': 'Themen: Awareness',
    'msec.s1.hl.text':  'Phishing · Social Engineering · Passwortsicherheit · BYOD-Risiken · Deepfakes',
    'msec.s2.h':        '🔍 Sicherheitsberatung & Audits',
    'msec.s2.p':        'Wir analysieren Ihre IT-Infrastruktur systematisch.',
    'msec.s2.hl.title': 'Leistungen: Audit',
    'msec.s2.hl.text':  'Risikoanalyse · DSGVO-Check · Netzwerksicherheit · Zugriffsrechte · Notfallplan',
    'msec.s3.h':        '📚 Schulungen für Teams',
    'msec.s3.p':        'Von der einstündigen Kurzschulung bis zum mehrtägigen Workshop.',
    'msec.faq.h':       'Häufige Fragen',
    'msec.faq1.q':      'Sind Awareness-Trainings wirklich wirksam?',
    'msec.faq1.a':      'Studien zeigen, dass regelmäßige Trainings die Klickrate auf Phishing-E-Mails um bis zu 70% senken.',
    'msec.faq2.q':      'Wir sind ein kleines Team – lohnt sich das?',
    'msec.faq2.a':      'Gerade kleine Teams sind attraktive Ziele, weil sie oft weniger gut geschützt sind.',
    'msec.faq3.q':      'Bieten Sie auch laufende Sicherheitsbetreuung an?',
    'msec.faq3.a':      'Ja, im Rahmen unseres Betreuungsvertrags (Retainer).',
    'msec.cta':         'Sicherheitsberatung anfragen →',
  },

  en: {
    /* Navigation */
    'nav.leistungen': 'Services',
    'nav.preise':     'Pricing',
    'nav.prozess':    'Process',
    'nav.ueber':      'About',
    'nav.cta':        'Get in touch',

    /* Hero */
    'hero.badge': 'Your partner for digital excellence',
    'hero.h1':    'Software that <em>just</em><br />works.',
    'hero.sub':   'Secure software development, AI consulting, security consulting, webshop support – tailored to your project. Direct, budget-friendly, no overhead.',
    'hero.cta1':  'Explore services',
    'hero.cta2':  'Get in touch',
    'hero.chip1': 'Secure Software',
    'hero.chip2': 'AI Consulting and Implementation',
    'hero.chip3': 'Security Consulting',

    /* Stats */
    'stat.1': 'Custom-built',
    'stat.2': 'Core competencies',
    'stat.3': 'Scalability',
    'stat.4': 'Support & Care',

    /* Services section header */
    'svc.tag': 'Services',
    'svc.h2':  'Next-generation development – tailored for any project',
    'svc.sub': 'From the first idea to live operation – one direct contact, no middlemen. Whether a single project, ongoing operations or long-term partnership.',

    /* Service card 1 */
    'svc1.h3':   'Software Development & Support',
    'svc1.p':    'Custom web applications, APIs and system integrations that fit your workflows exactly – whether evolving existing systems or building from scratch.',
    'svc1.li1':  'Web & mobile applications',
    'svc1.li2':  'API development & integration',
    'svc1.li3':  'Legacy modernization',
    'svc1.li4':  'Long-term maintenance & updates',
    'svc.more':  'Learn more →',
    'svc1.link': 'Request →',

    /* Service card 2 */
    'svc2.h3':   'AI Consulting, Implementation & Training',
    'svc2.p':    'We analyze your workflows and show where artificial intelligence creates real value – practical, no buzzword bingo. Often an underestimated lever – made tangible through the right consulting.',
    'svc2.li1':  'AI potential analysis',
    'svc2.li2':  'LLM & chatbot integration',
    'svc2.li3':  'AI process automation',
    'svc2.li4':  'AI literacy training (EU AI Act Art. 4)',
    'svc2.li5':  'Workshops & strategy',
    'svc2.link': 'Request →',

    /* Service card 3 */
    'svc3.h3':   'Security Consulting',
    'svc3.p':    'Your digital infrastructure as secure as possible – through risk analyses and robust security concepts. Systematic, traceable, following recognised standards.',
    'svc3.li1':  'Security audits & vulnerability analysis',
    'svc3.li2':  'Zero-trust architecture',
    'svc3.li3':  'GDPR & compliance',
    'svc3.li4':  'Incident response',
    'svc3.link': 'Request →',

    /* Pricing */
    'pricing.tag': 'Pricing',
    'pricing.h2':  'Transparent from the start',
    'pricing.sub': 'No hidden fine print. Three clear models – depending on what your project needs.',
    'p1.h3':  'Fixed-price project',
    'p1.sub': 'For clearly defined projects with a predictable scope.',
    'p1.li1': 'Fixed price after briefing',
    'p1.li2': 'Clear deliverables',
    'p1.li3': 'Web & mobile apps, APIs',
    'p1.li4': 'Security audits',
    'p1.li5': 'Acceptance on your terms',
    'p1.cta': 'Request project',
    'p2.h3':  'Retainer',
    'p2.sub': 'Fixed monthly hours – always the same contact who knows your system.',
    'p2.li1': '5–20 h/month selectable',
    'p2.li2': 'Reduced hourly rate',
    'p2.li3': 'Prioritisation included',
    'p2.li4': 'Software maintenance & updates',
    'p2.li5': 'AI & security monitoring',
    'p2.li6': 'Monthly status update',
    'p2.cta': 'Request retainer',
    'p3.h3':  'Consulting & Workshops',
    'p3.sub': 'For strategy, AI potential analyses and security workshops.',
    'p3.li1': 'AI strategy & roadmap',
    'p3.li2': 'Security workshops',
    'p3.li3': 'Technology evaluation',
    'p3.li4': 'Written report',
    'p3.li5': 'Remote or on-site',
    'p3.cta': 'Request workshop',
    'ps.label': '// Special price',
    'ps.title': 'AI Literacy Training',
    'ps.sub':   'EU AI Act · Art. 4 · Compliance required',
    'ps.desc':  'Half-day training on legally required AI literacy for employees – incl. certificate of attendance.',

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
    'kmu4.h3': 'Practical AI without hype',
    'kmu4.p':  'AI pays off – when used correctly. We tell you honestly what works in your specific situation and what doesn\'t.',
    'kmu5.h3': 'GDPR & Compliance',
    'kmu5.p':  'Data protection and regulatory requirements apply to everyone. We ensure your solution is legally compliant – from day one.',
    'kmu6.h3': 'Long-term partnership',
    'kmu6.p':  'No disappearing after launch. We stay as your reliable partner – for maintenance, further development and new ideas.',

    /* Process */
    'proc.tag': 'Process',
    'proc.h2':  'How we work together',
    'proc.sub': 'Clear, structured, no surprises. From the initial inquiry to the fully supported solution – a process you can follow at every step.',
    'proc.cta': 'Start now',
    'git1.msg':  'Initial consultation & needs analysis',
    'git1.desc': 'We listen. No standard phrases, no presentations – just honest listening and precise questions.',
    'git1.tag1': 'free of charge',
    'git1.tag2': 'remote / on-site',
    'git2.msg':  'Concept & architecture',
    'git2.desc': 'Transparent proposal, clear architecture, realistic timeline – before a single line of code is written.',
    'git2.tag1': 'Fixed price possible',
    'git2.tag2': 'Documented',
    'git3.msg':  'Development & iteration',
    'git3.desc': 'Agile deliveries in short cycles. You see progress, we gather your feedback – continuously.',
    'git3.tag1': 'Agile',
    'git3.tag2': 'Regular updates',
    'git4.msg':  'Deployment & go-live',
    'git4.desc': 'Clean rollout, monitoring set up, documentation handed over. No stress on the big day.',
    'git5.msg':  'Support & further development',
    'git5.desc': 'No disappearing after launch. We stay – with support, updates and new ideas.',

    /* About */
    'about.tag':             'About us',
    'about.h2':              'Reliability without compromise',
    'about.p1':              'Lotus IT-Services stands for deep technical expertise combined with a clear focus on what matters: <strong>your goal</strong>. As an owner-operated company, we work without detours, without hierarchies and with full responsibility.',
    'about.v1.title':        'Precision',
    'about.v1.text':         'Solutions that fit exactly on point',
    'about.v2.title':        'Reliability',
    'about.v2.text':         'Transparent communication, on-time delivery',
    'about.v3.title':        'Innovation',
    'about.v3.text':         'Modern technologies, sustainable approach',
    'about.terminal.comment': '// Ready for your project.',
    'about.terminal.status':  'available',
    'about.terminal.ansatz':  'owner-operated',
    'about.t.k1': 'company',
    'about.t.k2': 'owner',
    'about.t.k3': 'approach',
    'about.t.k4': 'services',
    'about.t.k5': 'response_time',
    'about.t.v1': 'Secure Software',
    'about.t.v2': 'AI Consulting and Implementation',
    'about.t.v3': 'Security Consulting',

    /* FAQ */
    'faq.tag': 'FAQ',
    'faq.h2':  'Frequently asked questions',
    'faq.sub': 'Answers to the questions we receive most often.',
    'faq1.q': 'How does a collaboration work?',
    'faq1.a': 'After a free initial consultation, we provide a transparent proposal with clear architecture and realistic timelines. Development is agile in short cycles – with regular updates and direct feedback.',
    'faq2.q': 'What does AI consulting cost?',
    'faq2.a': 'The first conversation is free and non-binding. You will then receive a transparent proposal – without hidden costs. Fixed-price projects are just as possible as ongoing retainer models.',
    'faq3.q': 'Can Lotus IT-Services further develop our existing software?',
    'faq3.a': 'Absolutely. We take over existing systems, analyze the codebase and develop it further – whether legacy applications or modern stacks.',
    'faq4.q': 'How does a security audit work?',
    'faq4.a': 'We start with a structured inventory of your infrastructure, identify vulnerabilities and create a prioritized action plan – clear, without IT jargon.',
    'faq5.q': 'Do you also offer long-term support after project completion?',
    'faq5.a': 'Yes. We offer maintenance and support contracts for ongoing care – so your systems stay current and secure without you having to worry about it.',

    /* Contact */
    'contact.tag':      'Contact',
    'contact.h2':       'Start your project',
    'contact.sub':      'Tell us about your requirements – we\'ll get back to you within 24 hours.',
    'form.name':        'Name',
    'form.email':       'Email',
    'form.service':     'Service',
    'form.opt.placeholder': 'Select…',
    'form.opt.software':    'Software development & support',
    'form.opt.ki':          'AI Training, Implementation & Consulting',
    'form.opt.security':    'Security consulting',
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
    'info.free.p':          'In a non-binding initial consultation we analyze your requirements together and show you concrete solutions.',

    /* Footer */
    'footer.tagline':   'Secure Software · AI Consulting / Implementation · Security Consulting · Webshop Support',
    'footer.services':  'Services',
    'footer.process':   'Process',
    'footer.about':     'About',
    'footer.contact':   'Contact',
    'footer.datenschutz': 'Privacy',
    'footer.impressum': 'Legal notice',
    'footer.copy':      '© 2026 Lotus IT-Services · All rights reserved',

    /* Pricing extras */
    'pricing.badge':     'Recommended',
    'pricing.onrequest': 'On request',
    'form.name.ph':      'John Doe',
    'form.email.ph':     'john@company.com',

    /* Modal: Software */
    'msw.title':        'Software Development & Support',
    'msw.sub':          'Tailored solutions – built with cutting-edge methods and top-tier quality assurance.',
    'msw.s1.h':         '🤖 Vibe-Coding & AI-Assisted Development',
    'msw.s1.p':         'We leverage <strong>AI-assisted development</strong> (Vibe-Coding) – dramatically shorter development cycles at consistently high quality. You get more for your budget without compromising on diligence.',
    'msw.s1.hl.title':  'Up to 60% faster development',
    'msw.s1.hl.text':   'Through AI-powered code generation and intelligent automation',
    'msw.s2.h':         '🧠 Human-in-the-Loop – Quality stays human',
    'msw.s2.p':         'AI can generate code. But whether it\'s <em>correct</em> is a human decision. I\'m embedded in every phase – as architect, reviewer and quality gatekeeper. No blind trust in machines.',
    'msw.s3.h':         '🏅 ISTQB-Certified Software Tester',
    'msw.s3.p':         'As an <strong>ISTQB-certified</strong> software tester, I bring structured quality thinking to every project. Bugs are found before they become problems – systematically, not by chance.',
    'msw.s3.hl.title':  'Certified Quality Assurance',
    'msw.s3.hl.text':   'ISTQB Certified Tester – Test planning, test design, defect management',
    'msw.faq.h':        'Frequently Asked Questions',
    'msw.faq1.q':       'What exactly is Vibe-Coding?',
    'msw.faq1.a':       'Vibe-Coding is a development approach where AI models (like GitHub Copilot or Claude) actively generate and suggest code – guided and reviewed by an experienced developer. The result: faster delivery, less boilerplate, more focus on architecture and logic.',
    'msw.faq2.q':       'Do I lose control over my code?',
    'msw.faq2.a':       'No. You receive full source code, documentation and complete ownership rights. Through our human-in-the-loop approach, every AI-generated line is reviewed and accountable.',
    'msw.faq3.q':       'Can you take over existing software?',
    'msw.faq3.a':       'Yes – legacy modernisation is a core strength. We analyse the codebase, identify risks and modernise step by step without disrupting live operations.',
    'msw.cta':          'Request a project →',

    /* Modal: KI */
    'mki.title':        'AI Training & Consulting',
    'mki.sub':          'Artificial intelligence that truly fits your organisation – practical, no hype, with real ROI.',
    'mki.s1.h':         '🤖 CompanyGPT – Your own AI assistant',
    'mki.s1.p':         'An AI assistant trained on your documents, processes and language – internal, GDPR-compliant, no public cloud. Employees ask, the system answers precisely based on your own knowledge base.',
    'mki.s1.hl.title':  'Examples: CompanyGPT',
    'mki.s1.hl.text':   'Internal FAQ system · Contract analysis · Onboarding assistant · Support bot',
    'mki.s2.h':         '⚙️ AI Process Automation',
    'mki.s2.p':         'Repetitive, rule-based tasks belong automated. We identify the right opportunities, implement AI-powered workflows and integrate them into your existing systems.',
    'mki.s2.hl.title':  'Examples: Automation',
    'mki.s2.hl.text':   'Email classification · Document processing · Reporting · Data maintenance',
    'mki.s3.h':         '🎓 AI Literacy for All Levels',
    'mki.s3.p':         'From C-suite to operations – AI affects everyone. Our training is level-appropriate: strategic for leaders, practical for users, technical for IT teams. Including mandatory training per <strong>EU AI Act Art. 4</strong>.',
    'mki.s3.hl.title':  'EU AI Act Art. 4 – Mandatory compliance',
    'mki.s3.hl.text':   '€195 p.p. · Half-day · Certificate included',
    'mki.s4.h':         '🏅 IHK-Certified Expertise',
    'mki.s4.p':         'Our consulting is backed by certified, verified expertise in both dimensions that AI in business requires today:',
    'mki.s4.hl1.title': 'IHK-Certified AI Manager',
    'mki.s4.hl1.text':  'Practical AI project delivery – from potential analysis to production deployment',
    'mki.s4.hl2.title': 'IHK-Certified AI Officer',
    'mki.s4.hl2.text':  'Regulatory implementation – EU AI Act, risk assessment, compliance and AI governance',
    'mki.faq.h':        'Frequently Asked Questions',
    'mki.faq1.q':       'Is our data safe with a CompanyGPT?',
    'mki.faq1.a':       'Yes. A CompanyGPT can run fully on-premise or in a private cloud. No data leaves your infrastructure. We ensure GDPR compliance from day one.',
    'mki.faq2.q':       'What does a company need to get started with AI?',
    'mki.faq2.a':       'The most important prerequisite is a concrete use case. We analyse your processes and identify where AI creates real value – practical and with clear ROI.',
    'mki.faq3.q':       'What does a CompanyGPT project cost?',
    'mki.faq3.a':       'It depends on scope and infrastructure. An initial consultation is free – followed by a transparent fixed-price proposal.',
    'mki.cta':          'Request AI consulting →',

    /* Modal: Security */
    'msec.title':       'Security Consulting',
    'msec.sub':         'IT security doesn\'t start with technology – it starts with awareness. We strengthen both.',
    'msec.s1.h':        '🎯 Security Awareness Training',
    'msec.s1.p':        'The biggest vulnerability in any system is the human factor. Our awareness training sensitises your team to real threats – practical, interactive and lasting.',
    'msec.s1.hl.title': 'Topics: Awareness',
    'msec.s1.hl.text':  'Phishing · Social engineering · Password security · BYOD risks · Deepfakes',
    'msec.s2.h':        '🔍 Security Consulting & Audits',
    'msec.s2.p':        'We analyse your IT infrastructure systematically: Where are the vulnerabilities? What is critical, what is acceptable? The result is a prioritised action plan – clear, actionable, no IT jargon.',
    'msec.s2.hl.title': 'Services: Audit',
    'msec.s2.hl.text':  'Risk analysis · GDPR check · Network security · Access control · Incident response plan',
    'msec.s3.h':        '📚 Team Training',
    'msec.s3.p':        'From one-hour briefings to multi-day workshops – we tailor format and depth to your audience. Remote or on-site in Leipzig and across Germany.',
    'msec.faq.h':       'Frequently Asked Questions',
    'msec.faq1.q':      'Are awareness trainings really effective?',
    'msec.faq1.a':      'Studies show that regular training reduces phishing click rates by up to 70%. The human factor is the most common attack vector – and the easiest to improve.',
    'msec.faq2.q':      'We\'re a small team – is it worth it?',
    'msec.faq2.a':      'Small teams are attractive targets precisely because they\'re often less protected. A half-day awareness training can prevent thousands in damages.',
    'msec.faq3.q':      'Do you offer ongoing security support?',
    'msec.faq3.a':      'Yes, as part of our retainer agreement. This keeps your security posture current even as the threat landscape evolves.',
    'msec.cta':         'Request security consulting →',
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
