import { SITE } from "../config/site";

// Turns a meta object from meta.js into head tags — as an HTML string for the
// prerenderer, or applied to the live document on client-side navigation.
// Every managed tag carries `data-head` so it can be swapped cleanly.

const abs = (path) => (path.startsWith("http") ? path : `${SITE.url}${path}`);

function tags(meta) {
  const url = abs(meta.path);
  const image = abs(meta.image.url);
  const list = [
    ["meta", { name: "description", content: meta.description }],
    ["link", { rel: "canonical", href: url }],
    ["meta", { name: "robots", content: meta.noindex ? "noindex, follow" : "index, follow, max-image-preview:large" }],
    ["meta", { property: "og:site_name", content: SITE.name }],
    ["meta", { property: "og:type", content: meta.type }],
    ["meta", { property: "og:title", content: meta.title }],
    ["meta", { property: "og:description", content: meta.description }],
    ["meta", { property: "og:url", content: url }],
    ["meta", { property: "og:image", content: image }],
    ["meta", { property: "og:image:width", content: "1200" }],
    ["meta", { property: "og:image:height", content: "630" }],
    ["meta", { property: "og:image:alt", content: meta.image.alt }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: meta.title }],
    ["meta", { name: "twitter:description", content: meta.description }],
    ["meta", { name: "twitter:image", content: image }],
  ];

  if (meta.article) {
    list.push(
      ["meta", { property: "article:published_time", content: meta.article.published }],
      ["meta", { property: "article:modified_time", content: meta.article.updated }],
      ["meta", { property: "article:section", content: meta.article.section }],
      ...(meta.article.tags ?? []).map((tag) => ["meta", { property: "article:tag", content: tag }]),
    );
  }

  return list;
}

function jsonLd(meta) {
  if (!meta.jsonLd.length) return null;
  // Escape "<" so a string value can never close the script tag.
  return JSON.stringify({ "@context": "https://schema.org", "@graph": meta.jsonLd }).replace(/</g, "\\u003c");
}

const escapeAttr = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function renderHead(meta) {
  const lines = [`<title>${escapeAttr(meta.title)}</title>`];
  for (const [tag, attrs] of tags(meta)) {
    const attrString = Object.entries(attrs)
      .map(([key, value]) => `${key}="${escapeAttr(value)}"`)
      .join(" ");
    lines.push(`<${tag} ${attrString} data-head />`);
  }
  const ld = jsonLd(meta);
  if (ld) lines.push(`<script type="application/ld+json" data-head>${ld}</script>`);
  return lines.join("\n    ");
}

export function applyHead(meta) {
  document.title = meta.title;
  document.head.querySelectorAll("[data-head]").forEach((el) => el.remove());

  const fragment = document.createDocumentFragment();
  for (const [tag, attrs] of tags(meta)) {
    const el = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) el.setAttribute(key, value);
    el.setAttribute("data-head", "");
    fragment.append(el);
  }
  const ld = jsonLd(meta);
  if (ld) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-head", "");
    script.textContent = ld;
    fragment.append(script);
  }
  document.head.append(fragment);
}
