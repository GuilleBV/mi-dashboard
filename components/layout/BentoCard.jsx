import React from "react";

/**
 * mi-dashboard BentoCard — the foundational surface of the dashboard.
 * Top-lit gradient, hairline border, large radius. Optional glass + glow.
 */
export function BentoCard({
  children,
  title,
  eyebrow,
  action,
  glow = "none",        // none | blue | green | danger
  glass = false,
  flat = false,
  padding = "var(--pad-card)",
  interactive = false,
  style = {},
  ...rest
}) {
  const glows = {
    none: "var(--inner-top-hairline), var(--shadow-md)",
    blue: "var(--inner-top-hairline), var(--glow-blue)",
    green: "var(--inner-top-hairline), var(--glow-green)",
    danger: "var(--inner-top-hairline), var(--glow-danger)",
  };

  return (
    <section
      style={{
        position: "relative",
        borderRadius: "var(--radius-lg)",
        background: glass
          ? "var(--bg-glass)"
          : flat
          ? "var(--gradient-card-flat)"
          : "var(--gradient-card)",
        backdropFilter: glass ? "var(--blur-glass)" : undefined,
        WebkitBackdropFilter: glass ? "var(--blur-glass)" : undefined,
        border: "1px solid var(--border-subtle)",
        boxShadow: glows[glow] || glows.none,
        padding,
        cursor: interactive ? "pointer" : "default",
        transition: "var(--transition-default)",
        overflow: "hidden",
        ...style,
      }}
      {...rest}
    >
      {(eyebrow || title || action) && (
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--space-3)",
            marginBottom: "var(--space-4)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "2px", minWidth: 0 }}>
            {eyebrow && (
              <span
                style={{
                  fontSize: "var(--text-micro)",
                  fontWeight: "var(--weight-semibold)",
                  letterSpacing: "var(--tracking-wide)",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                {eyebrow}
              </span>
            )}
            {title && (
              <h3
                style={{
                  fontSize: "var(--text-lg)",
                  fontWeight: "var(--weight-semibold)",
                  letterSpacing: "var(--tracking-snug)",
                  color: "var(--text-primary)",
                }}
              >
                {title}
              </h3>
            )}
          </div>
          {action}
        </header>
      )}
      {children}
    </section>
  );
}
