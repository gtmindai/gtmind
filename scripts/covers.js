// Generates blog cover images (designed as SVG, rendered to 1200×630 PNG), the default social
// image and the logo used in structured data. Run after adding or retitling a
// post:  npm run covers

import { Resvg } from "@resvg/resvg-js";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const fontDir = join(root, "scripts", "fonts");
const fontFiles = (await readdir(fontDir)).filter((f) => f.endsWith(".ttf")).map((f) => join(fontDir, f));

const W = 1200;
const H = 630;

// Every cover shares the site's near-black; the category sets the accent.
const THEMES = {
  "GTM & RevOps": { bg: "#111113", accent: "#9AA6FF", soft: "#232327" },
  "AI agents": { bg: "#111113", accent: "#F2C27B", soft: "#232327" },
  "AI search": { bg: "#111113", accent: "#8FE0C8", soft: "#232327" },
  "Revenue measurement": { bg: "#111113", accent: "#E4B8FF", soft: "#232327" },
};

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Greedy wrap by an average glyph width; good enough for a serif display face.
function wrap(text, maxChars) {
  const lines = [];
  let line = "";
  for (const word of text.split(/\s+/)) {
    if ((line + " " + word).trim().length > maxChars && line) {
      lines.push(line);
      line = word;
    } else line = (line + " " + word).trim();
  }
  if (line) lines.push(line);
  return lines;
}

// Right-hand illustrations, one per post, drawn in a 420×420 box.
const MOTIFS = {
  "gtm-engineer": (t) => `
    ${[
      [60, 70, "GSC"],
      [60, 210, "GA4"],
      [60, 350, "CRM"],
    ]
      .map(
        ([x, y, label]) => `
      <path d="M${x + 70} ${y} C 220 ${y}, 220 210, 300 210" fill="none" stroke="${t.accent}" stroke-opacity="0.55" stroke-width="2.5"/>
      <rect x="${x - 50}" y="${y - 26}" width="120" height="52" rx="26" fill="${t.soft}" stroke="${t.accent}" stroke-opacity="0.4"/>
      <text x="${x + 10}" y="${y + 7}" text-anchor="middle" font-family="Geist" font-weight="600" font-size="19" fill="#fff">${label}</text>`,
      )
      .join("")}
    <circle cx="340" cy="210" r="62" fill="${t.accent}"/>
    <circle cx="340" cy="210" r="86" fill="none" stroke="${t.accent}" stroke-opacity="0.35" stroke-width="2"/>
    <text x="340" y="218" text-anchor="middle" font-family="Newsreader 72pt" font-size="30" fill="${t.bg}">brain</text>`,

  "what-is-revops": (t) => `
    <circle cx="160" cy="170" r="110" fill="${t.accent}" fill-opacity="0.18" stroke="${t.accent}" stroke-width="2.5"/>
    <circle cx="290" cy="170" r="110" fill="${t.accent}" fill-opacity="0.18" stroke="${t.accent}" stroke-width="2.5"/>
    <circle cx="225" cy="285" r="110" fill="${t.accent}" fill-opacity="0.18" stroke="${t.accent}" stroke-width="2.5"/>
    <text x="120" y="150" text-anchor="middle" font-family="Geist" font-weight="600" font-size="18" fill="#fff">Marketing</text>
    <text x="330" y="150" text-anchor="middle" font-family="Geist" font-weight="600" font-size="18" fill="#fff">Sales</text>
    <text x="225" y="345" text-anchor="middle" font-family="Geist" font-weight="600" font-size="18" fill="#fff">Success</text>
    <circle cx="225" cy="210" r="14" fill="#fff"/>`,

  "ai-seo-agent": (t) => {
    const steps = ["Read", "Decide", "Act", "Learn"];
    return `
    <circle cx="210" cy="210" r="140" fill="none" stroke="${t.accent}" stroke-opacity="0.5" stroke-width="2.5" stroke-dasharray="10 12"/>
    ${steps
      .map((label, i) => {
        const a = (i / 4) * Math.PI * 2 - Math.PI / 2;
        const x = 210 + Math.cos(a) * 140;
        const y = 210 + Math.sin(a) * 140;
        return `<circle cx="${x}" cy="${y}" r="44" fill="${i === 2 ? t.accent : t.soft}" stroke="${t.accent}" stroke-width="2"/>
        <text x="${x}" y="${y + 6}" text-anchor="middle" font-family="Geist" font-weight="600" font-size="17" fill="${i === 2 ? t.bg : "#fff"}">${label}</text>`;
      })
      .join("")}
    <text x="210" y="222" text-anchor="middle" font-family="Newsreader 72pt" font-size="34" fill="#fff">SEO</text>`;
  },

  "llm-seo": (t) => `
    <rect x="20" y="60" width="380" height="210" rx="28" fill="${t.soft}" stroke="${t.accent}" stroke-opacity="0.5" stroke-width="2"/>
    <path d="M70 270 L60 320 L120 270 Z" fill="${t.soft}"/>
    <rect x="60" y="105" width="280" height="14" rx="7" fill="#fff" fill-opacity="0.85"/>
    <rect x="60" y="140" width="230" height="14" rx="7" fill="#fff" fill-opacity="0.55"/>
    <rect x="60" y="175" width="255" height="14" rx="7" fill="#fff" fill-opacity="0.55"/>
    <rect x="300" y="170" width="56" height="26" rx="8" fill="${t.accent}"/>
    <text x="328" y="189" text-anchor="middle" font-family="Geist" font-weight="600" font-size="16" fill="${t.bg}">[1]</text>
    <rect x="130" y="320" width="270" height="64" rx="18" fill="${t.accent}"/>
    <text x="265" y="360" text-anchor="middle" font-family="Geist" font-weight="600" font-size="19" fill="${t.bg}">Source: your page</text>`,

  "ai-marketing-agents": (t) => {
    const labels = ["SEO", "GEO", "Content", "Pipeline", "Analytics", "+"];
    return labels
      .map((label, i) => {
        const x = 20 + (i % 2) * 200;
        const y = 30 + Math.floor(i / 2) * 125;
        const on = i === 1 || i === 3;
        return `<rect x="${x}" y="${y}" width="180" height="105" rx="22" fill="${on ? t.accent : t.soft}" stroke="${t.accent}" stroke-opacity="0.45" stroke-width="2"/>
        <circle cx="${x + 30}" cy="${y + 32}" r="8" fill="${on ? t.bg : t.accent}"/>
        <text x="${x + 24}" y="${y + 80}" font-family="Geist" font-weight="600" font-size="20" fill="${on ? t.bg : "#fff"}">${label}</text>`;
      })
      .join("");
  },

  "website-visitor-tracking": (t) => {
    const dots = Array.from({ length: 18 }, (_, i) => {
      const x = 30 + (i % 6) * 34;
      const y = 60 + Math.floor(i / 6) * 150 + (i % 2) * 30;
      return `<circle cx="${x}" cy="${y}" r="9" fill="#fff" fill-opacity="${0.35 + (i % 3) * 0.2}"/>
      <path d="M${x + 9} ${y} C 260 ${y}, 250 210, 320 210" fill="none" stroke="${t.accent}" stroke-opacity="0.22" stroke-width="1.5"/>`;
    }).join("");
    return `${dots}
    <rect x="300" y="165" width="130" height="90" rx="22" fill="${t.accent}"/>
    <text x="365" y="203" text-anchor="middle" font-family="Geist" font-weight="600" font-size="16" fill="${t.bg}">Pricing visit</text>
    <text x="365" y="228" text-anchor="middle" font-family="Geist" font-weight="600" font-size="16" fill="${t.bg}">→ CRM task</text>`;
  },

  "seo-roi": (t) => {
    const bars = [70, 105, 95, 150, 190, 240, 300];
    return `${bars
      .map(
        (h, i) =>
          `<rect x="${30 + i * 54}" y="${370 - h}" width="38" height="${h}" rx="8" fill="${i === bars.length - 1 ? t.accent : "#fff"}" fill-opacity="${i === bars.length - 1 ? 1 : 0.2 + i * 0.08}"/>`,
      )
      .join("")}
    <path d="M40 290 L150 250 L260 200 L380 70" fill="none" stroke="${t.accent}" stroke-width="4" stroke-linecap="round"/>
    <path d="M350 64 L384 66 L376 99" fill="none" stroke="${t.accent}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="30" y="410" font-family="Geist" font-weight="600" font-size="18" fill="#fff" fill-opacity="0.7">query → page → deal</text>`;
  },

  "marketing-attribution-software": (t) => {
    const points = [
      [40, 320, "Search"],
      [130, 210, "Blog"],
      [230, 270, "Demo"],
      [320, 140, "Email"],
    ];
    return `
    <path d="M40 320 C 90 220, 110 200, 130 210 S 200 290, 230 270 S 290 150, 320 140 S 370 80, 390 60" fill="none" stroke="${t.accent}" stroke-opacity="0.6" stroke-width="3" stroke-dasharray="2 10" stroke-linecap="round"/>
    ${points
      .map(
        ([x, y, label]) => `<circle cx="${x}" cy="${y}" r="16" fill="${t.soft}" stroke="${t.accent}" stroke-width="3"/>
        <text x="${x}" y="${y + 44}" text-anchor="middle" font-family="Geist" font-weight="600" font-size="16" fill="#fff" fill-opacity="0.8">${label}</text>`,
      )
      .join("")}
    <rect x="330" y="30" width="86" height="54" rx="16" fill="${t.accent}"/>
    <text x="373" y="64" text-anchor="middle" font-family="Geist" font-weight="600" font-size="18" fill="${t.bg}">Deal</text>`;
  },

  "seo-kpis": (t) => {
    const rows = [
      ["Closed-won", 1],
      ["Pipeline", 0.85],
      ["Conversions", 0.7],
      ["CTR", 0.55],
      ["Impressions", 0.4],
    ];
    return rows
      .map(
        ([label, o], i) => `<rect x="${20 + i * 22}" y="${40 + i * 72}" width="${380 - i * 44}" height="56" rx="16" fill="${i === 0 ? t.accent : "#fff"}" fill-opacity="${i === 0 ? 1 : o * 0.35}"/>
        <text x="${44 + i * 22}" y="${75 + i * 72}" font-family="Geist" font-weight="600" font-size="19" fill="${i === 0 ? t.bg : "#fff"}">${label}</text>`,
      )
      .join("");
  },

  "ai-search-visibility-tools": (t) => `
    ${[160, 115, 70]
      .map((r) => `<circle cx="210" cy="210" r="${r}" fill="none" stroke="${t.accent}" stroke-opacity="0.35" stroke-width="2"/>`)
      .join("")}
    <path d="M210 210 L 360 130" stroke="${t.accent}" stroke-width="3" stroke-linecap="round"/>
    <path d="M210 210 L360 130 A170 170 0 0 1 378 230 Z" fill="${t.accent}" fill-opacity="0.18"/>
    ${[
      [150, 120, "ChatGPT"],
      [300, 290, "Gemini"],
      [110, 290, "Perplexity"],
      [320, 170, "You"],
    ]
      .map(
        ([x, y, label], i) => `<circle cx="${x}" cy="${y}" r="${i === 3 ? 14 : 9}" fill="${i === 3 ? t.accent : "#fff"}"/>
        <text x="${x}" y="${y - 20}" text-anchor="middle" font-family="Geist" font-weight="600" font-size="16" fill="#fff" fill-opacity="${i === 3 ? 1 : 0.75}">${label}</text>`,
      )
      .join("")}`,
};

const grid = (color) => `
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0 H0 V40" fill="none" stroke="${color}" stroke-opacity="0.07" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>`;

function coverSvg(post) {
  const theme = THEMES[post.category] ?? THEMES["GTM & RevOps"];
  // Shrink the type until the title fits in three lines.
  let lines = wrap(post.coverTitle, 17);
  let size = lines.length > 2 ? 66 : 76;
  if (lines.length > 3) {
    lines = wrap(post.coverTitle, 22);
    size = 54;
  }
  const lineHeight = size * 1.08;
  const top = 315 - ((lines.length - 1) * lineHeight) / 2 + size * 0.28;
  const motif = MOTIFS[post.slug]?.(theme) ?? "";

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${theme.bg}"/>
  ${grid("#ffffff")}
  <circle cx="1010" cy="120" r="340" fill="${theme.accent}" fill-opacity="0.06"/>
  <text x="72" y="92" font-family="Geist" font-weight="600" font-size="19" letter-spacing="3.4" fill="${theme.accent}">${esc(post.category.toUpperCase())}</text>
  ${lines
    .map(
      (line, i) =>
        `<text x="70" y="${top + i * lineHeight}" font-family="Newsreader 72pt" font-weight="400" font-size="${size}" letter-spacing="-1.4" fill="#ffffff">${esc(line)}</text>`,
    )
    .join("\n  ")}
  <text x="72" y="566" font-family="Newsreader 72pt" font-weight="500" font-size="34" letter-spacing="-0.6" fill="#ffffff">gtmind</text>
  <text x="190" y="564" font-family="Geist" font-weight="500" font-size="18" fill="#ffffff" fill-opacity="0.55">gtmind.in/blog</text>
  <g transform="translate(720 105)">${motif}</g>
</svg>`;
}

// The site-wide social image: wordmark, the homepage promise, the address.
function defaultSvg() {
  const black = "#111113";
  const muted = "#8B8B93";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <radialGradient id="light" cx="0.95" cy="0" r="0.9">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.09"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="${black}"/>
  <rect width="${W}" height="${H}" fill="url(#light)"/>

  <rect x="80" y="80" width="46" height="46" rx="12" fill="#ffffff"/>
  <text x="103" y="113" text-anchor="middle" font-family="Newsreader 72pt" font-size="32" fill="${black}">g</text>
  <text x="142" y="115" font-family="Newsreader 72pt" font-weight="500" font-size="36" letter-spacing="-0.6" fill="#ffffff">gtmind</text>

  <text font-family="Newsreader 72pt" font-size="76" letter-spacing="-2" fill="#ffffff">
    <tspan x="76" y="298">Every source. One brain.</tspan>
    <tspan x="76" y="382" fill="${muted}">A number on every play.</tspan>
  </text>

  <rect x="80" y="506" width="1040" height="1" fill="#ffffff" fill-opacity="0.14"/>
  <text x="80" y="552" font-family="Geist" font-weight="500" font-size="20" fill="#ffffff" fill-opacity="0.85">The GTM brain for B2B teams</text>
  <text x="1120" y="552" text-anchor="end" font-family="Geist" font-weight="500" font-size="20" fill="${muted}">gtmind.in</text>
</svg>`;
}

const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#111113"/><text x="16" y="23" text-anchor="middle" font-family="Newsreader 72pt" font-size="22" fill="#fff">g</text></svg>`;

function png(svg, width) {
  return new Resvg(svg, {
    fitTo: { mode: "width", value: width },
    font: { fontFiles, loadSystemFonts: false, defaultFontFamily: "Geist" },
  })
    .render()
    .asPng();
}

async function out(path, data) {
  const target = join(root, "public", path);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, data);
}

const contentDir = join(root, "src", "content", "blog");
const posts = [];
for (const file of (await readdir(contentDir)).filter((f) => f.endsWith(".md"))) {
  const source = await readFile(join(contentDir, file), "utf8");
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (match) posts.push(parseYaml(match[1]));
}

for (const post of posts) {
  await out(`blog/covers/${post.slug}.png`, png(coverSvg(post), W));
}
await out("og/default.png", png(defaultSvg(), W));
await out("brand/logo.png", png(logoSvg, 512));

console.log(`Wrote ${posts.length} covers, og/default.png and brand/logo.png`);
