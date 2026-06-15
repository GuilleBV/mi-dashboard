SVG ring for biometric percentages. Convention: Sueño = light blue (`--blue-400`), Recuperación = green (`--success`), Esfuerzo = cobalt (`--cobalt-600`).

```jsx
<ProgressRing value={86} color="var(--blue-400)" centerLabel="Sueño" glow />
<ProgressRing value={72} size={96} color="var(--success)" centerValue="7.4h" centerLabel="Recup." />
```

Center auto-shows `${value}%` unless you pass `centerValue`. Use `size` ≥100 to get the heavy 2xl number.
