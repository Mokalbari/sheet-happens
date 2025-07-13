import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { systems } from "./systems";
import { species } from "./species";

export const subspecies = pgTable("subspecies", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  slug: text("slug").notNull().unique(),
  speciesId: integer("species_id")
    .notNull()
    .references(() => species.id),
  defaultName: text("default_name").notNull(),
  defaultDescription: text("default_description"),
  systemId: integer("system_id")
    .notNull()
    .references(() => systems.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
