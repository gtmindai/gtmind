import { existsSync } from "node:fs";
import { defineConfig } from "drizzle-kit";

if (existsSync(".env")) process.loadEnvFile();

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.js",
  out: "./drizzle",
  dbCredentials: { url: process.env.DATABASE_URL },
});
