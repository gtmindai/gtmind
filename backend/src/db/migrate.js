import { fileURLToPath } from "node:url";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { logger } from "../lib/logger.js";
import { db, pool } from "./client.js";

await migrate(db, { migrationsFolder: fileURLToPath(new URL("../../drizzle", import.meta.url)) });
logger.info("migrations applied");
await pool.end();
