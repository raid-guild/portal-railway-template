# AGENTS.md

This file defines the working rules for automated agents in this repository.

## Core Principles

- Prefer maintainable fixes over shortcuts.
- Use `pnpm` for package management.
- Keep the Payload package family aligned when updating dependencies.
- Update `README.md` when setup, test commands, version info, or workflow expectations change.
- Treat meaningful behavior changes as requiring verification.

## Branching

- Do not push directly to `master`.
- Use feature branches for template changes.
- Let a human decide when to merge or publish a release branch.

## Testing

- Run relevant tests after changes.
- For app behavior, auth, admin flows, routing, rendering, seeding, or migrations, run:

```bash
corepack pnpm test:e2e
```

- If the task affects browser UX, use a headed/manual Playwright run when useful.
- State exactly what verification was run.

## Product Direction

This repository is a generic community portal template for communities, programs, and contributor networks.

The portal should make real activity visible and help people find a useful next step. It should not become a project management system, chat replacement, course platform, handbook dump, or generic AI content feed.

Use these primitives consistently:

- `Brief`: current snapshot of what is happening overall.
- `Project`: focused collaboration surface for something being built.
- `Thread`: persistent line of thought or work that evolves over time.
- `Activity Item`: factual signal that something happened.
- `Event`: scheduled session or calendar anchor.
- `Profile`: person or contributor identity.

Before adding a field, collection, page, or automation, identify which primitive it belongs to. Keep each primitive focused.

## Content Rules

- Surface real, recent, human activity.
- Prefer dated, source-grounded activity over broad summaries.
- Keep activity items short, factual, and traceable to meetings, repo activity, project updates, or other source records.
- Prefer updating existing threads over creating new threads.
- Create projects only when there is a concrete collaboration surface with state, people, links, or a next action.
- Events/sessions must make it easy to join or add to a personal calendar.
- Avoid marketing filler, invented urgency, invented participants, inferred commitments, and generic AI content.

## Feature Modules

Treat new product areas as feature modules unless they clearly belong to a core primitive.

Examples:

- contribution requests
- badges and points
- resource libraries
- calendar subscriptions
- agent registry
- relationship graph

Add a collection only when the feature needs its own lifecycle, permissions, reusable records, filtering/search/admin management, publishing/review, relationships from multiple primitives, or future API consumption.

## Agent Publishing

The repo-owned portal skill lives at:

- `.agents/skills/portal-memory-publisher/SKILL.md`

The app serves that skill from:

- `/api/portal/skills/portal-memory-publisher`

Default agent behavior should be review-first:

- propose creates/updates before writing to Payload
- draft low-confidence records
- publish only when facts are clear and policy allows
- preserve source labels, timestamps, and uncertainty
- avoid project-management drift

Do not let an agent silently publish invented content or silently change production seed behavior.

## Preferred Commands

- Install dependencies: `corepack pnpm install`
- Rebuild native dependencies if needed: `corepack pnpm deps:native`
- Run e2e: `corepack pnpm test:e2e`
- Run headed e2e: `corepack pnpm test:e2e:headed`
- Run manual-review e2e: `corepack pnpm test:e2e:manual`
- Check audit state: `corepack pnpm audit --json`
