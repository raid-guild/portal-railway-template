import type { RequiredDataFromCollectionSlug } from 'payload'

import {
  headingNode,
  horizontalRuleNode,
  lexicalRoot,
  lineBreakNode,
  paragraphNode,
  text,
} from './lexical'

export const home: RequiredDataFromCollectionSlug<'pages'> = {
  slug: 'home',
  _status: 'published',
  hero: {
    type: 'highImpact',
    links: [
      {
        link: {
          type: 'custom',
          appearance: 'default',
          label: 'Join now',
          url: '/join',
        },
      },
      {
        link: {
          type: 'custom',
          appearance: 'outline',
          label: 'Read updates',
          url: '/posts',
        },
      },
    ],
    // @ts-expect-error seeded media placeholder is resolved during the seed run
    media: '{{IMAGE_1}}',
    richText: lexicalRoot([
      headingNode('h1', [text('JOIN THE WORK.'), lineBreakNode(), text('FIND YOUR PEOPLE.')]),
      paragraphNode(
        'Community Portal is a deployable activity surface for communities that want profiles, projects, sessions, updates, and contribution paths in one place.',
      ),
      paragraphNode('Start with the current brief, then join a session or project.'),
    ]),
  },
  layout: [
    {
      blockName: 'Community invitation',
      blockType: 'content',
      columns: [
        {
          size: 'full',
          richText: lexicalRoot([
            horizontalRuleNode(),
            headingNode('h2', [text('See what is happening, then find a useful next step.')]),
          ]),
          enableLink: true,
          link: {
            type: 'custom',
            appearance: 'default',
            label: 'Join the community',
            url: '/join',
          },
        },
      ],
    },
  ],
  meta: {
    description:
      'A deployable activity portal for communities, programs, and contributor networks.',
    // @ts-expect-error seeded media placeholder is resolved during the seed run
    image: '{{IMAGE_1}}',
    title: 'Join the Work. Find Your People.',
  },
  title: 'Home',
}
