Icon-only touch target that always meets the 44px minimum — use for the privacy eye toggle, water +/- steppers, and nav chevrons.

```jsx
<IconButton ariaLabel="Mostrar saldo" variant="glass"><EyeIcon/></IconButton>
<IconButton ariaLabel="Añadir agua" variant="accent" round><PlusIcon/></IconButton>
<IconButton active><BellIcon/></IconButton>
```

Variants: `glass` · `solid` · `accent` · `ghost`. Set `active` for the electric-blue glow ring. Always pass `ariaLabel`.
