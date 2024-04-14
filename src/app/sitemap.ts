// sitemap.ts

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const URL = process.env.HOST
  return [
    {
      url: 'https://petslove.app/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },

    {
      url: 'https://petslove.app/terms/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${URL}/paySuccess`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${URL}/payError`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}
