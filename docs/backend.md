# Backend

Express 5 + PostgreSQL, in [`backend/`](../backend). For the reasoning behind the stack, see [system-design.md](system-design.md).

## Run it locally

```bash
cd backend
cp .env.example .env
docker compose up -d        # local Postgres on :5432 (or point DATABASE_URL at Neon/Railway)
npm install
npm run db:migrate          # create the tables
npm run dev                 # http://localhost:4000, restarts on file changes
```

Check it: `curl localhost:4000/health` → `{"status":"ok"}`, and `curl localhost:4000/health/ready` → `{"status":"ok","database":"up"}`.

## Folder structure

```text
backend/
├── drizzle/                  generated SQL migrations (commit these)
├── drizzle.config.js         migration tool config
├── docker-compose.yml        local Postgres
└── src/
    ├── server.js             starts the HTTP server, graceful shutdown
    ├── app.js                builds the Express app: middleware → routes → errors
    ├── config/env.js         reads + validates env vars with Zod; exits if invalid
    ├── db/
    │   ├── client.js         pg pool + Drizzle instance
    │   ├── migrate.js        applies drizzle/ migrations (no dev tools needed)
    │   └── schema.js         every table, in one place
    ├── lib/
    │   ├── logger.js         pino (JSON logs)
    │   └── errors.js         HttpError(status, message, code)
    ├── middleware/
    │   ├── notFound.js
    │   └── errorHandler.js   one error shape for every failure
    └── modules/
        └── health/           GET /health, GET /health/ready
```

**One folder per feature** under `modules/`. Each module grows the same way:

```text
modules/connections/
├── connections.routes.js    HTTP only: parse input, call the service, send JSON
├── connections.service.js   business logic, database access
└── providers/google.js      third-party API calls
```

Routes never talk to the database directly; services never see `req`/`res`. That keeps logic testable and reusable from the worker.

## Scripts

| Script | What it does |
|---|---|
| `npm run dev` | Start with `--watch`, loading `.env` |
| `npm start` | Production start (env comes from the host) |
| `npm run db:generate` | After editing `schema.js`: write a new SQL migration into `drizzle/` |
| `npm run db:migrate` | Apply pending migrations to `DATABASE_URL` (runs `src/db/migrate.js`; also Railway's pre-deploy step) |
| `npm run db:studio` | Browse the database in a local web UI |

Changing the schema is always: edit `schema.js` → `db:generate` → review the SQL → commit → `db:migrate`.

## API conventions

| Rule | Detail |
|---|---|
| Base URL | `https://api.gtmind.in` (local: `http://localhost:4000`) |
| Versioning | Product routes under `/v1/...`; `/health` stays unversioned for the host's health checks |
| Format | JSON in, JSON out |
| Validation | Every body, query and param parsed with a Zod schema; failures return 400 automatically |
| Auth | Session cookie `gtm_session`; `requireAuth` middleware loads `req.user` and `req.org` |
| Errors | Always `{ "error": { "code": "not_found", "message": "..." } }`. 5xx responses never leak internals |
| IDs | UUIDs in URLs |

### Planned endpoints

| Method + path | Phase | Purpose |
|---|---|---|
| `POST /v1/webhooks/cal` | 1 | Store a booking as a lead |
| `GET /v1/auth/google/start`, `GET /v1/auth/google/callback` | 1 | Sign in with Google |
| `POST /v1/auth/logout`, `GET /v1/me` | 1 | Session management |
| `GET /v1/connections` | 2 | List connected sources |
| `GET /v1/connections/:provider/start`, `.../callback` | 2 | OAuth connect flow |
| `DELETE /v1/connections/:id` | 2 | Disconnect + delete synced data |
| `POST /v1/connections/:id/sync` | 2 | Trigger a sync now |
| `GET /v1/plays` | 4 | Ranked plays |
| `POST /v1/plays/:id/approve`, `.../dismiss` | 5 | Human decision on a play |
| `POST /v1/agent-changes/:id/revert` | 5 | Roll back one agent change |

## Background jobs (phase 2)

A second entry point, `src/worker.js`, runs [pg-boss](https://github.com/timgit/pg-boss) against the same database.

| Job | Trigger | Does |
|---|---|---|
| `sync:gsc`, `sync:ga4`, `sync:crm` | Hourly schedule + on connect | Pull the last N days, upsert into source tables, write a `sync_runs` row |
| `score:plays` | After any sync finishes | Recompute play values for that org |
| `agent:run` | Play approved | Execute the play, log each write to `agent_changes` |
| `outcome:check` | 3 and 6 weeks after a play ships | Compare metric before/after, write `outcomes` |

Rules for every job: **idempotent** (safe to run twice), **scoped to one organization**, **retried with backoff** on provider errors, and **singleton per connection** so two syncs never overlap.

## Environment variables

| Name | Needed from | Purpose |
|---|---|---|
| `NODE_ENV` | now | `development` / `production` |
| `PORT` | now | HTTP port (hosts usually set it) |
| `DATABASE_URL` | now | Postgres connection string |
| `CORS_ORIGINS` | now | Comma-separated allowed origins, e.g. `https://app.gtmind.in` |
| `LOG_LEVEL` | now | `info` by default |
| `CAL_WEBHOOK_SECRET` | phase 1 | Verifies Cal.com webhook signatures |
| `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` | phase 1 | Sign-in and Search Console / GA4 access |
| `APP_URL`, `API_URL` | phase 1 | Redirect targets for OAuth |
| `TOKEN_ENCRYPTION_KEY` | phase 2 | 32-byte key (base64) for encrypting OAuth tokens |
| `HUBSPOT_CLIENT_ID`, `HUBSPOT_CLIENT_SECRET` | phase 3 | CRM access |

New variables must be added to `src/config/env.js` **and** `.env.example` together, so the app refuses to start with a missing value instead of failing later.

## Deploying on Railway

Build and deploy settings live in [`backend/railway.json`](../backend/railway.json), so they are versioned with the code: pre-deploy migrations, start command, health check, restart policy, and redeploying only when `backend/` changes.

Two settings can't live in that file and are set once in the service's **Settings**:

| Setting | Value |
|---|---|
| Source → Root Directory | `backend` |
| Config-as-code → Railway Config File | `/backend/railway.json` |

Variables (**Variables** tab): `DATABASE_URL=${{Postgres.DATABASE_URL}}`, `NODE_ENV=production`, `CORS_ORIGINS=https://www.gtmind.in`. `PORT` is set by Railway.
