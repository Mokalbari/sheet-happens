import { boolean, jsonb, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { AbilityTypeEnum } from "../enums";
import { systems } from "./systems";

export const abilities = pgTable("abilities", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  systemId: text("system_id")
    .notNull()
    .references(() => systems.id),
  name: text("name").notNull(),
  slug: text("slug").notNull(),
  description: text("description"),
  origin: text("type", { enum: AbilityTypeEnum }).notNull(),
  usageInfo: jsonb("usage_info").notNull().default({}),
  isHomebrew: boolean("is_homebrew").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
