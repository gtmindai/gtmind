import { sql } from "drizzle-orm";
import { Router } from "express";
import { db } from "../../db/client.js";

export const healthRouter = Router();

healthRouter.get("/", (_req, res) => {
  res.json({ status: "ok" });
});

healthRouter.get("/ready", async (req, res) => {
  try {
    await db.execute(sql`select 1`);
    res.json({ status: "ok", database: "up" });
  } catch (err) {
    req.log.warn({ err }, "database check failed");
    res.status(503).json({ status: "degraded", database: "down" });
  }
});
