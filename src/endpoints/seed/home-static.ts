import type { Page } from '@/payload-types'

import { headingNode, lexicalRoot, lineBreakNode, paragraphNode, text } from './lexical'

// Used for pre-seeded content so that the homepage is not empty
// @ts-expect-error static fallback intentionally omits database-managed fields
export const homeStatic: Page = {
  slug: 'home',
  _status: 'published',
  hero: {
    type: 'lowImpact',
    richText: lexicalRoot([
      headingNode('h1', [
        text('JOIN THE WORK.'),
        lineBreakNode(),
        text('FIND YOUR PEOPLE.'),
      ]),
      paragraphNode(
        'Community Portal is a deployable activity surface for communities that want profiles, projects, sessions, updates, and contribution paths in one place.',
      ),
      paragraphNode('Start with the current brief, then join a session or project.'),
      paragraphNode('See what is happening, then find a useful next step.'),
    ]),
  },
  meta: {
    description:
      'A deployable activity portal for communities, programs, and contributor networks.',
    title: 'Join the Work. Find Your People.',
  },
  title: 'Home',
}
