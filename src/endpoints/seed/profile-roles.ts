import type { ProfileRole } from '@/payload-types'

type SeedProfileRole = Omit<ProfileRole, 'createdAt' | 'icon' | 'id' | 'updatedAt'>

export const profileRoles: SeedProfileRole[] = [
  {
    title: 'Designer',
    type: 'Design',
    group: 'builder',
    description: 'Shapes product experience, visual systems, research, and interface quality.',
    slug: 'designer',
  },
  {
    title: 'Engineer',
    type: 'Engineering',
    group: 'builder',
    description: 'Builds software, integrations, infrastructure, and technical prototypes.',
    slug: 'engineer',
  },
  {
    title: 'Operator',
    type: 'Operations',
    group: 'builder',
    description: 'Improves systems, logistics, process, finance, and delivery coordination.',
    slug: 'operator',
  },
  {
    title: 'Researcher',
    type: 'Research',
    group: 'builder',
    description: 'Gathers evidence, synthesizes context, tests assumptions, and documents insight.',
    slug: 'researcher',
  },
  {
    title: 'Facilitator',
    type: 'Community',
    group: 'support',
    description: 'Hosts sessions, welcomes contributors, and keeps shared context moving.',
    slug: 'facilitator',
  },
  {
    title: 'Writer',
    type: 'Content',
    group: 'support',
    description: 'Turns community activity into posts, docs, updates, and reusable knowledge.',
    slug: 'writer',
  },
  {
    title: 'Steward',
    type: 'Stewardship',
    group: 'support',
    description: 'Maintains quality, governance, moderation, and long-running community health.',
    slug: 'steward',
  },
]
