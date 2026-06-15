The base surface of the whole product — every dashboard module lives in a BentoCard. Top-lit gradient, hairline border, 20px radius. Optional `glow` for active/alert states and `glass` for floating sheets.

```jsx
<BentoCard eyebrow="Hoy" title="Foco diario" action={<IconButton><MoreIcon/></IconButton>}>
  …content…
</BentoCard>

<BentoCard glow="danger" glass>Pago próximo</BentoCard>
```

Props: `glow` (none/blue/green/danger), `glass`, `flat`, `interactive`, custom `padding`. Header (`eyebrow`/`title`/`action`) is optional — omit all three for a bare tile.
