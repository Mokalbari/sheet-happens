import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { classes } from "./classes";
import { subclasses } from "./subclasses";
import { systems } from "./systems";

export const classFeatures = pgTable("class_features", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  slug: text("slug").notNull().unique(),
  defaultName: text("default_name").notNull(),
  defaultDescription: text("default_description"),

  classId: integer("class_id")
    .notNull()
    .references(() => classes.id),
  subclassId: integer("subclass_id").references(() => subclasses.id),
  systemId: integer("system_id")
    .notNull()
    .references(() => systems.id),

  level: integer("level").notNull(),
  featureType: text("feature_type").notNull(), // e.g., "ability", "spellcasting", "proficiency", etc.

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
