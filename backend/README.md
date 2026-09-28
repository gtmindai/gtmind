# gtmind backend

Express 5 + PostgreSQL API for gtmind.

```bash
cp .env.example .env
docker compose up -d
npm install
npm run db:migrate
npm run dev
```

Structure, conventions, endpoints and env vars: [docs/backend.md](../docs/backend.md). Architecture and reasoning: [docs/system-design.md](../docs/system-design.md).
