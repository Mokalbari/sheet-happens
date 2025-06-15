import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { species } from "./species";
import { systems } from "./systems";

export const speciesTraits = pgTable("species_traits", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  speciesId: integer("species_id")
    .notNull()
    .references(() => species.id),
  slug: text("slug").notNull().unique(),
  defaultName: text("default_name").notNull(),
  defaultDescription: text("default_description"),
  systemId: integer("system_id")
    .notNull()
    .references(() => systems.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
