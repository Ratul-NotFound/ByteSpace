# Design Specification — ByteSpace New

Source of truth for every visual value in this project.

- **Figma file:** `ByteSpace-New-Check-website`
- **File key:** `26TBgRjmpuxudcErJsHUfy`
- **Link:** https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website

> **Status: values below are placeholders awaiting extraction.**
> Figma's API is rate-limiting this file, so the tables are structured but not
> yet populated. The first task (see `PLAN.md`, Phase 0) is to walk the file and
> replace every `TBD` with the real value. Do not start building against
> `TBD` — that produces a layout that has to be redone.

---

## 1. How to fill this in

1. Open the Figma file, or pull it via the REST API / MCP server
   (see `AGENTS.md` §3).
2. Work top-down through the frames.
3. For each section, record:
   - the **node id** (right-click → Copy link to selection gives it)
   - the values below, exactly as Figma reports them
4. Write the value into this file **and** into `src/styles/tokens.css` /
   `tailwind.config.ts` in the same commit.

When this file has no `TBD` left, it is complete and building against it is
safe.

---

## 2. Design tokens

### 2.1 Colour

| Token | Value | Usage |
| --- | --- | --- |
| `color.brand.primary` | TBD | Primary buttons, links, active states |
| `color.brand.primary-hover` | TBD | Hover on primary actions |
| `color.surface.base` | TBD | Page background |
| `color.surface.raised` | TBD | Cards, panels, modals |
| `color.surface.inverse` | TBD | Footer, dark bands |
| `color.text.primary` | TBD | Headings, body copy |
| `color.text.secondary` | TBD | Subtitles, captions |
| `color.text.inverse` | TBD | Text on dark surfaces |
| `color.border.default` | TBD | Card and input borders |
| `color.border.focus` | TBD | Focus ring |
| `color.state.success` | TBD | Success feedback |
| `color.state.error` | TBD | Error feedback |

If Figma exposes a colour variable collection, mirror it exactly and name the
CSS variables to match.

### 2.2 Typography

Record the families Figma actually specifies. Do not default to Inter or
Roboto if the design says otherwise.

| Role | Family | Weight | Size | Line height | Letter spacing |
| --- | --- | --- | --- | --- | --- |
| Display / H1 | TBD | TBD | TBD | TBD | TBD |
| H2 | TBD | TBD | TBD | TBD | TBD |
| H3 | TBD | TBD | TBD | TBD | TBD |
| Body large | TBD | TBD | TBD | TBD | TBD |
| Body | TBD | TBD | TBD | TBD | TBD |
| Small / caption | TBD | TBD | TBD | TBD | TBD |
| Button label | TBD | TBD | TBD | TBD | TBD |

**Font loading.** If the design uses a custom typeface, self-host the woff2
files under `public/fonts` and declare `@font-face` in `src/styles/fonts.css`.
Do not load the entire family from a CDN; request only the weights in use.
Always set `font-display: swap`. Check the loaded font against the Figma frame —
a fallback font is the single most common cause of a "close but not the same"
result.

### 2.3 Spacing

Figma spacing scales are usually multiples of 4 or 8. Record the actual scale
and stick to it.

| Token | Value |
| --- | --- |
| `space.1` | 4 |
| `space.2` | 8 |
| `space.3` | 12 |
| `space.4` | 16 |
| `space.5` | 24 |
| `space.6` | 32 |
| `space.7` | 48 |
| `space.8` | 64 |
| `space.9` | 96 |
| `space.10` | 128 |

### 2.4 Radii, borders, shadows

| Token | Value |
| --- | --- |
| `radius.sm` | TBD |
| `radius.md` | TBD |
| `radius.lg` | TBD |
| `radius.full` | 9999px |
| `border.width.default` | TBD |
| `shadow.sm` | TBD |
| `shadow.md` | TBD |
| `shadow.lg` | TBD |

---

## 3. Layout

| Property | Value |
| --- | --- |
| Max container width | TBD |
| Gutter / horizontal padding | TBD |
| Grid columns (desktop) | TBD |
| Gap between grid items | TBD |
| Section vertical padding | TBD |
| Header height | TBD |

### Breakpoints

| Name | Min width | Notes |
| --- | --- | --- |
| `sm` | TBD | |
| `md` | TBD | |
| `lg` | TBD | |
| `xl` | TBD | Design frame width |

---

## 4. Asset inventory

Every asset the design uses lives in `public/assets`. Nothing is hotlinked from
an external CDN — those break in production and read as unfinished.

| Asset | Source node | Format | Exported at | Path |
| --- | --- | --- | --- | --- |
| Logo | TBD | SVG | — | `public/assets/logo.svg` |
| Favicon | TBD | PNG | 32×32, 180×180 | `public/favicon.ico` |
| Hero image | TBD | WebP | TBD | `public/assets/hero.webp` |
| Section imagery | TBD | WebP | TBD | `public/assets/…` |
| Icons | TBD | SVG (inline) | — | `src/components/icons` |

Export guidance:

- **Icons** → inline SVG React components, so they inherit `currentColor` and
  can be sized with the type. Do not ship a sprite sheet for a handful of icons.
- **Logos** → SVG with the original viewBox preserved.
- **Photography** → WebP, quality ~80, at 2× the rendered size for retina, then
  constrained by CSS.
- Every `<img>` gets `width`/`height` attributes or an explicit aspect ratio to
  avoid layout shift.

---

## 5. Section map

Landing page, in DOM order. Fill the Figma node id for each.

| # | Section | Component | Figma node id | Status |
| --- | --- | --- | --- | --- |
| 1 | Header / Navbar | `Header` | TBD | Not started |
| 2 | Hero | `Hero` | TBD | Not started |
| 3 | Features | `Features` | TBD | Not started |
| 4 | TBD | TBD | TBD | Not started |
| 5 | TBD | TBD | TBD | Not started |
| 6 | TBD | TBD | TBD | Not started |
| 7 | CTA | `CallToAction` | TBD | Not started |
| 8 | Footer | `Footer` | TBD | Not started |

Add rows as the Figma file is walked. Section order here must match the design
exactly — it is the first thing a reviewer checks.

---

## 6. Interaction states

Every interactive element in the design needs all of these. If the design file
has a variant set for them, follow the variant's values; if not, derive a
consistent treatment from the primary button and apply it across the site.

| Element | Default | Hover | Focus-visible | Active | Disabled |
| --- | --- | --- | --- | --- | --- |
| Primary button | TBD | TBD | TBD | TBD | TBD |
| Secondary button | TBD | TBD | TBD | TBD | TBD |
| Nav link | TBD | TBD | TBD | TBD | — |
| Text input | TBD | TBD | TBD | — | TBD |
| Card | TBD | TBD | TBD | — | — |
| Mobile menu trigger | TBD | TBD | TBD | TBD | — |

`:focus-visible` must be visible. Do not remove the outline without replacing
it with an equally clear focus ring.

---

## 7. Fidelity checklist

Run through this before opening the PR.

- [ ] No `TBD` left in this file
- [ ] Container width matches the Figma frame
- [ ] Font family and weight render as designed (check the network panel for a
      fallback request)
- [ ] Type scale matches §2.2 line for line
- [ ] Every colour traces back to §2.1
- [ ] Every asset is local, optimised, and correctly sized
- [ ] Section order matches §5
- [ ] Screenshot captured at the design frame width and attached to the PR
