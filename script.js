/* ===========================
   LOTUS-IT — JavaScript v3
   =========================== */

// ── Impressum / Datenschutz: Name erst bei Öffnen per JS einsetzen ──
let _nameInjected = false;
function injectImpressumName() {
  if (_nameInjected) return;
  _nameInjected = true;
  const n = atob('SGVsZ2UgTWVpZXI=');
  document.getElementById('imp-name').textContent  = n;
  document.getElementById('imp-name2').textContent = n;
  document.querySelectorAll('.imp-name-ds').forEach(el => el.textContent = n);
}

// ── Service Modals ──
(function () {
  let activeModal = null;

  function openModal(id) {
    const m = document.getElementById(id);
    if (!m) return;
    if (activeModal) activeModal.hidden = true;
    m.hidden = false;
    document.body.style.overflow = 'hidden';
    activeModal = m;
    // Focus close button for accessibility
    const btn = m.querySelector('.svc-modal-close');
    if (btn) btn.focus();
  }

  function closeModal() {
    if (!activeModal) return;
    activeModal.hidden = true;
    document.body.style.overflow = '';
    activeModal = null;
  }

  // Open on card click / Enter
  document.querySelectorAll('.service-card[data-modal]').forEach(card => {
    card.addEventListener('click', e => {
      // Don't open if clicking the "Anfrage stellen" link
      if (e.target.closest('.service-link')) return;
      openModal(card.dataset.modal);
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(card.dataset.modal); }
    });
  });

  document.querySelectorAll('[data-modal-trigger]').forEach(trigger => {
    trigger.addEventListener('click', () => openModal(trigger.dataset.modalTrigger));
    trigger.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(trigger.dataset.modalTrigger);
      }
    });
  });

  // Close buttons inside modals
  document.querySelectorAll('.svc-modal-close').forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  // Close on backdrop click
  document.querySelectorAll('.svc-modal').forEach(m => {
    m.addEventListener('click', e => { if (e.target === m) closeModal(); });
  });

  // Close modal CTA links (navigate + close)
  document.querySelectorAll('.svc-modal-cta').forEach(a => {
    a.addEventListener('click', () => setTimeout(closeModal, 50));
  });

  // Footer links: Datenschutz + Impressum
  const dsLink  = document.getElementById('footer-datenschutz-link');
  const impLink = document.getElementById('footer-impressum-link');
  if (dsLink)  dsLink.addEventListener('click',  e => { e.preventDefault(); injectImpressumName(); openModal('modal-datenschutz'); });
  if (impLink) impLink.addEventListener('click', e => { e.preventDefault(); injectImpressumName(); openModal('modal-impressum'); });

  // Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && activeModal) closeModal();
  });
})();

// ── Kontakt-Popup (Footer-Link) ──
const popup = document.getElementById('contact-popup');
const footerKontaktLink = document.getElementById('footer-kontakt-link');
if (popup && footerKontaktLink) {
  const cpClose = popup.querySelector('.cp-close');
  const openPopup = () => { popup.hidden = false; document.body.style.overflow = 'hidden'; };
  const closePopup = () => { popup.hidden = true;  document.body.style.overflow = ''; };
  footerKontaktLink.addEventListener('click', e => { e.preventDefault(); openPopup(); });
  if (cpClose) cpClose.addEventListener('click', closePopup);
  popup.addEventListener('click', e => { if (e.target === popup) closePopup(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !popup.hidden) closePopup(); });
}

// ── Navbar: scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ── Hamburger menu ──
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  const open = hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ── Hero spotlight: jump directly to matching service card ──
document.querySelectorAll('.hero-service-card[data-focus-card]').forEach(link => {
  link.addEventListener('click', e => {
    const cardIdx = link.dataset.focusCard;
    if (!cardIdx) return;

    const targetCard = document.querySelector(`.service-card[data-idx="${cardIdx}"]`);
    if (!targetCard) return;

    e.preventDefault();

    // Keep space below fixed navbar so the card lands in immediate view.
    const navOffset = navbar ? navbar.offsetHeight + 28 : 100;
    const targetY = targetCard.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
  });
});

// ── Hero typing animation ──
const typingEl = document.getElementById('heroTyping');

const TYPING_PHRASES = [
  'lotus-it --start-project',
  'deploy --env production --secure',
  'ai-consult --analyze-processes',
  'audit --scope full --report pdf',
  'build --quality premium --deadline met',
];

let phraseIdx = 0;
let charIdx = 0;
let deleting = false;
let typingTimer;

function type() {
  const phrase = TYPING_PHRASES[phraseIdx];
  if (!deleting) {
    charIdx++;
    typingEl.textContent = phrase.slice(0, charIdx);
    if (charIdx === phrase.length) {
      deleting = true;
      typingTimer = setTimeout(type, 2400);
      return;
    }
  } else {
    charIdx--;
    typingEl.textContent = phrase.slice(0, charIdx);
    if (charIdx === 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % TYPING_PHRASES.length;
      typingTimer = setTimeout(type, 400);
      return;
    }
  }
  typingTimer = setTimeout(type, deleting ? 38 : 68);
}
setTimeout(type, 900);

// ══════════════════════════════════════════════════════
// 1. CANVAS PARTICLE NETWORK
// ══════════════════════════════════════════════════════
(function initParticleCanvas() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const PARTICLE_COUNT = 80;
  const CONNECTION_DIST = 120;
  const REPEL_RADIUS = 80;
  const ACCENT_RGB = '214,0,110';   // magenta for dark sections
  const DARK_RGB   = '0,0,0';       // black for light sections

  // Light-background sections where particles should be black
  const LIGHT_SECTIONS = ['leistungen', 'kmu', 'faq', 'kontakt'];
  let lightBands = []; // cached viewport-relative y-bands of light sections

  function updateLightBands() {
    lightBands = [];
    for (const id of LIGHT_SECTIONS) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        lightBands.push({ top: rect.top, bottom: rect.bottom });
      }
    }
  }

  function isOverLight(y) {
    for (let i = 0; i < lightBands.length; i++) {
      if (y >= lightBands[i].top && y <= lightBands[i].bottom) return true;
    }
    return false;
  }

  let W, H;
  let mouse = { x: -9999, y: -9999 };

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  const particles = [];
  function createParticle() {
    return {
      x: Math.random() * (W || window.innerWidth),
      y: Math.random() * (H || window.innerHeight),
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1.5,
    };
  }

  function initParticles() {
    particles.length = 0;
    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(createParticle());
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    updateLightBands();

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < REPEL_RADIUS && dist > 0) {
        const force = (REPEL_RADIUS - dist) / REPEL_RADIUS;
        p.vx += (dx / dist) * force * 0.3;
        p.vy += (dy / dist) * force * 0.3;
      }
      p.vx *= 0.99; p.vy *= 0.99;
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed > 1.5) { p.vx = (p.vx / speed) * 1.5; p.vy = (p.vy / speed) * 1.5; }
      p.x += p.vx; p.y += p.vy;
      if (p.x < -10) p.x = W + 10; if (p.x > W + 10) p.x = -10;
      if (p.y < -10) p.y = H + 10; if (p.y > H + 10) p.y = -10;
      const rgb = isOverLight(p.y) ? DARK_RGB : ACCENT_RGB;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb}, 0.5)`;
      ctx.fill();
    }

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECTION_DIST) {
          const midY = (a.y + b.y) / 2;
          const rgb = isOverLight(midY) ? DARK_RGB : ACCENT_RGB;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${rgb}, ${(1 - dist / CONNECTION_DIST) * 0.35})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }

  document.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });
  document.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });

  window.addEventListener('resize', resize);
  resize();
  initParticles();
  requestAnimationFrame(draw);
})();

// ══════════════════════════════════════════════════════
// 6. SCROLL-TRIGGERED ANIMATIONS (ENHANCED)
// ══════════════════════════════════════════════════════

// New unified reveal observer that handles data-reveal attributes
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

// Service cards with stagger and data-reveal
document.querySelectorAll('.service-card').forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${i * 0.12}s`;
  revealObserver.observe(el);
});

// Git log entries with stagger and data-reveal
document.querySelectorAll('.git-entry').forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${i * 0.14}s`;
  revealObserver.observe(el);
});

// KMU cards: data-reveal set in HTML (from-left / from-right alternating)
document.querySelectorAll('.kmu-card').forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${i * 0.1}s`;
  revealObserver.observe(el);
});

// FAQ items
document.querySelectorAll('.faq-item').forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${i * 0.08}s`;
  revealObserver.observe(el);
});

// Stat items
document.querySelectorAll('.stat-item').forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${i * 0.1}s`;
  revealObserver.observe(el);
});

// General reveal elements
const revealSelectors = [
  '#ueber-uns .about-text > *',
  '#ueber-uns .value-item',
  '#ueber-uns .about-terminal',
  '#kontakt .contact-form',
  '#kontakt .info-card',
  '#prozess .prozess-text > *',
  '#prozess .prozess-terminal',
];
revealSelectors.forEach(sel => {
  document.querySelectorAll(sel).forEach((el, i) => {
    el.classList.add('reveal');
    if (!el.dataset.reveal) el.dataset.reveal = 'from-bottom';
    el.style.transitionDelay = `${i * 0.08}s`;
    revealObserver.observe(el);
  });
});

// ── Count-up animation for stats ──
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    if (isNaN(target)) return;

    let start = 0;
    const duration = 1200;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    countObserver.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num[data-target]').forEach(el => {
  countObserver.observe(el);
});

// ── Active nav link highlight ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a:not(.btn-nav)');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        const active = link.getAttribute('href') === `#${id}`;
        link.style.color = active ? 'var(--text)' : '';
      });
    }
  });
}, { threshold: 0.35 });

sections.forEach(sec => sectionObserver.observe(sec));

// ── Contact form ──
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');
const errorMsg = document.getElementById('formError');

if (form) form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;
  ['name', 'email', 'nachricht'].forEach(id => {
    const field = document.getElementById(id);
    if (!field.value.trim()) {
      field.style.borderColor = '#f85149';
      valid = false;
      field.addEventListener('input', () => { field.style.borderColor = ''; }, { once: true });
    }
  });
  if (!valid) return;

  const btn = form.querySelector('button[type="submit"]');
  const orig = btn.innerHTML;
  const isEN = document.documentElement.lang === 'en';
  btn.disabled = true;
  btn.innerHTML = '<span>' + (isEN ? 'Sending\u2026' : 'Wird gesendet\u2026') + '</span>';

  if (errorMsg) errorMsg.classList.remove('show');

  fetch('send.php', { method: 'POST', body: new FormData(form) })
    .then(r => r.json().then(data => ({ ok: r.ok, data })))
    .then(({ ok, data }) => {
      btn.innerHTML = orig;
      btn.disabled = false;
      if (ok && data.ok) {
        form.reset();
        successMsg.classList.add('show');
        setTimeout(() => successMsg.classList.remove('show'), 6000);
      } else {
        const fallback = isEN
          ? 'Could not send message. Please try via email.'
          : 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es per E-Mail.';
        if (errorMsg) {
          errorMsg.textContent = data.error || fallback;
          errorMsg.classList.add('show');
        }
      }
    })
    .catch(() => {
      btn.innerHTML = orig;
      btn.disabled = false;
      if (errorMsg) {
        errorMsg.textContent = isEN
          ? 'Connection error. Please try via email.'
          : 'Verbindungsfehler. Bitte versuchen Sie es per E-Mail.';
        errorMsg.classList.add('show');
      }
    });
});

// ══════════════════════════════════════════════════════
// 10. SERVICE CARD 3D TILT EFFECT
// ══════════════════════════════════════════════════════
(function initTiltEffect() {
  // Skip on mobile / touch devices
  if (window.matchMedia('(max-width: 768px)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(600px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();

// ── Kontakt-Hotspot: Position exakt zwischen die Fingerspitzen
//    der Hommage-Hintergrundgrafik legen (background: cover) ──
(function () {
  const hotspot = document.querySelector('#kontakt .contact-energy-hotspot');
  const section = document.getElementById('kontakt');
  if (!hotspot || !section) return;
  const point = hotspot.querySelector('.contact-energy-point');
  const arrow = hotspot.querySelector('.contact-energy-arrow');
  if (!point) return;

  // Bild-Maße + Berührungspunkt der Fingerspitzen (Bruchteile von B/H).
  // Empirisch aus hommage_sw.png ausgelesen.
  const IMG_W = 1536;
  const IMG_H = 1024;
  const TOUCH_X = 0.365;
  const TOUCH_Y = 0.475;

  const place = () => {
    const rect = section.getBoundingClientRect();
    const cw = rect.width;
    const ch = rect.height;
    if (cw === 0 || ch === 0) return;

    const imgAR = IMG_W / IMG_H;
    const containerAR = cw / ch;

    let scale, offsetX, offsetY;
    if (containerAR > imgAR) {
      scale = cw / IMG_W;
      offsetX = 0;
      offsetY = (ch - IMG_H * scale) / 2;
    } else {
      scale = ch / IMG_H;
      offsetX = (cw - IMG_W * scale) / 2;
      offsetY = 0;
    }

    // Ziel = Render-Position des Funken-Pixels innerhalb der Sektion.
    const targetX = offsetX + TOUCH_X * IMG_W * scale;
    const targetY = offsetY + TOUCH_Y * IMG_H * scale;

    // Punkt-Größe (px). Pfeilhöhe aus CSS für den Pfeil-Überhang oben.
    const pW = point.offsetWidth || 35;
    const pH = point.offsetHeight || 35;
    const arrowH = arrow ? arrow.getBoundingClientRect().height : 184;

    // Hotspot so positionieren, dass der Punkt-Mittelpunkt exakt auf
    // (targetX, targetY) sitzt. Der Pfeil ragt entsprechend nach oben.
    const hotspotW = hotspot.offsetWidth || 96;
    hotspot.style.left = `${targetX - hotspotW / 2}px`;
    hotspot.style.top = `${targetY - arrowH - pH / 2}px`;

    // Punkt innerhalb des Hotspots direkt unter den Pfeil setzen.
    point.style.top = `${arrowH}px`;
  };

  place();
  window.addEventListener('resize', place, { passive: true });
  window.addEventListener('load', place);
  if ('ResizeObserver' in window) {
    new ResizeObserver(place).observe(section);
  }
})();
