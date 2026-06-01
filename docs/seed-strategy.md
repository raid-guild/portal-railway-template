# Seed Strategy

The template provides generic seed content for local development and first-run review.

Seed goals:

- create enough content to inspect the portal
- avoid community-specific lore
- avoid destructive production behavior
- make roles, skills, badges, and example records easy to replace

Important seed files:

- `src/endpoints/seed/portal.ts`
- `src/endpoints/seed/profile-roles.ts`
- `src/endpoints/seed/profile-skills.ts`
- `src/endpoints/seed/badges.ts`
- `src/endpoints/seed/home.ts`

The full seed endpoint delegates to the non-destructive portal seed. If you need a demo preset, create it as an explicit preset rather than mixing it into default template seeds.

For production, prefer migrations and controlled admin/API imports over running local test seeds.
