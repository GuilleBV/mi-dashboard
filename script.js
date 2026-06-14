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


/* ── HEVY MOCK DATA ──────────────────────────────────────────── */
const hevyMockData = [
  {
    fecha: '2026-06-02',
    nombreRutina: 'Día de Pecho',
    duracion: '54 min',
    ejercicios: [
      { nombre: 'Press de Banca',                 series: 4, reps: 8,  peso: 80  },
      { nombre: 'Press Inclinado con Mancuernas', series: 3, reps: 10, peso: 28  },
      { nombre: 'Aperturas en Polea',             series: 3, reps: 12, peso: 15  },
    ]
  },
  {
    fecha: '2026-06-05',
    nombreRutina: 'Piernas & Glúteos',
    duracion: '61 min',
    ejercicios: [
      { nombre: 'Sentadilla con Barra',    series: 5, reps: 5,  peso: 100 },
      { nombre: 'Prensa',                  series: 4, reps: 10, peso: 160 },
      { nombre: 'Curl Femoral',            series: 3, reps: 12, peso: 40  },
      { nombre: 'Extensión de Cuádriceps', series: 3, reps: 12, peso: 50  },
    ]
  },
  {
    fecha: '2026-06-09',
    nombreRutina: 'Hombros & Tríceps',
    duracion: '48 min',
    ejercicios: [
      { nombre: 'Press Militar',         series: 4, reps: 8,  peso: 55 },
      { nombre: 'Elevaciones Laterales', series: 3, reps: 15, peso: 12 },
      { nombre: 'Press Francés',         series: 3, reps: 10, peso: 30 },
    ]
  },
  {
    fecha: '2026-06-12',
    nombreRutina: 'Espalda & Bíceps',
    duracion: '57 min',
    ejercicios: [
      { nombre: 'Peso Muerto',    series: 4, reps: 5,  peso: 110 },
      { nombre: 'Remo con Barra', series: 4, reps: 8,  peso: 70  },
      { nombre: 'Jalón al Pecho', series: 3, reps: 10, peso: 65  },
      { nombre: 'Curl con Barra', series: 3, reps: 12, peso: 35  },
    ]
  },
];


/* ── GYM: CALENDAR ───────────────────────────────────────────── */
function renderCalendar() {
  const container = document.getElementById('js-activity-calendar');
  const eyebrow   = document.getElementById('js-cal-eyebrow');
  if (!container) return;

  const now   = new Date();
  const year  = now.getFullYear();
  const month = now.getMonth();
  const today = now.getDate();

  const workoutDates = new Set(hevyMockData.map(w => w.fecha));
  const daysInMonth  = new Date(year, month + 1, 0).getDate();
  // Monday-first offset: Sun(0)→6, Mon(1)→0, Tue(2)→1 …
  const startOffset  = (new Date(year, month, 1).getDay() + 6) % 7;

  const MONTH_NAMES = ['Ene','Feb','Mar','Abr','May','Jun',
                       'Jul','Ago','Sep','Oct','Nov','Dic'];
  const WEEK_DAYS   = ['L','M','X','J','V','S','D'];

  // Single grid: header row immediately followed by day cells
  let html = '<div class="mini-cal-grid">';

  WEEK_DAYS.forEach(d => { html += `<span class="mini-cal-wd">${d}</span>`; });

  for (let i = 0; i < startOffset; i++) {
    html += '<div class="mini-cal-cell mini-cal-cell--empty"></div>';
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const classes = ['mini-cal-cell'];
    if (workoutDates.has(dateStr)) classes.push('mini-cal-cell--workout');
    if (d === today)               classes.push('mini-cal-cell--today');
    if (d > today)                 classes.push('mini-cal-cell--future');
    // No text content — pure color squares
    html += `<div class="${classes.join(' ')}" title="${dateStr}"></div>`;
  }

  html += '</div>';
  container.innerHTML = html;

  if (eyebrow) eyebrow.textContent = `${MONTH_NAMES[month]} ${year}`;
}


/* ── GYM: WORKOUT HISTORY ────────────────────────────────────── */
function renderWorkoutHistory() {
  const container = document.getElementById('js-workout-history');
  if (!container) return;

  const sorted = [...hevyMockData].sort((a, b) => b.fecha.localeCompare(a.fecha));

  container.innerHTML = sorted.map((w, i) => {
    const [y, m, d] = w.fecha.split('-').map(Number);
    const dateLabel  = new Date(y, m - 1, d).toLocaleDateString('es-ES', {
      weekday: 'long', day: 'numeric', month: 'long'
    });

    const rows = w.ejercicios.map(e =>
      `<div class="ex-row">
         <span class="ex-name">${e.nombre}</span>
         <span class="ex-stats">${e.series}×${e.reps} — ${e.peso} kg</span>
       </div>`
    ).join('');

    return `
      <details class="wo-accordion" ${i === 0 ? 'open' : ''}>
        <summary class="wo-summary">
          <div class="wo-summary__info">
            <span class="wo-date">${dateLabel}</span>
            <span class="wo-name">${w.nombreRutina}</span>
          </div>
          <div class="wo-summary__meta">
            <span class="wo-duration">${w.duracion}</span>
            <span class="wo-chevron" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </span>
          </div>
        </summary>
        <div class="wo-body">${rows}</div>
      </details>`;
  }).join('');
}


/* ── GYM: INIT ───────────────────────────────────────────────── */
(function initGym() {
  renderCalendar();
  renderWorkoutHistory();

  // Supplement time blocks: tap to toggle .completed
  const suppsCard  = document.getElementById('js-supps-card');
  const suppBlocks = suppsCard ? suppsCard.querySelectorAll('.supplement-block') : [];

  function refreshSupps() {
    const allDone = [...suppBlocks].every(b => b.classList.contains('completed'));
    if (suppsCard) suppsCard.classList.toggle('all-done', allDone);
  }

  suppBlocks.forEach(block => {
    block.addEventListener('click', () => {
      block.classList.toggle('completed');
      block.setAttribute('aria-pressed', block.classList.contains('completed'));
      refreshSupps();
    });
    // Keyboard support (Enter / Space)
    block.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); block.click(); }
    });
  });

  // Sync badge — visual feedback (Hevy API pendiente)
  const syncBtn = document.getElementById('js-gym-sync');
  if (!syncBtn) return;

  let syncing = false;
  syncBtn.addEventListener('click', () => {
    if (syncing) return;
    syncing = true;
    syncBtn.innerHTML = '<span class="sync-dot"></span> Sincronizando…';
    setTimeout(() => {
      syncBtn.innerHTML = '<span class="sync-dot"></span> Sincronizado';
      syncing = false;
    }, 1500);
  });
})();
