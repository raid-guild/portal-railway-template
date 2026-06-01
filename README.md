# Community Portal Railway Template

A Payload 3 + Next.js + PostgreSQL starter for communities that need a live
activity portal, not just a blank CMS.

The template gives a community a deployable surface for:

- current briefs and updates
- lightweight projects
- threads and activity items
- sessions and calendar links
- public member profiles
- posts with visibility controls
- contribution requests
- badges, points, and notifications
- optional agent-assisted publishing workflows

The product opinion is simple: make real community activity visible,
searchable, and actionable for humans and agents.

## Version Info

- **Payload CMS**: `3.82.1`
- **Next.js**: `16.2.5`
- **Node.js**: `^18.20.2 || >=20.9.0`

## Local Setup

```bash
cp .env.example .env
corepack pnpm install
docker compose up -d postgres
corepack pnpm payload migrate
corepack pnpm db:seed:local
corepack pnpm dev
```

The local seed creates an admin account:

- email: `local-admin@example.com`
- password: `password`

## Seed Strategy

The default seed is intentionally generic. It creates neutral skills, roles,
badges, posts, projects, sessions, briefs, modules, and page copy records.

Use:

```bash
corepack pnpm db:seed:local
```

The local seed script refuses non-local database hosts. Hosted environments
should use the Payload Admin or explicit production-safe import scripts.

## Customization

Start with:

- `src/config/site.ts` for site name, description, links, and vocabulary
- `src/endpoints/seed/profile-roles.ts` for default profile roles
- `src/endpoints/seed/profile-skills.ts` for default skills
- `src/endpoints/seed/badges.ts` for default recognition badges
- `src/endpoints/seed/portal.ts` for starter content and CMS-managed page copy
- `src/app/(frontend)/globals.css` for theme tokens

## Product Primitives

- `Brief`: current snapshot of community activity
- `Project`: focused collaboration surface
- `Thread`: persistent line of work or thought
- `Activity Item`: dated factual signal
- `Event`: scheduled gathering or calendar anchor
- `Profile`: contributor identity

Feature modules include contribution requests, badges, points, notifications,
modules, and future knowledge surfaces.

## Verification

```bash
corepack pnpm exec tsc --noEmit
corepack pnpm test:e2e
```

The e2e suite boots a fresh PostgreSQL container, builds the app, creates the
first admin user, upserts starter content, and verifies core portal flows.
