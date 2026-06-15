// mi-dashboard · Organizador y Hábitos screen
(function () {
  function HabitRow({ habit, expanded, onToggle, onResolve }) {
    const Icon = window.Icon;
    const [removing, setRemoving] = React.useState(false);
    const resolve = (e) => {
      e.stopPropagation();
      setRemoving(true);
      setTimeout(onResolve, 400);
    };
    return (
      <div style={{
        maxHeight: removing ? 0 : 96, opacity: removing ? 0 : 1,
        marginBottom: removing ? 0 : "var(--space-3)",
        overflow: "hidden",
        transition: "max-height var(--dur-slower) var(--ease-standard), opacity var(--dur-slower) var(--ease-standard), margin var(--dur-slower) var(--ease-standard)",
      }}>
        <div
          onClick={onToggle}
          style={{
            display: "flex", alignItems: "center", gap: "var(--space-3)",
            padding: "var(--space-4)", borderRadius: "var(--radius-lg)",
            background: "var(--gradient-card)", border: "1px solid var(--border-subtle)",
            boxShadow: "var(--inner-top-hairline)", cursor: "pointer", WebkitTapHighlightColor: "transparent",
          }}
        >
          <span style={{ width: 40, height: 40, borderRadius: "var(--radius-md)", flexShrink: 0, background: "var(--bg-elevated)", color: "var(--accent-hover)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name={habit.icon} size={20} />
          </span>
          <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontSize: "var(--text-base)", fontWeight: "var(--weight-medium)", color: "var(--text-primary)" }}>{habit.title}</span>
            <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{habit.meta}</span>
          </div>
          {/* revealed actions */}
          <div style={{ display: "flex", gap: "var(--space-2)", overflow: "hidden", transition: "var(--transition-default)" }}>
            <ActionBtn show={expanded} tone="green" onClick={resolve}><Icon name="check" size={20} /></ActionBtn>
            <ActionBtn show={expanded} tone="amber" onClick={resolve}><Icon name="snooze" size={18} /></ActionBtn>
          </div>
        </div>
      </div>
    );
  }

  function ActionBtn({ show, tone, onClick, children }) {
    const tones = {
      green: { bg: "var(--fill-green-12)", fg: "var(--success)", bd: "rgba(16,185,129,0.4)" },
      amber: { bg: "var(--fill-amber-12)", fg: "var(--warning)", bd: "rgba(245,158,11,0.4)" },
    }[tone];
    return (
      <button onClick={onClick} style={{
        width: show ? 44 : 0, height: 44, opacity: show ? 1 : 0, padding: 0,
        flexShrink: 0, display: "inline-flex", alignItems: "center", justifyContent: "center",
        borderRadius: "var(--radius-md)", border: show ? `1px solid ${tones.bd}` : "1px solid transparent",
        background: tones.bg, color: tones.fg, cursor: "pointer",
        transition: "width var(--dur-base) var(--ease-standard), opacity var(--dur-base) var(--ease-standard)",
        WebkitTapHighlightColor: "transparent",
      }}>{children}</button>
    );
  }

  function Organizador() {
    const DS = window.MiDashboardDesignSystem_1a61a0;
    const { BentoCard } = DS;
    const d = window.appData.organizador;
    const [habits, setHabits] = React.useState(d.habits);
    const [open, setOpen] = React.useState(null);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <SectionTitle title="Organizador" sub="Hábitos y constancia" />

        {/* Racha scorecard */}
        <BentoCard glow="blue" style={{ containerType: "inline-size" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--space-1)", padding: "var(--space-2) 0" }}>
            <span style={{ fontSize: "var(--text-micro)", fontWeight: "var(--weight-semibold)", letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--text-muted)" }}>Racha actual</span>
            <span className="is-numeric" style={{
              fontSize: "clamp(4rem, 15cqw, 8rem)", lineHeight: "0.8", fontWeight: "var(--weight-heavy)",
              background: "var(--gradient-text-electric)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>{d.streak}</span>
            <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>días seguidos · mejor: 31</span>
          </div>
        </BentoCard>

        {/* Habits */}
        <div>
          <span className="eyebrow" style={{ paddingLeft: 2, display: "block", marginBottom: "var(--space-3)" }}>Hábitos de hoy</span>
          {habits.length === 0 && (
            <div style={{ textAlign: "center", padding: "var(--space-8) 0", color: "var(--text-faint)", fontSize: "var(--text-sm)" }}>Todo hecho por hoy.</div>
          )}
          {habits.map(hb => (
            <HabitRow key={hb.id} habit={hb}
              expanded={open === hb.id}
              onToggle={() => setOpen(o => o === hb.id ? null : hb.id)}
              onResolve={() => setHabits(hs => hs.filter(x => x.id !== hb.id))}
            />
          ))}
        </div>
      </div>
    );
  }
  window.Organizador = Organizador;
})();
