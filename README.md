# AdFlow OS

Production-oriented SaaS platform for advertising agencies.

**AdFlow OS** will provide:

1. **Agency Operations** — CRM, onboarding, campaigns, tasks, reporting  
2. **Billing** — pricing, invoices, subscriptions, Stripe payments  

> **Current status:** Step 1 — project foundation only. Authentication, database, CRM, and billing are not implemented yet.

## Tech stack

- Next.js (App Router) · React · TypeScript  
- Tailwind CSS · shadcn/ui  
- PostgreSQL · Drizzle ORM (later)  
- Auth.js · Stripe · Zod (later)  
- Vitest · Playwright (later)

## Prerequisites

- Node.js 20+  
- npm 10+

## Setup

```bash
# Clone
git clone https://github.com/lidiya207/ADFLOW-OS.git
cd ADFLOW-OS

# Install dependencies
npm install

# Environment variables
cp .env.example .env.local
# Edit .env.local as needed (DATABASE_URL, Auth, Stripe come in later steps)

# Development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Next.js development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript (`tsc --noEmit`) |

## Project structure

```
src/
  app/           # Routes, root layout, global styles
  components/    # UI primitives, layout, shared components
  config/        # Site configuration
  features/      # Domain modules (agency, auth, billing)
  hooks/         # Shared React hooks
  lib/           # Auth, DB, Stripe, validation adapters
  server/        # Server actions, services, repositories
  types/         # Shared types
drizzle/         # Drizzle schema & migrations (later)
tests/           # Unit and e2e tests (later)
```

See [AGENTS.md](./AGENTS.md) for architecture rules, security requirements, and AI agent instructions.

## License

Private — all rights reserved.
