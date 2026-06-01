import type { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: siteConfig.description,
  images: [
    {
      alt: siteConfig.name,
      height: 166,
      url: `${getServerSideURL()}/assets/image.png`,
      width: 589,
    },
  ],
  siteName: siteConfig.name,
  title: `${siteConfig.name} | Find the work already in motion`,
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
