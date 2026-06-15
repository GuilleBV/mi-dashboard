import React from "react";

/**
 * mi-dashboard TabBar — fixed bottom navigation for the PWA shell.
 * Glass background, electric-blue active item with glow.
 */
export function TabBar({
  items = [],            // [{ id, label, icon }]
  active,
  onChange,
  floating = true,
  style = {},
}) {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-around",
        gap: "var(--space-1)",
        height: "var(--tabbar-h)",
        padding: "var(--space-2)",
        background: "var(--bg-glass)",
        backdropFilter: "var(--blur-glass)",
        WebkitBackdropFilter: "var(--blur-glass)",
        borderTop: floating ? "none" : "1px solid var(--border-subtle)",
        border: floating ? "1px solid var(--border-subtle)" : undefined,
        borderRadius: floating ? "var(--radius-xl)" : 0,
        boxShadow: floating ? "var(--shadow-lg)" : "none",
        ...style,
      }}
    >
      {items.map((it) => {
        const isActive = it.id === active;
        return (
          <button
            key={it.id}
            onClick={() => onChange && onChange(it.id)}
            aria-current={isActive ? "page" : undefined}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              minWidth: 0,
              padding: "var(--space-2) 0",
              borderRadius: "var(--radius-md)",
              border: "none",
              background: isActive ? "var(--fill-blue-15)" : "transparent",
              color: isActive ? "var(--accent-glow)" : "var(--text-faint)",
              boxShadow: isActive ? "var(--glow-active)" : "none",
              transition: "var(--transition-default)",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <span style={{ display: "inline-flex", width: 22, height: 22, alignItems: "center", justifyContent: "center" }}>
              {it.icon}
            </span>
            <span
              style={{
                fontSize: "var(--text-micro)",
                fontWeight: "var(--weight-semibold)",
                letterSpacing: "var(--tracking-snug)",
                whiteSpace: "nowrap",
              }}
            >
              {it.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
