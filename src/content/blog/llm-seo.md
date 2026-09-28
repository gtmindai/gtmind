---
slug: "llm-seo"
title: "LLM SEO: How to Get Cited by ChatGPT, Gemini & Perplexity"
h1: "LLM SEO: How to Get Your Brand Cited in AI Answers"
description: "LLM SEO is how you get your brand cited in AI answers. A practical playbook: crawler access, answer-first pages, entity signals and measuring citations."
excerpt: "LLM SEO gets your pages cited in ChatGPT, Gemini, Perplexity and AI Overviews. A five-step playbook, from crawler access to tying citations to pipeline."
category: "AI search"
coverTitle: "LLM SEO: get cited in AI answers"
coverAlt: "Diagram of the LLM SEO loop: AI crawler fetches a prerendered page, the model retrieves and cites it, and the citation is traced through sessions to pipeline"
primaryKeyword: "llm seo"
keywords: ["llm seo", "how to rank in chatgpt", "how to get cited by chatgpt", "generative engine optimization", "answer engine optimization", "llm seo vs geo", "llm seo tools", "llm seo framework"]
published: 2026-09-28
updated: 2026-09-28
related: ["ai-search-visibility-tools", "ai-seo-agent", "seo-kpis"]
cta: "See which AI answers already cite you, and which pages would move pipeline next. Book the 30-minute read-only walkthrough."
faq:
  - q: "What is LLM in SEO?"
    a: "LLM stands for large language model, the technology behind ChatGPT, Gemini, Claude and Perplexity. In SEO, it refers to optimizing so these models retrieve, trust and cite your pages when they answer a question. The work overlaps heavily with classic SEO: crawlable pages, clear answers, strong entity signals. The difference is that the win is a citation or brand mention inside an answer, not a blue link."
  - q: "Is SEO dead now with AI?"
    a: "No. AI search engines retrieve from web indexes, so pages that cannot be crawled or ranked rarely get cited. Google states there are no extra requirements to appear in AI Overviews or AI Mode beyond being indexed and eligible for a snippet. What has changed is the measurement: fewer clicks per query, more value in being named inside the answer itself."
  - q: "Which LLM is best for SEO?"
    a: "There is no single best model for SEO work. Any leading model can draft outlines, rewrite metadata or cluster keywords, and quality depends more on the data you give it than the model name. For visibility, the better question is which AI engines your buyers use. Track the ones that matter to your market, usually ChatGPT, Google AI Overviews, Gemini and Perplexity."
  - q: "What is the name for LLM SEO?"
    a: "It goes by several names that describe the same practice: generative engine optimization (GEO), answer engine optimization (AEO), LLM optimization (LLMO) and AI search optimization. GEO comes from a 2023 research paper, AEO predates it and grew out of featured snippets and voice search, and LLM SEO is the plain-language version. The tactics are the same."
  - q: "Can ChatGPT do SEO?"
    a: "ChatGPT can help with parts of SEO: drafting briefs, writing title variants, suggesting FAQ questions and generating schema markup. It cannot see your Search Console data, your CRM or what actually ranks today unless you connect those sources. Treat it as a fast assistant that needs checking, not as a strategy. The judgment about which pages matter still comes from your own data."
---

**LLM SEO** is the practice of getting your pages retrieved, trusted and cited by large language models when they answer questions in ChatGPT, Gemini, Perplexity, Claude and Google AI Overviews. It rests on three things: AI crawlers can read your HTML, your pages state answers plainly, and the wider web confirms who you are.

**Key takeaways**

- LLM SEO, generative engine optimization (GEO) and answer engine optimization (AEO) are three names for the same work.
- Most AI crawlers do not run JavaScript. If your content only appears after client-side rendering, they see an empty page.
- Answer-first writing, tables and FAQs are easier for a model to lift and quote than long narrative.
- Third-party mentions and original data matter more than on-page tweaks once the basics are in place.
- Measure it like a funnel: prompts tracked, citations earned, AI-referred sessions, then pipeline.

## What is LLM SEO?

When someone asks ChatGPT "what's the best attribution tool for a B2B SaaS team?", the model often searches the web, reads a handful of pages and writes an answer with citations. LLM SEO is everything you do so that your page is one of the ones it reads, and your brand is one of the ones it names.

It is not a replacement for classic SEO. Google says plainly that [there are no additional requirements to appear in AI Overviews or AI Mode](https://developers.google.com/search/docs/appearance/ai-features): a page has to be indexed and eligible for a snippet, and the usual best practices apply. The same logic holds for ChatGPT search and Perplexity, which rely on their own crawlers and web indexes. If a page can't be crawled or ranked, it is unlikely to be cited.

What does change is the unit of success. In classic SEO you win a position and hope for a click. In LLM SEO you win a mention or a citation inside an answer, and the click may never happen.

### LLM SEO vs GEO vs AEO: same thing, three names

| Term | Where it came from | What it emphasizes | Use it when |
|---|---|---|---|
| LLM SEO | Practitioner shorthand | Optimizing for large language models | Talking to SEO teams |
| GEO (generative engine optimization) | [Aggarwal et al., KDD 2024](https://arxiv.org/abs/2311.09735) | Visibility inside generated answers | Citing research, board decks |
| AEO (answer engine optimization) | Featured snippets and voice search era | Being *the* answer to a question | Talking to content teams |
| LLMO / AI search optimization | Vendor and agency marketing | Same practice, broader framing | Tool comparisons |

The tactics don't change with the label. The rest of this guide uses "LLM SEO" and treats GEO and AEO as synonyms.

## How do LLMs pick sources?

A model can "know" about you in two ways.

**The training path.** Models learn from large web crawls before release. If your brand appears often and consistently across the web, the model may mention you from memory, with no citation and no link. You influence this slowly, through the entity signals covered in Step 3.

**The retrieval path.** For fresh or specific questions, assistants run a live search, fetch pages and ground the answer in them. This is where citations come from, and where most LLM SEO work pays off. It runs in three stages:

1. **Retrieval.** The assistant rewrites the user's question into one or more search queries (Microsoft calls these "grounding queries" in its [Bing Webmaster Tools AI Performance report](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)), then pulls candidate pages from an index.
2. **Synthesis.** The model reads the candidates and composes an answer. Passages that state a fact cleanly, with numbers and a named source, are easier to reuse than ones that bury the point.
3. **Citation.** The model attaches links to the passages it leaned on. Being retrieved is necessary; being quotable is what gets you the citation.

The research backs up the second and third stages. The GEO paper from Princeton and collaborators found that content changes such as adding sources, quotations and statistics [can boost visibility in generative engine responses by up to 40%](https://arxiv.org/abs/2311.09735), with results varying by domain.

## Step 1: Let AI crawlers in

Nothing else in this guide matters if the crawler can't read the page. There are two parts: permission (robots.txt) and readability (HTML the bot can actually parse).

### Know the AI crawler user agents

Each AI company runs separate bots for training, search indexing and user-triggered fetches. Blocking the training bot does not remove you from search answers, and vice versa. The names below come from each vendor's own documentation.

| Vendor | User agent | What it does | Respects robots.txt? |
|---|---|---|---|
| OpenAI | `OAI-SearchBot` | Indexes pages for ChatGPT search results | Yes |
| OpenAI | `GPTBot` | Crawls content that may train models | Yes |
| OpenAI | `ChatGPT-User` | Fetches a page when a user's request needs it | Not necessarily |
| Anthropic | `Claude-SearchBot` | Improves Claude's search results | Yes |
| Anthropic | `ClaudeBot` | Collects content that may be used for training | Yes |
| Anthropic | `Claude-User` | Fetches pages for user questions | Can be blocked |
| Perplexity | `PerplexityBot` | Indexes pages for Perplexity search; not for training | Yes |
| Perplexity | `Perplexity-User` | Fetches pages for user queries | Generally no |
| Google | `Google-Extended` | Controls Gemini training and grounding; not Search | Yes (token only) |

Sources: [OpenAI crawlers](https://developers.openai.com/api/docs/bots), [Anthropic crawlers](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler), [Perplexity crawlers](https://docs.perplexity.ai/guides/bots), [Google common crawlers](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers).

Two details trip people up. OpenAI says `ChatGPT-User` [is not used to determine whether content may appear in search](https://developers.openai.com/api/docs/bots); `OAI-SearchBot` is the one that matters for ChatGPT search. And Google says `Google-Extended` [does not affect inclusion in Google Search or act as a ranking signal](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers). AI Overviews and AI Mode are fed by regular Googlebot, and you control them with the usual `nosnippet` and `noindex` directives.

### A sample robots.txt for LLM SEO

If you want to be cited in AI answers but keep your content out of model training, this is a reasonable starting point:

```txt
# Search and answer engines: allow
User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Model training: opt out (optional, your call)
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: *
Allow: /

Sitemap: https://www.example.com/sitemap.xml
```

Whether to block training bots is a business decision. Allowing them may help your brand show up in answers the model gives from memory. Blocking them keeps your content out of future training sets. Neither choice affects your eligibility for ChatGPT search, Claude search or Perplexity, as long as the search bots are allowed.

### Serve real HTML: a case study from our own site

Permission is the easy half. The hard half is whether the bot sees anything.

Vercel analyzed AI crawler traffic across its network and found that [none of the major AI crawlers render JavaScript](https://vercel.com/blog/the-rise-of-the-ai-crawler), including OpenAI's three bots, ClaudeBot and PerplexityBot. They download the raw HTML and move on. Google does render JavaScript, but it queues pages for rendering and [still recommends server-side rendering or prerendering](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) because "not all bots can run JavaScript."

We found this problem on gtmind's own site. The marketing site started life as a client-rendered React single-page app. Here is what that meant in practice:

- **Every URL returned the same HTML file.** A catch-all rewrite sent every path to one `index.html`.
- **Every URL had the same title and description.** Both were hard-coded in that file. Page-specific titles were set later, in JavaScript.
- **The body was an empty `<div id="root"></div>`.** All the text arrived only after the JavaScript bundle ran.
- **The canonical tag was injected by JavaScript**, so a non-rendering crawler never saw it.

To GPTBot or PerplexityBot, every page on the site looked identical and blank. A blog post could be excellent and still be invisible to the engines it was written for.

The fix was to prerender every route to static HTML at build time. After the normal client build, a server build renders each route to a string, and a script writes one HTML file per URL with the content already in the root element. Each file gets its own `<title>`, meta description, canonical link and JSON-LD structured data (`Article`, `FAQPage` and `BreadcrumbList` for posts). The same script generates the sitemap from the list of routes, so new posts can't be forgotten. React still hydrates in the browser, so visitors get the same app.

| | Before (client-rendered SPA) | After (prerendered at build) |
|---|---|---|
| HTML body a crawler sees | Empty root div | Full page text |
| `<title>` and description | Same on every URL | Unique per page |
| Canonical tag | Added by JavaScript | In the static HTML |
| Structured data | None | Per-page JSON-LD |
| Sitemap | Hand-written, 5 URLs | Generated from routes |

You can test your own site in one line. Fetch a page the way a non-rendering bot would and look for your content:

```bash
curl -s -A "GPTBot" https://www.example.com/blog/your-post | grep -i "<title>"
```

If the title is generic, or the body text you expect isn't in the output, AI crawlers can't read that page either. Static site generators, server-side rendering frameworks, and build-time prerendering all solve it.

A final note on `llms.txt`: it's a proposed file that lists your key pages for LLMs. It's cheap to add, but Google says you [don't need new machine-readable files or AI text files](https://developers.google.com/search/docs/appearance/ai-features) to appear in its AI features. Fix rendering first. It matters far more.

## Step 2: Structure pages answer-first

Once a model can read the page, make the answer easy to find and easy to quote. This is the part most people mean when they ask how to rank in ChatGPT.

**Lead with a 40–60 word answer.** The first paragraph under the heading should answer the question in the heading directly, with no preamble. That's the passage most likely to be lifted into an AI Overview or a ChatGPT answer.

**Make headings match real questions.** "How much does X cost?" beats "Pricing considerations." The model's grounding queries look like user questions, and headings that match them make relevant passages easier to retrieve.

**Keep passages self-contained.** A model may quote one paragraph without the rest of the page. A paragraph that starts with "As mentioned above, this…" loses its meaning when lifted. Name the subject in each passage.

**Use tables for comparisons.** A table of plans, features or trade-offs gives the model clean, structured facts to reuse.

**Add an FAQ from real questions.** Take them from People Also Ask, your sales calls and support tickets. Keep answers to 40–80 words and mark them up with `FAQPage` schema.

**Put numbers next to sources.** "Up to 40% more visibility, according to the GEO paper" is quotable. "Significantly more visibility" is not.

**Show freshness honestly.** Display a visible "last updated" date and actually update the page when facts change. AI answers about pricing, tools and features go stale quickly, and so do the pages they cite.

## Step 3: Build entity and brand signals

Retrieval gets you into the candidate set. Whether the model trusts you enough to name you depends on what the rest of the web says about you.

An LLM builds its picture of your brand from many sources: your site, review sites, Reddit threads, LinkedIn posts, podcasts, analyst lists and comparison articles. If those sources describe you consistently ("X is a tool for Y"), the model can state it with confidence. If they contradict each other, or say nothing, it hedges or picks a competitor.

Practical moves, roughly in order of payoff:

1. **Write one clear positioning sentence and use it everywhere.** On your homepage, About page, LinkedIn company page, G2 or Capterra listing, and in your `Organization` schema. Consistency is what turns a brand into an entity.
2. **Get into the lists that already rank.** For "best X tools" prompts, assistants often cite existing listicles and comparison pages. Pitch corrections and inclusions to the authors of those pages.
3. **Show up where practitioners talk.** Reddit threads and LinkedIn posts appear often on AI-heavy topics. Useful, non-promotional answers from a real person on your team build the kind of mentions models pick up.
4. **Earn reviews.** Review platforms give models structured, third-party opinions about your product.
5. **Publish under named authors.** A byline with a real person, a bio and a LinkedIn link gives readers and models a reason to trust the page.

None of this is new; it's digital PR and community work. What's new is that it shows up directly in the answer.

## Step 4: Publish original data LLMs want to quote

Models cite what they can't get elsewhere. If your page repeats what fifty others say, there is no reason to cite yours over the most authoritative of the fifty. If your page contains a number nobody else has, you become the source.

Original data can be small:

- **Benchmarks from your own product or service**, anonymized and aggregated. "Median time to first ranking change across our projects" beats any generic claim.
- **Surveys of your audience**, even with 100 respondents, if you publish the method and sample size.
- **Teardowns and tests.** Run the same prompt 50 times across four assistants and publish what you saw.
- **Pricing and feature tables you keep current.** Comparison pages with verified, dated facts get cited because they save the model work.

Format matters as much as the finding. Put the key number in a sentence of its own, name the method, and date it. That turns a finding into a quotable passage.

## Step 5: Measure LLM SEO, from citations to pipeline

Most LLM SEO guides stop here. A dashboard showing "AI visibility up 12%" doesn't tell you whether anything happened to revenue. Measure it as a funnel instead.

| Stage | What to measure | Where the data comes from |
|---|---|---|
| 1. Presence | Share of tracked prompts where you're mentioned or cited | AI visibility trackers (see our [comparison of AI search visibility tools](/blog/ai-search-visibility-tools)) |
| 2. Citations | Which of your URLs get cited, and how often | [Bing AI Performance report](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview), [Search Console generative AI report](https://support.google.com/webmasters/answer/16984139?hl=en), trackers |
| 3. Sessions | Visits referred by AI assistants, by landing page | GA4 referrals and UTM tags |
| 4. Pipeline | Leads, opportunities and revenue from those sessions | CRM joined to analytics |

### Track prompts, not keywords

Pick 30–100 prompts your buyers actually ask, grouped by stage: problem ("how do I measure SEO ROI"), category ("best marketing attribution software for B2B") and brand ("is \[you] good for \[use case]"). Run them regularly across the engines your market uses.

Expect noise. SparkToro's research found that when you ask an AI for brand recommendations repeatedly, the odds of getting [the same list twice are under 1 in 100](https://www.searchenginejournal.com/ai-recommendations-change-with-nearly-every-query-sparktoro/566242/). Track how often you appear across many runs, not a "position."

### Use the first-party reports

Two of the big platforms now report AI visibility directly, for free:

- **Bing Webmaster Tools** has an [AI Performance report](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview) showing how often your pages are cited in Microsoft Copilot and Bing's AI summaries, which URLs are cited, and the grounding queries behind them.
- **Google Search Console** has a [generative AI performance report](https://support.google.com/webmasters/answer/16984139?hl=en) showing impressions in AI Overviews and AI Mode by page, country, date and device. It shows impressions only, with no query dimension.

### Tie AI sessions to deals

ChatGPT appends [`utm_source=chatgpt.com`](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq) to links it sends from search results, so those visits are easy to isolate. For other assistants, build a GA4 segment on session source matching referrers such as `chatgpt.com`, `perplexity.ai`, `gemini.google.com`, `copilot.microsoft.com` and `claude.ai`.

Then do the join most teams skip: carry the landing page and source onto the lead record, and follow it to the opportunity and closed-won deal in your CRM. Only then can you say which cited pages produce pipeline, and which only produce impressions. We cover which of these metrics to report, and in what order, in our guide to [SEO KPIs](/blog/seo-kpis).

An illustrative example of the kind of play gtmind surfaces: a comparison page is cited in Perplexity answers for a "vs competitor" prompt. AI-referred sessions land on it every week, and three of them became opportunities last quarter. Meanwhile, the equivalent prompt in ChatGPT cites a competitor's page. The play is to refresh the comparison page with a current pricing table and a direct answer paragraph, and track whether the ChatGPT citation moves. That's the loop gtmind's [GEO agent](/#agents) is built around: watch the answers, write what gets cited, then check whether pipeline moved.

## LLM SEO tools: what you actually need

A workable LLM SEO framework needs four kinds of tool:

- **A rendering check.** `curl`, or any crawler that can disable JavaScript, to confirm bots see your content.
- **A prompt tracker.** A paid AI visibility tool, or a spreadsheet and a weekly manual run for a small prompt set.
- **First-party reports.** Bing Webmaster Tools and Search Console, both free.
- **Analytics joined to CRM.** So citations can be followed to revenue.

If you want the content side automated too (briefs, refreshes, metadata and internal links, with a human approving each change), see how an [AI SEO agent](/blog/ai-seo-agent) fits alongside this workflow.

## A 30-day LLM SEO plan

| Week | Do this | Done when |
|---|---|---|
| 1 | Audit robots.txt and test rendering with `curl` | Search bots allowed, content visible in raw HTML |
| 2 | Rewrite your 10 most important pages answer-first; add tables and FAQs | Each page opens with a 40–60 word answer |
| 3 | Fix your positioning sentence everywhere; pitch 5 listicles for inclusion | Profiles consistent; pitches sent |
| 4 | Set up prompt tracking, Bing AI Performance, GA4 AI segment, CRM source fields | First baseline recorded |

Then repeat monthly: find the prompts you lose, fix the page that should win them, and watch citations and pipeline.

LLM SEO is classic SEO with the feedback loop pointed at a new surface: readable pages, plain answers, earned mentions, original data, and measurement all the way to revenue.
