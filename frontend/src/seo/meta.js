import { SITE } from "../config/site";
import { BLOG, coverUrl, getLoadedBody, getPost, POSTS } from "../data/blog";
import { LEGAL_PAGES } from "../data/legal";

// One source of truth for every route's <head>. The prerender script writes
// it into static HTML; the client re-applies it on navigation (see head.js).

const HOME_TITLE = "gtmind — The GTM brain for B2B teams";
const HOME_DESCRIPTION =
  "The GTM brain: one model of your CRM, analytics and search data, and agents that act on the plays with the most revenue attached.";

// Bump when the homepage or legal pages change, so the sitemap's lastmod stays honest.
const SITE_UPDATED = "2026-09-28";

const DEFAULT_IMAGE = { url: "/og/default.png", alt: HOME_TITLE };

const abs = (path) => `${SITE.url}${path}`;

const ORGANIZATION = {
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  url: `${SITE.url}/`,
  logo: { "@type": "ImageObject", url: abs("/brand/logo.png"), width: 512, height: 512 },
  email: SITE.email,
};

const WEBSITE = {
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  url: `${SITE.url}/`,
  publisher: { "@id": ORGANIZATION["@id"] },
  inLanguage: "en",
};

function breadcrumbs(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: abs(path),
    })),
  };
}

function postMeta(post) {
  // The FAQ lives in the post's own chunk. The prerenderer always has it; on
  // in-browser navigation it may still be loading, which only drops FAQPage
  // from the live DOM's JSON-LD, never from the HTML crawlers are served.
  const faq = getLoadedBody(post.slug)?.faq ?? [];
  const path = `/blog/${post.slug}`;
  const image = { url: coverUrl(post.slug), alt: post.coverAlt };

  return {
    title: post.title,
    description: post.description,
    path,
    image,
    type: "article",
    article: { published: post.published, updated: post.updated, section: post.category, tags: post.keywords },
    jsonLd: [
      {
        "@type": "BlogPosting",
        "@id": `${abs(path)}#article`,
        headline: post.h1,
        description: post.description,
        image: { "@type": "ImageObject", url: abs(image.url), width: 1200, height: 630 },
        datePublished: post.published,
        dateModified: post.updated,
        author: { "@type": "Organization", name: `${SITE.name} team`, url: `${SITE.url}/` },
        publisher: { "@id": ORGANIZATION["@id"] },
        mainEntityOfPage: { "@type": "WebPage", "@id": abs(path) },
        articleSection: post.category,
        keywords: post.keywords?.join(", "),
        wordCount: post.wordCount,
        inLanguage: "en",
      },
      ...(faq.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: faq.map(({ q, a }) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: { "@type": "Answer", text: a },
              })),
            },
          ]
        : []),
      breadcrumbs([
        ["Home", "/"],
        ["Blog", "/blog"],
        [post.h1, path],
      ]),
      ORGANIZATION,
    ],
  };
}

export function getMeta(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";

  if (path === "/") {
    return {
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      path,
      image: DEFAULT_IMAGE,
      type: "website",
      jsonLd: [ORGANIZATION, WEBSITE],
    };
  }

  if (path === "/blog") {
    return {
      title: BLOG.title,
      description: BLOG.description,
      path,
      image: DEFAULT_IMAGE,
      type: "website",
      jsonLd: [
        {
          "@type": "Blog",
          "@id": `${abs(path)}#blog`,
          name: `${SITE.name} Blog`,
          description: BLOG.description,
          url: abs(path),
          publisher: { "@id": ORGANIZATION["@id"] },
          blogPost: POSTS.map((post) => ({
            "@type": "BlogPosting",
            headline: post.h1,
            url: abs(`/blog/${post.slug}`),
            datePublished: post.published,
          })),
        },
        breadcrumbs([
          ["Home", "/"],
          ["Blog", "/blog"],
        ]),
        ORGANIZATION,
      ],
    };
  }

  const blogSlug = path.match(/^\/blog\/([\w-]+)$/)?.[1];
  const post = blogSlug && getPost(blogSlug);
  if (post) return postMeta(post);

  const legal = LEGAL_PAGES.find((page) => `/${page.slug}` === path);
  if (legal) {
    return {
      title: `${legal.title} · ${SITE.name}`,
      description: legal.lede,
      path,
      image: DEFAULT_IMAGE,
      type: "website",
      jsonLd: [],
    };
  }

  return {
    title: `Page not found · ${SITE.name}`,
    description: HOME_DESCRIPTION,
    path,
    image: DEFAULT_IMAGE,
    type: "website",
    noindex: true,
    jsonLd: [],
  };
}

// Every indexable route, for prerendering and the sitemap.
export function allRoutes() {
  const latestPost = POSTS.reduce((latest, post) => (post.updated > latest ? post.updated : latest), SITE_UPDATED);
  return [
    { path: "/", lastmod: SITE_UPDATED },
    { path: "/blog", lastmod: latestPost },
    ...POSTS.map((post) => ({ path: `/blog/${post.slug}`, lastmod: post.updated })),
    ...LEGAL_PAGES.map((page) => ({ path: `/${page.slug}`, lastmod: SITE_UPDATED })),
  ];
}
