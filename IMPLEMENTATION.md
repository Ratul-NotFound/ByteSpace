# Implementation Guide — ByteSpace New

Coding conventions and file layout. Conventions here are deliberately ordinary:
the code should read like something a human engineer wrote on a normal day.

---

## 1. Stack

| Concern | Choice |
| --- | --- |
| Build tool | Vite |
| Framework | React 18 + TypeScript |
| Routing | react-router-dom |
| Styling | Tailwind CSS, driven by the tokens in `DESIGN.md` |
| Lint | ESLint (flat config) + Prettier |
| Hosting | Vercel |

`npm run dev` · `npm run build` · `npm run preview` · `npm run lint` ·
`npm run typecheck`

---

## 2. Directory structure

```
.
├── public/
│   ├── assets/              # exported images, SVG logos
│   └── fonts/               # self-hosted woff2
├── src/
│   ├── components/
│   │   ├── layout/          # Container, Section
│   │   ├── ui/              # Button, Heading, Text, Input
│   │   ├── icons/           # inline SVG components
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── CallToAction/
│   │   └── Footer/
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   └── Signup.tsx
│   ├── hooks/
│   ├── lib/
│   ├── styles/
│   │   ├── tokens.css       # CSS custom properties, mirrors DESIGN.md
│   │   ├── fonts.css        # @font-face declarations
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── AGENTS.md
├── DESIGN.md
├── PLAN.md
└── IMPLEMENTATION.md
```

One component per file, named after the file. `index.ts` barrels only where
they earn their keep — a folder of two components does not need one.

---

## 3. Component conventions

**Props.** Types live in the same file, exported only when another module needs
them. Prefer a named discriminated union over a bag of booleans:

```tsx
// good
type ButtonProps = {
  variant: 'primary' | 'secondary' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

// avoid
type ButtonProps = { primary?: boolean; small?: boolean; outline?: boolean; ... };
```

**Structure.**

- Functional components, hooks only. No class components.
- `const` by default, `let` only for genuine reassignment.
- One component per file; extract when a file passes ~150 lines or when a
  sub-block has its own name in the design.
- `React.memo` and `useMemo` only where measurement says they help. They are
  not free, and speculative memoisation reads as noise.
- Keys come from stable data — an id, not the array index.

**Imports.** Grouped and ordered: React, third-party, local. Configured in
ESLint, so the formatter fixes it, not you.

---

## 4. Styling

Tailwind classes for layout and spacing. `tokens.css` holds the design values as
CSS custom properties; the Tailwind theme maps to those, so a value lives in
exactly one place.

```css
/* src/styles/tokens.css — generated from DESIGN.md §2, kept in sync by hand */
:root {
  --color-brand-primary: #000000;
  --color-surface-base: #ffffff;
  --space-4: 1rem;
  --radius-md: 8px;
}
```

Rules:

- **No hardcoded values in components.** No `p-[13px]`, no `bg-[#1a1a1a]`. If a
  value is missing, add a token.
- Arbitrary values are allowed only for one-off grid positions the design
  genuinely requires, and they get a comment explaining why.
- Prefer `flex` / `grid` over absolute positioning. Absolute positioning for
  layout is a maintenance cost that shows up the first time text wraps.
- Conditional classes via the `clsx` helper, not string concatenation.
- Long class strings get a `cn()` call so Prettier can format them.

**Images.**

```tsx
<img
  src={heroImage}
  alt="Descriptive, meaningful alt text"
  width={720}
  height={480}
  loading="lazy"          // omit for the hero — it is LCP
  decoding="async"
/>
```

Always set dimensions. An image without them shifts layout, and the reviewer
sees the jump.

---

## 5. Accessibility

Non-negotiable, and also just correct:

- Semantic elements: `header`, `nav`, `main`, `section`, `footer`. One `h1` per
  page, and heading levels descend without skipping.
- Every interactive element is reachable and operable by keyboard, in a
  sensible order.
- `:focus-visible` is styled and clearly visible. Never
  `outline: none` without a replacement.
- The mobile menu manages `aria-expanded`, closes on `Escape`, and returns focus.
- Colour contrast meets WCAG AA.
- Alt text describes meaning, not pixels. Decorative images get `alt=""`.

---

## 6. Performance

- Route-level code splitting if more pages are added.
- Below-the-fold imagery lazy-loaded; the hero image is not.
- Fonts: `font-display: swap`, only the weights actually used, self-hosted.
- No large dependency added for a small utility — reach for the platform first.
- Target Lighthouse ≥ 90 on performance, accessibility, best practices, SEO.

---

## 7. Git conventions

Commit messages, Conventional Commits, written for the person reviewing the PR:

```
feat(hero): build hero section from Figma node 12:44
fix(header): correct nav padding to 24px per design
refactor(ui): extract Container and Section primitives
docs(design): populate typography tokens
chore(deps): bump react-router-dom to 6.26
```

One logical change per commit. The history should tell the story of how the page
was assembled, section by section.

Branch naming: `feat/…`, `fix/…`, `chore/…`, `refactor/…`. Never commit to
`main`.

---

## 8. Code review self-check

Before requesting review, read your own diff:

- [ ] Is there anything here I would not write if I knew nobody was reading it?
- [ ] Are component names descriptive, or do they say "thing"?
- [ ] Is any logic duplicated that should be a shared helper?
- [ ] Did I leave a `console.log` or a commented-out block?
- [ ] Do the class names match `DESIGN.md`?
- [ ] Would a reader unfamiliar with the design understand what this does?

---

## 9. Environment

`.env` is gitignored. Anything prefixed `VITE_` is exposed to the browser —
never put a secret behind that prefix. This project needs no runtime secrets;
the Figma token is a local tooling concern and lives in the environment, not in
the repository.
