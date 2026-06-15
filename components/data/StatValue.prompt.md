Big numeric figure with built-in privacy masking — drives "Patrimonio Privado" and the Finanzas hero. Toggle `hidden` from an IconButton eye to swap between the value and ••••••.

```jsx
const [hidden, setHidden] = React.useState(false);
<StatValue label="Patrimonio privado" value="€48.250" hidden={hidden}
  delta="+2,4%" deltaDirection="up" />

<StatValue size="hero" align="center" gradient value="€48.250" />
```

Sizes: `sm` · `md` · `lg` · `hero` (clamped display). Use `gradient` for the white→electric hero treatment. Format the number yourself (Spanish locale: `.` thousands).
