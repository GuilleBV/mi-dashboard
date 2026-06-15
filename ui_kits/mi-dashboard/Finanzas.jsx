// mi-dashboard · Finanzas screen
(function () {
  function Finanzas() {
    const DS = window.MiDashboardDesignSystem_1a61a0;
    const { BentoCard, StatValue, Badge, IconButton } = DS;
    const Icon = window.Icon;
    const d = window.appData.finanzas;
    const [hidden, setHidden] = React.useState(false);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <SectionTitle title="Finanzas" sub="Patrimonio neto y movimientos" />

        {/* Hero net worth */}
        <BentoCard glow="blue" padding="var(--space-8)">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-3)" }}>
            <span style={{ fontSize: "var(--text-micro)", fontWeight: "var(--weight-semibold)", letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--text-muted)" }}>Patrimonio neto</span>
            <StatValue value={d.netWorth} hidden={hidden} size="hero" align="center" gradient={!hidden} />
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
              <Badge tone="green" dot>{d.netWorthDelta} este mes</Badge>
              <IconButton size="sm" ariaLabel="Mostrar/ocultar" onClick={() => setHidden(v => !v)}>
                <Icon name={hidden ? "eye-off" : "eye"} size={18} />
              </IconButton>
            </div>
          </div>
        </BentoCard>

        {/* Accounts */}
        <BentoCard eyebrow="Cuentas" title="Distribución">
          <div>
            {d.accounts.map((a, i) => (
              <div key={a.name} style={{
                display: "flex", alignItems: "center", gap: "var(--space-3)",
                padding: "var(--space-3) 0",
                borderBottom: i < d.accounts.length - 1 ? "1px solid var(--border-faint)" : "none",
              }}>
                <span style={{ width: 38, height: 38, borderRadius: "var(--radius-md)", flexShrink: 0, background: "var(--bg-elevated)", color: "var(--text-secondary)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={a.icon} size={19} />
                </span>
                <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--weight-medium)" }}>{a.name}</span>
                  <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{a.bank}</span>
                </div>
                <span className="is-numeric" style={{ fontSize: "var(--text-base)", fontWeight: 600, color: a.neg ? "var(--danger)" : "var(--text-primary)" }}>
                  {hidden ? "••••" : a.amount}
                </span>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Recent transactions */}
        <BentoCard eyebrow="Reciente" title="Movimientos">
          <div>
            {d.transactions.map((t, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "var(--space-3) 0",
                borderBottom: i < d.transactions.length - 1 ? "1px solid var(--border-faint)" : "none",
              }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "var(--text-base)" }}>{t.name}</span>
                  <span style={{ fontSize: "var(--text-xs)", color: "var(--text-faint)" }}>{t.cat}</span>
                </div>
                <span className="is-numeric" style={{ fontSize: "var(--text-base)", fontWeight: 600, color: t.income ? "var(--success)" : "var(--text-muted)" }}>{t.amount}</span>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Subscription radar */}
        <div>
          <span className="eyebrow" style={{ paddingLeft: 2, display: "block", marginBottom: "var(--space-3)" }}>Radar de suscripciones</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            {d.subs.map(s => {
              const danger = s.days <= 3;
              return (
                <div key={s.name} style={{
                  display: "flex", alignItems: "center", gap: "var(--space-3)",
                  padding: "var(--space-4)", borderRadius: "var(--radius-lg)",
                  background: "var(--gradient-card)",
                  border: danger ? "1px solid rgba(239,68,68,0.5)" : "1px solid var(--border-subtle)",
                  boxShadow: danger ? "var(--glow-danger)" : "var(--inner-top-hairline)",
                }}>
                  <span style={{ width: 38, height: 38, borderRadius: "var(--radius-md)", flexShrink: 0, background: "var(--bg-elevated)", color: "var(--text-secondary)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={s.icon} size={19} />
                  </span>
                  <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--weight-medium)" }}>{s.name}</span>
                    <span className="is-numeric" style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{s.amount} / mes</span>
                  </div>
                  <Badge tone={danger ? "danger" : "neutral"} solid={danger} dot={!danger}>
                    {s.days <= 1 ? "Mañana" : `${s.days} días`}
                  </Badge>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  window.Finanzas = Finanzas;
})();
