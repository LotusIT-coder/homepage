'use strict';

const TRANSLATIONS = {
    de: {
        metaTitle: 'Passwort-Stärke-Tester | Lotus IT-Services',
        metaDescription: 'Teste die Stärke deines Passworts direkt im Browser - kein Server-Call, keine Datenweitergabe. Entropie-Analyse, Mustererkennung und konkrete Tipps.',
        ogLocale: 'de_DE',
        schemaName: 'Passwort-Stärke-Tester',
        schemaDescription: 'Teste die Stärke deines Passworts direkt im Browser',
        title: 'Passwort-Stärke-Tester',
        subtitle: 'Analyse direkt im Browser - ohne Netzwerk-Verbindung',
        trust: 'Kein Server-Call - dein Passwort verlässt nie deinen Browser',
        inputPlaceholder: 'Passwort hier eingeben…',
        inputAria: 'Passwort eingeben',
        show: 'Anzeigen',
        hide: 'Verbergen',
        showAria: 'Passwort anzeigen',
        hideAria: 'Passwort verbergen',
        warningsAria: 'Warnungen',
        positivesAria: 'Positives',
        navGenerator: 'Passwort-Generator',
        navHash: 'Hash-Generator',
        toolNavAria: 'Weitere Tools',
        home: '← Zur Startseite',
        veryWeak: 'Sehr schwach',
        weak: 'Schwach',
        medium: 'Mittel',
        strong: 'Stark',
        veryStrong: 'Sehr stark',
        bitEntropy: '{value} Bit Entropie',
        warnTop: 'Eines der häufigsten Passwörter - wird von jedem Angreifer als Erstes ausprobiert',
        warnTooShort: 'Zu kurz ({value} Zeichen) - mindestens 12 empfohlen',
        warnBorderline: 'Länge grenzwertig - 12+ Zeichen erhöhen die Sicherheit deutlich',
        okLong: 'Sehr gute Länge (≥ 20 Zeichen)',
        okGood: 'Gute Länge (≥ 12 Zeichen)',
        warnKeyboard: 'Tastatur-Muster erkannt (z. B. "qwerty", "asdf", "1234")',
        warnSequence: 'Zeichenfolge erkannt (z. B. "abcd", "1234", "9876")',
        warnRepeat: 'Wiederholte Zeichen erkannt (z. B. "aaa", "111")',
        warnYear: 'Jahreszahl erkannt - Geburtsjahre sind ein häufiges Angriffsziel',
        warnOneClass: 'Nur eine Zeichenklasse - Groß-/Kleinbuchstaben, Zahlen & Sonderzeichen mischen',
        warnTwoClasses: 'Nur zwei Zeichenklassen - mehr Vielfalt erhöht die Sicherheit',
        okThreeClasses: 'Drei Zeichenklassen vorhanden',
        okAllClasses: 'Alle Zeichenklassen vorhanden (A-Z, a-z, 0-9, Sonderzeichen)',
        lower: '{value} Kleinbuchst.',
        upper: '{value} Großbuchst.',
        digits: '{value} Zahlen',
        symbols: '{value} Sonderzeichen',
    },
    en: {
        metaTitle: 'Password Strength Tester | Lotus IT-Services',
        metaDescription: 'Test your password strength directly in the browser - no server call, no data sharing. Entropy analysis, pattern detection and concrete tips.',
        ogLocale: 'en_US',
        schemaName: 'Password Strength Tester',
        schemaDescription: 'Test your password strength directly in the browser',
        title: 'Password Strength Tester',
        subtitle: 'Analysis runs directly in the browser - without a network connection',
        trust: 'No server call - your password never leaves your browser',
        inputPlaceholder: 'Enter password here…',
        inputAria: 'Enter password',
        show: 'Show',
        hide: 'Hide',
        showAria: 'Show password',
        hideAria: 'Hide password',
        warningsAria: 'Warnings',
        positivesAria: 'Positives',
        navGenerator: 'Password generator',
        navHash: 'Hash generator',
        toolNavAria: 'Other tools',
        home: '← Back to home',
        veryWeak: 'Very weak',
        weak: 'Weak',
        medium: 'Medium',
        strong: 'Strong',
        veryStrong: 'Very strong',
        bitEntropy: '{value} bits of entropy',
        warnTop: 'One of the most common passwords - tried first by every attacker',
        warnTooShort: 'Too short ({value} characters) - at least 12 recommended',
        warnBorderline: 'Borderline length - 12+ characters increase security significantly',
        okLong: 'Very good length (≥ 20 characters)',
        okGood: 'Good length (≥ 12 characters)',
        warnKeyboard: 'Keyboard pattern detected (for example "qwerty", "asdf", "1234")',
        warnSequence: 'Sequence detected (for example "abcd", "1234", "9876")',
        warnRepeat: 'Repeated characters detected (for example "aaa", "111")',
        warnYear: 'Year detected - birth years are a common attack target',
        warnOneClass: 'Only one character class - mix uppercase, lowercase, digits and symbols',
        warnTwoClasses: 'Only two character classes - more variety increases security',
        okThreeClasses: 'Three character classes present',
        okAllClasses: 'All character classes present (A-Z, a-z, 0-9, symbols)',
        lower: '{value} lowercase',
        upper: '{value} uppercase',
        digits: '{value} digits',
        symbols: '{value} symbols',
    },
};

const pwdInput = document.getElementById('pwd-input');
const toggleBtn = document.getElementById('toggle-visibility');
const strengthBar = document.getElementById('strength-bar');
const strengthLabel = document.getElementById('strength-label');
const entropyLabel = document.getElementById('entropy-label');
const warningsList = document.getElementById('warnings-list');
const positivesList = document.getElementById('positives-list');
const charStats = document.getElementById('char-stats');

let currentLang = 'de';

// ~150 häufigste Passwörter (EN + DE), case-insensitiv geprüft
const TOP_PASSWORDS = new Set([
    '123456','password','123456789','12345678','12345','1234567','qwerty',
    'abc123','111111','1234567890','123123','000000','iloveyou','1234',
    '1q2w3e4r','dragon','monkey','master','password1','666666','123321',
    '654321','superman','1qaz2wsx','qazwsx','qwerty123','admin','welcome',
    'hello','letmein','shadow','sunshine','princess','charlie','donald',
    'baseball','football','batman','soccer','hockey','michael','jessica',
    'trustno1','pass','test','login','guest','root','toor','user',
    'passwort','hallo','hallo123','schatzi','schatz','geheim','kennwort',
    'passwort1','qwertz','asdfgh','test123','12341234','11111111','password2',
    'passw0rd','p@ssword','p@ssw0rd','zxcvbnm','asdfghjkl','qwertyuiop',
    '1111111','1111','aaaaaa','qweasd','q1w2e3r4','mustang','harley',
    'ranger','shadow1','tiger','ferrari','hunter','hunter2','access',
    'matrix','joshua','maggie','starwars','batman1','robert','thomas',
    'daniel','andrew','george','jordan','buster','pepper','ginger',
    'cookie','chocolate','peanut','butter','cheese','master1','987654321',
    'qwertyu','zxcvbn','sommer','winter','august','januar','berlin',
    'hamburg','superman1','batman123','super123','pass1234','password123',
    'abc1234','letmein1','welcome1','admin123','admin1','root123',
]);

// Tastaturzeilen (EN + DE-Layout)
const KEYBOARD_ROWS = [
    'qwertyuiop', 'asdfghjkl', 'zxcvbnm',
    'qwertzuiop', 'yxcvbnm',
    '1234567890', '0987654321',
];

function getPreferredLang() {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get('lang');
    if (requested === 'de' || requested === 'en') return requested;
    const stored = localStorage.getItem('lang');
    if (stored === 'de' || stored === 'en') return stored;
    return 'de';
}

function t(key, vars = {}) {
    const template = TRANSLATIONS[currentLang][key] || '';
    return template.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? '');
}

function localizeHref(path) {
    return `${path}?lang=${currentLang}`;
}

function updateMeta() {
    const copy = TRANSLATIONS[currentLang];

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

function updateToggleButton() {
    const isHidden = pwdInput.type === 'password';
    toggleBtn.textContent = isHidden ? t('show') : t('hide');
    toggleBtn.setAttribute('aria-label', isHidden ? t('showAria') : t('hideAria'));
}

function applyTranslations() {
    currentLang = getPreferredLang();
    localStorage.setItem('lang', currentLang);

    updateMeta();

    document.querySelector('.tool-container h1').textContent = TRANSLATIONS[currentLang].title;
    document.querySelector('.tool-subtitle').textContent = TRANSLATIONS[currentLang].subtitle;
    document.querySelector('.trust-badge span').textContent = TRANSLATIONS[currentLang].trust;
    pwdInput.placeholder = TRANSLATIONS[currentLang].inputPlaceholder;
    pwdInput.setAttribute('aria-label', TRANSLATIONS[currentLang].inputAria);
    warningsList.setAttribute('aria-label', TRANSLATIONS[currentLang].warningsAria);
    positivesList.setAttribute('aria-label', TRANSLATIONS[currentLang].positivesAria);
    updateToggleButton();

    const toolNav = document.querySelector('.tool-nav');
    toolNav.setAttribute('aria-label', TRANSLATIONS[currentLang].toolNavAria);
    const navLinks = toolNav.querySelectorAll('a');
    navLinks[0].textContent = TRANSLATIONS[currentLang].navGenerator;
    navLinks[0].href = localizeHref('generator.html');
    navLinks[1].textContent = TRANSLATIONS[currentLang].navHash;
    navLinks[1].href = localizeHref('hash.html');

    const homeLink = document.querySelector('.nav-link');
    homeLink.textContent = TRANSLATIONS[currentLang].home;
    homeLink.href = localizeHref('index.html');
}

function getCharsetSize(pwd) {
    let size = 0;
    if (/[a-z]/.test(pwd)) size += 26;
    if (/[A-Z]/.test(pwd)) size += 26;
    if (/[0-9]/.test(pwd)) size += 10;
    if (/[^a-zA-Z0-9]/.test(pwd)) size += 32;
    return Math.max(size, 1);
}

function calcEntropy(pwd) {
    if (!pwd.length) return 0;
    return Math.floor(pwd.length * Math.log2(getCharsetSize(pwd)));
}

function hasKeyboardWalk(pwd, minLen = 4) {
    const lower = pwd.toLowerCase();
    for (const row of KEYBOARD_ROWS) {
        for (let i = 0; i <= row.length - minLen; i++) {
            const fwd = row.slice(i, i + minLen);
            const rev = [...fwd].reverse().join('');
            if (lower.includes(fwd) || lower.includes(rev)) return true;
        }
    }
    return false;
}

function hasSequential(pwd, minLen = 4) {
    if (pwd.length < minLen) return false;
    for (let i = 0; i <= pwd.length - minLen; i++) {
        const codes = [...pwd.slice(i, i + minLen)].map(c => c.charCodeAt(0));
        const asc  = codes.every((c, j) => j === 0 || c === codes[j - 1] + 1);
        const desc = codes.every((c, j) => j === 0 || c === codes[j - 1] - 1);
        if (asc || desc) return true;
    }
    return false;
}

function hasRepeatedChars(pwd) {
    return /(.)\1{2,}/.test(pwd);
}

function hasYearPattern(pwd) {
    return /(19|20)\d{2}/.test(pwd);
}

function getCharTypeCount(pwd) {
    return [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/]
        .filter(re => re.test(pwd)).length;
}

function analyzePassword(pwd) {
    if (!pwd) return null;

    const warnings  = [];
    const positives = [];
    let penaltyBits = 0;

    // Häufiges Passwort
    if (TOP_PASSWORDS.has(pwd.toLowerCase())) {
        warnings.push(t('warnTop'));
        penaltyBits += 200;
    }

    // Länge
    if (pwd.length < 8) {
        warnings.push(t('warnTooShort', { value: pwd.length }));
        penaltyBits += 30;
    } else if (pwd.length < 12) {
        warnings.push(t('warnBorderline'));
        penaltyBits += 10;
    } else if (pwd.length >= 20) {
        positives.push(t('okLong'));
    } else {
        positives.push(t('okGood'));
    }

    // Tastaturmuster
    if (hasKeyboardWalk(pwd)) {
        warnings.push(t('warnKeyboard'));
        penaltyBits += 30;
    }

    // Zeichenfolge
    if (hasSequential(pwd)) {
        warnings.push(t('warnSequence'));
        penaltyBits += 25;
    }

    // Wiederholte Zeichen
    if (hasRepeatedChars(pwd)) {
        warnings.push(t('warnRepeat'));
        penaltyBits += 15;
    }

    // Jahreszahl
    if (hasYearPattern(pwd)) {
        warnings.push(t('warnYear'));
        penaltyBits += 10;
    }

    // Zeichenklassen
    const typeCount = getCharTypeCount(pwd);
    if (typeCount === 1) {
        warnings.push(t('warnOneClass'));
        penaltyBits += 20;
    } else if (typeCount === 2) {
        warnings.push(t('warnTwoClasses'));
        penaltyBits += 10;
    } else if (typeCount === 3) {
        positives.push(t('okThreeClasses'));
    } else {
        positives.push(t('okAllClasses'));
    }

    const rawEntropy      = calcEntropy(pwd);
    const adjustedEntropy = Math.max(0, rawEntropy - penaltyBits);

    let level, label, color;
    if (adjustedEntropy < 20 || pwd.length < 6) {
        level = 1; label = t('veryWeak'); color = '#e74c3c';
    } else if (adjustedEntropy < 35) {
        level = 2; label = t('weak');      color = '#e67e22';
    } else if (adjustedEntropy < 55) {
        level = 3; label = t('medium');    color = '#f1c40f';
    } else if (adjustedEntropy < 75) {
        level = 4; label = t('strong');    color = '#2ecc71';
    } else {
        level = 5; label = t('veryStrong'); color = '#27ae60';
    }

    return { rawEntropy, level, label, color, warnings, positives };
}

function updateUI(result) {
    if (!result) {
        strengthBar.style.width           = '0%';
        strengthBar.style.backgroundColor = '#ddd';
        strengthLabel.textContent         = '';
        entropyLabel.textContent          = '';
        warningsList.innerHTML            = '';
        positivesList.innerHTML           = '';
        charStats.textContent             = '';
        return;
    }

    const { level, label, color, rawEntropy, warnings, positives } = result;

    strengthBar.style.width           = `${(level / 5) * 100}%`;
    strengthBar.style.backgroundColor = color;
    strengthLabel.textContent         = label;
    entropyLabel.textContent          = t('bitEntropy', { value: rawEntropy });

    warningsList.innerHTML = warnings
        .map(w => `<li class="fb-item fb-warn"><span aria-hidden="true">✗</span>${w}</li>`)
        .join('');

    positivesList.innerHTML = positives
        .map(p => `<li class="fb-item fb-ok"><span aria-hidden="true">✓</span>${p}</li>`)
        .join('');

    const pwd   = pwdInput.value;
    const lower = (pwd.match(/[a-z]/g) || []).length;
    const upper = (pwd.match(/[A-Z]/g) || []).length;
    const digit = (pwd.match(/[0-9]/g) || []).length;
    const sym   = pwd.length - lower - upper - digit;

    charStats.innerHTML = [
        lower ? `<span>${t('lower', { value: lower })}</span>` : '',
        upper ? `<span>${t('upper', { value: upper })}</span>` : '',
        digit ? `<span>${t('digits', { value: digit })}</span>` : '',
        sym   ? `<span>${t('symbols', { value: sym })}</span>` : '',
    ].filter(Boolean).join(' · ');
}

pwdInput.addEventListener('input', () => updateUI(analyzePassword(pwdInput.value)));

toggleBtn.addEventListener('click', () => {
    const isHidden = pwdInput.type === 'password';
    pwdInput.type = isHidden ? 'text' : 'password';
    updateToggleButton();
});

applyTranslations();
updateUI(analyzePassword(pwdInput.value));
