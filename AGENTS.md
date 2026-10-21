# AdFlow OS — Agent & Contributor Guide

Instructions for AI coding agents and human contributors working in this repository.

## Product

**AdFlow OS** is a production SaaS platform for advertising agencies with two primary product surfaces:

1. **Agency Operations** — CRM, onboarding, campaigns, tasks, reporting
2. **Billing** — pricing, invoices, subscriptions, payments (Stripe)

Do not invent fake functional features. Prefer scaffolding and clear module boundaries over incomplete “demo” behavior.

## Current phase

**Step 1 — Project foundation only.** Authentication, database schemas, CRM, and billing are **not** implemented yet. Later steps will add them deliberately.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js (App Router) |
| UI | React, TypeScript, Tailwind CSS, shadcn/ui |
| Data | PostgreSQL, Drizzle ORM |
| Auth | Auth.js |
| Payments | Stripe |
| Validation | Zod |
| Unit tests | Vitest |
| E2E tests | Playwright |

Install and wire dependencies when the corresponding step begins—do not half-integrate unused packages.

## Architecture rules

### Modular boundaries

- Keep **agency** and **billing** feature code in `src/features/agency` and `src/features/billing`.
- Shared UI lives in `src/components` (`ui/` = shadcn, `layout/` = shells, `shared/` = cross-feature presentational pieces).
- Server-only logic belongs under `src/server` (`actions/`, `services/`, `repositories/`).
- Infrastructure adapters live under `src/lib` (`auth/`, `db/`, `stripe/`, `validations/`, `utils/`).
- App routes stay thin in `src/app` — compose features; avoid business logic in page files.
- Domain types go in `src/types`. Site/product config goes in `src/config`.
- Drizzle schema and migrations belong under `drizzle/` (when introduced).
- Tests: unit under `tests/unit`, e2e under `tests/e2e`.

### Dependency direction

```
app → features → server/services → repositories → lib/db
                ↘ components/ui
features must not import from other features’ internals.
server code must not import from `src/app`.
client components must not import server-only modules.
```

### Coding standards

- TypeScript **strict** mode; no `any` unless justified and localized.
- Prefer server components by default; add `"use client"` only when interactivity requires it.
- Validate external input with Zod at boundaries (forms, API routes, webhooks).
- Use path alias `@/` for imports under `src/`.
- Match existing naming: kebab-case files, PascalCase components, camelCase functions.
- Keep changes focused; do not refactor unrelated code or add docs the user did not ask for.
- Do not commit secrets, `.env`, or real Stripe/Auth credentials.

### Security requirements

- Never expose `STRIPE_SECRET_KEY`, `AUTH_SECRET`, or `DATABASE_URL` to the client.
- Only `NEXT_PUBLIC_*` variables may be used in client bundles.
- Authorize every mutation; never trust client-supplied tenant/agency IDs alone.
- Sanitize and validate all user input; use parameterized queries via Drizzle (no raw SQL string concat).
- Stripe webhooks must verify signatures before processing.
- Prefer least-privilege DB roles and secret rotation in production.
- Log safely: no tokens, passwords, or full card data in logs.

### Testing expectations

- Add Vitest unit tests for pure business logic and Zod schemas when those modules exist.
- Add Playwright coverage for critical user journeys (auth, billing checkout, core CRM flows) when those flows ship.
- New features should include tests for happy path + important failure cases.
- CI (when added) must run lint, typecheck, unit tests, and build before merge.

### AI agent instructions

1. Read this file and `README.md` before making structural changes.
2. Respect the current step: do not implement auth, DB tables, CRM, or billing until asked.
3. Prefer small, reviewable diffs; explain new folders and important files when scaffolding.
4. After meaningful changes, run `npm run lint`, `npm run typecheck`, and `npm run build`.
5. Never invent production credentials or commit `.env`.
6. When unsure between a quick hack and a modular boundary, choose the modular boundary.
7. Do not generate placeholder “working” UIs that pretend features exist—use explicit “planned / coming soon” states instead.

## Folder map (Step 1)

```
src/
  app/                 # Next.js App Router entry (layout, pages, styles)
  components/
    ui/                # shadcn/ui primitives
    layout/            # Site shell, header, footer
    shared/            # Cross-feature presentational components
  config/              # Site and product configuration
  features/
    agency/            # Agency operations module (empty until later steps)
    auth/              # Auth feature boundary (empty until later steps)
    billing/           # Billing module (empty until later steps)
  hooks/               # Shared React hooks
  lib/
    auth/ db/ stripe/ validations/ utils/  # Adapters (empty until wired)
  server/
    actions/ repositories/ services/       # Server-side application layer
  types/               # Shared TypeScript types
drizzle/               # Schema & migrations (later)
tests/unit|e2e/        # Test suites (later)
```

## Verification commands

```bash
npm run lint
npm run typecheck
npm run build
```
