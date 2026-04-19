'use strict';

const pwdInput      = document.getElementById('pwd-input');
const toggleBtn     = document.getElementById('toggle-visibility');
const strengthBar   = document.getElementById('strength-bar');
const strengthLabel = document.getElementById('strength-label');
const entropyLabel  = document.getElementById('entropy-label');
const warningsList  = document.getElementById('warnings-list');
const positivesList = document.getElementById('positives-list');
const charStats     = document.getElementById('char-stats');

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
        warnings.push('Eines der häufigsten Passwörter — wird von jedem Angreifer als Erstes ausprobiert');
        penaltyBits += 200;
    }

    // Länge
    if (pwd.length < 8) {
        warnings.push(`Zu kurz (${pwd.length} Zeichen) — mindestens 12 empfohlen`);
        penaltyBits += 30;
    } else if (pwd.length < 12) {
        warnings.push('Länge grenzwertig — 12+ Zeichen erhöhen die Sicherheit deutlich');
        penaltyBits += 10;
    } else if (pwd.length >= 20) {
        positives.push('Sehr gute Länge (≥ 20 Zeichen)');
    } else {
        positives.push('Gute Länge (≥ 12 Zeichen)');
    }

    // Tastaturmuster
    if (hasKeyboardWalk(pwd)) {
        warnings.push('Tastatur-Muster erkannt (z. B. "qwerty", "asdf", "1234")');
        penaltyBits += 30;
    }

    // Zeichenfolge
    if (hasSequential(pwd)) {
        warnings.push('Zeichenfolge erkannt (z. B. "abcd", "1234", "9876")');
        penaltyBits += 25;
    }

    // Wiederholte Zeichen
    if (hasRepeatedChars(pwd)) {
        warnings.push('Wiederholte Zeichen erkannt (z. B. "aaa", "111")');
        penaltyBits += 15;
    }

    // Jahreszahl
    if (hasYearPattern(pwd)) {
        warnings.push('Jahreszahl erkannt — Geburtsjahre sind ein häufiges Angriffsziel');
        penaltyBits += 10;
    }

    // Zeichenklassen
    const typeCount = getCharTypeCount(pwd);
    if (typeCount === 1) {
        warnings.push('Nur eine Zeichenklasse — Groß-/Kleinbuchstaben, Zahlen & Sonderzeichen mischen');
        penaltyBits += 20;
    } else if (typeCount === 2) {
        warnings.push('Nur zwei Zeichenklassen — mehr Vielfalt erhöht die Sicherheit');
        penaltyBits += 10;
    } else if (typeCount === 3) {
        positives.push('Drei Zeichenklassen vorhanden');
    } else {
        positives.push('Alle Zeichenklassen vorhanden (A–Z, a–z, 0–9, Sonderzeichen)');
    }

    const rawEntropy      = calcEntropy(pwd);
    const adjustedEntropy = Math.max(0, rawEntropy - penaltyBits);

    let level, label, color;
    if (adjustedEntropy < 20 || pwd.length < 6) {
        level = 1; label = 'Sehr schwach'; color = '#e74c3c';
    } else if (adjustedEntropy < 35) {
        level = 2; label = 'Schwach';      color = '#e67e22';
    } else if (adjustedEntropy < 55) {
        level = 3; label = 'Mittel';       color = '#f1c40f';
    } else if (adjustedEntropy < 75) {
        level = 4; label = 'Stark';        color = '#2ecc71';
    } else {
        level = 5; label = 'Sehr stark';   color = '#27ae60';
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
    entropyLabel.textContent          = `${rawEntropy} Bit Entropie`;

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
        lower ? `<span>${lower} Kleinbuchst.</span>` : '',
        upper ? `<span>${upper} Großbuchst.</span>`  : '',
        digit ? `<span>${digit} Zahlen</span>`        : '',
        sym   ? `<span>${sym} Sonderzeichen</span>`   : '',
    ].filter(Boolean).join(' · ');
}

pwdInput.addEventListener('input', () => updateUI(analyzePassword(pwdInput.value)));

toggleBtn.addEventListener('click', () => {
    const isHidden = pwdInput.type === 'password';
    pwdInput.type         = isHidden ? 'text' : 'password';
    toggleBtn.textContent = isHidden ? 'Verbergen' : 'Anzeigen';
    toggleBtn.setAttribute('aria-label', isHidden ? 'Passwort verbergen' : 'Passwort anzeigen');
});
