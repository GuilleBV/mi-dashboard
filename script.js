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


/* ── GYM ────────────────────────────────────────────────────── */
(function initGym() {
  const suppChecks  = document.querySelectorAll('.supp-check');
  const suppsCard   = document.getElementById('js-supps-card');
  const exerciseEl  = document.getElementById('po-exercise');
  const weightEl    = document.getElementById('po-weight');
  const repsEl      = document.getElementById('po-reps');
  const registerBtn = document.getElementById('js-register-set');
  const coachMsg    = document.getElementById('js-coach-msg');
  const logEl       = document.getElementById('js-workout-log');
  const syncBtn     = document.getElementById('js-sync-hevy');

  if (!suppsCard || !registerBtn || !logEl) return;

  let setCount = 0;
  let coachTimer = null;

  // ── Supplements: glow when all checked ──────────────────────
  function refreshSupps() {
    const allDone = [...suppChecks].every(c => c.checked);
    suppsCard.classList.toggle('all-done', allDone);
  }
  suppChecks.forEach(c => c.addEventListener('change', refreshSupps));

  // ── Register set ─────────────────────────────────────────────
  function registerSet() {
    const exercise = exerciseEl.value.trim();
    const weight   = parseFloat(weightEl.value);
    const reps     = parseInt(repsEl.value, 10);

    if (!exercise || isNaN(weight) || weight < 0 || isNaN(reps) || reps < 1) {
      exerciseEl.focus();
      return;
    }

    // Remove "empty" placeholder on first entry
    const emptyEl = logEl.querySelector('.workout-log__empty');
    if (emptyEl) emptyEl.remove();

    setCount++;
    const li = document.createElement('li');
    li.className = 'workout-log__item';
    li.innerHTML = `
      <span class="workout-log__set-num">S${setCount}</span>
      <span class="workout-log__name">${escHtml(exercise)}</span>
      <span class="workout-log__stats">${weight} kg × ${reps} reps</span>
    `;
    logEl.appendChild(li);

    // Clear numeric inputs; keep exercise for quick re-use
    weightEl.value = '';
    repsEl.value   = '';
    weightEl.focus();

    // ── Smart coach ─────────────────────────────────────────
    clearTimeout(coachTimer);
    if (reps >= 8) {
      coachMsg.textContent = '¡Objetivo cumplido! Sube el peso en la próxima sesión.';
      coachMsg.classList.remove('visible');
      // Force reflow so animation re-triggers on repeated entries
      void coachMsg.offsetWidth;
      coachMsg.classList.add('visible');
      coachTimer = setTimeout(() => coachMsg.classList.remove('visible'), 4500);
    } else {
      coachMsg.classList.remove('visible');
    }
  }

  registerBtn.addEventListener('click', registerSet);

  // Enter key on any input triggers register
  [exerciseEl, weightEl, repsEl].forEach(el => {
    el.addEventListener('keydown', e => { if (e.key === 'Enter') registerSet(); });
  });

  // ── Hevy sync (stub — API pendiente) ─────────────────────────
  syncBtn.addEventListener('click', () => {
    syncBtn.textContent = 'Próximamente…';
    syncBtn.disabled = true;
    setTimeout(() => {
      syncBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="23 4 23 10 17 10"/>
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
        </svg>
        Sincronizar Hevy PRO`;
      syncBtn.disabled = false;
    }, 1800);
  });

  function escHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
})();
