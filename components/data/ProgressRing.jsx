import React from "react";

/**
 * mi-dashboard ProgressRing — SVG stroke-dasharray ring for biometric stats
 * (Sueño, Recuperación, Esfuerzo). Heavy numeric center.
 */
export function ProgressRing({
  value = 0,             // 0–100
  size = 120,
  stroke = 10,
  color = "var(--accent)",
  trackColor = "var(--bg-inset)",
  glow = false,
  centerValue,           // node shown in the middle (defaults to `${value}%`)
  centerLabel,           // small label under the value
  style = {},
}) {
  const pct = Math.max(0, Math.min(100, value));
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;

  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)", filter: glow ? "drop-shadow(0 0 6px rgba(0,240,255,0.45))" : undefined }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={trackColor} strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circ}`}
          style={{ transition: "stroke-dasharray var(--dur-slow) var(--ease-out)" }}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2px",
        }}
      >
        <span
          style={{
            fontSize: size > 100 ? "var(--text-2xl)" : "var(--text-lg)",
            fontWeight: "var(--weight-heavy)",
            letterSpacing: "var(--tracking-tight)",
            color: "var(--text-primary)",
            fontVariantNumeric: "tabular-nums",
            lineHeight: 1,
          }}
        >
          {centerValue != null ? centerValue : `${Math.round(pct)}%`}
        </span>
        {centerLabel && (
          <span
            style={{
              fontSize: "var(--text-micro)",
              fontWeight: "var(--weight-semibold)",
              letterSpacing: "var(--tracking-wide)",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            {centerLabel}
          </span>
        )}
      </div>
    </div>
  );
}
