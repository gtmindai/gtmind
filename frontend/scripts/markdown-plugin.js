import { Marked } from "marked";
import { parse as parseYaml } from "yaml";

// Turns `src/content/blog/*.md` into a JS module at build time, so neither the
// markdown parser nor the raw markdown ever ships to the browser. Importing
// `post.md?meta` leaves out the article itself (body, FAQ, table of contents),
// so the blog index and cards load without pulling in every post.

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;
const COMPONENT = /<!--\s*component:([\w-]+)\s*-->/g;

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;|&#\d+;/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function stripTags(html) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"');
}

export function compileMarkdown(source, id) {
  const match = source.match(FRONTMATTER);
  if (!match) throw new Error(`${id}: missing frontmatter`);
  const data = parseYaml(match[1]);
  const body = source.slice(match[0].length);

  const toc = [];
  const used = new Set();
  const marked = new Marked({
    gfm: true,
    renderer: {
      heading({ tokens, depth }) {
        const html = this.parser.parseInline(tokens);
        let slug = slugify(html);
        for (let n = 2; used.has(slug); n++) slug = `${slugify(html)}-${n}`;
        used.add(slug);
        if (depth === 2) toc.push({ id: slug, text: stripTags(html) });
        return `<h${depth} id="${slug}">${html}</h${depth}>\n`;
      },
      link({ href, title, tokens }) {
        const text = this.parser.parseInline(tokens);
        const external = /^https?:\/\//.test(href) && !href.includes("gtmind.in");
        const attrs = [`href="${href}"`];
        if (title) attrs.push(`title="${title.replace(/&/g, "&amp;").replace(/"/g, "&quot;")}"`);
        if (external) attrs.push('target="_blank"', 'rel="noopener"');
        return `<a ${attrs.join(" ")}>${text}</a>`;
      },
    },
  });

  const html = marked
    .parse(body)
    .replace(/<table>/g, '<div class="table-wrap"><table>')
    .replace(/<\/table>/g, "</table></div>");

  const parts = [];
  let last = 0;
  for (const m of html.matchAll(COMPONENT)) {
    parts.push({ type: "html", html: html.slice(last, m.index) });
    parts.push({ type: "component", name: m[1] });
    last = m.index + m[0].length;
  }
  parts.push({ type: "html", html: html.slice(last) });

  const wordCount = stripTags(html).split(/\s+/).filter(Boolean).length;

  return {
    ...data,
    published: String(data.published),
    updated: String(data.updated ?? data.published),
    parts,
    toc,
    wordCount,
    readingTime: Math.max(1, Math.round(wordCount / 230)),
  };
}

export default function markdownPlugin() {
  return {
    name: "gtmind-markdown",
    transform(source, id) {
      const [file, query] = id.split("?");
      if (!file.endsWith(".md")) return null;
      const post = compileMarkdown(source, file);
      if (query === "meta") {
        delete post.parts;
        delete post.faq;
        delete post.toc;
      }
      return { code: `export default ${JSON.stringify(post)};`, map: null };
    },
  };
}
