import type { MetadataRoute } from 'next';
import { getCampers } from '@/services/campers';
import { getSiteUrl } from '@/lib/seo';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/catalog`,
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];

  try {
    const campers: MetadataRoute.Sitemap = [];
    let page = 1;
    let totalPages = 1;

    while (page <= totalPages && page <= 10) {
      const data = await getCampers({ page, perPage: 4 });
      totalPages = data.totalPages;
      campers.push(
        ...data.campers.map((camper) => ({
          url: `${siteUrl}/catalog/${camper.id}`,
          changeFrequency: 'weekly' as const,
          priority: 0.6,
        })),
      );
      page += 1;
    }

    return [...staticRoutes, ...campers];
  } catch {
    return staticRoutes;
  }
}
