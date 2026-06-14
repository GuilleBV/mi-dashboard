'use strict';

/* ── CLOCK ──────────────────────────────────────────────────── */
(function initClock() {
  const timeEl = document.getElementById('js-clock-time');
  const dateEl = document.getElementById('js-clock-date');
  if (!timeEl || !dateEl) return;

  const DAYS   = ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];
  const MONTHS = ['Ene','Feb','Mar','Abr','May','Jun',
                  'Jul','Ago','Sep','Oct','Nov','Dic'];

  function tick() {
    const now = new Date();
    timeEl.textContent =
      `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
    dateEl.textContent =
      `${DAYS[now.getDay()]} ${now.getDate()} ${MONTHS[now.getMonth()]}`;
  }

  tick();
  setInterval(tick, 1_000);
})();


/* ── GREETING ───────────────────────────────────────────────── */
(function initGreeting() {
  const el = document.getElementById('js-greeting');
  if (!el) return;
  const h = new Date().getHours();
  el.textContent = h >= 5 && h < 12 ? 'Good Morning'
                 : h >= 12 && h < 18 ? 'Good Afternoon'
                 : 'Good Evening';
})();


/* ── BOTTOM NAV ─────────────────────────────────────────────── */
(function initNav() {
  const items    = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.app-section');

  function switchTo(sectionId) {
    const target = document.getElementById(`section-${sectionId}`);
    if (!target) return;

    sections.forEach(s => s.classList.remove('active'));
    items.forEach(b => {
      const on = b.dataset.section === sectionId;
      b.classList.toggle('active', on);
      b.setAttribute('aria-current', on ? 'page' : 'false');
    });

    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  items.forEach(btn => {
    btn.addEventListener('click', () => switchTo(btn.dataset.section));
  });
})();
