export const NAV_LINKS = [
  { label: "How it works", href: "/#how" },
  { label: "Sources", href: "/#sources" },
  { label: "Agents", href: "/#agents" },
  { label: "FAQ", href: "/#faq" },
];

export const HERO_NOTES = ["Thirty minutes", "Read-only access", "No slides"];

export const HERO_SETUP_POINTS = [
  "Search Console, GA4 and your CRM.",
  "Read-only, revocable any time.",
  "Nothing to prepare on your side.",
];

export const HERO_RESULT_POINTS = [
  { text: "Each play is a specific job with a dollar figure.", color: "var(--color-info)" },
  { text: "Ordered by how fast the money comes back.", color: "var(--color-success)" },
  { text: "If the number is small, it says so.", color: "var(--color-danger)" },
];

export const GAPS = [
  { source: "Search Console", color: "#4285F4", knows: "Knows the query that brought them in.", misses: "Not the deal it became." },
  { source: "Your CRM", color: "#FF7A59", knows: "Knows the deal.", misses: "Not the page that started it." },
  { source: "Your content team", color: "#7B5CE6", knows: "Knows the calendar.", misses: "Not which article moved revenue." },
];

export const LOOP_STEPS = [
  {
    title: "Read",
    kicker: "Step one — Read",
    heading: "One model of how you actually sell.",
    detail: "Joins Search Console, GA4, your CRM and every published page, refreshed hourly. Not a weekly export — a standing picture of your market.",
    evidenceTitle: "What the brain holds",
    evidence: [
      ["Search queries tracked", "1,284"],
      ["Open deals matched to sessions", "164"],
      ["Published pages indexed", "1,046"],
    ],
  },
  {
    title: "Decide",
    kicker: "Step two — Decide",
    heading: "Scored on your wins, not a benchmark.",
    detail: "Every finding gets a revenue figure, a confidence and an effort — modelled on your own closed-won deals, then ranked.",
    evidenceTitle: "Top play this week",
    evidence: [
      ["Comparison page vs. main competitor", "$42K / mo"],
      ["Confidence", "89%"],
      ["Effort", "Medium"],
    ],
  },
  {
    title: "Act",
    kicker: "Step three — Act",
    heading: "The work gets done, not just listed.",
    detail: "Agents do what you approve — draft the page, fix the metadata, add the internal links, push the segment to the CRM.",
    evidenceTitle: "Shipped for that play",
    evidence: [
      ["Page drafted and reviewed", "Done"],
      ["Internal links added", "11"],
      ["FAQ and product schema", "Added"],
    ],
  },
  {
    title: "Learn",
    kicker: "Step four — Learn",
    heading: "It checks whether the number moved.",
    detail: "Watches the result for three to six weeks, reports it honestly, and feeds it back so the next round of scores is sharper.",
    evidenceTitle: "Six weeks later",
    evidence: [
      ["Ranking position", "14 → 6"],
      ["Pipeline attributed", "+$18K", true],
      ["Score accuracy on your site", "89%"],
    ],
  },
];

export const SOURCES = {
  hs: { name: "HubSpot", color: "#FF5C35" },
  sf: { name: "Salesforce", color: "#00A1E0" },
  pd: { name: "pipedrive", color: "#1A7F4B" },
  sh: { name: "Shopify", color: "#5E8E3E" },
  ga: { name: "Google Analytics", color: "#E37400" },
  gsc: { name: "Search Console", color: "#4285F4" },
  wf: { name: "Webflow", color: "#146EF5" },
  wp: { name: "WordPress", color: "#21759B" },
  sl: { name: "Slack", color: "#4A154B" },
  st: { name: "Stripe", color: "#635BFF" },
  gm: { name: "Gmail", color: "#D93025" },
  ad: { name: "Google Ads", color: "#1A73E8" },
};

// "." empty, "g" light, "G" dark, otherwise a source key.
export const SOURCE_BOARD = [
  ". g . . . . . gm",
  "sf . . sh . G . .",
  ". G . . hs . . .",
  "g . sl . . g wf .",
  ". pd . g gsc . . .",
  ". . ad . ga . . st",
];

export const AGENTS = [
  {
    key: "seo",
    name: "SEO agent",
    color: "#2E3A66",
    headline: "Pages that slipped start climbing back.",
    meta: [["Finds", "decaying pages"], ["Does", "refreshes, links, metadata"]],
  },
  {
    key: "geo",
    name: "GEO agent",
    color: "#1F4E4A",
    headline: "You become the answer ChatGPT gives.",
    meta: [["Watches", "ChatGPT, Gemini, Perplexity, AI Overviews"], ["Does", "writes what gets cited"]],
  },
  {
    key: "content",
    name: "Content agent",
    color: "#7A4535",
    headline: "Briefs become published pages, without the handoffs.",
    meta: [["Finds", "demand with no page behind it"], ["Does", "brief, draft, schema, publish"]],
  },
  {
    key: "pipeline",
    name: "Pipeline agent",
    color: "#4A3558",
    headline: "Accounts that read pricing get a timely follow-up.",
    meta: [["Finds", "high-intent accounts"], ["Does", "pushes the segment to your CRM"]],
  },
  {
    key: "analytics",
    name: "Analytics agent",
    color: "#3F4A2C",
    headline: "Every drop has a cause before anyone asks.",
    meta: [["Watches", "traffic, conversion, deploys"], ["Does", "traces the cause, flags the fix"]],
  },
];

export const CALENDAR_SLOTS = [
  { time: "09:00", open: true },
  { time: "09:30", open: false },
  { time: "10:30", open: true },
  { time: "11:00", open: true },
  { time: "14:00", open: true },
  { time: "15:30", open: false },
];

export const BUILD_SOURCES = [
  { name: "Search Console", color: "#4285F4" },
  { name: "Analytics 4", color: "#E37400" },
  { name: "HubSpot", color: "#FF5C35" },
];

export const PRINCIPLES = [
  {
    icon: "eye",
    title: "Read-only by default",
    text: "The brain reads. Nothing is written back until you switch an agent on.",
  },
  {
    icon: "revert",
    title: "Every change is reversible",
    text: "Agents never delete. Each edit is a revision you can roll back in one click.",
  },
  {
    icon: "shield",
    title: "Your data stays yours",
    text: "Your records build your brain only. They are never pooled or used for anyone else.",
  },
];

export const FAQS = [
  {
    q: "What exactly is a \"GTM brain\"?",
    a: "A single, persistent model of your go-to-market: your brand and buyers, your search demand, your content, and which deals each of those touched. Most tools each hold one of those pieces. The brain holds them together, remembers what worked, and uses that to decide what to do next.",
  },
  {
    q: "Do you need write access to anything?",
    a: "No. Everything starts read-only. Write access is only requested for the specific agent you turn on — for example, publishing to your CMS — and you can revoke it at any time.",
  },
  {
    q: "Which systems do you connect to?",
    a: "Search Console and GA4 for search and site behaviour; HubSpot, Salesforce or Pipedrive for pipeline; Shopify if you sell online; Webflow or WordPress if you want agents to publish. Six months of history is enough to start.",
  },
  {
    q: "How is this different from an SEO or analytics tool?",
    a: "Those tell you what happened on one surface. The brain joins the surfaces, prices each finding against your own closed-won data, then does the work and checks whether the number moved.",
  },
  {
    q: "What happens on the meeting?",
    a: "Thirty minutes. We look at your stack and the questions you already have about where revenue is coming from. No slides. If it is not a fit, we will say so.",
  },
  {
    q: "How long until we see something?",
    a: "The first ranked list of plays arrives the morning after you connect. Ranking and citation movement from the work usually shows within four to eight weeks.",
  },
];

export const FOOTER_COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#", soon: true },
      { label: "Contact", booking: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "#" },
      { label: "Terms of service", href: "#" },
      { label: "Data handling", href: "#" },
      { label: "Cookie settings", href: "#" },
    ],
  },
];
