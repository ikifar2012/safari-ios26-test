## Viewport height demo with Tailwind classes

This app demonstrates Tailwind CSS height utilities using the new viewport units, with simple, consistent styling across routes.

Stack:

- Next.js 15
- React 19
- Tailwind CSS v4

### Routes

- /h-screen — h-screen (full viewport height)
- /h-dvh — h-dvh (dynamic viewport height)
- /h-svh — h-svh (small viewport height)
- /h-lvh — h-lvh (large viewport height)
- /h-full — h-full (child fills parent height)

All demo pages share a minimal, unified style so you can focus on the height behavior.

### Quick start

Install dependencies and run the dev server:

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000 and navigate to the routes above.

### Notes

- h-full requires the parent element to have an explicit height. If you want a page using h-full to fill the viewport, ensure a parent sets height (e.g., add `h-screen` to a wrapper or the `body`).

### Links

- Tailwind CSS height docs: https://tailwindcss.com/docs/height
- Next.js docs: https://nextjs.org/docs
