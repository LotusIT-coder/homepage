'use strict';

const TRANSLATIONS = {
    de: {
        metaTitle: 'Verschlüsselte Nachricht | Lotus IT-Services',
        metaDescription: 'Verschlüsselte Nachricht anzeigen und entschlüsseln - sicher und privat im Browser.',
        ogLocale: 'de_DE',
        schemaName: 'Verschlüsselte Nachricht Viewer',
        schemaDescription: 'Verschlüsselte Nachrichten anzeigen und entschlüsseln',
        title: 'Verschlüsselte Nachricht',
        subtitle: 'Entschlüsselung läuft direkt in deinem Browser',
        trust: 'Nichts wird an einen Server gesendet - Entschlüsselung passiert lokal',
        emptyState: 'Kein verschlüsselter Inhalt im Link gefunden. Prüfe, ob du den <strong>kompletten</strong> Link geöffnet hast - der Teil nach dem <code>#</code> ist entscheidend.',
        passIntro: 'Diese Nachricht ist passwortgeschützt. Bitte gib die Passphrase ein, die du vom Absender separat erhalten hast.',
        passLabel: 'Passphrase:',
        decrypt: 'Entschlüsseln',
        decrypting: 'Entschlüssele…',
        shownWarn: '<strong>Einmal lesen, dann schließen.</strong> Behandle diese Information als Einmal-Geheimnis - kopiere sie in deinen Passwort-Manager und schließe diesen Tab.',
        shownLabel: 'Entschlüsselter Inhalt:',
        copy: 'Inhalt kopieren',
        copied: 'Kopiert!',
        clear: 'Schließen & Löschen',
        home: '← Zur Startseite',
        missingKey: 'Der Schlüssel fehlt im Link. Dieser Link ist unvollständig oder beschädigt.',
        invalidShort: 'Der verschlüsselte Inhalt ist zu kurz, um gültig zu sein.',
        tampered: 'Entschlüsselung fehlgeschlagen: Link beschädigt oder manipuliert.',
        enterPass: 'Bitte Passphrase eingeben.',
        wrongPass: 'Entschlüsselung fehlgeschlagen - falsche Passphrase?',
        invalidBase64: 'Der Link enthält kein gültiges Base64-Format.',
    },
    en: {
        metaTitle: 'Encrypted Message | Lotus IT-Services',
        metaDescription: 'View and decrypt an encrypted message - secure and private in the browser.',
        ogLocale: 'en_US',
        schemaName: 'Encrypted Message Viewer',
        schemaDescription: 'View and decrypt encrypted messages',
        title: 'Encrypted Message',
        subtitle: 'Decryption runs directly in your browser',
        trust: 'Nothing is sent to a server - decryption happens locally',
        emptyState: 'No encrypted content was found in the link. Check that you opened the <strong>complete</strong> link - the part after <code>#</code> is essential.',
        passIntro: 'This message is passphrase protected. Please enter the passphrase you received separately from the sender.',
        passLabel: 'Passphrase:',
        decrypt: 'Decrypt',
        decrypting: 'Decrypting…',
        shownWarn: '<strong>Read once, then close it.</strong> Treat this information as a one-time secret - copy it into your password manager and close this tab.',
        shownLabel: 'Decrypted content:',
        copy: 'Copy content',
        copied: 'Copied!',
        clear: 'Close & clear',
        home: '← Back to home',
        missingKey: 'The key is missing from the link. This link is incomplete or corrupted.',
        invalidShort: 'The encrypted payload is too short to be valid.',
        tampered: 'Decryption failed: link is corrupted or has been tampered with.',
        enterPass: 'Please enter a passphrase.',
        wrongPass: 'Decryption failed - wrong passphrase?',
        invalidBase64: 'The link does not contain valid Base64 data.',
    },
};

const PBKDF2_ITERATIONS = 250000;
let currentLang = 'de';

function getPreferredLang() {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get('lang');
    if (requested === 'de' || requested === 'en') return requested;
    const stored = localStorage.getItem('lang');
    if (stored === 'de' || stored === 'en') return stored;
    return 'de';
}

function copy() {
    return TRANSLATIONS[currentLang];
}

function localizeHref(path) {
    return `${path}?lang=${currentLang}`;
}

function updateMeta() {
    const languageCopy = copy();

    document.documentElement.lang = currentLang;
    document.title = languageCopy.metaTitle;

    const selectors = {
        'meta[name="description"]': languageCopy.metaDescription,
        'meta[property="og:title"]': languageCopy.metaTitle,
        'meta[property="og:description"]': languageCopy.metaDescription,
        'meta[property="og:locale"]': languageCopy.ogLocale,
        'meta[property="twitter:title"]': languageCopy.metaTitle,
        'meta[property="twitter:description"]': languageCopy.metaDescription,
    };

    Object.entries(selectors).forEach(([selector, value]) => {
        const element = document.querySelector(selector);
        if (element) element.setAttribute('content', value);
    });

    const schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (schemaScript) {
        try {
            const schema = JSON.parse(schemaScript.textContent);
            schema.name = languageCopy.schemaName;
            schema.description = languageCopy.schemaDescription;
            schemaScript.textContent = JSON.stringify(schema, null, 2);
        } catch {
            // Ignore invalid structured data.
        }
    }
}

function applyTranslations() {
    currentLang = getPreferredLang();
    localStorage.setItem('lang', currentLang);

    updateMeta();

    document.querySelector('.view-container h1').textContent = copy().title;
    document.querySelector('.subtitle').textContent = copy().subtitle;
    document.querySelector('.trust-badge span').textContent = copy().trust;
    document.querySelector('#state-empty .alert').innerHTML = copy().emptyState;
    document.querySelector('#state-pass .field-label').textContent = copy().passIntro;
    document.querySelector('label[for="view-pass"]').textContent = copy().passLabel;
    document.getElementById('view-decrypt-btn').textContent = copy().decrypt;
    document.querySelector('#state-shown .alert').innerHTML = copy().shownWarn;
    document.querySelector('label[for="plaintext-out"]').textContent = copy().shownLabel;
    document.getElementById('copy-plain-btn').textContent = copy().copy;
    document.getElementById('clear-plain-btn').textContent = copy().clear;

    const homeLink = document.querySelector('.nav-link');
    homeLink.textContent = copy().home;
    homeLink.href = localizeHref('index.html');
}

function base64UrlDecode(str) {
    if (!str) return new Uint8Array(0);
    const pad = str.length % 4 === 0 ? '' : '='.repeat(4 - (str.length % 4));
    const b64 = (str + pad).replace(/-/g, '+').replace(/_/g, '/');
    const bin = atob(b64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes;
}

function setState(id) {
    document.querySelectorAll('.state').forEach(el => {
        el.classList.toggle('is-active', el.id === id);
    });
}

function showError(msg) {
    document.getElementById('error-msg').textContent = msg;
    setState('state-error');
}

function parseFragment() {
    const raw = window.location.hash.startsWith('#')
        ? window.location.hash.slice(1)
        : '';
    const params = new URLSearchParams(raw);
    return {
        ciphertext:     params.get('c'),
        key:            params.get('k'),
        needsPass:      params.get('p') === '1',
    };
}

async function decryptWithKey(keyBytes, iv, ciphertext) {
    const key = await crypto.subtle.importKey(
        'raw', keyBytes, 'AES-GCM', false, ['decrypt']
    );
    const pt = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv }, key, ciphertext
    );
    return new TextDecoder().decode(pt);
}

async function decryptWithPassphrase(passphrase, salt, iv, ciphertext) {
    const keyMaterial = await crypto.subtle.importKey(
        'raw', new TextEncoder().encode(passphrase),
        'PBKDF2', false, ['deriveKey']
    );
    const key = await crypto.subtle.deriveKey(
        { name: 'PBKDF2', salt, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' },
        keyMaterial,
        { name: 'AES-GCM', length: 256 },
        false,
        ['decrypt']
    );
    const pt = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv }, key, ciphertext
    );
    return new TextDecoder().decode(pt);
}

function showPlaintext(text) {
    document.getElementById('plaintext-out').value = text;
    setState('state-shown');
}

async function handleNoPassphrase(blob, keyB64) {
    if (!keyB64) {
        showError(copy().missingKey);
        return;
    }
    if (blob.length < 12 + 16) {
        showError(copy().invalidShort);
        return;
    }
    try {
        const keyBytes   = base64UrlDecode(keyB64);
        const iv         = blob.slice(0, 12);
        const ciphertext = blob.slice(12);
        const plaintext  = await decryptWithKey(keyBytes, iv, ciphertext);
        showPlaintext(plaintext);
    } catch (err) {
        showError(copy().tampered);
    }
}

function handlePassphraseMode(blob) {
    if (blob.length < 16 + 12 + 16) {
        showError(copy().invalidShort);
        return;
    }
    const salt       = blob.slice(0, 16);
    const iv         = blob.slice(16, 28);
    const ciphertext = blob.slice(28);

    setState('state-pass');

    const passInput  = document.getElementById('view-pass');
    const decryptBtn = document.getElementById('view-decrypt-btn');
    const errorEl    = document.getElementById('pass-error');

    const tryDecrypt = async () => {
        errorEl.style.display = 'none';
        const passphrase = passInput.value;
        if (!passphrase) {
            errorEl.textContent = copy().enterPass;
            errorEl.style.display = 'block';
            return;
        }
        decryptBtn.disabled = true;
        decryptBtn.textContent = copy().decrypting;
        try {
            const plaintext = await decryptWithPassphrase(passphrase, salt, iv, ciphertext);
            showPlaintext(plaintext);
        } catch {
            errorEl.textContent = copy().wrongPass;
            errorEl.style.display = 'block';
        } finally {
            decryptBtn.disabled = false;
            decryptBtn.textContent = copy().decrypt;
        }
    };

    decryptBtn.addEventListener('click', tryDecrypt);
    passInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') tryDecrypt();
    });
    passInput.focus();
}

async function init() {
    const { ciphertext, key, needsPass } = parseFragment();

    if (!ciphertext) {
        setState('state-empty');
        return;
    }

    let blob;
    try {
        blob = base64UrlDecode(ciphertext);
    } catch {
        showError(copy().invalidBase64);
        return;
    }

    if (needsPass) {
        handlePassphraseMode(blob);
    } else {
        handleNoPassphrase(blob, key);
    }

    // Plaintext actions
    document.getElementById('copy-plain-btn').addEventListener('click', async () => {
        const out = document.getElementById('plaintext-out');
        try {
            await navigator.clipboard.writeText(out.value);
            const btn = document.getElementById('copy-plain-btn');
            const orig = btn.textContent;
            btn.textContent = copy().copied;
            setTimeout(() => { btn.textContent = orig; }, 1500);
        } catch {
            out.select();
            document.execCommand('copy');
        }
    });

    document.getElementById('clear-plain-btn').addEventListener('click', () => {
        document.getElementById('plaintext-out').value = '';
        // Clear URL hash to prevent re-decryption on refresh
        history.replaceState(null, '', window.location.pathname);
        window.close();
        // If window.close() didn't work, show empty state
        setState('state-empty');
    });
}

applyTranslations();
init();
