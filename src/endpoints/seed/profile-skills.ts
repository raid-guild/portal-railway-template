import type { ProfileSkill } from '@/payload-types'

type SeedProfileSkill = Omit<ProfileSkill, 'createdAt' | 'id' | 'updatedAt'>

export const profileSkills: SeedProfileSkill[] = [
  {
    title: 'Design',
    category: 'builder',
    description: 'Visual design, product design, brand systems, and graphic design.',
    slug: 'design',
  },
  {
    title: 'Data Science/Analytics',
    category: 'builder',
    description: 'Data analysis, metrics, research synthesis, dashboards, and SEO research.',
    slug: 'data-science-analytics',
  },
  {
    title: 'Backend',
    category: 'builder',
    description: 'Server-side application development, APIs, services, and backend architecture.',
    slug: 'backend',
  },
  {
    title: 'DevOps',
    category: 'builder',
    description: 'Infrastructure, deployment, CI, monitoring, and reliability work.',
    slug: 'devops',
  },
  {
    title: 'UX/User Testing',
    category: 'builder',
    description: 'UX research, usability testing, prototyping, and feedback workflows.',
    slug: 'ux-user-testing',
  },
  {
    title: 'Frontend',
    category: 'builder',
    description: 'Frontend engineering, React, CSS, accessibility, and browser interactions.',
    slug: 'frontend',
  },
  {
    title: 'Protocol Engineering',
    category: 'builder',
    description: 'Protocol engineering, integrations, and specialized systems logic.',
    slug: 'protocol-engineering',
  },
  {
    title: 'Account Manager',
    category: 'builder',
    description: 'Client communication, account health, expectation setting, and delivery support.',
    slug: 'account-manager',
  },
  {
    title: 'BizDev',
    category: 'builder',
    description: 'Sales, partnerships, lead generation, deal shaping, and opportunity matching.',
    slug: 'bizdev',
  },
  {
    title: 'Project Manager',
    category: 'builder',
    description: 'Project planning, delivery coordination, budgets, timelines, and documentation.',
    slug: 'project-manager',
  },
  {
    title: 'Governance',
    category: 'builder',
    description: 'Governance, organizational design, decision process, and community strategy.',
    slug: 'governance',
  },
  {
    title: 'Onboarding',
    category: 'support',
    description: 'New member onboarding, contributor support, and participation readiness.',
    slug: 'onboarding',
  },
  {
    title: 'Treasury',
    category: 'support',
    description: 'Finance operations, accounting, treasury reporting, and budget tracking.',
    slug: 'treasury',
  },
  {
    title: 'Marketing',
    category: 'support',
    description: 'Campaigns, content distribution, social media, and growth strategy.',
    slug: 'marketing',
  },
  {
    title: 'Legal',
    category: 'support',
    description: 'Legal review, policy, contracts, agreements, and risk analysis.',
    slug: 'legal',
  },
  {
    title: 'Content Creator',
    category: 'support',
    description: 'Writing, editorial, video, podcasting, and educational content production.',
    slug: 'content-creator',
  },
  {
    title: 'Community',
    category: 'support',
    description: 'Community management, facilitation, moderation, and member engagement.',
    slug: 'community',
  },
  {
    title: 'Internal Ops',
    category: 'support',
    description: 'Internal process, logistics, coordination, and operational maintenance.',
    slug: 'internal-ops',
  },
]
