// mi-dashboard · Overview screen
(function () {
  function Overview() {
    const DS = window.MiDashboardDesignSystem_1a61a0;
    const { BentoCard, StatValue, ProgressBar, IconButton, Badge } = DS;
    const Icon = window.Icon;
    const d = window.appData.overview;
    const [hidden, setHidden] = React.useState(false);

    const now = new Date();
    const h = now.getHours();
    const greet = h < 6 ? "Buenas noches" : h < 13 ? "Buenos días" : h < 21 ? "Buenas tardes" : "Buenas noches";
    const greetIcon = h < 7 || h >= 21 ? "moon" : h < 13 ? "sunrise" : "sun";
    const fecha = now.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" });

    const prioColor = { high: "var(--priority-high)", medium: "var(--priority-medium)", low: "var(--priority-low)" }[d.focus.priority];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        {/* Greeting header */}
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "var(--space-2) 2px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "var(--accent-glow)", display: "inline-flex" }}><Icon name={greetIcon} size={18} /></span>
              <span style={{ fontSize: "var(--text-xl)", fontWeight: "var(--weight-semibold)", letterSpacing: "var(--tracking-snug)" }}>
                {greet}, {window.appData.user.name}
              </span>
            </div>
            <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", textTransform: "capitalize" }}>{fecha}</span>
          </div>
          <IconButton ariaLabel="Notificaciones"><Icon name="bell" size={20} /></IconButton>
        </header>

        {/* Patrimonio privado */}
        <BentoCard glow="blue">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <StatValue label="Patrimonio privado" value={d.netWorth} hidden={hidden} size="lg" delta={d.netWorthDelta} deltaDirection="up" />
            <IconButton ariaLabel="Mostrar/ocultar saldo" onClick={() => setHidden(v => !v)}>
              <Icon name={hidden ? "eye-off" : "eye"} size={20} />
            </IconButton>
          </div>
        </BentoCard>

        {/* Foco diario */}
        <BentoCard eyebrow="Foco diario" title={null}
          style={{ borderColor: "var(--border-subtle)" }}>
          <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: prioColor, boxShadow: `0 0 10px ${prioColor}`, marginTop: 6, flexShrink: 0 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "var(--text-md)", fontWeight: "var(--weight-semibold)", color: "var(--text-primary)" }}>{d.focus.text}</span>
              <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{d.focus.meta}</span>
            </div>
          </div>
        </BentoCard>

        {/* Quick stats grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3)" }}>
          {d.quick.map((q) => (
            <BentoCard key={q.label} padding="var(--space-4)">
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{q.label}</span>
                </div>
                <span className="is-numeric" style={{ fontSize: "var(--text-lg)", fontWeight: "var(--weight-bold)" }}>{q.value}</span>
                <ProgressBar value={q.pct} color={q.color} />
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    );
  }
  window.Overview = Overview;
})();
