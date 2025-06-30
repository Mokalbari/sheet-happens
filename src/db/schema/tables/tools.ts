import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { abilities } from "./abilities";
import { systems } from "./systems";

export const tools = pgTable("tools", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  slug: text("slug").notNull().unique(),
  defaultName: text("default_name").notNull(),
  defaultDescription: text("default_description"),

  abilityId: integer("ability_id").references(() => abilities.id),
  weight: integer("weight"),
  value: integer("value"),

  systemId: integer("system_id")
    .notNull()
    .references(() => systems.id),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
