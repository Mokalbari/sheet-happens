import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

const systemEnum = pgEnum("system", ["dnd5e"]);

export const systemsTable = pgTable("systems", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  system: systemEnum("system").notNull(),
  slug: varchar({ length: 255 }).notNull().unique(),
  isHomebrew: boolean("is_homebrew").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
