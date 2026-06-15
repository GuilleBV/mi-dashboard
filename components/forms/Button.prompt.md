Action control for the dark canvas — primary uses electric-blue with a subtle glow; secondary is a glass fill; ghost is text-only; danger is a tinted red.

```jsx
<Button variant="primary" size="md">Guardar</Button>
<Button variant="secondary" iconLeft={<PlusIcon/>}>Añadir</Button>
<Button variant="ghost" size="sm">Cancelar</Button>
<Button variant="danger">Eliminar</Button>
```

Variants: `primary` · `secondary` · `ghost` · `danger`. Sizes: `sm` (32px) · `md` (40px) · `lg` (52px). Use `fullWidth` for sheet/CTA buttons. Pass Lucide icons via `iconLeft` / `iconRight`.
