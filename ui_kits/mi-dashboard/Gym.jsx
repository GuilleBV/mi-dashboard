// mi-dashboard · Gym & Suplementos screen
(function () {
  function SupplementBlock({ block, onToggle }) {
    const Icon = window.Icon;
    const done = block.done;
    return (
      <button
        onClick={onToggle}
        style={{
          display: "flex", alignItems: "center", gap: "var(--space-3)", width: "100%", textAlign: "left",
          padding: "var(--space-4)", borderRadius: "var(--radius-lg)",
          background: done ? "var(--fill-blue-15)" : "var(--gradient-card)",
          border: done ? "1px solid var(--border-glow)" : "1px solid var(--border-subtle)",
          boxShadow: done ? "var(--glow-active)" : "var(--inner-top-hairline)",
          transition: "var(--transition-default)", cursor: "pointer", WebkitTapHighlightColor: "transparent",
        }}
      >
        <span style={{
          width: 44, height: 44, borderRadius: "var(--radius-md)", flexShrink: 0,
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          background: done ? "var(--accent)" : "var(--bg-elevated)",
          color: done ? "#fff" : "var(--text-secondary)", transition: "var(--transition-default)",
        }}>
          <Icon name={done ? "check" : block.icon} size={22} />
        </span>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: 0, flex: 1 }}>
          <span style={{ fontSize: "var(--text-micro)", fontWeight: "var(--weight-semibold)", letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: done ? "var(--accent-hover)" : "var(--text-muted)" }}>{block.time}</span>
          <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--weight-semibold)", color: "var(--text-primary)" }}>{block.title}</span>
          <span style={{ fontSize: "var(--text-sm)", color: "var(--text-faint)", textDecoration: done ? "line-through" : "none", opacity: done ? 0.6 : 1 }}>{block.note}</span>
        </div>
      </button>
    );
  }

  function Gym() {
    const DS = window.MiDashboardDesignSystem_1a61a0;
    const { BentoCard, Badge } = DS;
    const Icon = window.Icon;
    const d = window.appData.gym;
    const [supps, setSupps] = React.useState(d.supplements);
    const toggle = (id) => setSupps(s => s.map(b => b.id === id ? { ...b, done: !b.done } : b));
    const doneCount = d.month.filter(Boolean).length;

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <SectionTitle title="Gym & Suplementos" sub="Marca tus tomas y revisa tu rutina" />

        {/* Supplement time-blocks */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          {supps.map(b => <SupplementBlock key={b.id} block={b} onToggle={() => toggle(b.id)} />)}
        </div>

        {/* Monthly calendar */}
        <BentoCard eyebrow="Este mes" title="Constancia" action={<Badge tone="green" dot>{doneCount} días</Badge>}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "var(--space-2)" }}>
            {["L","M","X","J","V","S","D"].map((day, i) => (
              <span key={"h"+i} style={{ textAlign: "center", fontSize: "var(--text-micro)", color: "var(--text-faint)", fontWeight: 600 }}>{day}</span>
            ))}
            {d.month.map((c, i) => (
              <span key={i} style={{
                aspectRatio: "1", borderRadius: "var(--radius-sm)",
                background: c ? "var(--accent)" : "var(--bg-inset)",
                boxShadow: c ? "0 0 8px rgba(0,240,255,0.25)" : "none",
                border: c ? "none" : "1px solid var(--border-faint)",
              }} />
            ))}
          </div>
        </BentoCard>

        {/* Routines accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <span className="eyebrow" style={{ paddingLeft: 2 }}>Rutinas</span>
          {d.routines.map((r, i) => (
            <details key={r.name} open={r.open} style={{
              borderRadius: "var(--radius-lg)", background: "var(--gradient-card)",
              border: "1px solid var(--border-subtle)", boxShadow: "var(--inner-top-hairline)", overflow: "hidden",
            }}>
              <summary style={{
                listStyle: "none", cursor: "pointer", padding: "var(--space-4)",
                display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-3)",
                WebkitTapHighlightColor: "transparent",
              }}>
                <span style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                  <span style={{ width: 38, height: 38, borderRadius: "var(--radius-md)", background: "var(--fill-blue-15)", color: "var(--accent-hover)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name="dumbbell" size={20} />
                  </span>
                  <span style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--weight-semibold)" }}>{r.name}</span>
                    <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{r.focus}</span>
                  </span>
                </span>
                <span className="acc-chevron" style={{ color: "var(--text-faint)", display: "inline-flex", transition: "transform var(--dur-base) var(--ease-standard)" }}>
                  <Icon name="chevronDown" size={20} />
                </span>
              </summary>
              <div style={{ padding: "0 var(--space-4) var(--space-2)" }}>
                {r.exercises.map((ex, j) => (
                  <div key={j} style={{
                    display: "grid", gridTemplateColumns: "1fr auto auto", gap: "var(--space-3)", alignItems: "center",
                    padding: "var(--space-3) 0",
                    borderTop: "1px solid var(--border-faint)",
                  }}>
                    <span style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>{ex.name}</span>
                    <span className="is-numeric" style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", textAlign: "center", minWidth: 44 }}>{ex.sets}</span>
                    <span className="is-numeric" style={{ fontSize: "var(--text-sm)", fontWeight: 600, textAlign: "right", minWidth: 56 }}>{ex.weight}</span>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    );
  }

  window.Gym = Gym;
})();
