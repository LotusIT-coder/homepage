'use strict';

const TRANSLATIONS = {
    de: {
        metaTitle: 'Hash-Generator (SHA-256 / SHA-512) | Lotus IT-Services',
        metaDescription: 'SHA-256 und SHA-512 Hashes direkt im Browser berechnen - kein Server, kein Datenverlust. Mit Erklärung warum MD5 und SHA-1 gebrochen sind.',
        ogLocale: 'de_DE',
        schemaName: 'Hash-Generator',
        schemaDescription: 'SHA-256 und SHA-512 Hashes direkt im Browser berechnen',
        title: 'Hash-Generator',
        subtitle: 'SHA-256 & SHA-512 direkt im Browser - ohne Netzwerk-Verbindung',
        trust: 'Kein Server-Call - deine Eingabe verlässt nie deinen Browser',
        algoLabel: 'Algorithmus:',
        algoAria: 'Hash-Algorithmus wählen',
        inputLabel: 'Eingabe',
        inputPlaceholder: 'Text oder Passwort eingeben…',
        inputAria: 'Zu hashender Text',
        outputPlaceholder: 'Hash erscheint hier…',
        outputAria: 'Berechneter Hash',
        copy: 'Kopieren',
        copied: 'Kopiert!',
        charUnit: 'Zeichen',
        infoHtml: '<strong>Warum kein MD5 oder SHA-1?</strong><code>MD5</code> und <code>SHA-1</code> gelten seit Jahren als gebrochen: Kollisionen (zwei verschiedene Eingaben mit identischem Hash) lassen sich in Sekunden erzeugen. Für Passwort-Hashing sind sie nie geeignet gewesen - dafür braucht man speziell langsame Algorithmen wie <code>bcrypt</code>, <code>Argon2</code> oder <code>scrypt</code>. Für Prüfsummen und Signaturen gilt: mindestens <code>SHA-256</code>.',
        toolNavAria: 'Weitere Tools',
        navGenerator: 'Passwort-Generator',
        navStrength: 'Passwort-Stärke-Test',
        home: '← Zur Startseite',
    },
    en: {
        metaTitle: 'Hash Generator (SHA-256 / SHA-512) | Lotus IT-Services',
        metaDescription: 'Calculate SHA-256 and SHA-512 hashes directly in the browser - no server, no data leakage. Includes an explanation of why MD5 and SHA-1 are broken.',
        ogLocale: 'en_US',
        schemaName: 'Hash Generator',
        schemaDescription: 'Calculate SHA-256 and SHA-512 hashes directly in the browser',
        title: 'Hash Generator',
        subtitle: 'SHA-256 & SHA-512 directly in the browser - without a network connection',
        trust: 'No server call - your input never leaves your browser',
        algoLabel: 'Algorithm:',
        algoAria: 'Choose hash algorithm',
        inputLabel: 'Input',
        inputPlaceholder: 'Enter text or password…',
        inputAria: 'Text to hash',
        outputPlaceholder: 'Hash appears here…',
        outputAria: 'Calculated hash',
        copy: 'Copy',
        copied: 'Copied!',
        charUnit: 'characters',
        infoHtml: '<strong>Why not MD5 or SHA-1?</strong><code>MD5</code> and <code>SHA-1</code> have been considered broken for years: collisions (two different inputs with the same hash) can be generated in seconds. They were never suitable for password hashing - that requires deliberately slow algorithms such as <code>bcrypt</code>, <code>Argon2</code> or <code>scrypt</code>. For checksums and signatures, use at least <code>SHA-256</code>.',
        toolNavAria: 'Other tools',
        navGenerator: 'Password generator',
        navStrength: 'Password strength test',
        home: '← Back to home',
    },
};

const inputEl = document.getElementById('hash-input');
const algoSelect = document.getElementById('algo-select');
const outputEl = document.getElementById('hash-output');
const copyBtn = document.getElementById('copy-btn');
const charCount = document.getElementById('char-count');

let currentLang = 'de';

function getPreferredLang() {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get('lang');
    if (requested === 'de' || requested === 'en') return requested;
    const stored = localStorage.getItem('lang');
    if (stored === 'de' || stored === 'en') return stored;
    return 'de';
}

function localizeHref(path) {
    return `${path}?lang=${currentLang}`;
}

function updateMeta(copy) {
    document.documentElement.lang = currentLang;
    document.title = copy.metaTitle;

    const selectors = {
        'meta[name="description"]': copy.metaDescription,
        'meta[property="og:title"]': copy.metaTitle,
        'meta[property="og:description"]': copy.metaDescription,
        'meta[property="og:locale"]': copy.ogLocale,
        'meta[property="twitter:title"]': copy.metaTitle,
        'meta[property="twitter:description"]': copy.metaDescription,
    };

    Object.entries(selectors).forEach(([selector, value]) => {
        const element = document.querySelector(selector);
        if (element) element.setAttribute('content', value);
    });

    const schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (schemaScript) {
        try {
            const schema = JSON.parse(schemaScript.textContent);
            schema.name = copy.schemaName;
            schema.description = copy.schemaDescription;
            schemaScript.textContent = JSON.stringify(schema, null, 2);
        } catch {
            // Ignore invalid structured data.
        }
    }
}

function applyTranslations() {
    currentLang = getPreferredLang();
    localStorage.setItem('lang', currentLang);

    const copy = TRANSLATIONS[currentLang];
    updateMeta(copy);

    document.querySelector('.tool-container h1').textContent = copy.title;
    document.querySelector('.tool-subtitle').textContent = copy.subtitle;
    document.querySelector('.trust-badge span').textContent = copy.trust;
    document.querySelector('label[for="algo-select"]').textContent = copy.algoLabel;
    algoSelect.setAttribute('aria-label', copy.algoAria);
    document.querySelector('.field-label span').textContent = copy.inputLabel;
    inputEl.placeholder = copy.inputPlaceholder;
    inputEl.setAttribute('aria-label', copy.inputAria);
    outputEl.placeholder = copy.outputPlaceholder;
    outputEl.setAttribute('aria-label', copy.outputAria);
    copyBtn.textContent = copy.copy;
    document.querySelector('.info-box').innerHTML = copy.infoHtml;

    const toolNav = document.querySelector('.tool-nav');
    toolNav.setAttribute('aria-label', copy.toolNavAria);
    const navLinks = toolNav.querySelectorAll('a');
    navLinks[0].textContent = copy.navGenerator;
    navLinks[0].href = localizeHref('generator.html');
    navLinks[1].textContent = copy.navStrength;
    navLinks[1].href = localizeHref('strength.html');

    const homeLink = document.querySelector('.nav-link');
    homeLink.textContent = copy.home;
    homeLink.href = localizeHref('index.html');
}

async function computeHash() {
    const copy = TRANSLATIONS[currentLang];
    const text = inputEl.value;
    charCount.textContent = `${text.length} ${copy.charUnit}`;

    if (!text) {
        outputEl.value = '';
        outputEl.placeholder = copy.outputPlaceholder;
        copyBtn.disabled = true;
        return;
    }

    const algo = algoSelect.value;
    const encoded = new TextEncoder().encode(text);
    const buffer = await crypto.subtle.digest(algo, encoded);
    const hex = Array.from(new Uint8Array(buffer))
        .map((byte) => byte.toString(16).padStart(2, '0'))
        .join('');

    outputEl.value = hex;
    copyBtn.disabled = false;
}

async function copyHash() {
    if (!outputEl.value) return;
    try {
        await navigator.clipboard.writeText(outputEl.value);
        const orig = copyBtn.textContent;
        copyBtn.textContent = TRANSLATIONS[currentLang].copied;
        setTimeout(() => {
            copyBtn.textContent = orig;
        }, 1500);
    } catch {
        outputEl.select();
        document.execCommand('copy');
    }
}

applyTranslations();
computeHash();

inputEl.addEventListener('input', computeHash);
algoSelect.addEventListener('change', computeHash);
copyBtn.addEventListener('click', copyHash);
