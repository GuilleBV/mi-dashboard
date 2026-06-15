import React from "react";

/**
 * mi-dashboard Button — pill/rounded action control for a dark canvas.
 * Variants: primary (electric blue), secondary (glass), ghost, danger.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { height: "var(--control-h-sm)", padding: "0 var(--space-3)", font: "var(--text-sm)", radius: "var(--radius-sm)" },
    md: { height: "var(--control-h)", padding: "0 var(--space-5)", font: "var(--text-base)", radius: "var(--radius-md)" },
    lg: { height: "var(--control-h-lg)", padding: "0 var(--space-6)", font: "var(--text-md)", radius: "var(--radius-md)" },
  };

  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--text-on-accent)",
      border: "1px solid transparent",
      boxShadow: "var(--glow-active)",
    },
    secondary: {
      background: "var(--fill-white-08)",
      color: "var(--text-primary)",
      border: "1px solid var(--border-subtle)",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-secondary)",
      border: "1px solid transparent",
    },
    danger: {
      background: "var(--fill-danger-12)",
      color: "var(--danger)",
      border: "1px solid var(--border-subtle)",
    },
  };

  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;

  return (
    <button
      disabled={disabled}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--space-2)",
        height: s.height,
        padding: s.padding,
        fontSize: s.font,
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "var(--tracking-snug)",
        borderRadius: s.radius,
        width: fullWidth ? "100%" : "auto",
        opacity: disabled ? 0.45 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "var(--transition-default)",
        WebkitTapHighlightColor: "transparent",
        ...v,
        ...style,
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
