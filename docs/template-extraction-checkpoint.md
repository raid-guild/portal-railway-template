# Template Extraction Checkpoint

Date: 2026-06-01

This repo was extracted from the community portal app as a generic Railway-ready template for communities, programs, and contributor networks.

## Current State

- Repository initialized at `raid-guild/portal-railway-template`.
- Main branch pushed to GitHub.
- Branding is generic and driven primarily by `src/config/site.ts`.
- Default roles and skills are broad community taxonomy, not source-community-specific.
- Default seed content is generic portal starter content.
- Public docs were replaced with template-oriented docs.
- The bundled portal memory publisher skill is generic and review-first.

## Verification Completed

The extraction passed:

- `corepack pnpm install`
- `corepack pnpm generate:types`
- `corepack pnpm generate:importmap`
- `corepack pnpm exec tsc --noEmit`
- `E2E_POSTGRES_PORT=54339 corepack pnpm test:e2e`
- fresh Docker Postgres `payload migrate`
- `corepack pnpm build`

Note: `git diff --check` is not currently useful for the copied generated Payload migration files because several existing generated SQL migrations contain tab/trailing whitespace formatting.

## Known Follow-Up Lane

Expect feedback and bug fixes after first external review. Keep those changes small and reviewable.

Likely follow-ups:

- Polish template docs and README based on reviewer questions.
- Decide whether old generated migration filenames and enum values need a deeper cleanup.
- Decide whether the legacy profile import utility should stay, be renamed, or be moved to an example.
- Review default copy in join, inquiry, sponsor, session, profile, and dashboard flows.
- Review whether optional integrations should be documented as Discord/email/agent examples rather than enabled-looking defaults.
- Audit remaining starter media assets and replace with fully generic assets if needed.
- Confirm Railway setup instructions with a fresh deploy.

## Change Guidance

- Treat this checkpoint as the first stable template baseline.
- Prefer additive fixes over broad rewrites until reviewer feedback is clear.
- Keep this repo generic; community-specific language, lore, roles, and seed data should live in downstream app repos or explicit presets.
- When feedback requires behavior changes, run the e2e suite again before pushing.
