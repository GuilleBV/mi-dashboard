Ultra-thin (4px) pill bar — the default metric indicator everywhere. Pass `label`/`valueLabel` to get the caption row above it.

```jsx
<ProgressBar value={72} color="var(--success)" label="Proteína" valueLabel="144 / 200g" />
<ProgressBar value={40} glow />
```

Color by meaning: blue (default/effort), green (success/recovery), amber (warning), danger (over-budget). Animates width on change.
