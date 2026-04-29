/* ═══════════════════════════════════════════════════════════════
   LOTUS CONSULTING — JavaScript Interactions
═════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  let activeModal = null;

  const TRANSLATIONS = {
    de: {
      'meta.title': 'Lotus Consulting | Marke finden, Nische schärfen, sichtbar werden',
      'meta.description': 'Lotus Consulting hilft Künstler:innen, Kreativschaffenden, Musiker:innen, Trainer:innen, Coaches, Berater:innen sowie Vereinen, NGOs, Stiftungen und kulturellen wie sozialen Einrichtungen, ihre Marke zu finden, ihre Nische zu schärfen und ihren Auftritt sichtbar zu machen.',
      'banner.text': '🚧 <strong>Under Construction</strong> 🚧',
      'nav.services': 'Marke & Auftritt',
      'nav.portfolio': 'Wirkung',
      'nav.about': 'Profil',
      'nav.contact': 'Kontakt',
      'nav.menu': 'Menü öffnen',
      'modal.close': 'Schließen',
      'hero.badge': 'Positionierung, Marke & Auftritt für wandelnde Angebote',
      'hero.headline': 'Wie wollt ihr wirken, wenn Menschen euch zum ersten Mal begegnen?',
      'hero.copy': 'Lotus Consulting begleitet euch dabei, eure Marke herauszuarbeiten, eure Nische zu schärfen und euren Auftritt so zu gestalten, dass innere Klarheit auch nach außen sichtbar wird, in Sprache, Design, Website, Angebot und Vermarktung.',
      'hero.cta.primary': 'Projektidee besprechen',
      'studio.voice.label': 'Innen',
      'studio.voice.copy': 'Werte, Haltung, Nische, innere Arbeit',
      'studio.audience.label': 'Außen',
      'studio.audience.copy': 'Marke, Sprache, Design, Angebot, Sichtbarkeit',
      'studio.strip.1': 'Marke finden',
      'studio.strip.2': 'Nische schärfen',
      'studio.strip.3': 'Wirkung klären',
      'studio.strip.4': 'Sprache finden',
      'studio.strip.5': 'sichtbar werden',
      'studio.strip.6': 'Angebote ordnen',
      'studio.strip.7': 'stimmig vermarkten',
      'diagnosis.tag': 'Marke & Nische',
      'diagnosis.title': 'Wenn ihr viel in Bewegung bringt, aber euer Auftritt noch nicht zeigt, wofür ihr wirklich steht.',
      'diagnosis.copy': 'Ob ihr mit eurer Persönlichkeit arbeitet – als Künstler:in, Kreativschaffende:r, Musiker:in, Trainer:in, Coach oder Berater:in – oder als Verein, NGO, Stiftung oder kulturelle bzw. soziale Einrichtung auftretet: Gute Vermarktung beginnt nicht mit Lautstärke, sondern mit Klarheit. Wer seid ihr, wofür steht ihr, wen wollt ihr erreichen und wie soll sich euer Angebot anfühlen?',
      'diagnosis.list.title': 'Typische Fragen in diesem Prozess',
      'diagnosis.list.item1': 'Wie kann ich mich gut darstellen, ohne mich zu verbiegen?',
      'diagnosis.list.item2': 'Wie kann ich mich vermarkten, ohne mich künstlich laut zu machen?',
      'diagnosis.list.item3': 'Was ist eigentlich mein Kern und was davon gehört sichtbar nach außen?',
      'diagnosis.list.item4': 'Welche Nische passt wirklich zu mir und meinem Angebot?',
      'diagnosis.list.item5': 'Wie ordne ich Auftritte, Programme, Sessions, Kurse oder Produkte klar?',
      'diagnosis.list.item6': 'Welche Sprache, Bilder und Schritte fühlen sich nach mir an?',
      'diagnosis.statement': 'Marke entsteht dort, wo innere Klarheit und sichtbare Wirkung zusammenfinden.',
      'acts.tag': 'Innen nach außen',
      'acts.title': 'Marke finden. Sprache schärfen. Auftritt stimmig machen.',
      'acts.copy': 'Wir verbinden interne und externe Arbeit: Reflexion, Übungen, Positionierung, Angebotsstruktur, Markenbild und digitale Umsetzung.',
      'acts.card1.index': 'Akt 01',
      'acts.card1.title': 'Erkennen',
      'acts.card1.copy': 'Mit gezielten Fragen und internen Übungen legen wir frei, was euch ausmacht, wie ihr arbeitet und welche Qualität Menschen bei euch finden.',
      'acts.card2.index': 'Akt 02',
      'acts.card2.title': 'Ausrichten',
      'acts.card2.copy': 'Wir schärfen Marke, Nische, Sprache und Angebotsarchitektur, damit aus vielen Themen ein klares Profil und eine greifbare Vermarktung werden.',
      'acts.card3.index': 'Akt 03',
      'acts.card3.title': 'Zeigen',
      'acts.card3.copy': 'Danach wird eure Marke sichtbar: in Website, Design, Texten, Buchungswegen und Kontaktpunkten, die professionell wirken, aber persönlich bleiben.',
      'services.tag': 'Bausteine',
      'services.headline': 'Alles, was ihr braucht, um eure Marke zu finden und stimmig sichtbar zu machen.',
      'services.copy': 'Nicht als starres Agenturpaket, sondern als geführter Prozess zwischen innerer Klarheit, äußerer Wirkung und digitaler Umsetzung.',
      'services.card1.kicker': '01 / Positionierung',
      'services.card1.title': 'Wir arbeiten heraus, was eure Marke im Kern ausmacht.',
      'services.card1.copy': 'Bevor Design sichtbar wird, klären wir Identität, Haltung, Arbeitsweise, Zielgruppe und Nische. So entsteht kein generischer Auftritt, sondern ein Profil mit Richtung.',
      'services.card1.item1': 'Interne und externe Übungen zur Marken- und Rollenfindung',
      'services.card1.item2': 'Positionierung zwischen Kompetenz, Persönlichkeit und Wirkung',
      'services.card1.item3': 'Nische schärfen und Zielgruppen klar benennen',
      'services.card1.item4': 'Angebote so ordnen, dass andere sie sofort greifen können',
      'services.card1.cta': 'Beratung anfragen →',
      'services.card2.kicker': '02 / Marke & Sprache',
      'services.card2.title': 'Wir übersetzen euer Inneres in eine klare Sprache und ein stimmiges Bild.',
      'services.card2.copy': 'Gemeinsam entwickeln wir Tonalität, Botschaften, Designrichtung und Auftretensformen, die weder austauschbar noch überladen wirken, sondern nach euch aussehen.',
      'services.card2.item1': 'Markensprache für Website, Angebotsseiten und Social-Auftritt',
      'services.card2.item2': 'Visuelle Richtung zwischen freundlich, ruhig und prägnant',
      'services.card2.item3': 'Texte, die eure Haltung transportieren statt Floskeln zu stapeln',
      'services.card2.item4': 'Gestalterische Leitlinien für einen wiedererkennbaren Auftritt',
      'services.card2.cta': 'Website planen →',
      'services.card3.badge': 'Sichtbarkeit',
      'services.card3.kicker': '03 / Website & Vermarktung',
      'services.card3.title': 'Wir bauen die digitale Form, in der eure Marke Menschen wirklich erreicht.',
      'services.card3.copy': 'Ob Website, Landingpage, Shop, Programmseite oder Buchungsfluss: Wir gestalten die Wege so, dass Vertrauen entsteht und euer Angebot leicht verständlich wird.',
      'services.card3.item1': 'Webseiten und Seitenstrukturen für Auftritte, Sessions, Kurse und Programme',
      'services.card3.item2': 'Landingpages, Buchungswege und Angebote mit klarer Leserichtung',
      'services.card3.item3': 'Shop- und Angebotslogik für Produkte, Kurse und Begleitung',
      'services.card3.item4': 'Vermarktung, die sich stimmig und nicht aufgesetzt anfühlt',
      'services.card3.cta': 'Shopidee besprechen →',
      'services.card4.kicker': '04 / Begleitung',
      'services.card4.title': 'Wir bleiben im Prozess, wenn sich eure Marke weiterentwickelt.',
      'services.card4.copy': 'Wenn sich eure Arbeit weiterentwickelt, verändert sich oft auch der Außenauftritt. Deshalb begleiten wir euch weiter, wenn Angebote klarer werden, neue Formate entstehen oder eure Nische feiner wird.',
      'services.card4.item1': 'Weiterentwicklung von Marke, Sprache und Angebotsdarstellung',
      'services.card4.item2': 'Neue Seiten, Angebotsformen und Landingpages für nächste Schritte',
      'services.card4.item3': 'Checks für Vermarktung, Klarheit und Einstiegshürden',
      'services.card4.item4': 'Laufende Abstimmung zwischen Idee, Gestaltung und Umsetzung',
      'services.card4.cta': 'Betreuung anfragen →',
      'portfolio.tag': 'Wirkungsmomente',
      'portfolio.headline': 'Ein guter Auftritt fühlt sich innen stimmig an und ist außen klar lesbar.',
      'portfolio.copy': 'Diese drei Momente entscheiden oft darüber, ob Menschen verstehen, vertrauen und sich angesprochen fühlen.',
      'portfolio.card1.alt': 'Bild für Markenkern und innere Klarheit',
      'portfolio.card1.title': 'Kern spüren',
      'portfolio.card1.copy': 'Menschen merken schnell, ob ein Auftritt aus einer echten inneren Klarheit kommt oder nur aus zusammengewürfelten Botschaften besteht.',
      'portfolio.card1.cta': 'Kern schärfen →',
      'portfolio.card3.alt': 'Bild für Sichtbarkeit, Wege und Vermarktung',
      'portfolio.card3.title': 'Sichtbar werden',
      'portfolio.card3.copy': 'Vermarktung wird leichter, wenn Positionierung, Design, Angebot und nächster Schritt zusammenpassen statt gegeneinander zu arbeiten.',
      'portfolio.card3.cta': 'Sichtbarkeit ordnen →',
      'portfolio.card2.alt': 'Bild für Markenstimme, Sprache und Struktur',
      'portfolio.card2.title': 'Sprache finden',
      'portfolio.card2.copy': 'Eure Marke wirkt erst dann stark, wenn Worte, Bilder und Struktur dieselbe Haltung tragen und niemand rätseln muss, was ihr anbietet.',
      'portfolio.card2.cta': 'Sprache klären →',
      'portfolio.modal1.kicker': 'Wirkungsmoment 01',
      'portfolio.modal1.title': 'Kern spüren – die Basis für alles, was nach außen geht.',
      'portfolio.modal1.lead': 'Bevor Worte, Bilder oder Webseiten gestaltet werden, klären wir, was im Inneren tatsächlich trägt: Haltung, Werte, Arbeitsweise und das, was nur ihr in dieser Form anbietet.',
      'portfolio.modal1.body1': 'Viele Auftritte wirken austauschbar, weil sie aus Trends, fremden Vorlagen und gut gemeinten Tipps zusammengesetzt sind. Sobald wir aber den eigenen Kern frei legen, ordnet sich vieles wie von selbst: Welche Themen gehören zu mir, welche nicht? Welche Sprache passt, welche nicht? Welche Menschen will ich erreichen – und welche bewusst nicht?',
      'portfolio.modal1.body2': 'Im Rahmen dieses Wirkungsmoments arbeiten wir mit gezielten Fragen, internen Übungen und Reflexionsformaten. Das Ergebnis ist kein Hochglanzdokument, sondern eine klare innere Landkarte, auf die sich alle weiteren Schritte berufen können.',
      'portfolio.modal1.li1': 'Werte-, Rollen- und Identitätsarbeit',
      'portfolio.modal1.li2': 'Klärung von Zielgruppe und Nische',
      'portfolio.modal1.li3': 'Unterscheidungsmerkmale gegenüber ähnlichen Angeboten',
      'portfolio.modal1.li4': 'Grundlage für Marke, Sprache und Auftritt',
      'portfolio.modal1.cta': 'Kern gemeinsam schärfen',
      'portfolio.modal2.kicker': 'Wirkungsmoment 02',
      'portfolio.modal2.title': 'Sichtbar werden – ohne sich verbiegen zu müssen.',
      'portfolio.modal2.lead': 'Sichtbarkeit beginnt nicht mit lauter Vermarktung, sondern mit einem stimmigen Pfad: vom ersten Eindruck über das Verstehen des Angebots bis zum nächsten konkreten Schritt.',
      'portfolio.modal2.body1': 'Wir sortieren Website, Landingpages, Angebotsseiten und Buchungswege so, dass Menschen sich abgeholt fühlen, statt sich durch Lärm zu kämpfen. Positionierung, Design und Inhalte arbeiten zusammen – und nicht gegeneinander.',
      'portfolio.modal2.body2': 'Daraus entsteht eine Form von Sichtbarkeit, die freundlich und klar wirkt, aber trotzdem konkret zur Anfrage, zur Buchung oder zum nächsten Schritt führt – ohne künstliche Dringlichkeit oder reizoptimierte Floskeln.',
      'portfolio.modal2.li1': 'Klarer Aufbau von Website und Landingpages',
      'portfolio.modal2.li2': 'Stimmige Wege von der Startseite zur Anfrage',
      'portfolio.modal2.li3': 'Sichtbarkeit für Suchmaschinen und Empfehlungen',
      'portfolio.modal2.li4': 'Vermarktung, die zur Marke passt statt zu Trends',
      'portfolio.modal2.cta': 'Sichtbarkeit gemeinsam ordnen',
      'portfolio.modal3.kicker': 'Wirkungsmoment 03',
      'portfolio.modal3.title': 'Sprache finden – wenn Worte, Bilder und Struktur dieselbe Haltung tragen.',
      'portfolio.modal3.lead': 'Eine Marke wird erst dann stark, wenn ihre Sprache zum Kern passt: persönlich genug, um wiedererkennbar zu sein, klar genug, um sofort verstanden zu werden.',
      'portfolio.modal3.body1': 'Wir entwickeln eine Tonalität, die zu euch passt – weder überladen noch beliebig – und gießen sie in Texte, Botschaften, Angebotsbeschreibungen und Mikro-Texte (Buttons, Formulare, Bestätigungen). So entsteht ein Auftritt, der innen und außen dieselbe Sprache spricht.',
      'portfolio.modal3.body2': 'Parallel sortieren wir die visuelle Richtung: Bildwelt, Farben, Typografie und Strukturelemente. Die Marke wirkt dann nicht nur schön, sondern lesbar – und niemand muss rätseln, was ihr anbietet.',
      'portfolio.modal3.li1': 'Markentonalität und Botschaften',
      'portfolio.modal3.li2': 'Texte für Website, Angebots- und Landingpages',
      'portfolio.modal3.li3': 'Visuelle Leitlinien zwischen Bild, Farbe und Typografie',
      'portfolio.modal3.li4': 'Mikro-Texte für Buttons, Formulare und Bestätigungen',
      'portfolio.modal3.cta': 'Sprache gemeinsam klären',
      'about.tag': 'Profil',
      'about.headline': 'Zwischen innerem Prozess und sichtbarer Marke.',
      'about.copy1': 'Lotus Consulting arbeitet mit Menschen, Initiativen und Marken, die nicht einfach nur sichtbarer werden wollen, sondern stimmiger: Künstler:innen, Kreativschaffende, Musiker:innen, Trainer:innen, Coaches, Berater:innen, Studios, Praxen, Vereine, NGOs, Stiftungen sowie kulturelle und soziale Einrichtungen mit Tiefe.',
      'about.copy2': 'Uns interessiert nicht nur, wie etwas aussieht, sondern was darunter liegt. Deshalb verbinden wir Positionierung, Reflexion, Markenarbeit und digitale Gestaltung zu einem Prozess, der nach euch klingt und trotzdem klar vermittelbar bleibt.',
      'about.panel.title': 'Unser Blick auf Markenentwicklung',
      'about.panel.item1': '<strong>Innere Arbeit vor Fassade:</strong> Eine gute Marke entsteht nicht aus Trends, sondern aus echter Klarheit.',
      'about.panel.item2': '<strong>Stimmigkeit vor Lautstärke:</strong> Vermarktung darf freundlich, klar und wirksam sein, ohne sich falsch anzufühlen.',
      'about.panel.item3': '<strong>Entwicklung vor Endzustand:</strong> Marke, Nische und Auftritt dürfen sich mit eurem Weg weiter verfeinern.',
      'cta.headline': 'Wenn ihr eure Marke klarer sehen wollt, lasst uns von innen nach außen denken.',
      'cta.copy': 'Ob Positionierung, Nische, Sprache, Website oder Vermarktung: Wir schauen gemeinsam darauf, was sichtbar werden darf und wie sich euer Auftritt endlich stimmig anfühlen kann.',
      'cta.primary': 'Kontakt',
      'cta.secondary': 'Schreibt uns kurz, worum es geht. Wir melden uns zeitnah bei euch.',
      'contactModal.kicker': 'Kontakt',
      'contactModal.title': 'Erzählt uns, wo ihr gerade mit eurer Marke steht.',
      'contactModal.copy': 'Ob Positionierung, Website, Shop, Sprache oder Vermarktung: Wir schauen gemeinsam, was euer nächster stimmiger Schritt ist.',
      'contactModal.name.label': 'Name',
      'contactModal.name.placeholder': 'Euer Name',
      'contactModal.email.label': 'E-Mail',
      'contactModal.email.placeholder': 'kontakt@beispiel.de',
      'contactModal.subject.label': 'Worum geht es?',
      'contactModal.subject.option.placeholder': 'Bitte auswählen',
      'contactModal.subject.option1': 'Markenfindung & Positionierung',
      'contactModal.subject.option2': 'Website & Auftritt',
      'contactModal.subject.option3': 'Shop & Angebot',
      'contactModal.subject.option4': 'Begleitung & Vermarktung',
      'contactModal.subject.option5': 'Sonstiges',
      'contactModal.message.label': 'Nachricht',
      'contactModal.message.placeholder': 'Was möchtet ihr aufbauen, schärfen oder verändern?',
      'contactModal.submit': 'Nachricht senden',
      'contactModal.note': 'Eure Angaben werden vertraulich behandelt und direkt an contact@lotus-it.eu gesendet.',
      'contactModal.success': 'Danke. Eure Nachricht wurde gesendet.',
      'contactModal.error': 'Die Nachricht konnte gerade nicht gesendet werden. Bitte versuche es erneut oder schreibe direkt an contact@lotus-it.eu.',
      'footer.brand.copy': 'Webseiten & Shops für Künstler:innen · Kreative · Musiker:innen · Trainer:innen · Coaches · Studios<br>Vereine · NGOs · Stiftungen',
      'footer.services': 'Marke & Auftritt',
      'footer.selfcheck': 'Selbstcheck',
      'footer.portfolio': 'Wirkung',
      'footer.about': 'Profil',
      'footer.contact': 'Kontakt',
      'footer.tools': 'Sicherheitstools',
      'footer.home': 'Zur Startseite',
      'footer.privacy': 'Datenschutz',
      'footer.imprint': 'Impressum',
      'footer.copy': '© 2026 Lotus Consulting · Alle Rechte vorbehalten',
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
          <p>Diese Webseite wird als statische HTML-Seite betrieben. Es werden <strong>keine Cookies</strong> gesetzt, <strong>keine Tracking- oder Analysedienste</strong> eingebunden und <strong>keine Daten an Drittanbieter</strong> übermittelt. Die Schriftarten (Inter, Sora) werden lokal von unserem Server geladen - es findet keine Verbindung zu Google oder anderen externen Diensten statt.</p>
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
    },
    en: {
      'meta.title': 'Lotus Consulting | Find your brand, sharpen your niche, become visible',
      'meta.description': 'Lotus Consulting helps artists, creatives, musicians, trainers, coaches and advisors as well as associations, NGOs, foundations and cultural and social institutions find their brand, sharpen their niche and shape a coherent presence.',
      'banner.text': '🚧 <strong>Under Construction</strong> 🚧',
      'nav.services': 'Brand & Presence',
      'nav.portfolio': 'Impact',
      'nav.about': 'Profile',
      'nav.contact': 'Contact',
      'nav.menu': 'Open menu',
      'modal.close': 'Close',
      'hero.badge': 'Positioning, brand & presence for evolving offers',
      'hero.headline': 'How do you want to come across when people encounter you for the first time?',
      'hero.copy': 'Lotus Consulting helps you uncover your brand, sharpen your niche and shape your presence so inner clarity becomes outwardly visible in language, design, website, offer and marketing.',
      'hero.cta.primary': 'Discuss your project idea',
      'studio.voice.label': 'Inside',
      'studio.voice.copy': 'Values, attitude, niche, inner work',
      'studio.audience.label': 'Outside',
      'studio.audience.copy': 'Brand, language, design, offer, visibility',
      'studio.strip.1': 'Find your brand',
      'studio.strip.2': 'Sharpen your niche',
      'studio.strip.3': 'Clarify your impact',
      'studio.strip.4': 'Find your language',
      'studio.strip.5': 'become visible',
      'studio.strip.6': 'Structure your offers',
      'studio.strip.7': 'market with integrity',
      'diagnosis.tag': 'Brand & Niche',
      'diagnosis.title': 'When you are moving a lot, but your presence still does not show what you truly stand for.',
      'diagnosis.copy': 'Whether you work with your personality – as an artist, creative, musician, trainer, coach or advisor – or appear as an association, NGO, foundation, or cultural or social institution: good marketing does not start with volume, but with clarity. Who are you, what do you stand for, who do you want to reach and how should your offer feel?',
      'diagnosis.list.title': 'Typical questions in this process',
      'diagnosis.list.item1': 'How can I present myself well without bending myself out of shape?',
      'diagnosis.list.item2': 'How can I market myself without forcing myself to be artificially loud?',
      'diagnosis.list.item3': 'What is actually my core, and what of it should be visible on the outside?',
      'diagnosis.list.item4': 'Which niche truly fits me and my offer?',
      'diagnosis.list.item5': 'How do I structure performances, programs, sessions, courses or products clearly?',
      'diagnosis.list.item6': 'What language, images and steps genuinely feel like me?',
      'diagnosis.statement': 'A brand emerges where inner clarity and visible impact come together.',
      'acts.tag': 'From the inside out',
      'acts.title': 'Find your brand. Sharpen your language. Make your presence feel aligned.',
      'acts.copy': 'We connect inner and outer work: reflection, exercises, positioning, offer structure, brand image and digital implementation.',
      'acts.card1.index': 'Act 01',
      'acts.card1.title': 'Recognise',
      'acts.card1.copy': 'With focused questions and inner exercises, we uncover what defines you, how you work and what quality people find in you.',
      'acts.card2.index': 'Act 02',
      'acts.card2.title': 'Align',
      'acts.card2.copy': 'We sharpen your brand, niche, language and offer architecture so many themes become a clear profile and a tangible way to market yourself.',
      'acts.card3.index': 'Act 03',
      'acts.card3.title': 'Show',
      'acts.card3.copy': 'Then your brand becomes visible: in website, design, copy, booking paths and contact points that feel professional yet personal.',
      'services.tag': 'Building blocks',
      'services.headline': 'Everything you need to find your brand and become visible in a way that feels aligned.',
      'services.copy': 'Not as a rigid agency package, but as a guided process between inner clarity, outer impact and digital implementation.',
      'services.card1.kicker': '01 / Positioning',
      'services.card1.title': 'We uncover what defines your brand at its core.',
      'services.card1.copy': 'Before design becomes visible, we clarify identity, attitude, way of working, audience and niche. That creates a profile with direction instead of a generic presence.',
      'services.card1.item1': 'Inner and outer exercises for brand and role discovery',
      'services.card1.item2': 'Positioning between expertise, personality and impact',
      'services.card1.item3': 'Sharpen your niche and name target groups clearly',
      'services.card1.item4': 'Structure your offers so others grasp them immediately',
      'services.card1.cta': 'Request consulting →',
      'services.card2.kicker': '02 / Brand & Language',
      'services.card2.title': 'We translate your inner clarity into language and a coherent visual identity.',
      'services.card2.copy': 'Together we develop tone, messages, design direction and forms of presence that feel neither generic nor overloaded, but unmistakably yours.',
      'services.card2.item1': 'Brand language for website, offer pages and social presence',
      'services.card2.item2': 'Visual direction between warmth, calm and precision',
      'services.card2.item3': 'Copy that carries your attitude instead of stacking empty phrases',
      'services.card2.item4': 'Design guidelines for a recognisable presence',
      'services.card2.cta': 'Plan your website →',
      'services.card3.badge': 'Visibility',
      'services.card3.kicker': '03 / Website & Marketing',
      'services.card3.title': 'We build the digital form in which your brand truly reaches people.',
      'services.card3.copy': 'Whether it is a website, landing page, shop, program page or booking flow, we shape the paths so trust grows and your offer becomes easy to understand.',
      'services.card3.item1': 'Websites and page structures for performances, sessions, courses and programs',
      'services.card3.item2': 'Landing pages, booking flows and offers with a clear reading direction',
      'services.card3.item3': 'Shop and offer logic for products, courses and guidance',
      'services.card3.item4': 'Marketing that feels aligned instead of performative',
      'services.card3.cta': 'Discuss the concept →',
      'services.card4.kicker': '04 / Support',
      'services.card4.title': 'We stay with you as your brand continues to evolve.',
      'services.card4.copy': 'When your work evolves, your outward presence often changes as well. That is why we keep working with you when offers become clearer, new formats emerge or your niche becomes more refined.',
      'services.card4.item1': 'Further development of brand, language and offer presentation',
      'services.card4.item2': 'New pages, offer formats and landing pages for next steps',
      'services.card4.item3': 'Checks for marketing clarity and entry barriers',
      'services.card4.item4': 'Ongoing alignment between idea, design and implementation',
      'services.card4.cta': 'Request support →',
      'portfolio.tag': 'Moments of impact',
      'portfolio.headline': 'A strong presence feels aligned on the inside and readable on the outside.',
      'portfolio.copy': 'These three moments often determine whether people understand, trust and feel addressed.',
      'portfolio.card1.alt': 'Image for brand core and inner clarity',
      'portfolio.card1.title': 'Feel the core',
      'portfolio.card1.copy': 'People notice quickly whether a presence grows from genuine inner clarity or from stitched-together messages.',
      'portfolio.card1.cta': 'Sharpen the core →',
      'portfolio.card3.alt': 'Image for visibility, pathways and marketing',
      'portfolio.card3.title': 'Become visible',
      'portfolio.card3.copy': 'Marketing becomes easier when positioning, design, offer and next step support each other instead of pulling against each other.',
      'portfolio.card3.cta': 'Organise visibility →',
      'portfolio.card2.alt': 'Image for brand voice, language and structure',
      'portfolio.card2.title': 'Find your language',
      'portfolio.card2.copy': 'Your brand only feels strong when words, images and structure carry the same attitude and nobody has to guess what you offer.',
      'portfolio.card2.cta': 'Clarify your language →',
      'portfolio.modal1.kicker': 'Impact moment 01',
      'portfolio.modal1.title': 'Feel the core – the foundation for everything that goes outward.',
      'portfolio.modal1.lead': 'Before any words, images or websites are designed, we clarify what truly carries from within: attitude, values, working style and what only you offer in this form.',
      'portfolio.modal1.body1': 'Many presences feel interchangeable because they are stitched together from trends, borrowed templates and well-meant tips. As soon as we expose the actual core, much of it falls into place: which themes belong to me, which do not? Which language fits, which does not? Which people do I want to reach – and which not?',
      'portfolio.modal1.body2': 'In this impact moment we work with focused questions, inner exercises and reflection formats. The result is not a glossy document, but a clear inner map that all further steps can refer back to.',
      'portfolio.modal1.li1': 'Work on values, roles and identity',
      'portfolio.modal1.li2': 'Clarification of audience and niche',
      'portfolio.modal1.li3': 'Differentiators compared to similar offers',
      'portfolio.modal1.li4': 'Foundation for brand, language and presence',
      'portfolio.modal1.cta': 'Sharpen the core together',
      'portfolio.modal2.kicker': 'Impact moment 02',
      'portfolio.modal2.title': 'Become visible – without having to bend yourself out of shape.',
      'portfolio.modal2.lead': 'Visibility does not start with loud marketing, but with a coherent path: from the first impression through understanding the offer to the next concrete step.',
      'portfolio.modal2.body1': 'We arrange website, landing pages, offer pages and booking flows so that people feel met, instead of having to fight through noise. Positioning, design and content work together – not against each other.',
      'portfolio.modal2.body2': 'What emerges is a form of visibility that feels friendly and clear, yet concretely leads to an enquiry, a booking or the next step – without artificial urgency or attention-optimised clichés.',
      'portfolio.modal2.li1': 'Clear structure for website and landing pages',
      'portfolio.modal2.li2': 'Coherent paths from home page to enquiry',
      'portfolio.modal2.li3': 'Visibility for search engines and recommendations',
      'portfolio.modal2.li4': 'Marketing that fits the brand instead of trends',
      'portfolio.modal2.cta': 'Organise visibility together',
      'portfolio.modal3.kicker': 'Impact moment 03',
      'portfolio.modal3.title': 'Find your language – when words, images and structure carry the same attitude.',
      'portfolio.modal3.lead': 'A brand only feels strong when its language matches the core: personal enough to be recognisable, clear enough to be understood right away.',
      'portfolio.modal3.body1': 'We develop a tone of voice that fits you – neither overloaded nor arbitrary – and apply it across texts, messages, offer descriptions and micro-copy (buttons, forms, confirmations). The result is a presence that speaks the same language inside and out.',
      'portfolio.modal3.body2': 'In parallel we sort out the visual direction: imagery, colours, typography and structural elements. The brand then feels not only beautiful but readable – and nobody has to guess what you offer.',
      'portfolio.modal3.li1': 'Brand tone of voice and messaging',
      'portfolio.modal3.li2': 'Copy for website, offer and landing pages',
      'portfolio.modal3.li3': 'Visual guidelines across imagery, colour and typography',
      'portfolio.modal3.li4': 'Micro-copy for buttons, forms and confirmations',
      'portfolio.modal3.cta': 'Clarify your language together',
      'about.tag': 'Profile',
      'about.headline': 'Between inner process and visible brand.',
      'about.copy1': 'Lotus Consulting works with people, initiatives and brands that do not simply want to become more visible, but more coherent: artists, creatives, musicians, trainers, coaches, advisors, studios, practices, associations, NGOs, foundations and cultural and social institutions with depth.',
      'about.copy2': 'We are interested not only in how something looks, but in what lies beneath it. That is why we connect positioning, reflection, brand work and digital design into a process that sounds like you while remaining clear and communicable.',
      'about.panel.title': 'How we approach brand development',
      'about.panel.item1': '<strong>Inner work before façade:</strong> A good brand does not grow from trends, but from genuine clarity.',
      'about.panel.item2': '<strong>Coherence before volume:</strong> Marketing can be warm, clear and effective without feeling false.',
      'about.panel.item3': '<strong>Development before finality:</strong> Brand, niche and presence are allowed to keep evolving with your path.',
      'cta.headline': 'If you want to see your brand more clearly, let us think from the inside out.',
      'cta.copy': 'Whether it is positioning, niche, language, website or marketing, we look together at what is ready to become visible and how your presence can finally feel aligned.',
      'cta.primary': 'Contact',
      'cta.secondary': 'Send us a short note about what is on your mind. We will get back to you soon.',
      'contactModal.kicker': 'Contact',
      'contactModal.title': 'Tell us where you currently stand with your brand.',
      'contactModal.copy': 'Whether it is positioning, website, shop, language or marketing, we will look together at what your next aligned step can be.',
      'contactModal.name.label': 'Name',
      'contactModal.name.placeholder': 'Your name',
      'contactModal.email.label': 'Email',
      'contactModal.email.placeholder': 'you@example.com',
      'contactModal.subject.label': 'What is it about?',
      'contactModal.subject.option.placeholder': 'Please choose',
      'contactModal.subject.option1': 'Brand discovery & positioning',
      'contactModal.subject.option2': 'Website & presence',
      'contactModal.subject.option3': 'Shop & offer',
      'contactModal.subject.option4': 'Ongoing support & marketing',
      'contactModal.subject.option5': 'Something else',
      'contactModal.message.label': 'Message',
      'contactModal.message.placeholder': 'What would you like to build, sharpen or change?',
      'contactModal.submit': 'Send message',
      'contactModal.note': 'Your details are treated confidentially and sent directly to contact@lotus-it.eu.',
      'contactModal.success': 'Thank you. Your message has been sent.',
      'contactModal.error': 'Your message could not be sent right now. Please try again or write directly to contact@lotus-it.eu.',
      'footer.brand.copy': 'Websites & shops for artists · creatives · musicians · trainers · coaches · studios<br>associations · NGOs · foundations',
      'footer.services': 'Brand & Presence',
      'footer.selfcheck': 'Self-check',
      'footer.portfolio': 'Impact',
      'footer.about': 'Profile',
      'footer.contact': 'Contact',
      'footer.tools': 'Security tools',
      'footer.home': 'Back to home',
      'footer.privacy': 'Privacy',
      'footer.imprint': 'Imprint',
      'footer.copy': '© 2026 Lotus Consulting · All rights reserved',
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
          <p>This website is operated as a static HTML site. <strong>No cookies</strong> are set, <strong>no tracking or analytics services</strong> are integrated and <strong>no data is transmitted to third parties</strong>. Fonts (Inter, Sora) are loaded locally from our server - no connection is made to Google or other external services.</p>
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
    },
  };

  const openModal = (id) => {
    const modal = document.getElementById(id);
    if (!modal) return;

    if (activeModal && activeModal !== modal) {
      activeModal.hidden = true;
    }

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    activeModal = modal;
  };

  const closeModal = () => {
    if (!activeModal) return;
    activeModal.hidden = true;
    document.body.style.overflow = '';
    activeModal = null;
  };

  const applyLang = (lang) => {
    const translation = TRANSLATIONS[lang] || TRANSLATIONS.de;

    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);

    document.querySelectorAll('[data-slot]').forEach((element) => {
      const key = element.dataset.slot;
      const value = translation[key];
      if (value === undefined) return;

      if (/<\/?[a-z][\s\S]*>/i.test(value)) {
        element.innerHTML = value;
      } else {
        element.textContent = value;
      }
    });

    document.querySelectorAll('[data-slot-placeholder]').forEach((element) => {
      const key = element.dataset.slotPlaceholder;
      const value = translation[key];
      if (value !== undefined) {
        element.placeholder = value;
      }
    });

    document.querySelectorAll('[data-slot-alt]').forEach((element) => {
      const key = element.dataset.slotAlt;
      const value = translation[key];
      if (value !== undefined) {
        element.alt = value;
      }
    });

    document.title = translation['meta.title'];

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && translation['meta.description']) {
      metaDescription.content = translation['meta.description'];
    }

    const hamburgerLabel = translation['nav.menu'];
    if (hamburger && hamburgerLabel) {
      hamburger.setAttribute('aria-label', hamburgerLabel);
    }

    const closeLabel = translation['modal.close'];
    if (closeLabel) {
      document.querySelectorAll('.consulting-modal-close').forEach((button) => {
        button.setAttribute('aria-label', closeLabel);
      });
    }

    document.querySelectorAll('.lang-btn').forEach((button) => {
      button.classList.toggle('active', button.dataset.lang === lang);
    });
  };

  // ── Navbar scroll effect ──
  const navbar = document.querySelector('#navbar');
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  let lastScrollY = 0;
  const handleNavbarScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScrollY = scrollY;
  };

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });

  // ── Hamburger menu toggle ──
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !isOpen);
      mobileMenu?.classList.toggle('open');
    });

    // Close menu on link click
    document.querySelectorAll('.mobile-menu a').forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu?.classList.remove('open');
      });
    });
  }

  // ── Smooth scroll for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });

  document.querySelectorAll('.portfolio-card[data-modal]').forEach((card) => {
    card.addEventListener('click', (event) => {
      if (event.target.closest('.portfolio-link')) return;
      openModal(card.dataset.modal);
    });
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openModal(card.dataset.modal);
      }
    });
  });

  document.querySelectorAll('[data-modal-trigger]').forEach((trigger) => {
    trigger.addEventListener('click', () => openModal(trigger.dataset.modalTrigger));
    trigger.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openModal(trigger.dataset.modalTrigger);
      }
    });
  });

  document.querySelectorAll('.consulting-modal-close').forEach((button) => {
    button.addEventListener('click', closeModal);
  });

  document.querySelectorAll('.consulting-modal').forEach((modal) => {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && activeModal) {
      closeModal();
    }
  });

  const dsLink = document.getElementById('footer-datenschutz-link');
  const impLink = document.getElementById('footer-impressum-link');
  if (dsLink) {
    dsLink.addEventListener('click', (event) => {
      event.preventDefault();
      openModal('modal-datenschutz');
    });
  }
  if (impLink) {
    impLink.addEventListener('click', (event) => {
      event.preventDefault();
      openModal('modal-impressum');
    });
  }

  const contactForm = document.getElementById('consultingContactForm');
  const formSuccess = document.getElementById('consultingFormSuccess');
  const formError = document.getElementById('consultingFormError');

  if (contactForm) {
    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (!contactForm.reportValidity()) {
        return;
      }

      formSuccess.hidden = true;
      formError.hidden = true;

      const formData = new FormData(contactForm);

      try {
        const response = await fetch('send.php', {
          method: 'POST',
          body: formData,
        });

        const result = await response.json().catch(() => ({ ok: false }));

        if (!response.ok || !result.ok) {
          throw new Error(result.error || 'send-failed');
        }

        contactForm.reset();
        formSuccess.hidden = false;
      } catch (error) {
        formError.hidden = false;
      }
    });
  }

  // ── Intersection Observer for animations ──
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe cards and content
  document.querySelectorAll('.service-card, .portfolio-card, .section-header').forEach((el) => {
    // Set initial opacity to 0
    if (!el.classList.contains('featured')) {
      el.style.opacity = '0';
    }
    observer.observe(el);
  });

  // Add animation styles
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .service-card.featured {
      opacity: 1;
    }
  `;
  document.head.appendChild(style);

  const urlLang = new URLSearchParams(window.location.search).get('lang');
  const savedLang = urlLang || localStorage.getItem('lang') || 'de';
  applyLang(savedLang === 'en' ? 'en' : 'de');

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => applyLang(button.dataset.lang === 'en' ? 'en' : 'de'));
  });

  window.applyLang = applyLang;

})();
