The PWA's primary navigation — a fixed glass bar at the bottom. Active tab fills electric-blue with a glow.

```jsx
const tabs = [
  { id: "overview", label: "Overview", icon: <LayoutIcon/> },
  { id: "gym", label: "Gym", icon: <DumbbellIcon/> },
  { id: "salud", label: "Salud", icon: <HeartIcon/> },
  { id: "org", label: "Organizador", icon: <CheckIcon/> },
  { id: "fin", label: "Finanzas", icon: <WalletIcon/> },
];
<TabBar items={tabs} active={tab} onChange={setTab} />
```

`floating` (default) gives the rounded pill; set `false` for an edge-to-edge bar.
