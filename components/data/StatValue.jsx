import React from "react";

/**
 * mi-dashboard StatValue — large numeric figure with optional privacy mask.
 * Powers "Patrimonio Privado" and the Finanzas hero net-worth.
 */
export function StatValue({
  value,                  // string already formatted, e.g. "€48.250"
  hidden = false,
  size = "lg",            // sm | md | lg | hero
  delta,                  // e.g. "+2,4%"
  deltaDirection = "up",  // up | down | flat
  label,
  align = "left",
  gradient = false,       // white→electric text gradient
  style = {},
}) {
  const sizes = {
    sm: "var(--text-lg)",
    md: "var(--text-xl)",
    lg: "var(--text-3xl)",
    hero: "clamp(2.5rem, 11vw, var(--text-display))",
  };

  const deltaColors = {
    up: "var(--success)",
    down: "var(--danger)",
    flat: "var(--text-muted)",
  };
  const arrow = { up: "↑", down: "↓", flat: "→" }[deltaDirection];

  const masked = "••••••";

  const numberStyle = {
    fontSize: sizes[size] || sizes.lg,
    fontWeight: "var(--weight-heavy)",
    letterSpacing: "var(--tracking-tight)",
    lineHeight: 1,
    fontVariantNumeric: "tabular-nums",
    color: "var(--text-primary)",
    transition: "opacity var(--dur-base) var(--ease-standard)",
    ...(gradient && !hidden
      ? {
          background: "var(--gradient-text-electric)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }
      : {}),
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", textAlign: align, ...style }}>
      {label && (
        <span
          style={{
            fontSize: "var(--text-micro)",
            fontWeight: "var(--weight-semibold)",
            letterSpacing: "var(--tracking-wide)",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
        >
          {label}
        </span>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "var(--space-3)",
          justifyContent: align === "center" ? "center" : "flex-start",
        }}
      >
        <span style={numberStyle}>{hidden ? masked : value}</span>
        {delta && !hidden && (
          <span
            style={{
              fontSize: "var(--text-sm)",
              fontWeight: "var(--weight-semibold)",
              color: deltaColors[deltaDirection],
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {arrow} {delta}
          </span>
        )}
      </div>
    </div>
  );
}
