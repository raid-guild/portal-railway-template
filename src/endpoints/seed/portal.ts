import type {
  CollectionSlug,
  Payload,
  PayloadRequest,
  RequiredDataFromCollectionSlug,
} from 'payload'

import { badges } from './badges'
import { dailyBrief } from './daily-brief'
import { headingNode, lexicalRoot, paragraphNode, text } from './lexical'

type UpsertArgs = {
  collection: CollectionSlug
  data: Record<string, unknown>
  match: Record<string, unknown>
  payload: Payload
}

const publishedAt = '2026-05-11T17:34:47.664Z'
const sessionEndedAt = '2026-05-11T17:34:47.664Z'
const nextSessionCalendarURL = 'https://calendar.google.com'
const nextSessionJoinURL = 'https://discord.com'
const inquirySharedCopy = {
  backLinkLabel: 'Back to join',
  contextBody:
    'Submit the inquiry first. The Portal saves it immediately, then asks you to create an account so follow-up can connect to your profile.',
  contextHeading: 'How this works',
  createAccountLabel: 'Create account',
  postSubmitBody:
    'Your request has been started. Create an account so we can connect this request to your Portal profile, share follow-ups, and keep the conversation tied to your work.',
  postSubmitEyebrow: 'Inquiry started',
  postSubmitHeading: 'Continue your Community Portal intake',
  submitAnotherLabel: 'Submit another',
  submitLabel: 'Start inquiry',
}

const pageCopySeeds = [
  {
    contextBody: 'No public sessions are scheduled yet. Join to get access to member coordination.',
    contextHeading: 'Next public session',
    createAccountLabel: 'Join the community',
    eyebrow: 'Community Portal',
    headline: 'A digital coworking space for builders',
    intro:
      'Join sessions, find a team, build your skills, and help turn ideas into shipped work with the community.',
    key: 'brief-public',
    label: 'Public Brief Page',
    seoDescription:
      'Join sessions, find a team, build your skills, and help turn ideas into shipped work with the community.',
    seoTitle: 'Community Portal | A digital coworking space for builders',
    status: 'published',
    submitAnotherLabel: 'View sessions',
    surface: 'brief',
  },
  {
    benefits: [
      { body: 'Follow real community activity without digging through chat.' },
      { body: 'Build a public profile connected to sessions, projects, posts, and badges.' },
      { body: 'Discover projects and contribution requests.' },
      { body: 'Join live sessions and keep track of context afterward.' },
      {
        body: 'Bring client, sponsor, grant, or partnership opportunities into the right intake path.',
      },
    ],
    benefitsHeading: 'Turn participation into skills, visibility, and opportunity.',
    eyebrow: 'Join the Portal',
    funnelEyebrow: 'Need a different path?',
    funnelHeading: 'Start with the right intake.',
    funnelLinks: [
      {
        description:
          'Talk through a client build, product spike, or technical implementation need.',
        href: '/inquire/client',
        label: 'Request a build',
      },
      {
        description: 'Bring sponsorship, bounties, or paid work into the community review path.',
        href: '/inquire/sponsor',
        label: 'Sponsor the community',
      },
      {
        description:
          'Route grants, public goods funding, or ecosystem support to the right context.',
        href: '/inquire/grant',
        label: 'Offer funding or grants',
      },
      {
        description: 'Start a partnership, collaboration, research, or community opportunity.',
        href: '/inquire/opportunity',
        label: 'Bring a collaboration',
      },
      {
        description: 'Ask a general question and get routed toward the right next step.',
        href: '/inquire/general',
        label: 'Talk to the community',
      },
    ],
    headline: "Join the community's digital coworking space.",
    intro:
      'Create an account to connect your profile, follow live community activity, join sessions, and find useful places to contribute.',
    key: 'join',
    label: 'Join Page',
    secondaryIntro:
      'The Portal shows the current brief, upcoming sessions, active projects, contributor requests, and the people building around them.',
    seoDescription:
      'Join sessions, find a team, build your skills, and help turn ideas into shipped work with the community.',
    seoTitle: 'Join the Portal',
    status: 'published',
    surface: 'join',
  },
  {
    ...inquirySharedCopy,
    eyebrow: 'Build Request',
    headline: 'Request a build with the community.',
    intro:
      'Share the product, technical, or strategic problem you want to move forward. This starts a private intake record for review.',
    key: 'inquire-client',
    label: 'Client Inquiry Page',
    messageLabel: 'What do you want to build, validate, or unblock?',
    seoDescription: 'Start a private build request with the community.',
    seoTitle: 'Request a build with the community.',
    status: 'published',
    surface: 'inquiry',
  },
  {
    ...inquirySharedCopy,
    eyebrow: 'Community Inquiry',
    headline: 'Talk to the community.',
    intro:
      'Not sure where to start? Share the question or context and the community can route it toward the right next step.',
    key: 'inquire-general',
    label: 'General Inquiry Page',
    messageLabel: 'What should we know?',
    seoDescription: 'Start a general community inquiry and get routed to the right next step.',
    seoTitle: 'Talk to the community.',
    status: 'published',
    surface: 'inquiry',
  },
  {
    ...inquirySharedCopy,
    eyebrow: 'Funding Path',
    headline: 'Offer funding or grants.',
    intro:
      'Bring grants, public goods funding, ecosystem budgets, or other support opportunities into review.',
    key: 'inquire-grant',
    label: 'Grant Inquiry Page',
    messageLabel: 'What funding path or grant context are you bringing?',
    seoDescription: 'Bring grant, public goods, or ecosystem funding context into review.',
    seoTitle: 'Offer funding or grants.',
    status: 'published',
    surface: 'inquiry',
  },
  {
    ...inquirySharedCopy,
    eyebrow: 'Collaboration',
    headline: 'Bring a collaboration opportunity.',
    intro:
      'Start a partnership, research, community, or ecosystem collaboration thread without needing to know the right internal channel.',
    key: 'inquire-opportunity',
    label: 'Collaboration Inquiry Page',
    messageLabel: 'What collaboration opportunity should the community understand?',
    seoDescription: 'Share a partnership, research, community, or ecosystem collaboration.',
    seoTitle: 'Bring a collaboration opportunity.',
    status: 'published',
    surface: 'inquiry',
  },
  {
    ...inquirySharedCopy,
    eyebrow: 'Sponsorship',
    headline: 'Sponsor the community.',
    intro:
      'Share sponsorship, bounty, paid work, or support context so it can be reviewed without getting lost in chat.',
    key: 'inquire-sponsor',
    label: 'Sponsorship Inquiry Page',
    messageLabel: 'What are you sponsoring or bringing to the community?',
    seoDescription: 'Start a sponsorship, bounty, paid work, or support inquiry with Community Portal.',
    seoTitle: 'Sponsor the community.',
    status: 'published',
    surface: 'inquiry',
  },
]

const findOne = async ({ collection, match, payload }: Omit<UpsertArgs, 'data'>) => {
  const result = await payload.find({
    collection,
    depth: 0,
    limit: 1,
    overrideAccess: true,
    pagination: false,
    where: Object.entries(match).reduce<Record<string, { equals: unknown }>>(
      (where, [field, value]) => ({
        ...where,
        [field]: {
          equals: value,
        },
      }),
      {},
    ),
  })

  return result.docs[0] || null
}

const upsert = async ({ collection, data, match, payload }: UpsertArgs) => {
  const existing = await findOne({ collection, match, payload })

  if (existing) {
    return payload.update({
      id: existing.id,
      collection,
      data,
      depth: 0,
      overrideAccess: true,
    })
  }

  return payload.create({
    collection,
    data,
    depth: 0,
    overrideAccess: true,
  })
}

export const seedPortalContent = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  const previousDisableSearchSync = req.context.disableSearchSync
  const previousDisableRevalidate = req.context.disableRevalidate

  try {
    req.context.disableSearchSync = true
    req.context.disableRevalidate = true
    payload.logger.info('Upserting portal starter content...')

    const [frontendSkill, projectManagerSkill, communitySkill] = await Promise.all([
      upsert({
        collection: 'profileSkills',
        match: { slug: 'frontend' },
        payload,
        data: {
          title: 'Frontend',
          slug: 'frontend',
          category: 'Engineering',
          description: 'Builds usable portal views and interaction flows.',
        },
      }),
      upsert({
        collection: 'profileSkills',
        match: { slug: 'project-manager' },
        payload,
        data: {
          title: 'Project Manager',
          slug: 'project-manager',
          category: 'Coordination',
          description: 'Keeps scope, ownership, and contributor workstreams clear.',
        },
      }),
      upsert({
        collection: 'profileSkills',
        match: { slug: 'community' },
        payload,
        data: {
          title: 'Community',
          slug: 'community',
          category: 'Coordination',
          description: 'Connects contributors, sessions, onboarding, and async context.',
        },
      }),
    ])

    await Promise.all([
      upsert({
        collection: 'profileRoles',
        match: { slug: 'engineer' },
        payload,
        data: {
          title: 'Engineer',
          slug: 'engineer',
          type: 'Builder',
          group: 'builder',
          description: 'Builds software, integrations, infrastructure, and technical prototypes.',
        },
      }),
      upsert({
        collection: 'profileRoles',
        match: { slug: 'facilitator' },
        payload,
        data: {
          title: 'Facilitator',
          slug: 'facilitator',
          type: 'Support',
          group: 'support',
          description: 'Hosts sessions, welcomes contributors, and keeps shared context moving.',
        },
      }),
    ])

    await Promise.all(
      badges.map((badge) =>
        upsert({
          collection: 'badges',
          match: { slug: badge.slug },
          payload,
          data: badge,
        }),
      ),
    )

    const portalUpdatePost = await upsert({
      collection: 'posts',
      match: { slug: 'community-portal-starter-update' },
      payload,
      data: {
        title: 'Community Portal Starter Update',
        slug: 'community-portal-starter-update',
        content: lexicalRoot([
          headingNode('h2', [text('Community portal starter update')]),
          paragraphNode(
            'The portal starter content focuses on live community primitives: projects, threads, sessions, activity, and a brief that shows what is happening.',
          ),
        ]),
        authors: req.user ? [req.user.id] : undefined,
        meta: {
          description: 'A portal update for validating public post, comment, and moderation flows.',
        },
        visibility: 'public',
        _status: 'published',
        publishedAt,
      },
    })

    const starterProject = await upsert({
      collection: 'projects',
      match: { slug: 'community-portal-starter' },
      payload,
      data: {
        title: 'Community Portal Starter',
        slug: 'community-portal-starter',
        summary:
          'A lightweight portal that surfaces active project spikes, recent activity, threads, events, and ways to contribute.',
        projectStatus: 'building',
        currentState: [
          {
            body: 'Base primitives are being scaffolded around briefs, projects, activity, threads, and events.',
          },
          {
            body: 'The community aligned on surfacing project state without turning the portal into project management software.',
          },
          {
            body: 'Next useful step is rendering real seeded activity and next-session CTAs in the app.',
          },
        ],
        lastActiveAt: sessionEndedAt,
        primaryCTA: {
          label: 'Join Project',
          url: '/projects/community-portal-starter',
        },
        profileSkills: [frontendSkill.id, projectManagerSkill.id, communitySkill.id],
        resources: [
          {
            label: 'Implementation spec',
            url: 'https://github.com/example/community-portal',
            resourceType: 'doc',
          },
          {
            label: 'Contributor guidelines',
            url: 'https://github.com/example/community-portal',
            resourceType: 'doc',
          },
        ],
        contributionActions: [
          {
            title: 'Render the Update Brief',
            description:
              'Show recent activity, active threads, and next-session CTAs from Payload.',
            url: '/',
          },
          {
            title: 'Build the Project Detail Page',
            description: 'Surface current state, related events, threads, resources, and actions.',
            url: '/projects/community-portal-starter',
          },
          {
            title: 'Add Session-Grounded Seeds',
            description:
              'Keep seed data tied to real community discussion instead of placeholder copy.',
            url: '/admin/collections/activityItems',
          },
        ],
        _status: 'published',
        publishedAt,
      },
    })

    const [projectObjectThread, calendarThread, ownershipThread, onboardingThread] =
      await Promise.all([
        upsert({
          collection: 'threads',
          match: { slug: 'defining-the-project-spike-object' },
          payload,
          data: {
            title: 'Defining the project spike object',
            slug: 'defining-the-project-spike-object',
            summary:
              'Clarifying what a project is in the portal: a live collaboration surface, not a task board.',
            threadStatus: 'active',
            lastActiveAt: sessionEndedAt,
            relatedProjects: [starterProject.id],
            visibility: 'public',
            _status: 'published',
            publishedAt,
          },
        }),
        upsert({
          collection: 'threads',
          match: { slug: 'calendar-and-session-coordination' },
          payload,
          data: {
            title: 'Calendar and session coordination',
            slug: 'calendar-and-session-coordination',
            summary: 'Making the next live moment visible and easy to add to personal calendars.',
            threadStatus: 'active',
            lastActiveAt: sessionEndedAt,
            relatedProjects: [starterProject.id],
            visibility: 'public',
            _status: 'published',
            publishedAt,
          },
        }),
        upsert({
          collection: 'threads',
          match: { slug: 'contribution-ownership-and-repo-workstreams' },
          payload,
          data: {
            title: 'Contribution ownership and repo workstreams',
            slug: 'contribution-ownership-and-repo-workstreams',
            summary:
              'Reducing duplicated work by defining ownership, issue structure, and shared repo boundaries.',
            threadStatus: 'active',
            lastActiveAt: sessionEndedAt,
            relatedProjects: [starterProject.id],
            visibility: 'authenticated',
            _status: 'published',
            publishedAt,
          },
        }),
        upsert({
          collection: 'threads',
          match: { slug: 'improving-onboarding-flow' },
          payload,
          data: {
            title: 'Improving onboarding flow',
            slug: 'improving-onboarding-flow',
            summary:
              'Creating a clearer entry path beyond Discord so new contributors know what is live and where to start.',
            threadStatus: 'active',
            lastActiveAt: sessionEndedAt,
            relatedProjects: [starterProject.id],
            visibility: 'public',
            _status: 'published',
            publishedAt,
          },
        }),
      ])

    const nextCommunityEvent = await upsert({
      collection: 'events',
      match: { title: 'Community Working Session' },
      payload,
      data: {
        title: 'Community Working Session',
        summary:
          'Follow-up sync to review scaffolding, work ownership, and the first rendered brief/project surfaces.',
        startsAt: '2026-06-03T17:00:00.000Z',
        endsAt: '2026-06-03T18:00:00.000Z',
        sessionType: 'workshop',
        locationLabel: 'Discord #community-voice',
        joinURL: nextSessionJoinURL,
        calendarURL: nextSessionCalendarURL,
        discordEventURL: 'https://discord.com',
        relatedProjects: [starterProject.id],
        relatedThreads: [projectObjectThread.id, calendarThread.id, ownershipThread.id],
        visibility: 'public',
        _status: 'published',
        publishedAt,
      },
    })

    await Promise.all([
      upsert({
        collection: 'modules',
        match: { slug: 'portal-graph' },
        payload,
        data: {
          name: 'Portal Graph',
          slug: 'portal-graph',
          summary:
            'An interactive graph for exploring relationships between profiles, roles, skills, projects, sessions, and other Portal records.',
          status: 'experimental',
          visibility: 'authenticated',
          enabled: true,
          featured: true,
          sortOrder: 5,
          entryRoute: '/portal-graph',
          specURL:
            'https://github.com/example/community-portal/blob/main/docs/portal-graph-feature-spec.md',
          sourceProject: starterProject.id,
          relatedProjects: [starterProject.id],
          corePrimitiveRelationships: [{ primitive: 'profile' }],
          graduationCriteria:
            'Members use the graph to discover collaborators and understand relationships across active Portal records.',
          riskNotes:
            'Keep the module read-only until profile taxonomy and matching behavior prove useful.',
          lastReviewedAt: '2026-06-01T00:00:00.000Z',
        },
      }),
      upsert({
        collection: 'modules',
        match: { slug: 'infinite-wiki' },
        payload,
        data: {
          name: 'Infinite Wiki',
          slug: 'infinite-wiki',
          summary:
            'A source-backed knowledge module for turning reviewed community memory into durable topic pages.',
          status: 'experimental',
          visibility: 'authenticated',
          enabled: true,
          featured: true,
          sortOrder: 15,
          specURL:
            'https://github.com/example/community-portal/blob/main/docs/infinite-wiki-feature-spec.md',
          sourceProject: starterProject.id,
          relatedProjects: [starterProject.id],
          relatedThreads: [projectObjectThread.id],
          ownedCollections: [
            {
              collectionSlug: 'wikiPages',
            },
          ],
          corePrimitiveRelationships: [
            { primitive: 'project' },
            { primitive: 'thread' },
            { primitive: 'event' },
            { primitive: 'profile' },
            { primitive: 'post' },
          ],
          graduationCriteria:
            'Members use reviewed pages for project and session context, and editors can reject or improve generated drafts from clear source references.',
          riskNotes:
            'Must not publish generated pages without review or leak private/member-only source material.',
          lastReviewedAt: '2026-05-29T00:00:00.000Z',
        },
      }),
      upsert({
        collection: 'modules',
        match: { slug: 'bounty-board' },
        payload,
        data: {
          name: 'Bounty Board',
          slug: 'bounty-board',
          summary:
            'A future contribution module for surfacing scoped opportunities, rewards, and claims without turning projects into task boards.',
          status: 'idea',
          visibility: 'authenticated',
          enabled: true,
          sortOrder: 25,
          sourceProject: starterProject.id,
          relatedProjects: [starterProject.id],
          relatedThreads: [ownershipThread.id],
          corePrimitiveRelationships: [
            { primitive: 'project' },
            { primitive: 'thread' },
            { primitive: 'profile' },
            { primitive: 'activityItem' },
          ],
          graduationCriteria:
            'The portal has repeated contribution requests that need their own lifecycle beyond project CTAs.',
        },
      }),
      upsert({
        collection: 'modules',
        match: { slug: 'leaderboard' },
        payload,
        data: {
          name: 'Leaderboard',
          slug: 'leaderboard',
          summary:
            'A future recognition module for exploring aggregate contribution signals without making points the primary community goal.',
          status: 'idea',
          visibility: 'authenticated',
          enabled: true,
          sortOrder: 35,
          relatedProjects: [starterProject.id],
          corePrimitiveRelationships: [{ primitive: 'profile' }, { primitive: 'activityItem' }],
          graduationCriteria:
            'Recognition signals prove useful for discovery and celebration without incentivizing low-quality activity.',
          riskNotes:
            'Avoid broad ranking dynamics until points, badges, and props have stable meaning.',
        },
      }),
    ])

    const activityItems = await Promise.all([
      upsert({
        collection: 'activityItems',
        match: {
          title: 'Community narrowed the portal around project spikes instead of broad PM tooling.',
        },
        payload,
        data: {
          title: 'Community narrowed the portal around project spikes instead of broad PM tooling.',
          body: 'The MVP should surface active work, state, events, and contribution paths without becoming a task manager.',
          activityType: 'decision',
          happenedAt: '2026-05-11T17:00:00.000Z',
          sourceLabel: 'Community planning session',
          relatedProject: starterProject.id,
          relatedThread: projectObjectThread.id,
          relatedEvent: nextCommunityEvent.id,
          visibility: 'public',
          _status: 'published',
          publishedAt,
        },
      }),
      upsert({
        collection: 'activityItems',
        match: { title: 'Calendar-first participation was called out as a core need.' },
        payload,
        data: {
          title: 'Calendar-first participation was called out as a core need.',
          body: 'Events should make it easy for people to add session data to their own calendars instead of relying on portal visits alone.',
          activityType: 'insight',
          happenedAt: '2026-05-11T17:12:00.000Z',
          sourceLabel: 'Community planning session',
          relatedProject: starterProject.id,
          relatedThread: calendarThread.id,
          relatedEvent: nextCommunityEvent.id,
          visibility: 'public',
          _status: 'published',
          publishedAt,
        },
      }),
      upsert({
        collection: 'activityItems',
        match: { title: 'Need for a clear owner and issue structure surfaced as a blocker.' },
        payload,
        data: {
          title: 'Need for a clear owner and issue structure surfaced as a blocker.',
          body: 'Contributors want to help, but the shared repo needs clearer workstreams to avoid duplicate or conflicting implementation.',
          activityType: 'blocker',
          happenedAt: '2026-05-11T17:20:00.000Z',
          sourceLabel: 'Community planning session',
          relatedProject: starterProject.id,
          relatedThread: ownershipThread.id,
          visibility: 'authenticated',
          _status: 'published',
          publishedAt,
        },
      }),
      upsert({
        collection: 'activityItems',
        match: { title: 'Portal positioned as a pre-Discord discovery surface.' },
        payload,
        data: {
          title: 'Portal positioned as a pre-Discord discovery surface.',
          body: 'The group identified Discord as too overwhelming for first touch, so the portal should show what is live and how to join.',
          activityType: 'insight',
          happenedAt: '2026-05-11T17:28:00.000Z',
          sourceLabel: 'Community planning session',
          relatedProject: starterProject.id,
          relatedThread: onboardingThread.id,
          visibility: 'public',
          _status: 'published',
          publishedAt,
        },
      }),
    ])

    await payload.update({
      id: starterProject.id,
      collection: 'projects',
      data: {
        activityItems: activityItems.map((item) => item.id),
        threads: [
          projectObjectThread.id,
          calendarThread.id,
          ownershipThread.id,
          onboardingThread.id,
        ],
        events: [nextCommunityEvent.id],
      },
      depth: 0,
      overrideAccess: true,
    })

    await upsert({
      collection: 'dailyBriefs',
      match: { title: dailyBrief.title },
      payload,
      data: {
        ...dailyBrief,
        authors: req.user ? [req.user.id] : undefined,
        statusLabel: 'Active Now',
        focusLabel: 'Community Portal Starter',
        nextEvent: nextCommunityEvent.id,
        activityItems: activityItems.map((item) => item.id),
        threads: [
          projectObjectThread.id,
          calendarThread.id,
          ownershipThread.id,
          onboardingThread.id,
        ],
        engagementActions: [
          {
            label: 'Join next session',
            description: 'Jump into the next community working session.',
            url: nextSessionJoinURL,
            style: 'primary',
          },
          {
            label: 'Add to calendar',
            description: 'Put the next sync on your own calendar.',
            url: nextSessionCalendarURL,
            style: 'secondary',
          },
          {
            label: 'View project spike',
            description: 'See the current project state and ways to contribute.',
            url: '/projects/community-portal-starter',
            style: 'secondary',
          },
        ],
        relatedProjects: [starterProject.id],
        relatedPosts: [portalUpdatePost.id],
      },
    })

    await upsert({
      collection: 'dailyBriefs',
      match: { title: 'Weekly Brief: Project Spike Momentum' },
      payload,
      data: {
        title: 'Weekly Brief: Project Spike Momentum',
        briefDate: '2026-05-11T12:00:00.000Z',
        briefType: 'weekly',
        summary:
          'This week the community narrowed the portal around live project spikes, public sessions, and clear ways to join active work.',
        statusLabel: 'Weekly',
        focusLabel: 'Community Portal Starter',
        sections: [
          {
            heading: 'Project surfaces over project management',
            body: 'The community aligned on surfacing project state, threads, activity, and contribution paths without building a heavy task system.',
          },
          {
            heading: 'Calendar is the public pull',
            body: 'Upcoming sessions need to be visible and easy to add to a personal calendar so participation does not depend on Discord discovery.',
          },
          {
            heading: 'Join after seeing signal',
            body: 'The public page should show real activity first, then route people into the portal when they are ready to participate.',
          },
        ],
        content: lexicalRoot([
          headingNode('h2', [text('Project spike momentum')]),
          paragraphNode(
            'The weekly brief is the public version of the community snapshot. It should be useful on its own while pointing people toward joining for daily context and contribution paths.',
          ),
        ]),
        mediaType: 'remotion-scene',
        nextEvent: nextCommunityEvent.id,
        activityItems: activityItems.map((item) => item.id),
        threads: [projectObjectThread.id, calendarThread.id, onboardingThread.id],
        engagementActions: [
          {
            label: 'Join the community',
            description: 'Create an account to follow daily briefs and contribution paths.',
            url: '/join',
            style: 'primary',
          },
          {
            label: 'View sessions',
            description: 'See upcoming public sessions and calendar links.',
            url: '/events',
            style: 'secondary',
          },
        ],
        visibility: 'public',
        sourceNotes: 'Public weekly starter brief assembled from the community planning session.',
        authors: req.user ? [req.user.id] : undefined,
        relatedProjects: [starterProject.id],
        relatedPosts: [portalUpdatePost.id],
        _status: 'published',
        publishedAt,
      },
    })

    await Promise.all(
      pageCopySeeds.map((copy) =>
        upsert({
          collection: 'pageCopy',
          data: copy as RequiredDataFromCollectionSlug<'pageCopy'>,
          match: { key: copy.key },
          payload,
        }),
      ),
    )

    payload.logger.info('Portal starter content upserted successfully.')
  } finally {
    req.context.disableSearchSync = previousDisableSearchSync
    req.context.disableRevalidate = previousDisableRevalidate
  }
}
