import {
  integer,
  pgEnum,
  pgTable,
  primaryKey,
  text,
  timestamp,
  unique,
  uuid,
} from "drizzle-orm/pg-core";

const createdAt = () => timestamp("created_at", { withTimezone: true }).notNull().defaultNow();

export const memberRole = pgEnum("member_role", ["owner", "admin", "member"]);
export const provider = pgEnum("provider", ["google", "hubspot", "salesforce"]);
export const connectionStatus = pgEnum("connection_status", ["active", "error", "revoked"]);
export const syncStatus = pgEnum("sync_status", ["queued", "running", "succeeded", "failed"]);

export const organizations = pgTable("organizations", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  createdAt: createdAt(),
});

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  name: text("name"),
  avatarUrl: text("avatar_url"),
  createdAt: createdAt(),
});

export const memberships = pgTable(
  "memberships",
  {
    organizationId: uuid("organization_id")
      .notNull()
      .references(() => organizations.id, { onDelete: "cascade" }),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    role: memberRole("role").notNull().default("member"),
    createdAt: createdAt(),
  },
  (t) => [primaryKey({ columns: [t.organizationId, t.userId] })],
);

// Stores a hash of the session token, never the token itself.
export const sessions = pgTable("sessions", {
  id: text("id").primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  createdAt: createdAt(),
});

// OAuth tokens are encrypted before they reach this table.
export const connections = pgTable(
  "connections",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    organizationId: uuid("organization_id")
      .notNull()
      .references(() => organizations.id, { onDelete: "cascade" }),
    provider: provider("provider").notNull(),
    externalAccountId: text("external_account_id").notNull(),
    scopes: text("scopes").array().notNull().default([]),
    accessTokenEnc: text("access_token_enc"),
    refreshTokenEnc: text("refresh_token_enc"),
    tokenExpiresAt: timestamp("token_expires_at", { withTimezone: true }),
    status: connectionStatus("status").notNull().default("active"),
    lastSyncedAt: timestamp("last_synced_at", { withTimezone: true }),
    createdAt: createdAt(),
  },
  (t) => [unique().on(t.organizationId, t.provider, t.externalAccountId)],
);

export const syncRuns = pgTable("sync_runs", {
  id: uuid("id").primaryKey().defaultRandom(),
  connectionId: uuid("connection_id")
    .notNull()
    .references(() => connections.id, { onDelete: "cascade" }),
  kind: text("kind").notNull(),
  status: syncStatus("status").notNull().default("queued"),
  rowsWritten: integer("rows_written").notNull().default(0),
  error: text("error"),
  startedAt: timestamp("started_at", { withTimezone: true }),
  finishedAt: timestamp("finished_at", { withTimezone: true }),
  createdAt: createdAt(),
});
