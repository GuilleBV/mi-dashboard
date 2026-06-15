import React from "react";

/**
 * mi-dashboard IconButton — square/circular touch target (min 44px) for icons.
 * Used for the net-worth privacy toggle, water +/- controls, nav chevrons.
 */
export function IconButton({
  children,
  variant = "glass",
  size = "md",
  active = false,
  round = false,
  disabled = false,
  ariaLabel,
  style = {},
  ...rest
}) {
  const dims = { sm: 36, md: 44, lg: 52 };
  const d = dims[size] || dims.md;

  const variants = {
    glass: {
      background: "var(--fill-white-06)",
      color: "var(--text-secondary)",
      border: "1px solid var(--border-subtle)",
    },
    solid: {
      background: "var(--bg-elevated)",
      color: "var(--text-primary)",
      border: "1px solid var(--border-subtle)",
    },
    accent: {
      background: "var(--fill-blue-15)",
      color: "var(--accent-hover)",
      border: "1px solid var(--border-accent)",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-muted)",
      border: "1px solid transparent",
    },
  };

  const v = variants[variant] || variants.glass;

  return (
    <button
      aria-label={ariaLabel}
      disabled={disabled}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: d,
        height: d,
        borderRadius: round ? "var(--radius-full)" : "var(--radius-md)",
        opacity: disabled ? 0.4 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "var(--transition-default)",
        WebkitTapHighlightColor: "transparent",
        ...v,
        ...(active
          ? { boxShadow: "var(--glow-active)", borderColor: "var(--border-glow)", color: "var(--accent-glow)" }
          : {}),
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
