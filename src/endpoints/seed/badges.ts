type SeedBadge = {
  title: string
  slug: string
  description: string
  category: 'achievement' | 'program' | 'community' | 'contribution' | 'craft'
  fallbackIcon: 'award' | 'shield' | 'spark' | 'star' | 'users'
  displayStyle: 'compact' | 'featured' | 'standard'
  isRetired: boolean
  sortOrder: number
  visibility: 'member' | 'public'
}

export const badges: SeedBadge[] = [
  {
    title: 'Program Graduate',
    slug: 'program-graduate',
    description: 'Completed a community program cycle and shipped visible contribution.',
    category: 'achievement',
    fallbackIcon: 'award',
    displayStyle: 'featured',
    isRetired: false,
    sortOrder: 10,
    visibility: 'public',
  },
  {
    title: 'Portal Contributor',
    slug: 'portal-shipper',
    description: 'Helped ship meaningful improvements to the community portal.',
    category: 'contribution',
    fallbackIcon: 'spark',
    displayStyle: 'featured',
    isRetired: false,
    sortOrder: 20,
    visibility: 'public',
  },
  {
    title: 'Session Speaker',
    slug: 'session-speaker',
    description: 'Shared knowledge or led a live session for the community.',
    category: 'community',
    fallbackIcon: 'users',
    displayStyle: 'standard',
    isRetired: false,
    sortOrder: 30,
    visibility: 'public',
  },
  {
    title: 'Mentor',
    slug: 'mentor',
    description: 'Supported another contributor through feedback, guidance, or review.',
    category: 'community',
    fallbackIcon: 'shield',
    displayStyle: 'standard',
    isRetired: false,
    sortOrder: 40,
    visibility: 'public',
  },
  {
    title: 'Community Steward',
    slug: 'community-steward',
    description: 'Helped maintain shared context, onboarding, or community operations.',
    category: 'achievement',
    fallbackIcon: 'star',
    displayStyle: 'standard',
    isRetired: false,
    sortOrder: 50,
    visibility: 'public',
  },
]
