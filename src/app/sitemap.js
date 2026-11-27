import { projects, site } from '../data/portfolio.js';

export const dynamic = 'force-static';

export default function sitemap() {
  return [
    { url: site.url, priority: 1 },
    ...projects.map((p) => ({ url: `${site.url}projects/${p.slug}/`, priority: 0.7 })),
  ];
}
