'use strict';

const TRANSLATIONS = {
    de: {
        metaTitle: 'Sicherheits-Tools | Lotus IT-Services',
        metaDescription: 'Passwörter, verschlüsselte Einmallinks und Datei-Prüfsummen direkt im Browser erstellen - ohne Server-Verarbeitung.',
        ogLocale: 'de_DE',
        pageTitle: 'Sicherheits-Tools',
        liabilityInfoAria: 'Informationen zum Haftungsausschluss?',
        liabilityTitle: 'Haftungsausschluss',
        liabilityHtml: `<p>Die auf dieser Seite bereitgestellten Tools (insbesondere zur Textverschlüsselung, Passworterzeugung sowie zur Erstellung und Prüfung von Prüfsummen) dienen ausschließlich zu Informations-, Demonstrations- und Unterstützungszwecken im Bereich IT-Sicherheit.</p>
                <h3>Keine Garantie für Sicherheit oder Eignung</h3>
                <p>Es wird keine Gewähr dafür übernommen, dass die bereitgestellten Funktionen den aktuellen sicherheitstechnischen Anforderungen entsprechen oder für einen bestimmten Einsatzzweck geeignet sind. Insbesondere stellen die generierten Ergebnisse keine geprüften oder zertifizierten Sicherheitsmechanismen dar.</p>
                <h3>Kein Ersatz für professionelle Sicherheitsmaßnahmen</h3>
                <p>Die Nutzung der bereitgestellten Tools ersetzt keine professionelle Sicherheitsarchitektur, keine individuelle Risikoanalyse und keine fachkundige Beratung durch IT-Sicherheitsexperten. Für produktive oder sicherheitskritische Anwendungen sind stets geeignete, geprüfte und regelmäßig aktualisierte Verfahren einzusetzen.</p>
                <h3>Nutzung auf eigenes Risiko</h3>
                <p>Die Verwendung der erzeugten Passwörter, Verschlüsselungen oder Prüfsummen erfolgt auf eigene Verantwortung. Der Betreiber übernimmt keine Haftung für Schäden, Datenverluste, Sicherheitsvorfälle oder sonstige Nachteile, die direkt oder indirekt aus der Nutzung der Tools entstehen, sofern kein vorsätzliches oder grob fahrlässiges Verschulden vorliegt.</p>
                <h3>Einschränkungen kryptografischer Verfahren</h3>
                <p>Die implementierten Verfahren können vereinfacht, eingeschränkt oder nicht für den produktiven Einsatz optimiert sein. Es wird ausdrücklich darauf hingewiesen, dass unsachgemäße Anwendung oder falsche Interpretation der Ergebnisse zu einem verminderten Sicherheitsniveau führen kann.</p>
                <h3>Verantwortung für eingegebene Daten</h3>
                <p>Nutzer sind selbst dafür verantwortlich, welche Daten sie in die Tools eingeben. Es wird dringend empfohlen, keine vertraulichen, personenbezogenen oder sicherheitskritischen Informationen einzugeben, sofern nicht sichergestellt ist, dass die Verarbeitung ausschließlich lokal und ohne Übertragung an Dritte erfolgt.</p>
                <h3>Keine Haftung für Drittkomponenten</h3>
                <p>Sofern externe Bibliotheken, Frameworks oder Dienste verwendet werden, übernimmt der Betreiber keine Gewähr für deren Sicherheit, Verfügbarkeit oder Funktionsfähigkeit.</p>
                <h3>Verfügbarkeit und Änderungen</h3>
                <p>Der Betreiber behält sich vor, die bereitgestellten Funktionen jederzeit ohne vorherige Ankündigung zu ändern, einzuschränken oder einzustellen. Ein Anspruch auf permanente Verfügbarkeit besteht nicht.</p>
                <p><strong>Stand:</strong> 16.04.2026</p>`,
        modalClose: 'Verstanden',
        subtitle: 'Passwörter · Text-Verschlüsselung · Datei-Prüfsummen',
        tabPassword: 'Passwort',
        tabEncrypt: 'Text verschlüsseln',
        tabChecksum: 'Datei-Prüfsumme',
        password: {
            idle: 'Klicke auf Generieren',
            lengthLabel: 'Länge (4–128):',
            uppercaseLabel: 'Großbuchstaben (A–Z):',
            lowercaseLabel: 'Kleinbuchstaben (a–z):',
            numbersLabel: 'Zahlen (0–9):',
            symbolsLabel: 'Sonderzeichen (!@#$%…):',
            memorableLabel: 'Menschenlesbar (Leet-Speak)',
            leetInfoAria: 'Warum sind Leet-Passwörter schwächer?',
            generate: 'Passwort generieren',
            copy: 'Kopieren',
            copied: 'Kopiert!',
            strength: { veryWeak: 'Sehr schwach', weak: 'Schwach', medium: 'Mittel', strong: 'Stark', veryStrong: 'Sehr stark' },
            entropy: '{value} Bit Entropie',
            approxEntropy: '~{value} Bit Entropie',
            lengthError: 'Länge muss zwischen 4 und 128 liegen.',
            optionError: 'Bitte wähle mindestens eine Option!',
            leetTitle: 'Warum sind Leet-Passwörter schwächer?',
            leetHtml: `<p>Cracking-Tools wie Hashcat haben Leet-Substitutionen als <strong>Standardregel</strong> eingebaut. Wer <code>password</code> probiert, probiert automatisch auch <code>p@55w0rd!</code> - ohne Mehraufwand.</p>
                <p>Ein Passwort wie <code>B0ckwur5tSt4nd!</code> hat strukturell nur ca. <strong>20 Bit Entropie</strong>. Ein echter Zufallsgenerator erreicht mit 16 Zeichen ~95 Bit.</p>
                <div class="modal-note"><strong>Wann trotzdem sinnvoll:</strong> Wenn das Passwort auswendig gelernt werden muss und kein Passwort-Manager in Frage kommt - z.&nbsp;B. ein WLAN-Passwort für Gäste.</div>`,
        },
        encrypt: {
            trust: 'AES-GCM 256 im Browser - Klartext verlässt nie diese Seite',
            inputLabel: 'Zu verschlüsselnder Text',
            inputPlaceholder: 'Passwort, API-Key, sensible Information…',
            passLabel: 'Passphrase (optional)',
            passInfoAria: 'Was macht die Passphrase?',
            passPlaceholder: 'Leer lassen für Schlüssel im Link',
            passHint: 'Mit Passphrase: Empfänger muss sie kennen (sicherer). Ohne: Schlüssel wird in den Link eingebettet.',
            action: 'Verschlüsseln & Link erzeugen',
            resultLabel: 'Dein Einmallink:',
            copy: 'Link kopieren',
            copied: 'Kopiert!',
            mail: 'Per E-Mail senden',
            warnHtml: '<strong>Hinweis:</strong> Diese Seite ist statisch - der Link lässt sich ohne Backend nicht serverseitig invalidieren. Behandle ihn als Einmal-Geheimnis: Empfänger soll nach dem Abruf den Link löschen.',
            mailSubject: 'Verschlüsselte Nachricht',
            mailBody: 'Hier ist der verschlüsselte Einmallink:\n\n{url}\n\nDer Link enthält nur den Ciphertext{suffix}',
            mailBodyWithPass: ' - die Passphrase wird separat übermittelt.',
            mailBodyWithoutPass: '.',
            alertError: 'Fehler bei der Verschlüsselung: {message}',
            modalTitle: 'Passphrase: Was bewirkt sie?',
            modalHtml: `<p><strong>Ohne Passphrase:</strong> Ein zufälliger Schlüssel wird erzeugt und direkt in den Link eingebettet (im URL-Fragment nach <code>#</code>). Fragmente werden vom Browser <em>nicht</em> an den Server gesendet - der Schlüssel bleibt also privat zwischen Sender und Empfänger. Jeder mit dem Link kann den Inhalt lesen.</p>
                <p><strong>Mit Passphrase:</strong> Es wird kein Schlüssel in den Link geschrieben. Stattdessen wird aus deiner Passphrase per PBKDF2 (250&nbsp;000 Iterationen, SHA-256) ein Schlüssel abgeleitet. Der Empfänger braucht <em>sowohl</em> den Link <em>als auch</em> die Passphrase - die du über einen separaten Kanal übermittelst (z.&nbsp;B. Telefon, Signal).</p>
                <div class="modal-note">Die Passphrase-Variante ist sicherer gegen unbeabsichtigte Link-Weitergabe. Für Geheimnisse mit hohem Schutzbedarf: Passphrase setzen und separat übermitteln.</div>`,
        },
        checksum: {
            trust: 'Prüfsummen werden lokal berechnet - Dateien werden nicht hochgeladen',
            algoLabel: 'Algorithmus:',
            sha1Label: 'SHA-1 (unsicher, nur für Legacy)',
            dropZone: 'Dateien hier ablegen oder klicken zum Auswählen',
            dir: 'Verzeichnis wählen',
            clear: 'Liste leeren',
            verifyLabel: 'Prüfsumme verifizieren (optional):',
            verifyPlaceholder: 'Erwartete Prüfsumme einfügen…',
            verifyHint: 'Wenn ausgefüllt, werden alle berechneten Hashes mit diesem Wert verglichen.',
            calculating: 'Berechne {algo}…',
            selectTitle: 'Klick zum Auswählen',
            copyTitle: 'Klick zum Kopieren',
            copied: '✓ kopiert',
            match: '✓ Prüfsumme stimmt überein',
            mismatch: '✗ Prüfsumme weicht ab',
            error: 'Fehler: {message}',
        },
        toolNavAria: 'Weitere Tools',
        navStrength: 'Passwort-Stärke-Test',
        navHash: 'Hash-Generator',
        home: '← Zur Startseite',
    },
    en: {
        metaTitle: 'Security Tools | Lotus IT-Services',
        metaDescription: 'Create passwords, encrypted one-time links and file checksums directly in the browser - without server-side processing.',
        ogLocale: 'en_US',
        pageTitle: 'Security Tools',
        liabilityInfoAria: 'Information about the disclaimer?',
        liabilityTitle: 'Disclaimer',
        liabilityHtml: `<p>The tools provided on this page (in particular for text encryption, password generation and the creation and verification of checksums) are intended solely for information, demonstration and support purposes in the field of IT security.</p>
                <h3>No guarantee of security or fitness</h3>
                <p>No warranty is given that the functions provided meet current security requirements or are suitable for a particular purpose. In particular, the generated results do not constitute tested or certified security mechanisms.</p>
                <h3>Not a substitute for professional security measures</h3>
                <p>Using the provided tools does not replace a professional security architecture, an individual risk assessment or expert advice from IT security specialists. For productive or security-critical applications, appropriate, tested and regularly updated procedures must always be used.</p>
                <h3>Use at your own risk</h3>
                <p>The use of generated passwords, encryptions or checksums is at your own responsibility. The operator accepts no liability for damages, data loss, security incidents or other disadvantages resulting directly or indirectly from the use of the tools, unless caused intentionally or by gross negligence.</p>
                <h3>Limitations of cryptographic procedures</h3>
                <p>The implemented procedures may be simplified, limited or not optimised for production use. It is expressly pointed out that improper use or incorrect interpretation of the results can reduce the security level.</p>
                <h3>Responsibility for entered data</h3>
                <p>Users are solely responsible for the data they enter into the tools. It is strongly recommended not to enter confidential, personal or security-critical information unless you have ensured that processing takes place locally and without transmission to third parties.</p>
                <h3>No liability for third-party components</h3>
                <p>If external libraries, frameworks or services are used, the operator accepts no responsibility for their security, availability or functionality.</p>
                <h3>Availability and changes</h3>
                <p>The operator reserves the right to modify, restrict or discontinue the provided functions at any time without prior notice. There is no claim to permanent availability.</p>
                <p><strong>Status:</strong> 16 April 2026</p>`,
        modalClose: 'Understood',
        subtitle: 'Passwords · Text encryption · File checksums',
        tabPassword: 'Password',
        tabEncrypt: 'Encrypt text',
        tabChecksum: 'File checksum',
        password: {
            idle: 'Click generate',
            lengthLabel: 'Length (4-128):',
            uppercaseLabel: 'Uppercase letters (A-Z):',
            lowercaseLabel: 'Lowercase letters (a-z):',
            numbersLabel: 'Digits (0-9):',
            symbolsLabel: 'Symbols (!@#$%…):',
            memorableLabel: 'Memorable (leet speak)',
            leetInfoAria: 'Why are leet passwords weaker?',
            generate: 'Generate password',
            copy: 'Copy',
            copied: 'Copied!',
            strength: { veryWeak: 'Very weak', weak: 'Weak', medium: 'Medium', strong: 'Strong', veryStrong: 'Very strong' },
            entropy: '{value} bits of entropy',
            approxEntropy: '~{value} bits of entropy',
            lengthError: 'Length must be between 4 and 128.',
            optionError: 'Please select at least one option.',
            leetTitle: 'Why are leet passwords weaker?',
            leetHtml: `<p>Cracking tools such as Hashcat ship with leet substitutions as a <strong>standard rule</strong>. When someone tries <code>password</code>, they automatically also try <code>p@55w0rd!</code> - with no extra effort.</p>
                <p>A password like <code>B0ckwur5tSt4nd!</code> structurally has only about <strong>20 bits of entropy</strong>. A true random generator reaches roughly 95 bits with 16 characters.</p>
                <div class="modal-note"><strong>When it can still make sense:</strong> When the password must be memorised and a password manager is not an option - for example a guest Wi-Fi password.</div>`,
        },
        encrypt: {
            trust: 'AES-GCM 256 in the browser - plaintext never leaves this page',
            inputLabel: 'Text to encrypt',
            inputPlaceholder: 'Password, API key, sensitive information…',
            passLabel: 'Passphrase (optional)',
            passInfoAria: 'What does the passphrase do?',
            passPlaceholder: 'Leave empty to embed the key in the link',
            passHint: 'With passphrase: recipient must know it (safer). Without: the key is embedded in the link.',
            action: 'Encrypt & create link',
            resultLabel: 'Your one-time link:',
            copy: 'Copy link',
            copied: 'Copied!',
            mail: 'Send by email',
            warnHtml: '<strong>Note:</strong> This page is static - without a backend the link cannot be invalidated server-side. Treat it as a one-time secret: the recipient should delete the link after retrieval.',
            mailSubject: 'Encrypted message',
            mailBody: 'Here is the encrypted one-time link:\n\n{url}\n\nThe link only contains the ciphertext{suffix}',
            mailBodyWithPass: ' - the passphrase will be sent separately.',
            mailBodyWithoutPass: '.',
            alertError: 'Encryption error: {message}',
            modalTitle: 'Passphrase: what does it change?',
            modalHtml: `<p><strong>Without a passphrase:</strong> A random key is generated and embedded directly in the link (in the URL fragment after <code>#</code>). Fragments are <em>not</em> sent to the server by the browser - so the key remains private between sender and recipient. Anyone with the link can read the content.</p>
                <p><strong>With a passphrase:</strong> No key is written into the link. Instead, a key is derived from your passphrase using PBKDF2 (250&nbsp;000 iterations, SHA-256). The recipient needs <em>both</em> the link <em>and</em> the passphrase - which you send over a separate channel (for example phone or Signal).</p>
                <div class="modal-note">The passphrase variant is safer against accidental link forwarding. For secrets with a higher protection level: set a passphrase and deliver it separately.</div>`,
        },
        checksum: {
            trust: 'Checksums are calculated locally - files are not uploaded',
            algoLabel: 'Algorithm:',
            sha1Label: 'SHA-1 (insecure, legacy only)',
            dropZone: 'Drop files here or click to choose',
            dir: 'Choose directory',
            clear: 'Clear list',
            verifyLabel: 'Verify checksum (optional):',
            verifyPlaceholder: 'Paste expected checksum…',
            verifyHint: 'If filled in, all calculated hashes are compared with this value.',
            calculating: 'Calculating {algo}…',
            selectTitle: 'Click to select',
            copyTitle: 'Click to copy',
            copied: '✓ copied',
            match: '✓ Checksum matches',
            mismatch: '✗ Checksum differs',
            error: 'Error: {message}',
        },
        toolNavAria: 'Other tools',
        navStrength: 'Password strength test',
        navHash: 'Hash generator',
        home: '← Back to home',
    },
};

let currentLang = 'de';

function getPreferredLang() {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get('lang');
    if (requested === 'de' || requested === 'en') return requested;
    const stored = localStorage.getItem('lang');
    if (stored === 'de' || stored === 'en') return stored;
    return 'de';
}

function tr(path, vars = {}) {
    const value = path.split('.').reduce((acc, key) => acc && acc[key], TRANSLATIONS[currentLang]);
    if (typeof value !== 'string') return value;
    return value.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? '');
}

function localizeHref(path) {
    return `${path}?lang=${currentLang}`;
}

function updateMeta() {
    document.documentElement.lang = currentLang;
    document.title = tr('metaTitle');

    const selectors = {
        'meta[name="description"]': tr('metaDescription'),
        'meta[property="og:title"]': tr('metaTitle'),
        'meta[property="og:description"]': tr('metaDescription'),
        'meta[property="og:locale"]': tr('ogLocale'),
        'meta[property="twitter:title"]': tr('metaTitle'),
        'meta[property="twitter:description"]': tr('metaDescription'),
    };

    Object.entries(selectors).forEach(([selector, value]) => {
        const element = document.querySelector(selector);
        if (element) element.setAttribute('content', value);
    });
}

/* ==========================================================================
 * Base64URL helpers
 * ======================================================================== */
function base64UrlEncode(buf) {
    const bytes = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
    let bin = '';
    for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

/* ==========================================================================
 * Cryptographically secure RNG helpers (shared)
 * ======================================================================== */
function cryptoRandInt(max) {
    const limit = Math.floor(0x100000000 / max) * max;
    const buf = new Uint32Array(1);
    let value;
    do {
        crypto.getRandomValues(buf);
        value = buf[0];
    } while (value >= limit);
    return value % max;
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = cryptoRandInt(i + 1);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

/* ==========================================================================
 * Tab switching
 * ======================================================================== */
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels  = document.querySelectorAll('.tab-panel');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        tabButtons.forEach(b => {
            const isActive = b === btn;
            b.classList.toggle('active', isActive);
            b.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
        tabPanels.forEach(p => p.classList.toggle('active', p.id === `tab-${target}`));
    });
});

/* ==========================================================================
 * Shared modal helpers
 * ======================================================================== */
function openModal(id) {
    document.getElementById(id).classList.add('is-open');
}
function closeModal(id) {
    document.getElementById(id).classList.remove('is-open');
}

document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.dataset.close));
});
document.querySelectorAll('.modal-backdrop').forEach(mb => {
    mb.addEventListener('click', e => { if (e.target === mb) mb.classList.remove('is-open'); });
});
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-backdrop.is-open')
            .forEach(m => m.classList.remove('is-open'));
    }
});



/* ==========================================================================
 * TOOL 1: Password Generator
 * ======================================================================== */
const passwordDisplay = document.getElementById('password-display');
const lengthEl        = document.getElementById('length');
const uppercaseEl     = document.getElementById('uppercase');
const lowercaseEl     = document.getElementById('lowercase');
const numbersEl       = document.getElementById('numbers');
const symbolsEl       = document.getElementById('symbols');
const memorableEl     = document.getElementById('memorable');
const generateBtn     = document.getElementById('generate-btn');
const copyBtn         = document.getElementById('copy-btn');
const strengthBar     = document.getElementById('strength-bar');
const strengthLabel   = document.getElementById('strength-label');
const entropyLabel    = document.getElementById('entropy-label');
const leetInfoBtn     = document.getElementById('leet-info-btn');
const haftungInfoBtn     = document.getElementById('haftung-info-btn');

function applyGeneratorTranslations() {
    currentLang = getPreferredLang();
    localStorage.setItem('lang', currentLang);
    updateMeta();

    document.getElementById('generator-title-text').textContent = tr('pageTitle');
    haftungInfoBtn.setAttribute('aria-label', tr('liabilityInfoAria'));
    document.getElementById('haftung-modal-title').textContent = tr('liabilityTitle');
    document.getElementById('haftung-modal-copy').innerHTML = tr('liabilityHtml');
    document.querySelector('.tool-subtitle').textContent = tr('subtitle');
    document.querySelector('[data-tab="password"]').textContent = tr('tabPassword');
    document.querySelector('[data-tab="encrypt"]').textContent = tr('tabEncrypt');
    document.querySelector('[data-tab="checksum"]').textContent = tr('tabChecksum');

    document.querySelector('label[for="length"]').textContent = tr('password.lengthLabel');
    document.querySelector('label[for="uppercase"]').textContent = tr('password.uppercaseLabel');
    document.querySelector('label[for="lowercase"]').textContent = tr('password.lowercaseLabel');
    document.querySelector('label[for="numbers"]').textContent = tr('password.numbersLabel');
    document.querySelector('label[for="symbols"]').textContent = tr('password.symbolsLabel');
    document.getElementById('memorable-label-text').textContent = tr('password.memorableLabel');
    leetInfoBtn.setAttribute('aria-label', tr('password.leetInfoAria'));
    generateBtn.textContent = tr('password.generate');
    copyBtn.textContent = tr('password.copy');
    if (copyBtn.disabled && !strengthLabel.textContent && !entropyLabel.textContent) {
        passwordDisplay.textContent = tr('password.idle');
        passwordDisplay.style.color = '#333';
    }
    document.getElementById('leet-modal-title').textContent = tr('password.leetTitle');
    document.getElementById('leet-modal-copy').innerHTML = tr('password.leetHtml');

    document.querySelector('#tab-encrypt .trust-badge span').textContent = tr('encrypt.trust');
    document.querySelector('label[for="enc-input"]').textContent = tr('encrypt.inputLabel');
    encInput.placeholder = tr('encrypt.inputPlaceholder');
    document.getElementById('enc-pass-label-text').textContent = tr('encrypt.passLabel');
    encInfoBtn.setAttribute('aria-label', tr('encrypt.passInfoAria'));
    encPass.placeholder = tr('encrypt.passPlaceholder');
    document.querySelector('#tab-encrypt .field-hint').textContent = tr('encrypt.passHint');
    encBtn.textContent = tr('encrypt.action');
    document.querySelector('label[for="enc-link"]').textContent = tr('encrypt.resultLabel');
    encCopyBtn.textContent = tr('encrypt.copy');
    encMailBtn.textContent = tr('encrypt.mail');
    document.querySelector('#enc-result .enc-warn').innerHTML = tr('encrypt.warnHtml');
    document.getElementById('enc-modal-title').textContent = tr('encrypt.modalTitle');
    document.getElementById('enc-modal-copy').innerHTML = tr('encrypt.modalHtml');

    document.querySelector('#tab-checksum .trust-badge span').textContent = tr('checksum.trust');
    document.querySelector('label[for="hash-algo"]').textContent = tr('checksum.algoLabel');
    document.querySelectorAll('#hash-algo option')[3].textContent = tr('checksum.sha1Label');
    document.getElementById('drop-zone-text').textContent = tr('checksum.dropZone');
    dirBtn.textContent = tr('checksum.dir');
    clearBtn.textContent = tr('checksum.clear');
    document.querySelector('label[for="verify-input"]').textContent = tr('checksum.verifyLabel');
    verifyInput.placeholder = tr('checksum.verifyPlaceholder');
    document.querySelector('#tab-checksum .field-hint').textContent = tr('checksum.verifyHint');

    document.querySelectorAll('.modal-close').forEach((button) => {
        button.textContent = tr('modalClose');
    });

    const toolNav = document.querySelector('.tool-nav');
    toolNav.setAttribute('aria-label', tr('toolNavAria'));
    const toolNavLinks = toolNav.querySelectorAll('a');
    toolNavLinks[0].textContent = tr('navStrength');
    toolNavLinks[0].href = localizeHref('strength.html');
    toolNavLinks[1].textContent = tr('navHash');
    toolNavLinks[1].href = localizeHref('hash.html');

    const homeLink = document.querySelector('.nav-link');
    homeLink.textContent = tr('home');
    homeLink.href = localizeHref('it-services.html');
}

const charSets = {
    upper:  'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lower:  'abcdefghijklmnopqrstuvwxyz',
    number: '0123456789',
    symbol: '!@#$%^&*()_+~`|}{[]:;?><,./-='
};

const leetMap = {
    a: ['4', '@'], e: ['3'], i: ['1'], o: ['0'],
    s: ['5', '$'], t: ['7'], b: ['8'], g: ['9'],
};

const firstWords = [
    'Bockwurst', 'Bratwurst', 'Schnitzel', 'Beefsteak', 'Sauerkraut',
    'Biergarten', 'Eisenbahn', 'Geisterbus', 'Feuertopf', 'Steinbruch',
    'Tiefseehai', 'Blitzstrahl', 'Donnerstein', 'Silberstern', 'Tigerfell',
    'Kriegsstein', 'Meisterbier', 'Riesentor', 'Feuerstein', 'Eisenriese',
];

const secondWords = [
    'stand', 'hasser', 'meister', 'krieger', 'sieger',
    'ritter', 'held', 'feind', 'turm', 'burg',
    'berg', 'geist', 'biest', 'teufel', 'engel',
    'riese', 'strasse', 'strom', 'stein', 'jager',
];

const endSymbols = ['!', '@', '#', '$', '%', '&', '*', '?'];

function applyLeet(str) {
    const chars = str.split('');
    let substituted = false;

    const result = chars.map(char => {
        const key = char.toLowerCase();
        if (leetMap[key] && cryptoRandInt(100) < 65) {
            const opts = leetMap[key];
            substituted = true;
            return opts[cryptoRandInt(opts.length)];
        }
        return char;
    });

    if (!substituted) {
        const eligibleIdx = chars
            .map((_, i) => i)
            .filter(i => leetMap[chars[i].toLowerCase()]);
        if (eligibleIdx.length > 0) {
            const idx = eligibleIdx[cryptoRandInt(eligibleIdx.length)];
            const opts = leetMap[chars[idx].toLowerCase()];
            result[idx] = opts[cryptoRandInt(opts.length)];
        }
    }
    return result.join('');
}

function generateMemorablePassword() {
    const w1 = firstWords[cryptoRandInt(firstWords.length)];
    const w2 = secondWords[cryptoRandInt(secondWords.length)];
    const leet1 = w1[0] + applyLeet(w1.slice(1));
    const leet2 = w2[0].toUpperCase() + applyLeet(w2.slice(1));
    const symbol = endSymbols[cryptoRandInt(endSymbols.length)];
    return leet1 + leet2 + symbol;
}

function memorableEntropy() {
    const wordBits = Math.log2(firstWords.length * secondWords.length);
    const leetBits = 7 * (-(0.65 * Math.log2(0.65)) - (0.35 * Math.log2(0.35)));
    const symbolBits = Math.log2(endSymbols.length);
    return Math.floor(wordBits + leetBits + symbolBits);
}

function calcEntropy(charsetSize, length) {
    return Math.floor(length * Math.log2(charsetSize));
}

function getStrength(entropy) {
    if (entropy < 40)  return { label: tr('password.strength.veryWeak'), level: 1, color: '#e74c3c' };
    if (entropy < 60)  return { label: tr('password.strength.weak'),      level: 2, color: '#e67e22' };
    if (entropy < 80)  return { label: tr('password.strength.medium'),    level: 3, color: '#f1c40f' };
    if (entropy < 100) return { label: tr('password.strength.strong'),    level: 4, color: '#2ecc71' };
    return                    { label: tr('password.strength.veryStrong'), level: 5, color: '#27ae60' };
}

function showPwdError(msg) {
    passwordDisplay.textContent = msg;
    passwordDisplay.style.color = '#e74c3c';
    strengthBar.style.width = '0%';
    strengthLabel.textContent = '';
    entropyLabel.textContent = '';
    copyBtn.disabled = true;
}

function updatePwdOptionStates() {
    const isMemMode = memorableEl.checked;
    [uppercaseEl, lowercaseEl, numbersEl, symbolsEl, lengthEl].forEach(el => {
        el.disabled = isMemMode;
        el.closest('.setting').classList.toggle('setting--disabled', isMemMode);
    });
}

function generatePassword() {
    if (memorableEl.checked) {
        const password = generateMemorablePassword();
        passwordDisplay.textContent = password;
        passwordDisplay.style.color = '#333';
        copyBtn.disabled = false;

        const entropy  = memorableEntropy();
        const strength = getStrength(entropy);
        strengthBar.style.width           = `${Math.min(100, (strength.level / 5) * 100)}%`;
        strengthBar.style.backgroundColor = strength.color;
        strengthLabel.textContent         = strength.label;
        entropyLabel.textContent          = tr('password.approxEntropy', { value: entropy });
        return;
    }

    const length = parseInt(lengthEl.value, 10);
    if (isNaN(length) || length < 4 || length > 128) {
        showPwdError(tr('password.lengthError'));
        return;
    }

    const selectedSets = [
        uppercaseEl.checked ? charSets.upper  : null,
        lowercaseEl.checked ? charSets.lower  : null,
        numbersEl.checked   ? charSets.number : null,
        symbolsEl.checked   ? charSets.symbol : null,
    ].filter(Boolean);

    if (selectedSets.length === 0) {
        showPwdError(tr('password.optionError'));
        return;
    }

    const fullCharset = selectedSets.join('');
    const mandatory = selectedSets.map(set => set[cryptoRandInt(set.length)]);
    const remaining = Array.from(
        { length: length - mandatory.length },
        () => fullCharset[cryptoRandInt(fullCharset.length)]
    );
    const password = shuffleArray([...mandatory, ...remaining]).join('');

    passwordDisplay.textContent = password;
    passwordDisplay.style.color = '#333';
    copyBtn.disabled = false;

    const entropy  = calcEntropy(fullCharset.length, length);
    const strength = getStrength(entropy);
    strengthBar.style.width           = `${Math.min(100, (strength.level / 5) * 100)}%`;
    strengthBar.style.backgroundColor = strength.color;
    strengthLabel.textContent         = strength.label;
    entropyLabel.textContent          = tr('password.entropy', { value: entropy });
}

async function copyPassword() {
    if (copyBtn.disabled) return;
    try {
        await navigator.clipboard.writeText(passwordDisplay.textContent);
        const orig = copyBtn.textContent;
        copyBtn.textContent = tr('password.copied');
        setTimeout(() => { copyBtn.textContent = orig; }, 1500);
    } catch { /* ignore */ }
}

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);
leetInfoBtn.addEventListener('click', () => openModal('leet-modal'));
haftungInfoBtn.addEventListener('click', () => openModal('haftung-modal'));
memorableEl.addEventListener('change', () => { updatePwdOptionStates(); generatePassword(); });

/* ==========================================================================
 * TOOL 2: Text Encryption with Shareable Link
 * ======================================================================== */
const encInput    = document.getElementById('enc-input');
const encPass     = document.getElementById('enc-pass');
const encBtn      = document.getElementById('enc-btn');
const encResult   = document.getElementById('enc-result');
const encLink     = document.getElementById('enc-link');
const encCopyBtn  = document.getElementById('enc-copy-btn');
const encMailBtn  = document.getElementById('enc-mail-btn');
const encInfoBtn  = document.getElementById('enc-info-btn');

const PBKDF2_ITERATIONS = 250000;

async function encryptText() {
    const plaintext = encInput.value;
    if (!plaintext) return;

    const passphrase = encPass.value;
    const usePassphrase = passphrase.length > 0;

    const encoder = new TextEncoder();
    const iv = crypto.getRandomValues(new Uint8Array(12));

    let key, blob;

    if (usePassphrase) {
        const salt = crypto.getRandomValues(new Uint8Array(16));
        const keyMaterial = await crypto.subtle.importKey(
            'raw', encoder.encode(passphrase), 'PBKDF2', false, ['deriveKey']
        );
        key = await crypto.subtle.deriveKey(
            { name: 'PBKDF2', salt, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' },
            keyMaterial,
            { name: 'AES-GCM', length: 256 },
            false,
            ['encrypt']
        );
        const ciphertext = await crypto.subtle.encrypt(
            { name: 'AES-GCM', iv }, key, encoder.encode(plaintext)
        );
        // Blob: salt (16) || iv (12) || ciphertext
        blob = new Uint8Array(salt.length + iv.length + ciphertext.byteLength);
        blob.set(salt, 0);
        blob.set(iv, salt.length);
        blob.set(new Uint8Array(ciphertext), salt.length + iv.length);
    } else {
        key = await crypto.subtle.generateKey(
            { name: 'AES-GCM', length: 256 }, true, ['encrypt']
        );
        const ciphertext = await crypto.subtle.encrypt(
            { name: 'AES-GCM', iv }, key, encoder.encode(plaintext)
        );
        // Blob: iv (12) || ciphertext
        blob = new Uint8Array(iv.length + ciphertext.byteLength);
        blob.set(iv, 0);
        blob.set(new Uint8Array(ciphertext), iv.length);
    }

    const blobEncoded = base64UrlEncode(blob);
    const baseUrl = new URL(window.location.origin + window.location.pathname.replace(/[^/]*$/, 'view.html'));
    baseUrl.searchParams.set('lang', currentLang);

    let url;
    if (usePassphrase) {
        url = `${baseUrl.toString()}#p=1&c=${blobEncoded}`;
    } else {
        const rawKey = await crypto.subtle.exportKey('raw', key);
        url = `${baseUrl.toString()}#k=${base64UrlEncode(rawKey)}&c=${blobEncoded}`;
    }

    encLink.value = url;
    encResult.classList.add('is-visible');
}

async function copyEncLink() {
    if (!encLink.value) return;
    try {
        await navigator.clipboard.writeText(encLink.value);
        const orig = encCopyBtn.textContent;
        encCopyBtn.textContent = tr('encrypt.copied');
        setTimeout(() => { encCopyBtn.textContent = orig; }, 1500);
    } catch {
        encLink.select();
        document.execCommand('copy');
    }
}

function mailEncLink() {
    if (!encLink.value) return;
    const subject = encodeURIComponent(tr('encrypt.mailSubject'));
    const body = encodeURIComponent(
        tr('encrypt.mailBody', {
            url: encLink.value,
            suffix: encPass.value ? tr('encrypt.mailBodyWithPass') : tr('encrypt.mailBodyWithoutPass'),
        })
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

encBtn.addEventListener('click', () => {
    encryptText().catch(err => {
        alert(tr('encrypt.alertError', { message: err.message }));
    });
});
encCopyBtn.addEventListener('click', copyEncLink);
encMailBtn.addEventListener('click', mailEncLink);
encInfoBtn.addEventListener('click', () => openModal('enc-modal'));

/* ==========================================================================
 * TOOL 3: File Checksum
 * ======================================================================== */
const hashAlgo    = document.getElementById('hash-algo');
const dropZone    = document.getElementById('drop-zone');
const fileInput   = document.getElementById('file-input');
const dirBtn      = document.getElementById('dir-btn');
const dirInput    = document.getElementById('dir-input');
const clearBtn    = document.getElementById('clear-btn');
const verifyInput = document.getElementById('verify-input');
const fileResults = document.getElementById('file-results');

applyGeneratorTranslations();
updatePwdOptionStates();
generatePassword();

function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[c]);
}

function formatBytes(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    if (bytes < 1024 * 1024 * 1024) return (bytes / 1024 / 1024).toFixed(2) + ' MB';
    return (bytes / 1024 / 1024 / 1024).toFixed(2) + ' GB';
}

async function hashFile(file, algo) {
    const buffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest(algo, buffer);
    return Array.from(new Uint8Array(hashBuffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}

async function processFiles(fileList) {
    if (!fileList || fileList.length === 0) return;
    const algo = hashAlgo.value;
    const expected = verifyInput.value.trim().toLowerCase();

    // Sort: directories together, by path
    const files = Array.from(fileList).sort((a, b) => {
        const pa = a.webkitRelativePath || a.name;
        const pb = b.webkitRelativePath || b.name;
        return pa.localeCompare(pb);
    });

    for (const file of files) {
        const row = document.createElement('div');
        row.className = 'file-row';
        const displayName = file.webkitRelativePath || file.name;
        row.innerHTML = `
            <div class="file-row-head">
                <span class="file-name">${escapeHtml(displayName)}</span>
                <span class="file-size">${formatBytes(file.size)}</span>
            </div>
            <div class="file-hash is-calc" title="${escapeHtml(tr('checksum.selectTitle'))}">${escapeHtml(tr('checksum.calculating', { algo }))}</div>
        `;
        fileResults.prepend(row);

        try {
            const hash = await hashFile(file, algo);
            const hashEl = row.querySelector('.file-hash');
            hashEl.classList.remove('is-calc');
            hashEl.textContent = hash;
            hashEl.title = tr('checksum.copyTitle');
            hashEl.addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(hash);
                    const orig = hashEl.textContent;
                    hashEl.textContent = tr('checksum.copied');
                    setTimeout(() => { hashEl.textContent = orig; }, 1200);
                } catch { /* ignore */ }
            });

            if (expected) {
                const match = document.createElement('div');
                match.className = 'file-hash-match ' + (hash === expected ? 'is-ok' : 'is-fail');
                match.textContent = hash === expected
                    ? tr('checksum.match')
                    : tr('checksum.mismatch');
                row.appendChild(match);
            }
        } catch (err) {
            const hashEl = row.querySelector('.file-hash');
            hashEl.classList.remove('is-calc');
            hashEl.classList.add('is-error');
            hashEl.textContent = tr('checksum.error', { message: err.message });
        }
    }
}

// File input (single click selection)
fileInput.addEventListener('change', e => {
    processFiles(e.target.files);
    e.target.value = ''; // allow reselecting same file
});

// Directory picker
dirBtn.addEventListener('click', () => dirInput.click());
dirInput.addEventListener('change', e => {
    processFiles(e.target.files);
    e.target.value = '';
});

// Clear results
clearBtn.addEventListener('click', () => {
    fileResults.innerHTML = '';
});

// Drag & drop
['dragenter', 'dragover'].forEach(evt => {
    dropZone.addEventListener(evt, e => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.add('drag-over');
    });
});
['dragleave', 'drop'].forEach(evt => {
    dropZone.addEventListener(evt, e => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.remove('drag-over');
    });
});
dropZone.addEventListener('drop', async e => {
    const items = e.dataTransfer.items;
    if (items && items.length > 0 && items[0].webkitGetAsEntry) {
        const files = [];
        const promises = [];
        for (let i = 0; i < items.length; i++) {
            const entry = items[i].webkitGetAsEntry();
            if (entry) promises.push(collectEntry(entry, files));
        }
        await Promise.all(promises);
        processFiles(files);
    } else {
        processFiles(e.dataTransfer.files);
    }
});

async function collectEntry(entry, out, path = '') {
    if (entry.isFile) {
        const file = await new Promise(resolve => entry.file(resolve));
        Object.defineProperty(file, 'webkitRelativePath', {
            value: path + entry.name,
            configurable: true
        });
        out.push(file);
    } else if (entry.isDirectory) {
        const reader = entry.createReader();
        const entries = await new Promise(resolve => {
            const all = [];
            const readBatch = () => reader.readEntries(batch => {
                if (batch.length === 0) resolve(all);
                else { all.push(...batch); readBatch(); }
            });
            readBatch();
        });
        const subPath = path + entry.name + '/';
        for (const sub of entries) await collectEntry(sub, out, subPath);
    }
}
