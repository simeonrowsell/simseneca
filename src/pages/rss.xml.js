import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Sim Seneca | Product designer, blogger, human-being',
    description: 'The personal site of Sim Seneca',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-uk</language>`,
  });
}