# Design Specification — ByteSpace New

Source of truth for every visual value in this project.

- **Figma file:** `ByteSpace New Check website (Copy)`
- **File key:** `PpQ7I2IdsMKjLdgNINK55j`
- **Link:** https://www.figma.com/design/PpQ7I2IdsMKjLdgNINK55j/ByteSpace-New-Check-website--Copy-?node-id=0-1

---

## 1. Design Overview

Values extracted from Figma canvas `Design` (`0:1`) and frame `Home` (`1:1067`).
All values are implemented in `src/styles/tokens.css` and `tailwind.config.ts`.

---

## 2. Design tokens

### 2.1 Colour

| Token | Value | Usage |
| --- | --- | --- |
| `color.brand.primary` | `#003BE2` | Persian Blue/800, Primary buttons, Hero & CTA background, active states |
| `color.brand.primary-hover` | `#0029A3` | Hover on primary actions |
| `color.brand.accent` | `#D4FB20` | Electric Lime/400, CTA buttons, active pills, badges |
| `color.surface.base` | `#F5F5F6` | Shuttle Gray/50, section backgrounds, inactive pills |
| `color.surface.raised` | `#FFFFFF` | Cards, panels, input fields, course cards |
| `color.surface.inverse` | `#040819` | Dark headings, footer accent bands |
| `color.surface.alt` | `#FAFAFA` | Growth and Testimonials sections background |
| `color.text.primary` | `#242528` | Shuttle Gray/950, Headings, body copy |
| `color.text.secondary` | `#82868E` | Shuttle Gray/400, Subtitles, descriptions, captions |
| `color.text.inverse` | `#FFFFFF` | Text on dark surfaces, hero heading |
| `color.border.default` | `#CED0D3` | Shuttle Gray/200, Card borders, input borders |
| `color.border.subtle` | `#E5E6E8` | Light divider lines |
| `color.border.focus` | `#D4FB20` | Electric Lime focus ring |
| `color.state.success` | `#10B981` | Success feedback |
| `color.state.error` | `#EF4444` | Error feedback |

### 2.2 Typography

| Role | Family | Weight | Size | Line height | Letter spacing |
| --- | --- | --- | --- | --- | --- |
| Display / Hero H1 | Poppins | 600 (SemiBold) | 72px | 1.2em | -0.02em |
| Heading M / H2 | Poppins | 600 (SemiBold) | 44px | 1.2em | -0.01em |
| Heading S / H3 | Poppins | 600 (SemiBold) | 36px | 1.2em | -0.01em |
| Stat numbers | Poppins | 600 (SemiBold) | 48px / 64px | 1.2em | -0.02em |
| Body large (Body L) | Satoshi | 400 (Regular) | 18px | 1.6em | 0 |
| Body medium (Label M) | Satoshi | 500 (Medium) | 16px | 1.2em | 0 |
| Small / caption (Label S) | Satoshi | 500 (Medium) | 14px | 1.2em | 0 |
| Body XS | Satoshi | 400 (Regular) | 12px | 1.6em | 0 |
| Brand Display | Clash Display | 700 (Bold) | 24px | 1.2em | 0 |

---

## 3. Layout

| Property | Value |
| --- | --- |
| Max container width | 1200px |
| Gutter / horizontal padding | 24px |
| Grid columns (desktop) | 3 columns for cards (373px each) |
| Gap between grid items | 40px |
| Section vertical padding | 72px - 96px |
| Header height | 120px |

### Breakpoints

| Name | Min width | Notes |
| --- | --- | --- |
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Small laptop |
| `xl` | 1280px | Standard desktop |
| `2xl` | 1440px | Design frame width |

---

## 4. Asset inventory

| Asset | Source node | Format | Exported at | Path |
| --- | --- | --- | --- | --- |
| Logo Mark | `1:1779` | SVG | 29×32 | `public/assets/hero/logo-mark.svg` |
| Hero Grid | `12:224` | SVG | 1440×1024 | `public/assets/hero/hero-grid.svg` |
| Hero Person | `1:1796` | PNG | 578×541 | `public/assets/hero/hero-person.png` |
| Partner Logos 1-5 | `1:1708` | SVG | ~168×41 | `public/assets/partners/partner-[1-5].svg` |
| Growth Showcase | `34:1159` | PNG | 2880×2920 (2x) | `public/assets/growth/growth-top.png` |
| Growth Photo | `34:1160` | JPG | 698×465 | `public/assets/growth/growth-bottom.jpg` |
| CTA Grid & Shapes | `34:1315` | SVG | 1440×488 | `public/assets/cta/cta-[grid/shapes].svg` |
| Testimonials Avatars | `34:1175` | PNG | 80×80 | `public/assets/testimonials/[alex/james/sarah].png` |
| Testimonials Glows | `34:1311` | SVG | 1137×1137 | `public/assets/testimonials/glow-[left/right/center].svg` |

---

## 5. Section map

Landing page in exact Figma DOM order:

| # | Section | Component | Figma node id | Dimensions | Background |
| --- | --- | --- | --- | --- | --- |
| 1 | Header / Navbar | `Header` | `1:1778` | 1440×120 | Transparent / `#003BE2` |
| 2 | Hero | `Hero` | `1:1695` | 1440×1024 | `#003BE2` |
| 3 | Partner Logos | `Partners` | `1:1794` | 1440×202 | `#F5F5F6` |
| 4 | Featured Courses | `Courses` | `12:101`, `21:33`, `33:683` | 1440×auto | `#FFFFFF` |
| 5 | Category Paths | `Categories` | `34:684`, `34:725` | 1440×auto | `#FFFFFF` |
| 6 | Professional Growth | `Growth` | `34:1159` | 1440×1460 | `#FAFAFA` |
| 7 | Call to Action | `CallToAction` | `34:1161` | 1440×488 | `#003BE2` |
| 8 | Testimonials | `Testimonials` | `34:1175` | 1440×784 | `#FAFAFA` |
| 9 | Footer | `Footer` | `34:1256` | 1440×525 | `#FFFFFF` |

---

## 6. Interaction states

| Element | Default | Hover | Focus-visible | Active | Disabled |
| --- | --- | --- | --- | --- | --- |
| Primary button (`accent`) | bg `#D4FB20`, text `#242528` | opacity 90%, scale 1.01 | 2px solid `#D4FB20` | opacity 80% | opacity 50%, cursor not-allowed |
| Category pill (active) | bg `#D4FB20`, text `#242528` | bg `#c3ea15` | ring 2px `#003BE2` | scale 0.98 | — |
| Category pill (inactive) | bg `#F5F5F6`, text `#242528` | bg `#E5E6E8` | ring 2px `#003BE2` | scale 0.98 | — |
| Course card | bg `#FFFFFF`, border `#CED0D3` | shadow-lg, border-brand | ring 2px `#003BE2` | — | — |
| Nav link | text `#E5E6E8` | opacity 70% | ring 2px `#D4FB20` | opacity 90% | — |
| Text input | border `#CED0D3` | border `#82868E` | ring 2px `#003BE2` | — | opacity 50% |

---

## 7. Fidelity checklist

- [x] No `TBD` left in this file
- [x] Container width matches the Figma frame (1200px max width inside 1440px desktop frame)
- [x] Font families (Poppins, Satoshi, Clash Display) self-hosted
- [x] Type scale matches §2.2 line for line
- [x] Every colour traces back to §2.1
- [x] Every asset is local, optimised, and correctly sized
- [x] Section order matches §5 exactly
