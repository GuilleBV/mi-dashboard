// mi-dashboard · Icon set (Lucide-style line icons, stroke 2, 24px grid)
// Self-contained inline SVGs so the kit works offline. Swap for the full
// Lucide CDN if you need the complete set.
(function () {
  function Icon({ name, size = 22, stroke = 2, color = "currentColor", style = {} }) {
    const p = PATHS[name];
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={FILLED[name] ? color : "none"}
        stroke={FILLED[name] ? "none" : color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ display: "block", flexShrink: 0, ...style }}
        aria-hidden="true"
      >
        {p}
      </svg>
    );
  }

  const FILLED = { flame: false };

  const PATHS = {
    // greeting
    sunrise: <><path d="M12 2v6M5.6 9.6 4.2 8.2M2 18h2M20 18h2M19.8 8.2l-1.4 1.4M22 22H2"/><path d="M16 18a4 4 0 0 0-8 0"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>,
    moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>,
    // nav
    grid: <><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></>,
    dumbbell: <><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1M3 3l1 1"/><path d="m18 22 4-4M2 6l4-4"/><path d="m3 10 7-7M14 21l7-7"/></>,
    heart: <path d="M19 14c1.5-1.5 3-3.3 3-5.5A4.5 4.5 0 0 0 12 6 4.5 4.5 0 0 0 2 8.5C2 10.7 3.5 12.5 5 14l7 7Z"/>,
    checklist: <><path d="m9 11 2 2 4-4"/><rect x="3" y="3" width="18" height="18" rx="3"/></>,
    wallet: <><path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H6"/><circle cx="16" cy="14" r="1.2"/></>,
    // actions / status
    eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></>,
    "eye-off": <><path d="M9.9 4.24A9 9 0 0 1 12 4c6.5 0 10 7 10 7a13 13 0 0 1-2.16 2.92M6.6 6.6A13 13 0 0 0 2 11s3.5 7 10 7a9 9 0 0 0 3.4-.66"/><path d="m2 2 20 20"/></>,
    plus: <path d="M12 5v14M5 12h14"/>,
    minus: <path d="M5 12h14"/>,
    check: <path d="m5 12 5 5L20 7"/>,
    x: <path d="M18 6 6 18M6 6l12 12"/>,
    snooze: <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/><path d="M9 16h6l-6 0"/></>,
    "more": <><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></>,
    chevronDown: <path d="m6 9 6 6 6-6"/>,
    chevronRight: <path d="m9 6 6 6-6 6"/>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z"/></>,
    // domain
    flame: <path d="M12 2c1 4 4 5 4 9a4 4 0 0 1-8 0c0-1.2.4-2 1-3 .3 1 1 1.5 1.7 1.7C10 8 11 5 12 2Z"/>,
    droplet: <path d="M12 2.7 6.3 9a8 8 0 1 0 11.4 0Z"/>,
    pill: <><path d="M10.5 20.5a4.95 4.95 0 0 1-7-7l6-6a4.95 4.95 0 0 1 7 7Z"/><path d="m8.5 8.5 7 7"/></>,
    coffee: <><path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path d="M6 2v2M10 2v2M14 2v2"/></>,
    activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>,
    zap: <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"/>,
    bed: <><path d="M2 8v12M2 12h18a2 2 0 0 1 2 2v6M2 16h20"/><path d="M5 12V9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3"/></>,
    target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></>,
    trophy: <><path d="M6 9a6 6 0 0 0 12 0V4H6Z"/><path d="M6 5H3v2a3 3 0 0 0 3 3M18 5h3v2a3 3 0 0 1-3 3M9 21h6M12 17v4"/></>,
    trendingUp: <><path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/></>,
    arrowDown: <path d="M12 5v14M19 12l-7 7-7-7"/>,
    music: <><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/><path d="M9 18V5l12-2v13"/></>,
    play: <path d="M6 4v16l14-8Z"/>,
    cloud: <path d="M6.5 19a4.5 4.5 0 0 1 0-9 6 6 0 0 1 11.6 1.5A3.75 3.75 0 0 1 17.5 19Z"/>,
    home: <><path d="m3 10 9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M9 21v-7h6v7"/></>,
    car: <><path d="M5 13 6.5 7.5A2 2 0 0 1 8.4 6h7.2a2 2 0 0 1 1.9 1.5L19 13M5 13h14v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H8v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Z"/><circle cx="7.5" cy="14.5" r="0.6"/><circle cx="16.5" cy="14.5" r="0.6"/></>,
  };

  window.Icon = Icon;
})();
