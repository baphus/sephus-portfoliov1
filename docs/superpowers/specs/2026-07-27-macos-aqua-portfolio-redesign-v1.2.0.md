# Mac OS X (Aqua) Portfolio Redesign — Design Spec

**File version:** v1.2.0
**Date:** 2026-07-27
**Owner:** Josephus Kim L. Sarsonas
**Status:** **Approved — in implementation**
**Supersedes:** v1.1.1, v1.1.0, v1.0.0

## Changelog

| Version | Date | Change | Author |
|---------|------|--------|--------|
| v1.2.0 | 2026-07-27 | Owner scoped the Experience page to the Edufied internship alone (§3.3.1). The five other entries were projects presented as jobs with invented role titles — removed, not relocated, since all six already live on Portfolio. New content defect C13 records the mislabelling. Timeline rail dropped for a single entry. | Claude (Opus 5) |
| v1.1.1 | 2026-07-27 | Owner resolved all four open questions (§2.2). Badge/heading/subtitle stack removed in favour of title bars; spotlight wrapper retired; hero emoji dropped; location standardised to "Cebu, Philippines". §5.3 and §9 closed. Status moved to Approved. | Claude (Opus 5) |
| v1.1.0 | 2026-07-27 | Added §5 AI-Tell Audit — 14 enumerated tells with measured counts, Aqua replacements, and a grep-verifiable pre-merge gate. Three new material design decisions arise from it (§5.3): the repeated badge/heading/subtitle stack is removed, the mouse-follow spotlight wrapper is removed, and the hero emoji is raised for a decision. Renumbered later sections. | Claude (Opus 5) |
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
| V3 | Twelve-colour Lucide icon palette applied decoratively. | `experience.tsx`, `about.tsx`, `skills.tsx`, `education.tsx` |
| V4 | Graph-paper grid page background. | `globals.css` |
| V5 | `font-black` display type plus `tracking-[0.2em]`–`tracking-[0.3em]` uppercase micro-labels as the dominant text style. | all components |
| V6 | Scrollbars hidden entirely. Anti-Aqua; Aqua scrollbars are prominent and blue. | `globals.css` |
| V7 | Decorative `animate-ping` pulse dots. | `hero.tsx`, `experience.tsx`, `education.tsx` |

### 1.2 Content defects

| # | Site currently says | Résumé says | Severity |
|---|---------------------|-------------|----------|
| C1 | No Edufied Pte entry. "Seeking a remote internship opportunity starting in May", "Available for Internship", "Seeking May Internship". | **Full-Stack Software Engineer Trainee, Edufied Pte, Remote, May 2026 – Present.** | High — stale, undersells |
| C2 | Bayanihan One Window built with **Vue.js**; no leadership or security work mentioned. | OWBAP: **Laravel 13, React, Inertia.js, PostgreSQL, Redis, S3**. Capstone **lead developer, team leader, systems analyst for a team of 4**. Email OTP, TOTP MFA, RBAC, audit logging, rate limiting. Client: Department of Migrant Workers. | High |
| C3 | Absent. | **OEC Verify** — Next.js, TypeScript, Supabase, PostgreSQL, Tailwind. RBAC, Row-Level Security, encrypted receipt tokens, QR verification. | High |
| C4 | "Aug 2023 – Present", no GWA. | BS Information Systems, **GWA 1.45**, expected **2027**. | Medium |
| C5 | Absent. | 4 certifications: AWS SBG Core Team Member Badge (Jul 2026), Cisco Networking Basics (May 2025), IPOPHL iLeap IP (May 2024), Coursera Intro to Python (Apr 2024). | Medium |
| C6 | "Satisfaction 100%", "Support 24/7", "Cups of Coffee: Unlimited", "Learning Mode 24/7", skill bars at 90/85/80/95%. | Unsupported. Fabricated. | High — credibility |
| C7 | "10+" projects (hero) vs "15+" (about) vs "2+ Years Exp". | 6 projects. The two counts contradict each other on the same site. | Medium |
| C8 | "Toledo City, Cebu" / "Matab-ang, Toledo City, Cebu". | Cebu City, Philippines, 6038. | Low — needs owner confirmation |
| C9 | "Passionate developer crafting scalable, user-friendly applications with modern web technologies. I turn complex problems into elegant solutions." | — | High — textbook LLM prose |
| C10 | Looping typewriter cycling "Self-Driven & Highly Autonomous", "Problem Solver", "Communicator". | — | Medium |
| C11 | Metadata: "Dynamic and versatile digital professional with expertise spanning video editing, social media management, web development, and data analytics." | No video editing, social media, or data analytics on the résumé. | High — wrong person |
| C12 | "academic, **viral**, and production environments." Skills lists **Vue.js**. | Vue.js is not on the résumé; OWBAP is React. | Medium |
| C13 | The Experience page lists **six entries**, five of which are projects given job-shaped role titles and employer-shaped company names — "Full-Stack Software Engineer / Systems Analyst" at "Bayanihan One Window", at "Medicare Clinic System", at "AbsoluteCinema". Two are labelled "Freelance Web Developer" for a personal project and a proposed system. | The résumé has exactly **one** Experience entry — Edufied Pte — and lists the rest under **Projects**. | High — reads as padded employment history |

---

## 2. Decisions (confirmed by owner, 2026-07-27)

| Decision | Choice |
|----------|--------|
| Aqua fidelity | **Faithful 10.2-era** — pinstripes, glossy jelly controls, visible blue scrollbars, 10px window radii |
| Window chrome scope | **Every card** |
| Availability framing | **Employed + open** — lead with the Edufied role |
| Dock | **Magnification with neighbour scaling**, plus active indicator, hairline separator, cream help-tag tooltip |
| Overriding constraint | **No AI smells.** See §5. |

### 2.2 Second round of decisions (confirmed by owner, 2026-07-27)

Resolves everything previously open in §5.3 and §9.

| Ref | Question | Choice |
|-----|----------|--------|
| A1 | The centred badge → heading → subtitle stack, identical on 6 pages | **Removed.** Page titles move into Aqua window title bars. Badges deleted. Subtitles kept only where they carry a fact the title does not. |
| A3 | `InteractiveCardWrapper` cursor-following spotlight glow | **Retired.** Replaced by Aqua hover — hairline brightens, gradient lifts a few percent, nothing tracks the cursor. File stays in the repo unimported so it is a one-line revert. |
| B10 | The `👋` emoji in the hero H1 | **Dropped.** Headline becomes "Hi, I'm Josephus". The typewriter animation and its once-per-session flag are untouched. |
| C8 | Location conflict between résumé and site | **"Cebu, Philippines"** everywhere. Accurate against both the résumé (Cebu City) and the site's Toledo City, and avoids publishing a specific barangay on a public page. Supersedes "Matab-ang, Toledo City, Cebu" in `contact.tsx` and "Toledo City, Cebu" in `about.tsx` / `footer.tsx`. |

The C8 choice also removes a minor privacy exposure — `contact.tsx` currently publishes a
barangay-level home address alongside a personal mobile number.

### 2.1 Explicit non-goals

- No changes to routes or page composition.
- No changes to the first-visit-only animation logic in `section-wrapper.tsx` (module-level
  `revealedSections` Set) or `hero.tsx` (module-level `hasHeroAnimated` flag). Tuned across the
  last five commits; must keep working — cinematic on first visit, quick fade on return.
- The dock's structure, position, glass treatment, and icon assets are preserved. Dock work is additive.
- No dependency additions.
- No refactor of unrelated code.

---

## 3. Design — Aqua layer

### 3.1 Tokens

Defined once in `globals.css`, with scale tokens in `tailwind.config.ts`.

**Radius scale** — replaces the ad-hoc 2.5rem/4rem values:

| Token | Value | Use |
|-------|-------|-----|
| `--radius-window` | 10px | window bodies |
| `--radius-control` | 6px | fields, small tiles, list rows |
| `--radius-capsule` | 999px | jelly buttons and segmented controls only |

**Palette** — one accent plus graphite. Semantic colour is reserved for real state, so the only
saturated trio on the page becomes the traffic lights themselves.

| Token | Light | Dark (graphite) |
|-------|-------|-----------------|
| `--aqua-blue` | `hsl(212 84% 52%)` | `hsl(212 90% 62%)` |
| `--aqua-graphite` | `hsl(220 6% 46%)` | `hsl(220 5% 62%)` |
| `--aqua-window-bg` | `hsl(0 0% 100% / 0.92)` | `hsl(220 6% 14% / 0.92)` |
| `--aqua-hairline` | `hsl(220 10% 42% / 0.55)` | `hsl(0 0% 0% / 0.6)` |
| `--aqua-highlight` | `hsl(0 0% 100% / 0.75)` | `hsl(0 0% 100% / 0.12)` |
| traffic lights | `#ff5f57` / `#ffbd2e` / `#28c840` | unchanged |

**Surfaces.** `.aqua-window`: top-lit vertical gradient, 1px outer hairline, 1px inner white top
highlight, 10px radius, soft ambient drop shadow. `.aqua-pinstripe`: opt-in
`repeating-linear-gradient` at 4px pitch, ≤4% opacity — the authentic 10.0–10.2 texture.

**Background.** `body` loses the graph paper and gains the Aqua Blue desktop: soft radial aqua
gradient, brighter at upper-centre, plus a very low-opacity pinstripe. Graphite in dark mode.
`background-attachment: fixed` retained.

**Typography.** Lucida Grande for all UI text (it *is* the Mac OS X system font, already loaded).
Gill Sans for display headlines only. Maximum weight `bold` — all `font-black` removed. Aqua
title-bar text: Lucida Grande bold 13px, centred, 1px white emboss.

**Controls.** `.btn-aqua` rewritten as a proper glossy jelly capsule with a pressed state, lighter
than the current four-layer inset stack. New `AquaSegmentedControl` replaces the generic pill
filter rows. Aqua text fields with inset shadow and blue focus glow. Aqua scrollbars restored.
A candy-striped progress bar is specified but **not used** — its only consumer was the fabricated
percentage panel (C6), which is being removed.

### 3.2 New components

**`src/components/ui/aqua-window.tsx`**

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

Traffic lights are decorative: `aria-hidden`, not focusable, no handlers, no hover affordance.
They must not imply controls that do nothing.

**`src/components/ui/aqua-segmented-control.tsx`** — Aqua capsule segmented control, roving
tabindex, `role="tablist"`.

**`src/components/ui/aqua-list.tsx`** — classic Mac OS X list view with alternating blue/white
row striping. Used by Certifications and the Contact connect list.

**`src/components/certifications.tsx`** — the 4 résumé certifications in an `AquaWindow` titled
"Certifications & Awards", rendered on the Education page.

**`src/lib/skills-data.ts`** — the skills array is currently duplicated verbatim between
`skills.tsx` and `tech-marquee.tsx`. Both files are being edited, so the array moves to one
module. Targeted fix, in code already being touched.

### 3.3 Per-page changes

Layouts preserved throughout. Container treatment, colour, type, and copy change.

**Home — `hero.tsx`.** Right-hand panel becomes an `AquaWindow` titled **"About This
Developer"** — a deliberate riff on *About This Mac*. The four fabricated stat tiles become an
About-This-Mac key/value list, which is both more authentic and removes the invented metrics.
H1 typewriter kept exactly as-is. The looping role typewriter is replaced by one static subtitle
(C10). Availability badge reframed to the Edufied role; decorative `animate-ping` removed, green
status dot stays. Scroll-mouse indicator removed.

**Portfolio — `portfolio.tsx`.** Each project becomes an `AquaWindow` with the project name in
the title bar. "Read More" becomes a **disclosure triangle**. Filters become
`AquaSegmentedControl`. OEC Verify added, OWBAP stack corrected, descriptions rewritten.
`AnimatePresence`/`layout` behaviour preserved.

**Experience — `experience.tsx`.** See §3.3.1 — this page is rescoped rather than restyled.

#### 3.3.1 Experience page — one entry (owner decision, 2026-07-27)

The page holds **only** the Edufied Pte internship. This resolves C13.

The five other entries are projects wearing job titles. "Full-Stack Software Engineer / Systems Analyst"
at "Medicare Clinic System" describes a school requirement as employment; "Freelance Web
Developer" at "LETReview" describes a personal project as client work. Presenting them as an
employment history is padding, and padding is exactly what a reader discounts. One real
internship, stated plainly, is stronger than six entries a reader has to sort through.

- **Content:** Full-Stack Software Engineer Trainee, Edufied Pte, Remote, May 2026 – Present. Built from
  the three résumé bullets — full-stack work across the SDLC from requirements gathering to
  deployment; daily scrum, troubleshooting and system improvement with the team; tool evaluation
  and integration, application security, technical documentation.
- **Structure:** the timeline rail is dropped — a rail with one node on it is decoration. A
  single detailed `AquaWindow` replaces it, with room to give the role real substance.
- **Nothing is lost.** OWBAP, Normalite EDGE, LETReview, BNHS, MediCare and AbsoluteCinema are
  all already on the Portfolio page; OEC Verify is added there. The removed entries were
  duplicates of Portfolio content with a job title bolted on.
- The "Looking for Proven Delivery Experience?" marketing block is replaced by a restrained Aqua
  window with résumé and contact links, which also keeps the page from feeling thin.

**Skills — `skills.tsx`.** Marquee and icon cloud preserved; cards become compact Aqua tiles.
The italic quote panel becomes a **"Get Info" inspector**. Skill list aligned to the résumé:
Vue.js removed; Python, ShadCN/UI, Radix UI, JWTs, Git, Redis, S3, AWS Aurora, Heroku, Firebase
added. `categoryInsights` rewritten.

**Education — `education.tsx` + `certifications.tsx`.** Entries become `AquaWindow`s. GWA 1.45
and expected 2027 added. New Certifications & Awards window using `AquaList`.

**Contact — `contact.tsx`.** Form becomes an Aqua sheet-styled window with Aqua fields. Connect
list becomes an `AquaList`. A one-line data-use notice is added beneath the form (§6, S1).

**Footer — `footer.tsx`.** The 4-column modern footer becomes a single slim Aqua **status-bar
strip**: name, copyright, back-to-top. Keeps the dock as focal point. Every link currently in
the footer already exists in the dock or on Contact, so nothing becomes unreachable.

**`layout.tsx`.** Title `Kim's Portfolio` → `Josephus Kim L. Sarsonas`. Description rewritten (C11).

### 3.4 Dock — `navbar.tsx`

Additive only.

1. **Magnification with neighbours.** Pointer x-position drives a distance falloff: hovered icon
   ~1.55×, immediate neighbours ~1.25×, next ~1.08×. Framer Motion springs, row bottom-anchored
   so icons grow upward off the shelf. Disabled under `prefers-reduced-motion` and for touch
   pointers (no hover state to track).
2. **Active indicator** restyled to the classic form.
3. **Hairline separator** before the theme toggle.
4. **Tooltip** restyled from the black chip to a cream Aqua help tag.

`.frutiger-aero-navbar` shelf, positioning, sizing, and icon assets unchanged.

---

## 4. Content rewrite rules

1. Every factual claim traces to the résumé. No invented numbers, durations, or percentages.
2. Plain first-person sentences. Concrete nouns. No adjective stacks.
3. Numbers appear only where the résumé supports them: GWA 1.45, team of 4, 120+ users,
   4,000+ visits in 14 days, 6 projects, expected 2027.
4. Every project states what it does and who it is for before what it is built with.
5. Banned vocabulary — see §5.2.

---

## 5. AI-Tell Audit

The owner's overriding requirement is that nothing on the finished site smells AI-generated.
"Looks AI-generated" is not a vague feeling; it is a specific and enumerable set of patterns.
This section names each one found in the codebase, gives its measured count, and states the
replacement. §5.4 turns it into a gate that can be checked mechanically.

### 5.1 Visual tells

| # | Tell | Why it reads as AI | Count | Replacement |
|---|------|--------------------|-------|-------------|
| A1 | **Repeated "pill badge → big heading → muted one-liner" stack**, centred, once per page | The single most recognisable scaffold-generator signature. Identical structure on all six pages. | **6 pages** | The Aqua metaphor absorbs it: the page title moves into the **window title bar**. Badge deleted. Subtitle kept only where it carries a fact the heading does not. |
| A2 | **Heading with exactly one word in the accent colour** — `My <span className="text-primary">Journey</span>` | Template tic. Applied mechanically regardless of which word deserves emphasis. | **8** | Plain Lucida Grande titles. No accent-coloured word anywhere in a heading. |
| A3 | **Mouse-follow spotlight glow** on every card (`InteractiveCardWrapper`) | Aceternity/scaffold signature effect. Mac OS X has no such behaviour. | **~30 usages** | Component retired. Aqua hover instead: hairline brightens, gradient lifts a few percent. Nothing tracks the cursor. |
| A4 | **Icon in a tinted rounded square** (`p-3 rounded-2xl bg-primary/10 text-primary`) | Ubiquitous generated-dashboard motif. | **9** | Aqua icons sit directly on the surface, or in a proper inset well where an Aqua control would have one. |
| A5 | **Twelve-colour decorative icon palette** | Colour applied for variety, not meaning. | 12 hues | Graphite, with the accent for genuine state only. |
| A6 | **Decorative `animate-ping` pulse rings** | Signals "live" where nothing is live. | **3** | Removed. Static Aqua indicators. |
| A7 | **`uppercase tracking-widest text-[10px] font-bold` micro-labels** as the default label style | Generated-UI tic; unrelated to Aqua, which labels at 11px sentence case. | **28** | Reduced to genuine Aqua group labels only. Sentence case, 11px. |
| A8 | **Blurred glow orb behind content** (`bg-primary/10 blur-[100px] rounded-full`) | Filler depth. | **1** | Removed. |
| A9 | **`bg-gradient-to-br from-primary/5 to-transparent` overlay** on card after card | Adds nothing; present because generators add it. | **5** | Removed. The Aqua top-lit gradient is the real light source. |
| A10 | **`hover:scale-105`/`110` on everything** | Uniform bounce as a substitute for hierarchy. | **13** | Removed everywhere **except the dock**, where magnification is authentic OS behaviour. |
| A11 | **Giant frosted-glass radii** (V1) | 2024 glassmorphism default. | 6 files | 10px Aqua windows. |
| A12 | **Symmetric 4-up stat grid of round numbers** | Generated filler layout. | 2 grids | About-This-Mac key/value list. |

### 5.2 Copy tells

| # | Tell | Instances found | Rule |
|---|------|-----------------|------|
| B1 | Hype adjectives and verbs: *passionate, crafting, leveraging, robust, seamless, elegant solutions, cutting-edge, dynamic and versatile, premium user experience, comprehensive* | 14+ | Banned outright. Also banned: *delve, realm, tapestry, journey* (as metaphor), *not just X but Y*, *turn complex problems into*. |
| B2 | **Aspirational closer with no content** — "I turn complex problems into elegant solutions", "Let's build something great" | 3 | Deleted. A sentence must add a fact or go. |
| B3 | **Subtitle that restates its own heading** — "Explore the roles and achievements that have shaped my journey" under "My Journey" | 4 | Deleted or replaced with a fact. |
| B4 | **Generic template headings** — "Get In Touch", "Get to Know Me", "My Journey", "Recent Deliverables" | 4 | Replaced with plain, specific window titles: "Experience", "Projects", "Education", "Contact". |
| B5 | **Fake quotation marks around nobody's words** — `"{categoryInsights[activeCategory]}"` rendered italic, as if a testimonial | 1 | Quotes and italics removed. It is descriptive text, so it reads as descriptive text. |
| B6 | **Buzzword competency labels** — "Systems Thinking", "Optimization", "SDLC Execution", "Autonomous" | 5 | Replaced with what he actually did, in verbs. |
| B7 | **Fabricated round metrics** — 100%, 24/7, Unlimited, 90/85/80/95% | 8 | Deleted (C6). |
| B8 | **Uniform description length and rhythm** — eight project blurbs of near-identical length, each opening with a gerund | 8 | Deliberately varied. Some two sentences, some four. Not every one opens with a verb. |
| B9 | **Adjective stacking** — "scalable, user-friendly applications with modern web technologies" | 6 | One qualifier maximum, and only if it is doing work. |
| B10 | **Emoji in a heading** — `Hi, I'm Josephus 👋` | 1 | Dropped (§2.2). Headline becomes "Hi, I'm Josephus"; typewriter behaviour unchanged. |

### 5.3 Material decisions arising from this audit — **all resolved**

Three items in §5.1–5.2 changed the design beyond v1.0.0. The owner approved all three; see
§2.2 for the decision record.

1. **A1 — approved.** The badge/heading/subtitle stack is deleted on all six pages; page titles
   move into Aqua window title bars. This is the largest single visual change in the redesign and
   the one that most removes the generated look. It is coherent with the theme rather than a
   subtraction: in Mac OS X, the window title *is* the heading.
2. **A3 — approved.** `InteractiveCardWrapper` is retired.
3. **B10 — approved.** The `👋` is dropped; the typewriter behaviour is unchanged.

### 5.4 Pre-merge gate

Enforceable rather than aspirational. Each of these must return the stated result before the
work is called done:

| Check | Command | Required |
|-------|---------|----------|
| No accent-word headings | `grep -rn '<span className="text-primary">' src --include=*.tsx` | 0 hits |
| No spotlight wrapper in use | `grep -rn 'InteractiveCardWrapper' src --include=*.tsx` | 0 hits |
| No decorative ping | `grep -rn 'animate-ping' src --include=*.tsx` | 0 hits |
| No glow orbs | `grep -rn 'blur-\[' src --include=*.tsx` | 0 hits |
| No `font-black` | `grep -rn 'font-black' src --include=*.tsx` | 0 hits |
| Micro-labels reduced | `grep -rno 'tracking-widest\|tracking-\[0\.[0-9]em\]' src --include=*.tsx \| wc -l` | ≤ 4 (from 28) |
| No oversized radii | `grep -rn 'rounded-\[[2-9]' src --include=*.tsx` | 0 hits |
| Banned vocabulary | case-insensitive sweep for the §5.2 B1 word list across `src` | 0 hits |
| Fabricated metrics gone | sweep for `24/7`, `100%`, `Unlimited`, `15+` | 0 hits |
| `hover:scale` only in the dock | `grep -rn 'hover:scale' src --include=*.tsx` | `navbar.tsx` only |
| No emoji in headings | `grep -rn '👋' src --include=*.tsx` | 0 hits |
| No stale location or availability copy | sweep for `Toledo`, `Matab-ang`, `internship` | 0 hits |
| No stale project stack | `grep -rn 'Vue' src --include=*.tsx` | 0 hits |

A human read-through follows the mechanical gate. Greps catch patterns; only reading catches
prose that is grammatical, on-topic, and still sounds like nobody wrote it.

---

## 6. Standards-readiness check

This is a project document rather than a certification artefact, so a standards-readiness check
applies. Findings that would require rework to certify:

| # | Finding | Standard | Disposition |
|---|---------|----------|-------------|
| S1 | The contact form collects name, email, subject, and message — personal data — with no notice of purpose, recipient, or retention. | ISO 27001 A.5.34; DPTM (Notification & Consent); SOC 2 Privacy | **Fix in scope.** One-line notice beneath the form: data is emailed to the owner and used only to reply. |
| S2 | `actions.ts` returns `"Email service is currently misconfigured. Please check environment variables."` to end users, disclosing internal configuration state. | ISO 27001 A.8.16; SOC 2 CC7.2 | **Fix in scope.** Generic user-facing message; detail stays in the server log. |
| S3 | `submitContactForm` has no rate limiting, CAPTCHA, or abuse control. Unauthenticated endpoint that sends mail. | ISO 27001 A.8.6; SOC 2 CC6.1 | **Flagged, out of scope.** Needs a deliberate decision. Recommend Vercel-side rate limiting or a honeypot field as a follow-up. |
| S4 | No privacy policy page. | DPTM (Governance & Transparency); ISO 27001 A.5.34 | **Flagged, out of scope.** Recommend a `/privacy` route as a follow-up. |
| S5 | SMTP credentials read from `process.env`; `.env*` gitignored. No secrets in the repository. | ISO 27001 A.8.24; SOC 2 CC6.1 | **Compliant.** No action. |
| S6 | Pinstripes, gloss, and low-opacity graphite text risk falling below 4.5:1 contrast. | WCAG 2.2 AA (a DPTM accessibility expectation) | **Fix in scope.** Body text and window titles verified ≥4.5:1 in both themes; pinstripe opacity capped at 4%. |
| S7 | Design documents versioned with a changelog. | ISO 9001 §7.5.3 | **Compliant** via this document's naming convention. |

Nothing in the visual or content scope introduces new certification rework. S3 and S4 are
pre-existing and unchanged by this work.

### 6.1 Documentation coverage

| Document | Resolvable from a standard? | Auto-generatable without approval? |
|----------|-----------------------------|-------------------------------------|
| This design spec | Partly — ISO 9001 §7.5.3 sets the version/changelog control | No. Asserts facts about his career; needs his approval. |
| Implementation plan | No — project-specific | Yes, from this approved spec |
| Privacy notice / `/privacy` page | Yes — DPTM Notification & Consent and ISO 27001 A.5.34 supply the required clauses | No. Publishing a privacy claim on his behalf needs sign-off. |
| Accessibility conformance note | Yes — WCAG 2.2 AA success criteria | Yes, once contrast is measured |

**Source-code versioning note.** The organisation's versioned-filename convention is applied to
documents, as with this spec. It is not applied to `.tsx` source files: Next.js resolves routes
from filenames, so renaming `page.tsx` to `page-v1.0.1.tsx` would break the application. Source
history is versioned through git commits instead.

---

## 7. Verification

QA runs until clean.

1. `npm run typecheck` — zero errors.
2. `npm run build` — succeeds.
3. Dev server on 9002; all six routes checked in **both** themes.
4. **Animation regression, explicitly:** home loads with the cinematic first-visit sequence;
   navigating away and back gives the quick fade, not a cinematic replay; the H1 typewriter fires
   once per session only.
5. **Dock:** magnification tracks the pointer, neighbours fall off smoothly, active indicator
   correct on every route, keyboard focus still reaches every icon.
6. Contrast check on window titles and body text, both themes.
7. Responsive at 375px, 768px, 1440px — no horizontal scroll.
8. **§5.4 pre-merge gate** — every check at its required result.
9. Independent review by a separate agent with no knowledge of the implementation, per
   organisation policy that work is not self-reviewed. The reviewer is given §5 and asked to
   find AI tells independently, including any this audit missed.

## 8. Risks

| Risk | Mitigation |
|------|------------|
| Removing the badge/heading/subtitle stack (A1) leaves pages feeling bare. | The window title bar replaces it, so each page still announces itself — with real chrome instead of a decorative pill. Judged by eye per page. |
| 20+ pinstriped windows on Portfolio and Skills read as noisy. | `pinstripe` is per-instance. Repeated cards can drop stripes and keep chrome. |
| Stripping tells without adding character leaves the site merely bland. | The Aqua system is the replacement, not a subtraction: real chrome, real system type, real controls. Bland is a failure condition, checked in the human read-through (§5.4). |
| Traffic lights imply window controls that do nothing. | Decorative, `aria-hidden`, no hover affordance. |
| Dock magnification is the owner's favourite element; a regression would be keenly felt. | Isolated to `navbar.tsx`, additive, guarded by reduced-motion and pointer-type checks, trivially revertible. |
| Content rewrite overreaches into claims he would not make. | Every claim traces to the résumé; C8 is raised for confirmation rather than assumed. |

## 9. Open questions — **none**

All questions raised in v1.0.0 and v1.1.0 are resolved in §2 and §2.2. The spec is cleared for
implementation.

Noted, not acted on: `src/components/skills.tsx-revised` and a stray top-level `Users/`
directory look like leftovers. Left in place; deleting files the owner may still want is his
call, not the implementation's.
