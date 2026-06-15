import React from "react";

/**
 * mi-dashboard Badge — small status pill / tag.
 * Tones map to the semantic palette; supports a leading dot.
 */
export function Badge({
  children,
  tone = "neutral",     // neutral | blue | green | amber | danger
  dot = false,
  solid = false,
  size = "md",          // sm | md
  style = {},
}) {
  const tones = {
    neutral: { fg: "var(--text-secondary)", bg: "var(--fill-white-08)", dot: "var(--text-faint)" },
    blue:    { fg: "var(--accent-hover)", bg: "var(--fill-blue-15)", dot: "var(--accent)" },
    green:   { fg: "var(--green-400)", bg: "var(--fill-green-12)", dot: "var(--success)" },
    amber:   { fg: "var(--amber-500)", bg: "var(--fill-amber-12)", dot: "var(--warning)" },
    danger:  { fg: "var(--red-500)", bg: "var(--fill-danger-12)", dot: "var(--danger)" },
  };
  const t = tones[tone] || tones.neutral;
  const sm = size === "sm";

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-2)",
        height: sm ? 20 : 24,
        padding: sm ? "0 var(--space-2)" : "0 var(--space-3)",
        borderRadius: "var(--radius-pill)",
        fontSize: sm ? "var(--text-micro)" : "var(--text-xs)",
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "var(--tracking-snug)",
        color: solid ? "#fff" : t.fg,
        background: solid ? t.dot : t.bg,
        border: solid ? "1px solid transparent" : "1px solid var(--border-subtle)",
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {dot && (
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "var(--radius-full)",
            background: solid ? "#fff" : t.dot,
            flexShrink: 0,
          }}
        />
      )}
      {children}
    </span>
  );
}
