import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context: any) {
  const rssItems = await pagesGlobToRssItems(import.meta.glob('./**/*.md'));

  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    items: rssItems,
    customData: `<language>en-us</language>`,
  });
}