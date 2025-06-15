import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { systems } from "./systems";

export const abilities = pgTable("abilities", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  slug: text("slug").notNull().unique(),
  systemId: integer("system_id")
    .notNull()
    .references(() => systems.id),
  defaultName: text("default_name").notNull(),
  defaultDescription: text("default_description"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
