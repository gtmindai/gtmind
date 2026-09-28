---
slug: "seo-roi"
title: "SEO ROI: How to Measure It with Search Console + Your CRM"
h1: "How to Measure SEO ROI (With Real Revenue, Not Estimates)"
description: "The SEO ROI formula, a free calculator, and the step most guides skip: joining Search Console queries to CRM deals so your SEO ROI is real revenue."
excerpt: "The SEO ROI formula with a worked example, a free calculator, and a step-by-step method for tying search queries to real CRM revenue instead of estimates."
category: "Revenue measurement"
coverTitle: "How to measure SEO ROI"
coverAlt: "A flow from a Search Console query to a landing page, a CRM contact and a closed deal, with an SEO ROI percentage at the end"
primaryKeyword: "seo roi"
keywords: ["seo roi", "seo roi calculator", "how to measure seo roi", "seo roi formula", "content marketing roi", "revenue attribution", "content roi", "content attribution"]
published: 2026-09-28
updated: 2026-09-28
related: ["marketing-attribution-software", "seo-kpis", "gtm-engineer"]
cta: "See your Search Console queries joined to real CRM deals — book the 30-minute read-only walkthrough."
faq:
  - q: "How do you calculate SEO ROI?"
    a: "Subtract your SEO costs from the revenue organic search produced, divide by the SEO costs, and multiply by 100. Costs include salaries, agency fees, content, links and tools. Revenue should ideally come from closed deals in your CRM traced back to organic landing pages, rather than from estimated conversion rates, and should be measured over a window long enough for your sales cycle."
  - q: "What is a good ROI for SEO?"
    a: "There is no universal number, but third-party benchmarks give a range. First Page Sage's 2026 report, based on its own client campaigns, puts B2B SaaS at 702% over three years and ecommerce at 317%. Treat these as directional. A good ROI for you is one that beats your other acquisition channels on cost per closed deal."
  - q: "How long does SEO take to show ROI?"
    a: "Usually six months to over a year. First Page Sage's third-party data shows break-even at around 7 months for B2B SaaS and up to 14 months for legal services, with peak returns in years two and three. Sales cycle length adds to this, because a lead captured today may not close for another quarter."
  - q: "How do you measure content marketing ROI?"
    a: "Use the same method per article. Find the organic sessions that landed on each piece, follow those visitors into your CRM, and sum the revenue from the deals they became. Divide the net return by what the article cost to produce and maintain. Group articles by topic when individual pages have too few deals to judge."
---

SEO ROI is the return you get from search engine optimization compared with what you spend on it. The formula is simple: (revenue from organic search − SEO cost) ÷ SEO cost × 100. The hard part is the revenue number. Most guides estimate it from conversion rates; a reliable SEO ROI uses closed deals traced back from your CRM.

**Key takeaways**

- The SEO ROI formula is (organic revenue − SEO cost) ÷ SEO cost × 100. Everything interesting happens in how you measure "organic revenue."
- Most published SEO ROI numbers multiply traffic by assumed conversion rates. That is a forecast, not a measurement.
- The real method joins four systems in order: Search Console query → GA4 landing page → CRM contact → CRM deal.
- B2B needs long attribution windows, typically 90 to 180 days, because deals close long after the first organic visit.
- Third-party benchmarks, such as First Page Sage's, put B2B SaaS SEO ROI at 702% over three years with a 7-month break-even. Use them for context, not as targets.

## The SEO ROI formula (with a worked example)

The standard SEO ROI formula is the same one used for any investment:

```
SEO ROI (%) = (Revenue from organic search − SEO cost) ÷ SEO cost × 100
```

Two inputs, and both need care.

**SEO cost** is everything you spend to earn organic traffic in the period: in-house salaries (or the share of time spent on SEO), agency or freelancer fees, content production, design, link building and tools. Teams often leave out internal time, which flatters the result.

A simple checklist for the cost side:

| Cost line | What to include | Often missed? |
|---|---|---|
| People | Salaries or hourly share of SEO, content and web staff | Yes |
| Agency and freelance | Retainers, per-article fees, audits | No |
| Content | Writing, editing, design, video, refreshes | Refreshes, yes |
| Links and PR | Outreach, digital PR, sponsorships | Sometimes |
| Tools | Rank trackers, crawlers, keyword data, CMS plugins | Sometimes |
| Engineering | Developer time for technical fixes and templates | Yes |

If a cost would stop if you stopped doing SEO, it belongs in the denominator. If it would continue anyway, such as your CMS license, leave it out and say so.

**Revenue from organic search** is the revenue from customers whose journey started with, or was materially driven by, an organic visit. For lead-gen and B2B businesses, it is built from a chain of conversion rates:

```
Organic revenue = Sessions × Visit-to-lead rate × Lead-to-customer rate × Average deal value
```

### Worked example

Take a B2B software company with these monthly numbers:

| Input | Value |
|---|---|
| Organic sessions | 5,000 |
| Visit → lead rate | 2% |
| Lead → customer rate | 4% |
| Average deal value | $12,000 |
| Monthly SEO cost | $6,000 |

Step by step:

1. Leads: 5,000 × 2% = **100 leads**
2. Customers: 100 × 4% = **4 customers**
3. Revenue: 4 × $12,000 = **$48,000**
4. SEO ROI: ($48,000 − $6,000) ÷ $6,000 × 100 = **700%**

Put another way, every $1 spent on SEO returns $8 in revenue. This is a steady-state month. It does not account for the months of work before traffic arrived, so it overstates the return of a new program.

Payback is the fairer check. Say the first six months produced almost no deals while you spent $6,000 a month. You have $36,000 invested before the program reaches this steady state. At $48,000 a month in revenue, the program nets $42,000 a month after its ongoing $6,000 cost, so it recovers the $36,000 within its first steady month on a revenue basis. Measured on a conservative gross margin of, say, 40%, it nets about $13,200 a month ($19,200 − $6,000), and payback takes roughly three months. The margin you use changes the answer a lot, so state it.

If you prefer to use profit instead of revenue in the numerator, swap in gross profit. It is the stricter version and the one a CFO will ask for.

## Free SEO ROI calculator

Plug your own numbers into the calculator below. It uses the same chain as the worked example: monthly organic sessions, visit → lead rate, lead → customer rate, average deal value and monthly SEO cost. It returns leads, customers and revenue per month, your SEO ROI as a percentage, and revenue per $1 of SEO spend.

<!-- component:seo-roi-calculator -->

A few tips for filling it in:

- **Sessions:** use organic search sessions from GA4 (Reports → Acquisition → Traffic acquisition, filtered to Organic Search), not total site sessions.
- **Visit → lead rate:** leads from organic sessions divided by organic sessions. If you don't know it, a third-party reference point is [First Page Sage's B2B SaaS funnel data](https://firstpagesage.com/seo-blog/b2b-saas-funnel-conversion-benchmarks-fc/), which reports a 2.1% visitor-to-lead rate for SEO.
- **Lead → customer rate:** the same First Page Sage data reports SEO conversion of 41% lead to MQL, 51% MQL to SQL, 49% SQL to opportunity and 36% opportunity to close. Multiplied together, that is roughly 3.7% from lead to customer. Your own CRM number is always better.
- **Average deal value:** first-year contract value is the conservative choice. Lifetime value makes SEO look better but assumes renewals you have not earned yet.
- **Monthly SEO cost:** include internal time.

Treat the output as a projection. The rest of this guide is about replacing the two conversion-rate inputs with measured data.

## Why most SEO ROI numbers are guesses

Read the top-ranking guides on how to measure SEO ROI and you will find the same approach. [Semrush's guide](https://www.semrush.com/blog/seo-roi/), for example, values lead-gen conversions by multiplying customer lifetime value by the lead close rate, then applies that value to organic conversions in GA4. It is a sensible shortcut. It is also an assumption stacked on an assumption.

Three things go wrong in practice:

1. **The conversion rate is an average, not a fact about organic.** Organic leads from a pricing comparison page and organic leads from a glossary post close at wildly different rates. A blended close rate hides that.
2. **GA4 stops at the form fill.** It knows a key event happened. It does not know whether that lead became a $3,000 deal, a $90,000 deal or nothing, unless you import CRM outcomes back.
3. **The query is missing.** GA4 records the session as Organic Search but not the search that produced it. The queries live in Search Console, aggregated by query and page. Google's own [explanation of Search Console data](https://developers.google.com/search/blog/2022/10/performance-data-deep-dive) also notes that rare queries are anonymized and not shown.

The result is an SEO ROI number that can be off by a factor of several in either direction, and no way to tell which pages and topics produced the return. That makes it hard to decide what to do next, which is the point of measuring. If you need a primer on the model choices behind any revenue attribution, our guide to [marketing attribution software for B2B](/blog/marketing-attribution-software) covers first-touch, W-shaped and data-driven models.

## The real method: query → landing page → contact → deal

Here is how to measure SEO ROI with closed revenue instead of estimates. You need Search Console, GA4 and a CRM such as HubSpot, Salesforce or Pipedrive.

### Step 1: Pull queries by landing page from Search Console

Export the Performance report with both the **Query** and **Page** dimensions for the longest date range available. Each row tells you that a query sent clicks to a specific URL. This is the only place the query-to-page link exists.

Group queries into clusters that match intent: "pricing" queries, "vs competitor" queries, "how to" queries, branded queries. Page-level ROI is useful; cluster-level ROI is what drives the content plan.

### Step 2: Tie landing pages to sessions and leads in GA4

In GA4, report on **landing page** for sessions where the session default channel group is Organic Search. Add your lead key events (demo request, trial signup, contact form). Now you have: page → organic sessions → leads.

Make sure the lead form passes the GA4 client ID or a first-touch landing page into a hidden field, so the CRM record carries it. Without that, Step 3 is guesswork.

### Step 3: Match leads to CRM contacts

In the CRM, every contact created from a form should now have its original source (Organic Search) and its first landing page. HubSpot records original source automatically; in Salesforce you usually store it in custom fields on the lead or contact.

Filter contacts to those whose original source is organic search. Keep the landing page on each one.

### Step 4: Follow contacts to deals and revenue

Associate those contacts with opportunities or deals, then keep only closed-won deals inside your attribution window. Sum revenue by first landing page, then roll up to the query clusters from Step 1 using the page as the bridge.

You now have a table like this:

| Query cluster | Landing pages | Organic leads | Closed-won deals | Revenue |
|---|---|---|---|---|
| "[product] vs [competitor]" | 3 | 42 | 5 | $61,000 |
| "[category] pricing" | 2 | 31 | 3 | $38,000 |
| "how to [job]" | 18 | 64 | 1 | $9,000 |
| Glossary / "what is" | 25 | 12 | 0 | $0 |

*Illustrative numbers, to show the shape of the output.*

This is where the value shows up. In an illustration like this, the comparison pages with three URLs outperform 25 glossary pages, so the next quarter's content budget moves to comparisons. A blended SEO ROI figure could never tell you that.

### Step 5: Calculate SEO ROI from measured revenue

Sum the closed-won revenue and plug it into the formula with your full SEO cost for the same period. Then do the same by cluster, allocating cost by the number of pages or hours spent. This is revenue attribution you can defend in a board meeting, because every dollar traces to a named deal.

Doing this by hand once a quarter is feasible in a spreadsheet. Keeping it current is the hard part, which is why a [GTM engineer](/blog/gtm-engineer) often ends up owning the pipeline. gtmind automates this particular join: it [connects read-only to Search Console, GA4 and your CRM](/#sources), refreshes the model hourly, and scores each finding against your own closed-won deals.

## Attribution windows for B2B: 90 to 180 days

An attribution window, or lookback window, is how far back you look from a deal to find the organic visit that started it. Get it wrong and you under-credit SEO.

For ecommerce, 30 days is often enough. For B2B, where a buyer may read three articles, go quiet, bring in colleagues and book a demo two months later, you usually need **90 to 180 days**, and longer for enterprise deals.

Watch your tool defaults. GA4's [lookback window](https://support.google.com/analytics/answer/10597962) defaults to 90 days for most key events, with 30 and 60 days as the only other choices. That is a ceiling, not a floor, and GA4 still only credits the lead event, not the deal.

Practical rules of thumb:

- Set the window to at least your median lead-to-close time plus the typical gap between first visit and lead.
- Measure SEO ROI on cohorts: "deals from organic leads captured in Q1," reported in Q3, rather than "deals closed this month."
- Use first-touch for the SEO ROI headline number and a multi-touch view as a sanity check. First-touch is the model that matches the question "did SEO start this deal?"

## Content marketing ROI: the same method per article

Content marketing ROI is SEO ROI with a finer grain. Instead of summing across the site, you run the four-step join per article or per topic cluster.

```
Content ROI (%) = (Revenue from deals whose first touch was the article − Article cost) ÷ Article cost × 100
```

Article cost is the brief, writing, editing, design and any promotion, plus the cost of refreshes over the article's life.

Two cautions:

- **Most individual articles will show $0.** Content attribution at the article level is sparse because few deals trace back to any single page. Judge clusters, not posts.
- **Assisted value is real but hard to price.** An article a buyer reads after the first touch still matters. Report it as "influenced revenue" separately rather than adding it to the ROI numerator, so you do not double-count.

For the metrics to watch while waiting for revenue to arrive (impressions, rankings, organic leads), see our guide to [SEO KPIs](/blog/seo-kpis), which orders them from leading to lagging.

An illustrative example of the kind of play gtmind surfaces from this data: "Build a comparison page versus your main competitor, estimated at $42K a month in pipeline, 89% confidence, medium effort." That is the output format [described on our homepage](/#how), not a customer result.

## SEO ROI benchmarks (third-party data)

Benchmarks help you sanity-check your number. The most-cited set comes from **First Page Sage**, an SEO agency, in its [SEO ROI Statistics 2026 report](https://firstpagesage.com/reports/seo-roi-statistics-fc/). It is based on the agency's own client campaigns run between Q1 2021 and Q3 2025, averaged over three years, and uses the same net-profit ÷ cost formula.

| Industry (First Page Sage, third-party) | 3-year SEO ROI | Break-even |
|---|---|---|
| B2B SaaS | 702% | 7 months |
| Industrial IoT | 866% | 7 months |
| Manufacturing | 813% | 9 months |
| Financial services | 1,031% | 9 months |
| IT staffing | 612% | 10 months |
| Medical devices | 1,183% | 13 months |
| Legal services | 526% | 14 months |
| Ecommerce | 317% | 9 months |

The same report puts thought-leadership SEO as a service type at 748% ROI with a 9-month break-even, and says positive ROI typically arrives over 6 to 12 months, with peak results in the second or third year.

How to read these numbers:

- **They are one agency's clients.** Companies that hire an agency and stick with it for three years are not a random sample. Expect selection bias upward.
- **They are three-year averages.** Your first-year ROI will be lower, often negative, because of the ramp.
- **They do not tell you what is good for you.** The useful comparison is internal: SEO cost per closed deal versus paid search, paid social and outbound cost per closed deal.

## Putting it together

Measuring SEO ROI comes down to three habits. Use the formula, but be honest about costs. Replace estimated conversion rates with the query → page → contact → deal join as soon as you can. And measure on cohorts with a window long enough for your sales cycle.

Start with the calculator to get a projection, run the four-step join once in a spreadsheet to see how far off the projection was, and then decide whether that join is worth automating.
