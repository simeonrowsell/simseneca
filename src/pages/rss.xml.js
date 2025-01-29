import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';
import { marked } from 'marked';

import { GLOBAL_STRINGS } from '../constants/strings';
const site_title = GLOBAL_STRINGS.SITE_TITLE;
const site_desc = GLOBAL_STRINGS.SITE_DESC;

export async function GET(context) {
  const allPosts = import.meta.glob('../pages/posts/**/*.md', { eager: true });  
  const posts = Object.values(allPosts);

  const items = posts.map((post) => {

    // Convert markdown to HTML first, then sanitize
    const htmlContent = marked.parse(post.rawContent());

    return {      
      ...post.frontmatter,      
      content: `<![CDATA[${sanitizeHtml(htmlContent, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'a', 'b', 'u', 'i']),
        allowedAttributes: {
          a: ['href', 'title'],
          img: ['src', 'alt'],
        },
      })}<![CDATA[>`,
    };
  });

  return rss({
    title: site_title ? site_title : 'Sim Seneca | Product designer, human being',
    description: site_desc ? site_desc : 'Sim Seneca\'s space on the web',
    site: context.site,
    xmlns: {
      content: "http://purl.org/rss/1.0/modules/content/",
      dc: "http://purl.org/dc/elements/1.1/"
    },
    customData: `
      <language>en-uk</language>
    `,
    items
  });
}