import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { abilities } from "./abilities";
import { systems } from "./systems";

export const skills = pgTable("skills", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  slug: text("slug").notNull().unique(),
  defaultName: text("default_name").notNull(),
  defaultDescription: text("default_description"),
  systemId: integer("system_id")
    .notNull()
    .references(() => systems.id),
  abilityId: integer("ability_id")
    .notNull()
    .references(() => abilities.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
