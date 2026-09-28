// Every post is a Markdown file in src/content/blog, compiled at build time
// by scripts/markdown-plugin.js. ORDER sets how the index lists them.

const ORDER = [
  "gtm-engineer",
  "what-is-revops",
  "ai-seo-agent",
  "llm-seo",
  "ai-marketing-agents",
  "website-visitor-tracking",
  "seo-roi",
  "marketing-attribution-software",
  "seo-kpis",
  "ai-search-visibility-tools",
];

const metas = import.meta.glob("../content/blog/*.md", { eager: true, import: "default", query: "?meta" });

// Rendered bodies, one lazily loaded chunk per post.
const bodies = import.meta.glob("../content/blog/*.md", { import: "default" });

const rank = (slug) => {
  const i = ORDER.indexOf(slug);
  return i === -1 ? ORDER.length : i;
};

export const POSTS = Object.values(metas).sort((a, b) => rank(a.slug) - rank(b.slug));

export const getPost = (slug) => POSTS.find((post) => post.slug === slug);

const pending = new Map();
const loaded = new Map();

// A cached promise of the post's article (body parts, FAQ, table of
// contents), for React's `use`. Files are
// named after their slug.
export function loadBody(slug) {
  if (!pending.has(slug)) {
    const load = bodies[`../content/blog/${slug}.md`]().then(({ parts, faq, toc }) => {
      const article = { parts, faq, toc };
      loaded.set(slug, article);
      return article;
    });
    pending.set(slug, load);
  }
  return pending.get(slug);
}

// The article if it's already loaded, so rendering doesn't have to suspend.
export const getLoadedBody = (slug) => loaded.get(slug);

// The prerenderer loads every article up front so renderToString never suspends.
export const preloadBodies = () => Promise.all(POSTS.map((post) => loadBody(post.slug)));

export const coverUrl = (slug) => `/blog/covers/${slug}.png`;

export const BLOG = {
  title: "gtmind Blog: GTM Engineering, AI Agents & SEO ROI",
  heading: "Notes on the GTM brain",
  description:
    "Practical guides on GTM engineering, RevOps, AI marketing agents, LLM SEO and measuring SEO in revenue — from the team building gtmind.",
};
