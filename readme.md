# GTMind

> Your company's intelligence layer.

GTMind is a unified business intelligence platform that connects your company's data sources and turns fragmented data into a clear view of customers, marketing, and revenue.

## Overview

Businesses use multiple platforms to manage different parts of their operations:

- Google Analytics 4
- Google Search Console
- CRM
- Google Ads
- Meta Ads
- Payment platforms
- And other business tools

The problem is that this data is often scattered across different platforms.

**GTMind brings these data sources together to help businesses understand:**

- Where customers are coming from
- Which channels are driving revenue
- How marketing is performing
- Where opportunities are being lost
- How different business activities contribute to revenue

### The Goal

```text
GSC ───────┐
GA4 ───────┤
CRM ───────┤
Ads ───────┤
Payments ──┤
Other ─────┘
              ↓
          ┌─────────┐
          │ GTMind  │
          └────┬────┘
               ↓
      Unified Business
        Intelligence
               ↓
        Revenue Insights```

## Repository

```text
gtmindai/
├── frontend/   marketing site — React + Vite + Tailwind, prerendered, deployed on Vercel
├── backend/    API + background jobs — Node + Express + PostgreSQL
└── docs/       system design and guides
```

| Part | Start locally | Guide |
|---|---|---|
| Frontend | `cd frontend && npm install && npm run dev` | [docs/frontend.md](docs/frontend.md) |
| Backend | `cd backend && cp .env.example .env && docker compose up -d && npm install && npm run db:migrate && npm run dev` | [docs/backend.md](docs/backend.md) |

## Documentation

- [System design](docs/system-design.md) — architecture, why each technology, key flows, security, deployment
- [Data model](docs/data-model.md) — tables and how search, traffic and revenue join
- [Frontend](docs/frontend.md) — prerendering, structure, routes, Vercel setup
- [Backend](docs/backend.md) — structure, API conventions, jobs, env vars
- [Roadmap](docs/roadmap.md) — build order, phase by phase
