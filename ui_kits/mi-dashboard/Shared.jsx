// mi-dashboard · Shared kit helpers
(function () {
  function SectionTitle({ title, sub }) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "var(--space-1) 2px var(--space-1)" }}>
        <h2 style={{ fontSize: "var(--text-xl)", fontWeight: "var(--weight-semibold)", letterSpacing: "var(--tracking-snug)" }}>{title}</h2>
        {sub && <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{sub}</span>}
      </div>
    );
  }
  window.SectionTitle = SectionTitle;
})();
