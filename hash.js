'use strict';

const inputEl    = document.getElementById('hash-input');
const algoSelect = document.getElementById('algo-select');
const outputEl   = document.getElementById('hash-output');
const copyBtn    = document.getElementById('copy-btn');
const charCount  = document.getElementById('char-count');

async function computeHash() {
    const text = inputEl.value;
    charCount.textContent = `${text.length} Zeichen`;

    if (!text) {
        outputEl.value       = '';
        outputEl.placeholder = 'Hash erscheint hier…';
        copyBtn.disabled     = true;
        return;
    }

    const algo    = algoSelect.value;                    // 'SHA-256' or 'SHA-512'
    const encoded = new TextEncoder().encode(text);      // UTF-8
    const buffer  = await crypto.subtle.digest(algo, encoded);
    const hex     = Array.from(new Uint8Array(buffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');

    outputEl.value   = hex;
    copyBtn.disabled = false;
}

async function copyHash() {
    if (!outputEl.value) return;
    try {
        await navigator.clipboard.writeText(outputEl.value);
        const orig = copyBtn.textContent;
        copyBtn.textContent = 'Kopiert!';
        setTimeout(() => { copyBtn.textContent = orig; }, 1500);
    } catch {
        outputEl.select();
        document.execCommand('copy');
    }
}

inputEl.addEventListener('input', computeHash);
algoSelect.addEventListener('change', computeHash);
copyBtn.addEventListener('click', copyHash);
