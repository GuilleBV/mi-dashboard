// mi-dashboard · Mock application state (appData)
window.appData = {
  user: { name: "Guille" },

  overview: {
    netWorth: "€48.250",
    netWorthDelta: "+2,4%",
    focus: { priority: "high", text: "Entrenar piernas — sesión pesada", meta: "Recuperación 72% · buen día para intensidad" },
    quick: [
      { label: "Pasos", value: "5.760", pct: 48, color: "var(--accent)" },
      { label: "Agua", value: "1,4 / 2,5 L", pct: 56, color: "var(--blue-400)" },
      { label: "Proteína", value: "144 / 200 g", pct: 72, color: "var(--success)" },
      { label: "Presupuesto", value: "92%", pct: 92, color: "var(--warning)" },
    ],
  },

  gym: {
    supplements: [
      { id: "am", time: "Mañana", icon: "coffee", title: "Creatina + Omega 3", note: "Con el desayuno", done: true },
      { id: "mid", time: "Mediodía", icon: "pill", title: "Multivitamínico", note: "Tras el almuerzo", done: false },
      { id: "pm", time: "Noche", icon: "moon", title: "Magnesio + Zinc", note: "30 min antes de dormir", done: false },
    ],
    // 1 = completed day, 0 = rest/missed
    month: [1,1,0,1,1,1,0, 1,0,1,1,1,1,0, 1,1,1,0,1,1,1, 0,1,1,1,0,0,0, 0,0],
    routines: [
      { name: "Piernas", focus: "Cuádriceps · Glúteo", open: true, exercises: [
        { name: "Sentadilla", sets: "4×8", weight: "90 kg" },
        { name: "Prensa", sets: "4×12", weight: "180 kg" },
        { name: "Peso muerto rumano", sets: "3×10", weight: "70 kg" },
        { name: "Extensión cuádriceps", sets: "3×15", weight: "45 kg" },
      ]},
      { name: "Empuje", focus: "Pecho · Hombro · Tríceps", open: false, exercises: [
        { name: "Press banca", sets: "4×8", weight: "75 kg" },
        { name: "Press militar", sets: "4×10", weight: "40 kg" },
        { name: "Fondos", sets: "3×12", weight: "+10 kg" },
      ]},
      { name: "Tirón", focus: "Espalda · Bíceps", open: false, exercises: [
        { name: "Dominadas", sets: "4×8", weight: "+5 kg" },
        { name: "Remo con barra", sets: "4×10", weight: "65 kg" },
        { name: "Curl bíceps", sets: "3×12", weight: "16 kg" },
      ]},
    ],
  },

  salud: {
    rings: [
      { key: "sueno", label: "Sueño", value: 86, center: "7,4h", color: "var(--blue-400)", glow: true,
        metrics: [{ k: "Profundo", v: "1,8h" }, { k: "REM", v: "2,1h" }, { k: "Despertares", v: "2" }] },
      { key: "recup", label: "Recuperación", value: 72, center: "72", color: "var(--success)",
        metrics: [{ k: "HRV", v: "68 ms" }, { k: "RHR", v: "52 lpm" }, { k: "Resp.", v: "14 rpm" }] },
      { key: "esfuerzo", label: "Esfuerzo", value: 58, center: "12,4", color: "var(--cobalt-600)",
        metrics: [{ k: "Calorías", v: "640" }, { k: "Zona 2", v: "38 min" }, { k: "Pico FC", v: "162" }] },
    ],
    water: { current: 1.4, goal: 2.5, step: 0.25 },
  },

  organizador: {
    streak: 14,
    habits: [
      { id: "h1", icon: "droplet", title: "Beber 2,5L de agua", meta: "Hoy · objetivo diario" },
      { id: "h2", icon: "bed", title: "Dormir antes de las 23:30", meta: "Racha de 9 días" },
      { id: "h3", icon: "activity", title: "10.000 pasos", meta: "Faltan 4.240" },
      { id: "h4", icon: "coffee", title: "Sin cafeína después de las 16h", meta: "Hoy" },
    ],
  },

  finanzas: {
    netWorth: "€48.250",
    netWorthDelta: "+2,4%",
    accounts: [
      { name: "Cuenta corriente", bank: "BBVA", icon: "wallet", amount: "€3.180,40", neg: false },
      { name: "Ahorro", bank: "Trade Republic", icon: "trophy", amount: "€21.500,00", neg: false },
      { name: "Inversión", bank: "MyInvestor", icon: "trendingUp", amount: "€24.090,10", neg: false },
      { name: "Tarjeta", bank: "American Express", icon: "car", amount: "−€520,50", neg: true },
    ],
    transactions: [
      { name: "Mercadona", cat: "Supermercado", amount: "−€64,20" },
      { name: "Nómina", cat: "Ingreso", amount: "+€2.450,00", income: true },
      { name: "Gasolina Repsol", cat: "Transporte", amount: "−€58,90" },
    ],
    subs: [
      { name: "Spotify", icon: "music", amount: "€10,99", days: 2 },
      { name: "Netflix", icon: "play", amount: "€13,99", days: 9 },
      { name: "iCloud", icon: "cloud", amount: "€2,99", days: 21 },
    ],
  },
};
