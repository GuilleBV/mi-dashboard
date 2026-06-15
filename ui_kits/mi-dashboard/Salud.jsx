// mi-dashboard · Salud (biometric) screen
(function () {
  function Salud() {
    const DS = window.MiDashboardDesignSystem_1a61a0;
    const { BentoCard, ProgressRing, IconButton, ProgressBar } = DS;
    const Icon = window.Icon;
    const d = window.appData.salud;
    const [water, setWater] = React.useState(d.water.current);
    const pct = Math.round((water / d.water.goal) * 100);
    const step = (dir) => setWater(w => Math.max(0, Math.min(d.water.goal, +(w + dir * d.water.step).toFixed(2))));

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <SectionTitle title="Salud" sub="Biometría de hoy · sincronizado" />

        {/* Rings + micro-metrics */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {d.rings.map(r => (
            <BentoCard key={r.key} padding="var(--space-4)">
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-5)" }}>
                <ProgressRing value={r.value} size={104} stroke={10} color={r.color} glow={r.glow}
                  centerValue={r.center} centerLabel={r.label} />
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                  {r.metrics.map((m, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: "var(--space-2)", borderBottom: i < r.metrics.length - 1 ? "1px solid var(--border-faint)" : "none" }}>
                      <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{m.k}</span>
                      <span className="is-numeric" style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--text-primary)" }}>{m.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </BentoCard>
          ))}
        </div>

        {/* Smart water */}
        <BentoCard eyebrow="Hidratación" title="Agua">
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
            <IconButton size="lg" ariaLabel="Quitar agua" onClick={() => step(-1)}><Icon name="minus" size={22} /></IconButton>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "6px" }}>
                <span className="is-numeric" style={{ fontSize: "var(--text-2xl)", fontWeight: "var(--weight-heavy)" }}>{water.toFixed(2).replace(".", ",")}</span>
                <span style={{ fontSize: "var(--text-base)", color: "var(--text-muted)" }}>/ {String(d.water.goal).replace(".", ",")} L</span>
              </div>
              <ProgressBar value={pct} color="var(--blue-400)" glow height="8px" />
            </div>
            <IconButton size="lg" variant="accent" ariaLabel="Añadir agua" onClick={() => step(1)}><Icon name="plus" size={22} /></IconButton>
          </div>
        </BentoCard>
      </div>
    );
  }
  window.Salud = Salud;
})();
