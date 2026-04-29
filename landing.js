/* ═══════════════════════════════════════════════════════════════
   LOTUS LANDING PAGE — JavaScript Interactions
   ═════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── DOM Elements ──
  const landingIt = document.querySelector('.landing-it');
  const landingConsulting = document.querySelector('.landing-consulting');
  const itChoice = document.querySelector('.landing-choice--it');
  const consultingChoice = document.querySelector('.landing-choice--consulting');

  // ── Keyboard Navigation ──
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && itChoice) {
      itChoice.focus();
    } else if (e.key === 'ArrowRight' && consultingChoice) {
      consultingChoice.focus();
    }
  });

  // Keep both halves visually stable; no dynamic scaling to avoid panel flicker artifacts.

  // ── Blob mouse attraction (right / Consulting side) ──
  (function initBlobMouse() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const section = document.querySelector('.landing-consulting');
    if (!section) return;
    const blobs = [
      { el: document.querySelector('.landing-shape-1'), strength: 0.10 },
      { el: document.querySelector('.landing-shape-2'), strength: -0.07 },
      { el: document.querySelector('.landing-shape-3'), strength: 0.05 },
    ].filter(b => b.el);

    let mx = 0, my = 0, ox = [0,0,0], oy = [0,0,0], vx = [0,0,0], vy = [0,0,0];
    let inside = false;

    section.addEventListener('mousemove', (e) => {
      const r = section.getBoundingClientRect();
      mx = e.clientX - r.left - r.width  / 2;
      my = e.clientY - r.top  - r.height / 2;
      inside = true;
    }, { passive: true });
    section.addEventListener('mouseleave', () => { inside = false; });

    function tick() {
      blobs.forEach((b, i) => {
        const tx = inside ? mx * b.strength : 0;
        const ty = inside ? my * b.strength : 0;
        vx[i] = (vx[i] + (tx - ox[i]) * 0.05) * 0.90;
        vy[i] = (vy[i] + (ty - oy[i]) * 0.05) * 0.90;
        ox[i] += vx[i];
        oy[i] += vy[i];
        b.el.style.transform = `translate(${ox[i]}px, ${oy[i]}px)`;
      });
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  })();

  // ── Optional: Intersection Observer for fade-in animations ──
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe content elements
  document.querySelectorAll('.landing-choice').forEach((el) => {
    el.style.opacity = '0';
    observer.observe(el);
  });

  // ── Particle Network (left / IT side) ──
  (function initLandingParticles() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const canvas = document.getElementById('landing-it-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const ACCENT_RGB = '214,0,110';
    const COUNT = 55;
    const CONNECT = 110;
    const REPEL  = 70;
    let W, H, particles = [];
    let mouse = { x: -9999, y: -9999 };

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      W = canvas.width  = rect.width;
      H = canvas.height = rect.height;
    }

    function mkParticle() {
      return {
        x:  Math.random() * (W || 600),
        y:  Math.random() * (H || 900),
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r:  Math.random() * 2 + 1.5,
      };
    }

    function init() {
      particles = [];
      for (let i = 0; i < COUNT; i++) particles.push(mkParticle());
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        // Mouse repel (relative to canvas)
        const canvasRect = canvas.getBoundingClientRect();
        const mx = mouse.x - canvasRect.left;
        const my = mouse.y - canvasRect.top;
        const dx = p.x - mx, dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < REPEL && dist > 0) {
          const f = (REPEL - dist) / REPEL;
          p.vx += (dx / dist) * f * 0.3;
          p.vy += (dy / dist) * f * 0.3;
        }
        p.vx *= 0.99; p.vy *= 0.99;
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > 1.5) { p.vx = (p.vx / spd) * 1.5; p.vy = (p.vy / spd) * 1.5; }
        p.x += p.vx; p.y += p.vy;
        if (p.x < -10) p.x = W + 10; if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10; if (p.y > H + 10) p.y = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT_RGB},0.45)`;
        ctx.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECT) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${ACCENT_RGB},${(1 - d / CONNECT) * 0.3})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }

    document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
    document.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });
    window.addEventListener('resize', () => { resize(); init(); });
    resize();
    init();
    requestAnimationFrame(draw);
  })();

  // ── Add fade-in animation ──
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);

})();
