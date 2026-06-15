import React from "react";

/**
 * mi-dashboard Switch — iOS-style toggle. Off = zinc track, On = electric blue.
 */
export function Switch({
  checked = false,
  onChange,
  disabled = false,
  size = "md",
  ariaLabel,
  style = {},
}) {
  const dims = {
    sm: { w: 40, h: 24, knob: 18 },
    md: { w: 48, h: 28, knob: 22 },
  };
  const d = dims[size] || dims.md;
  const pad = (d.h - d.knob) / 2;

  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={() => !disabled && onChange && onChange(!checked)}
      style={{
        position: "relative",
        width: d.w,
        height: d.h,
        flexShrink: 0,
        padding: 0,
        borderRadius: "var(--radius-pill)",
        border: "1px solid var(--border-subtle)",
        background: checked ? "var(--accent)" : "var(--bg-inset)",
        boxShadow: checked ? "var(--glow-active)" : "inset 0 1px 2px rgba(0,0,0,0.4)",
        opacity: disabled ? 0.45 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "var(--transition-default)",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: pad,
          left: checked ? d.w - d.knob - pad - 1 : pad,
          width: d.knob,
          height: d.knob,
          borderRadius: "var(--radius-full)",
          background: "#fff",
          boxShadow: "0 1px 3px rgba(0,0,0,0.5)",
          transition: "left var(--dur-base) var(--ease-spring)",
        }}
      />
    </button>
  );
}
