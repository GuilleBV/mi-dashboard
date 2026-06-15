import React from "react";

/**
 * mi-dashboard ProgressBar — ultra-thin (4px) pill track with accent fill.
 * Used for mini stats, habit progress, water level.
 */
export function ProgressBar({
  value = 0,            // 0–100
  color = "var(--accent)",
  trackColor = "var(--bg-inset)",
  height = "var(--bar-h)",
  glow = false,
  label,
  valueLabel,
  style = {},
}) {
  const pct = Math.max(0, Math.min(100, value));

  return (
    <div style={{ width: "100%", ...style }}>
      {(label || valueLabel) && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: "var(--space-2)",
          }}
        >
          {label && (
            <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{label}</span>
          )}
          {valueLabel && (
            <span
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: "var(--weight-semibold)",
                color: "var(--text-primary)",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {valueLabel}
            </span>
          )}
        </div>
      )}
      <div
        style={{
          width: "100%",
          height,
          background: trackColor,
          borderRadius: "var(--radius-pill)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${pct}%`,
            height: "100%",
            background: color,
            borderRadius: "var(--radius-pill)",
            boxShadow: glow ? "var(--glow-active)" : undefined,
            transition: "width var(--dur-slow) var(--ease-out)",
          }}
        />
      </div>
    </div>
  );
}
