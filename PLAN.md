# Implementation Plan — ByteSpace New

Scope, sequencing, and acceptance criteria. Read `DESIGN.md` first: this plan
assumes the token tables there are populated.

---

## Objective

Ship the **ByteSpace New** landing page as a pixel-accurate React build of the
Figma design, on a feature branch, as a Pull Request, deployed publicly to
Vercel. Login and Signup are bonus credit and come after the landing page is
finished and verified.

---

## Scope

### In scope (required)

- Full landing page — every section in the Figma file, in the same order.
- Responsive behaviour down to 360px.
- Reusable components with clean prop APIs.
- Feature branch + Pull Request.
- Public Vercel deployment.

### Out of scope (do not build)

- Backend, auth wiring, database. The auth pages are **UI only** — no real
  session handling, no API calls. Adding a backend is scope creep that puts the
  required landing page at risk.
- CMS, analytics, cookie banner, i18n.
- Animations beyond simple hover/focus transitions. If the Figma file does not
  show motion, do not invent motion.

### Bonus (phase 5)

- Login page
- Signup page
- Both matching the Figma design, if the file contains them

---

## Phases

### Phase 0 — Extract the design (blocks everything)

No UI code until the design data exists.

1. Pull the Figma file via MCP server, or the REST API with backoff.
   Method and endpoints: `AGENTS.md` §3.
2. Walk the tree top-down. Map every frame to a component.
3. Fill in `DESIGN.md`: tokens, type scale, layout, asset inventory, section
   map, interaction states.
4. Export all assets to `public/assets`, optimising as you go.
5. Create the token layer in code (`tokens.css` + `tailwind.config.ts`) from
   the same values.

**Exit:** zero `TBD` in `DESIGN.md`.

### Phase 1 — Scaffold

1. `npm create vite@latest . -- --template react-ts`
2. Add Tailwind, configure it to read the token values.
3. Set up the router.
4. `npm run dev` runs clean.
5. First commit on `feat/landing-page`.

### Phase 2 — Layout primitives

1. `Container` — max width + gutter from `DESIGN.md` §3.
2. `Section` — consistent vertical padding.
3. `Button` — variants, sizes, all interaction states.
4. `Heading` / `Text` — the type scale from `DESIGN.md` §2.2.

**Exit:** these are used by every later section; get them right once.

### Phase 3 — Sections, in order

Build them in DOM order, one commit each, comparing against Figma before moving
on. Do not batch several sections into one commit — it makes review and
bisecting a regression harder.

1. `Header` — logo, nav, CTA, mobile menu
2. `Hero` — headline, subcopy, actions, imagery
3. Then each remaining section from `DESIGN.md` §5, in order
4. `CallToAction`
5. `Footer` — columns, links, social, legal bar

**Exit per section:** matches the Figma frame at the design width, and holds up
at 360 / 768 / 1024.

### Phase 4 — Verification

1. Visual diff at the design frame width, section by section.
2. Responsive pass at 360 / 768 / 1024 / 1440.
3. Check every interactive state in `DESIGN.md` §6.
4. `npm run lint` clean, `npm run build` clean.
5. Lighthouse on the deployed URL — aim for 90+ across the board. Pay attention
   to image weight and font loading.

**Exit:** the checklist in `DESIGN.md` §7 is complete.

### Phase 5 — Auth pages (bonus)

Only after phase 4 is done. `Login` and `Signup`, UI only, from the same token
set so they look like part of the same product.

### Phase 6 — Ship

1. Push the branch.
2. Open the PR into `main`, with:
   - what was built
   - how fidelity was verified (screenshot vs frame)
   - what is intentionally out of scope
3. Connect the Vercel project, import the repo, deploy `main` (or the branch
   preview — the reviewer needs a stable public URL, so use the production
   deployment).
4. Verify the live URL loads publicly, including the Vercel deployment
   protection setting. A URL that asks for a login does not count as deployed.
5. Submit: Vercel URL + GitHub repo link + notes.

---

## Branching

```
main                          stable, deployable
  feat/landing-page            phases 0-4          <- primary branch
    feat/landing-primitives    phase 2
    feat/landing-header        phase 3
    feat/landing-hero          phase 3
    ...
  feat/auth-pages              phase 5
```

Nested branches for large sections are useful; they should be merged back into
`feat/landing-page` promptly, not left to drift.

---

## Risk register

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Figma API rate limiting blocks extraction | Blocks everything | MCP server first; REST with exponential backoff; if both fail, ask the reviewer to export the frames |
| Design uses a non-standard font | Silent visual mismatch | Self-host woff2, verify the network panel shows no fallback |
| Image assets too heavy | Slow load, poor Lighthouse | WebP at 2×, explicit dimensions, lazy-load below the fold |
| Scope creep into a backend | Landing page ships late | Backend is out of scope; auth is UI only |
| Pushing straight to `main` | Fails an explicit requirement | Branch discipline, enforced in `AGENTS.md` §6 |
| Sections built in the wrong order | Design mismatch | Follow `DESIGN.md` §5 exactly |

---

## Acceptance criteria

The assessment is satisfied when:

- [ ] The live Vercel URL renders the full landing page, publicly accessible
- [ ] The rendered page matches the Figma design, section for section
- [ ] It is responsive at 360 / 768 / 1024 / 1440
- [ ] Work lives on a feature branch, with a Pull Request into `main`
- [ ] The repository is public
- [ ] Components are reusable; no copy-pasted JSX between sections
- [ ] `npm run build` and `npm run lint` pass
- [ ] No secrets or environment files committed
- [ ] Login and Signup exist as UI (bonus)
