/* @ds-bundle: {"format":3,"namespace":"MiDashboardDesignSystem_1a61a0","components":[{"name":"ProgressBar","sourcePath":"components/data/ProgressBar.jsx"},{"name":"ProgressRing","sourcePath":"components/data/ProgressRing.jsx"},{"name":"StatValue","sourcePath":"components/data/StatValue.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"BentoCard","sourcePath":"components/layout/BentoCard.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"}],"sourceHashes":{"components/data/ProgressBar.jsx":"4bbc6baea616","components/data/ProgressRing.jsx":"3cbb80306203","components/data/StatValue.jsx":"f65ad827e9a9","components/feedback/Badge.jsx":"d1acb1581983","components/forms/Button.jsx":"f2cb624a0feb","components/forms/IconButton.jsx":"ac39d3d66feb","components/forms/Switch.jsx":"adb38307d0cd","components/layout/BentoCard.jsx":"d5df5254fd1c","components/navigation/TabBar.jsx":"074c42b238da","ui_kits/mi-dashboard/AppData.jsx":"a8dd225eed65","ui_kits/mi-dashboard/Finanzas.jsx":"39690b5590cd","ui_kits/mi-dashboard/Gym.jsx":"497b0d44aa7f","ui_kits/mi-dashboard/Icons.jsx":"34aad3e01a96","ui_kits/mi-dashboard/Organizador.jsx":"6b867b14529a","ui_kits/mi-dashboard/Overview.jsx":"f1aa5a303bb4","ui_kits/mi-dashboard/Salud.jsx":"5dc3dbcd2850","ui_kits/mi-dashboard/Shared.jsx":"1e48a6b4a000"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MiDashboardDesignSystem_1a61a0 = window.MiDashboardDesignSystem_1a61a0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data/ProgressBar.jsx
try { (() => {
/**
 * mi-dashboard ProgressBar — ultra-thin (4px) pill track with accent fill.
 * Used for mini stats, habit progress, water level.
 */
function ProgressBar({
  value = 0,
  // 0–100
  color = "var(--accent)",
  trackColor = "var(--bg-inset)",
  height = "var(--bar-h)",
  glow = false,
  label,
  valueLabel,
  style = {}
}) {
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      ...style
    }
  }, (label || valueLabel) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: "var(--space-2)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, label), valueLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-primary)",
      fontVariantNumeric: "tabular-nums"
    }
  }, valueLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height,
      background: trackColor,
      borderRadius: "var(--radius-pill)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      background: color,
      borderRadius: "var(--radius-pill)",
      boxShadow: glow ? "var(--glow-active)" : undefined,
      transition: "width var(--dur-slow) var(--ease-out)"
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressRing.jsx
try { (() => {
/**
 * mi-dashboard ProgressRing — SVG stroke-dasharray ring for biometric stats
 * (Sueño, Recuperación, Esfuerzo). Heavy numeric center.
 */
function ProgressRing({
  value = 0,
  // 0–100
  size = 120,
  stroke = 10,
  color = "var(--accent)",
  trackColor = "var(--bg-inset)",
  glow = false,
  centerValue,
  // node shown in the middle (defaults to `${value}%`)
  centerLabel,
  // small label under the value
  style = {}
}) {
  const pct = Math.max(0, Math.min(100, value));
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const dash = pct / 100 * circ;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: "rotate(-90deg)",
      filter: glow ? "drop-shadow(0 0 6px rgba(0,240,255,0.45))" : undefined
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: trackColor,
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeDasharray: `${dash} ${circ}`,
    style: {
      transition: "stroke-dasharray var(--dur-slow) var(--ease-out)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "2px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size > 100 ? "var(--text-2xl)" : "var(--text-lg)",
      fontWeight: "var(--weight-heavy)",
      letterSpacing: "var(--tracking-tight)",
      color: "var(--text-primary)",
      fontVariantNumeric: "tabular-nums",
      lineHeight: 1
    }
  }, centerValue != null ? centerValue : `${Math.round(pct)}%`), centerLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-micro)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, centerLabel)));
}
Object.assign(__ds_scope, { ProgressRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressRing.jsx", error: String((e && e.message) || e) }); }

// components/data/StatValue.jsx
try { (() => {
/**
 * mi-dashboard StatValue — large numeric figure with optional privacy mask.
 * Powers "Patrimonio Privado" and the Finanzas hero net-worth.
 */
function StatValue({
  value,
  // string already formatted, e.g. "€48.250"
  hidden = false,
  size = "lg",
  // sm | md | lg | hero
  delta,
  // e.g. "+2,4%"
  deltaDirection = "up",
  // up | down | flat
  label,
  align = "left",
  gradient = false,
  // white→electric text gradient
  style = {}
}) {
  const sizes = {
    sm: "var(--text-lg)",
    md: "var(--text-xl)",
    lg: "var(--text-3xl)",
    hero: "clamp(2.5rem, 11vw, var(--text-display))"
  };
  const deltaColors = {
    up: "var(--success)",
    down: "var(--danger)",
    flat: "var(--text-muted)"
  };
  const arrow = {
    up: "↑",
    down: "↓",
    flat: "→"
  }[deltaDirection];
  const masked = "••••••";
  const numberStyle = {
    fontSize: sizes[size] || sizes.lg,
    fontWeight: "var(--weight-heavy)",
    letterSpacing: "var(--tracking-tight)",
    lineHeight: 1,
    fontVariantNumeric: "tabular-nums",
    color: "var(--text-primary)",
    transition: "opacity var(--dur-base) var(--ease-standard)",
    ...(gradient && !hidden ? {
      background: "var(--gradient-text-electric)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent"
    } : {})
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      textAlign: align,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-micro)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-3)",
      justifyContent: align === "center" ? "center" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: numberStyle
  }, hidden ? masked : value), delta && !hidden && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: deltaColors[deltaDirection],
      fontVariantNumeric: "tabular-nums"
    }
  }, arrow, " ", delta)));
}
Object.assign(__ds_scope, { StatValue });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatValue.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
/**
 * mi-dashboard Badge — small status pill / tag.
 * Tones map to the semantic palette; supports a leading dot.
 */
function Badge({
  children,
  tone = "neutral",
  // neutral | blue | green | amber | danger
  dot = false,
  solid = false,
  size = "md",
  // sm | md
  style = {}
}) {
  const tones = {
    neutral: {
      fg: "var(--text-secondary)",
      bg: "var(--fill-white-08)",
      dot: "var(--text-faint)"
    },
    blue: {
      fg: "var(--accent-hover)",
      bg: "var(--fill-blue-15)",
      dot: "var(--accent)"
    },
    green: {
      fg: "var(--green-400)",
      bg: "var(--fill-green-12)",
      dot: "var(--success)"
    },
    amber: {
      fg: "var(--amber-500)",
      bg: "var(--fill-amber-12)",
      dot: "var(--warning)"
    },
    danger: {
      fg: "var(--red-500)",
      bg: "var(--fill-danger-12)",
      dot: "var(--danger)"
    }
  };
  const t = tones[tone] || tones.neutral;
  const sm = size === "sm";
  return /*#__PURE__*/React.createElement("span", {
    style: {
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
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "var(--radius-full)",
      background: solid ? "#fff" : t.dot,
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * mi-dashboard Button — pill/rounded action control for a dark canvas.
 * Variants: primary (electric blue), secondary (glass), ghost, danger.
 */
function Button({
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
    sm: {
      height: "var(--control-h-sm)",
      padding: "0 var(--space-3)",
      font: "var(--text-sm)",
      radius: "var(--radius-sm)"
    },
    md: {
      height: "var(--control-h)",
      padding: "0 var(--space-5)",
      font: "var(--text-base)",
      radius: "var(--radius-md)"
    },
    lg: {
      height: "var(--control-h-lg)",
      padding: "0 var(--space-6)",
      font: "var(--text-md)",
      radius: "var(--radius-md)"
    }
  };
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--text-on-accent)",
      border: "1px solid transparent",
      boxShadow: "var(--glow-active)"
    },
    secondary: {
      background: "var(--fill-white-08)",
      color: "var(--text-primary)",
      border: "1px solid var(--border-subtle)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-secondary)",
      border: "1px solid transparent"
    },
    danger: {
      background: "var(--fill-danger-12)",
      color: "var(--danger)",
      border: "1px solid var(--border-subtle)"
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
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
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * mi-dashboard IconButton — square/circular touch target (min 44px) for icons.
 * Used for the net-worth privacy toggle, water +/- controls, nav chevrons.
 */
function IconButton({
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
  const dims = {
    sm: 36,
    md: 44,
    lg: 52
  };
  const d = dims[size] || dims.md;
  const variants = {
    glass: {
      background: "var(--fill-white-06)",
      color: "var(--text-secondary)",
      border: "1px solid var(--border-subtle)"
    },
    solid: {
      background: "var(--bg-elevated)",
      color: "var(--text-primary)",
      border: "1px solid var(--border-subtle)"
    },
    accent: {
      background: "var(--fill-blue-15)",
      color: "var(--accent-hover)",
      border: "1px solid var(--border-accent)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-muted)",
      border: "1px solid transparent"
    }
  };
  const v = variants[variant] || variants.glass;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel,
    disabled: disabled,
    style: {
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
      ...(active ? {
        boxShadow: "var(--glow-active)",
        borderColor: "var(--border-glow)",
        color: "var(--accent-glow)"
      } : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/**
 * mi-dashboard Switch — iOS-style toggle. Off = zinc track, On = electric blue.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  size = "md",
  ariaLabel,
  style = {}
}) {
  const dims = {
    sm: {
      w: 40,
      h: 24,
      knob: 18
    },
    md: {
      w: 48,
      h: 28,
      knob: 22
    }
  };
  const d = dims[size] || dims.md;
  const pad = (d.h - d.knob) / 2;
  return /*#__PURE__*/React.createElement("button", {
    role: "switch",
    "aria-checked": checked,
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
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
      WebkitTapHighlightColor: "transparent"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: pad,
      left: checked ? d.w - d.knob - pad - 1 : pad,
      width: d.knob,
      height: d.knob,
      borderRadius: "var(--radius-full)",
      background: "#fff",
      boxShadow: "0 1px 3px rgba(0,0,0,0.5)",
      transition: "left var(--dur-base) var(--ease-spring)"
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/layout/BentoCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * mi-dashboard BentoCard — the foundational surface of the dashboard.
 * Top-lit gradient, hairline border, large radius. Optional glass + glow.
 */
function BentoCard({
  children,
  title,
  eyebrow,
  action,
  glow = "none",
  // none | blue | green | danger
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
    danger: "var(--inner-top-hairline), var(--glow-danger)"
  };
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      position: "relative",
      borderRadius: "var(--radius-lg)",
      background: glass ? "var(--bg-glass)" : flat ? "var(--gradient-card-flat)" : "var(--gradient-card)",
      backdropFilter: glass ? "var(--blur-glass)" : undefined,
      WebkitBackdropFilter: glass ? "var(--blur-glass)" : undefined,
      border: "1px solid var(--border-subtle)",
      boxShadow: glows[glow] || glows.none,
      padding,
      cursor: interactive ? "pointer" : "default",
      transition: "var(--transition-default)",
      overflow: "hidden",
      ...style
    }
  }, rest), (eyebrow || title || action) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-3)",
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px",
      minWidth: 0
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-micro)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-lg)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-snug)",
      color: "var(--text-primary)"
    }
  }, title)), action), children);
}
Object.assign(__ds_scope, { BentoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/BentoCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
/**
 * mi-dashboard TabBar — fixed bottom navigation for the PWA shell.
 * Glass background, electric-blue active item with glow.
 */
function TabBar({
  items = [],
  // [{ id, label, icon }]
  active,
  onChange,
  floating = true,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
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
      ...style
    }
  }, items.map(it => {
    const isActive = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onChange && onChange(it.id),
      "aria-current": isActive ? "page" : undefined,
      style: {
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
        WebkitTapHighlightColor: "transparent"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        width: 22,
        height: 22,
        alignItems: "center",
        justifyContent: "center"
      }
    }, it.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-micro)",
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "var(--tracking-snug)",
        whiteSpace: "nowrap"
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mi-dashboard/AppData.jsx
try { (() => {
// mi-dashboard · Mock application state (appData)
window.appData = {
  user: {
    name: "Guille"
  },
  overview: {
    netWorth: "€48.250",
    netWorthDelta: "+2,4%",
    focus: {
      priority: "high",
      text: "Entrenar piernas — sesión pesada",
      meta: "Recuperación 72% · buen día para intensidad"
    },
    quick: [{
      label: "Pasos",
      value: "5.760",
      pct: 48,
      color: "var(--accent)"
    }, {
      label: "Agua",
      value: "1,4 / 2,5 L",
      pct: 56,
      color: "var(--blue-400)"
    }, {
      label: "Proteína",
      value: "144 / 200 g",
      pct: 72,
      color: "var(--success)"
    }, {
      label: "Presupuesto",
      value: "92%",
      pct: 92,
      color: "var(--warning)"
    }]
  },
  gym: {
    supplements: [{
      id: "am",
      time: "Mañana",
      icon: "coffee",
      title: "Creatina + Omega 3",
      note: "Con el desayuno",
      done: true
    }, {
      id: "mid",
      time: "Mediodía",
      icon: "pill",
      title: "Multivitamínico",
      note: "Tras el almuerzo",
      done: false
    }, {
      id: "pm",
      time: "Noche",
      icon: "moon",
      title: "Magnesio + Zinc",
      note: "30 min antes de dormir",
      done: false
    }],
    // 1 = completed day, 0 = rest/missed
    month: [1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    routines: [{
      name: "Piernas",
      focus: "Cuádriceps · Glúteo",
      open: true,
      exercises: [{
        name: "Sentadilla",
        sets: "4×8",
        weight: "90 kg"
      }, {
        name: "Prensa",
        sets: "4×12",
        weight: "180 kg"
      }, {
        name: "Peso muerto rumano",
        sets: "3×10",
        weight: "70 kg"
      }, {
        name: "Extensión cuádriceps",
        sets: "3×15",
        weight: "45 kg"
      }]
    }, {
      name: "Empuje",
      focus: "Pecho · Hombro · Tríceps",
      open: false,
      exercises: [{
        name: "Press banca",
        sets: "4×8",
        weight: "75 kg"
      }, {
        name: "Press militar",
        sets: "4×10",
        weight: "40 kg"
      }, {
        name: "Fondos",
        sets: "3×12",
        weight: "+10 kg"
      }]
    }, {
      name: "Tirón",
      focus: "Espalda · Bíceps",
      open: false,
      exercises: [{
        name: "Dominadas",
        sets: "4×8",
        weight: "+5 kg"
      }, {
        name: "Remo con barra",
        sets: "4×10",
        weight: "65 kg"
      }, {
        name: "Curl bíceps",
        sets: "3×12",
        weight: "16 kg"
      }]
    }]
  },
  salud: {
    rings: [{
      key: "sueno",
      label: "Sueño",
      value: 86,
      center: "7,4h",
      color: "var(--blue-400)",
      glow: true,
      metrics: [{
        k: "Profundo",
        v: "1,8h"
      }, {
        k: "REM",
        v: "2,1h"
      }, {
        k: "Despertares",
        v: "2"
      }]
    }, {
      key: "recup",
      label: "Recuperación",
      value: 72,
      center: "72",
      color: "var(--success)",
      metrics: [{
        k: "HRV",
        v: "68 ms"
      }, {
        k: "RHR",
        v: "52 lpm"
      }, {
        k: "Resp.",
        v: "14 rpm"
      }]
    }, {
      key: "esfuerzo",
      label: "Esfuerzo",
      value: 58,
      center: "12,4",
      color: "var(--cobalt-600)",
      metrics: [{
        k: "Calorías",
        v: "640"
      }, {
        k: "Zona 2",
        v: "38 min"
      }, {
        k: "Pico FC",
        v: "162"
      }]
    }],
    water: {
      current: 1.4,
      goal: 2.5,
      step: 0.25
    }
  },
  organizador: {
    streak: 14,
    habits: [{
      id: "h1",
      icon: "droplet",
      title: "Beber 2,5L de agua",
      meta: "Hoy · objetivo diario"
    }, {
      id: "h2",
      icon: "bed",
      title: "Dormir antes de las 23:30",
      meta: "Racha de 9 días"
    }, {
      id: "h3",
      icon: "activity",
      title: "10.000 pasos",
      meta: "Faltan 4.240"
    }, {
      id: "h4",
      icon: "coffee",
      title: "Sin cafeína después de las 16h",
      meta: "Hoy"
    }]
  },
  finanzas: {
    netWorth: "€48.250",
    netWorthDelta: "+2,4%",
    accounts: [{
      name: "Cuenta corriente",
      bank: "BBVA",
      icon: "wallet",
      amount: "€3.180,40",
      neg: false
    }, {
      name: "Ahorro",
      bank: "Trade Republic",
      icon: "trophy",
      amount: "€21.500,00",
      neg: false
    }, {
      name: "Inversión",
      bank: "MyInvestor",
      icon: "trendingUp",
      amount: "€24.090,10",
      neg: false
    }, {
      name: "Tarjeta",
      bank: "American Express",
      icon: "car",
      amount: "−€520,50",
      neg: true
    }],
    transactions: [{
      name: "Mercadona",
      cat: "Supermercado",
      amount: "−€64,20"
    }, {
      name: "Nómina",
      cat: "Ingreso",
      amount: "+€2.450,00",
      income: true
    }, {
      name: "Gasolina Repsol",
      cat: "Transporte",
      amount: "−€58,90"
    }],
    subs: [{
      name: "Spotify",
      icon: "music",
      amount: "€10,99",
      days: 2
    }, {
      name: "Netflix",
      icon: "play",
      amount: "€13,99",
      days: 9
    }, {
      name: "iCloud",
      icon: "cloud",
      amount: "€2,99",
      days: 21
    }]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mi-dashboard/AppData.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mi-dashboard/Finanzas.jsx
try { (() => {
// mi-dashboard · Finanzas screen
(function () {
  function Finanzas() {
    const DS = window.MiDashboardDesignSystem_1a61a0;
    const {
      BentoCard,
      StatValue,
      Badge,
      IconButton
    } = DS;
    const Icon = window.Icon;
    const d = window.appData.finanzas;
    const [hidden, setHidden] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(SectionTitle, {
      title: "Finanzas",
      sub: "Patrimonio neto y movimientos"
    }), /*#__PURE__*/React.createElement(BentoCard, {
      glow: "blue",
      padding: "var(--space-8)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-micro)",
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "var(--tracking-wider)",
        textTransform: "uppercase",
        color: "var(--text-muted)"
      }
    }, "Patrimonio neto"), /*#__PURE__*/React.createElement(StatValue, {
      value: d.netWorth,
      hidden: hidden,
      size: "hero",
      align: "center",
      gradient: !hidden
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "green",
      dot: true
    }, d.netWorthDelta, " este mes"), /*#__PURE__*/React.createElement(IconButton, {
      size: "sm",
      ariaLabel: "Mostrar/ocultar",
      onClick: () => setHidden(v => !v)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: hidden ? "eye-off" : "eye",
      size: 18
    }))))), /*#__PURE__*/React.createElement(BentoCard, {
      eyebrow: "Cuentas",
      title: "Distribuci\xF3n"
    }, /*#__PURE__*/React.createElement("div", null, d.accounts.map((a, i) => /*#__PURE__*/React.createElement("div", {
      key: a.name,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        padding: "var(--space-3) 0",
        borderBottom: i < d.accounts.length - 1 ? "1px solid var(--border-faint)" : "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        borderRadius: "var(--radius-md)",
        flexShrink: 0,
        background: "var(--bg-elevated)",
        color: "var(--text-secondary)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: a.icon,
      size: 19
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-base)",
        fontWeight: "var(--weight-medium)"
      }
    }, a.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-xs)",
        color: "var(--text-muted)"
      }
    }, a.bank)), /*#__PURE__*/React.createElement("span", {
      className: "is-numeric",
      style: {
        fontSize: "var(--text-base)",
        fontWeight: 600,
        color: a.neg ? "var(--danger)" : "var(--text-primary)"
      }
    }, hidden ? "••••" : a.amount))))), /*#__PURE__*/React.createElement(BentoCard, {
      eyebrow: "Reciente",
      title: "Movimientos"
    }, /*#__PURE__*/React.createElement("div", null, d.transactions.map((t, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "var(--space-3) 0",
        borderBottom: i < d.transactions.length - 1 ? "1px solid var(--border-faint)" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-base)"
      }
    }, t.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-xs)",
        color: "var(--text-faint)"
      }
    }, t.cat)), /*#__PURE__*/React.createElement("span", {
      className: "is-numeric",
      style: {
        fontSize: "var(--text-base)",
        fontWeight: 600,
        color: t.income ? "var(--success)" : "var(--text-muted)"
      }
    }, t.amount))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow",
      style: {
        paddingLeft: 2,
        display: "block",
        marginBottom: "var(--space-3)"
      }
    }, "Radar de suscripciones"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)"
      }
    }, d.subs.map(s => {
      const danger = s.days <= 3;
      return /*#__PURE__*/React.createElement("div", {
        key: s.name,
        style: {
          display: "flex",
          alignItems: "center",
          gap: "var(--space-3)",
          padding: "var(--space-4)",
          borderRadius: "var(--radius-lg)",
          background: "var(--gradient-card)",
          border: danger ? "1px solid rgba(239,68,68,0.5)" : "1px solid var(--border-subtle)",
          boxShadow: danger ? "var(--glow-danger)" : "var(--inner-top-hairline)"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 38,
          height: 38,
          borderRadius: "var(--radius-md)",
          flexShrink: 0,
          background: "var(--bg-elevated)",
          color: "var(--text-secondary)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center"
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: s.icon,
        size: 19
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: "var(--text-base)",
          fontWeight: "var(--weight-medium)"
        }
      }, s.name), /*#__PURE__*/React.createElement("span", {
        className: "is-numeric",
        style: {
          fontSize: "var(--text-xs)",
          color: "var(--text-muted)"
        }
      }, s.amount, " / mes")), /*#__PURE__*/React.createElement(Badge, {
        tone: danger ? "danger" : "neutral",
        solid: danger,
        dot: !danger
      }, s.days <= 1 ? "Mañana" : `${s.days} días`));
    }))));
  }
  window.Finanzas = Finanzas;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mi-dashboard/Finanzas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mi-dashboard/Gym.jsx
try { (() => {
// mi-dashboard · Gym & Suplementos screen
(function () {
  function SupplementBlock({
    block,
    onToggle
  }) {
    const Icon = window.Icon;
    const done = block.done;
    return /*#__PURE__*/React.createElement("button", {
      onClick: onToggle,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        width: "100%",
        textAlign: "left",
        padding: "var(--space-4)",
        borderRadius: "var(--radius-lg)",
        background: done ? "var(--fill-blue-15)" : "var(--gradient-card)",
        border: done ? "1px solid var(--border-glow)" : "1px solid var(--border-subtle)",
        boxShadow: done ? "var(--glow-active)" : "var(--inner-top-hairline)",
        transition: "var(--transition-default)",
        cursor: "pointer",
        WebkitTapHighlightColor: "transparent"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        borderRadius: "var(--radius-md)",
        flexShrink: 0,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: done ? "var(--accent)" : "var(--bg-elevated)",
        color: done ? "#fff" : "var(--text-secondary)",
        transition: "var(--transition-default)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: done ? "check" : block.icon,
      size: 22
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "2px",
        minWidth: 0,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-micro)",
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "var(--tracking-wide)",
        textTransform: "uppercase",
        color: done ? "var(--accent-hover)" : "var(--text-muted)"
      }
    }, block.time), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-base)",
        fontWeight: "var(--weight-semibold)",
        color: "var(--text-primary)"
      }
    }, block.title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-sm)",
        color: "var(--text-faint)",
        textDecoration: done ? "line-through" : "none",
        opacity: done ? 0.6 : 1
      }
    }, block.note)));
  }
  function Gym() {
    const DS = window.MiDashboardDesignSystem_1a61a0;
    const {
      BentoCard,
      Badge
    } = DS;
    const Icon = window.Icon;
    const d = window.appData.gym;
    const [supps, setSupps] = React.useState(d.supplements);
    const toggle = id => setSupps(s => s.map(b => b.id === id ? {
      ...b,
      done: !b.done
    } : b));
    const doneCount = d.month.filter(Boolean).length;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(SectionTitle, {
      title: "Gym & Suplementos",
      sub: "Marca tus tomas y revisa tu rutina"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)"
      }
    }, supps.map(b => /*#__PURE__*/React.createElement(SupplementBlock, {
      key: b.id,
      block: b,
      onToggle: () => toggle(b.id)
    }))), /*#__PURE__*/React.createElement(BentoCard, {
      eyebrow: "Este mes",
      title: "Constancia",
      action: /*#__PURE__*/React.createElement(Badge, {
        tone: "green",
        dot: true
      }, doneCount, " d\xEDas")
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: "var(--space-2)"
      }
    }, ["L", "M", "X", "J", "V", "S", "D"].map((day, i) => /*#__PURE__*/React.createElement("span", {
      key: "h" + i,
      style: {
        textAlign: "center",
        fontSize: "var(--text-micro)",
        color: "var(--text-faint)",
        fontWeight: 600
      }
    }, day)), d.month.map((c, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        aspectRatio: "1",
        borderRadius: "var(--radius-sm)",
        background: c ? "var(--accent)" : "var(--bg-inset)",
        boxShadow: c ? "0 0 8px rgba(0,240,255,0.25)" : "none",
        border: c ? "none" : "1px solid var(--border-faint)"
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow",
      style: {
        paddingLeft: 2
      }
    }, "Rutinas"), d.routines.map((r, i) => /*#__PURE__*/React.createElement("details", {
      key: r.name,
      open: r.open,
      style: {
        borderRadius: "var(--radius-lg)",
        background: "var(--gradient-card)",
        border: "1px solid var(--border-subtle)",
        boxShadow: "var(--inner-top-hairline)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("summary", {
      style: {
        listStyle: "none",
        cursor: "pointer",
        padding: "var(--space-4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-3)",
        WebkitTapHighlightColor: "transparent"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        borderRadius: "var(--radius-md)",
        background: "var(--fill-blue-15)",
        color: "var(--accent-hover)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "dumbbell",
      size: 20
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-base)",
        fontWeight: "var(--weight-semibold)"
      }
    }, r.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-xs)",
        color: "var(--text-muted)"
      }
    }, r.focus))), /*#__PURE__*/React.createElement("span", {
      className: "acc-chevron",
      style: {
        color: "var(--text-faint)",
        display: "inline-flex",
        transition: "transform var(--dur-base) var(--ease-standard)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevronDown",
      size: 20
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 var(--space-4) var(--space-2)"
      }
    }, r.exercises.map((ex, j) => /*#__PURE__*/React.createElement("div", {
      key: j,
      style: {
        display: "grid",
        gridTemplateColumns: "1fr auto auto",
        gap: "var(--space-3)",
        alignItems: "center",
        padding: "var(--space-3) 0",
        borderTop: "1px solid var(--border-faint)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-sm)",
        color: "var(--text-secondary)"
      }
    }, ex.name), /*#__PURE__*/React.createElement("span", {
      className: "is-numeric",
      style: {
        fontSize: "var(--text-sm)",
        color: "var(--text-muted)",
        textAlign: "center",
        minWidth: 44
      }
    }, ex.sets), /*#__PURE__*/React.createElement("span", {
      className: "is-numeric",
      style: {
        fontSize: "var(--text-sm)",
        fontWeight: 600,
        textAlign: "right",
        minWidth: 56
      }
    }, ex.weight))))))));
  }
  window.Gym = Gym;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mi-dashboard/Gym.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mi-dashboard/Icons.jsx
try { (() => {
// mi-dashboard · Icon set (Lucide-style line icons, stroke 2, 24px grid)
// Self-contained inline SVGs so the kit works offline. Swap for the full
// Lucide CDN if you need the complete set.
(function () {
  function Icon({
    name,
    size = 22,
    stroke = 2,
    color = "currentColor",
    style = {}
  }) {
    const p = PATHS[name];
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: FILLED[name] ? color : "none",
      stroke: FILLED[name] ? "none" : color,
      strokeWidth: stroke,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        display: "block",
        flexShrink: 0,
        ...style
      },
      "aria-hidden": "true"
    }, p);
  }
  const FILLED = {
    flame: false
  };
  const PATHS = {
    // greeting
    sunrise: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 2v6M5.6 9.6 4.2 8.2M2 18h2M20 18h2M19.8 8.2l-1.4 1.4M22 22H2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 18a4 4 0 0 0-8 0"
    })),
    sun: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
    })),
    moon: /*#__PURE__*/React.createElement("path", {
      d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
    }),
    // nav
    grid: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "7",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "3",
      width: "7",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "14",
      width: "7",
      height: "7",
      rx: "1.5"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "14",
      width: "7",
      height: "7",
      rx: "1.5"
    })),
    dumbbell: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "m6.5 6.5 11 11"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m21 21-1-1M3 3l1 1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m18 22 4-4M2 6l4-4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m3 10 7-7M14 21l7-7"
    })),
    heart: /*#__PURE__*/React.createElement("path", {
      d: "M19 14c1.5-1.5 3-3.3 3-5.5A4.5 4.5 0 0 0 12 6 4.5 4.5 0 0 0 2 8.5C2 10.7 3.5 12.5 5 14l7 7Z"
    }),
    checklist: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "m9 11 2 2 4-4"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "3"
    })),
    wallet: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "16",
      cy: "14",
      r: "1.2"
    })),
    // actions / status
    eye: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    })),
    "eye-off": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M9.9 4.24A9 9 0 0 1 12 4c6.5 0 10 7 10 7a13 13 0 0 1-2.16 2.92M6.6 6.6A13 13 0 0 0 2 11s3.5 7 10 7a9 9 0 0 0 3.4-.66"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m2 2 20 20"
    })),
    plus: /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14M5 12h14"
    }),
    minus: /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14"
    }),
    check: /*#__PURE__*/React.createElement("path", {
      d: "m5 12 5 5L20 7"
    }),
    x: /*#__PURE__*/React.createElement("path", {
      d: "M18 6 6 18M6 6l12 12"
    }),
    snooze: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "18",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 2v4M16 2v4M3 10h18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 16h6l-6 0"
    })),
    "more": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "5",
      cy: "12",
      r: "1.6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "1.6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "19",
      cy: "12",
      r: "1.6"
    })),
    bell: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M13.7 21a2 2 0 0 1-3.4 0"
    })),
    chevronDown: /*#__PURE__*/React.createElement("path", {
      d: "m6 9 6 6 6-6"
    }),
    chevronRight: /*#__PURE__*/React.createElement("path", {
      d: "m9 6 6 6-6 6"
    }),
    settings: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z"
    })),
    // domain
    flame: /*#__PURE__*/React.createElement("path", {
      d: "M12 2c1 4 4 5 4 9a4 4 0 0 1-8 0c0-1.2.4-2 1-3 .3 1 1 1.5 1.7 1.7C10 8 11 5 12 2Z"
    }),
    droplet: /*#__PURE__*/React.createElement("path", {
      d: "M12 2.7 6.3 9a8 8 0 1 0 11.4 0Z"
    }),
    pill: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M10.5 20.5a4.95 4.95 0 0 1-7-7l6-6a4.95 4.95 0 0 1 7 7Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m8.5 8.5 7 7"
    })),
    coffee: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M17 8h1a4 4 0 0 1 0 8h-1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 2v2M10 2v2M14 2v2"
    })),
    activity: /*#__PURE__*/React.createElement("path", {
      d: "M22 12h-4l-3 9L9 3l-3 9H2"
    }),
    zap: /*#__PURE__*/React.createElement("path", {
      d: "M13 2 3 14h7l-1 8 10-12h-7l1-8Z"
    }),
    bed: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M2 8v12M2 12h18a2 2 0 0 1 2 2v6M2 16h20"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 12V9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3"
    })),
    target: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "5"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "1.5"
    })),
    trophy: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M6 9a6 6 0 0 0 12 0V4H6Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 5H3v2a3 3 0 0 0 3 3M18 5h3v2a3 3 0 0 1-3 3M9 21h6M12 17v4"
    })),
    trendingUp: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "m22 7-8.5 8.5-5-5L2 17"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 7h6v6"
    })),
    arrowDown: /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14M19 12l-7 7-7-7"
    }),
    music: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "18",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "16",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 18V5l12-2v13"
    })),
    play: /*#__PURE__*/React.createElement("path", {
      d: "M6 4v16l14-8Z"
    }),
    cloud: /*#__PURE__*/React.createElement("path", {
      d: "M6.5 19a4.5 4.5 0 0 1 0-9 6 6 0 0 1 11.6 1.5A3.75 3.75 0 0 1 17.5 19Z"
    }),
    home: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "m3 10 9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 21v-7h6v7"
    })),
    car: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M5 13 6.5 7.5A2 2 0 0 1 8.4 6h7.2a2 2 0 0 1 1.9 1.5L19 13M5 13h14v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H8v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Z"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "7.5",
      cy: "14.5",
      r: "0.6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "16.5",
      cy: "14.5",
      r: "0.6"
    }))
  };
  window.Icon = Icon;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mi-dashboard/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mi-dashboard/Organizador.jsx
try { (() => {
// mi-dashboard · Organizador y Hábitos screen
(function () {
  function HabitRow({
    habit,
    expanded,
    onToggle,
    onResolve
  }) {
    const Icon = window.Icon;
    const [removing, setRemoving] = React.useState(false);
    const resolve = e => {
      e.stopPropagation();
      setRemoving(true);
      setTimeout(onResolve, 400);
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: removing ? 0 : 96,
        opacity: removing ? 0 : 1,
        marginBottom: removing ? 0 : "var(--space-3)",
        overflow: "hidden",
        transition: "max-height var(--dur-slower) var(--ease-standard), opacity var(--dur-slower) var(--ease-standard), margin var(--dur-slower) var(--ease-standard)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: onToggle,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        padding: "var(--space-4)",
        borderRadius: "var(--radius-lg)",
        background: "var(--gradient-card)",
        border: "1px solid var(--border-subtle)",
        boxShadow: "var(--inner-top-hairline)",
        cursor: "pointer",
        WebkitTapHighlightColor: "transparent"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: "var(--radius-md)",
        flexShrink: 0,
        background: "var(--bg-elevated)",
        color: "var(--accent-hover)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: habit.icon,
      size: 20
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: "2px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-base)",
        fontWeight: "var(--weight-medium)",
        color: "var(--text-primary)"
      }
    }, habit.title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-xs)",
        color: "var(--text-muted)"
      }
    }, habit.meta)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-2)",
        overflow: "hidden",
        transition: "var(--transition-default)"
      }
    }, /*#__PURE__*/React.createElement(ActionBtn, {
      show: expanded,
      tone: "green",
      onClick: resolve
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 20
    })), /*#__PURE__*/React.createElement(ActionBtn, {
      show: expanded,
      tone: "amber",
      onClick: resolve
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "snooze",
      size: 18
    })))));
  }
  function ActionBtn({
    show,
    tone,
    onClick,
    children
  }) {
    const tones = {
      green: {
        bg: "var(--fill-green-12)",
        fg: "var(--success)",
        bd: "rgba(16,185,129,0.4)"
      },
      amber: {
        bg: "var(--fill-amber-12)",
        fg: "var(--warning)",
        bd: "rgba(245,158,11,0.4)"
      }
    }[tone];
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      style: {
        width: show ? 44 : 0,
        height: 44,
        opacity: show ? 1 : 0,
        padding: 0,
        flexShrink: 0,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "var(--radius-md)",
        border: show ? `1px solid ${tones.bd}` : "1px solid transparent",
        background: tones.bg,
        color: tones.fg,
        cursor: "pointer",
        transition: "width var(--dur-base) var(--ease-standard), opacity var(--dur-base) var(--ease-standard)",
        WebkitTapHighlightColor: "transparent"
      }
    }, children);
  }
  function Organizador() {
    const DS = window.MiDashboardDesignSystem_1a61a0;
    const {
      BentoCard
    } = DS;
    const d = window.appData.organizador;
    const [habits, setHabits] = React.useState(d.habits);
    const [open, setOpen] = React.useState(null);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(SectionTitle, {
      title: "Organizador",
      sub: "H\xE1bitos y constancia"
    }), /*#__PURE__*/React.createElement(BentoCard, {
      glow: "blue",
      style: {
        containerType: "inline-size"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--space-1)",
        padding: "var(--space-2) 0"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-micro)",
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "var(--tracking-wider)",
        textTransform: "uppercase",
        color: "var(--text-muted)"
      }
    }, "Racha actual"), /*#__PURE__*/React.createElement("span", {
      className: "is-numeric",
      style: {
        fontSize: "clamp(4rem, 15cqw, 8rem)",
        lineHeight: "0.8",
        fontWeight: "var(--weight-heavy)",
        background: "var(--gradient-text-electric)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }
    }, d.streak), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-sm)",
        color: "var(--text-muted)"
      }
    }, "d\xEDas seguidos \xB7 mejor: 31"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow",
      style: {
        paddingLeft: 2,
        display: "block",
        marginBottom: "var(--space-3)"
      }
    }, "H\xE1bitos de hoy"), habits.length === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        padding: "var(--space-8) 0",
        color: "var(--text-faint)",
        fontSize: "var(--text-sm)"
      }
    }, "Todo hecho por hoy."), habits.map(hb => /*#__PURE__*/React.createElement(HabitRow, {
      key: hb.id,
      habit: hb,
      expanded: open === hb.id,
      onToggle: () => setOpen(o => o === hb.id ? null : hb.id),
      onResolve: () => setHabits(hs => hs.filter(x => x.id !== hb.id))
    }))));
  }
  window.Organizador = Organizador;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mi-dashboard/Organizador.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mi-dashboard/Overview.jsx
try { (() => {
// mi-dashboard · Overview screen
(function () {
  function Overview() {
    const DS = window.MiDashboardDesignSystem_1a61a0;
    const {
      BentoCard,
      StatValue,
      ProgressBar,
      IconButton,
      Badge
    } = DS;
    const Icon = window.Icon;
    const d = window.appData.overview;
    const [hidden, setHidden] = React.useState(false);
    const now = new Date();
    const h = now.getHours();
    const greet = h < 6 ? "Buenas noches" : h < 13 ? "Buenos días" : h < 21 ? "Buenas tardes" : "Buenas noches";
    const greetIcon = h < 7 || h >= 21 ? "moon" : h < 13 ? "sunrise" : "sun";
    const fecha = now.toLocaleDateString("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "long"
    });
    const prioColor = {
      high: "var(--priority-high)",
      medium: "var(--priority-medium)",
      low: "var(--priority-low)"
    }[d.focus.priority];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("header", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "var(--space-2) 2px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "2px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--accent-glow)",
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: greetIcon,
      size: 18
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-xl)",
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "var(--tracking-snug)"
      }
    }, greet, ", ", window.appData.user.name)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-sm)",
        color: "var(--text-muted)",
        textTransform: "capitalize"
      }
    }, fecha)), /*#__PURE__*/React.createElement(IconButton, {
      ariaLabel: "Notificaciones"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bell",
      size: 20
    }))), /*#__PURE__*/React.createElement(BentoCard, {
      glow: "blue"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement(StatValue, {
      label: "Patrimonio privado",
      value: d.netWorth,
      hidden: hidden,
      size: "lg",
      delta: d.netWorthDelta,
      deltaDirection: "up"
    }), /*#__PURE__*/React.createElement(IconButton, {
      ariaLabel: "Mostrar/ocultar saldo",
      onClick: () => setHidden(v => !v)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: hidden ? "eye-off" : "eye",
      size: 20
    })))), /*#__PURE__*/React.createElement(BentoCard, {
      eyebrow: "Foco diario",
      title: null,
      style: {
        borderColor: "var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-3)",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: prioColor,
        boxShadow: `0 0 10px ${prioColor}`,
        marginTop: 6,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "4px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-md)",
        fontWeight: "var(--weight-semibold)",
        color: "var(--text-primary)"
      }
    }, d.focus.text), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-sm)",
        color: "var(--text-muted)"
      }
    }, d.focus.meta)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--space-3)"
      }
    }, d.quick.map(q => /*#__PURE__*/React.createElement(BentoCard, {
      key: q.label,
      padding: "var(--space-4)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-xs)",
        color: "var(--text-muted)"
      }
    }, q.label)), /*#__PURE__*/React.createElement("span", {
      className: "is-numeric",
      style: {
        fontSize: "var(--text-lg)",
        fontWeight: "var(--weight-bold)"
      }
    }, q.value), /*#__PURE__*/React.createElement(ProgressBar, {
      value: q.pct,
      color: q.color
    }))))));
  }
  window.Overview = Overview;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mi-dashboard/Overview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mi-dashboard/Salud.jsx
try { (() => {
// mi-dashboard · Salud (biometric) screen
(function () {
  function Salud() {
    const DS = window.MiDashboardDesignSystem_1a61a0;
    const {
      BentoCard,
      ProgressRing,
      IconButton,
      ProgressBar
    } = DS;
    const Icon = window.Icon;
    const d = window.appData.salud;
    const [water, setWater] = React.useState(d.water.current);
    const pct = Math.round(water / d.water.goal * 100);
    const step = dir => setWater(w => Math.max(0, Math.min(d.water.goal, +(w + dir * d.water.step).toFixed(2))));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(SectionTitle, {
      title: "Salud",
      sub: "Biometr\xEDa de hoy \xB7 sincronizado"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)"
      }
    }, d.rings.map(r => /*#__PURE__*/React.createElement(BentoCard, {
      key: r.key,
      padding: "var(--space-4)"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement(ProgressRing, {
      value: r.value,
      size: 104,
      stroke: 10,
      color: r.color,
      glow: r.glow,
      centerValue: r.center,
      centerLabel: r.label
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-2)"
      }
    }, r.metrics.map((m, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        paddingBottom: "var(--space-2)",
        borderBottom: i < r.metrics.length - 1 ? "1px solid var(--border-faint)" : "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-sm)",
        color: "var(--text-muted)"
      }
    }, m.k), /*#__PURE__*/React.createElement("span", {
      className: "is-numeric",
      style: {
        fontSize: "var(--text-sm)",
        fontWeight: 600,
        color: "var(--text-primary)"
      }
    }, m.v)))))))), /*#__PURE__*/React.createElement(BentoCard, {
      eyebrow: "Hidrataci\xF3n",
      title: "Agua"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      size: "lg",
      ariaLabel: "Quitar agua",
      onClick: () => step(-1)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "minus",
      size: 22
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-2)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        justifyContent: "center",
        gap: "6px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "is-numeric",
      style: {
        fontSize: "var(--text-2xl)",
        fontWeight: "var(--weight-heavy)"
      }
    }, water.toFixed(2).replace(".", ",")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-base)",
        color: "var(--text-muted)"
      }
    }, "/ ", String(d.water.goal).replace(".", ","), " L")), /*#__PURE__*/React.createElement(ProgressBar, {
      value: pct,
      color: "var(--blue-400)",
      glow: true,
      height: "8px"
    })), /*#__PURE__*/React.createElement(IconButton, {
      size: "lg",
      variant: "accent",
      ariaLabel: "A\xF1adir agua",
      onClick: () => step(1)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 22
    })))));
  }
  window.Salud = Salud;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mi-dashboard/Salud.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mi-dashboard/Shared.jsx
try { (() => {
// mi-dashboard · Shared kit helpers
(function () {
  function SectionTitle({
    title,
    sub
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "2px",
        padding: "var(--space-1) 2px var(--space-1)"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: "var(--text-xl)",
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "var(--tracking-snug)"
      }
    }, title), sub && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-sm)",
        color: "var(--text-muted)"
      }
    }, sub));
  }
  window.SectionTitle = SectionTitle;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mi-dashboard/Shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.ProgressRing = __ds_scope.ProgressRing;

__ds_ns.StatValue = __ds_scope.StatValue;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.BentoCard = __ds_scope.BentoCard;

__ds_ns.TabBar = __ds_scope.TabBar;

})();
