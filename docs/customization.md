# Customization

Start customization in `src/config/site.ts`.

Use that file for:

- community name
- short name
- default description
- social/source links
- product vocabulary

The default seed data is intentionally generic. Replace it with your own community-specific briefs, projects, profiles, events, posts, roles, and skills before launch.

## Branding

The template uses a text-based logo by default so it can ship without custom assets. Replace `src/components/Logo/Logo.tsx` or add your own image assets when the community brand is ready.

## Taxonomy

Default roles and skills live in:

- `src/endpoints/seed/profile-roles.ts`
- `src/endpoints/seed/profile-skills.ts`

Keep these broad unless your community has a stable taxonomy. Specific labels can always be added later.

## Agent Publishing

The included portal memory publisher skill is generic. It should propose or draft records from sourced activity and avoid invented content.

If you connect external memory, transcript, or workflow systems, treat those as optional integrations. Payload remains the reviewed presentation and publishing layer.
