'use strict';

const PBKDF2_ITERATIONS = 250000;

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
        showError('Der Schlüssel fehlt im Link. Dieser Link ist unvollständig oder beschädigt.');
        return;
    }
    if (blob.length < 12 + 16) {
        showError('Der verschlüsselte Inhalt ist zu kurz, um gültig zu sein.');
        return;
    }
    try {
        const keyBytes   = base64UrlDecode(keyB64);
        const iv         = blob.slice(0, 12);
        const ciphertext = blob.slice(12);
        const plaintext  = await decryptWithKey(keyBytes, iv, ciphertext);
        showPlaintext(plaintext);
    } catch (err) {
        showError('Entschlüsselung fehlgeschlagen: Link beschädigt oder manipuliert.');
    }
}

function handlePassphraseMode(blob) {
    if (blob.length < 16 + 12 + 16) {
        showError('Der verschlüsselte Inhalt ist zu kurz, um gültig zu sein.');
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
            errorEl.textContent = 'Bitte Passphrase eingeben.';
            errorEl.style.display = 'block';
            return;
        }
        decryptBtn.disabled = true;
        decryptBtn.textContent = 'Entschlüssele…';
        try {
            const plaintext = await decryptWithPassphrase(passphrase, salt, iv, ciphertext);
            showPlaintext(plaintext);
        } catch {
            errorEl.textContent = 'Entschlüsselung fehlgeschlagen — falsche Passphrase?';
            errorEl.style.display = 'block';
        } finally {
            decryptBtn.disabled = false;
            decryptBtn.textContent = 'Entschlüsseln';
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
        showError('Der Link enthält kein gültiges Base64-Format.');
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
            btn.textContent = 'Kopiert!';
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

init();
