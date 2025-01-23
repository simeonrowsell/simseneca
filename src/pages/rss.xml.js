import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';
import { marked } from 'marked';

export async function GET(context) {
  const allPosts = import.meta.glob('../pages/posts/**/*.md', { eager: true });  
  const posts = Object.values(allPosts);

  const items = posts.map((post) => {
    // console.log("Post raw content:", post.rawContent()); // Debug log

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
    title: 'Sim Seneca | Product designer, human being',
    description: 'The personal site of Sim Seneca',
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