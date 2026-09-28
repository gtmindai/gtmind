---
slug: "website-visitor-tracking"
title: "Website Visitor Tracking for B2B: Tools, Setup & Signals"
h1: "Website Visitor Tracking for B2B: From Anonymous Visit to Pipeline"
description: "How B2B website visitor tracking works: honest match rates, GDPR, CCPA and DPDP rules, six tools compared, and a signal-to-CRM follow-up workflow."
excerpt: "Most B2B visitors never fill in a form. Here is how visitor tracking and identification work, what match rates to expect, the privacy rules, and how to turn a pricing visit into a follow-up."
category: "Revenue measurement"
coverTitle: "From anonymous visit to pipeline"
coverAlt: "Diagram of B2B website visitor tracking: an anonymous visit to a pricing page is matched to a company, scored as a buying signal and turned into a CRM task for sales"
primaryKeyword: "website visitor tracking"
keywords: ["website visitor tracking", "website visitor identification", "buying signals", "intent signals", "buyer intent data", "intent data", "signal based selling"]
published: 2026-09-28
updated: 2026-09-28
related: ["marketing-attribution-software", "ai-marketing-agents", "gtm-engineer"]
cta: "See which accounts are reading your pricing page, joined to your CRM. Book the 30-minute read-only walkthrough."
faq:
  - q: "Can you see who visits your website?"
    a: "Partly. Analytics tools like GA4 show what anonymous visitors do, not who they are. Identification tools match a visitor's IP address or device to a company, and some US-focused tools also match to a person. Vendors report company-level match rates of roughly 15 to 65 percent and person-level rates of 5 to 45 percent, depending on geography and traffic. Test on your own traffic before you buy."
  - q: "Is website visitor tracking legal?"
    a: "Usually, if you do it the right way for each region. In the EU and UK, IP addresses and cookie IDs are personal data, and non-essential tracking generally needs prior consent. California's CCPA/CPRA covers business contacts and requires notice and an opt-out of sale or sharing. India's DPDP Act requires notice and consent, with most duties applying from May 2027. This is not legal advice."
  - q: "What's the difference between intent data and buying signals?"
    a: "Intent data is any evidence that an account is researching a topic, often gathered by third parties across many websites. Buying signals are the narrower set of actions that suggest a purchase is near, such as pricing page visits, comparison page reads or a return visit from several people at one company. First-party signals on your own site are usually the strongest and freshest."
  - q: "How accurate is website visitor identification?"
    a: "Company-level matches from corporate IP addresses are fairly reliable, but coverage drops sharply for remote workers, mobile traffic, VPNs and visitors outside the US. Person-level matches depend on third-party identity graphs and are best treated as probable, not certain. Verify a match against your CRM and the account's fit before a rep acts on it."
  - q: "Do I need a visitor identification tool if I already have GA4?"
    a: "Not always. GA4 tells you which pages convert and which sources bring engaged sessions, and your CRM already knows the visitors who filled in a form. An identification tool adds names of companies that stayed anonymous. It pays off when you have enough target-account traffic and a sales team ready to follow up within a day or two."
---

Website visitor tracking is the practice of recording what people do on your website: which pages they view, where they came from and whether they return. For B2B teams it usually goes one step further, into website visitor identification, which matches anonymous visits to a company or person so sales can follow up while interest is live.

**Key takeaways**

- Tracking tells you *what* happened on your site. Identification tries to tell you *who* did it. They need different tools and carry different privacy duties.
- Company-level identification is the dependable layer. Person-level matching works mostly for US traffic and is probabilistic.
- Match rates quoted by vendors range widely. Leadfeeder itself says no vendor can honestly promise one number, so run a trial on your traffic.
- A few pages carry most of the buying signal: pricing, comparison, integrations and docs, plus return visits from several people at one account.
- The value is in the workflow, not the list: signal, then score, then a CRM task with an owner and a deadline.

## Website visitor tracking vs website visitor identification

People use the two terms interchangeably, but they answer different questions. Tracking is what GA4 already does. Identification is what tools like Leadfeeder, RB2B or Warmly add on top.

| | Visitor tracking | Company identification | Person identification |
|---|---|---|---|
| Answers | What did visitors do? | Which company visited? | Which person visited? |
| Typical tool | GA4, product analytics | Leadfeeder, HubSpot Buyer Intent | RB2B, Warmly, Leadpipe |
| Main input | Cookies, events | IP address plus company data | Identity graphs, cookies, emails |
| Coverage | All consenting visitors | A share of business traffic | Mostly US traffic |
| Privacy weight | Moderate | Higher | Highest |
| Best use | Content and funnel analysis | Account prioritization | Direct outreach |

If you only need to know which pages move deals, tracking plus a clean CRM join may be enough. That join (query, landing page, deal) is the core of [B2B marketing attribution software](/blog/marketing-attribution-software), and it works on visitors who eventually fill in a form. Identification is for the rest.

## How company-level and person-level identification work

### Company-level: reverse IP lookup

A script on your site captures each visitor's IP address. The vendor checks it against a database of IP ranges owned by companies, then enriches the match with firmographics such as industry and headcount. [HubSpot's documentation](https://knowledge.hubspot.com/reports/use-buyer-intent) describes exactly this: its tracking code "connects anonymous web visitors to known companies' IP addresses."

This works well when someone browses from an office network. It works badly for remote workers on home broadband, people on mobile data and anyone behind a VPN, because those IPs belong to an internet provider, not an employer.

### Person-level: identity graphs

Person-level tools go further. They match cookies, device IDs or hashed emails against third-party identity graphs to name an individual. [RB2B's pricing page](https://www.rb2b.com/pricing) limits contact-level identification to US traffic, and [Leadpipe states](https://www.leadpipe.com/pricing) that "person-level identification is US-only by design" and that it blocks EU and UK traffic from person-level matching. That tells you where the legal risk sits.

### Honest match rates

Every number below is a vendor claim about its own product, measured on its own customers. Treat them as upper bounds.

| Vendor claim | Company-level | Person-level | Source |
|---|---|---|---|
| Warmly | ~65% US average (30-65% range) | ~15% average (5-20% range) | [Warmly](https://www.warmly.ai/p/blog/visitor-identification-match-rates) |
| RB2B | 15-20% (lower plans), 35-45% (Pro+) | 35-45%, US only (Pro+) | [RB2B](https://www.rb2b.com/pricing) |
| Leadpipe | Not stated separately | "30-40%+ on US traffic" for B2B | [Leadpipe](https://www.leadpipe.com/pricing) |
| Leadfeeder | Declines to give a figure | Not offered | [Leadfeeder](https://help.leadfeeder.com/en/articles/13922269-how-does-web-visitors-identify-companies) |

Two details are worth reading closely. Warmly's own analysis says international traffic matches at only 20-40% at company level, mobile traffic at 15-30%, and that "demo match rates run 3-5x higher" than production. Leadfeeder's help center goes further: "As each customer is different there is no way to honestly give a percentage of visitors identified," and a promised rate "is likely based on a few accounts."

The practical test: install a trial for two weeks, export the identified companies and check them against your CRM. Count how many are real prospects you did not already know about. That number, not the match rate, is what you are buying.

## Privacy and consent: GDPR, CCPA/CPRA and India's DPDP Act

*This section summarizes the rules as of September 2026. It is not legal advice; check with counsel for your situation.*

### GDPR and ePrivacy (EU and UK)

The GDPR treats IP addresses and cookie IDs as online identifiers that can be tied to a person. [Recital 30](https://eur-lex.europa.eu/eli/reg/2016/679/oj) names "internet protocol addresses, cookie identifiers" explicitly. Separately, Article 5(3) of the [ePrivacy Directive](https://eur-lex.europa.eu/eli/dir/2002/58/oj) requires consent before storing or reading information on a user's device, except where strictly necessary.

The European Data Protection Board's [Guidelines 2/2023](https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-22023-technical-scope-art-53-eprivacy-directive_en), finalized in October 2024, read that rule broadly, covering techniques such as tracking pixels and some IP-based tracking. In practice: load identification scripts only after consent for EU and UK visitors, and don't use person-level tools on that traffic at all.

### CCPA/CPRA (California)

The [California Attorney General's CCPA page](https://oag.ca.gov/privacy/ccpa) lists the core rights: to know, to delete, to opt out of the sale or sharing of personal information, and (added by the CPRA) to correct and to limit use of sensitive data. Personal information includes browsing history. Since the B2B and employee exemptions [expired on January 1, 2023](https://www.morganlewis.com/pubs/2022/10/california-consumer-privacy-act-employee-and-b2b-exemptions-expire-january-1-2023), business contacts get the same rights as consumers.

For visitor tracking, that means a clear privacy notice, a working "Do Not Sell or Share" link if your tool's data flow counts as sharing, and a way to honor opt-out requests.

### India's DPDP Act 2023

The [Digital Personal Data Protection Act, 2023](https://www.meity.gov.in/static/uploads/2024/06/2bf1f0e9f04e6fb4f8fef35e82c42aa5.pdf) makes consent (free, specific, informed, unconditional and unambiguous, given after a clear notice) the main basis for processing digital personal data. The [DPDP Rules, 2025](https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf) were notified on November 13, 2025, with most obligations on businesses taking effect 18 months later, in May 2027. MeitY proposed in January 2026 to shorten that window for large "Significant Data Fiduciaries," but as of September 2026 the change had [not been formally notified](https://consentos.in/learn/dpdp-compliance-timeline/).

If you sell into India, now is the time to put a consent banner and notice in place for Indian visitors, rather than retrofitting in 2027.

## Which visits are real buying signals?

Most page views are noise. A handful of pages and patterns carry most of the intent, and they're the ones worth routing to sales. Third-party buyer intent data (like the research signals HubSpot or Warmly sell) tells you an account is researching a topic somewhere on the web. First-party buying signals tell you the account is researching *you*.

| Signal | Why it matters | Suggested weight |
|---|---|---|
| Pricing page visit | Evaluating cost, late stage | High |
| Comparison or "vs" page | Actively shortlisting | High |
| Integrations or security page | Checking fit with their stack | Medium-high |
| Docs or API reference | Technical evaluation underway | Medium |
| Return visit within 7 days | Interest is sustained | Medium |
| 3+ people from one account | A buying group has formed | High |
| Blog post only | Early research or unrelated | Low |
| Careers page | Job seeker, not a buyer | Exclude |

Combine these intent signals with fit, and a single pricing visit from a 20-person agency stops outranking three visits from a target account. The weights are a starting point, not a benchmark. Re-weight them after a quarter by checking which signals preceded closed-won deals in your CRM. This is the core of signal based selling: reps work the accounts showing the right behavior now, instead of a static list.

Also exclude the obvious false positives: your own staff, existing customers logging into the app, agencies, investors and competitors. They can make up a surprising share of "identified" companies.

## Website visitor tracking tools compared

Each tool below was checked on its own website in September 2026. Prices are list prices shown publicly; your quote may differ.

| Tool | Level | Starting price (as of September 2026) | Best fit |
|---|---|---|---|
| Leadfeeder (formerly Dealfront) | Company | Free tier; paid from €79/mo billed annually | EU-heavy traffic, account lists |
| RB2B | Company; person on Pro+ (US) | Free tier; paid from $79/mo | US teams wanting Slack alerts |
| HubSpot Buyer Intent (ex-Clearbit Reveal) | Company | Included in Starter+ hubs; uses HubSpot Credits | Teams already on HubSpot |
| Warmly | Company and person | $10,000/yr | Teams wanting ID plus chat and automation |
| Leadpipe | Person (US), company elsewhere | From $147/mo | US-focused person-level ID |
| Koala | Company and person | No longer sold | Shut down after acquisition |

**Leadfeeder / Dealfront.** Dealfront [rebranded back to Leadfeeder](https://help.leadfeeder.com/en/articles/14120049-dealfront-is-now-leadfeeder) on March 24, 2026, and the visitor ID product is now called "Web Visitors." [Pricing](https://www.leadfeeder.com/pricing/) starts with a free Lite plan (100 identified companies, 7 days of history), then Discover from €79/month billed annually, Activate from €369/month and Scale from €599/month (as of September 2026). It identifies companies, not people; contact enrichment uses credits on higher plans.

**RB2B.** [Plans](https://www.rb2b.com/pricing) run Free, Starter $79/month, Pro $149/month and Pro+ $199/month (as of September 2026). Only Pro+ includes person-level identification, and only for US visitors.

**HubSpot (Clearbit, then Breeze Intelligence, now Buyer Intent).** HubSpot bought Clearbit and folded it into Breeze Intelligence. Clearbit's free tools [were retired](https://clearbit.com/blog/the-future-of-clearbits-free-tools) on April 30, 2025. In HubSpot's current documentation the features appear as [Buyer Intent](https://www.hubspot.com/products/crm/intent) and [data enrichment](https://knowledge.hubspot.com/ai-tools/get-started-using-breeze-intelligence), paid for with HubSpot Credits. Tracking a company [costs 10 credits a month](https://knowledge.hubspot.com/reports/use-buyer-intent), and credits cost [$0.01 each](https://www.hubspot.com/products/artificial-intelligence/credits) (as of September 2026). Identification is company-level only.

**Warmly.** [Pricing](https://www.warmly.ai/p/pricing) starts at $10,000/year for AI Web-Deanonymization (contacts and companies), rising to $20,000 and $30,000/year for chat and "Autopilot" tiers (as of September 2026). It's the heaviest option here and bundles orchestration on top of identification.

**Koala.** Koala is no longer an option. Cursor [acquired the team in July 2025](https://techcrunch.com/2025/07/18/cursor-snaps-up-enterprise-startup-koala-in-challenge-to-github-copilot/) and the product [shut down on September 30, 2025](https://getkoala.com/pricing). Many lists still include it, so check before you shortlist.

**Leadpipe.** [Pro starts at $147/month](https://www.leadpipe.com/pricing) for 500 identified profiles, with a 7-day free trial (as of September 2026). Person-level matching is US-only; EU and UK visitors fall back to company data.

**Where gtmind fits.** gtmind isn't a visitor identification tool. It doesn't resolve IP addresses or reveal people. It reads Search Console, GA4 and your CRM (read-only), joins them into one model, and ranks what to do next by revenue. Its pipeline agent finds high-intent accounts and pushes that segment to your CRM, so it sits downstream of whatever identification you already have.

## The workflow: signal, score, CRM task

A list of identified companies in a dashboard changes nothing. What changes outcomes is a workflow that turns a signal into a named person's task within a day. Here is a simple version any team can build, whether by hand, in a [GTM engineer's](/blog/gtm-engineer) Clay table or with an agent.

1. **Capture.** Tag the high-intent pages (pricing, comparison, integrations, docs) as events in GA4 and in your identification tool.
2. **Resolve.** Match the visit to an account. Use the identification tool for anonymous visits and the CRM for known contacts.
3. **Filter.** Drop customers, competitors, staff, agencies and accounts outside your ideal customer profile.
4. **Score.** Add up the signal weights from the table above over a rolling 7-day window. Add points for fit (size, industry) and for an open opportunity.
5. **Route.** Above a threshold, create a CRM task for the account owner with the pages viewed and a due date. No owner? Route to a round-robin queue.
6. **Learn.** Each quarter, compare scored accounts against closed-won deals. Raise the weights of signals that predicted wins and cut the rest.

Speed matters more than volume. A task created a week after the pricing visit is a cold call with extra steps.

An illustrative example of the kind of play gtmind's [pipeline agent](/#agents) surfaces (not real customer data): "Four accounts in your ICP read the pricing page and the comparison page this week, but none has an open deal or an assigned owner. Pushing them to the CRM as a segment with a follow-up task." The agent writes to the CRM only after you switch it on, and each change can be rolled back.

This is also where [AI marketing agents](/blog/ai-marketing-agents) earn their keep: the scoring and routing steps are repetitive, rule-shaped and easy to check, which makes them good first jobs to hand over.

## Setting up website visitor tracking in a week

- **Day 1:** Confirm your consent banner loads before any identification script for EU, UK and Indian visitors. Update the privacy notice.
- **Day 2:** Set up GA4 events for high-intent pages and make sure form fills pass into your CRM with the landing page attached.
- **Day 3:** Start a trial of one identification tool that matches your traffic geography.
- **Days 4-5:** Define the filters and scoring weights. Agree with sales on the threshold and the follow-up window.
- **Days 6-7:** Turn on routing for a small segment and review every task by hand for a week before scaling.

If the join between your analytics, search data and CRM is the missing piece, [see how gtmind reads those sources](/#sources) without needing write access.
