// Runs after the client and server builds: renders every route to static HTML
// (so crawlers and AI bots that don't run JavaScript see real content and
// per-page tags), then writes sitemap.xml and the blog RSS feed.

import { existsSync } from "node:fs";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const serverEntry = join(root, "dist-server", "entry-server.js");

const { render, renderHead, getMeta, allRoutes, POSTS, preloadBodies } = await import(pathToFileURL(serverEntry).href);
await preloadBodies();
const { SITE } = await import(pathToFileURL(join(root, "src", "config", "site.js")).href);

const missingCovers = POSTS.filter((post) => !existsSync(join(dist, "blog", "covers", `${post.slug}.png`)));
if (missingCovers.length) {
  throw new Error(`Missing cover images for: ${missingCovers.map((p) => p.slug).join(", ")}. Run \`npm run covers\`.`);
}

const template = await readFile(join(dist, "index.html"), "utf8");
if (!template.includes("<!--app-head-->") || !template.includes('<div id="root"></div>')) {
  throw new Error("dist/index.html is missing the <!--app-head--> or root placeholder");
}

function page(url) {
  return template
    .replace("<!--app-head-->", renderHead(getMeta(url)))
    .replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`);
}

async function write(file, contents) {
  const target = join(dist, file);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, contents);
}

const routes = allRoutes();
for (const { path } of routes) {
  // vercel.json sets cleanUrls, so /blog/foo is served from blog/foo.html.
  await write(path === "/" ? "index.html" : `${path.slice(1)}.html`, page(path));
}
await write("404.html", page("/404"));

const escapeXml = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${routes
  .map(({ path, lastmod }) => {
    const post = POSTS.find((p) => `/blog/${p.slug}` === path);
    const image = post
      ? `\n    <image:image><image:loc>${SITE.url}/blog/covers/${post.slug}.png</image:loc></image:image>`
      : "";
    return `  <url>\n    <loc>${SITE.url}${path === "/" ? "/" : path}</loc>\n    <lastmod>${lastmod}</lastmod>${image}\n  </url>`;
  })
  .join("\n")}
</urlset>
`;
await write("sitemap.xml", sitemap);

const rssDate = (iso) => new Date(`${iso}T09:00:00Z`).toUTCString();
const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${SITE.name} Blog`)}</title>
    <link>${SITE.url}/blog</link>
    <atom:link href="${SITE.url}/blog/rss.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml(getMeta("/blog").description)}</description>
    <language>en</language>
${POSTS.map(
  (post) => `    <item>
      <title>${escapeXml(post.h1)}</title>
      <link>${SITE.url}/blog/${post.slug}</link>
      <guid>${SITE.url}/blog/${post.slug}</guid>
      <pubDate>${rssDate(post.published)}</pubDate>
      <category>${escapeXml(post.category)}</category>
      <description>${escapeXml(post.description)}</description>
    </item>`,
).join("\n")}
  </channel>
</rss>
`;
await write("blog/rss.xml", rss);

await rm(join(root, "dist-server"), { recursive: true, force: true });
console.log(`Prerendered ${routes.length} routes + 404, sitemap.xml and blog/rss.xml`);
