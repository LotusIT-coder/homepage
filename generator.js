'use strict';

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
    if (entropy < 40)  return { label: 'Sehr schwach', level: 1, color: '#e74c3c' };
    if (entropy < 60)  return { label: 'Schwach',      level: 2, color: '#e67e22' };
    if (entropy < 80)  return { label: 'Mittel',       level: 3, color: '#f1c40f' };
    if (entropy < 100) return { label: 'Stark',        level: 4, color: '#2ecc71' };
    return                    { label: 'Sehr stark',   level: 5, color: '#27ae60' };
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
        entropyLabel.textContent          = `~${entropy} Bit Entropie`;
        return;
    }

    const length = parseInt(lengthEl.value, 10);
    if (isNaN(length) || length < 4 || length > 128) {
        showPwdError('Länge muss zwischen 4 und 128 liegen.');
        return;
    }

    const selectedSets = [
        uppercaseEl.checked ? charSets.upper  : null,
        lowercaseEl.checked ? charSets.lower  : null,
        numbersEl.checked   ? charSets.number : null,
        symbolsEl.checked   ? charSets.symbol : null,
    ].filter(Boolean);

    if (selectedSets.length === 0) {
        showPwdError('Bitte wähle mindestens eine Option!');
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
    entropyLabel.textContent          = `${entropy} Bit Entropie`;
}

async function copyPassword() {
    if (copyBtn.disabled) return;
    try {
        await navigator.clipboard.writeText(passwordDisplay.textContent);
        const orig = copyBtn.textContent;
        copyBtn.textContent = 'Kopiert!';
        setTimeout(() => { copyBtn.textContent = orig; }, 1500);
    } catch { /* ignore */ }
}

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);
leetInfoBtn.addEventListener('click', () => openModal('leet-modal'));
haftungInfoBtn.addEventListener('click', () => openModal('haftung-modal'));
memorableEl.addEventListener('change', () => { updatePwdOptionStates(); generatePassword(); });

updatePwdOptionStates();
generatePassword();

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
    const baseUrl = window.location.origin + window.location.pathname.replace(/[^/]*$/, 'view.html');

    let url;
    if (usePassphrase) {
        url = `${baseUrl}#p=1&c=${blobEncoded}`;
    } else {
        const rawKey = await crypto.subtle.exportKey('raw', key);
        url = `${baseUrl}#k=${base64UrlEncode(rawKey)}&c=${blobEncoded}`;
    }

    encLink.value = url;
    encResult.classList.add('is-visible');
}

async function copyEncLink() {
    if (!encLink.value) return;
    try {
        await navigator.clipboard.writeText(encLink.value);
        const orig = encCopyBtn.textContent;
        encCopyBtn.textContent = 'Kopiert!';
        setTimeout(() => { encCopyBtn.textContent = orig; }, 1500);
    } catch {
        encLink.select();
        document.execCommand('copy');
    }
}

function mailEncLink() {
    if (!encLink.value) return;
    const subject = encodeURIComponent('Verschlüsselte Nachricht');
    const body = encodeURIComponent(
        'Hier ist der verschlüsselte Einmallink:\n\n' +
        encLink.value +
        '\n\nDer Link enthält nur den Ciphertext' +
        (encPass.value ? ' — die Passphrase wird separat übermittelt.' : '.')
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

encBtn.addEventListener('click', () => {
    encryptText().catch(err => {
        alert('Fehler bei der Verschlüsselung: ' + err.message);
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
            <div class="file-hash is-calc" title="Klick zum Auswählen">Berechne ${escapeHtml(algo)}…</div>
        `;
        fileResults.prepend(row);

        try {
            const hash = await hashFile(file, algo);
            const hashEl = row.querySelector('.file-hash');
            hashEl.classList.remove('is-calc');
            hashEl.textContent = hash;
            hashEl.title = 'Klick zum Kopieren';
            hashEl.addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(hash);
                    const orig = hashEl.textContent;
                    hashEl.textContent = '✓ kopiert';
                    setTimeout(() => { hashEl.textContent = orig; }, 1200);
                } catch { /* ignore */ }
            });

            if (expected) {
                const match = document.createElement('div');
                match.className = 'file-hash-match ' + (hash === expected ? 'is-ok' : 'is-fail');
                match.textContent = hash === expected
                    ? '✓ Prüfsumme stimmt überein'
                    : '✗ Prüfsumme weicht ab';
                row.appendChild(match);
            }
        } catch (err) {
            const hashEl = row.querySelector('.file-hash');
            hashEl.classList.remove('is-calc');
            hashEl.classList.add('is-error');
            hashEl.textContent = 'Fehler: ' + err.message;
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
