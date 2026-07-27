# Mac OS X (Aqua) Portfolio Redesign — Design Spec

**File version:** v1.0.0
**Date:** 2026-07-27
**Owner:** Josephus Kim L. Sarsonas
**Status:** Awaiting owner review

## Changelog

| Version | Date | Change | Author |
|---------|------|--------|--------|
| v1.0.0 | 2026-07-27 | Initial spec. Aqua design layer, window chrome on all cards, résumé-aligned content rewrite, dock magnification. | Claude (Opus 5) |

---

## 1. Problem

The site is themed "Mac OS X" but only the dock is genuinely Aqua. The rest reads as a
generic 2024 AI-generated portfolio, and the written content has drifted away from the
owner's résumé — in places it actively undersells him.

### 1.1 Visual defects

| # | Defect | Locations |
|---|--------|-----------|
| V1 | Corner radii of 40–64px (`rounded-[2.5rem]`, `rounded-[4rem]`) on large frosted-glass blobs. Aqua windows are ~10px. | `about.tsx`, `experience.tsx`, `skills.tsx`, `portfolio.tsx`, `contact.tsx`, `footer.tsx` |
| V2 | No window chrome anywhere. The window — title bar, traffic lights, hairline border — is the defining Mac OS X form. | all pages |
| V3 | Twelve-colour Lucide icon palette (amber, indigo, rose, cyan, emerald, purple, yellow, orange, sky, red, blue, teal) applied decoratively. | `experience.tsx`, `about.tsx`, `skills.tsx`, `education.tsx` |
| V4 | Graph-paper grid page background. | `globals.css` body/`.dark body` |
| V5 | `font-black` display type plus `tracking-[0.2em]`–`tracking-[0.3em]` uppercase micro-labels used as the dominant text style. Aqua UI type is modest Lucida Grande bold at 11–13px. | all components |
| V6 | Scrollbars hidden entirely (`scrollbar-width: none`, `::-webkit-scrollbar { display: none }`). Anti-Aqua; Aqua scrollbars are prominent and blue. | `globals.css` |
| V7 | Decorative `animate-ping` pulse dots on six unrelated elements. | `hero.tsx`, `experience.tsx`, `education.tsx` |

### 1.2 Content defects

| # | Site currently says | Résumé says | Severity |
|---|---------------------|-------------|----------|
| C1 | No Edufied Pte entry. "Seeking a remote internship opportunity starting in May", "Available for Internship", "Seeking May Internship". | **Full Stack Developer Trainee, Edufied Pte, Remote, May 2026 – Present.** | High — stale and undersells |
| C2 | Bayanihan One Window built with **Vue.js**; no mention of leadership or security work. | OWBAP: **Laravel 13, React, Inertia.js, PostgreSQL, Redis, S3**. Capstone **lead developer, team leader, systems analyst for a team of 4**. Email OTP, TOTP MFA, RBAC, audit logging, rate limiting. Client: Department of Migrant Workers. | High — wrong stack, missing the strongest material |
| C3 | Absent. | **OEC Verify** — Next.js, TypeScript, Supabase, PostgreSQL, Tailwind. RBAC, Row-Level Security, encrypted receipt tokens, QR verification. | High |
| C4 | "Aug 2023 – Present", no GWA. | BS Information Systems, **GWA 1.45**, expected **2027**. | Medium |
| C5 | Absent. | 4 certifications: AWS SBG Core Team Member Badge (Jul 2026), Cisco Networking Basics (May 2025), IPOPHL iLeap IP (May 2024), Coursera Intro to Python (Apr 2024). | Medium |
| C6 | "Satisfaction 100%", "Support 24/7", "Cups of Coffee: Unlimited", "Learning Mode 24/7", skill bars at 90/85/80/95%. | Not supported by any source. Fabricated. | High — credibility |
| C7 | "10+" projects (hero) vs "15+" (about) vs "2+ Years Exp". | 6 projects listed. The two project counts contradict each other on the same site. | Medium |
| C8 | "Toledo City, Cebu" / "Matab-ang, Toledo City, Cebu". | Cebu City, Philippines, 6038. | Low — needs owner confirmation |
| C9 | "Passionate developer crafting scalable, user-friendly applications with modern web technologies. I turn complex problems into elegant solutions." | — | High — textbook LLM prose |
| C10 | Looping typewriter cycling "Self-Driven & Highly Autonomous", "Problem Solver", "Communicator". | — | Medium — adjective reel, not evidence |
| C11 | Site metadata: "Dynamic and versatile digital professional with expertise spanning video editing, social media management, web development, and data analytics." | No video editing, social media, or data analytics anywhere on the résumé. | High — wrong person |
| C12 | "I've shipped scalable solutions across academic, **viral**, and production environments." Skills page lists **Vue.js**. | Vue.js is not on the résumé; OWBAP is React. | Medium |

---

## 2. Decisions (confirmed by owner, 2026-07-27)

| Decision | Choice |
|----------|--------|
| Aqua fidelity | **Faithful 10.2-era** — real pinstripes, glossy jelly controls, candy-stripe progress, visible blue scrollbars, 10px window radii |
| Window chrome scope | **Every card** — projects, experience, skills, education, contact, hero panel |
| Availability framing | **Employed + open** — lead with the Edufied role, quieter "open to opportunities" |
| Dock | **Magnification with neighbour scaling**, plus active indicator, hairline separator, cream Aqua help-tag tooltip |

### 2.1 Explicit non-goals

- No changes to routes or page composition. Every page keeps its current sections in their current order.
- No changes to the first-visit-only animation logic in `section-wrapper.tsx` (module-level `revealedSections` Set) or `hero.tsx` (module-level `hasHeroAnimated` flag). This behaviour was tuned across the last five commits and must keep working: cinematic on first visit, quick fade on return.
- The dock's existing structure, position, glass treatment, and icon set are preserved. All dock work is additive.
- No dependency additions. Everything is achievable with the installed Tailwind, Framer Motion, and Lucide.
- No refactor of unrelated code.

---

## 3. Design

### 3.1 Aqua design layer

Defined once in `globals.css` under `@layer components`, with tokens in `tailwind.config.ts`.

**Radius scale** — replaces the ad-hoc 2.5rem/4rem values:

| Token | Value | Use |
|-------|-------|-----|
| `--radius-window` | 10px | window bodies |
| `--radius-control` | 6px | fields, small tiles, list rows |
| `--radius-capsule` | 999px | jelly buttons, segmented controls only |

**Palette** — one accent plus graphite. Semantic colour is reserved for real state, and the
only saturated trio on the page becomes the traffic lights themselves.

| Token | Light | Dark (graphite) |
|-------|-------|-----------------|
| `--aqua-blue` | `hsl(212 84% 52%)` | `hsl(212 90% 62%)` |
| `--aqua-graphite` | `hsl(220 6% 46%)` | `hsl(220 5% 62%)` |
| `--aqua-window-bg` | `hsl(0 0% 100% / 0.92)` | `hsl(220 6% 14% / 0.92)` |
| `--aqua-hairline` | `hsl(220 10% 42% / 0.55)` | `hsl(0 0% 0% / 0.6)` |
| `--aqua-highlight` | `hsl(0 0% 100% / 0.75)` | `hsl(0 0% 100% / 0.12)` |
| traffic lights | `#ff5f57` / `#ffbd2e` / `#28c840` | unchanged |

**Surface recipe** (`.aqua-window`): top-lit vertical gradient, 1px outer hairline, 1px inner
white top highlight (inset box-shadow), 10px radius, soft ambient drop shadow. Pinstripes are a
separate opt-in class so repeated cards can drop them if density becomes a problem.

**Pinstripes** (`.aqua-pinstripe`): `repeating-linear-gradient` at 4px pitch, ~4% opacity over
the window gradient. This is the authentic 10.0–10.2 texture.

**Background** (`body`): replaces the graph-paper grid with the Aqua Blue desktop — a soft
radial aqua gradient, brighter at upper-centre, plus a very low-opacity pinstripe. Dark mode
becomes graphite. `background-attachment: fixed` is retained.

**Typography:**

- Lucida Grande for all UI text (already loaded; it *is* the Mac OS X system font).
- Gill Sans reserved for display headlines only (also a Mac-shipped face).
- Maximum weight `bold`. All `font-black` removed.
- `tracking-[0.2em]`+ removed except where a genuine Aqua group label calls for it.
- Aqua title-bar text: Lucida Grande bold 13px, centred, 1px white text-shadow emboss.

**Controls:**

- `.btn-aqua` rewritten as a proper glossy jelly capsule — lighter than the current
  four-layer inset stack, with the characteristic upper gloss ellipse and a pressed state.
- New `AquaSegmentedControl` replaces the generic pill filter rows on Portfolio and Skills.
- Aqua text fields: inset shadow, 6px radius, blue focus glow ring.
- Candy-striped Aqua progress bar available, but **not used**, because the only current
  consumer is the fabricated percentage panel (defect C6), which is being removed.
- Aqua scrollbars restored: visible, blue thumb, graphite track.

### 3.2 New components

**`src/components/ui/aqua-window.tsx`** — the centrepiece.

```
AquaWindowProps {
  title?: string            // title-bar text; omit for a chrome-less Aqua panel
  children: ReactNode
  pinstripe?: boolean       // default true
  trafficLights?: boolean   // default true when title is present
  toolbar?: ReactNode       // optional row below the title bar
  statusBar?: ReactNode     // optional bottom strip
  className?: string
}
```

Renders title bar (traffic lights left, embossed centred title), optional toolbar, body, and
optional status bar. Traffic lights are decorative: `aria-hidden`, not focusable, no click
handlers — they must not imply broken affordances.

**`src/components/ui/aqua-segmented-control.tsx`** — Aqua capsule segmented control.
Roving-tabindex keyboard support, `role="tablist"`.

**`src/components/ui/aqua-list.tsx`** — classic Mac OS X list view with alternating
blue/white row striping. Used by Certifications and the Contact connect list.

**`src/components/certifications.tsx`** — the 4 résumé certifications rendered in an
`AquaWindow` titled "Certifications & Awards" using `AquaList`. Rendered on the Education page.

**`src/lib/skills-data.ts`** — the skills array is currently duplicated verbatim between
`skills.tsx` and `tech-marquee.tsx`. Since both files are being edited, the array moves to one
module and both import it. Targeted fix, in code already being touched.

### 3.3 Per-page changes

Layouts are preserved throughout. Only the container treatment, colour, type, and copy change.

**Home — `hero.tsx`**
- Right-hand panel becomes an `AquaWindow` titled **"About This Developer"** — a deliberate
  riff on *About This Mac*. The four fabricated stat tiles become an About-This-Mac-style
  key/value list, which is both more authentic and removes the invented metrics.
- H1 typewriter kept exactly as-is (first-visit only, `hasHeroAnimated` flag untouched).
- The looping role typewriter is replaced by one static subtitle line (defect C10).
- Availability badge reframed to the Edufied role; the decorative `animate-ping` is removed
  but the green status dot stays.
- Scroll-mouse indicator removed.

**Portfolio — `portfolio.tsx`**
- Each project card becomes an `AquaWindow` whose title bar carries the project name.
- "Read More" becomes a **disclosure triangle** — a strong, correct Mac OS X control.
- Filter pills become `AquaSegmentedControl`.
- OEC Verify added. OWBAP stack corrected. All descriptions rewritten.
- `AnimatePresence`/`layout` behaviour preserved.

**Experience — `about/page.tsx` → `experience.tsx`**
- Timeline rail kept; entry cards become `AquaWindow`s.
- Three coloured badges per entry reduced to two graphite ones.
- **Edufied Pte added as the first entry.** OEC Verify added. OWBAP corrected.
- The "Looking for Proven Delivery Experience?" marketing block is replaced by a restrained
  Aqua window with résumé download and contact links.

**Skills — `skills.tsx`**
- Marquee and icon cloud preserved. Cards become compact Aqua tiles.
- The italic quote panel becomes a **"Get Info" inspector**.
- Skill list aligned to the résumé: Vue.js removed; Python, ShadCN/UI, Radix UI, JWTs, Git,
  Redis, S3, AWS Aurora, Heroku, Firebase added.
- `categoryInsights` copy rewritten.

**Education — `education.tsx` + `certifications.tsx`**
- Entries become `AquaWindow`s. GWA 1.45 and expected 2027 added.
- New Certifications & Awards window using `AquaList`.

**Contact — `contact.tsx`**
- Form becomes an Aqua sheet-styled window with Aqua fields.
- Connect list becomes an `AquaList` striped list view.
- A one-line data-use notice is added beneath the form (see §5).

**Footer — `footer.tsx`**
- The 4-column modern footer is replaced by a single slim Aqua **status-bar strip**: name,
  copyright, back-to-top. This keeps the dock as the focal point and removes the boilerplate
  ending. All links currently in the footer already exist in the dock or on Contact, so nothing
  becomes unreachable.

**`layout.tsx`**
- Title: `Kim's Portfolio` → `Josephus Kim L. Sarsonas`.
- Description rewritten (defect C11).

### 3.4 Dock — `navbar.tsx`

Additive only.

1. **Magnification with neighbours.** Pointer x-position drives a distance-falloff scale:
   hovered icon ~1.55×, immediate neighbours ~1.25×, next ~1.08×. Framer Motion springs, with
   the row bottom-anchored so icons grow upward off the shelf. Disabled under
   `prefers-reduced-motion` and on touch pointers (no hover state to track).
2. **Active indicator** restyled to the classic form.
3. **Hairline separator** before the theme toggle.
4. **Tooltip** restyled from the black chip to a cream Aqua help tag.

The existing `.frutiger-aero-navbar` shelf, positioning, sizing, and icon assets are unchanged.

---

## 4. Content rewrite rules

1. Every factual claim traces to the résumé. No invented numbers, durations, or percentages.
2. Banned vocabulary: *passionate, crafting, leveraging, robust, elegant solutions, seamless,
   cutting-edge, dynamic and versatile, viral, premium user experience, turn complex problems
   into*.
3. Plain first-person sentences. Concrete nouns. No adjective stacks.
4. Numbers appear only where the résumé supports them: GWA 1.45, team of 4, 120+ users,
   4,000+ visits in 14 days, 6 projects, expected 2027.
5. Every project states what it does and who it is for before what it is built with.

Full replacement copy is authored during implementation, file by file, against these rules.

---

## 5. Standards-readiness check

Per organisation policy, this is a project document rather than a certification artefact, so a
standards-readiness check applies. Findings that would require rework to certify:

| # | Finding | Standard | Disposition |
|---|---------|----------|-------------|
| S1 | The contact form collects name, email, subject, and message — personal data — with no notice of purpose, recipient, or retention. | ISO 27001 A.5.34; DPTM (Notification & Consent); SOC 2 Privacy | **Fix in scope.** One-line notice beneath the form stating the data is emailed to the owner and used only to reply. |
| S2 | `actions.ts` returns `"Email service is currently misconfigured. Please check environment variables."` to the end user, disclosing internal configuration state. | ISO 27001 A.8.16; SOC 2 CC7.2 | **Fix in scope.** Generic user-facing message; detail stays in the server log. |
| S3 | The `submitContactForm` server action has no rate limiting, CAPTCHA, or abuse control. Unauthenticated endpoint that sends mail. | ISO 27001 A.8.6; SOC 2 CC6.1 | **Flagged, out of scope.** Needs a deliberate decision on approach. Recommend Vercel-side rate limiting or a honeypot field as a follow-up. |
| S4 | No privacy policy page exists. | DPTM (Governance & Transparency); ISO 27001 A.5.34 | **Flagged, out of scope.** Recommend a `/privacy` route as a follow-up. |
| S5 | SMTP credentials are read from `process.env`, and `.env*` is gitignored. No secrets in the repository. | ISO 27001 A.8.24; SOC 2 CC6.1 | **Compliant.** No action. |
| S6 | Pinstripes, gloss, and low-opacity graphite text risk falling below 4.5:1 contrast. | WCAG 2.2 AA (not a listed certification, but a DPTM accessibility expectation) | **Fix in scope.** Body text and window titles verified at ≥4.5:1 in both themes; pinstripe opacity capped at 4%. |
| S7 | Design documents are versioned with a changelog. | ISO 9001 §7.5.3 (control of documented information) | **Compliant** via this document's naming convention. |

Nothing in the visual or content scope of this redesign introduces new certification rework.
S3 and S4 are pre-existing and unchanged by this work.

### 5.1 Documentation coverage

| Document | Resolvable from a standard? | Auto-generatable without approval? |
|----------|-----------------------------|-------------------------------------|
| This design spec | Partly — ISO 9001 §7.5.3 sets the version/changelog control | No. Requires owner approval; it asserts facts about his career. |
| Implementation plan | No — project-specific | Yes, derived from this approved spec |
| Privacy notice / `/privacy` page | Yes — DPTM Notification & Consent, ISO 27001 A.5.34 provide the required clauses | No. Publishing a privacy claim on his behalf needs his sign-off. |
| Accessibility conformance note | Yes — WCAG 2.2 AA success criteria | Yes, once contrast is measured |

---

## 6. Verification

QA runs until clean, per organisation policy:

1. `npm run typecheck` — must pass with zero errors.
2. `npm run build` — must succeed.
3. Dev server on port 9002; all six routes loaded and visually checked in **both** themes.
4. Animation regression check, explicitly: home loads with the cinematic first-visit sequence;
   navigating away and back gives the quick fade, not the cinematic replay; the H1 typewriter
   fires once per session only.
5. Dock check: magnification tracks the pointer, neighbours fall off smoothly, active indicator
   correct on every route, keyboard focus still reaches every icon.
6. Contrast check on window titles and body text in both themes.
7. Responsive check at 375px, 768px, 1440px — no horizontal scroll.
8. Independent review by a separate agent with no knowledge of the implementation, per
   organisation policy that work is not self-reviewed.

## 7. Risks

| Risk | Mitigation |
|------|------------|
| 20+ pinstriped windows on the Portfolio and Skills pages read as noisy. | `pinstripe` is a per-instance prop. If density is a problem, repeated cards drop stripes and keep chrome. Decided by eye during implementation. |
| Traffic lights imply clickable window controls that do nothing. | Decorative and `aria-hidden`. No hover affordance that suggests interactivity. |
| Dock magnification is the owner's favourite element and a regression would be keenly felt. | Isolated to `navbar.tsx`, additive, behind reduced-motion and pointer-type guards, trivially revertible. |
| Content rewrite overreaches into claims the owner would not make. | Every claim traces to the résumé; C8 (Cebu City vs Toledo City) is raised for his confirmation rather than assumed. |

## 8. Open question for the owner

**C8 — location.** The résumé says *Cebu City, 6038*; the site says *Toledo City* and
*Matab-ang, Toledo City*. The spec uses Cebu City to match the résumé, but if Toledo City is
where he actually is, the résumé is the document that needs correcting, not the site.

Also noted, not acted on: `src/components/skills.tsx-revised` and a stray top-level `Users/`
directory appear to be leftovers. Left alone pending his decision.
